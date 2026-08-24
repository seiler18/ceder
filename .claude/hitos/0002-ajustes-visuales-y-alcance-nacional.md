# 0002 — Ajustes visuales tras la primera revisión y alcance nacional

- **Fecha:** 2026-08-23
- **Estado:** completado (sin publicar)
- **Commits:** pendiente de commit — el proyecto todavía no tiene repositorio
  git inicializado.

## Contexto

Primera pasada visual del cliente sobre el sitio de [0001](0001-sitio-inicial-desde-los-estatutos.md),
con captura de pantalla marcada. Seis observaciones:

1. La barra de navegación se partía en **dos líneas**.
2. El título azul de «Quiénes somos» y el `CEDER SpA` de la portada se
   confundían con el fondo: pedía contorno marcado.
3. El fondo y sus luces parecían estáticos: pedía movimiento más rápido.
4. «Con base en Puerto Montt, Región de Los Lagos» sobraba — el sitio no debe
   leerse como limitado a una zona.
5. «Quiénes somos» daba pereza leer: demasiado texto.
6. El hover de las tarjetas debía ser **más marcado** y **el mismo en las
   cuatro rejillas**.

## Qué se hizo

### Barra de navegación en una línea

Dos causas, las dos arregladas en `src/styles/layout.css`:

- El **lema de la marca** se llevaba unos 250 px de los 1180 del contenedor y
  encima salía cortado con puntos suspensivos. Ahora se oculta en el armazón
  `topbar` (`body[data-armazon="topbar"] .topbar .marca-lema`). Se sigue
  leyendo entero en la portada, que es su sitio.
- Los enlaces no tenían **`white-space: nowrap`**, así que «Cómo trabajamos» y
  «A quién atendemos» se partían por dentro antes de que el menú desbordara.
  Añadido, más `flex-wrap: nowrap` en la lista y tamaños algo más ajustados
  (`0.88rem`, padding `0.5rem 0.7rem`).
- El corte al cajón móvil **subió de 991.98 px a 1199.98 px**
  (`src/styles/responsive.css` **y** el `matchMedia` de
  `src/components/shell.js`, que tienen que hablar del mismo ancho).

### Contorno de los títulos

`filter: drop-shadow(...)` en `.section-title` (layout.css) y `.hero-titulo`
(components.css), más un `text-shadow` en `.hero-lema`. El degradado del título
de portada se rehízo arrancando en blanco para que despegue del fondo.

### Fondo en movimiento

- **Luces del hero** → `.hero-fondo::before`, animación `luces-hero` de 18 s.
- **Halos de la página** → `body::before` fijo, animación `halos-fondo` de
  22 s. Antes eran un `background-image` del `body` con
  `background-attachment: fixed`.

### Alcance nacional

Fuera la referencia geográfica de la portada (`src/data/hero.js` → «Trabajamos
con mandantes de todo Chile»), del título y subtítulo de «Quiénes somos», de
los destacados de Misión y Visión («de la región», «en el sur de Chile»), y del
`<title>` y la meta description (`index.html`, `src/data/site.js`). La og se
regeneró. En Contacto el domicilio se reetiquetó **«Domicilio social»** y se
añadió la fila **«Cobertura: Todo Chile»**.

### «Quiénes somos» más corto

De tres párrafos densos a dos cortos, y los tres destacados recortados a un
largo parejo.

### Hover común de todas las fichas

Un solo bloque en `components.css` para `.tarjeta` (Servicios, A quién
atendemos) y `.destacado` (Quiénes somos, Cómo trabajamos), más marcado: sube
6 px, borde de acento, sombra profunda + borde interior, y el fondo pasa a
`--superficie-viva`. El icono acompaña con un `scale(1.06)`.

### Limpieza de la paleta (defecto heredado de la plantilla)

Siete colores literales de la paleta **anterior** (Tech Corporate) estaban
escritos a mano en el CSS: `rgba(37, 99, 235, …)` en el icono de las tarjetas y
el enlace activo del menú, y `rgba(10, 14, 26, …)` en el fondo de la barra fija
y del cajón móvil. Al cambiar a Pizarra Institucional se habían quedado con el
azul viejo — la barra se veía más azul que el fondo. Ahora son tokens en
`tokens.css`: `--primario-tenue`, `--primario-tenue-fuerte`, `--barra-fondo`,
`--barra-fondo-opaca`, `--velo`, `--superficie-velada`, `--superficie-viva`.

