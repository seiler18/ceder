# 0004 — El sistema de acabado del taller, traído al sitio ya publicado

- **Fecha:** 2026-08-24
- **Estado:** completado en el árbol de trabajo — **sin commitear ni desplegar**
- **Commits:** pendiente
- **Producción:** <https://seiler18.github.io/ceder/> (todavía con la versión
  anterior; este hito no llega al visitante hasta el próximo push)
- **Origen:** WebMaker registró el 24-08-2026 su hito
  [0003](../../../WebMaker/hitos/0003-sistema-de-acabado.md), «Sistema de
  acabado». Este sitio se construyó y se publicó el 23-08, unas veinte horas
  antes, así que se quedó fuera entero.

## Contexto

La plantilla de WebMaker **se copia una vez**, al generar el proyecto: no hay
enlace, ni submódulo, ni nada que sincronice. Un cambio en el taller no llega
solo a los sitios ya hechos. Ese es el diseño y está bien —un sitio entregado
no debe moverse porque alguien toque la plantilla—, pero significa que traer
una mejora es un trabajo explícito, y este hito es ese trabajo.

Lo que faltaba, medido antes de empezar:

| | antes |
|---|---|
| tamaños de letra distintos | **24** (con 0.94 y 0.95rem; 0.85 y 0.88; 1 y 0.98) |
| duraciones escritas a mano | 5 (0.2, 0.25, 0.28, 0.6, 2.4s) |
| reglas `:hover` | 20 — **ninguna** dentro de `@media (hover: hover)` |
| reglas `:active` | 0 |
| bloques `@media (pointer: coarse)` | 0 |
| `env(safe-area-inset-*)` | 0 |
| comprobaciones de `npm run check` | 7 |

Y el detalle que más se notaba sin saber nombrarlo: **`data-anim-espera`
existía en `reveal.js` y no lo usaba ningún componente**. Las seis tarjetas de
«Servicios» aparecían exactamente a la vez, y la portada no tenía animación de
entrada ninguna.

## Qué se hizo

### `src/styles/tokens.css`

Dos bloques nuevos, con su razonamiento dentro:

- **Escala tipográfica de diez pasos**, cada uno con un papel: `--txt-barra`,
  `--txt-micro`, `--txt-menudo`, `--txt-ui`, `--txt-cuerpo`, `--txt-guia`,
  `--txt-t3` y tres fluidos con `clamp` (`--txt-t2`, `--txt-t1`,
  `--txt-cifra`). Con ella, cuatro interlineados, tres espaciados entre letras,
  tres medidas de línea en `ch` y tres tamaños de icono aparte de la escala de
  texto.
- **Movimiento**: `--rapido` (120ms), `--medio` (240ms), `--lento` (420ms),
  tres curvas, `--escalonado` (70ms), los desplazamientos de respuesta
  (`--levanta`, `--levanta-ficha`, `--hunde`) y los cuatro ciclos del fondo
  animado, que ahora hacen visible la regla de los 15-22s.

Más `--toque-min`, `--sombra-alta`, y dos derivados que estaban escritos a
mano en `components.css`: `--velo-modal` (era `rgba(3, 6, 15, 0.72)`) y
`--texto-marca` (era `rgba(148, 163, 184, 0.7)` en el placeholder — un gris
que no era de esta paleta).

Y los lavados translúcidos, que estaban como `rgba()` literales con los canales
de la paleta copiados a mano, pasan a `color-mix()` sobre `--bg`, `--bg-2` y
`--primario`. **Los valores resultantes son idénticos** (se comprobó canal a
canal: `#0f1419` es `rgb(15, 20, 25)`, que es lo que decían los literales), así
que esto no cambia un píxel hoy; lo que cambia es que un cambio de paleta
mañana ya no deja media interfaz con el azul viejo.

La única excepción declarada es `--superficie-viva`: sigue siendo un tono
elegido a mano y no un `color-mix` de `--surface` con blanco, porque en esta
paleta el aclarado con blanco puro sale grisáceo y la ficha se veía apagada
justo cuando debía encenderse. Está comentado como el único derivado que hay
que revisar a ojo si se cambia la identidad.

### Los cuatro CSS

Migrados enteros a los tokens: ningún color, tamaño de letra, duración ni
curva literal fuera de `tokens.css`. Y con ello:

- Todos los `:hover` dentro de `@media (hover: hover)`, con `:active` **fuera**
  para lo que responde al dedo, `touch-action: manipulation` en los botones y
  `-webkit-tap-highlight-color: transparent` acompañado siempre de su `:active`
  propio.
- Bloque nuevo `@media (pointer: coarse)`: 44px en botones, filtros, enlaces
  del pie y de redes, y cierre del modal. Va por tipo de puntero y no por
  ancho, porque quien falla es el dedo, no la pantalla.
- `env(safe-area-inset-*)` en los rellenos laterales del contenido y de la
  barra, con `viewport-fit=cover` en el `<meta viewport>` de `index.html`, que
  es lo que lo activa. (La reserva de la franja del gesto en la barra inferior
  también se trajo, pero **en este sitio no se usa**: el armazón es `topbar`,
  no `sidebar`.)
- Bloque nuevo para **teléfono en horizontal** (`max-height: 520px`), donde una
  portada de 78vh se convertía en una pantalla de aire.
