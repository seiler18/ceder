/* ============================================================
   IDENTIDAD DEL SITIO

   Todo lo que se repite en más de un sitio (cabecera, pie, meta tags del
   index.html) vive aquí para no tenerlo escrito en cuatro archivos.

   Los datos formales salen del Certificado de Estatuto Actualizado del
   Registro de Empresas y Sociedades (CVE CRQt9rqXC1PR). Ver briefing.md.
   ============================================================ */

export const site = {
  // El nombre corto es el que se lee bien como título de portada. La razón
  // social completa va en «Quiénes somos» y en los datos de Contacto, que es
  // donde se busca al evaluar a un oferente.
  nombre: 'CEDER SpA',
  // Va en la cabecera cuando el nombre completo no cabe (móvil).
  nombreCorto: 'CEDER',
  lema: 'Decisiones con evidencia para el desarrollo regional',
  // Meta description. Una frase, 150-160 caracteres, con lo que hace la
  // organización y dónde. Es lo que sale en Google bajo el título.
  descripcion:
    'Centro de estudios que asesora a organismos públicos, empresas y gremios ' +
    'de todo Chile en consultoría, auditoría y planificación estratégica.',
  url: 'https://seiler18.github.io/ceder/',

  /* Armazón de navegación. Dos opciones, ambas con el mismo scroll-spy:

       'topbar'   Barra superior fija con los enlaces + menú desplegable en
                  móvil. Es lo que espera un visitante en un sitio de empresa.
       'sidebar'  Columna fija a la izquierda con los enlaces, que en móvil
                  se convierte en barra inferior de iconos. Distintivo, muy
                  cómodo para recorrer un sitio de una sola página con
                  muchas secciones (currículos, portafolios, fichas).

     Aquí es 'topbar' a propósito: el sitio se dirige a evaluadores de
     licitaciones y a empresas, y una barra superior no obliga a aprender
     nada. Cambiarlo no requiere tocar ninguna sección. */
  armazon: 'topbar',

  /* Logo. Si no hay archivo, se deja en null y sale el monograma.
     PENDIENTE: el cliente aún no aporta logo (ver briefing.md). */
  logo: null,
  monograma: 'CD',

  idioma: 'es',
}

/* Redes y perfiles del pie. `principal: true` las sube también a la
   cabecera (en el armazón 'sidebar', al bloque de acciones).
   PENDIENTE: la sociedad todavía no tiene perfiles públicos. */
export const redes = [
  // { label: 'LinkedIn', href: 'https://…', icon: 'fa-brands fa-linkedin' },
]

/* Descargas destacadas (catálogos, tarifarios, estatutos…).
   Los archivos van en la raíz del proyecto y scripts/copy-assets.js los
   lleva al dist/: si añades uno, decláralo también allí.

   OJO: el certificado de estatutos NO va aquí. Lleva el RUT de una persona
   natural, y publicarlo en un sitio servido en claro es una filtración. Vive
   en tools/, que está en el .gitignore. */
export const descargas = [
  // { label: 'Presentación 2026', href: 'presentacion.pdf', download: 'CEDER' },
]
