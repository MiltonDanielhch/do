---
sidebar_position: 19 # O ajusta según tu estructura de reportes
---

# Reporte de Pagos de Planillas

## Vista General
Este reporte detalla los pagos realizados a través de planillas, mostrando información específica de cada empleado, su asignación administrativa, cargo, sueldo y el líquido pagable. Permite filtrar y agrupar la información para un análisis más detallado.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar y organizar la información:

-   **Dirección Administrativa**:
    *   Permite seleccionar una Dirección Administrativa específica de una lista desplegable para filtrar los pagos de planilla correspondientes a esa unidad.
    *   Ejemplos de opciones: "Secretaria Departamental de Desarrollo Campesino", "Secretaria de Gobernacion General", "Despacho De Gobernacion", etc.
-   **Agrupar por dirección administrativas**:
    *   Una casilla de verificación que, al ser seleccionada, agrupa los resultados de la planilla por cada Dirección Administrativa, facilitando la visualización de subtotales o la organización de los datos por unidad.

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                  | Descripción                                                                    | Tipo          | Ejemplo                                   |
| :----------------------- | :----------------------------------------------------------------------------- | :------------ | :---------------------------------------- |
| N°                       | Número secuencial del registro en la vista actual del reporte.                 | Numérico      | 1                                         |
| Planilla                 | Identificador o número de la planilla a la que corresponde el pago.            | Texto/Numérico| "003191"                                  |
| Dirección administrativa | Unidad organizacional principal a la que pertenece el empleado.                | Texto         | "Secretaria de Gobernacion General"       |
| Unidad administrativa    | Sub-unidad o departamento específico (si aplica).                              | Texto         | (Vacío en el ejemplo)                     |
| Código                   | Código identificador del contrato o ítem del empleado.                         | Texto/Numérico| "SDGG-05/2023"                            |
| Tipo                     | Tipo de contrato o relación laboral (ej. Permanente, Eventual).                | Texto         | "Permanente"                              |
| Nombre completo          | Nombres y apellidos completos del empleado.                                    | Texto         | "ARIAS DURAN FERNANDO"                    |
| CI                       | Número de Cédula de Identidad del empleado.                                    | Texto         | "1911556"                                 |
| Inicio                   | Fecha de inicio del contrato o relación laboral (dd/mm/aaaa).                  | Fecha         | "01/03/2023"                              |
| Cargo                    | Denominación del puesto o cargo del empleado.                                  | Texto         | "Secretario General de Gobernación"       |
| Nivel                    | Nivel salarial o jerárquico asociado al cargo.                                 | Numérico/Texto| "3"                                       |
| Sueldo                   | Monto del sueldo bruto asignado, en Bolivianos.                                | Numérico      | 12.350,00                                 |
| LÍquido pagable          | Monto neto a pagar al empleado después de deducciones, en Bolivianos.          | Numérico      | 10.780,31                                 |
| Estado                   | Estado del pago o del empleado en la planilla (ej. Pagado, Pendiente, Activo). | Texto         | (Vacío en el ejemplo)                     |

## Fila de Total
Al final de la tabla (o de cada grupo si está agrupado por Dirección Administrativa), se presenta una fila "Total" que resume las siguientes columnas para los registros mostrados:
-   **Sueldo**: Suma total de los sueldos brutos.
-   **LÍquido pagable**: Suma total de los líquidos pagables.
-   La última columna en la fila de total (correspondiente a "Estado") muestra "0,00" en el ejemplo.

Ejemplo de la fila de totales (basado en la imagen):
`Total 	 63.310,00 	 55.422,32 	 0,00`

## Ejemplo de Registro en Tabla (Basado en la imagen)
```plaintext
N°: 1
Planilla: 003191
Dirección administrativa: Secretaria de Gobernacion General
Unidad administrativa:
Código: SDGG-05/2023
Tipo: Permanente
Nombre completo: ARIAS DURAN FERNANDO
CI: 1911556
Inicio: 01/03/2023
Cargo: Secretario General de Gobernación
Nivel: 3
Sueldo: 12.350,00
LÍquido pagable: 10.780,31
Estado: