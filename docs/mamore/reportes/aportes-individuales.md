---
sidebar_position: 7 # O ajusta según tu estructura de reportes
---

# Reporte de Pagos Individuales

## Vista General
Este reporte muestra un detalle de los pagos individuales, probablemente relacionados con aportes a la AFP, permitiendo filtrar por el sistema de origen (nuevo o antiguo) y un rango de periodos.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Sistema de Origen**:
    *   **Nuevo sistema**: Muestra los pagos registrados en el sistema actual o más reciente.
    *   **Antiguo sistema**: Muestra los pagos registrados en un sistema anterior.
-   **Rango de Periodos**:
    *   **Desde**: Permite seleccionar el mes y año de inicio del rango (ej. "enero de 2021").
    *   **Hasta**: Permite seleccionar el mes y año de fin del rango (ej. "mayo de 2021").

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                  | Descripción                                                                 | Tipo          | Ejemplo                                   |
| :----------------------- | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------- |
| N°                       | Número secuencial del registro en la vista actual del reporte.              | Numérico      | 1                                         |
| NOMBRE COMPLETO          | Nombres y apellidos completos de la persona.                                | Texto         | "JUAN PEREZ PEREIRA"                     |
| CARNET DE IDENTIDAD      | Número de Cédula de Identidad de la persona.                                | Texto         | "1234567 LP"                              |
| NUA/CUA                  | Número Único Asignado o Código Único de Asegurado en la AFP.                | Texto         | "1234567"                                |
| DIRECCIÓN ADMINISTRATIVA | Unidad organizacional a la que pertenece o estuvo vinculada la persona.     | Texto         | "Secretaría General"                      |
| PLANILLA                 | Identificador o tipo de planilla a la que corresponde el pago.              | Texto/Numérico| "Eventual ENE-2021"                       |
| PERIODO                  | Mes y año al que corresponde el pago o aporte.                              | Texto         | "Enero 2021"                              |
| TOTAL GANADO             | Monto total sobre el cual se calculó el aporte.                             | Numérico      | 5000.00                                   |
| APORTE AFP               | Monto del aporte realizado a la AFP.                                        | Numérico      | 500.00                                    |
| FECHA DE PAGO            | Fecha en que se realizó el pago del aporte.                                 | Fecha         | "15/02/2021"                              |
| N° DE FPC                | Número del Formulario de Comprobante de Pago (FPC) a la AFP.                | Texto/Numérico| "FPC-12345"                               |

## Mensaje "No hay datos registrados"
Si después de aplicar los filtros no se encuentran registros que coincidan con los criterios de búsqueda, el reporte mostrará el mensaje "No hay datos registrados".

## Consideraciones Adicionales
- Este reporte es útil para verificar los aportes individuales a la AFP y conciliar información entre diferentes sistemas o periodos.
- La correcta selección del sistema de origen (nuevo/antiguo) es importante para obtener los datos deseados.
- El pie de página "Desarrollado por Unidad de Desarrollo de Sistemas v0.0.1" indica la autoría y versión del módulo de reportes.