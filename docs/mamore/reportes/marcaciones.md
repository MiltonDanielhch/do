---
sidebar_position: 23 # O ajusta según tu estructura de reportes
---

# Reporte de Marcaciones

## Vista General
Este reporte proporciona un detalle de las marcaciones de asistencia de un funcionario específico para un año determinado. Es fundamental para el seguimiento de la asistencia, puntualidad y horas trabajadas.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Identificador del Funcionario**:
    *   Permite ingresar el número de Cédula de Identidad, código de empleado u otro identificador único del funcionario.
    *   Ejemplo: "12345678".
-   **Año**:
    *   Permite seleccionar el año para el cual se desea visualizar las marcaciones.
    *   Ejemplo: "2023".

## Estructura de la Tabla (Asumida)
Dado que la imagen no detalla las columnas de la tabla, se presenta una estructura común para reportes de marcaciones:

| Columna             | Descripción                                                                 | Tipo          | Ejemplo            |
| :------------------ | :-------------------------------------------------------------------------- | :------------ | :----------------- |
| N°                  | Número secuencial del registro en la vista actual del reporte.              | Numérico      | 1                  |
| Fecha               | Fecha de la marcación (dd/mm/aaaa).                                         | Fecha         | "01/03/2023"       |
| Día                 | Día de la semana correspondiente a la fecha.                                | Texto         | "Miércoles"        |
| Entrada Mañana      | Hora de marcación de ingreso en el turno de la mañana (HH:MM).              | Hora          | "08:02"            |
| Salida Mañana       | Hora de marcación de salida en el turno de la mañana (HH:MM).               | Hora          | "12:31"            |
| Entrada Tarde       | Hora de marcación de ingreso en el turno de la tarde (HH:MM).               | Hora          | "14:30"            |
| Salida Tarde        | Hora de marcación de salida en el turno de la tarde (HH:MM).                | Hora          | "18:33"            |
| Horas Trabajadas    | Total de horas trabajadas en el día (calculado a partir de las marcaciones).| Numérico/Hora | "8.05" o "08:03" |
| Observaciones       | Notas o comentarios relevantes sobre la marcación del día (ej. Atraso, Permiso). | Texto         | "Atraso leve"      |

## Mensaje "No hay resultados"
Si después de aplicar los filtros no se encuentran marcaciones para el funcionario y año especificados, o si el funcionario no tiene registros, el reporte podría mostrar un mensaje como "No hay datos disponibles" o similar (la imagen actual no muestra la tabla ni este mensaje, pero es una práctica común).

## Ejemplo de Registro en Tabla (Hipotético)
```plaintext
N°: 1
Fecha: 05/03/2023
Día: Lunes
Entrada Mañana: 07:58
Salida Mañana: 12:30
Entrada Tarde: 14:25
Salida Tarde: 18:35
Horas Trabajadas: 8.12
Observaciones: