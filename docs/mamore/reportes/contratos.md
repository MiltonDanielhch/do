---
sidebar_position: 16 
---

# Reporte de Contratos

## Vista General
Este reporte ofrece una visión detallada de los contratos del personal, permitiendo filtrar por diversos criterios como estado del contrato, dirección administrativa y rangos de fechas específicos (gestión, inicio o fin de contrato). Muestra información completa desde datos personales hasta detalles económicos y de duración del contrato.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Estado del Contrato**:
    *   Permite seleccionar el estado actual de los contratos a visualizar.
    *   Opciones: "Todos los estados", "Elaborados", "Enviado", "Firmado", "Concluido".
-   **Dirección Administrativa**:
    *   Permite seleccionar una Dirección Administrativa específica de una lista desplegable.
    *   Incluye la opción "--Todas las direcciones administrativas--" para ver contratos de todas las unidades.
    *   Ejemplos: "Corregimiento Municipio de Trinidad", "Secretaria Departamental de Administracion y Finanzas", etc.
-   **Tipo de Fecha para Rango**:
    *   Permite seleccionar qué fecha se utilizará para el filtro de rango:
        *   Gestión
        *   Inicio de contrato
        *   Fin de contrato
-   **Rango de Fechas**:
    *   **Desde**: Fecha de inicio del rango (formato "---------- de ----" como placeholder).
    *   **Hasta**: Fecha de fin del rango (formato "---------- de ----" como placeholder).

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                        | Descripción                                                                          | Tipo          | Ejemplo                                                       |
| :----------------------------- | :----------------------------------------------------------------------------------- | :------------ | :------------------------------------------------------------ |
| N°                             | Número secuencial del registro en la vista actual del reporte.                       | Numérico      | 1                                                             |
| Fotografía                     | Imagen del empleado (si está disponible).                                            | Imagen/Vacío  | (Espacio para foto)                                           |
| Dirección administrativa       | Unidad organizacional principal a la que pertenece el contrato.                      | Texto         | "Secretaria Departamental de Administracion y Finanzas"       |
| Unidad administrativa          | Sub-unidad o departamento específico (si aplica).                                    | Texto         | (Vacío en el ejemplo)                                         |
| Código                         | Identificador único o código asignado al contrato.                                   | Texto/Numérico| "01/2022"                                                     |
| Tipo                           | Tipo de contrato (ej. Permanente, Eventual, Consultor).                              | Texto         | "Permanente"                                                  |
| Nombre(s)                      | Nombres del empleado.                                                                | Texto         | "LENY"                                                        |
| Apellidos                      | Apellidos completos del empleado.                                                    | Texto         | "NOE NOE"                                                     |
| CI                             | Número de Cédula de Identidad del empleado.                                          | Texto         | "7603618"                                                     |
| Género                         | Género del empleado.                                                                 | Texto         | "femenino"                                                    |
| NUA/CUA                        | Número Único Asignado o Código Único de Asegurado en la AFP.                         | Texto/Numérico| "47440491"                                                    |
| Cargo                          | Denominación del puesto o cargo del empleado.                                        | Texto         | "Auxiliar I-Memoria Institucional"                            |
| Nivel                          | Nivel salarial o jerárquico asociado al cargo.                                       | Numérico/Texto| "20"                                                          |
| Sueldo                         | Monto del sueldo mensual asignado, en Bolivianos.                                    | Numérico      | 3.400,00                                                      |
| Inicio contrato                | Fecha de inicio del contrato (dd/mm/aaaa).                                           | Fecha         | "03/01/2022"                                                  |
| Fin contrato                   | Fecha de finalización original del contrato (dd/mm/aaaa).                            | Fecha         | "31/10/2022"                                                  |
| Fin adenda                     | Fecha de finalización extendida por adenda (si aplica, dd/mm/aaaa).                  | Fecha/Vacío   | (Vacío en el ejemplo)                                         |
| Duración contrato              | Duración del contrato original en días.                                              | Numérico      | 298                                                           |
| Duración contrato + adenda     | Duración total del contrato incluyendo adendas, en días (si aplica).                 | Numérico/Vacío| (Vacío en el ejemplo)                                         |
| Monto contrato                 | Monto total del contrato original.                                                   | Numérico      | 33.773,33                                                     |
| Monto contrato + adenda        | Monto total del contrato incluyendo adendas (si aplica).                             | Numérico/Vacío| (Vacío en el ejemplo)                                         |
| Programa/Proyecto              | Nombre del programa o proyecto al que está asignado el contrato.                     | Texto         | "ADMINISTRACION SECRETARIA DE ADMINISTRACION Y FINANZAS"      |
| Cat. prog.                     | Categoría programática asociada.                                                     | Texto/Numérico| "00 0 01"                                                     |
| Estado                         | Estado actual del contrato (ej. elaborado, enviado, firmado, concluido).             | Texto         | "concluido"                                                   |
| Registrado                     | Usuario que registró el contrato y la fecha/hora del registro.                       | Texto (Multi) | "erick saavedra vaca <br /> 19/02/2022 00:28"                  |

## Ejemplo de Registro en Tabla (Basado en la imagen)
N°: 1
Fotografía: (espacio)
Dirección administrativa: Secretaria Departamental de Administracion y Finanzas
Unidad administrativa:
Código: 01/2022
Tipo: Permanente
Nombre(s): LENY
Apellidos: NOE NOE
CI: 7603618
Género: femenino
NUA/CUA: 47440491
Cargo: Auxiliar I-Memoria Institucional
Nivel: 20
Sueldo: 3.400,00
Inicio contrato: 03/01/2022
Fin contrato: 31/10/2022
Fin adenda:
Duración contrato: 298
Duración contrato + adenda:
Monto contrato: 33.773,33
Monto contrato + adenda:
Programa/Proyecto: ADMINISTRACION SECRETARIA DE ADMINISTRACION Y FINANZAS
Cat. prog.: 00 0 01
Estado: concluido
Registrado: erick saavedra vaca
            19/02/2022 00:28