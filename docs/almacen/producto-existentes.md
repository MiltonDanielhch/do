---
sidebar_position: 5
---

# Productos Existentes

## Descripción General

Este módulo proporciona una vista detallada del inventario actual, mostrando todos los productos disponibles en los diferentes almacenes o sucursales gestionados por el sistema del Gobierno Autónomo Departamental del Beni. Permite consultar las existencias y características de cada artículo.

## Tablero Principal de Productos Existentes

El tablero principal presenta el listado completo de los productos registrados y su stock actual.

> **Información:** Aquí se muestran los productos existentes en el sistema.

### Funcionalidades Clave del Tablero:

*   **Visualización y Paginación:** Opciones para mostrar 10, 25, 50 o 100 registros por página (Ej: `Mostrar 10 registros`). Se indica el rango de registros mostrados y el total (Ej: `Mostrando del 1 al 10 de 100 registros`). Navegación entre páginas disponible (Ej: `‹123...10›`).
*   **Filtrado Rápido por Ubicación:** Botones para filtrar productos por ubicación principal o tipo de dependencia (Ej: "Todos", "Almacen Central", "Sedes", "Corregimientos").
*   **Búsqueda:** Campo de búsqueda para encontrar productos rápidamente por nombre, código u otra característica (Ej: `Buscar...`).
*   **Acciones Directas:** (Asumido) Posibles acciones por registro, como "Ver Kardex", "Ajustar Stock", etc., dependiendo de los permisos del usuario.

### Estructura de la Tabla de Productos Existentes:

La tabla principal muestra la siguiente información clave para cada producto en inventario:

| Columna        | Descripción                                                              | Ejemplo de Dato (Registro 1)                               | Origen / Notas                     |
| :------------- | :----------------------------------------------------------------------- | :--------------------------------------------------------- | :--------------------------------- |
| **Nro°**       | Identificador o número de orden en la lista.                             | `1`                                                        | Secuencial en la vista actual      |
| **Partida**    | Código y nombre de la partida presupuestaria a la que pertenece el item. | `3.9.1 - MATERIAL DE LIMPIEZA E HIGIENE`                   | Catálogo de Partidas             |
| **Articulo**   | Código interno y descripción completa del producto.                      | `2738 - ALCOHOL EN GEL DE 380 ML`                          | Catálogo de Artículos            |
| **Presentación** | Unidad de medida o formato de empaque del artículo.                    | `FRASCO`                                                   | Catálogo de Artículos            |
| **Stock**      | Cantidad actual disponible en el inventario para esa ubicación/almacén.  | `100,00`                                                   | Cálculo del sistema (Ingresos - Egresos) |
| **Acción**     | Botones para operaciones específicas sobre el producto.                  | (Varía según permisos, ej: `[Ver Kardex]`, `[Ajustar]`)    | Según rol y configuración        |

## Ejemplos de Registros en el Tablero

```plaintext
# Registro 1
Nro°: 1
Partida: 3.9.1 - MATERIAL DE LIMPIEZA E HIGIENE
Articulo: 2738 - ALCOHOL EN GEL DE 380 ML
Presentación: FRASCO
Stock: 100,00
Acción: (No especificada)

# Registro 2
Nro°: 2
Partida: 3.9.1 - MATERIAL DE LIMPIEZA E HIGIENE
Articulo: 4086 - AMBIENTADOR E SPRAY POETT
Presentación: FRASCO
Stock: 50,00
Acción: (No especificada)

# Registro 3
Nro°: 3
Partida: 3.4.2 - PRODUCTOS QUÍMICOS
Articulo: 57 - BARBIJOS
Presentación: CAJA
Stock: 250,00
Acción: (No especificada)

# Registro 4
Nro°: 4
Partida: 3.9.5 - ÚTILES DE ESCRITORIO
Articulo: 353 - BINDER CLIP 19MM
Presentación: CAJA X 12 UNID.
Stock: 80,00
Acción: (No especificada)

# Registro 5
Nro°: 5
Partida: 3.9.5 - ÚTILES DE ESCRITORIO
Articulo: 354 - BINDER CLIP 25MM
Presentación: CAJA X 12 UNID.
Stock: 75,00
Acción: (No especificada)