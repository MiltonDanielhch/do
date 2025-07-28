---
sidebar_position: 17 # O ajusta según tu estructura de reportes
---

# Reporte de Adendas

## Vista General
Este reporte proporciona un listado detallado de las adendas realizadas a los contratos del personal. Permite filtrar la información por año y por dirección administrativa, mostrando detalles tanto del contrato principal como de la adenda.

## Filtros Disponibles
El reporte ofrece las siguientes opciones para filtrar la información:

-   **Año**:
    *   Permite seleccionar el año de gestión para el cual se desean visualizar las adendas (ej. "2021").
-   **Dirección Administrativa**:
    *   Permite seleccionar una Dirección Administrativa específica de una lista desplegable.
    *   Incluye la opción "--Todas las direcciones administrativas--" para ver adendas de todas las unidades.
    *   Ejemplos: "Corregimiento Municipio de Trinidad", "Secretaria Departamental de Administracion y Finanzas", etc.

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                               | Descripción                                                                          | Tipo          | Ejemplo                                                       |
| :------------------------------------ | :----------------------------------------------------------------------------------- | :------------ | :------------------------------------------------------------ |
| N°                                    | Número secuencial del registro en la vista actual del reporte.                       | Numérico      | 1                                                             |
| Dirección administrativa              | Unidad organizacional principal a la que pertenece el contrato.                      | Texto         | "Secretaria Departamental de Desarrollo Campesino"            |
| Unidad administrativa                 | Sub-unidad o departamento específico (si aplica).                                    | Texto         | (Vacío si no aplica)                                          |
| Código                                | Identificador único o código asignado al contrato original.                          | Texto/Numérico| "SDDC-05/2020"                                                |
| Tipo                                  | Tipo de contrato original (ej. Permanente, Eventual, Consultor).                     | Texto         | "Eventual"                                                    |
| Nombre(s)                             | Nombres del empleado.                                                                | Texto         | "MARIA ISABEL"                                                |
| Apellidos                             | Apellidos completos del empleado.                                                    | Texto         | "RODRIGUEZ VARGAS"                                            |
| CI                                    | Número de Cédula de Identidad del empleado.                                          | Texto         | "6543210 CB"                                                  |
| Género                                | Género del empleado.                                                                 | Texto         | "femenino"                                                    |
| Cargo                                 | Denominación del puesto o cargo del empleado.                                        | Texto         | "Técnico Agrónomo"                                            |
| Nivel                                 | Nivel salarial o jerárquico asociado al cargo.                                       | Numérico/Texto| "15"                                                          |
| Sueldo                                | Monto del sueldo mensual asignado en el contrato, en Bolivianos.                     | Numérico      | 5.500,00                                                      |
| Inicio contrato principal             | Fecha de inicio del contrato original (dd/mm/aaaa).                                  | Fecha         | "01/03/2021"                                                  |
| Fin contrato principal                | Fecha de finalización original del contrato (dd/mm/aaaa).                            | Fecha         | "31/08/2021"                                                  |
| Duración contrato principal (días)    | Duración del contrato original en días.                                              | Numérico      | 183                                                           |
| Monto contrato principal              | Monto total del contrato original.                                                   | Numérico      | 33.000,00                                                     |
| Inicio de adenda                      | Fecha de inicio de la adenda (dd/mm/aaaa).                                           | Fecha         | "01/09/2021"                                                  |
| Fin de adenda                         | Fecha de finalización del contrato extendida por la adenda (dd/mm/aaaa).             | Fecha         | "31/12/2021"                                                  |
| Duración adenda (días)                | Duración adicional proporcionada por la adenda, en días.                             | Numérico      | 122                                                           |
| Monto adenda                          | Monto adicional o total recalculado debido a la adenda.                              | Numérico      | 22.000,00                                                     |
| Estado                                | Estado actual del contrato/adenda (ej. Vigente, Concluido).                          | Texto         | "Concluido"                                                   |
| Registrado                            | Usuario que registró la adenda y la fecha/hora del registro.                         | Texto (Multi) | "ana.lopez <br /> 15/08/2021 10:30"                           |

## Mensaje "No hay datos disponibles en la tabla"
Si después de aplicar los filtros no se encuentran adendas que coincidan con los criterios de búsqueda, el reporte mostrará el mensaje: "No hay datos disponibles en la tabla".

## Ejemplo de Registro en Tabla (Hipotético)
```plaintext
N°: 1
Dirección administrativa: Secretaria Departamental de Obras Publicas
Unidad administrativa: Mantenimiento Vial
Código: SOP-TEC-003/2021
Tipo: Consultor en línea
Nombre(s): CARLOS ALBERTO
Apellidos: PEREZ GOMEZ
CI: 1234567 LP
Género: masculino
Cargo: Especialista en Puentes
Nivel: Profesional III
Sueldo: 8.000,00
Inicio contrato principal: 15/02/2021
Fin contrato principal: 15/07/2021
Duración contrato principal (días): 151
Monto contrato principal: 40.000,00
Inicio de adenda: 16/07/2021
Fin de adenda: 15/10/2021
Duración adenda (días): 91
Monto adenda: 24.000,00
Estado: Concluido
Registrado: juan.diaz
            10/07/2021 14:20