## Decisiones y alternativas descartadas

- **`filter: drop-shadow` y no `text-shadow` para el contorno.** Los dos
  títulos usan `background-clip: text` con
  `-webkit-text-fill-color: transparent`: el glifo no tiene relleno propio, así
  que una `text-shadow` se pinta por debajo y se ve **a través** de la letra,
  sucia. `drop-shadow` actúa sobre el resultado ya recortado y dibuja el borde
  por fuera. Está comentado en el CSS porque es un cambio que alguien
  «simplificará» a `text-shadow` en el futuro.
- **Se descartó acortar las etiquetas del menú** («Nosotros», «Método»,
  «Sectores»), que era la solución fácil al menú de dos líneas. Las etiquetas
  largas dicen qué hay en cada sección y el sitio se dirige a evaluadores que
  no van a adivinar. Se prefirió recortar el bloque de marca, que sí era
  prescindible.
- **Se descartó subir `--ancho-max`** para que cupiera el menú: habría
  cambiado el ancho de lectura de todo el sitio para arreglar la barra.
- **Animación en `body::before`, nunca en el `<body>`.** Un `transform` o un
  `filter` en el body crea un contexto de apilamiento y el modal quedaría
  atrapado por debajo de la barra de navegación
  (`../WebMaker/referencia/trampas.md`, punto 4).
- **Las luces se animan con `transform` sobre un pseudo-elemento
  sobredimensionado (`inset: -30%`)**, no animando `background-position`: el
  transform lo mueve el compositor sin repintar los degradados, y el margen
  extra evita que aparezca un borde vacío al desplazarse. La rejilla técnica se
  quedó en el `::after` **quieta** a propósito: moviéndose dejaba de leerse
  como rejilla.
- **El hover de `.tarjeta` y `.destacado` en una sola regla**, no dos iguales.
  Dos reglas separadas es exactamente cómo se llega a que dos rejillas del
  mismo sitio se comporten distinto — que es el problema que se estaba
  arreglando.
- **Se añadió `:focus-within` con el mismo aspecto que el hover.** Quien
  navega con teclado tenía una ficha que no reaccionaba a nada.
- **El domicilio social se mantuvo visible** aunque el cliente pidiera quitar
  la referencia geográfica. Lo que sobraba era en la **portada**, como límite de
  alcance; en Contacto es un antecedente formal que se exige a un oferente. Se
  resolvió reetiquetándolo y añadiendo la cobertura.

## Consecuencias

- **El breakpoint del armazón vive en dos archivos.** `responsive.css`
  (1199.98 px) y `shell.js` (1200 px). Si se cambia uno sin el otro, queda una
  franja de anchos donde el cajón sigue abierto con estilos de escritorio.
  Está comentado en los dos sitios.
- **El lema no se ve en la barra superior.** Es deliberado; no es un bug que
  haya que «arreglar».
- **Ya no queda ningún color literal fuera de `tokens.css`.** Cambiar de paleta
  vuelve a ser editar un bloque, como promete la plantilla.
- Los textos largos de «Quiénes somos» se recortaron: si vuelven a crecer, el
  sitio pierde justo donde más se abandona.

## Pendiente

- **Corregir la plantilla de WebMaker**, que es de donde vienen tres de estos
  defectos y los repetirá en el siguiente sitio: los literales de la paleta
  Tech Corporate en `components.css`/`layout.css`/`responsive.css`, el lema de
  la marca sin control de espacio en la topbar, y la falta de `nowrap` en
  `.nav-link`. Es hito de `../WebMaker/hitos/`, no de aquí — está sin hacer, a
  la espera de que el usuario lo autorice.
- Revisión visual de esta tanda: el movimiento del fondo, lo marcado del hover
  y el contorno de los títulos no se pueden verificar sin mirar la pantalla.
- Todo lo de [0001](0001-sitio-inicial-desde-los-estatutos.md): correo, logo,
  teléfono, foto, validación de Misión/Visión/metodología.
