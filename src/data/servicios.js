/* ============================================================
   SERVICIOS

   Las seis tarjetas son las seis actividades del Artículo Cuarto de los
   estatutos, una por una. No hay ninguna inventada: si alguien compara el
   sitio con el certificado de estatutos, cuadra. La tabla de correspondencia
   está en briefing.md.

   `filtro: false` porque son seis: por debajo de una docena la botonera
   estorba más que ayuda, ya se ven todas de un vistazo.
   ============================================================ */

export const servicios = {
  id: 'servicios',
  eyebrow: 'Qué hacemos',
  titulo: 'Servicios',
  subtitulo:
    'Seis líneas de trabajo, todas dentro del objeto social de la sociedad. ' +
    'Se contratan por separado o como un encargo integrado.',
  filtro: false,
  densidad: 'amplia',

  items: [
    {
      titulo: 'Consultoría estratégica',
      texto:
        'Estudios, diagnósticos territoriales y sectoriales, y asesoría técnica ' +
        'para decidir con evidencia: qué problema hay, de qué tamaño y qué ' +
        'alternativas existen.',
      icon: 'fa-solid fa-magnifying-glass-chart',
    },
    {
      titulo: 'Auditoría y control',
      texto:
        'Revisión independiente de procesos, programas y convenios. Verificamos ' +
        'cumplimiento, uso de recursos y consistencia entre lo comprometido y lo ' +
        'ejecutado.',
      icon: 'fa-solid fa-clipboard-check',
    },
    {
      titulo: 'Planificación estratégica',
      texto:
        'Formulación y gestión de planes: objetivos, indicadores, metas y ' +
        'responsables. Incluye el seguimiento, que es donde la mayoría de los ' +
        'planes se quedan.',
      icon: 'fa-solid fa-diagram-project',
    },
    {
      titulo: 'Gremios y asociaciones',
      texto:
        'Apoyo técnico a organizaciones empresariales, profesionales y de ' +
        'empleadores: estudios de sector, posicionamiento ante la autoridad y ' +
        'gestión de sus propios procesos.',
      icon: 'fa-solid fa-people-group',
    },
    {
      titulo: 'Servicios profesionales a empresas',
      texto:
        'Equipos y profesionales para encargos que la empresa no quiere internalizar: ' +
        'informes técnicos, contrapartes de proyecto y acompañamiento acotado en el ' +
        'tiempo.',
      icon: 'fa-solid fa-briefcase',
    },
    {
      titulo: 'Gestión pública y privada',
      texto:
        'Diseño y mejora de la gestión de organizaciones de ambos mundos, incluida ' +
        'la preparación y el seguimiento de convenios entre el sector público y ' +
        'privados.',
      icon: 'fa-solid fa-landmark',
    },
  ],
}
