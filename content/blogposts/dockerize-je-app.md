## Dockerize je VUE applicatie

Het is tegenwoordig gebruikelijk om front-end- en back-endservices in Docker-containers uit te voeren. De front-end service praat meestal met behulp van een API met de back-end service.

In deze post zullen we het volgende behandelen:

* Een op Docker gebaseerde ontwikkelomgeving opzetten met hot reloading
* Een production ready Docker-image bouwen met API-url die doorgegeven wordt door environment variables.

Om docker te kunnen gebruiken wel eerst even een account aanmaken en installeren via [Docker.com](https://www.docker.com/get-started)

### Op Docker gebaseerde development environment opzetten met hot reloading

We zullen de [Vue Cli 3](https://cli.vuejs.org/) gaan gebruiken om onze vue.js app te maken.

Eerst installeren we de vue cli met npm of yarn.
```console
npm install -g @vue/cli
# OF
yarn global add @vue/cli
```

Nieuw project aanmaken

```console
 vue create dockerized-app
```

Zodra de bovenstaande opdracht is voltooid, wijzig je de map in **dockerized-app** en voer je het command **npm run serve** uit. Hiermee wordt de toepassing op poort 8080 gestart - [http://localhost:8080/](http://localhost:8080/)
Mocht je de poort willen wijzigen dan kan dat door in de commandline een andere poort te specificeren **npm run serve -- --port 5000** of in een config file in de root van je project:

```javascript
module.exports = {
    devServer: {
      port: 5000
    }
  }
```

Nu gaan we een dockerfile toevoegen in de root van het project. Deze Dockerfile (gewoon een nieuw bestand aanmaken met de naam Dockerfile) zal gebruikt worden voor local development.


```javascript
# base image
FROM node:10.15.0
 
# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
 
# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
 
# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @vue/cli
# start app
CMD ["npm", "run", "serve"]
```

Het bovenstaande maakt een Docker-afbeelding met alle dependencies. Het bevat niet de broncode van je app. Die leeft nog steeds op je machine.
De npm-packages worden opnieuw gebruikt zolang je package.json niet wijzigt. Zodra je je package.json hebt gewijzigd, zul je een nieuwe dockerimage moeten maken om alle nieuwe dependencies weer te kunnen installeren.

Vervolgens zullen we de Docker-afbeelding gaan bouwen. Maar voordat we dat doen, voegen we de map *node_modules* toe aan het *.dockerignore* (deze dus even aanmaken) bestand. 
Dit versnelt het Docker-buildproces omdat onze lokale dependencies niet naar de Docker-daemon worden verzonden.

Voer de volgende opdracht uit om de Docker-afbeelding te maken.

```console
docker build -t dockerized-app.
```

Nu kun je de Docker-container laten draaien

```console
docker execute -it -v $ {PWD}: /usr/src/app -v /usr/src/app/node_modules -p 8080: 8080 myapp
```
Het belangrijke punt om op te merken in bovenstaand command is het gebruik van de flag -v.

1. De eerste flag van -v koppelt de broncode in je huidige map naar de map */usr/src/app* in de container.
2. De tweede flag -v zorgt ervoor dat de *host node_modules* de *node_modules* van de container niet overschrijven. Om ervoor te zorgen dat we een datavolume maken voor */usr/src/app/node_modules*. 

Als je het command *docker run* uitvoert zonder de tweede flag -v, krijg je de fout *vue-cli-service: not found*.
Open nu je browser en ga naar [http://localhost:8080/](http://localhost:8080/). Je zou nu je Vue app moeten zien draaien. 
Je kan een wijziging aanbrengen in je editor en deze wordt onmiddellijk weerspiegeld in de browser. Dat is hot reloading in actie.

### Production ready Docker image aanmaken met API url vanuit .env

We zullen een aparte Dockerfile voor productie aanmaken. Laten we hem *Dockerfile-prod* noemen.

```javascript
FROM node:10.15.0 as ui-builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @vue/cli
COPY . /usr/src/app
RUN npm run build
 
FROM nginx
COPY  --from=ui-builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Het bovenstaande maakt gebruik van de [multi-stage build-functie](https://docs.docker.com/develop/develop-images/multistage-build/) van Docker. 
De eerste helft van het Docker-bestand bouwt de artefacts en de tweede helft gebruikt die artefacts en maakt er een nieuwe image van.

Om de productie image te maken runnen we:
```console
docker build -f Dockerfile-prod -t dockerize-app-prod .
```
Je zal zien dat de productie image veel kleiner is in vergelijking met de development versie. De productie image is 1/10 van de development image. Huge!

```console
docker images|grep dockerize-app

dockerize-app-prod
dockerize-app
```

Je kan de container runnen door
```console
docker run -it -p 80:80 --rm dockerize-app-prod
```

De app is nu beschikbaar op [http://localhost](http://localhost)

### Environment variable passen aan onze image
Het is een veel voorkomende vereiste voor frontend-applicaties om via API's met de backend te communiceren. 
Vue.js ondersteunt omgevingsvariabelen die we tijdens de build kunnen doorgeven.

Om de .env variabele door te geven aan Docker tijdens de build van de app, zullen we de Dockerfile-prod veranderen in het volgende:

```javascript
FROM node:10.15.0 as ui-builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @vue/cli
COPY . /usr/src/app
ARG VUE_APP_API_URL
ENV VUE_APP_API_URL $VUE_APP_API_URL
RUN npm run build
 
FROM nginx
COPY  --from=ui-builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

In het hierboven weergegeven Docker-bestand hebben we regelnummer 9 en 10 toegevoegd. 
Wanneer we de image gaan bouwen, moeten we het argument *VUE_APP_API_URL* doorgeven. Dit wordt vervolgens gebruikt door *npm run build*.

Om de image bouwen:
```console
docker build --build-arg VUE_APP_API_URL=http://api.example.com/api -f Dockerfile-prod -t myapp-prod .
```

Nu kunnen we bij *VUE_APP_API_URL* in onze code door *process.env.VUE_APP_API_URL* te gebruiken.

Om dit te testen veranderen we de gegenereerde *App.vue* een beetje.

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
 
  </div>
</template>
 
 
import HelloWorld from './components/HelloWorld.vue'
 
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      apiUrl: process.env.VUE_APP_API_URL
    }
  }
}
 
 
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```


We hebben apiUrl als data prop aangegeven. Nu in *HelloWorld.vue* kan je een regel onder de h1 toevoegen
```html
<h2>API URL is {{ apiUrl }}</h2>
```

De applicatie zal nu de *apiUrl* renderen op de pagina!

Bouw nu de image opnieuw en run de container en we zijn done!
Zo kan je dus mooi je app dockerizen!



















