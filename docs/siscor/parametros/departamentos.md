---
sidebar_position: 3 # Ajusta este número según la posición deseada en la barra lateral
---

# Gestión de Departamentos

## Vista General

Este módulo permite administrar el catálogo de los departamentos geográficos de Bolivia. Es un parámetro fundamental utilizado en diversas partes del sistema para clasificar información por ubicación geográfica (ej. direcciones de personas, ubicación de proyectos, etc.).

## Tablero Principal de Departamentos

El tablero principal muestra un listado de todos los departamentos registrados en el sistema.

### Funcionalidades Clave del Tablero:

*   **Crear:** Botón para abrir el formulario y añadir un nuevo departamento.
*   **Borrado masivo:** (Funcionalidad avanzada) Permite eliminar múltiples registros seleccionados (requiere precaución y permisos).
*   **Ocultar/Mostrar eliminados:** Botones para alternar la visibilidad de los registros que han sido marcados como eliminados (borrado lógico).
*   **Paginación:** Opciones para seleccionar la cantidad de registros a mostrar por página (`10`, `25`, `50`, `100`).
*   **Búsqueda:** Campo `Buscar:` para filtrar departamentos por Nombre o Sigla.

### Estructura de la Tabla de Departamentos:

La tabla principal presenta la siguiente información para cada departamento:

| Columna   | Descripción                                                              | Tipo        | Ejemplo (Registro 1)        | Notas                                                              |
| :-------- | :----------------------------------------------------------------------- | :---------- | :-------------------------- | :----------------------------------------------------------------- |
| **ID**    | Identificador único del departamento en el sistema.                      | Numérico    | `1`                         | Secuencial, asignado automáticamente.                              |
| **Nombre**| Nombre oficial completo del departamento.                                | Texto       | `SANTA CRUZ`                | Nombre estándar del departamento.                                  |
| **Sigla** | Abreviatura o código corto utilizado para el departamento.               | Texto       | `SC`                        | Útil para representaciones cortas o códigos.                       |
| **Creado**| Fecha y hora en que se creó el registro. También muestra tiempo relativo. | Timestamp   | `2021-08-15 13:12:46` <br/> `hace 3 años` | Indica cuándo se añadió el registro. El tiempo relativo es dinámico. |
| **Acciones**| Botones para realizar operaciones sobre el registro específico.          | (Botones)   | `Borrar`, `Editar`, `Ver`   | Las acciones disponibles pueden variar según permisos.             |

## Acciones Comunes Disponibles por Registro

*   **Borrar:** Marcar un departamento como eliminado (borrado lógico). Puede requerir confirmación.
*   **Editar:** Abrir el formulario para modificar el Nombre o la Sigla del departamento.
*   **Ver:** (Posiblemente) Mostrar una vista detallada del registro (aunque en este caso podría ser redundante con la información de la tabla).

## Añadir/Editar Departamento (Formulario)

Al hacer clic en `Crear` o `Editar`, se muestra un formulario (probablemente modal) con los siguientes campos:

### Campos del Formulario:

*   **Nombre:** (Campo de texto) Para ingresar o modificar el nombre completo del departamento.
    *   *Validación:* Requerido.
*   **Sigla:** (Campo de texto) Para ingresar o modificar la sigla o abreviatura del departamento.
    *   *Validación:* Requerido, posiblemente con límite de caracteres.

### Proceso de Registro/Edición:

1.  Ingresar/Modificar el `Nombre` del departamento.
2.  Ingresar/Modificar la `Sigla`.
3.  Confirmar (Guardar) los cambios. El registro aparecerá o se actualizará en el tablero principal.

## Ejemplos de Registros en el Tablero

```plaintext
# Ejemplo 1
ID: 1
Nombre: SANTA CRUZ
Sigla: SC
Creado: 2021-08-15 13:12:46 (hace 3 años)
Acciones: Borrar, Editar, Ver

# Ejemplo 2
ID: 9
Nombre: PANDO
Sigla: PD
Creado: 2021-08-15 13:12:46 (hace 3 años)
Acciones: Borrar, Editar, Ver

# Ejemplo 3
ID: 8
Nombre: ORURO
Sigla: OR
Creado: 2021-08-15 13:12:46 (hace 3 años)
Acciones: Borrar, Editar, Ver