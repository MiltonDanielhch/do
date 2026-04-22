---
sidebar_position: 5
---

# Pagos

## Vista General

Gestión de pagos asociados a los trámites de transmisión de bienes.

## Cómo Acceder

**Ruta:** `admin/tramites/{tramite}/pagos`

## Funcionalidades

### 1. Listado de Pagos

Muestra todos los pagos del trámite.

| Campo | Descripción |
|-------|-------------|
| ID | Identificador único |
| Monto | Cantidad pagada |
| Fecha | Fecha del pago |
| Estado | Estado del pago |

### 2. Registrar Pago

**Ruta:** `admin/tramites/{tramite}/pagos/create`

Permite registrar un nuevo pago.

### 3. Estados de Pago

| Estado | Descripción |
|--------|-------------|
| Pendiente | Pago esperado |
| Completado | Pago realizado |
| Cancelado | Pago anulado |

## Integración

- Se integra con cada trámite del wizard
- El sistema valida que el monto corresponda al cálculo
- Los pagos afectan el estado del trámite

## Consideraciones

- Cada pago debe tener respaldo documental
- Los pagos parciales están permitidos