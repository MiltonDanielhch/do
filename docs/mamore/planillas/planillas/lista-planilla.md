---
sidebar_position: 2
---

# Listado y Gestión de Planillas

## Vista General

Este módulo proporciona una vista centralizada para la gestión, procesamiento, aprobación y consulta de todas las planillas de pago generadas en el sistema MAMORÉ del Gobierno Autónomo Departamental del Beni.

## Tablero Principal de Planillas

El tablero principal muestra un listado paginado de las planillas generadas.

### Funcionalidades Clave del Tablero:

*   **(Implícito) Añadir Planilla:** Generalmente, la creación se realiza desde otro módulo o proceso, pero podría existir un botón aquí.
*   **Mostrar Registros:** Opciones para seleccionar la cantidad de planillas a mostrar por página (`10`, `25`, `50`, `100`).
*   **Buscar:** Campo para filtrar las planillas por diversos criterios (ej. ID, Dirección Administrativa, Periodo, Tipo).
*   **(Implícito) Paginación:** Controles para navegar entre las páginas de resultados.

### Estructura de la Tabla de Planillas:

La tabla principal presenta la siguiente información clave para cada planilla:

| Columna                   | Descripción                                                                                                | Formato/Ejemplo                                                                                                                               | Notas                                                                                                                                                           |
| :------------------------ | :--------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**                    | Identificador único de la planilla.                                                                        | Numérico (`005696`)                                                                                                                           | Asignado automáticamente.                                                                                                                                       |
| **Dirección administrativa**| Unidad o dependencia para la cual se generó la planilla.                                                   | Texto (`Servicio Departamental de Salud (SEDES)`)                                                                                             | Indica la unidad ejecutora del gasto.                                                                                                                           |
| **Tipo planilla**         | Clasificación de la planilla según el tipo de contrato o fuente.                                           | Texto (`eventual`, `permanente`)                                                                                                              | Define la naturaleza de la planilla.                                                                                                                            |
| **Periodo**               | Mes y año al que corresponde la planilla.                                                                  | `YYYYMM` (`202501`)                                                                                                                           | Indica el ciclo de pago.                                                                                                                                        |
| **N° de personas**        | Cantidad total de funcionarios incluidos en la planilla.                                                   | Texto (`79 Personas`)                                                                                                                         |                                                                                                                                                                 |
| **Pendientes/Pagadas**    | Estado de los pagos individuales dentro de la planilla (visible en algunos estados).                         | Texto (`Pendientes 1 Pagadas 0`)                                                                                                              | Relevante para planillas en proceso o habilitadas.                                                                                                              |
| **Monto**                 | Monto líquido total a pagar de la planilla.                                                                | Decimal con formato de moneda (`159.580,44`)                                                                                                  | Expresado en Bolivianos (Bs.).                                                                                                                                  |
| **Detalles / Estado**     | Resumen de cálculos clave y estado actual de la planilla.                                                  | Texto multilinea: <br/> `Total ganado: 182.708,33` <br/> `Gestora: 36.206,78 (79)` <br/> `Total AFP : 36.206,78` <br/> `Estado: Pagada`       | Muestra el total bruto, descuentos principales (AFP/Gestora con cantidad de personas) y el estado actual (`Pendiente`, `Enviada`, `Aprobada`, `Habilitada`, `Cerrada`, `Pagada`, `Anulada`). |
| **Creado por**            | Nombre del usuario que generó o registró la planilla en el sistema.                                        | Texto (`ZAHIRA PEREZ PEREZ`)                                                                                                                | Auditoría de creación.                                                                                                                                          |
| **Fecha Creación**        | Fecha y hora en que se creó la planilla.                                                                   | Fecha y Hora (`13/02/2025 21:24`) <br/> Tiempo relativo (`hace 2 meses`)                                                                       | Auditoría de registro.                                                                                                                                          |
| **Acciones**              | Operaciones disponibles para cada planilla.                                                                | Botones y Menú Desplegable (Ej: `Ver Detalle`, `[Enviar/Aprobar/Habilitar/Cerrar]`, `Más > [Exportar, Anular, Imprimir Boleta, ...]`)        | Muestra botones directos para la acción principal del flujo y "Ver Detalle", además de un menú "Más" para acciones secundarias. Las acciones varían según el estado. |

## Filtros Disponibles (Potenciales)

*   **Básicos:** Por Dirección administrativa, Tipo de planilla, Periodo, Estado.
*   **Avanzados:** Por rango de fechas de creación, por rango de Monto, por Usuario creador.

## Acciones Comunes Disponibles

Las acciones dependen del estado de la planilla y los permisos del usuario:

1.  **Ver Detalle Completo:** Acceder a la vista detallada de la planilla, incluyendo el listado de todos los funcionarios y sus cálculos individuales.
2.  **Exportar (PDF/Excel):** Generar un reporte formal de la planilla en formato PDF o una hoja de cálculo Excel.
3.  **Procesar:** Ejecutar el proceso de pago o validación final para planillas en estado "Habilitada" o "Pendiente".
4.  **Habilitar:** Marcar una planilla como lista para ser procesada (si existe un estado previo como "Borrador").
5.  **Anular:** Cancelar una planilla (generalmente requiere justificación y permisos especiales). Solo aplicable a ciertos estados.
6.  **Descentralizar:** (Acción disponible según estado) Marca la planilla como descentralizada. Muestra un modal de confirmación: *"¿Desea descentralizar planilla?"*. Útil para indicar que su gestión o pago se manejará fuera del proceso central.
7.  **Centralizar:** (Acción disponible según estado) Marca la planilla como centralizada. Muestra un modal de confirmación: *"¿Desea centralizar planilla?"*. Indica que la planilla sigue el flujo de procesamiento y pago estándar del sistema.

