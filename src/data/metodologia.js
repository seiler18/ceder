/* ============================================================
   CÓMO TRABAJAMOS

   Sección pedida por el objetivo del sitio: en una licitación la metodología
   se pregunta siempre, y un oferente que no la explica pierde puntos.

   OJO — TEXTO PROPUESTO. Las cuatro etapas describen una metodología
   estándar de consultoría, NO un dato de los estatutos. Está pendiente de
   que el cliente la ajuste a cómo trabaja de verdad (ver briefing.md).

   Es un `bloque` con `destacados` y no una rejilla de tarjetas porque las
   etapas no son comparables entre sí: son consecutivas.
   ============================================================ */

export const metodologia = {
  id: 'metodologia',
  eyebrow: 'Cómo trabajamos',
  titulo: 'Un encargo, cuatro etapas',
  subtitulo:
    'El mismo recorrido para un estudio municipal y para un plan de empresa. ' +
    'Cambia la profundidad de cada etapa, no el orden.',

  cuerpo: `
    <div class="prosa">
      <p>
        Trabajamos con <strong>productos entregables definidos desde el principio</strong>:
        cada etapa termina en un documento revisable, no en una reunión. Así el
        mandante puede corregir el rumbo cuando corregirlo todavía es barato, y al
        final del encargo no hay sorpresas sobre qué se entrega.
      </p>
      <p>
        Cuando el encargo lo exige — un estudio sectorial, una auditoría con
        alcance amplio — se conforma un <strong>equipo específico</strong> para él.
        Los estatutos facultan expresamente a la sociedad para contratar servicios
        profesionales y técnicos, de modo que la composición del equipo se ajusta a
        la materia en vez de al revés.
      </p>
    </div>
  `,

  imagen: null,

  destacados: [
    {
      icon: 'fa-solid fa-1',
      titulo: 'Diagnóstico',
      texto:
        'Delimitamos el problema con el mandante: alcance, información disponible, ' +
        'restricciones y qué decisión hay que tomar al final.',
    },
    {
      icon: 'fa-solid fa-2',
      titulo: 'Análisis',
      texto:
        'Levantamiento y tratamiento de datos, entrevistas y revisión documental. ' +
        'Todo hallazgo queda con su fuente citada.',
    },
    {
      icon: 'fa-solid fa-3',
      titulo: 'Propuesta',
      texto:
        'Alternativas evaluadas, con costos, riesgos y una recomendación explícita. ' +
        'No entregamos un menú sin recomendación.',
    },
    {
      icon: 'fa-solid fa-4',
      titulo: 'Acompañamiento',
      texto:
        'Apoyo en la implementación y seguimiento de indicadores. Es la etapa que ' +
        'distingue un informe archivado de un plan que se ejecuta.',
    },
  ],
}
