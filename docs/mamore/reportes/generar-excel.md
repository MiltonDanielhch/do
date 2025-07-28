---
sidebar_position: 12 # O ajusta según tu estructura de reportes
---

# Exportación de Pagos (Ministerios AFP's) a Excel

## Vista General
Esta funcionalidad permite exportar a un archivo Excel el detalle de los pagos procesados, presumiblemente para el envío de información a Ministerios y/o Administradoras de Fondos de Pensiones (AFP's). El archivo generado contiene una estructura de datos completa por cada empleado y pago.

## Filtros Disponibles
La información proporcionada no detalla filtros específicos para esta exportación. Sin embargo, comúnmente, este tipo de exportaciones podría incluir filtros por:
-   **Periodo (Mes/Año)**: Para seleccionar los pagos de un mes y año específicos.
-   **Ministerio/Entidad**: Si aplica, para filtrar por una entidad gubernamental específica.
-   **AFP**: Para filtrar por una Administradora de Fondos de Pensiones específica.
-   **Tipo de Planilla**: Para seleccionar un tipo de planilla en particular.

## Estructura del Archivo Excel
El archivo Excel generado contendrá las siguientes columnas:

| N° | Columna                               | Descripción                                                                    |
|----|---------------------------------------|--------------------------------------------------------------------------------|
| 1  | TIPO DE DOCUMENTO DE IDENTIDAD        | Ej: CI (Cédula de Identidad), CE (Carnet de Extranjería)                       |
| 2  | NUMERO DOCUMENTO DE IDENTIDAD         | Número del documento.                                                          |
| 3  | LUGAR DE EXPEDICION                   | Departamento o código de expedición del documento (ej. BN, LP, SC).            |
| 4  | FECHA DE NACIMIENTO                   | Fecha de nacimiento del empleado (dd/mm/aaaa).                                 |
| 5  | APELLIDO PATERNO                      | Apellido paterno del empleado.                                                 |
| 6  | APELLIDO MATERNO                      | Apellido materno del empleado.                                                 |
| 7  | NOMBRES                               | Nombres del empleado.                                                          |
| 8  | PAIS DE NACIONALIDAD                  | País de nacionalidad del empleado.                                             |
| 9  | SEXO                                  | Género del empleado (ej. M para Masculino, F para Femenino).                   |
| 10 | JUBILADO                              | Indicador si el empleado es jubilado (ej. 0 para No, 1 para Sí).               |
| 11 | ¿APORTA A LA AFP?                     | Indicador si el empleado aporta a la AFP (ej. 1 para Sí, 0 para No).           |
| 12 | ¿PERSONA CON DISCAPACIDAD?            | Indicador si el empleado es una persona con discapacidad (ej. 0 para No, 1 para Sí). |
| 13 | TUTOR DE PERSONA CON DISCAPACIDAD     | Indicador si el empleado es tutor de una persona con discapacidad (ej. 0 para No, 1 para Sí). |
| 14 | FECHA DE INSGRESO                     | Fecha de ingreso del empleado a la institución (dd/mm/aaaa).                   |
| 15 | FECHA DE RETIRO                       | Fecha de retiro o cese de funciones del empleado (dd/mm/aaaa).                 |
| 16 | MOTIVO DE RETIRO                      | Código o descripción del motivo de retiro.                                     |
| 17 | CAJA DE SALUD                         | Código o nombre de la Caja de Salud a la que está afiliado.                    |
| 18 | AFP                                   | Código o nombre de la AFP a la que está afiliado.                              |
| 19 | NUA/CUA                               | Número Único Asignado o Código Único de Asegurado.                             |
| 20 | SUCURSAL O UBICACION ADICIONAL        | Información adicional de ubicación o sucursal.                                 |
| 21 | CLASIFICACION LABORAL                 | Código o descripción de la clasificación laboral.                              |
| 22 | CARGO                                 | Denominación del cargo del empleado.                                           |
| 23 | MODALIDAD DE CONTRATO                 | Código o descripción de la modalidad de contrato (ej. Permanente, Eventual).   |
| 24 | TIPO DE CONTRATO                      | Código o descripción del tipo de contrato.                                     |
| 25 | DIAS PAGADOS                          | Número de días pagados en el periodo.                                          |
| 26 | HORAS PAGADAS                         | Número de horas pagadas en el periodo.                                         |
| 27 | HABER BASICO                          | Monto del haber básico del empleado.                                           |
| 28 | BONO DE ANTIGUEDAD                    | Monto del bono de antigüedad.                                                  |
| 29 | HORAS EXTRAS                          | Cantidad de horas extras trabajadas.                                           |
| 30 | MONTO HORAS EXTRAS                    | Monto pagado por horas extras.                                                 |
| 31 | HORAS RECARGO NOCTURNO                | Cantidad de horas con recargo nocturno.                                        |
| 32 | MONTO HORAS EXTRAS NOCTURNAS          | Monto pagado por horas con recargo nocturno.                                   |
| 33 | HORAS EXTRAS DOMINICALES              | Cantidad de horas extras dominicales.                                          |
| 34 | MONTO HORAS EXTRAS DOMINICALES        | Monto pagado por horas extras dominicales.                                     |
| 35 | DOMINGOS TRABAJADOS                   | Cantidad de domingos trabajados.                                               |
| 36 | MONTO DOMINGOS TRABAJADOS             | Monto pagado por domingos trabajados.                                          |
| 37 | NRO. DOMINICALES                      | Número de dominicales (puede referirse a un concepto específico).              |
| 38 | SALARIO DOMINICAL                     | Monto del salario dominical.                                                   |
| 39 | BONO PRODUCCION                       | Monto del bono de producción.                                                  |
| 40 | SUBSIDIO FRONTERA                     | Monto del subsidio de frontera.                                                |
| 41 | OTROS BONOS Y PAGOS                   | Monto de otros bonos y pagos adicionales.                                      |
| 42 | RC-IVA                                | Monto retenido por RC-IVA (Régimen Complementario al IVA).                     |
| 43 | APORTE CAJA DE SALUD                  | Monto del aporte a la Caja de Salud.                                           |
| 44 | APORTE AFP                            | Monto del aporte a la AFP.                                                     |
| 45 | OTROS DESCUENTOS                      | Monto de otros descuentos aplicados.                                           |

## Ejemplo de Datos en Excel

A continuación, se muestra un ejemplo de cómo se verían los datos en el archivo Excel, basado en la información proporcionada:

**Fila 1 (Datos):**
| TIPO DE DOCUMENTO DE IDENTIDAD | NUMERO DOCUMENTO DE IDENTIDAD | LUGAR DE EXPEDICION | FECHA DE NACIMIENTO | APELLIDO PATERNO | APELLIDO MATERNO | NOMBRES  | PAIS DE NACIONALIDAD | SEXO | JUBILADO | ¿APORTA A LA AFP? | ¿PERSONA CON DISCAPACIDAD? | TUTOR DE PERSONA CON DISCAPACIDAD | FECHA DE INSGRESO | FECHA DE RETIRO | MOTIVO DE RETIRO | CAJA DE SALUD | AFP | NUA/CUA  | SUCURSAL O UBICACION ADICIONAL | CLASIFICACION LABORAL | CARGO    | MODALIDAD DE CONTRATO | TIPO DE CONTRATO | DIAS PAGADOS | HORAS PAGADAS | HABER BASICO | BONO DE ANTIGUEDAD | HORAS EXTRAS | MONTO HORAS EXTRAS | HORAS RECARGO NOCTURNO | MONTO HORAS EXTRAS NOCTURNAS | HORAS EXTRAS DOMINICALES | MONTO HORAS EXTRAS DOMINICALES | DOMINGOS TRABAJADOS | MONTO DOMINGOS TRABAJADOS | NRO. DOMINICALES | SALARIO DOMINICAL | BRONO PRODUCCION | SUBSIDIO FRONTERA | OTROS BONOS Y PAGOS | RC-IVA | APORTE CAJA DE SALUD | APORTE AFP | OTROS DESCUENTOS |
|--------------------------------|-------------------------------|---------------------|---------------------|------------------|------------------|----------|----------------------|------|----------|-------------------|----------------------------|-----------------------------------|-------------------|-----------------|------------------|---------------|-----|----------|--------------------------------|-----------------------|----------|-----------------------|------------------|--------------|---------------|--------------|--------------------|--------------|--------------------|------------------------|------------------------------|--------------------------|--------------------------------|---------------------|---------------------------|------------------|-------------------|------------------|-------------------|---------------------|--------|----------------------|------------|------------------|
| CI                             | 4211798                       |                     | 14/01/1995          | ROCA             | LASTRA           | HORMANDO | Bolivia              | M    | 0        | 1                 | 0                          | 0                                 | 01/05/2023        |                 | 2                | 6             | 3   | 51109633 |                                | 1                     | Chofer V | 2                     | 1                | 30           | 8             | 3250.00      | 0.00               | 0            | 0.00               | 0                      | 0.00                         | 0                        | 0.00                           | 0                   | 0.00                      | 0                | 0.00              | 0.00             | 0.00              | 0.00                | 0.00   | 325.00               | 396.83     | 0,00             |

**Fila 2 (Datos):**
| TIPO DE DOCUMENTO DE IDENTIDAD | NUMERO DOCUMENTO DE IDENTIDAD | LUGAR DE EXPEDICION | FECHA DE NACIMIENTO | APELLIDO PATERNO | APELLIDO MATERNO | NOMBRES          | PAIS DE NACIONALIDAD | SEXO | JUBILADO | ¿APORTA A LA AFP? | ¿PERSONA CON DISCAPACIDAD? | TUTOR DE PERSONA CON DISCAPACIDAD | FECHA DE INSGRESO | FECHA DE RETIRO | MOTIVO DE RETIRO | CAJA DE SALUD | AFP | NUA/CUA  | SUCURSAL O UBICACION ADICIONAL | CLASIFICACION LABORAL | CARGO         | MODALIDAD DE CONTRATO | TIPO DE CONTRATO | DIAS PAGADOS | HORAS PAGADAS | HABER BASICO | BONO DE ANTIGUEDAD | HORAS EXTRAS | MONTO HORAS EXTRAS | HORAS RECARGO NOCTURNO | MONTO HORAS EXTRAS NOCTURNAS | HORAS EXTRAS DOMINICALES | MONTO HORAS EXTRAS DOMINICALES | DOMINGOS TRABAJADOS | MONTO DOMINGOS TRABAJADOS | NRO. DOMINICALES | SALARIO DOMINICAL | BRONO PRODUCCION | SUBSIDIO FRONTERA | OTROS BONOS Y PAGOS | RC-IVA | APORTE CAJA DE SALUD | APORTE AFP | OTROS DESCUENTOS |
|--------------------------------|-------------------------------|---------------------|---------------------|------------------|------------------|------------------|----------------------|------|----------|-------------------|----------------------------|-----------------------------------|-------------------|-----------------|------------------|---------------|-----|----------|--------------------------------|-----------------------|---------------|-----------------------|------------------|--------------|---------------|--------------|--------------------|--------------|--------------------|------------------------|------------------------------|--------------------------|--------------------------------|---------------------|---------------------------|------------------|-------------------|------------------|-------------------|---------------------|--------|----------------------|------------|------------------|
| CI                             | 5629825                       |                     | 20/05/1993          | GIESSE           | ROUGCHER         | SERGIO BASTIAN | Bolivia              | M    | 0        | 1                 | 0                          | 0                                 | 01/05/2023        |                 | 2                | 6             | 3   | 48649181 |                                | 1                     | Tramitador IV | 2                     | 1                | 30           | 8             | 2750.00      | 0.00               | 0            | 0.00               | 0                      | 0.00                         | 0                        | 0.00                           | 0                   | 0.00                      | 0                | 0.00              | 0.00             | 0.00              | 0.00                | 0.00   | 275.00               | 335.78     | 0,00             |

## Consideraciones Adicionales
- La correcta codificación de campos como "LUGAR DE EXPEDICION", "MOTIVO DE RETIRO", "CAJA DE SALUD", "AFP", "CLASIFICACION LABORAL", "MODALIDAD DE CONTRATO" y "TIPO DE CONTRATO" es crucial para la interpretación por parte de las entidades receptoras.
- Es importante asegurar que los formatos de fecha (dd/mm/aaaa) y numéricos (uso de punto como separador decimal) sean consistentes y correctos.
- Esta exportación es vital para el cumplimiento de obligaciones informativas con entidades externas.
- El pie de página "Desarrollado por Unidad de Desarrollo de Sistemas v0.0.1" (asumido, ya que no está en la imagen pero es común en otros reportes) indicaría la autoría y versión del módulo.