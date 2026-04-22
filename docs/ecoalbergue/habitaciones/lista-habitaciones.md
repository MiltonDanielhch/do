---
sidebar_position: 1
---

# Gestión de Habitaciones

## Descripción General

Este módulo permite administrar las **habitaciones disponibles** del Ecoalbergue Departamental del Beni. Cada habitación tiene características específicas como capacidad, precio y disponibilidad, y puede mostrarse en español o inglés según el idioma del visitante.

## Tablero Principal de Habitaciones

El tablero principal ofrece una vista consolidada de todas las habitaciones registradas.

### Funcionalidades Clave

*   **CRUD de Habitaciones:** Crear, leer, actualizar y eliminar habitaciones.
*   **Gestión de Imágenes:** Cargar múltiples fotos por habitación.
*   **Configuración de Precios:** Definir precios por noche.
*   **Disponibilidad:** Control de idiomas (español/inglés).

### Estructura de la Tabla

| Campo             | Descripción                                        |
| :---------------- | :------------------------------------------------- |
| ID                | Identificador único                               |
| Nombre            | Nombre/tipo de habitación                          |
| Capacidad         | Número máximo de huéspedes                        |
| Precio            | Precio por noche                                   |
| Idioma            | Español o Inglés                                   |
| Estado            | Activo/Inactivo                                    |
| Imágenes          | Galería de fotos                                   |

## Modelo de Datos

### Campos de la Habitación

| Campo             | Tipo      | Descripción                                        |
| :---------------- | :-------- | :------------------------------------------------- |
| id                | INTEGER   | Identificador único                               |
| name              | STRING    | Nombre de la habitación                          |
| capacity          | INTEGER   | Capacidad de huéspedes                           |
| price             | DECIMAL   | Precio por noche                                  |
| description       | TEXT      | Descripción detallada                            |
| images            | JSON      | Rutas de imágenes                                |
| language          | STRING    | Idioma (es/en)                                    |
| status            | STRING    | Estado (active/inactive)                        |
| created_at        | TIMESTAMP | Fecha de creación                                |
| updated_at        | TIMESTAMP | Fecha de última actualización                      |

## Portal Público

### Listado de Habitaciones

**Ruta:** `/habitaciones` (español) | `/en/rooms` (inglés)

**Características:**
*   Diseño en cards con imagen principal.
*   Información resumida: nombre, capacidad, precio.
*   Enlace a detalle de cada habitación.
*   Paginación de 6 habitaciones por página.

**Ejemplo de vista:**

```
┌─────────────────────────────────────────────┐
│  HABITACIONES DISPONIBLES                   │
├─────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐           │
│  │   [Imagen]  │  │   [Imagen]  │           │
│  │             │  │             │           │
│  │ Suite Junior│  │ Hab. Doble  │           │
│  │ Cap: 2 pers │  │ Cap: 2 pers │           │
│  │ Bs. 120/noche│  │ Bs. 80/noche│           │
│  │   [Ver más] │  │   [Ver más] │           │
│  └─────────────┘  └─────────────┘           │
│  ┌─────────────┐  ┌─────────────┐           │
│  │   [Imagen]  │  │   [Imagen]  │           │
│  │             │  │             │           │
│  │ Hab. Simple │  │ Suite Master│           │
│  │ Cap: 1 pers │  │ Cap: 4 pers │           │
│  │ Bs. 50/noche│  │ Bs. 200/noche│          │
│  │   [Ver más] │  │   [Ver más] │           │
│  └─────────────┘  └─────────────┘           ��
└─────────────────────────────────────────────┘
```

### Detalle de Habitación

**Ruta:** `/habitaciones/{id}`

**Información mostrada:**
*   Nombre de la habitación.
*   Galería de imágenes.
*   Capacidad.
*   Precio por noche.
*   Descripción completa.
*   Amenities incluidos.

## Gestión desde Panel Admin

### Crear Nueva Habitación

1.  **Acceder:** Voyager > Habitaciones > Add New.
2.  **Completar Datos:**
    *   Nombre de la habitación.
    *   Capacidad máxima.
    *   Precio por noche.
    *   Descripción detallada.
    *   Seleccionar idioma (español/inglés).
3.  **Cargar Imágenes:** Agregar fotos de la habitación.
4.  **Guardar:** Confirmar la creación.

### Editar Habitación

1.  **Seleccionar:** En la lista, hacer clic en "Edit".
2.  **Modificar:** Actualizar datos necesarios.
3.  **Guardar Cambios:** Confirmar modificaciones.

### Estados de la Habitación

| Estado       | Descripción                                                    |
| :----------- | :-------------------------------------------------------------- |
| **Activo**    | Habitación visible y disponible para reservas                 |
| **Inactivo**  | No disponible temporalmente                                    |

## Filtrado por Idioma

El sistema permite gestionar habitaciones en español e inglés por separado:

```php
// Filtrar por idioma
$roomsEs = Room::where('language', 'es')->get();
$roomsEn = Room::where('language', 'en')->get();
```

**Uso:**
*  相同 habitación puede tener versiones en ambos idiomas.
*  Se crean registros separados para cada idioma.
*  El visitante ve la versión según su selección de idioma.

## Galería de Imágenes

Cada habitación puede tener múltiples imágenes:

```php
// Estructura de imágenes
{
  "images": [
    "rooms/room1/img1.jpg",
    "rooms/room1/img2.jpg",
    "rooms/room1/img3.jpg"
  ]
}
```

**Gestión:**
*   Cargar desde el panel admin.
*   Eliminar imágenes individuales.
*   Reordenar el orden de visualización.

## Integración con Paquetes

Las habitaciones pueden incluirse en paquetes especiales:
*   Paquete "Fin de Semana" incluye 2 noches en Suite Junior.
*   Paquete "Escapada Romantic" incluye Suite Master con cena.

## Estadísticas

El sistema puede mostrar:
*   Habitaciones más reservadas.
*   Tasa de ocupación.
*   Ingresos por habitación.

## Mejores Prácticas

1.  **Fotos de calidad:** Usar imágenes profesionales.
2.  **Descripción completa:** Detallar amenities y características.
3.  **Precios actualizados:** Mantener precios vigentes.
4.  **Versiones por idioma:** Crear contenido en ambos idiomas.
5.  **Capacidad real:** Indicar correctamente el número de huéspedes.