## Flujo de Trabajo Principal y Acciones

El procesamiento de una planilla sigue un flujo secuencial principal, gestionado por un botón de acción que cambia según el estado de la planilla. Además, existen acciones secundarias disponibles.

### Flujo Principal (Botón de Acción Primaria):

Este flujo se inicia y progresa mediante el botón principal visible en la fila de la planilla:

1.  **Estado Inicial:** `Pendiente`
    *   **Botón Visible:** `Enviar`
    *   **Acción:** Al hacer clic en `Enviar`.
    *   **Modal de Confirmación:** *"¿Desea enviar la siguiente planilla para su aprobación?"*
    *   **Resultado:** Si se confirma, el estado cambia a `Enviada`.

2.  **Estado:** `Enviada`
    *   **Botón Visible:** `Aprobar`
    *   **Acción:** Al hacer clic en `Aprobar` (requiere permisos específicos).
    *   **Modal de Confirmación:** *"¿Desea aprobar la siguiente planilla? Advertencia! Esta acción cambiará el estado de la planilla a Aprobada y no podrá generar más planillas para este tipo de planillas y periodo."*
    *   **Resultado:** Si se confirma, el estado cambia a `Aprobada`.

3.  **Estado:** `Aprobada`
    *   **Botón Visible:** `Habilitar`
    *   **Acción:** Al hacer clic en `Habilitar`.
    *   **Modal/Formulario:** Se presenta un modal para seleccionar "AFP" (Ej: "Todas las AFP") y añadir "Observaciones".
    *   **Resultado:** Si se confirma, el estado cambia a `Habilitada`.

4.  **Estado:** `Habilitada`
    *   **Botón Visible:** `Cerrar`
    *   **Acción:** Al hacer clic en `Cerrar`.
    *   **Modal de Confirmación:** *"¿Desea cerrar la siguiente planilla? Al realizar ésta acción la planilla seleccionada podrá pasar a la instancia correspondiente, no se necesita que el total de los funcionarios que la componen hayan realizado cobro."* (Puede incluir opción: *"Pagar todos los funcionarios que se incluyen esta planilla"*).
    *   **Resultado:** Si se confirma, el estado cambia a `Cerrada` (o `Pagada` si se marcó la opción). El botón de acción principal desaparece o cambia a uno informativo.

### Otras Acciones Comunes:

Estas acciones suelen estar disponibles a través del botón `Ver Detalle` o un menú desplegable `Más`:

*   **Ver Detalle Completo:** (Botón `Ver Detalle`) Acceder a la vista detallada de la planilla, incluyendo el listado de todos los funcionarios y sus cálculos individuales. Disponible en la mayoría de los estados.
*   **Exportar (PDF/Excel):** (Menú `Más`) Generar un reporte formal de la planilla en formato PDF o una hoja de cálculo Excel. Disponible en la mayoría de los estados.
*   **Anular:** (Menú `Más`) Cancelar una planilla (generalmente requiere justificación y permisos especiales). Disponible solo en ciertos estados (ej. `Pendiente`, `Enviada`, `Aprobada`).
*   **Imprimir Boleta:** (Menú `Más`) Generar la boleta de pago individual para los funcionarios. Disponible usualmente en estados `Habilitada`, `Cerrada`, `Pagada`.
*   **Descentralizar:** (Menú `Más`, si aplica) Marca la planilla como descentralizada. Muestra modal de confirmación: *"¿Desea descentralizar planilla?"*. Indica gestión/pago fuera del proceso central.
*   **Centralizar:** (Menú `Más`, si aplica) Marca la planilla como centralizada. Muestra modal de confirmación: *"¿Desea centralizar planilla?"*. Indica que sigue el flujo estándar.

## Estados de Planilla

*   **Pendiente:** Generada, esperando envío para aprobación.
*   **Enviada:** Enviada para revisión y aprobación.
*   **Aprobada:** Revisada y aprobada formalmente. Bloquea nuevas planillas para el tipo/periodo.
*   **Habilitada:** Aprobada y lista para pago/cierre (con datos AFP/Obs).
*   **Cerrada:** Ciclo de procesamiento finalizado administrativamente.
*   **Pagada:** Cerrada y pagos confirmados/procesados.
*   **Anulada:** Cancelada, no será pagada.
*   **(Potencial) Borrador:** Estado inicial antes de validaciones.

## Consideraciones Importantes

1.  Los **montos** se expresan en Bolivianos (Bs.) y deben reflejar los cálculos según normativa vigente.
2.  La columna **Detalles / Estado** ofrece un resumen rápido; la información completa se encuentra en la vista detallada.
3.  Las acciones de **Procesar** y **Anular** son críticas y deben estar restringidas a usuarios con los permisos adecuados (ej. RRHH, Tesorería, Administradores).
4.  La **integración** con módulos de Contratos, Asistencia, Presupuesto y Tesorería es fundamental para la correcta generación y pago de las planillas.
5.  La **Gestora Pública** y **AFP** (Administradoras de Fondos de Pensiones) son entidades a las que se realizan aportes laborales y patronales, calculados en la planilla.

## Ejemplo de Registro (Formato Tabla Resumido)

```plaintext
ID: 005696
Dirección: Servicio Departamental de Salud (SEDES)
Tipo: eventual
Periodo: 202501
Personas: 79
Monto: 159.580,44
Detalles/Estado: Total ganado: 183.08,33 | Gestora: 3.206,78 (79) | Total AFP : 6.206,78 | Estado: Pagada
Creado por: ZAHI PEREZ
Fecha Creación: 13/02/2025 21:24 (hace 2 meses)
Acciones: Ver Detalle, Más > [Exportar PDF/Excel, Imprimir Boleta]
```
