# Portfolio · Pablo García Pernas

Portfolio en [Astro](https://astro.build) con i18n (español / inglés) y un CV imprimible generado a partir de los mismos datos.

## Rutas

| Ruta      | Contenido                    |
|-----------|------------------------------|
| `/`       | Portfolio en español         |
| `/en/`    | Portfolio en inglés          |
| `/cv`     | CV imprimible en español     |
| `/en/cv`  | CV imprimible en inglés      |

El CV se imprime en A4 desde el botón **Imprimir / Guardar PDF** (o Ctrl+P → "Guardar como PDF"). La barra superior no sale en la impresión.

## Dónde se editan los datos

- **`src/data/cv.ts`** → toda la información: perfil, experiencia, proyectos, formación, certificaciones, habilidades, idiomas. Los textos traducibles son `{ es: '...', en: '...' }`.
  - `portfolio: false` oculta una entrada en la web (p. ej. el trabajo de camarero).
  - `cv: false` la oculta en el CV.
- **`src/i18n/ui.ts`** → textos fijos de la interfaz (menú, botones, títulos de sección).

### Añadir un idioma nuevo (ej. gallego)
1. `src/i18n/ui.ts`: añade `gl: 'Galego'` en `languages` y un bloque `gl: {...}` en `ui`.
2. `src/data/cv.ts`: añade `gl` a cada objeto `{ es, en }` (si falta, se usa español).
3. `astro.config.mjs`: añade `'gl'` a `locales`.
4. Copia `src/pages/en/` a `src/pages/gl/` y cambia `lang="en"` por `lang="gl"`.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

## Despliegue en GitHub Pages
El workflow `.github/workflows/deploy.yml` construye y publica al hacer push a `master`/`main`.
En el repo: **Settings → Pages → Source: GitHub Actions**.
