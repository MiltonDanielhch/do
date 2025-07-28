---
sidebar_position: 23
---

# Gestión de Artículos

## Descripción General

Este módulo es crucial para el control de inventario, ya que permite administrar el catálogo completo de artículos (productos, materiales, suministros) que se manejan en los almacenes del Gobierno Autónomo Departamental del Beni. Aquí se registran, clasifican, consultan y gestionan todos los bienes almacenables.

## Tablero Principal de Artículos

El tablero principal muestra el listado completo de los artículos registrados en el sistema.

### Funcionalidades Clave del Tablero:

*   **Visualización y Paginación:** Opciones para mostrar un número determinado de registros por página (Ej: `Mostrar 10 registros`). Navegación entre páginas.
*   **Búsqueda:** (Asumido) Campo de búsqueda para encontrar artículos por código, nombre, partida, etc.
*   **Filtrado:** (Asumido) Posibilidad de filtrar por estado (Activo/Inactivo), partida presupuestaria o sucursal.
*   **Acciones Directas:** Botones por registro para acciones como "Editar", "Ver Kardex", "Activar/Desactivar", etc. (Columna "Acciones").

### Estructura de la Tabla de Artículos:

La tabla principal muestra la siguiente información clave para cada artículo:

| Columna    | Descripción                                                              | Ejemplo de Dato (Registro 5233)                               | Origen / Notas                     |
| :--------- | :----------------------------------------------------------------------- | :------------------------------------------------------------ | :--------------------------------- |
| **Nro°**   | Identificador único o número de orden del artículo en el sistema.        | `5233`                                                        | Secuencial, Automático             |
| **Nombre** | Descripción completa del artículo, incluyendo a menudo su presentación.  | `pruebaza` <br/> `Presentación: 300 GRAMOS`                   | Ingreso manual                   |
| **Partida**| Nombre de la partida presupuestaria a la que pertenece el artículo.      | `GASTOS POR ALIMENTACIÓN Y OTROS SIMILARES`                   | Selección / Catálogo de Partidas |
| **Sucursal**| Almacén o dependencia principal donde se gestiona este artículo.         | `ALMACEN - ALMACEN CENTRAL GAD-BENI`                          | Selección / Catálogo de almacenes |
| **Estado** | Situación actual del artículo en el sistema (Activo/Inactivo).           | `Activo`                                                      | Predefinido (Activo, Inactivo)     |
| **Acciones**| Botones para operaciones específicas sobre el registro del artículo.     | (Varía según estado y permisos)                               | Según rol y estado                 |

## Procesos Disponibles

### Registrar Nuevo Artículo
1.  Desde el tablero principal, hacer clic en el botón "Crear" (o similar).
2.  Se presentará el formulario "Añadir Artículo".
3.  Completar el formulario con los datos requeridos:
    *   **Nombre:** Ingresar el nombre descriptivo del artículo.
    *   **Presentacion:** Ingresar la unidad de medida o formato (Ej: PIEZA, CAJA, KILO, 300 GRAMOS, HOJAS, UNIDAD).
    *   **Imagen:** (Opcional) Subir una imagen representativa del artículo ("No se ha seleccionado ningún archivo" por defecto).
    *   **Partida:** Seleccionar la partida presupuestaria a la que pertenece el artículo desde la lista desplegable.
    *   (Asumido) **Sucursal:** Seleccionar el almacén principal donde se gestionará.
4.  Establecer el estado inicial (generalmente "Activo").
5.  Guardar el registro para añadir el nuevo artículo al catálogo.

### Gestionar Artículos Existentes
*   **Editar:** Modificar la información registrada de un artículo (nombre, partida, presentación, estado).
*   **Cambiar estado:** Activar o desactivar un artículo. Los artículos inactivos generalmente no pueden ser seleccionados en movimientos de inventario (ingresos, egresos, solicitudes).
*   **Ver Kardex:** (Si aplica) Consultar el historial de movimientos de stock del artículo.
*   **Exportar:** (Si aplica) Generar listados del catálogo de artículos.

## Filtros Disponibles (Potenciales)
*   **Por estado**: Activos/Inactivos/Todos.
*   **Por partida**: Filtrar artículos pertenecientes a una clasificación presupuestaria específica.
*   **Por sucursal**: Ver artículos gestionados en un almacén determinado.
*   **Búsqueda textual**: Por nombre, código o características.
*   **Paginación**: Ajustar el número de registros por página (10, 25, 50, 100).

## Consideraciones Importantes
*   Cada artículo debe estar asociado a una **Partida Presupuestaria** para su correcta clasificación contable y de gestión.
*   La **Presentación** (unidad de medida) debe ser consistente y clara para evitar errores en el registro de cantidades.
*   Mantener el catálogo de artículos actualizado y depurado es esencial para la eficiencia del almacén.
*   La gestión de artículos suele requerir permisos específicos.

## Ejemplos de Registros en el Tablero

```plaintext
# Registro 1
Nro°: 5233
Nombre: pruebaza / Presentación: 300 GRAMOS
Partida: GASTOS POR ALIMENTACIÓN Y OTROS SIMILARES
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Estado: Activo
Acciones: (No especificadas)

# Registro 2
Nro°: 5232
Nombre: VOLANTE FULL COLOR 25X25 / Presentación: HOJAS
Partida: Servicios de Imprenta, Fotocopiado y Fotográficos
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Estado: Activo
Acciones: (No especificadas)

# Registro 3
Nro°: 5231
Nombre: BALON DE BASQUETBOL / Presentación: UNIDAD
Partida: MATERIAL DEPORTIVO Y RECREATIVO
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Estado: Activo
Acciones: (No especificadas)