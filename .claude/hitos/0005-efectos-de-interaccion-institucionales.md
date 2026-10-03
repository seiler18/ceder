# 0005 — Efectos de interacción, en versión institucional

- **Fecha:** 2026-10-03
- **Estado:** completado, pendiente de visto bueno visual, de commit y **sin desplegar**
- **Commits:** pendiente de commit

## Contexto

En el Curriculo y el hub se aplicaron efectos de interacción tipo React Bits
(sus hitos 0019–0023 y 0003–0004). Se pidió llevar «mejoras visuales según su
temática» a todos los sitios. CEDER es el perfil institucional de una
consultora que postula a licitaciones públicas, y su briefing pide tono formal
y «sin superlativos ni cifras que no se puedan probar»: no se podía copiar el
conjunto en bloque.

## Qué se hizo

- `src/lib/fondo-dotField.js` y `src/lib/efectos.js`: **copia** de los módulos
  del hub, con su aviso de licencia (React Bits, MIT + Commons Clause: dentro
  de un sitio, sin redistribuir). `src/styles/efectos.css`, entre
  `components.css` y `responsive.css`.
- **Fondo de puntos en el hero**, casi quieto: `opacidad 0.5`, `ondulacion 0`.
  Solo reacciona al cursor; con el cursor parado el bucle se duerme.
  `.hero-puntos` con máscara radial, en `components.css`.
- **Brillo que sigue al cursor** en `.tarjeta` y `.destacado`
  (`--brillo-cursor`, derivado de `--acento`).
- **Imán discreto** en `.hero-btn` (`alcance 70, fuerza 0.16, máximo 6 px`, más
  suave que en los otros sitios).
- **Efecto propio de la temática: la ruta de «Cómo trabajamos».** Una línea
  que une las cuatro etapas y se dibuja de la primera a la última al entrar.
- Tokens nuevos: `--brillo-cursor`, `--ruta-dibujo` (900 ms).
  `efectos.css` añadido a `CSS_REVISADOS` de `check-integrity.js`.

## Decisiones y alternativas descartadas

- **Sin contadores:** no hay cifras en la portada y el briefing prohíbe
  inventarlas.
- **Sin chispas al pulsar:** es un gesto lúdico; aquí el tono es formal.
- **Sin destello nuevo en el título:** ya tiene uno propio (hito 0004,
  `--ciclo-titulo`), más elaborado que el que se añadió en otros sitios.
- **Sin título por palabras:** el nombre lleva degradado recortado al texto y
  con palabras animadas queda invisible (comprobado en el hub).
- **La ruta es CSS puro**, sin JS nuevo: la línea es el `::before` de
  `#metodologia .destacados`, detrás de las tarjetas (opacas), así que solo se
  ve en los huecos y hace de conector. Crece con `scaleX` cuando la última
  etapa recibe `.anim-visible` (que pone `reveal.js`, escalonado). Solo se
  anima `transform`, como pide la regla 12. Se eligió porque las etapas son
  **consecutivas** (lo dice `data/metodologia.js`) y una fila de tarjetas
  iguales no lo cuenta.
- **La ruta solo existe desde 1100 px**, donde caben las cuatro en una fila.
  Con dos filas o una columna cruzaría por donde no hay conexión. Por debajo
  se ve la sección como antes.
- **El brillo del cursor va solo en `hover: hover`**: en táctil manda
  `.esta-tocada` (`lib/tacto.js`), que ya existía.

## Consecuencias

- Sin dependencias nuevas.
- Verificado: `npm run check` (con `efectos.css` ya revisado) y
  `npm run build`; Playwright contra `preview`: canvas montado, título visible
  («CEDER SpA»), imán 6 px, ruta dibujada a `scaleX(1)`, brillo con `--mx`,
  ruta ausente a 1000 px, sin desborde a 390 px, sin errores de consola, y con
  movimiento reducido la ruta sale completa y el título se ve.
  **Sin visto bueno visual del usuario** y sin probar en móvil real.
- Si se cambia `efectos.js` o `fondo-dotField.js` en el hub o en el Curriculo,
  hay que copiarlo aquí a mano.

## Pendiente

- Visto bueno visual: opacidad de los puntos, grosor y color de la ruta
  (`height: 2px` y el degradado en `efectos.css`).
- Desplegar (skill `desplegar`) cuando se apruebe: este hito y el 0004 siguen
  sin publicar.
