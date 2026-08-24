# 0001 — Sitio inicial construido desde los estatutos

- **Fecha:** 2026-08-23
- **Estado:** completado (sin publicar)
- **Commits:** pendiente de commit — el proyecto todavía no tiene repositorio
  git inicializado.

## Contexto

La carpeta del proyecto contenía un único archivo: `Estatutos empresa.pdf`, el
Certificado de Estatuto Actualizado emitido por el Registro de Empresas y
Sociedades el 06-01-2026 (CVE `CRQt9rqXC1PR`). No había logo, ni web anterior,
ni presentación comercial, ni correo corporativo.

El encargo fue construir el sitio a partir de ese documento y dejarlo visible
en local. Todo lo que el sitio afirma sobre la sociedad tenía que salir de ahí
o quedar marcado como pendiente.

## Qué se hizo

1. **Extracción del PDF.** `pdftotext -layout` (viene con Git Bash en
   `/mingw64/bin`) — el lector de PDF por páginas no funciona en esta máquina
   porque falta `pdftoppm`/poppler. Del certificado salieron: razón social,
   nombre de fantasía, RUT, fecha y lugar de constitución, duración y el
   objeto social completo del Artículo Cuarto.
2. **`briefing.md`** en la raíz, aprobado por el usuario el mismo día. Incluye
   la tabla de correspondencia entre cada tarjeta de Servicios y el trozo del
   objeto social del que sale.
3. **Andamiaje** desde `WebMaker/plantilla/`, con los renombrados de rigor
   (`dot-gitignore` → `.gitignore`, etc.) y los marcadores sustituidos.
4. **Identidad:** paleta *Pizarra Institucional* en `src/styles/tokens.css`,
   tipografía Montserrat / Open Sans (`index.html` + tokens), armazón
   `topbar`.
5. **Seis secciones** en `src/site-map.js`: `inicio`, `nosotros`, `servicios`,
   `metodologia`, `sectores`, `contacto`. Las dos nuevas respecto a la
   plantilla son `src/data/metodologia.js` (bloque con destacados) y
   `src/data/sectores.js` (rejilla de tarjetas).
6. **Modo «sin buzón»** en `src/components/sections/contacto.js`.
7. **`assets/img/favicon.webp` (64×64) y `assets/img/og.webp` (1200×630)**
   generados con ImageMagick sobre la paleta, con el monograma y la razón
   social. Son **provisionales**, en Arial, hasta que haya logo.
8. **El PDF fuente se movió a `tools/`**, que está en el `.gitignore`.

## Decisiones y alternativas descartadas

- **Ninguna sección de equipo, aunque los estatutos dan el nombre.** El
  certificado identifica a la accionista y representante ante el SII con su
  RUT de persona natural. Publicar eso en un sitio servido en claro es una
  filtración, no un dato de contacto. En el sitio la administración se
  menciona por el cargo («su Gerente General»), sin nombre. Se añade cuando el
  cliente aporte nombres, cargos y fotos con permiso explícito.
- **El RUT de la sociedad sí se publica.** Es dato público, aparece en los
  portales de compras del Estado y es lo primero que se busca al evaluar a un
  oferente. La distinción es persona jurídica vs. persona natural.
- **Cinta de cifras del hero vacía.** La sociedad se constituyó el 29-12-2025:
  no hay años de trayectoria ni cartera que se puedan probar. Un «+50
  clientes» inventado en un sitio que se lee precisamente para verificar a un
  proveedor cuesta más credibilidad de la que aporta. El hero funciona sin
  ella.
- **Botón primario del hero a `#servicios`, no a `#contacto`.** El objetivo es
  híbrido (perfil institucional + licitaciones): nadie contacta a un consultor
  antes de saber qué hace. Contacto queda como acción secundaria.
- **Formulario con el envío deshabilitado, en vez de sin formulario o con un
  formulario que finge enviar.** Sin `contacto.correo`, el POST de FormSubmit
  iría a `formsubmit.co/ajax/` sin destinatario: fallaría y el visitante
  leería «no se pudo enviar, escríbenos a » con la frase cortada. Se añadió
  una constante `sinBuzon` en el componente que deshabilita el botón y deja el
  aviso escrito desde el render, además de un `preventDefault` incondicional
  (un `disabled` no impide que un Enter en un campo dispare el submit y
  recargue la página perdiendo lo escrito). En cuanto se rellene `correo` en
  `src/data/contacto.js`, todo el modo se desactiva solo: no hay nada que
  revertir.
- **`metodologia` es un `bloque` con destacados, no una rejilla de tarjetas.**
  Las cuatro etapas son consecutivas, no comparables entre sí; una rejilla las
  presentaría como opciones a elegir.
- **`sectores` sí es rejilla**, con `densidad: 'compacta'`: son cuatro
  categorías comparables y el visitante las recorre buscando la suya.
- **Sin filtro en ninguna de las dos rejillas.** Seis y cuatro tarjetas están
  muy por debajo de la docena a partir de la cual el filtro ayuda.
- **Se descartó el blog o sección de publicaciones**, que un centro de
  estudios acaba pidiendo: sin artículos escritos la sección se ve vacía y
  resta. Se añade con tres, como mínimo.

## Consecuencias

- **Los textos de Misión, Visión y toda la sección «Cómo trabajamos» son
  propuestos**, redactados a partir del objeto social. No son datos del
  certificado y están marcados como tales en el encabezado de sus archivos de
  datos y en `briefing.md`. Hay que validarlos con el cliente antes de
  publicar.
- **`tools/` es la carpeta de documentos fuente** y no se publica. El
  certificado de estatutos vive ahí y no debe copiarse a `assets/docs/`.
- El `base` de Vite (`/ceder/`) y `site.url`
  (`https://seiler18.github.io/ceder/`) ya están cuadrados: publicar es
  ejecutar la skill `desplegar`, sin tocar configuración.
- El favicon y la og son provisionales generados con ImageMagick. Cuando
  llegue el logo, se regeneran desde él.

## Pendiente

- Correo corporativo → habilita el formulario (y hay que **confirmar el buzón
  en FormSubmit** la primera vez: se manda un envío desde el sitio publicado y
  se acepta el correo que llega).
- Teléfono y WhatsApp.
- Logo, y con él favicon y og definitivos.
- Foto de oficina o equipo para la columna de «Quiénes somos».
- Validación de Misión, Visión y metodología por el cliente.
- Repositorio git y publicación en GitHub Pages: no se pidió en este pase.
- Revisión visual en escritorio y en móvil real: no la puede hacer el agente.
