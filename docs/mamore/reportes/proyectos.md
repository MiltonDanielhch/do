---
sidebar_position: 21 # O ajusta según tu estructura de reportes
---

# Reporte de Ejecución de Programas/Proyectos

## Vista General
Este reporte presenta el estado de ejecución de los programas y proyectos, detallando la inversión planificada, el monto ejecutado y el porcentaje de avance. Permite filtrar la información por año de gestión.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Año**:
    *   Permite seleccionar el año de gestión para el cual se desea visualizar la ejecución de programas/proyectos (ej. "2021").

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                   | Descripción                                                                 | Tipo          | Ejemplo                                   |
| :------------------------ | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------- |
| N°                        | Número secuencial del registro en la vista actual del reporte.              | Numérico      | 1                                         |
| NOMBRE                    | Nombre del programa o proyecto.                                             | Texto         | "Construcción Puente Vehicular Río Grande" |
| DIRECCIÓN ADMINSTRATIVA   | Unidad organizacional responsable o vinculada al programa/proyecto.         | Texto         | "Secretaria Departamental Obras Publicas" |
| TIPO                      | Tipo o categoría del programa/proyecto (ej. Inversión, Gasto Corriente).    | Texto         | "Inversión"                               |
| GESTIÓN                   | Año de gestión al que corresponde la ejecución.                             | Numérico      | 2021                                      |
| INVERSIÓN                 | Monto total de inversión planificado para el programa/proyecto, en Bs.      | Numérico      | 500,000.00                                |
| MONTO EJECUTADO           | Monto ejecutado del programa/proyecto a la fecha del reporte, en Bs.        | Numérico      | 250,000.00                                |
| PORCENTAJE                | Porcentaje de ejecución del programa/proyecto (Monto Ejecutado / Inversión).| Porcentaje    | 50.00%                                    |

## Fila de TOTAL
Al final de la tabla, se presenta una fila "TOTAL" que suma las siguientes columnas para todos los registros mostrados:
-   **INVERSIÓN**: Suma total de la inversión planificada.
-   **MONTO EJECUTADO**: Suma total de los montos ejecutados.

Ejemplo (si no hay datos, los totales serían 0,00):
`TOTAL 	 0,00 	 0,00`

## Mensaje "No hay resultados"
Si después de aplicar los filtros no se encuentran programas o proyectos que coincidan con los criterios de búsqueda, el reporte mostrará el mensaje "No hay resultados".

## Ejemplo de Registro en Tabla (Hipotético)
```plaintext
N°: 1
NOMBRE: Fortalecimiento Productivo Agrícola
DIRECCIÓN ADMINSTRATIVA: Secretaria Departamental de Desarrollo Productivo
TIPO: Desarrollo
GESTIÓN: 2021
INVERSIÓN: 1,200,000.00
MONTO EJECUTADO: 850,000.00
PORCENTAJE: 70.83%