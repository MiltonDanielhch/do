---
sidebar_position: 22
---

# Gestión de Partidas Presupuestarias

## Descripción General

Este módulo es fundamental para la clasificación del inventario, ya que permite administrar las partidas presupuestarias utilizadas en el sistema de almacén del Gobierno Autónomo Departamental del Beni. Aquí se registran, consultan y gestionan los códigos y nombres de las partidas que agrupan los diferentes tipos de artículos.

## Tablero Principal de Partidas

El tablero principal muestra el listado completo de las partidas presupuestarias registradas en el sistema.

### Funcionalidades Clave del Tablero:

*   **Visualización y Paginación:** Opciones para mostrar un número determinado de registros por página (Ej: `Mostrar 10 entradas`). Navegación entre páginas si hay muchos registros.
*   **Búsqueda:** Campo de búsqueda para encontrar partidas rápidamente por código o nombre (Ej: `Buscar:`).
*   **Acciones Directas:** Botones por registro para realizar acciones como "Editar", "Eliminar" (si no tiene movimientos asociados), etc. (Columna "Acciones").

### Estructura de la Tabla de Partidas:

La tabla principal muestra la siguiente información clave para cada partida presupuestaria:

| Columna   | Descripción                                                              | Ejemplo de Dato (Registro 38)                                           | Origen / Notas                     |
| :-------- | :----------------------------------------------------------------------- | :---------------------------------------------------------------------- | :--------------------------------- |
| **Id**    | Identificador único de la partida en la base de datos.                   | `38`                                                                    | Secuencial, Automático             |
| **Codigo**| Código numérico o alfanumérico único que identifica la partida.          | `31150`                                                                 | Ingreso manual, único            |
| **Nombre**| Descripción completa y oficial de la partida presupuestaria.             | `Alimentos y Bebidas para la atención de emergencias y desastres naturales` | Ingreso manual                   |
| **Creado**| Fecha y hora exactas en que se registró la partida en el sistema.        | `2023-12-12 12:39:42`                                                   | Timestamp automático             |
| **Acciones**| Botones para operaciones específicas sobre el registro de la partida.    | (Varía según permisos)                                                  | Según rol y estado                 |

## Procesos Disponibles

### Registrar Nueva Partida
1.  Hacer clic en un botón como "Nueva Partida" o "Añadir".
2.  Completar el formulario con los datos requeridos:
    *   **Código:** Ingresar el código presupuestario único.
    *   **Nombre:** Ingresar la descripción completa de la partida.
3.  Guardar el registro.

### Gestionar Partidas Existentes
*   **Editar:** Modificar el código o nombre de una partida existente (puede tener restricciones si ya se usó).
*   **Eliminar:** Borrar una partida (generalmente solo si no tiene artículos o movimientos asociados).
*   **Exportar:** (Si aplica) Generar listados de las partidas.

## Filtros Disponibles (Potenciales)
*   **Búsqueda textual**: Utilizar el campo `Buscar:` para filtrar por Código o Nombre.
*   **Paginación**: Ajustar el número de registros por página (10, 25, 50, 100).
*   **Ordenamiento**: (Asumido) Posibilidad de ordenar por Código, Nombre o Fecha de Creación.

## Consideraciones Importantes
*   Los **códigos** de partida deben ser únicos y consistentes con la normativa presupuestaria.
*   Las partidas son esenciales para la correcta clasificación de los artículos en el inventario y para la generación de reportes financieros y de gestión.
*   Generalmente, no se pueden eliminar partidas que ya han sido asignadas a artículos con movimientos de inventario.
*   La gestión de partidas suele requerir permisos administrativos.
*   Los cambios realizados deberían quedar registrados en una auditoría del sistema.

## Ejemplos de Registros en el Tablero

```plaintext
# Registro 1
Id: 38
Codigo: 31150
Nombre: Alimentos y Bebidas para la atención de emergencias y desastres naturales
Creado: 2023-12-12 12:39:42
Acciones: (No especificadas)

# Registro 2
Id: 37
Codigo: 43700
Nombre: Otra Maquinaria y Equipo
Creado: 2023-08-30 22:35:42
Acciones: (No especificadas)

# Registro 3
Id: 36
Codigo: 43120
Nombre: Equipo de Computación
Creado: 2023-08-09 16:33:08
Acciones: (No especificadas)