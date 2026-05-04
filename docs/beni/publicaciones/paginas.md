---
sidebar_position: 2
---

# Gestión de Páginas Estáticas

## Descripción General

Este módulo describe el funcionamiento de las **páginas estáticas** del portal beni.gob.bo. Estas páginas proporcionan contenido institucional fijo que no cambia frecuentemente.

## Páginas Disponibles

### 1. Inicio

Página principal del sitio web.

**URL:** `/`

**Contenido:**
*   Hero Section con banner institucional.
*   Sección de servicios.
*   Noticias destacadas.
*   Sobre Nosotros.
*   Información de contacto.
*   Footer.

### 2. Gobernador

Información sobre el Gobernador del Departamento.

**URL:** `/gobernador/`

**Contenido:**
*   Biografía del gobernador.
*   Fotografía oficial.
*   Gestiónes anteriores.
*   Logos y reconocimientos.

### 3. Blog

Listado de todas las noticias.

**URL:** `/blog/`

**Contenido:**
*   Lista completa de posts.
*   Filtros por categoría.
*   Buscador.
*   Paginación.

### 4. Servicios

Enlaces a los sistemas gubernamentales.

**URL:** `/#servicios` (sección)

**Contenido:**
*   Tarjetas con enlaces.
*   Descripción de cada sistema.
*   Links directos.

### 5. Transparencia

Portal de transparencia.

**URL:** `/transparencia/` → Redirección a `transparencia.beni.gob.bo`

### 6. Política de Privacidad

Política de privacidad del sitio.

**URL:** `/politica-de-privacidad/`

**Contenido:**
*   Texto de política.
*   Fecha de vigencia.

## Estructura de Página

```
┌─────────────────────────────────────────────────────────────┐
│                      HEADER                            │
│  Logo | Menú Navegación | Buscador | Redes          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    HERO SECTION                       │
│  [Banner] [Título] [Descripción] [Botones]           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   CONTENIDO                         │
│  Título de Página                                   │
│  ─────────────────────────────────────────────────  │
│  Contenido principal con texto, imágenes, videos...     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      FOOTER                            │
│  Logo | Links | Redes | Copyright                    │
└─────────────────────────────────────────────────────────────┘
```

## Panel de Administración

**URL:** `/wp-admin`

En WordPress > Páginas:

### Gestión de Páginas

| Campo            | Descripción                                           |
| :---------------| :----------------------------------------------------- |
| Título          | Título de la página                                   |
| Editor          | Contenido                                            |
| Plantilla       | Plantilla de página                                   |
| Imagen Destacada| Thumbnail                                          |
| Orden          | Orden en menú (si aplica)                              |
| Estado         | Borrador/Publicado                                     |
| Fecha          | Fecha de publicación                                 |
| Padre          | Página padre (si es subpágina)                          |

## Crear Nueva Página

1.  Acceder a `/wp-admin/post-new.php?post_type=page`
2.  Ingresar título.
3.  Escribir contenido en el editor.
4.  Establecer plantilla (si aplica).
5.  Agregar imagen destacada.
6.  Configurar orden en menú.
7.  Publicar o guardar como borrador.

---

*Última actualización: 2025*