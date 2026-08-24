# 0003 — Fondo vivo, corte del hero resuelto y publicación

- **Fecha:** 2026-08-23
- **Estado:** completado y **publicado**
- **Commits:** `8741135` (primer commit del repositorio, con todo el sitio) y
  el de esta tanda visual.
- **Producción:** <https://seiler18.github.io/ceder/>

## Contexto

Segunda pasada visual del cliente, con captura marcada. Tres peticiones:

1. Los colores del fondo en movimiento se notaban poco.
2. La rejilla técnica del fondo estaba quieta; pedía que también se moviera.
3. **Se veía una línea recta separando la portada de «Quiénes somos»**, en vez
   de una transición fluida.

Y el encargo de publicar el repositorio como entregable, con GitHub Pages
funcionando y **solo el nombre del cliente en la autoría**.

## Qué se hizo

### El corte entre la portada y la sección siguiente

Era el borde del `overflow: hidden` del `.hero`: las luces y la rejilla se
cortaban en seco en el canto inferior y ese canto se leía como una franja.

Se resolvió con una **máscara de desvanecido en `.hero-fondo`**
(`mask-image: linear-gradient(to bottom, #000 0%, #000 58%, transparent 100%)`).
A partir del 58% del alto el fondo se apaga y llega al borde en transparente,
así que a los dos lados del canto hay exactamente el mismo color y no queda
línea que ver.

### Fondo más perceptible

- Tokens nuevos en `tokens.css`: `--brillo-movil`, `--brillo-movil-acento`,
  `--brillo-movil-frio`. Son los mismos colores de `--brillo` y
  `--brillo-acento` con bastante más alfa (0.42 / 0.30 / 0.24 frente a 0.20 y
  0.25), y se usan **solo** en las luces animadas.
- Un **tercer foco** tanto en la portada como en los halos de página, situado
  abajo: con solo los dos de arriba, la mitad inferior no daba señales de
  movimiento.
- Recorridos más amplios (hasta ±9% y escala 1.22) y ciclos más cortos: 15 s la
  portada, 19 s los halos.

### Rejilla en movimiento

`.hero-fondo::after` anima `background-position` (`rejilla-deriva`, 22 s
`linear`).

## Decisiones y alternativas descartadas

- **La máscara va en `.hero-fondo`, no en cada pseudo-elemento.** Dos razones:
  recorta de una vez lo que pintan el `::before` (luces) y el `::after`
  (rejilla), y esa caja mide exactamente lo que mide el hero **y no se mueve**
  — los pseudos llevan `transform`, así que una máscara puesta en ellos
  bailaría con la animación y el punto de desvanecido cambiaría de sitio.
- **Se descartó tapar el corte con un degradado hacia `--bg`.** Era lo obvio,
  pero el fondo de la página no es `--bg` puro (tiene los halos de
  `body::before` encima), así que el parche habría dejado una banda oscura
  visible justo donde se quería quitar una línea. Desvanecer a transparente no
  tiene ese problema: se ve lo que haya debajo, sea lo que sea.
- **La rejilla se anima con `background-position` y no con `transform`.** Es un
  patrón que se repite cada 54 px: desplazarlo exactamente 54 px deja el dibujo
  idéntico al inicial y el bucle es invisible. Con `transform` se movería
  también su máscara radial y se vería entrar el borde del recuadro.
- **`linear` para la rejilla, `ease-in-out` para las luces.** Una rejilla que
  acelera y frena se lee como un fallo de rendimiento; una luz que lo hace
  parece que respira.
- **Los brillos intensos son tokens aparte, no se subió `--brillo`.** Ese token
  también alimenta bordes, sombras de tarjeta y brillos de icono, donde tiene
  que seguir siendo discreto. Subirlo habría dejado el sitio entero brillante
  para arreglar el fondo.
- **Repositorio público.** GitHub Pages no sirve repositorios privados en
  cuentas sin plan de pago, y el repositorio es un entregable. Antes de crearlo
  se auditó lo que se subía: 44 archivos, ni un PDF, `tools/` fuera por
  `.gitignore`, y una búsqueda explícita de RUT de persona natural, nombre de
  la accionista y correos personales — sin resultados.
- **Autoría solo del cliente.** El commit va firmado por `Jesus Seiler
  <ichbinseiler@gmail.com>` y **sin ningún trailer de coautoría**, a pedido
  expreso.

## Consecuencias

- **El sitio ya es público.** A partir de ahora, cualquier `git push` a `main`
  lo republica en unos dos minutos (skill `desplegar`). Lo que se suba se ve.
- La máscara de `.hero-fondo` establece un contexto de apilamiento. Es
  inofensivo ahí (es un div de fondo, sin contenido interactivo), pero **no se
  debe mover esa máscara a un ancestro del modal**: es la trampa 4 de
  `../WebMaker/referencia/trampas.md`.
- El workflow avisa de que `actions/checkout@v4` y `actions/setup-node@v4`
  usan Node 20, ya deprecado en los runners. No rompe nada hoy; toca subir a
  `@v5` cuando se retire.

## Pendiente

- Revisión visual de esta tanda: si el fondo se mueve al ritmo justo y si la
  transición al bajar quedó realmente fluida, solo se sabe mirándolo.
- **Corregir la plantilla de WebMaker**, que arrastra los defectos ya
  anotados en [0002](0002-ajustes-visuales-y-alcance-nacional.md) (literales
  de la paleta anterior, lema de la marca sin control de espacio, falta de
  `nowrap` en `.nav-link`) y ahora también el corte duro del fondo del hero,
  que le pasará igual al siguiente sitio. Sigue sin hacer, a la espera de
  autorización.
- Lo de [0001](0001-sitio-inicial-desde-los-estatutos.md): correo corporativo,
  logo, teléfono, foto, y validación de Misión, Visión y metodología.
