# Briefing — Centro de Estudios de Desarrollo Regional CEDER SpA

- **Fecha:** 2026-08-23
- **Estado:** aprobado por el usuario (2026-08-23)
- **Fuentes:** `Estatutos empresa.pdf` (Certificado de Estatuto Actualizado,
  Registro de Empresas y Sociedades, CVE `CRQt9rqXC1PR`, emitido el
  06-01-2026), conversación del 2026-08-23.

## Qué es esto

CEDER SpA es un centro de estudios constituido como Sociedad por Acciones el
**29 de diciembre de 2025** en **Puerto Montt, Región de Los Lagos**, con
duración indefinida. Su objeto social es la **consultoría, la auditoría y la
gestión de planificación estratégica**, además de las actividades de
organizaciones empresariales, profesionales y de empleadores, los servicios
profesionales prestados a empresas y la **gestión pública y privada**
(Artículo Cuarto de los estatutos).

Puede establecer agencias y sucursales en el resto del país o en el extranjero
(Artículo Segundo), de modo que el sitio no debe leerse como puramente local.

## Objetivo del sitio

Híbrido, decidido por el usuario: **perfil institucional** que además sirva
para **postular a licitaciones públicas**, sin cerrarse a clientes privados.

En la práctica esto define:

- Tono formal, verificable, sin lenguaje comercial agresivo.
- Los **datos formales de la sociedad son contenido**, no letra pequeña:
  razón social, RUT y domicilio van visibles en Contacto, porque es lo primero
  que se revisa al evaluar a un proveedor del Estado.
- Acción principal del visitante: **entender qué hace CEDER** (botón primario
  del hero → Servicios). Acción secundaria: contactar.

## Público

Tres audiencias, en este orden:

1. **Sector público** — municipios, gobierno regional, servicios públicos que
   evalúan a un oferente.
2. **Empresas privadas** que buscan consultoría, auditoría o planificación.
3. **Gremios y organizaciones empresariales y profesionales.**

Tono: institucional, en primera persona plural, sin superlativos ni cifras que
no se puedan probar.

## Identidad

| Campo | Valor | Fuente |
|---|---|---|
| Nombre completo | Centro de Estudios de Desarrollo Regional CEDER SpA | Estatutos, Art. Primero |
| Nombre corto | CEDER SpA | Estatutos (nombre de fantasía) |
| Monograma | CD | Decidido (no hay logo) |
| Lema | Decisiones con evidencia para el desarrollo regional | Propuesto — pendiente de validar |
| Logo | `[PENDIENTE]` — se usa el monograma | — |
| Armazón | `topbar` | Decidido: es lo que se espera en un sitio de empresa |
| Paleta | Pizarra Institucional | Elegida por el usuario |
| Tipografía | Montserrat / Open Sans | Decidido: corporativo clásico, la combinación de consultoría y auditoría |

## Secciones

| # | Id | Título | Tipo | Contenido |
|---|---|---|---|---|
| 1 | `inicio` | — | hero | Antetítulo, bajada de dos frases, 2 botones. Sin cinta de cifras |
| 2 | `nosotros` | Quiénes somos | bloque | 2 párrafos cortos + destacados Misión / Visión / Constitución |
| 3 | `servicios` | Servicios | tarjetas | 6 líneas, una por cada actividad del objeto social |
| 4 | `metodologia` | Cómo trabajamos | bloque | Prosa + 4 etapas como destacados |
| 5 | `sectores` | A quién atendemos | tarjetas | 4 tipos de mandante |
| 6 | `contacto` | Contacto | contacto | Formulario + datos formales de la sociedad |

## Contenido por sección

### 1. Inicio (hero)

- **Antetítulo:** Centro de Estudios de Desarrollo Regional — la razón social
  desplegada, porque el `<h1>` es la marca corta («CEDER SpA») y quien llega
  buscando «centro de estudios» tiene que leerla completa sin bajar.
- **Bajada:** «Acompañamos a organismos públicos, empresas y organizaciones
  gremiales en el diseño, la evaluación y la gestión de sus decisiones
  estratégicas. Trabajamos con mandantes de todo Chile.»
  *(Revisión del 2026-08-23: se quitó «Con base en Puerto Montt, Región de Los
  Lagos» a pedido del cliente. El sitio no debe leerse como limitado a una
  zona; el domicilio social queda en Contacto, etiquetado como tal, junto a
  una fila de cobertura «Todo Chile».)*
- **Botones:** `Qué hacemos` → `#servicios` (primario) · `Contacto` →
  `#contacto`
- **Cinta de cifras:** vacía a propósito. No hay todavía ninguna cifra
  verificable (la sociedad se constituyó en diciembre de 2025) y un número
  inventado cuesta más credibilidad de la que aporta.

