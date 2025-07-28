---
sidebar_position: 2
---

# Listado de Planillas Adicionales

## Vista General
Este módulo permite visualizar y gestionar las planillas correspondientes a pagos extraordinarios o adicionales (bonificaciones, retroactivos, etc.) del personal del Gobierno Autónomo Departamental del Beni.

## Controles de Visualización
-   **Mostrar registros**: Permite seleccionar cuántos registros se muestran por página (ej. 10, 25, 50).
-   **Buscar**: Campo de texto para filtrar dinámicamente los registros de la tabla por cualquier dato visible (CI, Funcionario, Cargo, etc.).

## Estructura de la Tabla

| Campo           | Descripción                                  | Tipo     | Ejemplo                        |
| :-------------- | :------------------------------------------- | :------- | :----------------------------- |
| Id°             | Identificador único de la planilla adicional | Numérico | 2                              |
| C.I.            | Carnet de identidad del funcionario          | Texto    | "8278261"                      |
| Funcionario     | Nombre completo del beneficiario             | Texto    | "Tte VALENCIA MENDOZA IVAN"    |
| Cargo           | Posición laboral del funcionario             | Texto    | "OFICIAL DE ENLACE"            |
| (Detalle Sueldo)| Remuneración base (mostrada en detalle)      | Decimal  | "Bs. 3500.00"                  |
| Dias Trabajados | Días laborados considerados para el cálculo  | Numérico | 30                             |
| Monto Factura   | Importe facturado (si aplica)                | Decimal  | 0.00                           |
| RC-IVA          | Retención del Régimen Complementario al IVA  | Decimal  | 0.00                           |
| Total           | Suma de conceptos adicionales (si aplica)    | Decimal  | 0.00                           |
| Liquido Pagable | Monto neto a pagar al funcionario (Bs.)      | Decimal  | 3500.00                        |
| Estado          | Situación actual del pago                    | Texto    | "Pagada", "Pendiente", "Anulada" |
| Acciones        | Operaciones disponibles sobre el registro    | Iconos   | (Ver Detalle, Anular, etc.)    |

*Nota: El campo "Sueldo" puede aparecer como un detalle dentro de la fila en lugar de una columna separada en la interfaz.*

## Tipos Comunes de Planillas Adicionales
1.  Bonificaciones especiales (ej. antigüedad, mérito)
2.  Pagos retroactivos por ajustes salariales
3.  Compensaciones o reembolsos
4.  Pago de horas extras acumuladas
5.  Liquidaciones finales (parciales)

## Filtros Disponibles (Implícitos en Buscar)
La funcionalidad de **Buscar** permite filtrar por:
-   CI del funcionario
-   Nombre del funcionario
-   Cargo
-   Estado (Pagada/Pendiente/Anulada)
-   Rangos de montos (si la búsqueda avanzada lo permite)

## Acciones Disponibles (Iconos Comunes)
1.  **Ver Detalle Completo**: Desplegar información extendida del cálculo y aprobación.
2.  **Exportar**: Generar reporte de la planilla en PDF o Excel.
3.  **Anular**: Cancelar la planilla adicional (requiere permisos y justificación).
4.  **Reimprimir Comprobante**: Generar nuevamente el comprobante de pago (si ya fue pagada).
5.  **Pagar**: Ejecutar el pago (si está pendiente y se tienen permisos/caja abierta).

## Consideraciones
-   Estas planillas suelen requerir un flujo de aprobación previo (ej. RRHH, Dirección Administrativa).
-   Los montos se expresan en Bolivianos (Bs.).
-   Integración con módulos de:
    *   Planillas Salariales (para datos del funcionario)
    *   Tesorería (para ejecución del pago)
    *   Contabilidad (para registro presupuestario y contable)
-   Se debe mantener un registro de auditoría de la creación, aprobación, pago y anulación.

## Ejemplo de Registro en Tabla
```plaintext
Id°: 2
C.I.: 8278261
Funcionario: Tte VALENCIA MENDOZA IVAN
Cargo: OFICIAL DE ENLACE
(Detalle Sueldo: Bs. 3500.00)
Dias Trabajados: 30
Monto Factura: 0.00
RC-IVA: 0.00
Total: 0.00
Liquido Pagable: 3500.00
Estado: Pagada
Acciones: [Icono Ver Detalle] [Icono Reimprimir]