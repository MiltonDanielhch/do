---
sidebar_position: 22 # O ajusta según tu estructura de reportes
---

# Reporte de Aguinaldos

## Vista General
Este reporte detalla el cálculo y el monto de los aguinaldos para el personal de la institución. Permite filtrar la información por Dirección Administrativa y por año de gestión, mostrando los días trabajados, el sueldo promedio considerado y el aguinaldo resultante para cada funcionario.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Dirección Administrativa**:
    *   Permite seleccionar una Dirección Administrativa específica de una lista desplegable para filtrar los aguinaldos correspondientes a esa unidad.
    *   Ejemplos de opciones: "Secretaria Departamental de Desarrollo Campesino", "Secretaria de Gobernacion General", "Despacho De Gobernacion", etc.
-   **Año**:
    *   Permite seleccionar el año de gestión para el cual se desea visualizar el reporte de aguinaldos (ej. "2022").

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna           | Descripción                                                                                                                                                                                             | Tipo          | Ejemplo (del primer registro)             |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------ | :---------------------------------------- |
| N°                | Número secuencial del registro en la vista actual del reporte.                                                                                                                                          | Numérico      | 1                                         |
| PLANILLA          | Indica el tipo de planilla del funcionario (ej. "Permanente"). Debajo de este dato, en la misma celda visual, se muestra el nombre completo y el cargo del funcionario.                                  | Texto         | Permanente                                |
| NOMBRE COMPLETO   | Nombre completo del funcionario. En la visualización del reporte, este dato aparece agrupado bajo la columna "PLANILLA", debajo del tipo de planilla y seguido por el cargo.                             | Texto         | FERNANDO PEREZ PEREIRA                      |
| (Cargo)           | Cargo del funcionario. En la visualización del reporte, este dato aparece bajo el nombre completo del funcionario, dentro de la agrupación de la columna "PLANILLA".                                     | Texto         | Secretario/a General de Gobernación       |
| CI                | Número de Cédula de Identidad del funcionario.                                                                                                                                                          | Texto/Numérico| 1234567                                   |
| INICIO            | Fecha de inicio considerada para el cálculo del aguinaldo. Puede estar vacía si se considera el año completo o si el inicio es anterior al periodo de cálculo principal (ej. inicio de gestión).         | Fecha         | (Vacío en el ejemplo)                     |
| FIN               | Fecha de fin considerada para el cálculo del aguinaldo (usualmente el 31 de diciembre del año de gestión).                                                                                              | Fecha         | 31-12-2022                                |
| DÍAS TRAB.        | Número total de días trabajados por el funcionario durante el periodo de cálculo del aguinaldo.                                                                                                         | Numérico      | 360                                       |
| MESES             | Encabezado de columna presente en el reporte. Aunque no se muestran datos explícitos en las filas de ejemplo para esta columna, podría referirse a los meses considerados para el promedio salarial.     | Numérico      | (Encabezado presente, datos no visibles)  |
| SUELDO PROMEDIO   | Detalle de los sueldos considerados para el promedio. La imagen muestra cuatro líneas de valores: las tres primeras suelen ser los sueldos base de los últimos meses y la cuarta el promedio de estos. | Numérico      | 12.500,00 (repetido 4 veces en el ejemplo) |
| AGUINALDO         | Monto total del aguinaldo calculado para el funcionario, en Bolivianos.                                                                                                                                 | Numérico      | 12.500,00                                 |

**Nota sobre la visualización de "PLANILLA", "NOMBRE COMPLETO" y "Cargo":** En el reporte visual, el tipo de planilla, el nombre completo del funcionario y su cargo se presentan agrupados verticalmente, aunque lógicamente representan información distinta para cada registro.

## Fila de TOTAL
Al final de la tabla, se presenta una fila "TOTAL" que suma la columna "AGUINALDO" de todos los registros mostrados.
Ejemplo (basado en la imagen):
`TOTAL 	 59.975,28`

## Ejemplo de Registro en Tabla (Interpretado del primer funcionario en la imagen)

| N° | PLANILLA   | NOMBRE COMPLETO        | CARGO                               | CI      | INICIO | FIN        | DÍAS TRAB. | MESES | SUELDO PROMEDIO (Detalle)        | AGUINALDO |
|----|------------|------------------------|-------------------------------------|---------|--------|------------|------------|-------|----------------------------------|-----------|
| 1  | Permanente | FERNANDO PEREZ PEREIRA   | Secretario/a General de Gobernación | 1234567 |        | 31-12-2022 | 360        |       | 12.500,00<br/>12.500,00<br/>12.500,00<br/>**12.500,00** | 12.500,00 |

*(El detalle del Sueldo Promedio muestra los 3 sueldos base y el promedio final en negrita)*

## Consideraciones Adicionales
- Este reporte es fundamental para la administración de recursos humanos y el cumplimiento de las obligaciones laborales relacionadas con el pago de aguinaldos.
- El cálculo del aguinaldo usualmente se basa en el promedio de los últimos tres sueldos y los días trabajados en el año.
- El pie de página "Desarrollado por Unidad de Desarrollo de Sistemas v0.0.1" indica la autoría y versión del módulo de reportes.