---
sidebar_position: 1
---

# Sistema Ecoalbergue - Gestión Hotelera y Turística

## Introducción

Bienvenido a la documentación del **Sistema Ecoalbergue** del Gobierno Autónomo Departamental del Beni. Esta plataforma es la herramienta centralizada para la gestión hotelera del **Ecoalbergue Departamental**, incluyendo la administración de **habitaciones**, **paquetes turísticos**, **reservas** y contenido informativo como noticias y galerías.

El sistema está diseñado para promover el **turismo departamental**, facilitar la **gestión de reservas** y proporcionar información actualizada sobre los servicios del ecoalbergue a visitantes nacionales e internacionales.

## Propósito y Beneficios

*   **Promoción Turística:** Dar visibilidad a los servicios del ecoalbergue.
*   **Gestión de Habitaciones:** Administrar disponibilidad y características.
*   **Paquetes Especiales:** Ofrecer promociones y paquetes turísticos.
*   **Información Multilingüe:** Contenido en español e inglés.
*   **Reservas Online:** Permitir solicitud de reservas por internet.
*   **Blog y Noticias:** Mantener informados a los visitantes.

## Funcionalidades Clave

El sistema se organiza en los siguientes módulos principales:

*   **Portal Público:**
    *   Página principal con información general.
    *   Listado de habitaciones disponibles.
    *   Paquetes turísticos especiales.
    *   Blog/Noticias del ecoalbergue.
    *   Galería de fotos.
    *   Información institucional (Sobre Nosotros).
*   **Gestión de Contenido (Admin):**
    *   CRUD de habitaciones.
    *   CRUD de paquetes especiales.
    *   Gestión de posts/blog.
    *   Gestión de galería.
    *   Configuración general.

## Audiencia Destinataria

Esta documentación está dirigida a:

*   **Visitantes/Turistas:** Consultan servicios y realizan reservas.
*   **Personal del Ecoalbergue:** Gestionan reservas y contenido.
*   **Administradores:** Configuran habitaciones, precios y contenido.
*   **Marketing:** Actualizan blog y galerías.

## Estructura del Portal

```
┌──────────────────────────────────────────────────────────┐
│                    PORTAL PÚBLICO                         │
│                                                          │
│  ┌──────────────────────────────────────────────────────┐│
│  │              PÁGINA PRINCIPAL                        ││
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   ││
│  │  │ Habita- │ │ Paque- │ │ Blog/   │ │ Sobre   │   ││
│  │  │ clones  │ │ tes     │ │ Noticias│ │ Nosotros│   ││
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘   ││
│  └──────────────────────────────────────────────────────┘│
│                                                          │
│  ┌──────────────────────────────────────────────────────┐│
│  │              HABITACIONES                            ││
│  │  ┌───────┐ ┌───────┐ ┌───────┐                       ││
│  │  │ Hab.1 │ │ Hab.2 │ │ Hab.3 │  ...                  ││
│  │  │ [img] │ │ [img] │ │ [img] │                       ││
│  │  │ $50   │ │ $60   │ │ $75   │                       ││
│  │  └───────┘ └───────┘ └───────┘                       ││
│  └──────────────────────────────────────────────────────┘│
│                                                          │
│  ┌──────────────────────────────────────────────────────┐│
│  │              PAQUETES ESPECIALES                     ││
│  │  ┌───────────┐ ┌───────────┐                        ││
│  │  │ Paquete 1 │ │ Paquete 2 │  ...                   ││
│  │  │ Normal:$100│ │ Normal:$150│                        ││
│  │  │ Especial:$80│ │ Especial:$120│                     ││
│  │  └───────────┘ └───────────┘                        ││
│  └──────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────┘
```

## Módulos del Portal Público

### 1. Página Principal (Inicio)

**Rutas:**
*   Español: `/` o `/home`
*   Inglés: `/en`

**Contenido:**
*   Información general del ecoalbergue.
*   Habitaciones destacadas.
*   Paquetes especiales.
*   Últimas noticias/publicaciones.
*   Estadísticas (número de visitas).
*   Galería del lugar.
*   Fotos de visitantes.

