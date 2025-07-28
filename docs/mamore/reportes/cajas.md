---
sidebar_position: 13 # O ajusta según tu estructura de reportes
---

# Reporte de Cajas

## Vista General
Este reporte proporciona un resumen detallado de las operaciones de caja realizadas por diferentes cajeros dentro de un rango de fechas específico. Permite el seguimiento de aperturas, ingresos, pagos, egresos y saldos finales de cada caja.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Rango de Fechas**:
    *   **Desde**: Permite seleccionar la fecha de inicio del rango para la búsqueda de movimientos de caja (ej. "07/05/2025").
    *   **Hasta**: Permite seleccionar la fecha de fin del rango para la búsqueda de movimientos de caja (ej. "07/05/2025").

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                 | Descripción                                                                 | Tipo          | Ejemplo                                   |
| :---------------------- | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------- |
| N°                      | Número secuencial del registro en la vista actual del reporte.              | Numérico      | 1                                         |
| CAJERO                  | Nombre o identificador del cajero responsable de la caja.                   | Texto         | "JUAN PEREZ"                              |
| ESTADO                  | Estado actual de la caja (ej. Abierta, Cerrada, Arqueada).                   | Texto         | "Cerrada"                                 |
| FECHA DE APERTURA       | Fecha y hora en que se abrió la caja.                                       | Fecha/Hora    | "07/05/2025 08:00"                        |
| FECHA DE CIERRE         | Fecha y hora en que se cerró la caja.                                       | Fecha/Hora    | "07/05/2025 17:30"                        |
| APERTURA (Bs.)          | Monto inicial con el que se abrió la caja, en Bolivianos.                   | Numérico      | 500.00                                    |
| INGRESOS (Bs.)          | Monto total de ingresos registrados en la caja (excluyendo apertura), en Bs. | Numérico      | 1250.75                                   |
| PAGOS (Bs.)             | Monto total de pagos realizados desde la caja, en Bs.                       | Numérico      | 800.50                                    |
| CANTIDAD DE PAGOS       | Número total de transacciones de pago realizadas.                           | Numérico      | 15                                        |
| EGRESOS (Bs.)           | Monto total de otros egresos o retiros de la caja, en Bs.                   | Numérico      | 100.00                                    |
| TOTAL A DEVOLVER (Bs.)  | Monto calculado que el cajero debería devolver al final del periodo.        | Numérico      | 850.25                                    |
| TOTAL DEVUELTO (Bs.)    | Monto efectivamente devuelto por el cajero.                                 | Numérico      | 850.00                                    |
| SOBRANTE (Bs.)          | Diferencia positiva si el total devuelto es mayor al total a devolver.      | Numérico      | 0.00                                      |
| FALTANTE (Bs.)          | Diferencia negativa si el total devuelto es menor al total a devolver.      | Numérico      | 0.25                                      |

## Fila de TOTALES
Al final de la tabla, se presenta una fila de "TOTALES" que resume las siguientes columnas para todos los registros mostrados:
-   APERTURA (Bs.)
-   INGRESOS (Bs.)
-   PAGOS (Bs.)
-   CANTIDAD DE PAGOS
-   EGRESOS (Bs.)
-   TOTAL A DEVOLVER (Bs.)
-   TOTAL DEVUELTO (Bs.)
-   SOBRANTE (Bs.)
-   FALTANTE (Bs.)

Ejemplo de la fila de totales (si no hay datos, todos los valores serían 0,00):
`TOTALES 	 0,00 	 0,00 	 0,00 	 0 	 0,00 	 0,00 	 0,00 	 0,00 	 0,00`

## Mensaje "No hay resultados"
Si después de aplicar los filtros no se encuentran registros de caja que coincidan con los criterios de búsqueda, el reporte mostrará el mensaje "No hay resultados".

## Consideraciones Adicionales
- Este reporte es crucial para el control de efectivo, arqueos de caja y la detección de diferencias (sobrantes o faltantes).
- La precisión en el registro de cada movimiento es fundamental para la exactitud del reporte.
- El pie de página "Desarrollado por Unidad de Desarrollo de Sistemas v0.0.1" indica la autoría y versión del módulo de reportes.