### 2. Quiénes somos

Título: «Un centro de estudios con alcance nacional».

**Dos párrafos cortos** (revisión del 2026-08-23: eran tres densos y el cliente
pidió resumir para que no dé pereza leerlos). Lo que se recortó no se perdió:
la fecha de constitución está en los destacados, el domicilio en Contacto y el
detalle del objeto social en Servicios, tarjeta por tarjeta.

Destacados: **Misión**, **Visión** y **Constitución**, de largo parejo. Misión
y visión son **texto propuesto**, redactado a partir del objeto social — hay
que validarlas.

### 3. Servicios — las seis del objeto social

| Tarjeta | De dónde sale |
|---|---|
| Consultoría estratégica | «la consultoría» |
| Auditoría y control | «auditoría» |
| Planificación estratégica | «la gestión de planificación estratégica» |
| Gremios y asociaciones | «actividades de organizaciones empresariales, profesionales y de empleadores» |
| Servicios profesionales a empresas | «actividades empresariales y de profesionales prestadas a empresas no clasificadas previamente» |
| Gestión pública y privada | «la gestión pública y privada y otras actividades de servicios» |

Seis tarjetas → `filtro: false` (por debajo de una docena, el filtro estorba).

### 4. Cómo trabajamos

Cuatro etapas: **diagnóstico → análisis → propuesta → acompañamiento**.
Es **texto propuesto**, no un dato de los estatutos: describe una metodología
estándar de consultoría y hay que ajustarla a cómo trabaja CEDER de verdad.
Se incluye porque en una licitación la metodología se pregunta siempre.

### 5. A quién atendemos

Sector público · Empresas privadas · Gremios y asociaciones · Organizaciones
profesionales. Los cuatro salen del objeto social.

### 6. Contacto

Formulario (FormSubmit) + datos formales visibles:

| Dato | Valor |
|---|---|
| Razón social | Centro de Estudios de Desarrollo Regional CEDER SpA |
| RUT | 78.323.652-4 |
| Domicilio social | Puerto Montt, Región de Los Lagos, Chile |
| Cobertura | Todo Chile |
| Correo | `[PENDIENTE]` |
| Teléfono | `[PENDIENTE]` |

## Contacto

- **Correo del formulario:** `[PENDIENTE]`. El usuario indicó que todavía no
  existe buzón corporativo. Mientras no lo haya, el botón «Enviar por correo»
  se muestra **deshabilitado** con un aviso explícito en la sección: es más
  honesto que un formulario que finge enviar.
- **WhatsApp:** `[PENDIENTE]`. Vacío hace desaparecer el botón solo.
- **Aviso para cuando exista el correo:** FormSubmit exige **confirmar el
  buzón la primera vez**. Se hace un envío desde el sitio publicado y se
  acepta el correo que llega; hasta entonces el formulario responde «pendiente
  de confirmación». Es lo normal, no un fallo.

## Publicación

- **Repositorio previsto:** `ceder` (cuenta `seiler18`).
- **URL de producción prevista:** `https://seiler18.github.io/ceder/`.
- **Estado:** **no se publica todavía.** El usuario pidió verlo en local. El
  `base` de Vite y `site.url` ya quedan cuadrados, para que publicar sea solo
  ejecutar la skill `desplegar`.

## Assets que faltan

| Asset | Para qué | Mínimo útil |
|---|---|---|
| Logo | Sustituye el monograma en la cabecera | PNG con fondo transparente, alto ≥ 200 px |
| `favicon.webp` | Icono de pestaña | 64×64. **Hay uno generado con el monograma** — provisional, no es el logo |
| `og.webp` | Imagen al compartir el enlace | 1200×630. **Hay uno generado** — provisional |
| Foto de oficina o equipo | Columna de «Quiénes somos» | 1600 px de ancho, WebP |
| Correo corporativo | Formulario de contacto | — |

## Fuera de alcance

- **Blog y publicaciones.** Un centro de estudios acaba queriéndolo, pero sin
  artículos escritos la sección se ve vacía y resta. Se añade cuando haya al
  menos tres.
- **Sección de equipo.** Los estatutos nombran a la representante ante el SII,
  pero un nombre y un RUT de persona natural no se publican sin permiso
  explícito. Se añade cuando el cliente aporte nombres, cargos y fotos.
- **Cartera de proyectos y clientes.** La sociedad es de diciembre de 2025; no
  hay trayectoria que mostrar todavía.
- **Descarga de los estatutos.** El PDF fuente lleva RUT de persona natural:
  queda en `tools/`, fuera del repositorio.
- **Publicación en GitHub Pages.** No la pidió el usuario en este pase.
