/* ============================================================
   RESPUESTA AL TOQUE DE LAS FICHAS

   Enciende una .tarjeta o un .destacado mientras el dedo está encima, y lo
   deja encendido un instante después de soltar.

   POR QUÉ HACE FALTA JS PARA ESTO
   Las fichas se encienden con `:hover`, y el hover vive dentro de
   `@media (hover: hover)` porque en una pantalla táctil se queda pegado hasta
   el toque siguiente (WebMaker/referencia/trampas.md, 22). Correcto, pero deja
   el teléfono sin ninguna respuesta al tocar una ficha — que es justo lo que
   se perdió al aplicar esa regla.

   Lo natural sería `:active`, y no basta por dos motivos:

     1. En Safari de iOS, `:active` NO se aplica a un elemento cualquiera
        (aquí un <article> y un <li>) si no hay un manejador de eventos táctil
        en él o en un ancestro. En un <a> o un <button> sí, pero estas fichas
        no llevan enlace dentro: son diez tarjetas y siete destacados de puro
        contenido.
     2. Un toque dura unos 90ms. La transición de encendido tarda --medio
        (240ms), así que `:active` a secas se apaga cuando el efecto va por la
        tercera parte: técnicamente responde, pero no se ve.

   De ahí el MINIMO_MS de abajo: la ficha se queda encendida el tiempo
   suficiente para que el ojo la registre, y luego se apaga sola con su propia
   transición.

   Solo se engancha en punteros gruesos. Con ratón esto no existe y manda el
   `:hover` del CSS, que es lo correcto.
   ============================================================ */

const SELECTOR = '.tarjeta, .destacado'
const CLASE = 'esta-tocada'

/* Cuánto se queda encendida como mínimo, contando desde que se posa el dedo.
   240ms es lo que tarda la transición de --medio en completarse: por debajo,
   la ficha se apaga antes de haberse encendido del todo y el efecto se
   percibe como un parpadeo. Por encima de ~400ms empieza a sentirse como que
   la ficha se ha quedado seleccionada. */
const MINIMO_MS = 260

export function initTacto() {
  // `pointer: coarse` y no un ancho: quien necesita esto es el dedo, no la
  // pantalla. Una tableta de 1024px entra; una ventana estrecha en un
  // portátil con ratón, no.
  if (!window.matchMedia('(pointer: coarse)').matches) return

  let encendida = null
  let desde = 0
  let apagado = 0

  const apagarYa = () => {
    clearTimeout(apagado)
    if (encendida) encendida.classList.remove(CLASE)
    encendida = null
  }

  const encender = evento => {
    const ficha = evento.target.closest(SELECTOR)
    if (!ficha) return
    apagarYa()
    encendida = ficha
    desde = performance.now()
    ficha.classList.add(CLASE)
  }

  const soltar = () => {
    if (!encendida) return
    const ficha = encendida
    const restante = Math.max(0, MINIMO_MS - (performance.now() - desde))
    encendida = null
    clearTimeout(apagado)
    apagado = setTimeout(() => ficha.classList.remove(CLASE), restante)
  }

  /* Delegado en el documento y no una escucha por ficha: las tarjetas se
     ocultan y se muestran al filtrar por área, así que enganchar cada una
     obligaría a re-enganchar después de cada filtrado. */
  document.addEventListener('pointerdown', encender, { passive: true })
  document.addEventListener('pointerup', soltar, { passive: true })

  /* `pointercancel` es el que se dispara cuando el navegador se queda con el
     gesto para hacer scroll: sin esto, arrastrar el dedo desde una ficha para
     bajar por la página la dejaría encendida hasta el toque siguiente — el
     mismo defecto del hover pegado que veníamos a arreglar. */
  document.addEventListener('pointercancel', apagarYa, { passive: true })
}
