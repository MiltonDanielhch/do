---
sidebar_position: 1
---

# Crear Nueva Planilla

## Vista General

Este formulario permite la generación detallada de nuevas planillas de pago (eventuales o permanentes) en el sistema MAMORÉ, incluyendo la selección de personal, el cálculo de haberes y descuentos según normativa, y la totalización final.

## Campos de Cabecera (Obligatorios)

Antes de añadir personal, se deben completar los siguientes campos para definir la planilla:

*   **Tipo de dirección administrativa:** (Desplegable) Selección de la categoría o grupo al que pertenece la unidad (Ej: Secretarías, Direcciones, Servicios). *Validación: Requerido.*
*   **Dirección administrativa:** (Desplegable) Selección de la unidad específica responsable de la planilla. La lista se filtra según el tipo seleccionado. *Validación: Requerido.*
*   **Periodo:** (Selector Mes/Año) Mes y año al que corresponde la liquidación de la planilla (Ej: 01/2025). *Validación: Requerido.*
*   **Tipo de planilla:** (Desplegable) Selección del tipo de planilla a generar (Ej: "eventual", "permanente"). *Validación: Requerido.*

## Detalle de Personal y Cálculos

Una vez definida la cabecera, se añade el personal a la planilla. La tabla muestra los siguientes campos y cálculos para cada funcionario:

| Columna                   | Descripción                                                                                                | Tipo/Formato                                 | Notas                                                                                                                                                           |
| :------------------------ | :--------------------------------------------------------------------------------------------------------- | :------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **N°**                    | Número secuencial del funcionario en la planilla.                                                          | Numérico (`1`, `2`)                          | Automático.                                                                                                                                                     |
| **APELLIDOS Y NOMBRES / CARGO** | Nombre completo del funcionario y su cargo actual.                                                         | Texto (`SEMO PEREZ PEREIRA / Analista III`) | Se obtiene de la base de datos de personal/contratos.                                                                                                           |
| **CI**                    | Cédula de Identidad del funcionario.                                                                       | Texto (`1234567`)                            |                                                                                                                                                                 |
| **ITEM**                  | Número de ítem presupuestario asociado al cargo (si aplica).                                               | Numérico (Puede estar vacío)                 | Relevante para planillas permanentes.                                                                                                                           |
| **NIVEL**                 | Nivel salarial o jerárquico del cargo.                                                                     | Numérico (`12`)                              | Determina el sueldo base.                                                                                                                                       |
| **N° NUA/CUA**            | Número Único Asignado (NUA) o Código Único Asegurado (CUA) para aportes AFP.                                | Texto (`2345678`)                           |                                                                                                                                                                 |
| **FECHA INGRESO**         | Fecha de inicio de labores del funcionario en la institución o contrato.                                     | Fecha (`YYYY-MM-DD` o `DD/MM/YYYY`)          | Usada para calcular antigüedad.                                                                                                                                 |
| **DÍAS TRAB.**            | Número de días trabajados en el periodo de la planilla.                                                    | Numérico (`21`)                              | Base para calcular el sueldo parcial. Máximo días del mes.                                                                                                      |
| **SUELDO MENSUAL**        | Sueldo base correspondiente al Nivel del cargo.                                                            | Decimal (`5.000,00`)                         |                                                                                                                                                                 |
| **SUELDO PARCIAL**        | Sueldo calculado en base a los días trabajados: `(Sueldo Mensual / Días del Mes) * Días Trab.`               | Decimal (`3.500,00`)                         | Si Días Trab. = Días del Mes, es igual al Sueldo Mensual.                                                                                                       |
| **% (Bono Antig.)**       | Porcentaje del bono de antigüedad según escala normativa.                                                  | Porcentaje (`0%`)                            | Calculado automáticamente basado en Fecha Ingreso.                                                                                                              |
| **BONO ANTIG.**           | Monto del bono de antigüedad: `(3 * Salario Mínimo Nacional) * % Bono Antig.`                               | Decimal (`0,00`)                             | Calculado automáticamente.                                                                                                                                      |
| **TOTAL GANADO**          | Suma de todos los ingresos: `Sueldo Parcial + Bono Antig. + Otros Bonos (si aplican)`                        | Decimal (`3.500,00`)                         | Base para el cálculo de aportes.                                                                                                                                |
| **APORTES LABORALES:**    | Desglose de los aportes del trabajador a la seguridad social.                                              |                                              |                                                                                                                                                                 |
|   *APORTE SOLIDARIO (0.5%)*| Aporte del trabajador al Fondo Solidario. `Total Ganado * 0.005`                                           | Decimal (`17,50`)                            |                                                                                                                                                                 |
|   *RIESGO COMÚN (1.71%)*  | Aporte para seguro de invalidez y muerte por riesgo común. `Total Ganado * 0.0171`                           | Decimal (`59,85`)                            |                                                                                                                                                                 |
|   *RIESGO LABORAL (1.71%)*| Aporte para seguro de accidentes de trabajo (usualmente patronal, verificar si es laboral en este caso).    | Decimal (`59,85`)                            | **Nota:** Confirmar si este es aporte laboral o patronal.                                                                                                       |
|   *COMISIÓN AFP (0.5%)*   | Comisión por administración de la AFP. `Total Ganado * 0.005`                                              | Decimal (`17,50`)                            |                                                                                                                                                                 |
|   *APORTE JUBILACIÓN (10%)*| Aporte principal para la jubilación. `Total Ganado * 0.10`                                                 | Decimal (`350,00`)                           |                                                                                                                                                                 |
|   *APORTE NAL. SOLIDARIO (1.15%)*| Aporte adicional al Fondo Solidario. `Total Ganado * 0.0115`                                         | Decimal (`0,00`)                             | **Nota:** Verificar base de cálculo (puede ser sobre diferencia si supera cierto umbral). El ejemplo muestra 0.00, revisar lógica.                             |
| **TOTAL APORTES AFP**     | Suma de todos los aportes laborales a la AFP/Gestora.                                                      | Decimal (`504,70`)                           | Suma de las columnas de aportes laborales.                                                                                                                      |
| **RC-IVA**                | Régimen Complementario al IVA (Impuesto sobre ingresos).                                                   | Decimal (`0,00`)                             | Calculado según normativa tributaria (depende del Total Ganado, SMN, facturas presentadas).                                                                     |
| **FONDO SOCIAL:**         | Descuentos por aportes a fondos sociales internos.                                                         |                                              |                                                                                                                                                                 |
|   *DÍAS*                  | Número de días de descuento para fondo social (si aplica).                                                 | Numérico (`0`)                               |                                                                                                                                                                 |
| **MULTAS**                | Monto total de multas aplicadas en el periodo.                                                             | Decimal (`0,00`)                             | Proveniente del módulo de asistencia o registros disciplinarios.                                                                                                |
| **OTROS DESC.**           | Otros descuentos aplicados (ej. préstamos, retenciones judiciales).                                        | Decimal (`0,00`)                             |                                                                                                                                                                 |
| **TOTAL DESC.**           | Suma de todos los descuentos: `Total Aportes AFP + RC-IVA + Fondo Social + Multas + Otros Desc.`             | Decimal (`504,70`)                           | **Nota:** El ejemplo muestra 0.00, pero debería ser la suma. Revisar cálculo en UI.                                                                             |
| **LÍQUIDO PAGABLE**       | Monto final a pagar al funcionario: `Total Ganado - Total Desc.`                                           | Decimal (`3.500,00`)                         | **Nota:** El ejemplo muestra 3500.00, que es el Total Ganado. Debe ser `Total Ganado - Total Desc.`. Revisar cálculo en UI.                                  |

