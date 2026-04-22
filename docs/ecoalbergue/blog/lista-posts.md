---
sidebar_position: 1
---

# Gestión de Blog y Noticias

## Descripción General

Este módulo permite administrar el **blog y noticias** del Ecoalbergue Departamental del Beni. A través de Voyager (Posts), se publican artículos sobre novedades, eventos, promociones y contenido informativo para mantener informados a los visitantes.

## Sistema de Publicación

El blog utiliza la funcionalidad de **Posts** de Voyager como CMS:

```php
use TCG\Voyager\Models\Post;

$posts = Post::where('status', 'PUBLISHED')
    ->orderBy('created_at', 'desc')
    ->paginate(6);
```

## Modelo de Datos

### Campos del Post

| Campo             | Tipo      | Descripción                                        |
| :---------------- | :-------- | :------------------------------------------------- |
| id                | INTEGER   | Identificador único                               |
| title             | STRING    | Título del artículo                               |
| slug              | STRING    | URL amigable                                      |
| body              | TEXT      | Contenido del artículo (HTML/Rich Text)            |
| image             | STRING    | Imagen destacada                                 |
| status            | STRING    | Estado (PUBLISHED, DRAFT)                        |
| language          | STRING    | Idioma (es/en)                                    |
| created_at        | TIMESTAMP | Fecha de creación                                |
| updated_at        | TIMESTAMP | Fecha de última actualización                      |

## Portal Público

### Listado de Posts

**Ruta:** `/blog`

**Características:**
*   Diseño en cards con imagen destacada.
*   Título y fecha de publicación.
*   Extracto/preview del contenido.
*   Paginación de 6 posts por página.
*   Solo muestra posts con estado "PUBLISHED".

**Ejemplo de vista:**

```
┌─────────────────────────────────────────────��
│  NOVEDADES Y NOTICIAS                      │
├─────────────────────────────────────────────┤
│  ┌───────────────┐  ┌───────────────┐       │
│  │   [Imagen]    │  │   [Imagen]    │       │
│  │               │  │               │       │
│  │  Título del   │  │  Título del   │       │
│  │  Artículo 1   │  │  Artículo 2   │       │
│  │               │  │               │       │
│  │  Extracto del │  │  Extracto del │       │
│  │  contenido... │  │  contenido... │       │
│  │               │  │               │       │
│  │  15/04/2024   │  │  10/04/2024   │       │
│  │  [Leer más]   │  │  [Leer más]   │       │
│  └───────────────┘  └───────────────┘       │
│  ┌───────────────┐  ┌───────────────┐       │
│  │      ...      │  │      ...      │       │
│  └───────────────┘  └───────────────┘       │
│                                             │
│  [< 1 2 3 ... >]                           │
└─────────────────────────────────────────────┘
```

### Detalle del Post

**Ruta:** `/blog/{slug}`

**Componentes:**
*   Imagen destacada (header).
*   Título del artículo.
*   Fecha de publicación.
*   Contenido completo (HTML).
*   Posts relacionados (sidebar).

**Ejemplo de detalle:**

```
┌─────────────────────────────────────────────┐
│  [Imagen Destacada]                         │
├─────────────────────────────────────────────┤
│                                             │
│  TÍTULO DEL ARTÍCULO                        │
│  publicado el 15 de Abril, 2024              │
│                                             │
│  ─────────────────────────────────────────  │
│                                             │
│  Contenido completo del artículo en HTML.   │
│  Puede incluir texto, imágenes, listas,     │
│  enlaces y otros elementos visuales.         │
│                                             │
│  Lorem ipsum dolor sit amet, consectetur    │
│  adipiscing elit. Sed do eiusmod tempor     │
│  incididunt ut labore et dolore magna      │
│  aliqua. Ut enim ad minim veniam...         │
│                                             │
│  ─────────────────────────────────────────  │
│                                             │
│  POSTS RELACIONADOS                         │
│  ┌─────────────────┐                        │
│  │ Artículo 1     │                        │
│  │ Artículo 2     │                        │
│  │ Artículo 3     │                        │
│  └─────────────────┘                        │
└─────────────────────────────────────────────┘
```

## Estados del Post

| Estado        | Descripción                                                    |
| :------------ | :-------------------------------------------------------------- |
| **PUBLISHED**  | Visible públicamente en el blog                                |
| **DRAFT**      | Borrador, no visible                                           |

## Gestión desde Panel Admin

### Crear Nuevo Post

1.  **Acceder:** Voyager > Posts > Add New.
2.  **Completar Datos:**
    *   Título del artículo.
    *   Slug (auto-generado o personalizado).
    *   Contenido (editor Rich Text).
    *   Imagen destacada.
    *   Idioma (español/inglés).
    *   Estado (borrador/publicado).
3.  **Guardar:** Confirmar la creación.

### Editar Post

1.  **Seleccionar:** En la lista, hacer clic en "Edit".
2.  **Modificar:** Actualizar contenido necesario.
3.  **Guardar Cambios:** Confirmar modificaciones.

### Eliminar Post

1.  **Seleccionar:** En la lista, hacer clic en "Delete".
2.  **Confirmar:** Verificar eliminación.
3.  **Resultado:** El post se elimina (eliminación lógica en Voyager).

## Filtrado por Idioma

El sistema puede filtrar posts por idioma:

```php
// Posts en español
$postsEs = Post::where('language', 'es')
    ->where('status', 'PUBLISHED')
    ->get();

// Posts en inglés
$postsEn = Post::where('language', 'en')
    ->where('status', 'PUBLISHED')
    ->get();
```

**Versiones del portal:**
*   **Español:** `/blog` muestra posts en español.
*   **Inglés:** `/en/blog` muestra posts en inglés.

## Editor de Contenido

Voyager incluye un editor Rich Text para el contenido:

**Características:**
*   Texto con formato (negrita, cursiva, subrayado).
*   Encabezados (H1, H2, H3).
*   Listas (ordenadas y desordenadas).
*   Enlaces e imágenes embebidas.
*   Tablas.
*   Videos embebidos.

## Posts en Página Principal

La página principal del ecoalbergue muestra posts destacados:

```php
// En HomeController@index
$posts = Post::take(10)
    ->where('language', 'es')
    ->orderBy('created_at', 'desc')
    ->get();
```

**Ubicación en homepage:**
*   Sección de noticias/recientes.
*   Últimos 10 posts.
*   Con enlace a blog completo.

## Mejores Prácticas

1.  **Títulos claros:** Usar títulos descriptivos y吸引眼球.
2.  **Imágenes destacadas:** Siempre incluir imagen de calidad.
3.  **Contenido relevante:** Publicar sobre eventos, promociones, guías.
4.  **Actualización regular:** Mantener el blog activo con nuevas publicaciones.
5.  **SEO:** Optimizar títulos y descripciones para búsqueda.
6.  **Posts relacionados:** Mostrar contenido similar al final de cada artículo.

## Categorías y Tags

Aunque el sistema actual usa Posts básicos, se pueden implementar:

*   **Categorías:** Clasificar por tipo (Eventos, Promociones, Guías).
*   **Tags:** Palabras clave para búsqueda.

## Integración

Los posts se muestran en:
*   Página principal (últimos posts).
*   Blog completo (listado).
*   Detalle de post (contenido y relacionados).