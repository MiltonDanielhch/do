---
sidebar_position: 4 # O ajusta según tu estructura de reportes
---

# Reporte de Pagos al Seguro Social

## Vista General
Este reporte detalla los pagos realizados al seguro social, ofreciendo diferentes niveles de agregación y filtrado para el análisis y la conciliación de aportes.

## Filtros Disponibles
El reporte ofrece varias opciones para refinar la búsqueda y visualización de los datos:

-   **Tipo de Reporte**:
    *   **No centralizada**: Muestra los pagos de forma individual o por unidad/dependencia, sin agrupar a nivel institucional total.
    *   **Centralizada**: Presenta un resumen de los pagos consolidados a nivel institucional.
    *   **Detallado**: Ofrece un desglose minucioso de cada pago, incluyendo todos los componentes del aporte.

-   **Periodo**:
    *   **Mes/Año Específico**: Permite ingresar un periodo único en formato `AAAAMM` (ej. "202101") para ver los pagos correspondientes a ese mes.
    *   **Rango de Periodos**: Permite ingresar un rango de periodos en formato `AAAAMM-AAAAMM` (ej. "202101-202105") para visualizar los pagos acumulados o detallados dentro de ese lapso.

-   **Identificador Específico (Campo numérico)**:
    *   Este campo (que por defecto muestra "0") podría utilizarse para filtrar por un identificador específico, como el código de una entidad o un número de lote de pago. Su funcionalidad exacta dependerá de la implementación del sistema.

-   **Agrupación**:
    *   **Agrupar por AFP**: Casilla de verificación que, al ser seleccionada, consolida o subtotaliza los pagos por cada Administradora de Fondos de Pensiones (AFP).

## Estructura de la Tabla (Ejemplo Hipotético)
Dado que la estructura de la tabla no es visible en la imagen, a continuación se presenta un ejemplo de las columnas que comúnmente se encontrarían en un reporte de este tipo, especialmente en la vista "Detallado":

| Columna                 | Descripción                                                                 | Tipo          | Ejemplo                                   |
| :---------------------- | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------- |
| N°                      | Número secuencial del registro.                                             | Numérico      | 1                                         |
| Periodo                 | Mes y año del pago.                                                         | Texto         | "202101"                                  |
| Nombre Completo         | Nombres y apellidos del empleado.                                           | Texto         | "JUAN PEREZ PEREIRA"                     |
| CI                      | Cédula de Identidad del empleado.                                           | Texto         | "1234567"                                 |
| NUA/CUA                 | Número Único Asignado o Código Único de Asegurado del empleado.             | Texto         | "9876545"                                |
| AFP                     | Administradora de Fondos de Pensiones.                                      | Texto         | "Futuro de Bolivia"                       |
| Sueldo Cotizable        | Monto del sueldo sobre el cual se calculan los aportes.                     | Numérico      | 5500.00                                   |
| Aporte Laboral (AFP)    | Contribución del empleado a la AFP.                                         | Numérico      | 550.00                                    |
| Aporte Patronal (AFP)   | Contribución del empleador a la AFP por el empleado.                        | Numérico      | 275.00                                    |
| Aporte Caja de Salud    | Contribución al seguro de salud.                                            | Numérico      | 550.00                                    |
| Otros Aportes           | Otros descuentos o aportes relacionados con la seguridad social.            | Numérico      | 55.00                                     |
| Total Aportado          | Suma total de los aportes para ese empleado en el periodo.                  | Numérico      | 1430.00                                   |
| Dependencia             | Unidad organizacional o secretaría a la que pertenece el empleado.          | Texto         | "Secretaría de Finanzas"                  |
| Fecha de Pago           | Fecha en que se realizó el pago de los aportes.                             | Fecha         | "15/02/2021"                              |

*Nota: La estructura de la tabla variará significativamente si se selecciona "No centralizada", "Centralizada" o si la opción "Agrupar por AFP" está activa, mostrando datos más agregados o resumidos.*

## Ejemplo de Registro en Tabla (Vista Detallada - Hipotético)
```plaintext
N°: 1
Periodo: 202101
Nombre Completo: SOFIA PEREZ PEREIRA
CI: 7654322
NUA/CUA: 12345678
AFP: Previsión BBVA
Sueldo Cotizable: 6200.00
Aporte Laboral (AFP): 620.00
Aporte Patronal (AFP): 310.00
Aporte Caja de Salud: 620.00
Otros Aportes: 62.00
Total Aportado: 1612.00
Dependencia: Dirección de Recursos Humanos
Fecha de Pago: 14/02/2021