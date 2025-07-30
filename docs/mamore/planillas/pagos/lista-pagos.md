---
sidebar_position: 2
---

# Planillas Procesadas / Listado de Pagos

## Vista General
Este módulo presenta el listado detallado de los pagos correspondientes a las planillas procesadas (sueldos, salarios, etc.) en el Gobierno Autónomo Departamental del Beni. Permite visualizar, filtrar y gestionar los pagos individuales o agrupados.

La interfaz ofrece diferentes modos de visualización y puede mostrar una advertencia si no hay una caja aperturada para realizar nuevos pagos: *"Advertencia: No puedes realizar pagos debido a que no has aperturado caja."*

## Controles Principales
-   **Modos de Visualización (Pestañas/Tabs)**:
    *   **Centralizada**: Agrupa los pagos por Dirección Administrativa u otro criterio.
    *   **No centralizada**: Muestra un listado detallado de todos los pagos individuales.
    *   **Por CI**: Permite buscar y filtrar los pagos asociados a un número de Carnet de Identidad específico.
-   **Selector de Sistema**: Permite alternar entre visualizaciones de datos del "Antiguo sistema" y del "Nuevo sistema".
-   **Filtro de Dirección Administrativa**: Puede haber un selector para filtrar por una unidad organizacional específica (ej. "Secretaria Departamental de Administracion y Finanzas").

## Estructura de la Tabla

| Campo                   | Descripción                               | Tipo     | Ejemplo                                                  |
| :---------------------- | :---------------------------------------- | :------- | :------------------------------------------------------- |
| ITEM                    | Número secuencial o identificador de ítem | Numérico | 60                                                       |
| Dirección administrativa| Unidad organizacional del beneficiario    | Texto    | "Secretaria Departamental de Administracion y Finanzas" |
| TIPO DE CONTRATO        | Clasificación contractual del empleado    | Texto    | "Permanente", "eventual"                                 |
| AFP                     | Administradora de Fondos de Pensiones     | Texto    | "Gestora", "Futuro", "Previsión"                         |
| MES                     | Mes al que corresponde el pago            | Texto    | "Enero", "Diciembre"                                     |
| GESTIÓN                 | Año fiscal del pago                       | Numérico | 2025, 2024                                               |
| APELLIDOS Y NOMBRE(S)   | Nombre completo del beneficiario          | Texto    | "PEREZ PEREIRA PEDRO "                           |
| C.I.                    | Carnet de identidad del beneficiario      | Texto    | "12345678"                                                |
| DÍAS TRAB.              | Días trabajados considerados para el pago | Numérico | 30                                                       |
| LÍQUIDO                 | Monto neto a pagar al beneficiario (Bs.)  | Decimal  | 5569,47                                                  |
| ESTADO                  | Situación actual del pago                 | Texto    | "Procesado", "Pagado", "Habilitado", "Anulado"           |
| ACCIONES                | Operaciones disponibles sobre el pago     | Iconos   | (Ver Comprobante, Pagar, Anular, etc.)                   |

## Filtros Adicionales (Disponibles en la búsqueda o controles específicos)
-   Por tipo de contrato
-   Por AFP
-   Por mes/gestión
-   Por estado de pago
-   Por rango de montos líquidos

## Estados de Pago
-   **Habilitado**: Listo para ser incluido en un lote de pago o pagado individualmente.
-   **Procesado**: El cálculo ha sido validado y confirmado, pendiente de ejecución del pago.
-   **Pagado**: El pago ha sido ejecutado y registrado (bancario o por caja).
-   **Anulado**: El pago ha sido cancelado y revertido (requiere justificación).
-   **Pendiente**: En proceso de validación o requiere alguna acción previa.

## Acciones Disponibles (Iconos Comunes)
1.  **Ver/Imprimir Comprobante/Boleta**: Generar el documento de respaldo del pago.
2.  **Pagar**: Ejecutar el pago individual (si el estado es "Habilitado" o "Procesado" y hay caja abierta).
3.  **Anular**: Cancelar un pago (generalmente requiere permisos y justificación).
4.  **Ver Detalles**: Mostrar información adicional del cálculo o historial del pago.
5.  **Exportar**: Generar reportes en formatos como Excel o PDF.

## Consideraciones
-   **¡Importante!** Para realizar nuevos pagos desde esta interfaz (acción "Pagar"), generalmente se requiere tener una **caja activa y aperturada** en el módulo de Tesorería.
-   Los pagos se integran con:
    *   Módulo de Tesorería (Control de caja y bancos)
    *   Sistema Bancario (Para transferencias)
    *   Registro Contable (SIGEP/SIGMA u otro)
-   El sistema puede incluir validaciones para prevenir pagos duplicados.
-   Todas las acciones sobre los pagos deben quedar registradas en una pista de auditoría.

## Ejemplo de Registro en Tabla
```plaintext
ITEM: 60
Dirección administrativa: Secretaria Departamental de Administracion y Finanzas
TIPO DE CONTRATO: Permanente
AFP: Gestora
MES: Enero
GESTIÓN: 2025
APELLIDOS Y NOMBRE(S): PEREZ PEREIRA JESUS
C.I.: 1234567
DÍAS TRAB.: 30
LÍQUIDO: 5569,47
ESTADO: Procesado
ACCIONES: [Icono Ver Boleta] [Icono Pagar]