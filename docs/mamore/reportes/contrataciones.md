---
sidebar_position: 9 # O ajusta según tu estructura de reportes
---

# Reporte de Contrataciones

## Vista General
Este reporte presenta un resumen de las altas (nuevas contrataciones o reactivaciones) y bajas (ceses de contrato o inactivaciones) de personal en un periodo determinado. Es una herramienta esencial para el seguimiento de la rotación de personal y la gestión de recursos humanos.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Año**: Permite seleccionar el año para el cual se desea visualizar el reporte de contrataciones (ej. "2022").

## Estructura del Reporte
El reporte se divide en dos secciones principales:

### 1. ALTAS
Esta sección muestra todos los empleados que han iniciado un contrato o han sido reactivados durante el periodo seleccionado.

**Columnas de la Tabla de ALTAS:**

| Columna                       | Descripción                                                                    | Tipo          | Ejemplo                                      |
| :---------------------------- | :----------------------------------------------------------------------------- | :------------ | :------------------------------------------- |
| N°                            | Número secuencial del registro.                                                | Numérico      | 1                                            |
| APELLIDOS Y NOMBRES / CARGO   | Nombre completo del empleado y su cargo.                                       | Texto (Multi) | "GARCIA LOPEZ ANA / Asistente Administrativo" |
| CÉDULA DE IDENTIDAD           | Número de Cédula de Identidad del empleado.                                    | Texto         | "1234567 BN"                                 |
| EXP                           | Lugar de expedición de la Cédula de Identidad.                                 | Texto         | "BN"                                         |
| NUA/CUA                       | Número Único Asignado o Código Único de Asegurado en la AFP.                   | Texto         | "98765432"                                   |
| AFP                           | Administradora de Fondos de Pensiones a la que está afiliado el empleado.      | Texto         | "Futuro de Bolivia"                          |
| NOVEDAD                       | Tipo de alta (ej. Nuevo Ingreso, Reingreso).                                   | Texto         | "Nuevo Ingreso"                              |
| FECHA                         | Fecha de inicio del contrato o de la novedad.                                  | Fecha         | "01/03/2022"                                 |
| DÍAS TRAB.                    | Días trabajados en el periodo de la novedad (si aplica).                       | Numérico      | 30                                           |
| SUELDO MENSUAL                | Salario mensual asignado al empleado.                                          | Numérico      | 4500.00                                      |
| SUELDO PARCIAL                | Salario correspondiente a los días trabajados (si no es mes completo).         | Numérico      | 4500.00                                      |
| %                             | Porcentaje de tiempo trabajado o alguna otra proporción relevante (si aplica). | Numérico      | 100                                          |
| BONO ANTIG.                   | Monto del bono de antigüedad (si corresponde).                                 | Numérico      | 0.00                                         |
| TOTAL GANADO                  | Suma total de ingresos del empleado en el periodo de la novedad.               | Numérico      | 4500.00                                      |

### 2. BAJAS
Esta sección muestra todos los empleados cuyos contratos han finalizado o han sido inactivados durante el periodo seleccionado.

**Columnas de la Tabla de BAJAS:**
La estructura de columnas es idéntica a la tabla de ALTAS.

| Columna                       | Descripción                                                                    | Tipo          | Ejemplo                                      |
| :---------------------------- | :----------------------------------------------------------------------------- | :------------ | :------------------------------------------- |
| N°                            | Número secuencial del registro.                                                | Numérico      | 1                                            |
| APELLIDOS Y NOMBRES / CARGO   | Nombre completo del empleado y su cargo.                                       | Texto (Multi) | "RODRIGUEZ PAZ LUIS / Técnico I"             |
| CÉDULA DE IDENTIDAD           | Número de Cédula de Identidad del empleado.                                    | Texto         | "7654321 SC"                                 |
| EXP                           | Lugar de expedición de la Cédula de Identidad.                                 | Texto         | "SC"                                         |
| NUA/CUA                       | Número Único Asignado o Código Único de Asegurado en la AFP.                   | Texto         | "12345678"                                   |
| AFP                           | Administradora de Fondos de Pensiones a la que estaba afiliado el empleado.    | Texto         | "Previsión BBVA"                             |
| NOVEDAD                       | Tipo de baja (ej. Fin de Contrato, Renuncia, Despido).                         | Texto         | "Fin de Contrato"                            |
| FECHA                         | Fecha de finalización del contrato o de la novedad.                            | Fecha         | "15/04/2022"                                 |
| DÍAS TRAB.                    | Días trabajados en el periodo de la novedad (si aplica).                       | Numérico      | 15                                           |
| SUELDO MENSUAL                | Salario mensual que tenía asignado el empleado.                                | Numérico      | 5200.00                                      |
| SUELDO PARCIAL                | Salario correspondiente a los días trabajados en su último periodo.            | Numérico      | 2600.00                                      |
| %                             | Porcentaje de tiempo trabajado o alguna otra proporción relevante (si aplica). | Numérico      | 50                                           |
| BONO ANTIG.                   | Monto del bono de antigüedad (si correspondía).                                | Numérico      | 250.00                                       |
| TOTAL GANADO                  | Suma total de ingresos del empleado en su último periodo.                      | Numérico      | 2850.00                                      |

## Mensaje "No hay resultados"
Si después de aplicar los filtros no se encuentran registros de altas o bajas que coincidan con los criterios de búsqueda para el año seleccionado, la sección correspondiente del reporte mostrará el mensaje "No hay resultados".

## Consideraciones Adicionales
- Este reporte es fundamental para el análisis de la dinámica laboral dentro de la institución.
- Permite identificar tendencias en contrataciones y ceses, y puede ser útil para la planificación de la fuerza laboral.
- El pie de página "Desarrollado por Unidad de Desarrollo de Sistemas v0.0.1" indica la autoría y versión del módulo de reportes.