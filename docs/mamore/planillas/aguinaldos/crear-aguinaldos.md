---
sidebar_position: 1
---

# Generar Aguinaldos

## Vista General
Formulario para crear nuevas liquidaciones de aguinaldos (bonificación anual) para el personal del Gobierno Autónomo Departamental del Beni. La interfaz muestra los campos de cabecera para la selección de la unidad, tipo de planilla y gestión, seguidos de una tabla con los beneficiarios y sus montos calculados.

## Campos Obligatorios

### Cabecera
- **Dirección administrativa**: Selección de unidad organizacional.
- **Tipo de planilla**: Selección entre "Permanente" o "Eventual".
- **Gestión**: Año fiscal para el cual se genera el aguinaldo (formato: YYYY).

### Detalle de Beneficiarios
La tabla de beneficiarios muestra la siguiente información:

| Columna | Descripción | Origen/Validación |
|---------|-------------|-------------------|
| N° | Número de fila secuencial | Automático |
| ID | Identificador único del empleado | Numérico |
| Nombre completo | Apellidos y nombres del empleado | Autocompletado desde registro de personal |
| CI | Carnet de identidad del empleado | Formato: 1234567X |
| Dirección administrativa | Unidad organizacional a la que pertenece | Prellenado según empleado |
| Detalles | Información laboral relevante (ej. tipo contrato, sueldo base, días trabajados) | Expandible / Resumen |
| Monto | Monto del aguinaldo calculado | Cálculo automático |

## Cálculos Automáticos

### Montos
1.  **Sueldo base**: Se utiliza el promedio del total ganado de los últimos 3 meses o el último sueldo base registrado, según normativa.
2.  **Días trabajados**: Calculado desde la fecha de ingreso o inicio de la gestión fiscal, hasta el final de la misma.
3.  **Aguinaldo**: `(Sueldo base promedio × Días trabajados) / 360`

Al final de la tabla de beneficiarios, se muestra el **Monto Total** de los aguinaldos calculados en la planilla actual.

## Proceso de Creación
1.  Seleccionar la **Dirección administrativa**.
2.  Definir el **Tipo de planilla** y la **Gestión**.
3.  Agregar beneficiarios a la tabla:
    *   Buscar por nombre o CI.
    *   Verificar datos laborales y cálculos en la tabla.
4.  Validar los cálculos automáticos y la lista de beneficiarios.
5.  Confirmar la liquidación presionando el botón **"Aceptar y continuar"**:
    *   Genera un número consecutivo para la planilla.
    *   Registra el usuario y fecha/hora de creación.
    *   Cambia el estado de la planilla a "Pendiente de pago".

## Validaciones
- Solo el personal activo y con relación contractual vigente puede recibir aguinaldo.
- Se requiere un mínimo de 90 días trabajados en la gestión para aguinaldo completo, o 30 días para duodécimas.
- Verificación para evitar duplicidad de beneficiarios en la misma planilla.
- La planilla debe contener al menos un beneficiario.

## Consideraciones
- Los aguinaldos deben pagarse impostergablemente hasta el 20 de diciembre de cada año.
- El sistema se integra con los módulos de:
    - Planillas Salariales (para obtener sueldos y datos laborales).
    - Tesorería (para el proceso de pago).
    - Recursos Humanos (para datos del personal).
- Se genera un comprobante en formato PDF para cada beneficiario automáticamente al procesar el pago.

### Ejemplo de Cálculo (Individual)
```plaintext
Nombre: pedro perez pereira
Sueldo base promedio: 6.500,00 Bs.
Días trabajados (en la gestión): 180
Cálculo: (6.500,00 × 180) / 360 = 3.250,00 Bs.