### 2. Sobre Nosotros

**Ruta:** `/sobre-nosotros` (español) | `/about` (inglés)

**Contenido:**
*   Historia del ecoalbergue.
*   Misión y visión.
*   Servicios ofrecidos.
*   Ubicación y contacto.

### 3. Habitaciones

**Ruta:** `/habitaciones`

**Características:**
*   Listado paginado de habitaciones.
*   Filtrado por idioma (español/inglés).
*   Información detallada de cada habitación.

**Detalle de Habitación:** `/habitaciones/{id}`

**Información por habitación:**

| Campo             | Descripción                                        |
| :---------------- | :------------------------------------------------- |
| **Nombre**         | Nombre/tipo de habitación                          |
| **Capacidad**       | Número máximo de huéspedes                         |
| **Precio**         | Precio por noche                                   |
| **Descripción**    | Características y amenities                         |
| **Imágenes**       | Galería de fotos de la habitación                   |
| **Idioma**         | Español o Inglés                                   |

### 4. Paquetes Especiales

**Ruta:** `/paquetes-especiales`

**Características:**
*   Listado de paquetes turísticos con descuento.
*   Precios promocionales.
*   Período de validez.

**Detalle de Paquete:** `/paquetes-especiales/{id}`

**Información por paquete:**

| Campo                | Descripción                                        |
| :------------------- | :------------------------------------------------- |
| **Nombre**            | Nombre del paquete turístico                       |
| **Descripción**       | Detalles del paquete                               |
| **Precio Normal**      | Precio sin descuento                               |
| **Precio Especial**    | Precio promocional                                 |
| **Fecha Válida**       | Período de validez del paquete                     |
| **Incluye**            | Servicios incluidos                                |
| **Imágenes**           | Fotos del paquete                                  |

### 5. Blog/Noticias

**Ruta:** `/blog`

**Características:**
*   Artículos y noticias del ecoalbergue.
*   Solo muestra posts publicados (status: PUBLISHED).
*   Ordenado por fecha de creación (más recientes).

**Detalle de Post:** `/blog/{slug}`

**Información del post:**
*   Título.
*   Contenido (cuerpo del artículo).
*   Imagen destacada.
*   Fecha de publicación.
*   Posts relacionados.

### 6. Galería

**Ruta:** `/gallery/{id}`

**Tipos de galería:**
*   **Lugar:** Fotos de las instalaciones.
*   **Visitantes:** Fotos de huéspedes y eventos.

**Vista Lightbox:** `/gallerybox/{id}`

**Características:**
*   Vista ampliada de imágenes.
*   Navegación entre fotos.

## Modelo de Datos

### Room (Habitación)

| Campo             | Tipo      | Descripción                                        |
| :---------------- | :-------- | :------------------------------------------------- |
| id                | INTEGER   | Identificador único                               |
| name              | STRING    | Nombre de la habitación                          |
| capacity          | INTEGER   | Capacidad de huéspedes                           |
| price             | DECIMAL   | Precio por noche                                  |
| description       | TEXT      | Descripción detallada                            |
| images            | JSON      | Rutas de imágenes                                |
| language          | STRING    | Idioma (es/en)                                   |
| status            | STRING    | Estado (active/inactive)                         |
| created_at        | TIMESTAMP | Fecha de creación                                |

### SpecialPackage (Paquete Especial)

| Campo                | Tipo      | Descripción                                        |
| :------------------- | :-------- | :------------------------------------------------- |
| id                   | INTEGER   | Identificador único                               |
| name                 | STRING    | Nombre del paquete                                |
| description          | TEXT      | Descripción del paquete                           |
| price_normal         | DECIMAL   | Precio regular                                    |
| price_special        | DECIMAL   | Precio promocional                                |
| valid_date            | DATE      | Fecha de validez                                 |
| includes             | TEXT      | Servicios incluidos                              |
| images               | JSON      | Rutas de imágenes                                 |
| status               | STRING    | Estado                                           |
| created_at           | TIMESTAMP | Fecha de creación                                |

