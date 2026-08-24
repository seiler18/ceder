/* ============================================================
   MAPA DEL SITIO — la única fuente de verdad de la navegación

   Esta lista alimenta a la vez CUATRO cosas:
     · el orden de las secciones en el DOM      (src/main.js)
     · los enlaces del armazón                  (src/components/shell.js)
     · el resaltado de la sección visible       (src/lib/scrollspy.js)
     · el verificador de integridad             (scripts/check-integrity.js)

   Añadir una sección = añadir una fila aquí. No hay que tocar nada más.

   Campos:
     id      Ancla y `id` del <section>. Sin espacios ni acentos: va en la URL.
     label   Texto del enlace en escritorio.
     short   Etiqueta del menú móvil. ~8 caracteres o se parte.
     icon    Clase de Font Awesome 6 (la que carga index.html).
     render  Función que devuelve el HTML del bloque, ya con su <section>.
     enMenu  `false` para una sección que existe pero no se enlaza.

   Los ids van en la URL y se comparten como enlaces: una vez publicados no
   se cambian. `metodologia` va sin acento por eso mismo.
   ============================================================ */

import { renderHero } from './components/sections/hero.js'
import { renderBloque } from './components/sections/bloque.js'
import { renderTarjetas } from './components/sections/tarjetas.js'
import { renderContacto } from './components/sections/contacto.js'

import { quienesSomos } from './data/quienes-somos.js'
import { servicios } from './data/servicios.js'
import { metodologia } from './data/metodologia.js'
import { sectores } from './data/sectores.js'

export const mapa = [
  {
    id: 'inicio',
    label: 'Inicio',
    short: 'Inicio',
    icon: 'fa-solid fa-house',
    render: renderHero,
  },
  {
    id: 'nosotros',
    label: 'Quiénes somos',
    short: 'Nosotros',
    icon: 'fa-solid fa-building',
    render: () => renderBloque(quienesSomos),
  },
  {
    id: 'servicios',
    label: 'Servicios',
    short: 'Servicios',
    icon: 'fa-solid fa-briefcase',
    render: () => renderTarjetas(servicios),
  },
  {
    id: 'metodologia',
    label: 'Cómo trabajamos',
    short: 'Método',
    icon: 'fa-solid fa-route',
    render: () => renderBloque(metodologia),
  },
  {
    id: 'sectores',
    label: 'A quién atendemos',
    short: 'Sectores',
    icon: 'fa-solid fa-people-group',
    render: () => renderTarjetas(sectores),
  },
  {
    id: 'contacto',
    label: 'Contacto',
    short: 'Contacto',
    icon: 'fa-solid fa-paper-plane',
    render: renderContacto,
  },
]

/** Solo las secciones que se enlazan desde el menú. */
export const mapaMenu = mapa.filter(s => s.enMenu !== false)
