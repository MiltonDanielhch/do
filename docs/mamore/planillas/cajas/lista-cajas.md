---
sidebar_position: 2
---

# Listado de Cajas Registradoras

## Vista General
Este módulo presenta un listado de las cajas registradoras que han sido aperturadas en el sistema de Tesorería del Gobierno Autónomo Departamental del Beni. Permite visualizar el estado actual e histórico de las cajas utilizadas para pagos y recaudaciones.

## Controles de Visualización
-   **Mostrar entradas**: Permite seleccionar cuántos registros de caja se muestran por página (ej. 10, 25, 50).
-   **Buscar**: Campo de texto para filtrar dinámicamente las cajas mostradas en la tabla por cualquiera de sus campos visibles (ID, Usuario, Título, Estado, etc.).

## Estructura de la Tabla

| Campo     | Descripción                                       | Tipo          | Ejemplo                               |
| :-------- | :------------------------------------------------ | :------------ | :------------------------------------ |
| ID        | Identificador único de la sesión de caja          | Numérico      | 185                                   |
| Usuarios  | Nombre del cajero responsable de la sesión        | Texto         | "Paola Muñoz"                         |
| Título    | Nombre o identificador asignado a la caja física | Texto         | "Caja 1"                              |
| Estado    | Situación actual de la sesión de caja             | Texto/Badge   | "cerrada", "abierta"                  |
| Apertura  | Fecha y hora de inicio de la sesión de caja       | Timestamp/Texto | "2022-08-25 14:12:14 (hace 2 años)" |
| Cierre    | Fecha y hora de finalización de la sesión de caja | Timestamp     | "2022-08-25 16:07:00"                 |
| Acciones  | Operaciones disponibles sobre la sesión de caja   | Iconos        | (Ver Detalles, Imprimir Arqueo, etc.) |

## Filtros Disponibles (Implícitos en Buscar)

La funcionalidad de **Buscar** permite filtrar por:
-   ID de la sesión
-   Nombre del Usuario (Cajero)
-   Título de la Caja
-   Estado (abierta/cerrada)
-   Fechas de Apertura o Cierre (buscando por el texto de la fecha)

## Acciones Disponibles (Iconos Comunes)

1.  **Ver Detalles/Movimientos**: Mostrar un resumen o detalle de las transacciones realizadas durante esa sesión de caja.
2.  **Imprimir Arqueo/Cierre**: Generar un reporte del cierre de caja (si aplica y está cerrada).
3.  **Cerrar Caja**: Si la caja está "abierta", permitir iniciar el proceso de cierre (requiere permisos).

## Consideraciones
-   Cada fila representa una sesión de caja (desde su apertura hasta su cierre). Una misma caja física (ej. "Caja 1") puede tener múltiples sesiones a lo largo del tiempo.
-   Las cajas suelen tener un horario de cierre automático (ej. 18:00) si no se cierran manualmente.
-   El estado "cerrada" indica que la sesión ha finalizado y se ha realizado (o está pendiente) el arqueo de fondos.
-   Integración con módulos de:
    *   Tesorería (Control de efectivo)
    *   Bancos (Depósitos)
    *   Contabilidad (Registro de ingresos/egresos)
    *   Auditoría (Seguimiento de operaciones)

## Ejemplo de Registro en Tabla
```plaintext
ID: 185
Usuarios: Paola Muñoz
Título: Caja 1
Estado: cerrada
Apertura: 2022-08-25 14:12:14 (hace 2 años)
Cierre: 2022-08-25 16:07:00
Acciones: [Icono Ver Detalles] [Icono Imprimir Arqueo]