---
sidebar_position: 1
---

# Portal Web beni.gob.bo - Sitio Oficial de la Gobernación

## Introducción

Bienvenido a la documentación del **Portal Web beni.gob.bo**, el sitio oficial del Gobierno Autónomo Departamental del Beni. Este portal es un sitio web basado en WordPress que sirve como la presencia digital principal de la institución gubernamental.

El sitio fue renovado en agosto de 2025 y constituye el canal oficial de comunicación entre el gobierno departamental y los ciudadanos, incluyendo información institucional, noticias, servicios y enlaces a los demás sistemas gubernamentales.

## Propósito y Beneficios

*   **Presencia Institucional:** Sitio web oficial del Gobierno Autónomo Departamental del Beni.
*   **Comunicación Pública:** Canal principal para noticias y comunicados oficiales.
*   **Acceso a Servicios:** Enlaces directos a los sistemas de servicios gubernamentales.
*   **Transparencia:** Información institucional y de gestión pública.
*   **Interacción Ciudadana:** Redes sociales oficiales integradas.

## Módulos y Funcionalidades

El sistema se organiza en los siguientes módulos principales:

### Portal Público

*   **Hero Section:** Banner principal con imagen y llamada a la acción.
*   **Sección de Servicios:** Tarjetas con enlaces a sistemas gubernamentales.
*   **Blog/Noticias:** Listado de publicaciones institucionales.
*   **Sección Sobre Nosotros:** Información institucional (misión, visión).
*   **Redes Sociales:** Integración con Facebook, X, Instagram, TikTok.
*   **Formulario de Contacto:** Información de contacto y comunicación.
*   **Footer:** Enlaces secundarios y políticas.

### Gestión de Contenido (Admin WordPress)

*   **Publicaciones:** CRUD de posts/artículos.
*   **Páginas:** CRUD de páginas estáticas.
*   **Medios:** Gestión de archivos e imágenes.
*   **Comentarios:** Moderación de comentarios.
*   **Usuarios:** Gestión de usuarios y roles.
*   **Apariencia:** Temas, widgets, menús.
*   **Plugins:** Gestión de extensiones.

### Sistemas Vinculados

El portal incluye acceso directo a los siguientes sistemas:

*   **Gaceta** - Portal de publicaciones legales (`gaceta.beni.gob.bo`)
*   **SISCOR** - Seguimiento de Trámites (`siscor.beni.gob.bo`)
*   **Transparencia** - Portal de transparencia (`transparencia.beni.gob.bo`)
*   **Almacén** - Sistema de Almacén (`almacen.beni.gob.bo`)
*   **Minería** - Sistema de Minería (`mineria.beni.gob.bo`)
*   **SIRETRA** - Sistema de Registro para el Transporte (`transporte.beni.gob.bo`)

## Estructura del Sistema

```
┌──────────────────────────────────────────────────────────┐
│                    PORTAL PÚBLICO                         │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │                    HEADER                           │  │
│  │  Logo | Menú Navegación | Buscador | Redes Sociales │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │                 HERO SECTION                      │  │
│  │  [Banner] [Título] [Descripción] [Botones]        │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │              SECCIÓN SERVICIOS                     │  │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐   │  │
│  │  │ Gaceta │ │ SISCOR │ │Transpa.│ │Otros...│   │  │
│  │  └────────┘ └────────┘ └────────┘ └────────┘   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │              SECCIÓN NOTICIAS                      │  │
│  │  [Featured] [Post 1] [Post 2] [Post 3] ...      │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │           SECCIÓN SOBRE NOSOTROS                  │  │
│  │  [Misión] [Visión] [Imagen Institucional]        │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │              CONTÁCTANOS                          │  │
│  │  [Dirección] [Teléfono] [Email] [Formulario]     │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │                    FOOTER                         │  │
│  │  Logo | Links | Redes | Copyright                 │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                 PANEL DE ADMINISTRACIÓN                    │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ _sidebar                                          │  │
│  │  ┌───────────────────────────���──────────────────┐ │  │
│  │  │ Dashboard                                  │ │  │
│  │  │ Posts                                     │ │  │
│  │  │ Medios                                    │ │  │
│  │  │ Páginas                                  │ │  │
│  │  │ Comentarios                              │ │  │
│  │  │ Apariencia                               │ │  │
│  │  │ Plugins                                  │ │  │
│  │  │ Usuarios                                 │ │  │
│  │  │ Herramientas                             │ │  │
│  │  │ Ajustes                                  │ │  │
│  │  └──────────────────────────────────────────────┘ │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Taxonomías y Contenido

### Tipos de Contenido

#### 1. Posts (Publicaciones/Blog)

Artículos de noticias y comunicaciones oficiales.

**Categorías:**
*   Cultura
*   Educación
*   Infraestructura
*   Salud
*   Sin Categoría

#### 2. Páginas

Páginas estáticas del sitio.

**Ejemplos:**
*   Inicio
*   Gobernador
*   Blog
*   Servicios
*   Transparencia
*   Política de Privacidad

### Tipos de Personalización

| Recurso              |Descripción                                      |
| :-------------------| :----------------------------------------------- |
| Posts              | Artículos del blog/noticias                        |
| Páginas           | Páginas estáticas                              |
| Categorías         | Taxonomía para posts                             |
| Etiquetas          | Tags para organización de contenido              |
| Medios             | Imágenes y archivos                            |
| Menús             | Navegación del sitio                         |
| Widgets           | Complementary sidebar content                |
| Bloques Gtenberg  | Blocks configurables                        |

## Flujo de Navegación

### 1. Acceso al Portal

**URL Principal:** `https://beni.gob.bo/`

