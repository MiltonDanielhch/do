---
sidebar_position: 5
---

# Stock de Donaciones

## Vista General

Este módulo permite visualizar el stock disponible de productos donados en el almacén.

## Cómo Acceder

**Ruta:** Panel de stock de donaciones

## Funcionalidades

### Ver Stock de Donaciones

Muestra los ingresos de donations con stock disponible.

| Campo | Descripción |
|-------|-------------|
| ID | Identificador del ingreso |
| Nro Solicitud | Número de solicitud de donación |
| Centro | Centro de la donación |
| Observación | Notas adicionales |
| Fecha Donación | Fecha de la donación |
| Fecha Ingreso | Fecha de ingreso al almacén |
| Condición | Estado |
| Stock | Indicador de stock disponible |

## Filtros Aplicados

- Solo muestra registros con `deleted_at = null`
- Solo muestra registros con `stock = 1` (hay stock disponible)

## Integración

- **Ingresos Donación:** Fuente de los datos
- **Egresos Donación:** Al entregar productos, cambia el stock
- **Notificaciones:** Alertas de proximidad a vencer

## Consideraciones

- Este módulo es de solo lectura (visualización)
- El stock se actualiza automáticamente al registrar egresos