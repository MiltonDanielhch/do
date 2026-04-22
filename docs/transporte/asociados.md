---
sidebar_position: 2
---

# Asociados de Transporte

## Vista General

Gestión de los asociados (conductores/propietarios) del sistema de transporte.

## Modelo de Datos

| Campo | Descripción |
|-------|-------------|
| id | Identificador único |
| ci | Cédula de identidad |
| nombre_completo | Nombre del asociado |
| telefono | Teléfono de contacto |
| email | Correo electrónico |
| active | Estado activo/inactivo |

## Funcionalidades

### 1. Ver Detalle de Asociado

**Ruta:** `GET /associates/{id}`

Muestra información detallada del asociado.

### 2. Generar Código QR

**Ruta:** `GET /admin/associates/{id}/qr`

Genera código QR del asociado para identificación.

### 3. Estado del Asociado

| Estado | Descripción |
|--------|-------------|
| Activo | Puede operar |
| Inactivo | Suspendido |

## Integración

- Vehículos del asociado
- Membresías activas
- Historial de membresías