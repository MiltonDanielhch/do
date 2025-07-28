---
sidebar_position: 1
---

# Registrar Pago Adicional

## Vista General
Ventana modal (formulario emergente) utilizada para registrar pagos extraordinarios o adicionales para un funcionario específico, fuera del ciclo normal de procesamiento de planillas salariales.

## Campos del Formulario

| Campo           | Descripción                                  | Tipo     | Validación/Comportamiento        |
| :-------------- | :------------------------------------------- | :------- | :------------------------------- |
| CI:             | Carnet de identidad del funcionario          | Texto    | Formato numérico o alfanumérico. Usado para buscar al funcionario. |
| Funcionario:    | Nombre completo del funcionario              | Texto    | Autocompletado al encontrar por CI. No editable directamente. |
| Sueldo Bs:      | Remuneración base del funcionario            | Decimal  | Autocompletado. Puede ser editable si el pago es un ajuste. |
| Cargo:          | Posición institucional del funcionario       | Texto    | Autocompletado. No editable.     |
| Dias Trabajados:| Días laborados a considerar para este pago   | Numérico | Requerido. Usualmente 1-31.      |
| Monto Factura:  | Importe facturado (si aplica, ej. consultores)| Decimal  | Opcional. Mayor o igual a 0.     |
| RC-IVA:         | Retención tributaria (calculada)             | Decimal  | Calculado automáticamente.       |
| Total:          | Suma de conceptos brutos (calculado)         | Decimal  | Calculado automáticamente.       |
| Liquido Pagable:| Neto a pagar al funcionario (calculado)      | Decimal  | Calculado automáticamente.       |

## Cálculos Automáticos (Ejemplo Común)

1.  **RC-IVA**: Generalmente calculado como el 13% del `Monto Factura` (si aplica y supera la base imponible). La lógica exacta puede variar según normativa.
2.  **Total**: Puede ser `Sueldo Bs` (si es un pago basado en sueldo) + `Monto Factura` u otros conceptos definidos.
3.  **Liquido Pagable**: `Total` - `RC-IVA` - Otras deducciones (si aplican).

*Nota: La lógica exacta de los cálculos puede variar según el tipo de pago adicional.*

## Proceso de Registro

1.  Abrir la ventana modal "Registrar Pago".
2.  Ingresar el **CI:** del funcionario y presionar Enter o clic en un botón de búsqueda.
3.  El sistema autocompleta **Funcionario:**, **Sueldo Bs:**, y **Cargo:**.
4.  Ingresar los **Dias Trabajados:**.
5.  Ingresar el **Monto Factura:** (si aplica).
6.  Verificar los campos calculados automáticamente: **RC-IVA:**, **Total:**, **Liquido Pagable:**.
7.  (Opcional) Adjuntar documentos de soporte si la interfaz lo permite.
8.  Confirmar el registro (mediante un botón como "Guardar", "Registrar" o "Aceptar").

## Validaciones
-   El **CI:** debe corresponder a un funcionario activo registrado en el sistema.
-   **Dias Trabajados:** debe ser un número válido (ej. entre 1 y 31).
-   Los montos numéricos deben ser válidos.
-   Puede requerirse que el **Liquido Pagable:** sea mayor que cero.

## Consideraciones
-   Este registro genera una entrada en la "Lista de Planillas Adicionales", usualmente con estado "Pendiente" o "Habilitado".
-   Puede requerir un flujo de aprobación posterior (ej. Jefe inmediato, RRHH) antes de poder ser pagado.
-   Genera un comprobante o boleta de pago en formato PDF una vez aprobado y/o pagado.
-   Se integra con los módulos de:
    *   Recursos Humanos (Datos del funcionario)
    *   Tesorería (Para la ejecución del pago)
    *   Contabilidad (Para el registro presupuestario y contable)
-   Todas las operaciones quedan registradas en la auditoría del sistema.

## Ejemplo de Datos de Registro
```plaintext
CI: 8278261 (Ingresado)
Funcionario: Tte VALENCIA MENDOZA IVAN (Autocompletado)
Sueldo Bs: 3500.00 (Autocompletado)
Cargo: OFICIAL DE ENLACE (Autocompletado)
Dias Trabajados: 30 (Ingresado)
Monto Factura: 9899.00 (Ingresado, si aplica)
RC-IVA: 1286.87 (Calculado)
Total: 13399.00 (Calculado)
Liquido Pagable: 12112.13 (Calculado)