### Totales de Planilla

Al final de la tabla, se muestran los totales sumando los valores de cada columna para todos los funcionarios incluidos en la planilla.

## Proceso de Creación

1.  **Completar Cabecera:** Seleccionar Tipo de Dirección, Dirección Administrativa, Periodo y Tipo de Planilla.
2.  **Añadir Personal:** Utilizar un botón (no visible en la captura, pero implícito) para buscar y agregar funcionarios a la planilla. El sistema carga automáticamente sus datos (CI, Cargo, Nivel, NUA/CUA, Fecha Ingreso).
3.  **Ingresar Días Trabajados:** Especificar los días laborados para cada funcionario en el periodo.
4.  **Verificar Cálculos:** El sistema calcula automáticamente Sueldo Parcial, Bono Antigüedad, Total Ganado, Aportes, Descuentos y Líquido Pagable. Revisar la consistencia de estos cálculos.
5.  **Ingresar Otros Datos:** Añadir manualmente multas, descuentos de fondo social u otros descuentos si corresponde.
6.  **Validar y Guardar:** Una vez completada y verificada, guardar la planilla. El sistema le asignará un ID único, registrará el usuario creador y la marcará con un estado inicial (ej. "Habilitada" o "Pendiente").

## Validaciones y Consideraciones

*   Todos los campos de cabecera son obligatorios.
*   Se requiere al menos un funcionario para guardar la planilla.
*   Los cálculos principales (Sueldo Parcial, Bono Antig., Aportes) son automáticos y no editables directamente.
*   El sistema debe validar la consistencia de los datos (ej. Días Trab. no mayor a días del mes).
*   Verificar la correcta aplicación de porcentajes y bases de cálculo para aportes y RC-IVA según normativa vigente.
*   **Importante:** Los cálculos de `TOTAL DESC.` y `LÍQUIDO PAGABLE` en el ejemplo de la UI parecen incorrectos. `TOTAL DESC.` debería ser la suma de todos los descuentos (504.70 en el primer caso) y `LÍQUIDO PAGABLE` debería ser `TOTAL GANADO - TOTAL DESC.` (3500.00 - 504.70 = 2995.30 para el primer caso). Es crucial que la implementación del sistema realice estos cálculos correctamente.
*   La integración con módulos de Personal/Contratos, Asistencia y Presupuesto es fundamental.

## Ejemplo de Registro (Basado en UI, con correcciones implícitas en Desc/Líquido)

```plaintext
N°: 1
Nombre/Cargo: SEMO PEREZ PEREIRA / Analista III
CI: 12345677 | Item: (vacío) | Nivel: 12 | NUA/CUA: 12345667 | Ingreso: 2023-03-10
Días Trab: 21 | Sueldo Mensual: 5.000,00 | Sueldo Parcial: 3.500,00 | % Antig: 0% | Bono Antig: 0,00
Total Ganado: 3.500,00
Aportes Laborales: Sol(0.5%): 17,50 | RC(1.71%): 59,85 | RL(1.71%): 59,85 | Com(0.5%): 17,50 | Jub(10%): 350,00 | SolNal(1.15%): 0,00
Total Aportes AFP: 504,70
RC-IVA: 0,00 | Fondo Soc: 0,00 | Multas: 0,00 | Otros Desc: 0,00
Total Desc: 504,70  // Suma de Aportes AFP + RC-IVA + Fondo + Multas + Otros
Líquido Pagable: 2.995,30 // Total Ganado - Total Desc