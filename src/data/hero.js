/* ============================================================
   PORTADA

   Lo primero que se lee. Tres reglas aprendidas:

     · `bajada` en dos frases como máximo. Es lo único que lee alguien que
       llega de un buscador y decide en dos segundos si sigue.
     · Dos acciones, no cinco. La primera es la que de verdad quieres que
       pulsen; la segunda, la alternativa razonable. Tres o más y ninguna
       destaca.
     · `cinta` solo con cifras verificables. Un número inventado se nota y
       cuesta más credibilidad de lo que aporta. Déjala vacía si no hay.
   ============================================================ */

export const hero = {
  // El antetítulo lleva la razón social desplegada: el <h1> es la marca
  // corta, y quien llega buscando «centro de estudios» necesita leerla
  // completa sin bajar.
  antetitulo: 'Centro de Estudios de Desarrollo Regional',
  // Sin referencia a la región: el domicilio social está en Contacto, que es
  // donde se busca, y en la portada limitaba el alcance. Trabajamos en todo
  // Chile y la bajada tiene que decir eso.
  bajada:
    'Acompañamos a organismos públicos, empresas y organizaciones gremiales ' +
    'en el diseño, la evaluación y la gestión de sus decisiones estratégicas. ' +
    'Trabajamos con mandantes de todo Chile.',

  // El primario lleva a Servicios y no a Contacto a propósito: nadie
  // contacta a un consultor antes de saber qué hace.
  acciones: [
    { label: 'Qué hacemos', href: '#servicios', icon: 'fa-solid fa-arrow-down' },
    { label: 'Contacto', href: '#contacto', icon: 'fa-solid fa-paper-plane' },
  ],

  /* VACÍA A PROPÓSITO. La sociedad se constituyó en diciembre de 2025: no hay
     todavía años de trayectoria ni cartera de proyectos que se puedan probar,
     y un «+50 clientes» inventado en un sitio que se lee para evaluar a un
     oferente cuesta más de lo que aporta. Se rellena cuando haya cifras
     reales: [{ dato: '12', pie: 'estudios entregados' }]. */
  cinta: [],

  // Id de la sección a la que apunta la flecha de «hay más abajo».
  siguiente: 'nosotros',
}
