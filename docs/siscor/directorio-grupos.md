---
sidebar_position: 7 # Ajusta este número según la posición deseada en la barra lateral
---

# Gestión de Grupos de Directorio

## Vista General

Este módulo administra las categorías o agrupaciones utilizadas dentro del [Directorio Telefónico](./directorio-telefonico.md). Permite organizar los contactos telefónicos por áreas, departamentos, unidades u otras clasificaciones relevantes para la institución (ej. "DESPACHO DE GOBERNACIÓN", "SECRETARIA GENERAL", "DIRECCION DE TURISMO").

## Tablero Principal de Grupos de Directorio

El tablero principal muestra un listado paginado de todos los grupos de directorio definidos en el sistema.

### Funcionalidades Clave del Tablero:

*   **(Implícito) Crear Grupo:** Botón "Añadir Directorio Grupo" para abrir el formulario de registro de un nuevo grupo.
*   **Mostrar Entradas:** Opciones para seleccionar la cantidad de registros a mostrar por página (`10`, `25`, `50`, `100`).
*   **Búsqueda:** Campo `Buscar:` para filtrar grupos por Nombre.
*   **(Implícito) Paginación:** Controles para navegar entre páginas si la lista es extensa.

### Estructura de la Tabla de Grupos de Directorio:

La tabla principal presenta la siguiente información para cada grupo:

| Columna      | Descripción                                                              | Tipo        | Ejemplo (Registro SEDEDE)        | Notas                                                              |
| :----------- | :----------------------------------------------------------------------- | :---------- | :------------------------------- | :----------------------------------------------------------------- |
| **Nombre**   | Nombre descriptivo del grupo o categoría.                                | Texto       | `SEDEDE`                         | Define la clasificación para los contactos telefónicos.            |
| **Created At**| Fecha y hora en que se creó el registro. También muestra tiempo relativo. | Timestamp   | `2024-10-31 08:58:46` <br/> `hace 6 meses` | Indica cuándo se añadió el registro. El tiempo relativo es dinámico. |
| **Acciones** | Botones para realizar operaciones sobre el registro específico.          | (Botones)   | (No visible en ejemplos)         | Generalmente incluiría `Editar`, `Eliminar`.                       |

## Acciones Comunes Disponibles por Registro (Inferido)

*   **Editar:** Abrir el formulario para modificar el Nombre del grupo.
*   **Eliminar:** Quitar un grupo del catálogo. Esta acción podría estar restringida si el grupo ya tiene registros telefónicos asociados.

## Añadir/Editar Grupo de Directorio (Formulario)

Al hacer clic en "Añadir Directorio Grupo" o "Editar", se muestra un formulario (probablemente modal) con el siguiente campo:

### Campos del Formulario:

*   **Nombre:** (Campo de texto) Para ingresar o modificar el nombre del grupo de directorio.
    *   *Validación:* Requerido, probablemente único.

### Proceso de Registro/Edición:

1.  Ingresar/Modificar el `Nombre` del grupo.
2.  Confirmar (Guardar) los cambios. El registro aparecerá o se actualizará en el tablero principal.

## Ejemplos de Registros en el Tablero

```plaintext
# Ejemplo 1
Nombre: SEDEDE
Created At: 2024-10-31 08:58:46 (hace 6 meses)
Acciones: (Varía)

# Ejemplo 2
Nombre: DIRECCION DE TURISMO
Created At: 2024-10-28 12:08:45 (hace 6 meses)
Acciones: (Varía)

# Ejemplo 3
Nombre: SEGURIDAD CIUDADANA
Created At: 2024-10-10 14:05:27 (hace 6 meses)
Acciones: (Varía)

# Ejemplo 4
Nombre: UNIDAD DE CONTRATACIONES
Created At: 2024-10-09 11:25:45 (hace 6 meses)
Acciones: (Varía)