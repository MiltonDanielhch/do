---
sidebar_position: 21
---

# Gestión de Proveedores
   
## Descripción General

Este módulo centraliza la administración de la información de todos los proveedores que interactúan con el sistema de almacenes del Gobierno Autónomo Departamental del Beni. Permite registrar, consultar y mantener actualizados los datos de contacto, fiscales y de estado de cada proveedor.

## Tablero Principal de Proveedores

El tablero principal muestra el listado completo de proveedores registrados, facilitando su consulta y gestión.

### Funcionalidades Clave del Tablero:

*   **Visualización y Paginación:** Opciones para mostrar 10, 25, 50 o 100 registros por página (Ej: `Mostrar 10 registros`).
*   **Búsqueda:** Campo de búsqueda para encontrar proveedores rápidamente por NIT, Razón Social, Responsable, etc. (Ej: `Buscar:`).
*   **Filtrado:** (Asumido) Posibilidad de filtrar por estado (Activo/Inactivo) o sucursal.
*   **Acciones Directas:** Botones por registro para acciones como "Editar", "Ver Detalles", "Activar/Desactivar", etc. (Columna "Acciones").

### Estructura de la Tabla de Proveedores:

La tabla principal muestra la siguiente información clave para cada proveedor:

| Columna        | Descripción                                                              | Ejemplo de Dato (Registro 402)                | Origen / Notas                     |
| :------------- | :----------------------------------------------------------------------- | :-------------------------------------------- | :--------------------------------- |
| **Nro°**       | Número de orden o identificador en la lista actual.                      | `402`                                         | Secuencial en la vista             |
| **Nit**        | Número de Identificación Tributaria del proveedor.                       | `3367740019`                                  | Ingreso manual, único            |
| **Razón Social** | Nombre legal o comercial del proveedor.                                  | `LIBRERIA & BAZAR "CARLITOS"`                 | Ingreso manual                   |
| **Responsable**| Nombre de la persona de contacto principal del proveedor.                | `LAZO RODRIGUEZ ROSA MARIA`                   | Ingreso manual                   |
| **Sucursal**   | Almacén o dependencia principal con la que interactúa el proveedor.      | `ALMACEN - ALMACEN CENTRAL GAD-BENI`          | Selección / Catálogo de almacenes |
| **Estado**     | Situación actual del proveedor en el sistema (Activo/Inactivo).          | `Activo`                                      | Predefinido (Activo, Inactivo)     |
| **Acciones**   | Botones para operaciones específicas sobre el registro del proveedor.    | (Varía según estado y permisos)               | Según rol y estado                 |

## Procesos Disponibles

### Registrar Nuevo Proveedor
1.  Desde el tablero principal, hacer clic en el botón "Añadir Proveedor" (o similar).
2.  Se presentará el formulario "Añadir Proveedor".
3.  Completar el formulario con los datos requeridos:
    *   **Nit:** Número de Identificación Tributaria.
    *   **Razonsocial:** Nombre legal o comercial del proveedor.
    *   **Responsable:** Nombre de la persona de contacto.
    *   **Dirección:** Dirección física del proveedor.
    *   **Telefono:** Número de teléfono de contacto.
    *   (Asumido) **Sucursal:** Selección del almacén o dependencia principal asignada.
4.  Establecer el estado inicial (generalmente "Activo").
5.  Guardar el registro para añadir el nuevo proveedor al sistema.

### Gestionar Proveedores Existentes
*   **Editar:** Modificar la información registrada de un proveedor.
*   **Cambiar estado:** Activar o desactivar un proveedor. Los proveedores inactivos generalmente no pueden ser seleccionados en operaciones como ingresos.
*   **Exportar:** (Si aplica) Generar listados de proveedores.

## Filtros Disponibles (Potenciales)
*   **Por estado**: Activos/Inactivos/Todos.
*   **Por sucursal**: Filtrar proveedores asociados a un almacén específico.
*   **Búsqueda textual**: Utilizar el campo `Buscar:` para filtrar por NIT, Razón Social o Responsable.
*   **Paginación**: Ajustar el número de registros por página (10, 25, 50, 100).

## Consideraciones Importantes
*   Es fundamental mantener la información de los proveedores actualizada, especialmente NIT y Razón Social para fines fiscales y de registro.
*   La gestión de proveedores suele requerir permisos administrativos.
*   Los cambios realizados (creación, edición, cambio de estado) deberían quedar registrados en una auditoría del sistema.

## Ejemplos de Registros en el Tablero

```plaintext
# Registro 1
Nro°: 402
Nit: 3367740019
Razón Social: LIBRERIA & BAZAR "CARLITOS"
Responsable: LAZO RODRIGUEZ ROSA MARIA
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Estado: Activo
Acciones: (No especificadas)

# Registro 2
Nro°: 401
Nit: 3419693018
Razón Social: FATIMA GINA FORERO BARRIOS
Responsable: FATIMA GINA FORERO BARRIOS
Sucursal: ALMACEN - CORREGIMIENTO DEL MUNICIPIO DE SAN BORJA
Estado: Activo
Acciones: (No especificadas)