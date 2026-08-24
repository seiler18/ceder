/* ============================================================
   CONTACTO — destinos del formulario

   NUNCA pongas aquí una clave de API. Esto se compila a un .js que sirve
   GitHub Pages en claro: cualquiera lo lee con «ver código fuente». Por eso
   el formulario usa FormSubmit, que no necesita credenciales.

   ESTADO ACTUAL: `correo` está VACÍO a propósito. La sociedad todavía no
   tiene buzón corporativo (ver briefing.md). Con `correo` vacío el botón
   «Enviar por correo» se muestra deshabilitado y la sección lo dice
   explícitamente — es más honesto que un formulario que finge enviar.

   CUANDO EXISTA EL CORREO: se escribe aquí y ya está; el botón se habilita
   solo. FormSubmit exige confirmar el buzón la PRIMERA VEZ: se manda un
   envío desde el sitio publicado y se acepta el correo que llega. Hasta
   entonces el formulario responde «pendiente de confirmación», y eso es lo
   que se le enseña al visitante en vez de un «enviado» que sería mentira.
   ============================================================ */

export const contacto = {
  eyebrow: 'Hablemos',
  titulo: 'Contacto',
  subtitulo:
    'Cuéntanos qué necesitas. Si escribes por una licitación o unas bases ' +
    'técnicas, indícalo en el motivo para responderte con los antecedentes ' +
    'formales al día.',

  // PENDIENTE: buzón corporativo. Ver el bloque de arriba.
  correo: '',
  // Formato internacional sin signos: 56912345678. Cadena vacía = sin
  // WhatsApp, y el botón desaparece solo. PENDIENTE.
  whatsapp: '',

  motivos: [
    'Consulta general',
    'Solicitud de propuesta',
    'Licitación o bases técnicas',
    'Otro',
  ],

  /* Se muestran en la columna de al lado del formulario.

     Los datos formales van visibles porque son el contenido más consultado
     de un sitio como este: al evaluar a un oferente, lo primero que se busca
     es la razón social exacta, el RUT y el domicilio.

     Lo que NO va aquí: el RUT de la accionista ni el de la representante ante
     el SII. Son personas naturales y esto se sirve en claro. */
  canales: [
    {
      label: 'Razón social',
      valor: 'Centro de Estudios de Desarrollo Regional CEDER SpA',
      href: null,
      icon: 'fa-solid fa-file-signature',
    },
    {
      label: 'RUT',
      valor: '78.323.652-4',
      href: null,
      icon: 'fa-solid fa-hashtag',
    },
    {
      label: 'Domicilio social',
      valor: 'Puerto Montt, Región de Los Lagos, Chile',
      href: null,
      icon: 'fa-solid fa-location-dot',
    },
    // El domicilio es un dato legal y va etiquetado como tal, para que no se
    // lea como el límite de dónde trabajamos. Esta fila lo aclara.
    {
      label: 'Cobertura',
      valor: 'Todo Chile',
      href: null,
      icon: 'fa-solid fa-map-location-dot',
    },
    {
      label: 'Constitución',
      valor: '29 de diciembre de 2025 · Sociedad por Acciones vigente',
      href: null,
      icon: 'fa-solid fa-calendar-check',
    },
  ],
}

export const endpointCorreo = `https://formsubmit.co/ajax/${contacto.correo}`

export const enlaceWhatsapp = contacto.whatsapp
  ? `https://wa.me/${contacto.whatsapp}`
  : ''