### Post (Publicación/Blog)

| Campo             | Tipo      | Descripción                                        |
| :---------------- | :-------- | :------------------------------------------------- |
| id                | INTEGER   | Identificador único                               |
| title             | STRING    | Título del artículo                               |
| slug              | STRING    | URL amigable                                      |
| body              | TEXT      | Contenido del artículo                            |
| image             | STRING    | Imagen destacada                                 |
| status            | STRING    | Estado (PUBLISHED, DRAFT)                        |
| language          | STRING    | Idioma (es/en)                                    |
| created_at        | TIMESTAMP | Fecha de creación                                |

### Gallery (Galería)

| Campo             | Tipo      | Descripción                                        |
| :---------------- | :-------- | :------------------------------------------------- |
| id                | INTEGER   | Identificador único                               |
| name              | STRING    | Nombre de la galería                              |
| type              | STRING    | Tipo (lugar/visitantes)                           |
| images            | JSON      | Rutas de imágenes                                |
| created_at        | TIMESTAMP | Fecha de creación                                |

## Generador de Códigos QR

**Ruta:** `/admin/generate-qr`

**Funcionalidad:**
*   Genera códigos QR para cada habitación.
*   Útil para gestión interna y acceso rápido a información.

## Características Multilingüe

El sistema soporta contenido en **Español** e **Inglés**:

```php
// Filtrar por idioma
$rooms = Room::where('language', 'es')->get();
$posts = Post::where('language', 'en')->get();
```

**Implementación:**
*   Cada habitación/post tiene campo `language`.
*   La versión en inglés tiene rutas propias (`/en`).
*   El contenido se muestra según la versión seleccionada.

## Panel de Administración

**URL:** `/admin`

Gestionado mediante Voyager con las siguientes funcionalidades:

### Gestión de Habitaciones

*   CRUD completo de habitaciones.
*   Carga de imágenes múltiples.
*   Configuración de precios y disponibilidad.

### Gestión de Paquetes

*   CRUD de paquetes especiales.
*   Configuración de precios y fechas de validez.

### Gestión de Blog

*   CRUD de posts/artículos.
*   Editor de contenido enriquecido.
*   Programación de publicación.

### Gestión de Galería

*   Creación de álbumes.
*   Carga de imágenes por álbum.
*   Clasificación por tipo (lugar/visitantes).

### Configuración General

*   Información de la página "Sobre Nosotros".
*   Datos de contacto.
*   Configuraciones del sitio.

## Estadísticas de Visitas

El sistema lleva un conteo de visitas:

```php
$count = [
    'visitas' => RequestModel::count(),
];
```

**Propósito:**
*   Medir el interés en el ecoalbergue.
*   Informar decisiones de marketing.
*   Evaluar efectividad de contenido.

## Estados del Sistema

| Estado       | Descripción                                                    |
| :----------- | :-------------------------------------------------------------- |
| **Activo**    | Habitación/paquete disponible para reservas                   |
| **Inactivo**  | No disponible temporalmente                                    |
| **Publicado** | Post de blog visible públicamente                              |
| **Borrador**  | Post en proceso de edición                                     |

## Mejores Prácticas

1.  **Imágenes de calidad:** Usar fotos profesionales de las instalaciones.
2.  **Precios actualizados:** Mantener precios vigentes y precisos.
3.  **Contenido dinámico:** Publicar regularmente en el blog.
4.  **Actualización de galerías:** Mantener al día las fotos del lugar.
5.  **SEO:** Optimizar títulos y descripciones para búsqueda.

## Consideraciones Técnicas

*   **Middleware de logging:** Las rutas públicas pasan por middleware `log` para estadísticas.
*   **Almacenamiento:** Imágenes guardadas en `storage/app/public/`.
*   **Responsive:** El portal es adaptable a dispositivos móviles.

## URL del Sistema

*   **Portal Público:** `https://ecoalbergue.beni.gob.bo/`
*   **Versión Inglés:** `https://ecoalbergue.beni.gob.bo/en`
*   **Panel Admin:** `https://ecoalbergue.beni.gob.bo/admin`