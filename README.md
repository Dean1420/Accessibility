# Thema
>Projekt für das Modul Accessibility
>
> Erstelltt von: 
> + Dean Braband 

<br>
<br>

## Programme der Umgebung bekannt machen
> Die Binärdateien von Node.js müssen der Umgebung bekannt gemacht werden
>
>`export PATH="$HOME/Desktop/Accessibility.git/node-v24.11.0-linux-x64/bin:$PATH"`

<br>
<br>


## Genutzte Tools
### Linting
>+ eslint
>
>+ lesshint
>
>+ semistandard & snazzy
>   + `semistandard --verbose --fix ./folder/*.{mjs, js} | snazzy`

<br>
<br>


## Bundling
+ esbuild
    + `esbuild ./webapp/src/js/Main.mjs --log-level=warning --bundle --outfile=./webapp/dist/bundle.js`

<br>
<br>


## Minify und Obfuskation
+ lessc
    + `lessc ./src/style.less ./dist/style.css` 

    + `lessc --clean-css ./webapp/dist/style.css ./dist/style.css`

+ terser
    + `terser ./webapp/dist/bundle.js --compress --mangle --comments=false -o ./webapp/dist/bundle.js`

<br>
<br>

# Prüfungsvorleistungs-Checkliste
>### Die clientseitige Browser-Anwendung:
>  - [x] Referenziert eine einzige CSS-Datei aus Less-Dateien.
>
>  - [x] Referenziert eine einzige JS-Datei, gebündelt mit esbuild.

<br>

> ### Die serverseitige Node.js-Anwendung:
>  - [x] Startet einen Express-HTTP-Server am übergebenen Port.
>  
>  - [x] Liefert die clientseitige Anwendung als statische Dateien aus.

<br>

> ### npm-Build-Prozess:
>  - [x] In sh-kompatibler Shell ausführbar.
>  
>  - [x] Führt das Skript zur initialen Befüllung der Datenbank mit `npm run initdb` aus.
>
>  - [x] Bereinigt das Projekt mit `npm run clean`, löscht heruntergeladene/generierte Dateien.
>
>  - [x] Überprüft alle JS-Dateien im Projekt mit `npm run lint` (Client und Server) via semistandard.
>
>  - [x] Erzeugt das gesamte Projekt mit `npm run debug`.
>
>  - [x] Erzeugt das gesamte Projekt mit `npm run build`, minimiert CSS/JS mit less-plugin-clean-css bzw. terser.
>
>  - [x] Bricht das Erzeugen ab, falls semistandard Fehler aufdeckt.
>
>  - [x] Startet den HTTP-Server an Port 8080 mit `npm run start` oder `npm start`.

<br>
<br>

# Frontend

<br>
<br>

# Backend

