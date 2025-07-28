---
sidebar_position: 20
---

# Gestión de Sucursales

## Descripción General

Este módulo permite administrar el catálogo de todas las sucursales, almacenes, depósitos u otras ubicaciones físicas donde se gestiona inventario dentro del sistema del Gobierno Autónomo Departamental del Beni. Es fundamental para asignar artículos, registrar movimientos y controlar el stock por ubicación.

## Tablero Principal de Sucursales

El tablero principal muestra el listado completo de las sucursales registradas, facilitando su consulta y gestión.

### Funcionalidades Clave del Tablero:

*   **Visualización y Paginación:** Opciones para mostrar un número determinado de registros por página (Ej: `Mostrar 10 registros`). Navegación entre páginas si aplica.
*   **Búsqueda:** Campo de búsqueda para encontrar sucursales rápidamente por nombre o dirección (Ej: `Buscar:`).
*   **Filtrado:** (Asumido) Posibilidad de filtrar por estado (Activo/Inactivo).
*   **Acciones Directas:** Botones por registro para realizar acciones como "Editar", "Activar/Desactivar", etc. (Columna "Acciones").

### Estructura de la Tabla de Sucursales:

La tabla principal muestra la siguiente información clave para cada sucursal:

| Columna    | Descripción                                                              | Ejemplo de Dato (Registro 25)                               | Origen / Notas                     |
| :--------- | :----------------------------------------------------------------------- | :---------------------------------------------------------- | :--------------------------------- |
| **Nro°**   | Identificador único o número de orden de la sucursal en el sistema.      | `25`                                                        | Secuencial, Automático             |
| **Sucursal**| Nombre oficial y descriptivo de la ubicación o almacén.                  | `ALMACEN - CORREGIMIENTO DE MUNICIPIO DE SAN JOAQUIN`       | Ingreso manual                   |
| **Dirección**| Descripción de la ubicación física o dependencia a la que pertenece.     | `CORREGIMIENTO DE MUNICIPIO DE SAN JOAQUIN`                 | Ingreso manual                   |
| **Estado** | Situación actual de la sucursal en el sistema (Activa/Inactiva).         | `Activo`                                                    | Predefinido (Activo, Inactivo)     |
| **Acciones**| Botones para operaciones específicas sobre el registro de la sucursal.   | (Varía según permisos)                                      | Según rol y estado                 |

## Procesos Disponibles

### Registrar Nueva Sucursal
1.  Hacer clic en un botón como "Nueva Sucursal" o "Añadir".
2.  Completar el formulario con los datos requeridos:
    *   **Nombre de Sucursal:** Nombre claro y único para la ubicación.
    *   **Dirección:** Descripción de la ubicación física o dependencia.
3.  Establecer el estado inicial (generalmente "Activo").
4.  Guardar el registro.

### Gestionar Sucursales Existentes
*   **Editar:** Modificar el nombre o la dirección de una sucursal existente.
*   **Cambiar estado:** Activar o desactivar una sucursal. Las sucursales inactivas generalmente no pueden ser seleccionadas en operaciones de inventario.
*   **Gestionar Direcciones Administrativas (Botón "DA"):** Algunas sucursales pueden tener asociada una funcionalidad para gestionar Direcciones Administrativas específicas vinculadas a ellas. Al hacer clic en el botón "DA" (o similar) en la fila de una sucursal, se accede a una pantalla dedicada.

    #### Pantalla de Direcciones Administrativas por Sucursal

    Esta pantalla permite administrar las unidades o direcciones administrativas asociadas a una sucursal específica (Ej: `Direcciones Adminsitrativa [ALMACEN - HOSPITAL PRESIDENTE GERMAN BUSCH]`).

    **Elementos de la Interfaz:**
    *   **Encabezado:** Muestra el título indicando la sucursal, información del usuario y posiblemente contadores (`8`).
    *   **Listas de Unidades/Nombres:** Pueden aparecer listas que detallan sub-unidades o clasificaciones internas de la sucursal (Ej: "Unidad": ALMACEN CENTRAL, "Nombre": Central). Las acciones asociadas a estas listas no están especificadas.
    *   **Tabla Principal de Direcciones Administrativas:** Muestra las direcciones administrativas formalmente vinculadas.
        *   **Controles:** `Mostrar X registros`, `Buscar:`.
        *   **Columnas:**
            *   `Nro°`: Identificador único de la dirección administrativa.
            *   `Dirección Administrativa`: Nombre de la dirección (Ej: `Hospital Presidente German Busch`).
            *   `Estado`: Situación actual (Ej: `Activo`).
            *   `Acciones`: Botones para operaciones sobre la dirección administrativa (no especificadas).
        *   **Paginación:** Navegación estándar.
    *   **Pie de Página:** Información de copyright.

    **Ejemplo de Registro en la Tabla Principal:**
    ```plaintext
    Nro°: 26
    Dirección Administrativa: Hospital Presidente German Busch
    Estado: Activo
    Acciones: (No especificadas)
    ```
    **Propósito:** Esta sección parece permitir una gestión más granular de las entidades administrativas que operan dentro o a través de una sucursal/almacén principal.

*   **Exportar:** (Si aplica) Generar listados de las sucursales.

## Filtros Disponibles (Potenciales)
*   **Por estado**: Activas/Inactivas/Todas.
*   **Búsqueda textual**: Utilizar el campo `Buscar:` para filtrar por Nombre o Dirección.
*   **Paginación**: Ajustar el número de registros por página (10, 25, 50, 100).

## Consideraciones Importantes
*   Es crucial mantener un catálogo de sucursales claro y actualizado para la correcta gestión del inventario distribuido.
*   Las sucursales inactivas no deberían aparecer como opción en los formularios de movimientos (ingresos, egresos, traspasos, solicitudes).
*   La gestión de sucursales suele requerir permisos administrativos.
*   Los cambios realizados (creación, edición, cambio de estado) deberían quedar registrados en una auditoría del sistema.

## Ejemplos de Registros en el Tablero

```plaintext
# Registro 1
Nro°: 25
Sucursal: ALMACEN - CORREGIMIENTO DE MUNICIPIO DE SAN JOAQUIN
Dirección: CORREGIMIENTO DE MUNICIPIO DE SAN JOAQUIN
Estado: Activo
Acciones: (No especificadas)

# Registro 2
Nro°: 24
Sucursal: ALMACEN - CORREGIMIENTO DE MUNICIPIO RURRENABAQUE
Dirección: CORREGIMIENTO DE MUNICIPIO RURRENABAQUE
Estado: Activo
Acciones: (No especificadas)

# Registro 3
Nro°: 23
Sucursal: ALMACEN - SUB GOBERNACION PROVINCIA VACA DIEZ
Dirección: SUB GOBERNACION PROVINCIA VACA DIEZ
Estado: Activo
Acciones: (No especificadas)

# Registro 4
Nro°: 22
Sucursal: ALMACEN - DIRECCION DEPARTAMENTAL DE GESTION DE RIESGO (COED)
Dirección: DIRECCION DEPARTAMENTAL DE GESTION DE RIESGO (COED)
Estado: Activo
Acciones: (No especificadas)

# Registro 5
Nro°: 21
Sucursal: ALMACEN - CORREGIMIENTO DEL MUNICIPIO SAN IGNACIO DE MOXOS
Dirección: CORREGIMIENTO DEL MUNICIPIO SAN IGNACIO DE MOXOS
Estado: Activo
Acciones: (No especificadas)