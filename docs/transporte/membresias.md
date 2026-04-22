---
sidebar_position: 5
---

# Membresías

## Vista General

Gestión de membresías anuales de los asociados de transporte.

## Modelo de Datos

| Campo | Descripción |
|-------|-------------|
| id | Identificador único |
| associate_id | ID del asociado |
| starts_at | Fecha de inicio |
| expires_at | Fecha de expiración |

## Funcionalidades

### 1. Registrar Membresía

**Ruta:** `POST /admin/associates/{associate}/membership`

| Campo | Descripción |
|-------|-------------|
| starts_at | Fecha de inicio (requerida) |

**Características:**
- La fecha de expiración se calcula automáticamente (1 año)
- Se asocia al ID del asociado

### Estados de Membresía

| Estado | Descripción |
|--------|-------------|
| Activa | Dentro del período de validez |
| Expirada | Pasó la fecha de expiración |

## Consideraciones

- Cada asociado puede tener múltiples membresías históricas
- Solo se crea una membresía activa por asociado