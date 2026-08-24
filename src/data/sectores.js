/* ============================================================
   A QUIÉN ATENDEMOS

   Los cuatro tipos de mandante salen del objeto social (Art. Cuarto): la
   gestión pública y privada, las actividades de organizaciones empresariales,
   profesionales y de empleadores, y los servicios prestados a empresas.

   Rejilla de tarjetas y no bloque: son cuatro categorías comparables entre
   sí, que el visitante recorre para encontrar la suya.
   ============================================================ */

export const sectores = {
  id: 'sectores',
  eyebrow: 'Con quién trabajamos',
  titulo: 'A quién atendemos',
  subtitulo:
    'Cuatro tipos de mandante, con exigencias distintas de formato y de plazo.',
  filtro: false,
  densidad: 'compacta',

  items: [
    {
      titulo: 'Sector público',
      texto:
        'Municipios, gobierno regional y servicios públicos. Encargos con bases ' +
        'técnicas, plazos formales y productos sujetos a revisión de contraparte.',
      icon: 'fa-solid fa-building-columns',
    },
    {
      titulo: 'Empresas privadas',
      texto:
        'Desde la empresa familiar que formaliza su planificación hasta la que ' +
        'necesita una auditoría independiente para un tercero.',
      icon: 'fa-solid fa-industry',
    },
    {
      titulo: 'Gremios y asociaciones',
      texto:
        'Organizaciones empresariales, profesionales y de empleadores que necesitan ' +
        'respaldo técnico para representar a su sector.',
      icon: 'fa-solid fa-handshake',
    },
    {
      titulo: 'Organizaciones profesionales',
      texto:
        'Colegios, colectivos y equipos técnicos que requieren estudios, ' +
        'metodologías o una contraparte externa para sus propios procesos.',
      icon: 'fa-solid fa-user-tie',
    },
  ],
}
