---
sidebar_position: 1
---

# Añadir Caja / Apertura de Caja Registradora

## Vista General
Formulario para registrar la apertura de una nueva sesión de caja registradora en el sistema de Tesorería del Gobierno Autónomo Departamental del Beni. Permite registrar el fondo inicial (efectivo base) con el que comienza a operar el cajero.

**Importante:** Si no existe un registro de bóveda activo en el sistema, se mostrará una advertencia y no se podrá aperturar la caja: *"Advertencia: No puedes aperturar caja debido a que no existe un registro de bóveda activo."*

## Requisitos Previos
-   **Bóveda activa**: Debe existir una bóveda principal activa y registrada en el sistema.
-   **Permisos**: El usuario debe tener asignado el rol de "Cajero" o un rol superior con permisos para operar cajas.

## Campos del Formulario

### Desglose de Fondo Inicial
Tabla para detallar la cantidad de billetes y monedas que componen el fondo inicial de la caja.

| Corte (Denominación) | Cantidad | Sub Total |
| :------------------- | :------- | :-------- |
| 200 Bs.              | [Input numérico] | Calculado (Cantidad x 200) |
| 100 Bs.              | [Input numérico] | Calculado (Cantidad x 100) |
| 50 Bs.               | [Input numérico] | Calculado (Cantidad x 50)  |
| 20 Bs.               | [Input numérico] | Calculado (Cantidad x 20)  |
| 10 Bs.               | [Input numérico] | Calculado (Cantidad x 10)  |
| 5 Bs.                | [Input numérico] | Calculado (Cantidad x 5)   |
| 2 Bs.                | [Input numérico] | Calculado (Cantidad x 2)   |
| 1 Bs.                | [Input numérico] | Calculado (Cantidad x 1)   |
| 0.5 Bs.              | [Input numérico] | Calculado (Cantidad x 0.5) |
| 0.2 Bs.              | [Input numérico] | Calculado (Cantidad x 0.2) |
| 0.1 Bs.              | [Input numérico] | Calculado (Cantidad x 0.1) |

-   **Total Fondo Inicial**: Muestra la suma total calculada automáticamente a partir de los subtotales del desglose. (Campo calculado, no editable)

### Información de la Caja
-   **Cajero**: Nombre del usuario responsable de la caja. (Campo informativo, autocompletado con el usuario logueado)
-   **Nombre de la caja**: Identificador para esta sesión o puesto de caja (ej: "Caja 1", "Ventanilla Principal"). Puede tener un valor por defecto. (Campo de texto obligatorio)
-   **Observaciones**: Espacio para añadir notas relevantes sobre la apertura (ej. "Fondo para pagos menores"). (Área de texto opcional)

## Proceso de Apertura

1.  **Verificar requisitos**: Asegurarse de que existe una bóveda activa y se tienen los permisos.
2.  **Registrar fondos iniciales**:
    *   Ingresar la **Cantidad** para cada **Corte** (denominación) de billete/moneda recibido como fondo inicial.
    *   El sistema calculará automáticamente el **Sub Total** por corte y el **Total Fondo Inicial**.
3.  **Verificar Cajero**: Confirmar que el nombre del cajero es correcto.
4.  **Completar Nombre de la caja**: Ingresar o confirmar el identificador de la caja.
5.  **Agregar Observaciones** (opcional).
6.  **Confirmar apertura**: Hacer clic en el botón correspondiente (ej. "Guardar", "Aperturar Caja").

## Validaciones
-   Debe existir una bóveda activa.
-   El **Total Fondo Inicial** debe ser mayor o igual a un mínimo establecido (ej. 0 Bs. o un monto específico como 200 Bs.).
-   Todas las **Cantidades** ingresadas deben ser números enteros no negativos.
-   El campo **Nombre de la caja** es obligatorio.
-   Puede requerirse confirmación adicional (ej. supervisor) si el **Total Fondo Inicial** supera cierto umbral (ej. 5,000 Bs.).

## Consideraciones
-   La apertura exitosa genera un registro de sesión de caja con estado "abierta".
-   Se genera un comprobante de apertura que detalla el fondo inicial.
-   Se integra con los módulos de:
    *   Tesorería (Control de efectivo, Bóveda)
    *   Bancos (si el fondo proviene de retiro bancario)
    *   Auditoría (Registro de operaciones)
-   Las cajas suelen tener un proceso de cierre al final del día o turno.

## Ejemplo de Datos de Apertura
```plaintext
Desglose Fondos:
- 200 Bs. x 1 = 200.00 Bs.
- 100 Bs. x 3 = 300.00 Bs.
- 50 Bs. x 0 = 0.00 Bs.
- 20 Bs. x 5 = 100.00 Bs.
- ... (otros cortes en 0)
Total Fondo Inicial: 600.00 Bs.

Cajero: Paola  (Automático)
Nombre de la caja: Caja 1
Observaciones: Apertura turno mañana.