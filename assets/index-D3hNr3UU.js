(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={nombre:`CEDER SpA`,nombreCorto:`CEDER`,lema:`Decisiones con evidencia para el desarrollo regional`,descripcion:`Centro de estudios que asesora a organismos públicos, empresas y gremios de todo Chile en consultoría, auditoría y planificación estratégica.`,url:`https://seiler18.github.io/ceder/`,armazon:`topbar`,logo:null,monograma:`CD`,idioma:`es`},t=[],n=[],r={antetitulo:`Centro de Estudios de Desarrollo Regional`,bajada:`Acompañamos a organismos públicos, empresas y organizaciones gremiales en el diseño, la evaluación y la gestión de sus decisiones estratégicas. Trabajamos con mandantes de todo Chile.`,acciones:[{label:`Qué hacemos`,href:`#servicios`,icon:`fa-solid fa-arrow-down`},{label:`Contacto`,href:`#contacto`,icon:`fa-solid fa-paper-plane`}],cinta:[],siguiente:`nosotros`};function i(e,t={}){let n={radio:1.5,separacion:14,alcance:500,abombado:67,ondulacion:0,colorA:`#a855f7`,colorB:`#b497cf`,opacidad:.35,...t},r=document.createElement(`canvas`),i=r.getContext(`2d`,{alpha:!0});if(!i)return null;r.style.cssText=`position:absolute;inset:0;width:100%;height:100%;display:block`,e.appendChild(r);let a=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,o=a?0:n.ondulacion,s=Math.min(window.devicePixelRatio||1,2),c=0,l=0,u=[],d={x:-9999,y:-9999,prevX:-9999,prevY:-9999,velocidad:0},f=0,p=0;function m(){let e=n.radio+n.separacion,t=Math.floor(c/e),r=Math.floor(l/e),i=c%e/2,a=l%e/2;u=Array(t*r);let o=0;for(let n=0;n<r;n++)for(let r=0;r<t;r++){let t=i+r*e+e/2,s=a+n*e+e/2;u[o++]={ax:t,ay:s,sx:t,sy:s}}}function h(){let{clientWidth:t,clientHeight:n}=e;!t||!n||(c=t,l=n,r.width=c*s,r.height=l*s,i.setTransform(s,0,0,s,0,0),m(),g())}function g(){p++;let e=p*.02,t=n.alcance*n.alcance,r=n.radio/2,a=Math.min(d.velocidad/5,1);f+=(a-f)*.06,f<.001&&(f=0),i.clearRect(0,0,c,l);let s=i.createLinearGradient(0,0,c,l);s.addColorStop(0,n.colorA),s.addColorStop(1,n.colorB),i.globalAlpha=n.opacidad,i.fillStyle=s,i.beginPath();let m=f>0||o>0;for(let a of u){let s=d.x-a.ax,c=d.y-a.ay,l=s*s+c*c;if(l<t&&f>.01){let e=1-Math.sqrt(l)/n.alcance,t=e*e*n.abombado*f,r=Math.atan2(c,s);a.sx+=(a.ax-Math.cos(r)*t-a.sx)*.15,a.sy+=(a.ay-Math.sin(r)*t-a.sy)*.15}else a.sx+=(a.ax-a.sx)*.1,a.sy+=(a.ay-a.sy)*.1;!m&&(Math.abs(a.sx-a.ax)>.05||Math.abs(a.sy-a.ay)>.05)&&(m=!0);let u=a.sx,p=a.sy;o>0&&(p+=Math.sin(a.ax*.03+e)*o,u+=Math.cos(a.ay*.03+e*.7)*o*.5),i.moveTo(u+r,p),i.arc(u,p,r,0,Math.PI*2)}return i.fill(),i.globalAlpha=1,m}let _=0,v=!0,y=()=>{_=0,g()&&v&&!document.hidden&&(_=requestAnimationFrame(y))},b=()=>{!_&&v&&!document.hidden&&!a&&(_=requestAnimationFrame(y))},x=()=>{cancelAnimationFrame(_),_=0},S=t=>{let n=e.getBoundingClientRect();d.x=t.clientX-n.left,d.y=t.clientY-n.top,b()},C=setInterval(()=>{let e=d.prevX-d.x,t=d.prevY-d.y;d.velocidad+=(Math.hypot(e,t)-d.velocidad)*.5,d.velocidad<.001&&(d.velocidad=0),d.prevX=d.x,d.prevY=d.y},20);a||window.addEventListener(`pointermove`,S,{passive:!0});let w=0,T=()=>{clearTimeout(w),w=setTimeout(h,100)};window.addEventListener(`resize`,T);let E=new IntersectionObserver(([e])=>{v=e.isIntersecting,v?b():x()});E.observe(e);let D=()=>document.hidden?x():b();return document.addEventListener(`visibilitychange`,D),h(),o>0&&b(),{destruir(){x(),clearInterval(C),clearTimeout(w),E.disconnect(),window.removeEventListener(`pointermove`,S),window.removeEventListener(`resize`,T),document.removeEventListener(`visibilitychange`,D),r.remove()}}}function a(){let t=r.acciones.map((e,t)=>`
        <a class="hero-btn ${t===0?`primario`:`fantasma`}" href="${e.href}"
           ${e.externo?`target="_blank" rel="noopener noreferrer"`:``}>
          ${e.icon?`<i class="${e.icon}" aria-hidden="true"></i>`:``}${e.label}
        </a>
      `).join(``),n=r.cinta.length?`
      <ul class="hero-cinta" aria-label="En cifras" data-anim="subir">
        ${r.cinta.map(e=>`
          <li>
            <span class="hero-cinta-dato">${e.dato}</span>
            <span class="hero-cinta-pie">${e.pie}</span>
          </li>
        `).join(``)}
      </ul>
    `:``;return`
    <header class="hero" id="inicio">
      <div class="hero-fondo" aria-hidden="true"></div>
      <!-- Matriz de puntos animada. La monta initHero() (conducta, no render:
           los componentes de aquí son funciones puras que no tocan el DOM). -->
      <div class="hero-puntos" aria-hidden="true"></div>

      <!-- SECUENCIA DE ENTRADA DE LA PORTADA. El atributo data-anim-secuencia
           escalona a los hijos 70ms cada uno (src/lib/reveal.js), y el orden
           del HTML es el orden en el que se quiere que se lean: antetítulo →
           nombre → lema → bajada → botones → cifras. Es lo mismo que se
           leería sin animación, solo que la página lo va marcando. Los seis a
           la vez —lo que había antes, sin animación ninguna en la portada—
           obligan al visitante a decidir por dónde empieza.

           OJO: en este comentario no puede haber comillas invertidas. Está
           DENTRO de un literal de plantilla, y una comilla invertida lo cierra
           ahí mismo: el archivo deja de compilar con un error que señala la
           línea siguiente y no dice nada del comentario. -->
      <div class="hero-contenido" data-anim-secuencia>
        ${r.antetitulo?`<p class="hero-antetitulo" data-anim="subir">${r.antetitulo}</p>`:``}
        <h1 class="hero-titulo" data-anim="subir">${e.nombre}</h1>
        ${e.lema?`<p class="hero-lema" data-anim="subir">«${e.lema}»</p>`:``}
        <p class="hero-bajada" data-anim="subir">${r.bajada}</p>

        <div class="hero-acciones" data-anim="subir">${t}</div>
        ${n}
      </div>

      <!-- Indicador de que hay más abajo. Se oculta en móvil (responsive.css):
           en una pantalla corta cae encima de los botones. -->
      <a class="hero-scroll" href="#${r.siguiente}" aria-label="Ir a la siguiente sección">
        <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
      </a>
    </header>
  `}function o(){let e=document.querySelector(`.hero-puntos`);if(!e)return;let t=getComputedStyle(document.documentElement);i(e,{colorA:t.getPropertyValue(`--primario-claro`).trim()||`#7ba7d4`,colorB:t.getPropertyValue(`--acento`).trim()||`#9ab8d4`,opacidad:.5,ondulacion:0})}function s({id:e,eyebrow:t,titulo:n,subtitulo:r,contenido:i,sinSeparador:a=!1}){return`
    <section class="section" id="${e}">
      ${a?``:`<div class="section-divider" aria-hidden="true"><span></span></div>`}
      <div class="section-inner">
        ${t||n||r?`
        <div class="section-head" data-anim="subir">
          ${t?`<span class="section-eyebrow">${t}</span>`:``}
          ${n?`<h2 class="section-title">${n}</h2>`:``}
          ${n?`<div class="section-rule"></div>`:``}
          ${r?`<p class="section-subtitle">${r}</p>`:``}
        </div>
      `:``}
        ${i}
      </div>
    </section>
  `}function c(e){let t=e.destacados?.length?`
      <ul class="destacados" data-anim-secuencia>
        ${e.destacados.map(e=>`
          <li class="destacado" data-anim="subir">
            ${e.icon?`<i class="${e.icon}" aria-hidden="true"></i>`:``}
            <div>
              <strong>${e.titulo}</strong>
              ${e.texto?`<p>${e.texto}</p>`:``}
            </div>
          </li>
        `).join(``)}
      </ul>
    `:``,n=e.imagen?`
      <figure class="bloque-figura" data-anim="escala">
        <img src="${e.imagen.src}" alt="${e.imagen.alt}" loading="lazy">
        ${e.imagen.pie?`<figcaption>${e.imagen.pie}</figcaption>`:``}
      </figure>
    `:``,r=e.imagen?`
      <div class="bloque-dos-columnas" data-lado="${e.ladoImagen||`derecha`}" data-anim-secuencia>
        <div class="bloque-texto" data-anim="subir">${e.cuerpo}</div>
        ${n}
      </div>
      ${t}
    `:`
      <div class="bloque-texto centrado" data-anim="subir">${e.cuerpo}</div>
      ${t}
    `;return s({...e,contenido:r})}function l(e){let t=e.items||[],n=e=>{let t=e.imagen?`<div class="tarjeta-portada"><img src="${e.imagen.src}" alt="${e.imagen.alt}" loading="lazy"></div>`:e.icon?`<div class="tarjeta-icono"><i class="${e.icon}" aria-hidden="true"></i></div>`:``,n=e.enlace?`
        <p class="tarjeta-accion">
          <a class="btn-linea" href="${e.enlace.href}"
             ${e.enlace.externo?`target="_blank" rel="noopener noreferrer"`:``}>
            ${e.enlace.label}
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      `:``;return`
      <article class="tarjeta" ${e.area?`data-area="${e.area}"`:``} data-anim="subir">
        ${t}
        <div class="tarjeta-cuerpo">
          <h3 class="tarjeta-titulo">${e.titulo}</h3>
          ${e.texto?`<p class="tarjeta-texto">${e.texto}</p>`:``}
          ${n}
        </div>
      </article>
    `},r=``;if(e.filtro){let e=[...new Set(t.map(e=>e.area).filter(Boolean))],n=(e,t,n)=>`
      <button type="button" class="filtro ${e===`todas`?`is-active`:``}"
              data-filtro="${e}">
        ${t} <span class="filtro-cuenta">${n}</span>
      </button>
    `;r=`
      <div class="filtros" role="group" aria-label="Filtrar por área" data-anim="subir">
        ${n(`todas`,`Todas`,t.length)}
        ${e.map(e=>n(e,e,t.filter(t=>t.area===e).length)).join(``)}
      </div>
    `}let i=`
    ${r}
    <!-- data-anim-secuencia: las tarjetas entran escalonadas en vez de todas
         a la vez. Va en la rejilla y no en cada tarjeta porque el retardo lo
         calcula reveal.js con la posición del hijo: añadir una tarjeta no
         obliga a renumerar nada. -->
    <div class="rejilla" data-densidad="${e.densidad||`amplia`}" data-rejilla="${e.id}"
         data-anim-secuencia>
      ${t.map(n).join(``)}
    </div>
    <p class="rejilla-vacia" hidden>No hay nada en esta área todavía.</p>
  `;return s({...e,contenido:i})}function u(){for(let e of document.querySelectorAll(`.filtros`)){let t=e.closest(`.section`),n=t?.querySelector(`.rejilla`),r=t?.querySelector(`.rejilla-vacia`);n&&e.addEventListener(`click`,t=>{let i=t.target.closest(`[data-filtro]`);if(!i)return;for(let t of e.querySelectorAll(`[data-filtro]`))t.classList.toggle(`is-active`,t===i);let a=i.dataset.filtro,o=0;for(let e of n.querySelectorAll(`.tarjeta`)){let t=a===`todas`||e.dataset.area===a;e.hidden=!t,t&&o++}r&&(r.hidden=o>0)})}}var d={eyebrow:`Hablemos`,titulo:`Contacto`,subtitulo:`Cuéntanos qué necesitas. Si escribes por una licitación o unas bases técnicas, indícalo en el motivo para responderte con los antecedentes formales al día.`,correo:``,whatsapp:``,motivos:[`Consulta general`,`Solicitud de propuesta`,`Licitación o bases técnicas`,`Otro`],canales:[{label:`Razón social`,valor:`Centro de Estudios de Desarrollo Regional CEDER SpA`,href:null,icon:`fa-solid fa-file-signature`},{label:`RUT`,valor:`78.323.652-4`,href:null,icon:`fa-solid fa-hashtag`},{label:`Domicilio social`,valor:`Puerto Montt, Región de Los Lagos, Chile`,href:null,icon:`fa-solid fa-location-dot`},{label:`Cobertura`,valor:`Todo Chile`,href:null,icon:`fa-solid fa-map-location-dot`},{label:`Constitución`,valor:`29 de diciembre de 2025 · Sociedad por Acciones vigente`,href:null,icon:`fa-solid fa-calendar-check`}]},f=`https://formsubmit.co/ajax/${d.correo}`,p=d.whatsapp?`https://wa.me/${d.whatsapp}`:``,m=!d.correo;function h(){let e=d.motivos.map(e=>`<option value="${e}">${e}</option>`).join(``),t=d.canales.map(e=>`
      <li>
        <i class="${e.icon}" aria-hidden="true"></i>
        <div>
          <span class="canal-etiqueta">${e.label}</span>
          ${e.href?`<a href="${e.href}">${e.valor}</a>`:`<span>${e.valor}</span>`}
        </div>
      </li>
    `).join(``),n=`
    <div class="contacto-columnas">
      <form class="contacto-form" id="formContacto" novalidate data-anim="subir">
        <div class="contacto-grid">
          <div class="campo">
            <label for="cf-nombre">Nombre</label>
            <input type="text" id="cf-nombre" name="nombre" required maxlength="80"
                   autocomplete="name" placeholder="Cómo te llamas">
          </div>
          <div class="campo">
            <label for="cf-correo">Tu correo</label>
            <input type="email" id="cf-correo" name="correo" required maxlength="120"
                   autocomplete="email" placeholder="para poder responderte">
          </div>
          <div class="campo campo-ancho">
            <label for="cf-motivo">Motivo</label>
            <select id="cf-motivo" name="motivo">${e}</select>
          </div>
          <div class="campo campo-ancho">
            <label for="cf-mensaje">Mensaje</label>
            <textarea id="cf-mensaje" name="mensaje" required maxlength="1500" rows="5"
                      placeholder="Cuéntanos qué necesitas"></textarea>
          </div>
        </div>

        <!-- Trampa para bots: FormSubmit descarta el envío si llega rellena.
             Un humano no la ve, así que siempre llega vacía. -->
        <input type="text" name="_honey" class="campo-trampa" tabindex="-1"
               autocomplete="off" aria-hidden="true">

        <div class="contacto-acciones">
          <button type="submit" class="btn primario" id="btnCorreo"
                  ${m?`disabled aria-describedby="avisoContacto"`:``}>
            <i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Enviar por correo
          </button>
          ${p?`<button type="button" class="btn fantasma" id="btnWhatsapp">
                   <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Enviar por WhatsApp
                 </button>`:``}
        </div>

        <!-- aria-live: quien use lector de pantalla oye el resultado sin
             tener que ir a buscarlo. Sin buzón, el aviso ya viene escrito:
             el visitante se entera antes de redactar el mensaje, no después
             de pulsar. -->
        <p class="contacto-aviso ${m?`visible nota`:``}" id="avisoContacto"
           role="status" aria-live="polite">${m?`El buzón de contacto está en configuración. Mientras tanto, el envío desde el formulario no está disponible.`:``}</p>
      </form>

      <aside class="contacto-datos" data-anim="subir">
        <h3>Antecedentes de la sociedad</h3>
        <ul class="canales">${t}</ul>
      </aside>
    </div>
  `;return s({id:`contacto`,eyebrow:d.eyebrow,titulo:d.titulo,subtitulo:d.subtitulo,contenido:n})}function g(){let e=document.getElementById(`formContacto`);if(!e)return;let t=document.getElementById(`avisoContacto`),n=document.getElementById(`btnCorreo`),r=document.getElementById(`btnWhatsapp`);function i(e,n){t.textContent=e,t.className=`contacto-aviso visible ${n}`}let a=()=>({nombre:e.nombre.value.trim(),correo:e.correo.value.trim(),motivo:e.motivo.value,mensaje:e.mensaje.value.trim()});function o(){return e.checkValidity()?!0:(i(`Faltan datos: revisa el nombre, el correo y el mensaje.`,`malo`),e.querySelector(`:invalid`)?.focus(),!1)}e.addEventListener(`submit`,async t=>{if(t.preventDefault(),m||!o())return;let r=a();n.disabled=!0,i(`Enviando…`,`nota`);try{let t=await fetch(f,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({Nombre:r.nombre,Correo:r.correo,Motivo:r.motivo,Mensaje:r.mensaje,_subject:`Web · ${r.motivo} — ${r.nombre}`,_template:`table`,_captcha:`false`,_honey:e.elements._honey.value})}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(`HTTP ${t.status}`);if(n.success===`false`||n.success===!1){i(n.message||`El envío quedó pendiente de confirmación.`,`nota`);return}e.reset(),i(`¡Mensaje enviado! Te responderemos al correo que dejaste.`,`ok`)}catch(e){console.error(`No se pudo enviar el formulario:`,e),i(`No se pudo enviar. Escríbenos a ${d.correo}.`,`malo`)}finally{n.disabled=!1}}),r?.addEventListener(`click`,()=>{if(!o())return;let e=a(),t=`Hola, escribo desde la web.\n\nMotivo: ${e.motivo}\nNombre: ${e.nombre}\nCorreo: ${e.correo}\n\n${e.mensaje}`;window.open(`${p}?text=${encodeURIComponent(t)}`,`_blank`,`noopener`),i(`Se abrió WhatsApp con el mensaje listo: solo falta enviarlo.`,`ok`)})}var _={id:`nosotros`,eyebrow:`Quiénes somos`,titulo:`Un centro de estudios con alcance nacional`,subtitulo:`Sociedad por Acciones chilena, de duración indefinida, dedicada a la consultoría, la auditoría y la planificación estratégica.`,sinSeparador:!0,cuerpo:`
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
  `,imagen:null,ladoImagen:`derecha`,destacados:[{icon:`fa-solid fa-bullseye`,titulo:`Misión`,texto:`Producir evidencia útil y acompañar su uso, para que las decisiones se tomen sobre datos y no sobre intuiciones.`},{icon:`fa-solid fa-eye`,titulo:`Visión`,texto:`Ser contraparte técnica de referencia en Chile para el diseño, la evaluación y la auditoría de estrategias de desarrollo.`},{icon:`fa-solid fa-scale-balanced`,titulo:`Constitución`,texto:`Inscrita en el Registro de Empresas y Sociedades el 29 de diciembre de 2025. Vigente y de duración indefinida.`}]},v={id:`servicios`,eyebrow:`Qué hacemos`,titulo:`Servicios`,subtitulo:`Seis líneas de trabajo, todas dentro del objeto social de la sociedad. Se contratan por separado o como un encargo integrado.`,filtro:!1,densidad:`amplia`,items:[{titulo:`Consultoría estratégica`,texto:`Estudios, diagnósticos territoriales y sectoriales, y asesoría técnica para decidir con evidencia: qué problema hay, de qué tamaño y qué alternativas existen.`,icon:`fa-solid fa-magnifying-glass-chart`},{titulo:`Auditoría y control`,texto:`Revisión independiente de procesos, programas y convenios. Verificamos cumplimiento, uso de recursos y consistencia entre lo comprometido y lo ejecutado.`,icon:`fa-solid fa-clipboard-check`},{titulo:`Planificación estratégica`,texto:`Formulación y gestión de planes: objetivos, indicadores, metas y responsables. Incluye el seguimiento, que es donde la mayoría de los planes se quedan.`,icon:`fa-solid fa-diagram-project`},{titulo:`Gremios y asociaciones`,texto:`Apoyo técnico a organizaciones empresariales, profesionales y de empleadores: estudios de sector, posicionamiento ante la autoridad y gestión de sus propios procesos.`,icon:`fa-solid fa-people-group`},{titulo:`Servicios profesionales a empresas`,texto:`Equipos y profesionales para encargos que la empresa no quiere internalizar: informes técnicos, contrapartes de proyecto y acompañamiento acotado en el tiempo.`,icon:`fa-solid fa-briefcase`},{titulo:`Gestión pública y privada`,texto:`Diseño y mejora de la gestión de organizaciones de ambos mundos, incluida la preparación y el seguimiento de convenios entre el sector público y privados.`,icon:`fa-solid fa-landmark`}]},y={id:`metodologia`,eyebrow:`Cómo trabajamos`,titulo:`Un encargo, cuatro etapas`,subtitulo:`El mismo recorrido para un estudio municipal y para un plan de empresa. Cambia la profundidad de cada etapa, no el orden.`,cuerpo:`
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
  `,imagen:null,destacados:[{icon:`fa-solid fa-1`,titulo:`Diagnóstico`,texto:`Delimitamos el problema con el mandante: alcance, información disponible, restricciones y qué decisión hay que tomar al final.`},{icon:`fa-solid fa-2`,titulo:`Análisis`,texto:`Levantamiento y tratamiento de datos, entrevistas y revisión documental. Todo hallazgo queda con su fuente citada.`},{icon:`fa-solid fa-3`,titulo:`Propuesta`,texto:`Alternativas evaluadas, con costos, riesgos y una recomendación explícita. No entregamos un menú sin recomendación.`},{icon:`fa-solid fa-4`,titulo:`Acompañamiento`,texto:`Apoyo en la implementación y seguimiento de indicadores. Es la etapa que distingue un informe archivado de un plan que se ejecuta.`}]},b={id:`sectores`,eyebrow:`Con quién trabajamos`,titulo:`A quién atendemos`,subtitulo:`Cuatro tipos de mandante, con exigencias distintas de formato y de plazo.`,filtro:!1,densidad:`compacta`,items:[{titulo:`Sector público`,texto:`Municipios, gobierno regional y servicios públicos. Encargos con bases técnicas, plazos formales y productos sujetos a revisión de contraparte.`,icon:`fa-solid fa-building-columns`},{titulo:`Empresas privadas`,texto:`Desde la empresa familiar que formaliza su planificación hasta la que necesita una auditoría independiente para un tercero.`,icon:`fa-solid fa-industry`},{titulo:`Gremios y asociaciones`,texto:`Organizaciones empresariales, profesionales y de empleadores que necesitan respaldo técnico para representar a su sector.`,icon:`fa-solid fa-handshake`},{titulo:`Organizaciones profesionales`,texto:`Colegios, colectivos y equipos técnicos que requieren estudios, metodologías o una contraparte externa para sus propios procesos.`,icon:`fa-solid fa-user-tie`}]},x=[{id:`inicio`,label:`Inicio`,short:`Inicio`,icon:`fa-solid fa-house`,render:a},{id:`nosotros`,label:`Quiénes somos`,short:`Nosotros`,icon:`fa-solid fa-building`,render:()=>c(_)},{id:`servicios`,label:`Servicios`,short:`Servicios`,icon:`fa-solid fa-briefcase`,render:()=>l(v)},{id:`metodologia`,label:`Cómo trabajamos`,short:`Método`,icon:`fa-solid fa-route`,render:()=>c(y)},{id:`sectores`,label:`A quién atendemos`,short:`Sectores`,icon:`fa-solid fa-people-group`,render:()=>l(b)},{id:`contacto`,label:`Contacto`,short:`Contacto`,icon:`fa-solid fa-paper-plane`,render:h}],S=x.filter(e=>e.enMenu!==!1);function C(t){return`
    <a class="${t}" href="#inicio" aria-label="Ir al inicio">
      ${e.logo?`<img class="${t}-logo" src="${e.logo}" alt="${e.nombre}" width="40" height="40">`:`<span class="${t}-monograma" aria-hidden="true">${e.monograma}</span>`}
      <span class="${t}-texto">
        <span class="${t}-nombre">${e.nombre}</span>
        ${e.lema?`<span class="${t}-lema">${e.lema}</span>`:``}
      </span>
    </a>
  `}function w(e){return S.map(t=>`
      <li>
        <a class="${e}" href="#${t.id}" data-spy-link="${t.id}">
          <i class="${t.icon}" aria-hidden="true"></i>
          <span class="nav-largo">${t.label}</span>
          <span class="nav-corto">${t.short}</span>
        </a>
      </li>
    `).join(``)}function T(){return n.map(e=>`
      <a class="btn-descarga" href="${e.href}" target="_blank" rel="noopener noreferrer"
         download="${e.download}">
        <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>${e.label}
      </a>
    `).join(``)}function E(){return t.map(e=>`
      <a href="${e.href}" target="_blank" rel="noopener noreferrer"
         title="${e.label}" aria-label="${e.label}">
        <i class="${e.icon}" aria-hidden="true"></i>
      </a>
    `).join(``)}function D(){return`
    <header class="topbar">
      <div class="topbar-inner">
        ${C(`marca`)}

        <nav class="topbar-nav" aria-label="Secciones">
          <ul>${w(`nav-link`)}</ul>
        </nav>

        <!-- Fuera del <nav> a propósito: en móvil el <nav> baja a la cinta
             inferior y las descargas tienen que quedarse arriba. -->
        ${n.length?`<div class="topbar-extras">${T()}</div>`:``}
      </div>
    </header>
  `}function O(){return`
    <aside class="sidenav" aria-label="Secciones">
      <div class="sidenav-brand">${C(`marca`)}</div>
      <ul class="sidenav-nav">${w(`nav-link`)}</ul>
      <div class="sidenav-actions">
        ${T()}
        ${t.length?`<div class="sidenav-social">${E()}</div>`:``}
      </div>
    </aside>

    <!-- En el armazón 'sidebar' la barra superior queda casi vacía en
         escritorio, pero en móvil es donde vive la marca: la sidebar se
         convierte en barra de iconos y su cabecera desaparece por falta de
         sitio. Sin esto, el logo no se ve en el celular. -->
    <header class="topbar topbar-minima">
      <div class="topbar-inner">
        ${C(`marca marca-movil`)}
        ${n.length?`<div class="topbar-extras">${T()}</div>`:``}
      </div>
    </header>
  `}function k(){return e.armazon===`sidebar`?O():D()}function A(){let n=S.map(e=>`<li><a href="#${e.id}">${e.label}</a></li>`).join(``),r=t.map(e=>`
      <a href="${e.href}" target="_blank" rel="noopener noreferrer" aria-label="${e.label}">
        <i class="${e.icon}" aria-hidden="true"></i> <span>${e.label}</span>
      </a>
    `).join(``);return`
    <footer class="pie">
      <div class="pie-inner">
        <div class="pie-marca">
          <span class="pie-nombre">${e.nombre}</span>
          ${e.lema?`<p class="pie-lema">«${e.lema}»</p>`:``}
          ${d.correo?`<p class="pie-dato"><a href="mailto:${d.correo}">${d.correo}</a></p>`:``}
        </div>

        <nav class="pie-nav" aria-label="Mapa del sitio">
          <h2>Secciones</h2>
          <ul>${n}</ul>
        </nav>

        ${t.length?`<div class="pie-redes">
                 <h2>Síguenos</h2>
                 <div class="pie-redes-lista">${r}</div>
               </div>`:``}
      </div>

      <p class="pie-legal">
        © ${e.nombre} ${new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </footer>
  `}var j=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,M=()=>window.matchMedia(`(hover: hover) and (pointer: fine)`).matches;function N(e){j()||!M()||document.addEventListener(`pointermove`,t=>{let n=t.target.closest?.(e);if(!n)return;let r=n.getBoundingClientRect();n.style.setProperty(`--mx`,`${t.clientX-r.left}px`),n.style.setProperty(`--my`,`${t.clientY-r.top}px`)},{passive:!0})}function P(e,{alcance:t=90,fuerza:n=.22,maximo:r=9}={}){if(j()||!M())return;let i=[...document.querySelectorAll(e)];i.length&&document.addEventListener(`pointermove`,e=>{for(let a of i){let i=a.getBoundingClientRect(),o=e.clientX-(i.left+i.width/2),s=e.clientY-(i.top+i.height/2),c=Math.max(Math.abs(o)-i.width/2,0),l=Math.max(Math.abs(s)-i.height/2,0);if(Math.hypot(c,l)>t){a.style.removeProperty(`--mag-x`),a.style.removeProperty(`--mag-y`);continue}let u=e=>Math.max(-r,Math.min(r,e*n));a.style.setProperty(`--mag-x`,`${u(o)}px`),a.style.setProperty(`--mag-y`,`${u(s)}px`)}},{passive:!0})}function F({linkSelector:e=`[data-spy-link]`,offset:t=96}={}){let n=new Map;for(let t of document.querySelectorAll(e)){let e=document.getElementById(t.dataset.spyLink);e&&(n.has(e)||n.set(e,{section:e,links:[]}),n.get(e).links.push(t))}let r=[...n.values()];if(!r.length)return()=>{};let i=null,a=!1;function o(e){if(e!==i){if(i)for(let e of i.links)e.classList.remove(`is-active`),e.removeAttribute(`aria-current`);for(let t of e.links)t.classList.add(`is-active`),t.setAttribute(`aria-current`,`true`);i=e}}function s(){a=!1;let e=window.scrollY;if(e+window.innerHeight>=document.documentElement.scrollHeight-4){o(r[r.length-1]);return}let n=e+t,i=r[0];for(let t of r)if(t.section.getBoundingClientRect().top+e<=n)i=t;else break;o(i)}function c(){a||(a=!0,requestAnimationFrame(s))}return window.addEventListener(`scroll`,c,{passive:!0}),window.addEventListener(`resize`,c),window.addEventListener(`load`,c),s(),c}var I=`0px 0px -12% 0px`,L=70,R=6;function z(){let e=document.querySelectorAll(`[data-anim]`);if(!e.length)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window)){for(let t of e)t.classList.add(`anim-visible`);return}let t=e=>{let t=Number(e.dataset.animEspera);if(t)return t;let n=e.parentElement;if(!n||!n.hasAttribute(`data-anim-secuencia`))return 0;let r=[...n.children].filter(e=>e.hasAttribute(`data-anim`)).indexOf(e);return Math.min(r,R)*L},n=new IntersectionObserver((e,n)=>{for(let r of e){if(!r.isIntersecting)continue;let e=r.target,i=t(e);i&&(e.style.transitionDelay=`${i}ms`),e.classList.add(`anim-visible`),n.unobserve(e)}},{rootMargin:I,threshold:.05}),r=e=>{let t=e.target;t.hasAttribute(`data-anim`)&&t.style.transitionDelay&&(t.style.transitionDelay=``)};for(let t of e)t.addEventListener(`transitionend`,r,{once:!0}),n.observe(t)}function B(){let e=document.querySelectorAll(`[data-modal]`);if(e.length){for(let t of e)t.addEventListener(`click`,()=>{let e=document.querySelector(t.dataset.modal);if(!e){console.warn(`Modal no encontrado: ${t.dataset.modal}`);return}e.parentElement!==document.body&&document.body.appendChild(e),e.showModal()});for(let e of document.querySelectorAll(`dialog.modal`)){e.addEventListener(`click`,t=>{let n=e.querySelector(`.modal-caja`);if(!n)return;let r=n.getBoundingClientRect();t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom||e.close()});for(let t of e.querySelectorAll(`[data-cerrar-modal]`))t.addEventListener(`click`,()=>e.close())}}}var V=`.tarjeta, .destacado`,H=`esta-tocada`,U=260;function W(){if(!window.matchMedia(`(pointer: coarse)`).matches)return;let e=null,t=0,n=0,r=()=>{clearTimeout(n),e&&e.classList.remove(H),e=null};document.addEventListener(`pointerdown`,n=>{let i=n.target.closest(V);i&&(r(),e=i,t=performance.now(),i.classList.add(H))},{passive:!0}),document.addEventListener(`pointerup`,()=>{if(!e)return;let r=e,i=Math.max(0,U-(performance.now()-t));e=null,clearTimeout(n),n=setTimeout(()=>r.classList.remove(H),i)},{passive:!0}),document.addEventListener(`pointercancel`,r,{passive:!0})}var G=document.getElementById(`app`);document.body.dataset.armazon=e.armazon,G.innerHTML=`
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  ${k()}
  <div class="app-main">
    <main id="contenido">
      ${x.map(e=>e.render()).join(`
`)}
    </main>
    ${A()}
  </div>
`;var K=F({offset:96});z(),o(),N(`.tarjeta, .destacado`),P(`.hero-btn`,{alcance:70,fuerza:.16,maximo:6}),B(),u(),g(),W(),window.addEventListener(`load`,K),document.addEventListener(`click`,e=>{e.target.closest(`[data-filtro]`)&&setTimeout(K,60)});