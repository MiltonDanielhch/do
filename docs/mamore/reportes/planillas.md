---
sidebar_position: 10 # O ajusta según tu estructura de reportes
---

# Reporte de Planillas

## Vista General
Este reporte proporciona un resumen de las planillas procesadas dentro de un rango de fechas específico. Permite visualizar información clave como la dirección administrativa, tipo de planilla, número de personas, montos totales y el estado de cada planilla.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Rango de Periodos**:
    *   **Desde**: Permite seleccionar el mes y año de inicio del rango para la búsqueda de planillas (ej. "enero de 2022").
    *   **Hasta**: Permite seleccionar el mes y año de fin del rango para la búsqueda de planillas (ej. "mayo de 2022").

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                  | Descripción                                                                 | Tipo          | Ejemplo                                   |
| :----------------------- | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------- |
| N°                       | Número secuencial del registro en la vista actual del reporte.              | Numérico      | 1                                         |
| DIRECCIÓN ADMINISTRATIVA | Unidad organizacional responsable o asociada a la planilla.                 | Texto         | "Secretaría de Administración y Finanzas" |
| TIPO DE PLANILLA         | Modalidad o categoría de la planilla (ej. Funcionamiento, Eventual, Consultores). | Texto         | "Funcionamiento"                          |
| PLANILLA                 | Identificador o código único de la planilla.                                | Texto/Numérico| "PLAN-2022-00123"                         |
| AÑO                      | Año al que corresponde la planilla.                                         | Numérico      | 2022                                      |
| MES                      | Mes al que corresponde la planilla (numérico o textual).                    | Texto/Numérico| "Enero" o "01"                            |
| N° PERSONAS              | Cantidad de personas incluidas en la planilla.                              | Numérico      | 15                                        |
| TOTAL                    | Monto total de la planilla (ej. total ganado o líquido pagable).            | Numérico      | 75300.50                                  |
| ESTADO                   | Estado actual de la planilla (ej. Generada, Aprobada, Pagada, Observada).    | Texto         | "Pagada"                                  |

## Ejemplo de Registro en Tabla (Hipotético)
```plaintext
N°: 1
DIRECCIÓN ADMINISTRATIVA: Secretaria Departamental de Obras Públicas
TIPO DE PLANILLA: Eventual
PLANILLA: PL-EVT-2022-03-005
AÑO: 2022
MES: Marzo
N° PERSONAS: 8
TOTAL: 32450.00
ESTADO: Aprobada