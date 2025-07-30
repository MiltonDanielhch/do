---
sidebar_position: 20 # O ajusta según tu estructura de reportes
---

# Reporte de Parentesco

## Vista General
Este reporte está diseñado para identificar posibles relaciones de parentesco entre los empleados de la institución. Muestra una lista de funcionarios con detalles clave que pueden ayudar a detectar estos vínculos, como apellidos, la dirección administrativa donde trabajan y el tipo de planilla.

## Filtros Disponibles
Aunque no se visualizan filtros explícitos en la imagen proporcionada, este tipo de reportes comúnmente podría incluir filtros por:

-   **Dirección Administrativa**: Para acotar la búsqueda a una unidad específica.
-   **Apellidos**: Para buscar coincidencias específicas.
-   **Tipo de Planilla**: (Ej: Permanente, Eventual).

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                   | Descripción                                                                 | Tipo          | Ejemplo                                          |
| :------------------------ | :-------------------------------------------------------------------------- | :------------ | :----------------------------------------------- |
| N°                        | Número secuencial del registro en la vista actual del reporte.              | Numérico      | 1                                                |
| APELLIDOS                 | Apellidos completos del funcionario.                                        | Texto         | "ARIAS MORENO"                                   |
| NOMBRES                   | Nombres completos del funcionario.                                          | Texto         | "MANUEL"                                         |
| CÉDULA DE IDENTIDAD       | Número de Cédula de Identidad del funcionario.                              | Texto/Numérico| "1234567"                                        |
| INAMOVILIDAD              | Indica si el funcionario posee algún tipo de inamovilidad laboral (Sí/No).  | Texto         | "No"                                             |
| PLANILLA                  | Tipo de planilla a la que pertenece el funcionario (ej. permanente, eventual). | Texto         | "eventual"                                       |
| CARGO                     | Denominación del puesto o cargo del funcionario.                            | Texto         | "Auxiliar III"                                   |
| DIRECCIÓN ADMINSTRATIVA   | Unidad organizacional principal donde trabaja el funcionario.               | Texto         | "Secretaria Departamental Obras Publicas"        |

## Ejemplo de Datos en Tabla (Basado en la imagen)

| N° | APELLIDOS       | NOMBRES   | CÉDULA DE IDENTIDAD | INAMOVILIDAD | PLANILLA | CARGO        | DIRECCIÓN ADMINSTRATIVA                          |
|----|-----------------|-----------|---------------------|--------------|----------|--------------|--------------------------------------------------|
| 1  | PEREZ PEREIRA    | MANUEL    | 1234567             | No           | eventual | Auxiliar III | Secretaria Departamental Obras Publicas          |
| 2  | ARIAS PEREZ    | FRANCISCO | 1234567            | No           | eventual | Sereno III   | Hospital Materno Infantil                        |
| 3  | PEREZ OJEDA     | ANGEL     | 1345678             | No           | eventual | Tecnico IV   | CODEPEDIS-BENI                                   |
| 4  | PEREZ     | ALFREDO   | 12345677             | No           | eventual | Asistente IV | Secretaria Departamental de Administracion y Finanzas |
| 5  | CAMAMA PEREZ  | MIGUELINA | 7345678             | No           | eventual | Limpieza III | Hospital Materno Infantil                        |

## Consideraciones Adicionales
- Este reporte es una herramienta de transparencia y control interno.
- Se utiliza para verificar el cumplimiento de normativas sobre nepotismo y conflictos de interés.
- La información de "APELLIDOS" y "DIRECCIÓN ADMINSTRATIVA" es particularmente relevante para cruzar datos y detectar posibles parentescos.
- El pie de página "Desarrollado por Unidad de Desarrollo de Sistemas v0.0.1" (asumido por consistencia con otros reportes, aunque no visible en la imagen) indicaría la autoría y versión del módulo.