**Componentes:**
*   Header con navegador y logo.
*   Menú de navegación principal.
*   Buscador del sitio.
*   Enlaces a redes sociales.

### 2. Navegación por Secciones

1.  **Inicio:** Página principal con contenido destacado.
2.  **Gobernador:** Información del Gobernador departamental.
3.  **Blog:** Listado de todas las noticias.
4.  **Servicios:** Tarjetas con enlaces a sistemas.
5.  **Transparencia:** Redirección al portal de transparencia.

### 3. Acceso a Servicios

Desde el menú "Servicios" o "Más Sistemas":
*   Clic en la tarjeta del sistema.
*   Redirección al sistema correspondiente en el subdominio.

```html
<!-- Ejemplo de enlace a sistema -->
<a href="https://gaceta.beni.gob.bo" class="service-card">
    <span class="icon">📄</span>
    <span class="title">Gaceta</span>
</a>
```

### 4. Contacto

Formas de contacto disponibles:
*   **Dirección física:** Plaza José Ballivian, Trinidad.
*   **Teléfono:** 346-21651.
*   **Email:** despacho@beni.gob.bo.
*   **Redes sociales:** Enlaces en header y footer.

## Panel de Administración

**URL:** `/wp-admin`

Acceso mediante credenciales WordPress:

### Gestión de Publicaciones

| Campo           | Descripción                                           |
| :--------------| :----------------------------------------------------- |
| Título         | Título del artículo                                   |
| Editor         | Contenido (Gutenberg/Classic)                        |
| Categoría      | Clasificación                                        |
| Etiquetas      | Tags                                                 |
| Imagen Destacada| Thumbnail                                          |
| Extracto       | Descripción corta                                     |
| Fecha          | Fecha de publicación                                 |
| Autor          | Usuario creador                                      |

### Gestión de Páginas

| Campo           | Descripción                                           |
| :--------------| :----------------------------------------------------- |
| Título         | Título de la página                                   |
| Editor         | Contenido                                            |
| Plantilla      | Plantilla de página                                   |
| Imagen Destacada| Thumbnail                                          |
| Orden          | Orden en menú (si aplica)                              |

### Gestión de Medios

*   Biblioteca de medios.
*   Carga de imágenes, documentos, videos.
*   Edición básica de imágenes.

## Configuración del Sitio

En WordPress > Apariencia > Personalizar:

| Configuración          | Descripción                                      |
| :--------------------- | :----------------------------------------------- |
| **Identidad del sitio**| Título y descripción                             |
| **Logotipo**          | Imagen del logo                                |
| **Colores**           | Paleta de colores del tema                      |
| **Menú**              | Navegación principal                          |
| **Widgets**           | Sidebar y footer widgets                       |
| **Página de inicio**  | Configuración de homepage                     |
| **CSS adicional**     | Personalización CSS                            |

## Información de Contacto

*   **Dirección:** Plaza José Ballivian acera sur, Santísima Trinidad – Beni
*   **Teléfono:** 346-21651
*   **Email:** despacho@beni.gob.bo

## Redes Sociales

*   **Facebook:** @GobernacionDelBeni
*   **X (Twitter):** @GAD_Beni
*   **Instagram:** @gobernacionbeni
*   **TikTok:** @gobiernoautonomodelbeni

## Tecnologías

El sitio está construido sobre WordPress utilizando:
*   **Tema:** GeneratePress
*   **Editor:** Uve Blocks (Gutenberg)
*   **Plugins:** Plugins adicionales para funcionalidad.
*   **Hosting:** Infraestructura del GAD Beni.

## Información Adicional

### Misión

Ser el **Gobierno Autónomo Departamental del Beni** que, con transparencia y eficiencia, impulsa el desarrollo integral del departamento, promoviendo el bienestar de su población, la protección de su medio ambiente y la consolidación de su identidad cultural, a través de una gestión participativa y descentralizada.

### Visión

Consolidar al Beni como un departamento líder en desarrollo sostenible, con una economía diversificada, infraestructura moderna, servicios básicos de calidad, una sociedad equitativa y un fuerte compromiso con la preservación de su riqueza natural y cultural.

---

## URL del Sistema

*   **Portal Público:** `https://beni.gob.bo/`
*   **Admin WordPress:** `https://beni.gob.bo/wp-admin`

---

*Última actualización: 2025*