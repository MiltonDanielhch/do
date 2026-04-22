---
sidebar_position: 1
---

# Ecoalbergue - Sistema de Gestión Hotelera

## Vista General

Sistema de gestión del Ecoalbergue del Gobierno Autónomo Departamental del Beni. Portal público para reserva de habitaciones y paquetes turísticos.

## Módulos Principales

### 1. Inicio

**Ruta:** `/` (español) y `/en` (inglés)

Página principal multilingüe.

### 2. Sobre Nosotros

**Ruta:** `/sobre-nosotros`

Información institucional.

### 3. Blog

**Ruta:** `/blog`

Artículos y noticias del ecoalbergue.

| Campo | Descripción |
|-------|-------------|
| Título | Título del artículo |
| Slug | URL amigable |
| Contenido | Cuerpo del artículo |
| Imagen | Imagen destacada |

### 4. Habitaciones

**Ruta:** `/habitaciones`

Listado de habitaciones disponibles.

**Detalle:** `/habitaciones/{id}`

| Campo | Descripción |
|-------|-------------|
| Nombre | Nombre de la habitación |
| Capacidad | Número de huéspedes |
| Precio | Precio por noche |
| Descripción | Características |
| Imágenes | Galería de fotos |

### 5. Paquetes Especiales

**Ruta:** `/paquetes-especiales`

Paquetes turísticos con descuento.

**Detalle:** `/paquetes-especiales/{id}`

| Campo | Descripción |
|-------|-------------|
| Nombre | Nombre del paquete |
| Descripción | Detalles del paquete |
| Precio Normal | Precio sin descuento |
| Precio Especial | Precio promocional |
| Fecha Válida | Período de validez |

### 6. Galería

**Ruta:** `/gallery/{id}`

Galerías de fotos por categoría.

**Lightbox:** `/gallerybox/{id}`

Vista ampliada de imágenes.

## Panel de Administración

**Ruta:** `/admin`

Gestión via Voyager.

### Generador QR

**Ruta:** `/admin/generate-qr`

Genera códigos QR para habitaciones.

## Estados

| Estado | Descripción |
|--------|-------------|
| Activo | Disponible |
| Inactivo | No disponible |

## Consideraciones

- Sistema multilingüe (español/inglés)
- Imágenes para cada habitación
- Precios dinámicos
- Galería por categorías
