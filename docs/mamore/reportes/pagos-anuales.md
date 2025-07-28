---
sidebar_position: 11 # O ajusta según tu estructura de reportes
---

# Reporte de Pagos Anuales

## Vista General
Este reporte consolida la información de los pagos realizados durante un año específico, probablemente relacionados con aportes a la seguridad social (AFP y Caja de Salud). Ofrece una vista anual que puede ser general o agrupada mensualmente.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar y visualizar la información:

-   **Año**: Permite seleccionar el año para el cual se desea visualizar el reporte de pagos (ej. "2024").
-   **Vista**:
    *   **Todos**: Muestra todos los pagos del año seleccionado de forma continua o detallada.
    *   **Agrupado por mes**: Organiza y presenta los pagos agrupados por cada mes dentro del año seleccionado.

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna             | Descripción                                                                 | Tipo          | Ejemplo                                   |
| :------------------ | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------- |
| N°                  | Número secuencial del registro en la vista actual del reporte.              | Numérico      | 1                                         |
| planilla            | Identificador o código de la planilla a la que se asocia el pago.           | Texto/Numérico| "PLAN-2024-001"                           |
| pago ID AFP         | Identificador único del pago realizado a la AFP.                            | Texto/Numérico| "AFP-PAY-2024-123"                        |
| FPC                 | Número del Formulario de Comprobante de Pago (FPC) a la AFP.                | Texto/Numérico| "FPC-012345"                              |
| AFP                 | Nombre de la Administradora de Fondos de Pensiones.                         | Texto         | "Futuro de Bolivia"                       |
| Fecha de pago       | Fecha en que se realizó el pago a la AFP.                                   | Fecha         | "15/01/2024"                              |
| Pago ID CC          | Identificador único del pago realizado a la Caja de Salud (CC).             | Texto/Numérico| "CC-PAY-2024-456"                         |
| Fecha de pago CC    | Fecha en que se realizó el pago a la Caja de Salud.                         | Fecha         | "16/01/2024"                              |
| Nro de deposito CC  | Número del depósito bancario realizado a la Caja de Salud.                  | Texto/Numérico| "DEP-CC-7890"                             |
| GTC 11              | Número del Formulario GTC-11 (Guía de Trámites y Contribuciones, si aplica). | Texto/Numérico| "GTC11-2024-001"                          |

*Nota: Si la vista "Agrupado por mes" está seleccionada, es probable que haya subtotales o agrupaciones visuales por mes dentro de la tabla.*

## Ejemplo de Registro en Tabla (Hipotético - Vista "Todos")
```plaintext
N°: 1
planilla: PL-MEN-2024-01-005
pago ID AFP: AFP202401P001
FPC: 778899001
AFP: Previsión BBVA
Fecha de pago: 10/02/2024
Pago ID CC: CC202401P001
Fecha de pago CC: 11/02/2024
Nro de deposito CC: 654321
GTC 11: GTC-001-2024