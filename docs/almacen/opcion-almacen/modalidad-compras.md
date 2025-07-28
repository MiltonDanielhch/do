---
sidebar_position: 24
---

# Gestión de Modalidades de Compra

## Descripción General

Este módulo permite administrar el catálogo de las diferentes modalidades de contratación o compra que se utilizan en los procesos de adquisición de bienes y servicios para los almacenes del Gobierno Autónomo Departamental del Beni. Estas modalidades definen los procedimientos y normativas a seguir en cada compra.

## Tablero Principal de Modalidades de Compra

El tablero principal muestra el listado de todas las modalidades de compra registradas en el sistema.

### Funcionalidades Clave del Tablero:

*   **Visualización y Paginación:** Opciones para mostrar un número determinado de registros por página (Ej: `Mostrar 10 entradas`). Navegación entre páginas si aplica.
*   **Búsqueda:** Campo de búsqueda para encontrar modalidades rápidamente por nombre (Ej: `Buscar:`).
*   **Acciones Directas:** Botones por registro para realizar acciones como "Editar", "Eliminar" (si no está en uso), etc. (Columna "Acciones").

### Estructura de la Tabla de Modalidades:

La tabla principal muestra la siguiente información clave para cada modalidad de compra:

| Columna   | Descripción                                                              | Ejemplo de Dato (Registro 7)                      | Origen / Notas                     |
| :-------- | :----------------------------------------------------------------------- | :------------------------------------------------ | :--------------------------------- |
| **Nro**   | Identificador único o número de orden de la modalidad en el sistema.     | `7`                                               | Secuencial, Automático             |
| **Nombre**| Descripción oficial de la modalidad de compra.                           | `CONTRATACIONES CON OBJETOS ESPECIFICOS`          | Ingreso manual / Catálogo fijo   |
| **Creado**| Fecha y hora exactas en que se registró la modalidad en el sistema.      | `2022-03-02 14:26:07`                             | Timestamp automático             |
| **Acciones**| Botones para operaciones específicas sobre el registro de la modalidad.  | (Varía según permisos)                            | Según rol y estado                 |

## Procesos Disponibles

### Registrar Nueva Modalidad (Si aplica)
*   Generalmente, las modalidades de compra están definidas por normativa y no se crean frecuentemente. Si el sistema lo permite:
    1.  Hacer clic en un botón como "Nueva Modalidad" o "Añadir".
    2.  Ingresar el **Nombre** descriptivo y oficial de la modalidad.
    3.  Guardar el registro.

### Gestionar Modalidades Existentes
*   **Editar:** Modificar el nombre de una modalidad existente (poco común, sujeto a normativa).
*   **Eliminar:** Borrar una modalidad (generalmente solo si no ha sido utilizada en ningún proceso de compra).
*   **Exportar:** (Si aplica) Generar listados de las modalidades.

## Consideraciones Importantes
*   Las modalidades de compra suelen estar **predefinidas** según la normativa vigente (Ej: SABS en Bolivia).
*   Cada modalidad implica **procedimientos y requisitos específicos** para el proceso de compra.
*   Generalmente, no se pueden eliminar modalidades que ya han sido utilizadas en registros de compras o contratos.
*   La gestión de este catálogo suele requerir permisos administrativos.

## Ejemplos de Registros en el Tablero (Modalidades Comunes)

```plaintext
# Registro 1
Nro: 7
Nombre: CONTRATACIONES CON OBJETOS ESPECIFICOS
Creado: 2022-03-02 14:26:07
Acciones: (No especificadas)

# Registro 2
Nro: 6
Nombre: CONTRATACION DIRECTA DE BIENES Y SERVICIOS
Creado: 2022-03-02 14:26:01
Acciones: (No especificadas)

# Registro 3
Nro: 5
Nombre: CONTRATACION POR DESASTRES Y/O EMERGENCIAS
Creado: 2022-03-02 14:25:54
Acciones: (No especificadas)

# Registro 4
Nro: 4
Nombre: CONTRATACION POR EXCEPCION
Creado: 2022-03-02 14:25:46
Acciones: (No especificadas)

# Otras modalidades (ejemplos basados en la sección anterior)
# - CONTRATACION MENOR
# - APOYO NACIONAL A LA PRODUCCION Y EMPLEO
# - LICITACION PUBLICA