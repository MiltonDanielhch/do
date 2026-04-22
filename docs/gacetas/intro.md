---
sidebar_position: 1
---

# Gacetas Oficiales - Beni

## Vista General

Sistema de publicación y consulta de **Gacetas Oficiales** y otras publicaciones legales del Gobierno Autónomo Departamental del Beni.Portal público para ciudadanos.

El sistema permite:
- Publicar gacetas, decretos, resoluciones
- Búsqueda por palabras clave
- Destacar publicaciones importantes
- Seguimiento de vistas

## Estructura

### Tipos de Publicación

| Campo | Descripción |
|-------|-------------|
| ID | Identificador |
| Título | Nombre del tipo (ej. Gacetas, Decretos) |
| Icon | Ícono para mostrar |
| Imagen | Imagen representativa |
| Descripción | Descripción del tipo |

### Publicaciones

| Campo | Descripción |
|-------|-------------|
| ID | Identificador único |
| Tipo | Tipo de publicación |
| Título | Título de la publicación |
| Etiquetas | Tags para búsqueda |
| Descripción | Resumen del contenido |
| Fecha Publicación | Fecha de publicación |
| Fecha Entrada en Vigencia | Fecha de vigencia |
| Archivo | Documento PDF |
| Destacado | Marcador de importancia |
| Vistas | Contador de visualizaciones |

## Cómo Acceder

**Página Principal:** `/`

Muestra todos los tipos de publicaciones disponibles en cards.

## Búsqueda

**Ruta:** `/{type_id}/search`

Parámetros:
- `search` - Texto a buscar en título, tags o descripción

## Tipos de Contenido

- Gacetas
- Decretos
- Resoluciones
- others

## Panel de Administración

**Ruta:** `/admin`

Administrado por Voyager.

### Configuraciones
- Título del sitio
- Descripción
- Banner del sitio

## Consideraciones

- Las publicaciones pueden marcarse como "destacadas"
- El sistema cuenta las visualizaciones de cada publicación
- Permite buscar por múltiples campos (título, tags, descripción)