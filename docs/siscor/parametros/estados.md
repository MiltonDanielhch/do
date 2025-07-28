---
sidebar_position: 4 # Ajusta este número según la posición deseada en la barra lateral
---

# Gestión de Estados de Correspondencia

## Vista General

Este módulo administra los diferentes estados por los que puede pasar un trámite o documento dentro del Sistema de Correspondencia (SISCOR). Estos estados son cruciales para entender el progreso de un documento en su flujo de trabajo (ej. Pendiente, Derivado, Archivado, Finalizado, etc.).

## Tablero Principal de Estados

El tablero principal muestra un listado de todos los estados definidos en el sistema.

### Funcionalidades Clave del Tablero:

*   **(Implícito) Crear Estado:** Debe existir un botón (como "Añadir Estado" o "Crear") para abrir el formulario de registro de un nuevo estado.
*   **Mostrar Entradas:** Opciones para seleccionar la cantidad de registros a mostrar por página (`10`, `25`, `50`, `100`).
*   **Búsqueda:** Campo `Buscar:` para filtrar estados por Clave, Nombre.
*   **(Implícito) Paginación:** Controles para navegar entre páginas si la lista es extensa.

### Estructura de la Tabla de Estados:

La tabla principal presenta la siguiente información para cada estado:

| Columna    | Descripción                                                              | Tipo        | Ejemplo (Registro 3)        | Notas                                                                      |
| :--------- | :----------------------------------------------------------------------- | :---------- | :-------------------------- | :------------------------------------------------------------------------- |
| **ID**     | Identificador único del estado en el sistema.                            | Numérico    | `3`                         | Secuencial, asignado automáticamente.                                      |
| **Clave**  | Código corto o letra única que representa el estado.                     | Texto       | `E`                         | Útil para referencias internas o visualizaciones compactas.                 |
| **Nombre** | Nombre descriptivo completo del estado.                                  | Texto       | `Enviado`                   | Describe claramente la situación del trámite.                              |
| **Color**  | Color asociado al estado para identificación visual rápida (opcional).   | Texto/Color | `Verde`                     | Ayuda a diferenciar estados en listados o reportes. Puede no estar siempre definido. |
| **Estado** | Condición del registro del estado (`Activo` o `Inactivo`).               | Texto       | `Activo`                    | Indica si el estado puede ser utilizado actualmente en el sistema.         |
| **Creado** | Fecha y hora en que se creó el registro. También muestra tiempo relativo. | Timestamp   | `2021-08-15 13:12:46` <br/> `hace 3 años` | Indica cuándo se añadió el registro. El tiempo relativo es dinámico.        |
| **Acciones**| Botones para realizar operaciones sobre el registro específico.          | (Botones)   | (No visible en ejemplos)    | Generalmente incluiría `Editar`, `Borrar` (o Cambiar Estado).              |

## Acciones Comunes Disponibles por Registro (Inferido)

*   **Editar:** Abrir el formulario para modificar la Clave, Nombre, Color o Estado del registro.
*   **Borrar/Desactivar:** Cambiar el `Estado` a `Inactivo` para que no pueda ser seleccionado en nuevos trámites, o eliminarlo si no está en uso (depende de la lógica del sistema).

## Añadir/Editar Estado (Formulario)

Al hacer clic en "Añadir Estado" o "Editar", se muestra un formulario (probablemente modal) con los siguientes campos:

### Campos del Formulario:

*   **Clave:** (Campo de texto) Para ingresar o modificar el código corto del estado.
    *   *Validación:* Requerido, probablemente único.
*   **Nombre:** (Campo de texto) Para ingresar o modificar el nombre descriptivo del estado.
    *   *Validación:* Requerido.
*   **Color:** (Selector de color o campo de texto) Para asignar o modificar un color visual asociado al estado.
    *   *Validación:* Opcional.
*   **Estado:** (Desplegable/Radio Button) Para definir si el estado está `Activo` o `Inactivo`.
    *   *Validación:* Requerido. Valor por defecto suele ser `Activo`.

### Proceso de Registro/Edición:

1.  Ingresar/Modificar la `Clave`.
2.  Ingresar/Modificar el `Nombre`.
3.  Seleccionar/Modificar el `Color` (opcional).
4.  Seleccionar el `Estado` (`Activo`/`Inactivo`).
5.  Confirmar (Guardar) los cambios. El registro aparecerá o se actualizará en el tablero principal.

## Ejemplos de Registros en el Tablero

```plaintext
# Ejemplo 1 (Completo)
ID: 3
Clave: E
Nombre: Enviado
Color: Verde
Estado: Activo
Creado: 2021-08-15 13:12:46 (hace 3 años)
Acciones: (Varía)

# Ejemplo 2
ID: 7
Clave: R
Nombre: Resp. Elaborada
Color: (No definido)
Estado: (No definido, probablemente Activo)
Creado: 2021-08-15 13:12:47 (hace 3 años)
Acciones: (Varía)

# Ejemplo 3
ID: 1
Clave: A
Nombre: Archivado
Color: (No definido)
Estado: (No definido, probablemente Activo)
Creado: 2021-08-15 13:12:46 (hace 3 años)
Acciones: (Varía)