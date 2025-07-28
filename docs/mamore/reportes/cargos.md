---
sidebar_position: 18 # O ajusta según tu estructura de reportes
---

# Reporte de Cargos

## Vista General
Este reporte muestra una lista detallada de los cargos existentes dentro de la institución, incluyendo información sobre el item, el sueldo asignado, la dirección administrativa a la que pertenece, el código del cargo, el funcionario que lo ocupa actualmente y las fechas de inicio y fin de la asignación.

## Filtros Disponibles
Aunque no se visualizan filtros explícitos en la imagen proporcionada, este tipo de reportes comúnmente podría incluir filtros por:

-   **Dirección Administrativa**: Para seleccionar cargos de una unidad específica.
-   **Estado del Cargo**: (Ej: Vacante, Ocupado).
-   **Rango Salarial**: Para buscar cargos dentro de un cierto rango de sueldo.
-   **Tipo de Cargo/Contrato**: (Ej: Permanente, Eventual).

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna                  | Descripción                                                                 | Tipo          | Ejemplo                                   |
| :----------------------- | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------- |
| N°                       | Número secuencial del registro en la vista actual del reporte.              | Numérico      | 1                                         |
| ITEM                     | Número de ítem presupuestario o identificador único del cargo.              | Numérico/Texto| 1                                         |
| CARGO                    | Denominación oficial del puesto o cargo.                                    | Texto         | "Gobernador del Dpto. Del Beni"           |
| SUELDO                   | Monto del sueldo asignado al cargo, en Bolivianos.                          | Numérico      | 17.250,00                                 |
| DIRECCIÓN ADMINISTRATIVA | Unidad organizacional principal a la que está adscrito el cargo.            | Texto         | "Despacho De Gobernacion"                 |
| CÓDIGO                   | Código identificador del cargo o contrato asociado.                         | Texto/Numérico| "DEGO-19/2023"                            |
| FUNCIONARIO              | Nombre completo del funcionario que ocupa el cargo.                         | Texto         | "UNZUETA SHIRIQUI JOSE ALEJANDRO"         |
| INICIO                   | Fecha de inicio de la asignación del funcionario al cargo (dd/mm/aaaa).     | Fecha         | "01/03/2023"                              |
| FIN                      | Fecha de fin de la asignación del funcionario al cargo (dd/mm/aaaa o "No definido"). | Fecha/Texto   | "No definido"                             |

## Ejemplo de Datos en Tabla (Basado en la imagen)

| N° | ITEM | CARGO                                                       | SUELDO    | DIRECCIÓN ADMINISTRATIVA | CÓDIGO       | FUNCIONARIO                         | INICIO     | FIN         |
|----|------|-------------------------------------------------------------|-----------|--------------------------|--------------|-------------------------------------|------------|-------------|
| 1  | 1    | Gobernador del Dpto. Del Beni                               | 17.250,00 | Despacho De Gobernacion  | DEGO-19/2023 | UNZUETA SHIRIQUI JOSE ALEJANDRO     | 01/03/2023 | No definido |
| 2  | 2    | Asesor Especializado I En Comunicación                      | 11.350,00 | Despacho De Gobernacion  | DEGO-21/2023 | PEREDO DOMINGUEZ DAMIAN ORLANDO     | 25/05/2023 | No definido |
| 3  | 3    | Asesor Especializado I Asuntos Administrativo y financiero  | 11.350,00 | Despacho De Gobernacion  | DEGO-27/2023 | BRUCKNER BARBA CARLOS PAUL          | 10/08/2023 | No definido |
| 4  | 4    | Asesor Especializado I Asuntos Juridicos                    | 11.350,00 | Despacho De Gobernacion  | DEGO-10/2023 | VILLALOBOS VARGAS PEDRO MAXIMILIANO | 01/03/2023 | No definido |

## Consideraciones Adicionales
- Este reporte es crucial para la gestión de la estructura organizacional y el control de plazas.
- La columna "FIN" con el valor "No definido" usualmente indica que el cargo está actualmente ocupado y la asignación no tiene una fecha de finalización preestablecida.
- El pie de página "Desarrollado por Unidad de Desarrollo de Sistemas v0.0.1" (asumido por consistencia con otros reportes, aunque no visible en la imagen) indicaría la autoría y versión del módulo.