- `text-wrap: balance` en los títulos y `pretty` en los párrafos.
- Medidas de línea en `ch` donde había píxeles (bajada del hero, subtítulo de
  sección), prosa a 18px y título de tarjeta a 18px sobre texto de 15px —
  antes eran 1.08 y 0.94rem, que se ven iguales.
- Un caso que aquí **no aplicaba**: los campos del formulario no declaraban
  `font-size`, así que ya heredaban los 16px del `body` y el zoom de Safari de
  iOS nunca se disparó. Se deja igualmente la regla de `pointer: coarse` para
  que siga siendo cierto si alguien toca el tamaño.

### `src/lib/reveal.js`

- **Escalonado automático**: `data-anim-secuencia` en un contenedor y sus hijos
  entran uno detrás de otro. El retardo se calcula por la posición del hijo,
  así que añadir una tarjeta no obliga a renumerar nada.
- **Techo de 6 pasos / 420ms**: sin él, la duodécima tarjeta entra 770ms
  después de la primera y lo que se percibe ya no es ritmo, es lentitud.
- **Cuatro variantes** (`subir`, `aparecer`, `escala`, `lateral`).
- **El retardo se borra al terminar la entrada**, con un `transitionend` de una
  sola vez: `transition-delay` es del elemento, no de la animación, así que sin
  esto una tarjeta que entró con 350ms de retardo se quedaba con esos 350ms
  para siempre y su hover empezaba tarde.

Y se usa: 8 contenedores con secuencia y 31 elementos animados en el DOM
generado — la portada (antetítulo → nombre → lema → bajada → botones → cifras),
las rejillas de «Servicios» y «A quién atendemos», y las filas de destacados de
«Quiénes somos» y «Cómo trabajamos».

### `scripts/check-integrity.js`

De 7 comprobaciones a 12. Las cinco nuevas: colores literales, tamaños de letra
literales, duraciones y curvas literales, imágenes sin `alt` y variantes de
`data-anim` que no existen. Ignora comentarios y el bloque de
`prefers-reduced-motion` —ahí los literales son obligatorios— borrando en
blanco, sin recortar, para que el número de línea que informa sea el del
archivo real.

### Documentación del proyecto

- `CLAUDE.md`: la regla 2 pasa a cubrir color, tamaño y duración; reglas nuevas
  10 a 13 (hover táctil, 44px, animar solo `transform`/`opacity`, rejilla
  escalonada); la tabla de «dónde está cada cosa» apunta a la skill nueva y a
  `acabado.md`; y el comando `check` dice lo que comprueba ahora.
- `.claude/skills/revisar-acabado/` (nueva) y `agregar-seccion` actualizada.

## Decisiones y alternativas descartadas

- **Port, no copia.** Reemplazar los CSS por los de la plantilla habría
  borrado lo que este sitio tiene y ella no: el corte de 1199.98px por las seis
  secciones de etiqueta larga, la máscara del hero del hito 0003, el
  `nowrap` del menú y el lema oculto en la barra. Se migró regla a regla.
- **Los `color-mix` se comprobaron antes de sustituir.** Convertir un literal a
  un derivado que da otro color es exactamente el fallo que el derivado quiere
  evitar. Los que no coincidían —`--superficie-viva`— se quedaron literales.
- **La portada entra animada, sabiendo lo que cuesta.** Ahora el `<h1>` arranca
  en `opacity: 0` y lo enciende el JS. Tiene respaldo si el JS falla
  (`reveal.js` marca todo visible cuando no puede observar), pero **retrasa el
  LCP** unos 350-400ms. Se acepta porque una portada que aparece de golpe es lo
  primero que se veía sin terminar; si en la medición real molesta, lo correcto
  es dejar el título sin retardo, no quitar la secuencia entera.
- **No se tocó la escala de espaciado.** Los rellenos siguen escritos a mano.
  Es el candidato obvio para el siguiente paso, pero migrarlos a medias produce
  justo la incoherencia que se quiere evitar, y no se puede verificar sin ver
  el resultado.

## Verificado

- `npm run check` en verde: 15 ids, 2 rutas locales, 6 secciones.
- **Prueba negativa** de las comprobaciones nuevas: se inyectó
  `color: #ff00aa`, `font-size: 0.83rem`, `0.3s` y un `cubic-bezier()` a mano
  en `components.css`; las cuatro se detectaron con el número de línea correcto
  y el verificador salió con código 1. Después se retiró la línea y volvió a
  verde.
- `npm run build` correcto: 27 módulos, 30.18 KB de CSS y 27.47 KB de JS,
  favicon y `assets/` copiados.

## Pendiente

- **Nada de esto está verificado visualmente.** Sigue sin haber navegador
  automatizado. Antes de desplegar hace falta la pasada de la skill
  `revisar-acabado` sobre `npm run preview`, y en concreto tres cosas que solo
  se pueden confirmar en un teléfono real: si el escalonado de 70ms se siente o
  se sufre, si el `:active` de los botones acusa el toque, y si los 44px
  resuelven los fallos de pulsación en el pie.
- **La portada tarda ~400ms más en aparecer.** Medir y decidir.
- El sitio está publicado: esto no llega al cliente hasta el próximo
  `git push origin main`.
- Sigue vivo lo del hito 0002: `actions/checkout@v4` y `setup-node@v4` en el
  workflow, con aviso de deprecación.
