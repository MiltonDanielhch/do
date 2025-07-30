---
sidebar_position: 14 # O ajusta según tu estructura de reportes
---

# Reporte de Pagos Realizados

## Vista General
Este reporte detalla todos los pagos realizados a través de caja dentro de un rango de fechas específico. Proporciona información sobre la entidad administrativa, el detalle del pago, el beneficiario (identificado por CI), tipo de pago, periodo, AFP (si aplica), fecha de pago, cajero responsable y el monto.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Rango de Fechas**:
    *   **Desde**: Permite seleccionar la fecha de inicio del rango para la búsqueda de pagos realizados (ej. "07/05/2025").
    *   **Hasta**: Permite seleccionar la fecha de fin del rango para la búsqueda de pagos realizados (ej. "07/05/2025").

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                  | Descripción                                                                 | Tipo          | Ejemplo                                   |
| :----------------------- | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------- |
| N°                       | Número secuencial del registro en la vista actual del reporte.              | Numérico      | 1                                         |
| DIRECCIÓN ADMINISTRATIVA | Unidad organizacional que gestionó o está relacionada con el pago.          | Texto         | "Secretaría de Finanzas"                  |
| DETALLE                  | Descripción o concepto del pago realizado.                                  | Texto         | "Pago Viáticos Comisión La Paz"           |
| CI                       | Cédula de Identidad del beneficiario o persona relacionada con el pago.     | Texto         | "1234567 LP"                              |
| TIPO                     | Tipo o categoría del pago (ej. Servicios, Sueldos, Viáticos).               | Texto         | "Viáticos"                                |
| PERIODO                  | Mes y año al que corresponde el gasto o el pago.                            | Texto         | "Mayo 2025"                               |
| AFP                      | Administradora de Fondos de Pensiones (si el pago está relacionado).        | Texto         | "Futuro de Bolivia"                       |
| FECHA PAGO               | Fecha en que se efectuó el pago.                                            | Fecha         | "07/05/2025"                              |
| CAJERO(A)                | Nombre o identificador del cajero que procesó el pago.                      | Texto         | "ANA PEREZ"                               |
| OBSERVACIONES            | Notas o comentarios adicionales sobre el pago.                              | Texto         | "Pago urgente según solicitud DIR-001"    |
| MONTO                    | Importe del pago realizado, en Bolivianos.                                  | Numérico      | 350.00                                    |

## Fila de TOTAL
Al final de la tabla, se presenta una fila "TOTAL" que suma la columna "MONTO" de todos los registros mostrados.
Ejemplo (si no hay datos, el total sería 0,00):
`TOTAL 	 0,00`

## Mensaje "No hay resultados"
Si después de aplicar los filtros no se encuentran pagos realizados que coincidan con los criterios de búsqueda, el reporte mostrará el mensaje "No hay resultados".

## Ejemplo de Registro en Tabla (Hipotético)
```plaintext
N°: 1
DIRECCIÓN ADMINISTRATIVA: Dirección de Recursos Humanos
DETALLE: Reembolso Gastos Médicos
CI: 34567876 SC
TIPO: Reembolso
PERIODO: Abril 2025
AFP: N/A
FECHA PAGO: 07/05/2025
CAJERO(A): CARLOS
OBSERVACIONES: Factura N° 1234, Clínica ABC
MONTO: 480.50
```