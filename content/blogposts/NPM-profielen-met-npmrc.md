## NPM profielen met NPMRC
Het kan voorkomen dat je werkgever een eigen enterprise registry heeft. 
Hierdoor kan het soms handig zijn deze als default registry in te stellen of meerdere profielen aan te maken zodat je gemakkelijk kunt switchen.
Hoe vraag je je dan af? Daar zullen we het over hebben in deze post.

### Registry settings configureren als een npm Enterprise gebruiker

Je kunt je npm-client configureren om te publiceren naar en te installeren vanuit je privé npm Enterprise-registry door:

* Het npm Enterprise-register van uw bedrijf instellen als uw standaardregister (aanbevolen)
* Npmrc gebruiken om meerdere profielen voor verschillende registers te beheren
* Scopes configureren om naar verschillende registers te wijzen

### Het npm Enterprise-registry van je bedrijf instellen als je standaard registry

De eenvoudigste manier om te publiceren naar en te installeren vanuit het npm Enterprise-registry van je bedrijf, is om dit in te stellen als je standaardregister.

Voer op de opdrachtregel de volgende opdracht uit, waarbij "jouw-registry" wordt vervangen door de naam van het npm Enterprise-registry van je bedrijf:

```console
npm config set register https://registry.jouw-registry.npme.io/
```

### NPMRC gebruiken om meerdere profielen met verschillende registries te managen

Als je packages van en naar verschillende registries moet publiceren en installeren - bijvoorbeeld een npm Enterprise-registry voor werkgerelateerde code en het openbare registry van npmjs.com voor open source-projecten - kan je een afzonderlijk npm-gebruikersprofiel maken en beheren voor elke registry met behulp van het hulpprogramma npmrc.

#### Overzicht van de stappen welke we gaan doorlopen

* npmrc installeren
* npm enterprise profiel aanmaken
* publiek npm profiel aanmaken
* van profiel switchen met npmrc

#### Installatie van npmrc

om npmrc te installeren run je in de commandline:
```console
npm i npmrc -g
```

#### Enterprise npm profiel aanmaken

Nadat npmrc geinstalleerd is kan je een profiel aanmaken om toegang te krijgen tot de registry van je bedrijf.

1. Als u een npm Enterprise-profiel wilt maken, voert u in de commandline **npmrc -c name-of-profile** uit. Voer bijvoorbeeld het volgende command uit om een ​​profiel met de naam "werk" te maken:
```consoled
npmrc -c work
```

2. Om een ​​npm Enterprise-registry voor het profiel in te stellen, voer je het volgende command uit, waarbij je bedrijfsregistry wordt vervangen door de naam van het npm Enterprise-registry van je bedrijf:
```console
npm config set registry https://registry.jouw-bedrijf-registry.npme.io/
```

#### Publiek registry profiel aanmaken

Nadat je een npm Enterprise profiel hebt aangemaakt kan je ook een 2e profiel aanmaken voor een andere registry, in dit geval dus voor de [publieke npm registry](https://registry.npmjs.com/)

1. Als u een profiel voor het openbare registry wilt maken, voer je op de opdrachtregel **npmrc -c name-of-profile** uit. Als je bijvoorbeeld een profiel met de naam "open-source" wilt maken, voer je **npmrc -c open-source** uit.
2. Voer het volgende command uit om het openbare register voor uw open source-profiel in te stellen:
```console
npm config set registry https://registry.npmjs.com/
```

#### Switchen van profiel
Om van profiel te switchen voer je in de commandline het volgende command uit, waar profiel-naam de naam van je profiel is.
```console
npmrc profiel-naam
```

### Scopes configureren om naar verschillende registries te verwijzen
Je kan ook verschillende scopes toewijzen aan verschillende npm-registries. Als je bijvoorbeeld de scope **@ bedrijf-scope** uit je npm Enterprise-registry wilt gebruiken, terwijl je doorgaat met het installeren van openbare pakketten vanuit het openbare npm-registry, voer je het volgende command uit, vervang je **@ bedrijf-scope** door de scope en bedrijfsregistry door de naam van het npm Enterprise-registry van je bedrijf:
```console
npm login --scope=@bedrijf-scope --registry=https://registry.bedrijf-registry.npme.io/
```

Persoonlijk vind ik deze werkwijze zeer handig en hoop dat jullie er ook wat aan hebben.