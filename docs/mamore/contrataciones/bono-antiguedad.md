---
sidebar_position: 3 
---

# Gestión de Bonos de Antigüedad

## Vista General

Este módulo administra la asignación y el seguimiento de los bonos por antigüedad para el personal del Gobierno Autónomo Departamental del Beni, reconociendo los años de servicio continuo en la institución.

## Tablero Principal de Bonos de Antigüedad

El tablero principal muestra un listado paginado de todos los bonos de antigüedad registrados.

### Funcionalidades Clave del Tablero:

*   **Añadir Bono antigüedad:** Botón para abrir el formulario de registro de un nuevo bono.
*   **Mostrar Registros:** Opciones para seleccionar la cantidad de registros a mostrar por página (`10`, `25`, `50`, `100`).
*   **Buscar:** Campo para filtrar los bonos por diversos criterios (ej. ID, Periodo, Persona, CI).
*   **(Implícito) Paginación:** Controles para navegar entre las páginas de resultados.

### Estructura de la Tabla de Bonos de Antigüedad:

La tabla principal presenta la siguiente información para cada bono asignado:

| Columna      | Descripción                                                                                             | Formato/Ejemplo                                                                                                | Notas                                                                                                                            |
| :----------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| **ID**       | Identificador único del registro del bono.                                                              | Numérico (`232`)                                                                                               | Asignado automáticamente.                                                                                                        |
| **Periodo**  | Rango de años de servicio que califica para el bono.                                                    | Texto (`8 a 10 años`, `2 a 4 años`)                                                                            | Define el nivel del bono según la antigüedad.                                                                                    |
| **Persona**  | Nombre completo del beneficiario del bono.                                                              | Texto (`KATHIA PEREZ PEREZ`) <br/> `(CI)` (`1234567`)                                                         | Muestra el nombre y el CI para identificación clara.                                                                             |
| **Planilla** | Tipo de planilla a la que pertenece la persona (puede influir en la aplicabilidad del bono).              | Texto (`Permanente`)                                                                                           |                                                                                                                                  |
| **Inicio**   | Fecha en la que el bono se hace efectivo o comienza a aplicarse para el periodo actual.                 | `DD/MM/YYYY` (`26/11/2024`)                                                                                    |                                                                                                                                  |
| **Estado**   | Indica si el registro del bono está actualmente activo o inactivo.                                      | Texto (`Activo`)                                                                                               | Controla la vigencia del registro.                                                                                               |
| **Registrado**| Información sobre quién y cuándo se realizó el registro del bono.                                       | Usuario (`THALIA ANDREA`) <br/> Fecha y Hora (`23/12/2024 10:40`) <br/> Tiempo relativo (`hace 4 meses`) | Auditoría básica del registro.                                                                                                   |
| **Acciones** | Operaciones disponibles para cada registro de bono.                                                     | Botones (Ej: `Editar`, `Activar/Desactivar`, `Historial`)                                                      | Permite gestionar el registro específico. (Los botones exactos pueden variar).                                                   |

## Añadir Bono de Antigüedad (Formulario)

Al hacer clic en "Añadir Bono antigüedad", se muestra un formulario para registrar un nuevo bono con los siguientes campos:

### Campos del Formulario:

*   **CI Beneficiario:** (Texto/Búsqueda) Cédula de Identidad de la persona a la que se asignará el bono. El sistema probablemente busca y autocompleta los datos de la persona. *Validación: Requerido, debe existir en la base de datos de personas.*
*   **Tipo de bono:** (Desplegable/Texto) Define la naturaleza o categoría del bono (podría estar predefinido como "Antigüedad"). *Validación: Requerido.*
*   **Años de servicio:** (Numérico) Cantidad de años de servicio cumplidos. (Ej: `2`). *Validación: Requerido.*
*   **Meses:** (Numérico) Cantidad de meses adicionales de servicio. (Ej: `1`). *Validación: Requerido.*
*   **Días:** (Numérico) Cantidad de días adicionales de servicio. (Ej: `1`). *Validación: Requerido.*
*   **Cantidad de salarios mínimos:** (Numérico) Factor basado en salarios mínimos para el cálculo del bono (según normativa). (Ej: `1`). *Validación: Requerido.*
*   **Fecha de inicio:** (Selector de Fecha) Fecha a partir de la cual aplica este bono o periodo. *Formato: `dd/mm/aaaa`. Validación: Requerido.*
*   **Estado:** (Desplegable/Radio) Estado inicial del bono al registrarlo (Ej: "Activo"). *Validación: Requerido.*
*   **Observaciones:** (Texto, opcional) Campo para añadir notas o comentarios relevantes sobre la asignación del bono.
*   **Registrado por:** (Texto informativo) Muestra el usuario que está realizando el registro. *Generalmente no editable.*

## Flujo de Trabajo Sugerido

### Asignación de Bono:

1.  **Identificar Beneficiario:** Ingresar el CI en el formulario "Añadir Bono antigüedad". El sistema debería validar y cargar los datos de la persona.
2.  **Completar Datos del Bono:** Rellenar los campos de tipo de bono, años/meses/días de servicio, cantidad de salarios mínimos, fecha de inicio y estado.
3.  **Añadir Observaciones (Opcional):** Incluir cualquier nota pertinente.
4.  **Guardar Registro:** Confirmar la creación del bono. El sistema asignará un ID y registrará la fecha y usuario.

## Filtros de Búsqueda (Potenciales)

*   Por Periodo de antigüedad (ej. "2 a 4 años").
*   Por Persona (Nombre o CI).
*   Por Estado (Activo/Inactivo).
*   Por Rango de fechas de registro o de inicio.
*   Por Tipo de Planilla.

## Acciones Comunes por Registro (Potenciales)

*   **Editar:** Modificar los detalles de un bono existente (puede requerir permisos especiales).
*   **Activar/Desactivar:** Cambiar el estado del bono.
*   **Historial:** Ver un registro de los cambios o bonos anteriores para esa persona.
*   **Reporte:** Generar listados o informes (ej. para contabilidad o planillas).

## Consideraciones Importantes

1.  El cálculo exacto de los **años, meses y días de servicio** es crucial y debe basarse en la fecha de ingreso oficial de la persona.
2.  La **Cantidad de salarios mínimos** debe ajustarse a la normativa vigente para cada periodo de antigüedad.
3.  La asignación y modificación de bonos puede requerir **aprobaciones** internas (ej. RRHH).
4.  Este módulo debe estar **integrado** con los sistemas de Planillas y Datos Personales para asegurar la consistencia de la información.

## Ejemplo de Registro (Formato Tabla)

```plaintext
ID: 232
Periodo: 8 a 10 años
Persona: KATHIA PEREZ PEREZ (CI: 12345678)
Planilla: Permanente
Inicio: 26/11/2024
Estado: Activo
Registrado: THALIA ANDREA - 23/12/2024 10:40 (hace 4 meses)
Acciones: (Varía)