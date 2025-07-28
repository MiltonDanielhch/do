---
sidebar_position: 7
---

# Gestión de Cargos Alternos

## Vista General

Este módulo administra las asignaciones de cargos alternos o designaciones temporales a funcionarios que ya poseen un contrato principal dentro del Gobierno Autónomo Departamental del Beni. Permite registrar y dar seguimiento a estas funciones adicionales o interinatos.

## Tablero Principal de Cargos Alternos

El tablero principal muestra un listado paginado de todos los cargos alternos registrados.

### Funcionalidades Clave del Tablero:

*   **Añadir Cargo Alterno:** Botón para abrir el formulario de registro de una nueva designación alterna.
*   **Mostrar Entradas:** Opciones para seleccionar la cantidad de registros a mostrar por página (`10`, `25`, `50`, `100`).
*   **Buscar:** Campo para filtrar los cargos alternos por diversos criterios (ej. Contrato, Nombre, Designación).
*   **(Implícito) Paginación:** Controles para navegar entre las páginas de resultados.

### Estructura de la Tabla de Cargos Alternos:

La tabla principal presenta la siguiente información para cada cargo alterno asignado:

| Columna               | Descripción                                                                 | Formato/Ejemplo                                                                 | Notas                                                                                             |
| :-------------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------ |
| **Id**                | Identificador único del registro del cargo alterno.                         | Numérico (`1`)                                                                  | Asignado automáticamente.                                                                         |
| **Contrato**          | Número del contrato principal del funcionario al que se asigna el cargo.    | Numérico (`1153`)                                                               | Vincula la designación alterna al contrato base del funcionario.                                  |
| **Nombre**            | Denominación del cargo alterno asignado.                                    | Texto (`Director/a Departamental de Recursos Humanos a.i.`)                     | Describe la función temporal o adicional.                                                         |
| **Designación**       | Tipo o naturaleza de la asignación alterna (puede estar implícito o vacío). | Texto (Puede estar vacío o indicar "a.i.", "Encargo", etc.)                     | Clarifica el tipo de asignación.                                                                  |
| **Fecha de designación**| Fecha en la que la asignación del cargo alterno se hizo efectiva.           | `YYYY-MM-DD` (o `dd/mm/aaaa`)                                                   | Indica el inicio de la vigencia de la designación.                                                |
| **Estado**            | Situación actual de la asignación del cargo alterno.                        | Texto (`Activo`, `Inactivo`)                                                    | Controla si la designación está vigente.                                                          |
| **Registrado**        | Fecha y hora en que se creó el registro del cargo alterno.                  | Timestamp (`2022-12-10 11:08:13`) <br/> Tiempo relativo (`hace 2 años`)          | Auditoría básica del registro.                                                                    |
| **Acciones**          | Operaciones disponibles para cada registro de cargo alterno.                | Botones (Ej: `Editar`, `Activar/Desactivar`, `Ver Documentos`)                  | Permite gestionar el registro específico (los botones exactos pueden variar).                     |

## Añadir Cargo Alterno (Formulario)

Al hacer clic en "Añadir Cargo Alterno", se muestra un formulario (posiblemente en un modal) para crear un nuevo registro con los siguientes campos:

### Campos del Formulario:

*   **Usuario actual:** (Informativo) Muestra el usuario que está realizando el registro. *Generalmente no editable.*
*   **Contrato:** (Numérico/Búsqueda) Número del contrato principal del funcionario al que se le asignará el cargo alterno. El sistema probablemente valida y asocia al funcionario. *Validación: Requerido, debe corresponder a un contrato activo.*
*   **Nombre:** (Texto) Denominación oficial del cargo alterno que se está asignando. *Validación: Requerido.*
*   **Designación:** (Texto/Desplegable) Tipo específico de la designación (ej. "a.i.", "Encargado de Despacho", etc.). *Validación: Requerido.*
*   **Fecha de designación:** (Selector de Fecha) Fecha en la que inicia la asignación del cargo alterno. *Formato: `dd/mm/aaaa`. Validación: Requerido.*
*   **Estado:** (Desplegable/Radio) Estado inicial de la asignación al registrarla (Ej: "Activo"). *Validación: Requerido.*

## Flujo de Trabajo Sugerido

### Asignación de Cargo Alterno:

1.  **Identificar Funcionario:** Ingresar el número de contrato del funcionario en el formulario "Añadir Cargo Alterno".
2.  **Definir Cargo Alterno:** Especificar el Nombre, Tipo de Designación y Fecha de inicio.
3.  **Establecer Estado:** Seleccionar el estado inicial (generalmente "Activo").
4.  **Adjuntar Documentación (Potencial):** Podría existir una opción para adjuntar la resolución o memorándum de designación.
5.  **Guardar Registro:** Confirmar la creación. El sistema asignará un ID y registrará la fecha y usuario.

## Funcionalidades Adicionales (Potenciales)

*   **Filtros Avanzados:** Por Nombre del cargo, Tipo de Designación, Estado, Rango de Fechas de designación.
*   **Edición:** Modificar detalles de una asignación existente (ej. fecha de fin, estado).
*   **Activación/Desactivación:** Cambiar el estado de la asignación.
*   **Ver Documentos:** Acceder a los documentos de respaldo adjuntos (si aplica).
*   **Reportes:** Generar listados de funcionarios con cargos alternos activos.
*   **Historial:** Ver cambios realizados sobre una asignación específica.

## Consideraciones Importantes

1.  Un cargo alterno es una **función adicional o temporal** y no reemplaza ni modifica el cargo principal asociado al contrato del funcionario.
2.  Las designaciones (especialmente "a.i.") suelen requerir **documentación de respaldo** oficial (Resolución Administrativa, Memorándum).
3.  El **Estado** debe gestionarse adecuadamente (ej. pasar a "Inactivo" cuando finaliza la designación).
4.  Este módulo debe estar **integrado** con Contratos y Datos Personales para obtener la información del funcionario.
5.  Puede ser necesario implementar **alertas** para designaciones temporales que estén próximas a vencer.

## Ejemplo de Registro (Formato Tabla)

```plaintext
Id: 1
Contrato: 1153
Nombre: Director/a Departamental de Recursos Humanos a.i.
Designación: (Vacío o tipo específico)
Fecha de designación: 2022-12-10
Estado: Activo
Registrado: 2022-12-10 11:08:13 (hace 2 años)
Acciones: (Varía)