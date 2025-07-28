---
sidebar_position: 5 # O ajusta según tu estructura de reportes
---

# Reporte de Cheques

## Vista General
Este reporte proporciona un detalle de los cheques emitidos, generalmente asociados a pagos de planillas, aportes y otras obligaciones. Permite realizar un seguimiento de los pagos efectuados mediante cheque.

## Filtros Disponibles
El reporte ofrece varias opciones para refinar la búsqueda y visualización de los datos:

-   **Rango de Fechas**:
    *   **Desde**: Fecha de inicio del rango para la búsqueda de cheques (ej. "06/01/2021").
    *   **Hasta**: Fecha de fin del rango para la búsqueda de cheques (ej. "23/04/2021").
-   **Periodo**: Permite seleccionar un periodo específico (ej. `AAAAMM`) o la opción "Todos" para incluir todos los periodos dentro del rango de fechas.
-   **N° de planilla**: Campo para ingresar un número de planilla específico y filtrar los cheques asociados a ella.

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                  | Descripción                                                                    | Tipo          | Ejemplo                                          |
| :----------------------- | :----------------------------------------------------------------------------- | :------------ | :----------------------------------------------- |
| N°                       | Número secuencial del registro en la vista actual del reporte.                 | Numérico      | 1                                                |
| Dirección administrativa | Unidad organizacional que generó o está asociada al pago.                      | Texto         | "Corregimiento Municipio de Trinidad"            |
| Tipo de planilla         | Modalidad o concepto de la planilla (ej. Funcionamiento, Eventual).            | Texto         | "Funcionamiento"                                 |
| Periodo                  | Mes y año al que corresponde la planilla o el pago.                            | Texto         | "202012"                                         |
| N° de planilla           | Identificador único de la planilla.                                            | Texto/Numérico| "8261"                                           |
| AFP                      | Administradora de Fondos de Pensiones relacionada con el pago (si aplica).     | Texto         | "Futuro"                                         |
| N° personas              | Cantidad de personas incluidas en la planilla asociada al cheque.              | Numérico      | 2                                                |
| Total ganado             | Suma total de los haberes o montos base de la planilla.                        | Numérico      | 16.131,96                                        |
| Nro Cheque               | Número único del cheque emitido.                                               | Texto/Numérico| "215874"                                         |
| Fecha de impresión       | Fecha en que el cheque fue impreso.                                            | Fecha         | "22/Mar/2021"                                    |
| Beneficiario             | Nombre de la persona o entidad a favor de quien se emitió el cheque.           | Texto         | "Caja de Salud Cordes"                           |
|                          | (Sub-descripción del concepto del pago si el beneficiario es una entidad)      | Texto         | "Aporte Pat. Salud"                              |
| Estado                   | Estado actual del cheque (ej. Pendiente, Pagado, Anulado).                     | Texto         | "Pendiente"                                      |
| Monto                    | Valor monetario del cheque.                                                    | Numérico      | 1.613,20                                         |
|                          | (Subtotal o total si hay múltiples conceptos o un resumen)                     | Numérico      | (TOTAL 1.613,20)                                 |

## Ejemplo de Registro en Tabla
```plaintext
N°: 1
Dirección administrativa: Corregimiento Municipio de Trinidad
Tipo de planilla: Funcionamiento
Periodo: 202012
N° de planilla: 8261
AFP: Futuro
N° personas: 2
Total ganado: 16.131,96
Nro Cheque: 215874
Fecha de impresión: 22/Mar/2021
Beneficiario: Caja de Salud Cordes
  Aporte Pat. Salud
Estado: Pendiente
Monto: 1.613,20
TOTAL: 1.613,20