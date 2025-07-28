---
sidebar_position: 8 # O ajusta según tu estructura de reportes
---

# Reporte de Pagos de Cheques (Nómina)

## Vista General
Este reporte detalla los cheques emitidos específicamente para el pago de nóminas o planillas salariales y las obligaciones asociadas. Permite realizar un seguimiento de los pagos efectuados mediante cheque en el contexto de recursos humanos.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Dirección Administrativa**:
    *   Permite seleccionar una Dirección Administrativa específica de una lista desplegable para ver los cheques asociados a ella.
    *   La opción por defecto o una de las opciones es "--Todas las direcciones administrativas--" para incluir todas.
    *   Ejemplos de Direcciones Administrativas:
        *   Corregimiento Municipio de Trinidad
        *   Servicio Departamental de Gestion Social (SEDEGES)
        *   Secretaria Departamental de Administracion y Finanzas
        *   Sub Gobernacion Provincia Marban
        *   Hospital Presidente German Busch
        *   (y muchas otras disponibles en el sistema)

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                  | Descripción                                                                    | Tipo          | Ejemplo                                          |
| :----------------------- | :----------------------------------------------------------------------------- | :------------ | :----------------------------------------------- |
| N°                       | Número secuencial del registro en la vista actual del reporte.                 | Numérico      | 1                                                |
| Dirección administrativa | Unidad organizacional que generó o está asociada al pago de la planilla.       | Texto         | "Corregimiento Municipio de Trinidad"            |
| Tipo de planilla         | Modalidad o concepto de la planilla (ej. Funcionamiento, Eventual).            | Texto         | "Funcionamiento"                                 |
| Periodo                  | Mes y año al que corresponde la planilla.                                      | Texto         | "202012"                                         |
| N° de planilla           | Identificador único de la planilla.                                            | Texto/Numérico| "8261"                                           |
| AFP                      | Administradora de Fondos de Pensiones relacionada con el pago (si aplica).     | Texto         | "Futuro"                                         |
| N° personas              | Cantidad de personas incluidas en la planilla asociada al cheque.              | Numérico      | 2                                                |
| Total ganado             | Suma total de los haberes o montos base de la planilla.                        | Numérico      | 16.131,96                                        |
| Nro Cheque               | Número único del cheque emitido.                                               | Texto/Numérico| "215874"                                         |
| Fecha de impresión       | Fecha en que el cheque fue impreso.                                            | Fecha         | "22/Mar/2021"                                    |
| Beneficiario             | Nombre de la persona o entidad a favor de quien se emitió el cheque.           | Texto         | "Caja de Salud Cordes"                           |
|                          | (Sub-descripción del concepto del pago si el beneficiario es una entidad)      | Texto         | "Aporte Pat. Salud"                              |
| Estado                   | Estado actual del cheque (ej. Pendiente, Pagado, Anulado).                     | Texto         | "Pendiente"                                      |
| Monto                    | Valor monetario del cheque o del concepto específico.                          | Numérico      | 1.613,20                                         |
|                          | (Puede haber un total general del cheque si agrupa varios conceptos)           | Numérico      | (TOTAL 1.613,20)                                 |

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