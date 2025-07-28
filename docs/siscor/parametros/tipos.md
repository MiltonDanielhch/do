---
sidebar_position: 5 # Ajusta este número según la posición deseada en la barra lateral
---

# Gestión de Tipos de Correspondencia

## Vista General

Este módulo administra el catálogo de los diferentes tipos de documentos o correspondencia que se manejan dentro del sistema SISCOR (ej. CARTA, INFORME, MEMORANDUM, CIRCULAR, etc.). Definir estos tipos es esencial para clasificar correctamente la correspondencia y aplicar posibles flujos de trabajo o reglas específicas.

## Tablero Principal de Tipos

El tablero principal muestra un listado paginado de todos los tipos de correspondencia definidos en el sistema.

### Funcionalidades Clave del Tablero:

*   **(Implícito) Crear Tipo:** Botón "Añadir Tipo" para abrir el formulario de registro de un nuevo tipo de correspondencia.
*   **Mostrar Entradas:** Opciones para seleccionar la cantidad de registros a mostrar por página (`10`, `25`, `50`, `100`).
*   **Búsqueda:** Campo `Buscar:` para filtrar tipos por Nombre.
*   **Paginación:** Controles "Anterior" y "Siguiente" para navegar entre las páginas de resultados.

### Estructura de la Tabla de Tipos:

La tabla principal presenta la siguiente información para cada tipo de correspondencia:

| Columna    | Descripción                                                              | Tipo        | Ejemplo (Registro 9)             | Notas                                                                                                |
| :--------- | :----------------------------------------------------------------------- | :---------- | :------------------------------- | :--------------------------------------------------------------------------------------------------- |
| **ID**     | Identificador único del tipo en el sistema.                              | Numérico    | `9`                              | Secuencial, asignado automáticamente.                                                                |
| **Nombre** | Nombre descriptivo del tipo de correspondencia.                          | Texto       | `Respuesta de Informe Tecnico`   | Define la categoría del documento.                                                                   |
| **Ingreso**| Indica si este tipo de documento es típicamente de entrada (externo/interno). | Numérico (0/1) | `1`                              | `1` = Sí, `0` = No. Ayuda a filtrar o clasificar en bandejas.                                         |
| **Salida** | Indica si este tipo de documento es típicamente de salida (generado internamente). | Numérico (0/1) | `1`                              | `1` = Sí, `0` = No. Útil para diferenciar documentos generados vs. recibidos.                         |
| **Estado** | Condición actual del registro del tipo (`Activo` o `Inactivo`).          | Texto       | `Activo`                         | Indica si el tipo puede ser utilizado actualmente. (Puede no mostrarse en todos los registros de la tabla). |
| **Creado** | Fecha y hora en que se creó el registro. También muestra tiempo relativo. | Timestamp   | `2022-10-20 11:56:07` <br/> `hace 2 años` | Indica cuándo se añadió el registro. El tiempo relativo es dinámico.                                   |
| **Acciones**| Botones para realizar operaciones sobre el registro específico.          | (Botones)   | (No visible en ejemplos)         | Generalmente incluiría `Editar`, `Borrar` (o Cambiar Estado).                                        |

## Acciones Comunes Disponibles por Registro (Inferido)

*   **Editar:** Abrir el formulario para modificar el Nombre, Ingreso, Salida o Estado del tipo.
*   **Borrar/Desactivar:** Cambiar el `Estado` a `Inactivo` para que no pueda ser seleccionado en nuevos trámites, o eliminarlo si no está en uso (depende de la lógica del sistema).

## Añadir/Editar Tipo (Formulario)

Al hacer clic en "Añadir Tipo" o "Editar", se muestra un formulario (probablemente modal) con los siguientes campos:

### Campos del Formulario:

*   **Nombre:** (Campo de texto) Para ingresar o modificar el nombre descriptivo del tipo.
    *   *Validación:* Requerido, probablemente único.
*   **Ingreso:** (Checkbox/Toggle/Select 0-1) Para indicar si este tipo aplica a correspondencia de ingreso.
    *   *Validación:* Requerido.
*   **Salida:** (Checkbox/Toggle/Select 0-1) Para indicar si este tipo aplica a correspondencia de salida.
    *   *Validación:* Requerido.
*   **Estado:** (Desplegable/Radio Button) Para definir si el tipo está `Activo` o `Inactivo`.
    *   *Validación:* Requerido. Valor por defecto suele ser `Activo`.

### Proceso de Registro/Edición:

1.  Ingresar/Modificar el `Nombre`.
2.  Definir si aplica a `Ingreso` (Sí/No).
3.  Definir si aplica a `Salida` (Sí/No).
4.  Seleccionar el `Estado` (`Activo`/`Inactivo`).
5.  Confirmar (Guardar) los cambios. El registro aparecerá o se actualizará en el tablero principal.

## Ejemplos de Registros en el Tablero

```plaintext
# Ejemplo 1
ID: 9
Nombre: Respuesta de Informe Tecnico
Ingreso: 1
Salida: 1
Estado: Activo
Creado: 2022-10-20 11:56:07 (hace 2 años)
Acciones: (Varía)

# Ejemplo 2
ID: 1
Nombre: CIRCULAR
Ingreso: 0
Salida: 1
Estado: (No visible, probablemente Activo)
Creado: 2021-08-15 13:12:47 (hace 3 años)
Acciones: (Varía)

# Ejemplo 3
ID: 4
Nombre: FAX
Ingreso: 1
Salida: 0
Estado: (No visible, probablemente Activo)
Creado: 2021-08-15 13:12:47 (hace 3 años)
Acciones: (Varía)

# Ejemplo 4
ID: 5
Nombre: INFORME
Ingreso: 0
Salida: 0
Estado: (No visible, probablemente Activo)
Creado: 2021-08-15 13:12:47 (hace 3 años)
Acciones: (Varía)