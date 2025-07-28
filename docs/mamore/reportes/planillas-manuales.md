---
sidebar_position: 6 # O ajusta según tu estructura de reportes
---

# Reporte de Pagos de Planillas Manuales

## Vista General
Este reporte detalla los pagos asociados a planillas que han sido procesadas o registradas manualmente en el sistema. Proporciona un seguimiento exhaustivo de los aportes a las AFPs y a la Caja de Salud Cordes relacionados con estas planillas.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Periodo**:
    *   **Mes/Año Específico**: Permite ingresar un periodo único en formato `AAAAMM` (ej. "202101") para ver los pagos de planillas manuales correspondientes a ese mes.
    *   **Rango de Periodos**: Permite ingresar un rango de periodos en formato `AAAAMM-AAAAMM` (ej. "202101-202105") para visualizar los pagos dentro de ese lapso.
-   **Código de planilla**: Campo para ingresar un código de planilla específico y filtrar los pagos asociados a ella.

## Estructura de la Tabla
El reporte presenta la información en un formato tabular amplio, agrupado en tres secciones principales: "DATOS GENERALES", "ADMINISTRADORES DE FONDOS DE PENSIONES", y "CAJA DE SALUD CORDES".

| Sección                                | Columna                    | Descripción                                                                 | Tipo          | Ejemplo                                   |
| :------------------------------------- | :------------------------- | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------- |
| **DATOS GENERALES**                    | N°                         | Número secuencial del registro.                                             | Numérico      | 1                                         |
|                                        | HR/NCI                     | Hoja de Ruta o Número de Comunicación Interna asociada.                     | Texto         | "HR-123/2021"                             |
|                                        | PERIODO                    | Mes y año al que corresponde la planilla.                                   | Texto         | "202101"                                  |
|                                        | DIRECCIÓN ADMINISTRATIVA   | Unidad organizacional que gestionó la planilla.                             | Texto         | "Secretaría de Desarrollo Humano"         |
|                                        | TIPO DE PLANILLA           | Modalidad o concepto de la planilla manual.                                 | Texto         | "Consultores Externos"                    |
|                                        | CÓDIGO DE PLANILLA         | Identificador único de la planilla manual.                                  | Texto/Numérico| "MAN-005"                                 |
|                                        | N° DE PERSONAS             | Cantidad de personas incluidas en la planilla.                              | Numérico      | 3                                         |
| **ADMINISTRADORES DE FONDOS DE PENSIONES** | AFP                        | Administradora de Fondos de Pensiones.                                      | Texto         | "Futuro de Bolivia"                       |
|                                        | TOTAL GANADO               | Suma total de los haberes o montos base de la planilla.                     | Numérico      | 12500.00                                  |
|                                        | APORTE AFP                 | Monto total del aporte realizado a la AFP.                                  | Numérico      | 1250.00                                   |
|                                        | N° FCP                     | Número del Formulario de Comprobante de Pago a la AFP.                      | Texto/Numérico| "FCP-98765"                               |
|                                        | FECHA DE PAGO AFP          | Fecha en que se realizó el pago a la AFP.                                   | Fecha         | "15/02/2021"                              |
|                                        | ID PAGO                    | Identificador único del pago realizado a la AFP (si aplica).                | Texto/Numérico| "AFP-PAY-001"                             |
|                                        | MULTA AFP                  | Monto de la multa pagada a la AFP (si aplica).                              | Numérico      | 0.00                                      |
| **CAJA DE SALUD CORDES**               | APORTE CC                  | Monto total del aporte realizado a la Caja de Salud Cordes.                 | Numérico      | 1250.00                                   |
|                                        | N° DE CHEQUE               | Número del cheque con el que se pagó a la Caja de Salud (si aplica).        | Texto/Numérico| "345678"                                  |
|                                        | N° DE DEPOSITO             | Número del depósito bancario a la Caja de Salud (si aplica).                | Texto/Numérico| "DEP-CSC-002"                             |
|                                        | FECHA DE PAGO CC           | Fecha en que se realizó el pago a la Caja de Salud.                         | Fecha         | "16/02/2021"                              |
|                                        | F GTC-11                   | Número del Formulario GTC-11 (si aplica).                                   | Texto/Numérico| "GTC11-003"                               |
|                                        | ID PAGO                    | Identificador único del pago realizado a la Caja de Salud (si aplica).      | Texto/Numérico| "CSC-PAY-004"                             |
|                                        | N° DE RECIBO               | Número del recibo emitido por la Caja de Salud.                             | Texto/Numérico| "REC-CSC-005"                             |
|                                        | MULTA CC                   | Monto de la multa pagada a la Caja de Salud (si aplica).                    | Numérico      | 0.00                                      |

## Mensaje "No hay resultados"
Si después de aplicar los filtros no se encuentran registros que coincidan con los criterios de búsqueda, el reporte mostrará el mensaje "No hay resultados".

## Consideraciones Adicionales
- Este reporte es fundamental para la conciliación de pagos manuales y el control de aportes a entidades de seguridad social.
- La precisión de los números de formulario, fechas de pago e identificadores es crucial para la auditoría.
- El pie de página "Desarrollado por Unidad de Desarrollo de Sistemas v0.0.1" indica la autoría y versión del módulo de reportes.