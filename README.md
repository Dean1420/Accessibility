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


# Frontend

<br>
<br>

# Backend

