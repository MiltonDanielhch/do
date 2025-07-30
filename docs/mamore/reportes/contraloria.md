---
sidebar_position: 2 # O ajusta según tu estructura de reportes
---

# Reporte de Declaraciones Juradas

## Vista General
Este reporte presenta información sobre las declaraciones juradas del personal, permitiendo filtrar por periodo y estado (activo/inactivo). Es una herramienta útil para el seguimiento y control de cumplimiento normativo.

## Filtros Disponibles
-   **Periodo**: Permite seleccionar el periodo (ej. "202105") para el cual se desea ver las declaraciones juradas. Usualmente en formato `AAAAMM`.
-   **Estado**:
    *   **Activos**: Muestra las declaraciones de personal actualmente activo.
    *   **Inactivos**: Muestra las declaraciones de personal que ya no se encuentra activo.

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                         | Descripción                                                                 | Tipo          | Ejemplo                                                                 |
| :------------------------------ | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------------------------------------- |
| ITEM                            | Número secuencial del registro en la vista actual del reporte.              | Numérico      | 1                                                                       |
| NIVEL                           | Nivel salarial o jerárquico del funcionario.                                | Numérico/Texto| 5                                                                       |
| APELLIDOS Y NOMBRES / CARGO     | Nombre completo del funcionario y su cargo.                                 | Texto (Multi) | "PEREZ PEREIRA WILLY<br/>Jefe de Unidad II - Contrataciones y Adquisiciones" |
| CÉDULA DE IDENTIDAD             | Número de Cédula de Identidad del funcionario.                              | Texto         | "1234567"                                                               |
| EXP                             | Lugar de expedición de la Cédula de Identidad (ej. BN para Beni).           | Texto         | "BN"                                                                    |
| N° NUA/CUA                      | Número Único Asignado o Código Único de Asegurado en la AFP.                | Texto         | "0" o número NUA/CUA                                                    |
| FECHA INGRESO                   | Fecha de ingreso del funcionario a la institución.                          | Fecha         | "2021-12-06"                                                            |
| FECHA NACIMIENTO                | Fecha de nacimiento del funcionario.                                        | Fecha         | "1972-12-19"                                                            |
| FECHA CONCLUSIÓN                | Fecha de conclusión del contrato o cese de funciones (si aplica).           | Fecha/Texto   | "2021-12-31" o "No definida"                                            |

## Ejemplo de Registros en Tabla
```plaintext
ITEM: 1
NIVEL: 5
APELLIDOS Y NOMBRES / CARGO: PEREZ PEREIRA WILLY / Jefe de Unidad II - Contrataciones y Adquisiciones
CÉDULA DE IDENTIDAD: 12445678
EXP: BN
N° NUA/CUA: 0
FECHA INGRESO: 2021-12-06
FECHA NACIMIENTO: 1972-12-19
FECHA CONCLUSIÓN: 2021-12-31

ITEM: 2
NIVEL: 5
APELLIDOS Y NOMBRES / CARGO: PEREZ PEREIRA MARVIN / Jefe de Unidad II - Fortalecimiento a Procesos Organizativos
CÉDULA DE IDENTIDAD: 1245678
EXP: BN
N° NUA/CUA: 1234678
FECHA INGRESO: 2021-10-01
FECHA NACIMIENTO: 1982-03-15
FECHA CONCLUSIÓN: No definida