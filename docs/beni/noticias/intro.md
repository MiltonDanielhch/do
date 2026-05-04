---
sidebar_position: 1
---

# Gestión de Noticias y Blog

## Descripción General

Este módulo describe el funcionamiento de la sección de **noticias y blog** del portal beni.gob.bo. El sistema permite publicar y gestionar artículos informativos sobre las actividades del gobierno departamental.

## Tablero Principal de Noticias

El portal principal del blog muestra:

### Sección Hero

Zona superior con diseño:
*   **Banner:** Imagen destacada del artículo reciente.
*   **Título:** Título del artículo principal.
*   **Extracto:** Descripción corta.
*   **Enlace:** "Leer más".

### Lista de Noticias

```
┌─────────────────────────────────────────────────────────────┐
│  NOVEDADES Y NOTICIAS                                      │
│  Actualidades del Gobierno Departamental del Beni         │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌────────────────────────────────────┐  │
│  │ CATEGORÍAS  │  │ LISTA DE NOTICIAS                   │  │
│  │ ────────────  │  │ ─────────────────────────────────  │  │
│  │ Cultura     │  │ [Card] [Card] [Card]               │  │
│  │ Educación  │  │                                     │  │
│  │Infraestruct│  │ [Card] [Card] [Card]               │  │
│  │ Salud      │  │                                     │  │
│  │ Recientes  │  │ [Paginación]                       │  │
│  └──────────────┘  └────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Filtrar por Categoría

### Lista de Categorías

El panel izquierdo muestra las categorías disponibles:

```php
// WordPress query padrão
$args = array(
    'cat' => $category_id,
    'posts_per_page' => 10,
    'paged' => $paged,
);
$query = new WP_Query($args);
```

### Categorías Disponibles

*   **Cultura** - Actividades culturales
*   **Educación** - Programas educativos
*   **Infraestructura** - Obras y proyectos
*   **Salud** - Servicios de salud
*   **Sin Categoría** - Otros temas

## Ver Detalle de Noticia

Cada noticia muestra:
*   Título del artículo.
*   Fecha de publicación.
*   Categoría.
*   Imagen destacada.
*   Contenido completo.
*   Autor.
*   Etiquetas.

## Panel de Administración

**URL:** `/wp-admin`

En WordPress > Entradas:

### Gestión de Publicaciones

| Campo              | Descripción                                           |
| :-----------------| :----------------------------------------------------- |
| Título            | Título del artículo                                   |
| Editor            | Contenido (Gutenberg/Classic)                        |
| Categoría         | Clasificación                                        |
| Etiquetas         | Tags                                                 |
| Imagen Destacada   | Thumbnail                                          |
| Extracto          | Descripción corta                                     |
| Fecha            | Fecha de publicación                                 |
| Autor            | Usuario creador                                      |
| Estado           | Borrador/Publicado                                   |

## Crear Nueva Noticia

1.  Acceder a `/wp-admin/post-new.php`
2.  Ingresar título.
3.  Escribir contenido en el editor.
4.  Seleccionar categoría.
5. Agregar etiquetas.
6.  Establecer imagen destacada.
7.  Publicar o guardar como borrador.

---

*Última actualización: 2025*