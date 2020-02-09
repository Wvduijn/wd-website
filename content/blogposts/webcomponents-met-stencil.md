
## Webcomponents met Stencil

Jullie hebben vast wel gehoord van de laatste buzz in front-end land, web components.
Om framework agnostic te zijn (naast tal van andere redenen), is de opkomst van web components in volle gang. In deze post wil ik met jullie kijken naar wat een web component nu eigenlijk is en hoe we er zelf 1 kunnen bouwen.
Om het bouwen van web components eenvoudiger te maken, is het team van Ionic met Stencil op de proppen gekomen, een reusable web component compiler. Deze post zullen we dan ook Stencil daadwerkelijk gaan gebruiken.

In deze post gaan we:
*Een simpele, herbruikbare Web component met Stencil bouwen
*Web component publishen naar NPM
*Het component importeren in een framework (in dit geval VUE)

Let's get started!

### Wat zijn web components?

Webcomponenten zijn een set webplatform-API's waarmee je nieuwe aangepaste, herbruikbare, ingekapselde HTML-tags kunt maken voor gebruik in webpagina's en web-apps. Aangepaste componenten en widgets bouwen voort op de Web Component-normen, werken in moderne browsers en kunnen worden gebruikt met elke JavaScript-framework of elk framework dat met HTML werkt.

Webcomponenten zijn gebaseerd op bestaande webstandaarden. Functies ter ondersteuning van webcomponenten worden momenteel toegevoegd aan de HTML- en DOM-specificaties, waardoor webontwikkelaars HTML eenvoudig kunnen uitbreiden met nieuwe elementen met ingekapselde stijl en aangepast gedrag.

Met dit in ons achterhoofd gaan we zelf aan de slag met het bouwen van een webcomponent.

### Mijn eerste herbruikbare web component.... like a virgin!

