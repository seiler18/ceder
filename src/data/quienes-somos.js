/* ============================================================
   QUIÉNES SOMOS

   Los datos duros (forma jurídica, fecha, domicilio, objeto) salen del
   Certificado de Estatuto Actualizado, CVE CRQt9rqXC1PR. La misión y la
   visión son TEXTO PROPUESTO redactado a partir del objeto social: están
   pendientes de validación por el cliente (ver briefing.md).
   ============================================================ */

export const quienesSomos = {
  id: 'nosotros',
  eyebrow: 'Quiénes somos',
  // El título hablaba de «base en la Región de Los Lagos» y leído aquí arriba
  // sonaba a que solo se atiende esa zona. El domicilio social es un dato de
  // Contacto, no la carta de presentación.
  titulo: 'Un centro de estudios con alcance nacional',
  subtitulo:
    'Sociedad por Acciones chilena, de duración indefinida, dedicada a la ' +
    'consultoría, la auditoría y la planificación estratégica.',

  // La primera sección tras el hero no lleva separador: el propio corte del
  // hero ya marca el cambio de zona y dos marcas seguidas sobran.
  sinSeparador: true,

  // La clase `prosa` enciende las viñetas de las listas. Sin ella un <ul>
  // sale sin marcador: correcto en un menú, no en un texto corrido.
  /* DOS PÁRRAFOS CORTOS, a pedido del cliente: la versión anterior tenía tres
     párrafos densos y daba pereza leerla. Lo que se recortó no se perdió — el
     domicilio y la fecha de constitución están en los destacados y en
     Contacto, y el detalle del objeto social se ve en Servicios, tarjeta por
     tarjeta. Si esto vuelve a crecer, el sitio pierde justo donde más se
     abandona. */
  cuerpo: `
    <div class="prosa">
      <p>
        <strong>Centro de Estudios de Desarrollo Regional CEDER SpA</strong> trabaja
        con quienes tienen que decidir sin toda la información sobre la mesa:
        municipios y servicios públicos, empresas que planifican su crecimiento y
        organizaciones que representan a un sector.
      </p>
      <p>
        Cubrimos <strong>consultoría</strong>, <strong>auditoría</strong>,
        <strong>planificación estratégica</strong> y gestión pública y privada. Es
        un mandato amplio a propósito: los problemas de desarrollo rara vez caben
        en una sola disciplina.
      </p>
    </div>
  `,

  // Sin imagen el texto se centra con ancho de lectura, que también queda
  // bien. PENDIENTE: foto de oficina o de equipo, 1600 px de ancho en WebP.
  imagen: null,
  ladoImagen: 'derecha',

  // Textos cortos y de largo parejo: en una rejilla de tres, uno de dos líneas
  // junto a otro de cinco se ve descuadrado.
  destacados: [
    {
      icon: 'fa-solid fa-bullseye',
      titulo: 'Misión',
      texto:
        'Producir evidencia útil y acompañar su uso, para que las decisiones se ' +
        'tomen sobre datos y no sobre intuiciones.',
    },
    {
      icon: 'fa-solid fa-eye',
      titulo: 'Visión',
      texto:
        'Ser contraparte técnica de referencia en Chile para el diseño, la ' +
        'evaluación y la auditoría de estrategias de desarrollo.',
    },
    {
      icon: 'fa-solid fa-scale-balanced',
      titulo: 'Constitución',
      texto:
        'Inscrita en el Registro de Empresas y Sociedades el 29 de diciembre de ' +
        '2025. Vigente y de duración indefinida.',
    },
  ],
}