We gaan een simpele video achtergrond maken welke we vaker terugzien in vele landings pagina's.
Een webcomponent bouwen in ons eigen project en een herbruikbare goed onderhouden versie op NPM is geen eenvoudige opgave. Er is flink wat configuratie voor nodig om er zeker van te zijn dat alles naar behoren werkt.
Gelukkig voor ons heeft het Stencil team een [Starter project](https://github.com/ionic-team/stencil-component-starter) waarin alles wat we nodig hebben al is ingebakken. Nice!

Dus laten we deze repo forken en dit als basis voor ons component pakken.

```console
git clone https://github.com/ionic-team/stencil-component-starter.git my-background-video-component
cd my-background-video-component
git remote rm origin
```

Installeer de node modules.

```console
npm install
```

Zo zou de project structuur eruit moeten zien:

img van code folder structuur

Wat we willen gebruiken is de components folder. Dit is de folder waar je componenten zal gaan toevoegen. Dus, ja, dit project is ook al geschikt om meerdere componenten te publishen in 1 keer. Handig toch?
Als je kijkt in de my-component folder, zul je vrij snel begrijpen hoe alles werkt. Als je al eerder eens componenten met bijvoorbeeld VUE of Angular hebt gemaakt zal het allemaal vrij bekend voor komen.
Wanneer je een beetje gekeken en gespeeld hebt met dit component, kan je het verwijderen. Ook de utils folder kan ge-delete worden want die gaan we ook niet nodig hebben.

Ik zal het in deze post niet over Unit- en End to End tests hebben. Als je hier meer infomatie over wil hebben verwijs ik je naar de [Stencil Docs](https://stenciljs.com/docs/unit-testing).

Laten we een *my-background-video-component* aanmaken. Maak de folder aan in components. Maak hier de .tsx en de .css file aan.
Gaat je voorkeur uit naar scss? dit kan uiteraard ook maar hier is wat [extra configuratie](https://stenciljs.com/docs/plugins) voor nodig.

img van folder structuur

Laten we het vooral simpel houden. We willen 3 properties op ons video element
* de video source :src
* De fallback image :poster
* De Mute state van de video :muted

zo ziet de *my-background-video-component.tsx* eruit:

```javascript
import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'my-background-video-component',
  styleUrl: 'my-background-video-component.css',
  shadow: true
})
export class MyBackgroundVideoComponent {
  /**
   * De video src
   */
  @Prop() src: string;

  /**
   * De image die getoond wordt wanneer de video aan het laden is
   */
  @Prop() poster: string;

  /**
   * To mute the video
   */
  @Prop() muted: boolean = true;

  @Element() private videoElement: HTMLVideoElement; // referentie naar het aangemaakt video element

  componentDidLoad() {
    // soms als de video dynamisch geladen wordt, start deze met geluid, zelfs als muted op true staat
    if (this.muted) {
      this.videoElement.muted = true;
    }
  }

  render() {
    return <video autoplay loop playsinline preload="auto" muted={this.muted} src={this.src} poster={this.poster}></video>;
  }
}
```

Ok, ik heb een heel klein beetje complexiteit toegevoegd maar dit is meer om aan te geven wat we kunnen doen met dit component.
ik heb een @Element() ref toegevoegd aan het HTML video element om het mogelijk te maken de video the muten in de componentDidLoad [lifecycle method](https://stenciljs.com/docs/component-lifecycle).
Maar jullie volgen het nog toch..?

Ik zal niet in de details duiken van dit eenvoudige stukje css. Het plaatst de video op de juiste plek in de achtergrond.
Hier is het *my-background-video-component.css* bestand:

```css
video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
}
```

We hoeven alleen de video tag te specificeren want de css zal alleen toegepast worden op dit component. Dit omdat we gebruik maken van de Shadow DOM, welke de css scoped op alleen dit component.
Super handig wanneer je er zeker van wilt zijn dat er geen css bleeding is. Meer informatie over Shadow DOM etc is te vinden in de [docs van Stencil](https://stenciljs.com/docs/styling).

That's it eigenlijk voor dit eenvoudige component. Het is af en klaar voor gebruik!

### Ons component gebruiken

Ok top! We hebben een component gebouwd maar hoe kunnen we het component testen om te kijken of het ook daadwerkelijk werkt?
Allereerst moeten we het component bouwen, maar daarvoor moeten we erst de *namespace in stencil.config.ts* aanpassen

```javascript
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-background-video-component',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
```

daarna runnen we het commando:

```console
npm run build
```

Het web component zal nu gebouwd worden in de *dist* folder. Dit is ook de folder die straks beschikbaar is in de NPM package die we nog gaan publishen.

Hierna passen we de index.html aan en roepen we ons component aan en zorgen ervoor dat het een voorbeeld video afspeelt.

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
  <title>Stencil Component Starter</title>
  <script src="/build/my-background-video-component.js"></script> <!-- import the component -->

</head>
<body>

  <my-background-video-component
    src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
    poster="https://sample-videos.com/img/Sample-png-image-500kb.png">
  </my-background-video-component>

</body>
</html>
```

Het Stencil template project heeft al een lightweight servertje ingebakken om je component uit te proberen.
Om de webserver te starten run je:

```console
npm run start
```
En voila! Je component werkt nu op een webpagina.
Je ziet eerst de fallback image en daarna zal de video starten met afspelen. De video zal wel eerst echt even een stukke moeten laden alvoren te starten.

### Het component publishen op NPM
We gaan het component niet echt publishen omdat het maar een voorbeeld is.
Maar ik zal in ieder geval laten zien hoe het in zijn werk gaat.

Dus hoe..?
Als je je package wil publishen naar NPM moeten we natuurlijk de *package.json* aanpassen en omschrijven wat we willen.

```javascript
{
  "name": "my-background-video-component",
  "version": "0.0.1",
  "description": "A Stencil Component for a fullscreen video playing in the background of a web page",
  "module": "dist/esm/index.js",
  "main": "dist/index.js",
  "unpkg": "dist/ionic.js",
  "types": "dist/types/components.d.ts",
  "collection": "dist/collection/collection-manifest.json",
  "files": [
    "dist/"
  ],
  "scripts": {
    "build": "stencil build --docs",
    "start": "stencil build --dev --watch --serve",
    "test": "stencil test --spec --e2e",
    "test.watch": "stencil test --spec --e2e --watchAll"
  },
  "dependencies": {},
  "devDependencies": {
    "@stencil/core": "~0.16.2"
  },
  "license": "MIT"
}
```

Vergeet hierbij ook niet de readme.md aan te passen om te omschrijven hoe developers jouw package moeten gebruiken.

Publishen naar NPM doen we als volgt:
```console
npm publish
```

Als dit de eerste keer is dat je gaat publishen naar NPM dient er wel eerst een gebruiker aangemaakt te worden.
Hoe je dat doet vind je in de [documentatie van NPM](https://docs.npmjs.com/creating-a-new-npm-user-account).

En dat is het! je component is nu publiek beschikbaar op NPM!

### Hoe te gebruiken in andere Frameworks?

Het integreren van het component in een ander framework is redelijk eenvoudig.
Voor dit voorbeeld zal ik laten zien hoe je een webcomponent kan integreren met VUE.

#### Eerste stap is om de npm package te installeren die gepublished is

Ga naar je vue app en run daar:

```console
npm install --save packagenaam
```

Om de Custom Element Library in de vue app te gebruiken , moeten we de applicatie een klein beetje aanpassen om de custom elementen te definen en de VUE compiler te informeren welke elementen te negeren tijdens compilatie.
Dit zal moeten omdat de VUE compiler anders zal aangeven dat er onjuiste niet gedefineerde elementen worden gebruikt.

Dit kunnen we allemaal doen in de *main.js* van de applicatie.

Stel dat we de componenten hebben geinstalleerd met *npm install --save test-components* en dat *test-component* de naam is van het component...
Dan kunnen we de main.js aanpassen door

* De node module te importeren
* VUE te vertellen de custom element tags te negeren
* Het Stencil component te binden aan het window object

```javascript
import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from 'test-components/loader';

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/test-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: h => h(App)
}).$mount('#app');
```
De componenten zouden nu beschikbaar moeten zijn in alle Vue componenten

```javascript
render() {
  return (
    <div>
      <test-stencil-component></test-stencil-component>
    </div>
  )
}
```

### Conclusie
Het web evolueert snel. Een nieuw tijdperk van generieke, framework agnostic, Web Components komt eraan. Laten we het dus omarmen en beginnen met het maken van geweldige herbruikbare webcomponenten met Stencil!























