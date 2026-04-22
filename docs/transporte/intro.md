---
sidebar_position: 1
---

# Transporte - Sistema de Gestión

## Vista General

Sistema de gestión de transporte del Gobierno Autónomo Departamental del Beni. Administra asociados, vehículos, rutas y organizaciones de transporte.

## Módulos Principales

### 1. Asociados (Associates)

Gestión de asociaciones de transporte.

| Campo | Descripción |
|-------|-------------|
| ID | Identificador |
| CI | Cédula de identidad |
| Nombre | Nombre completo |
| Estado | Activo/Inactivo |

### 2. Vehículos (Vehicles)

Control de vehículos registrados.

| Campo | Descripción |
|-------|-------------|
| ID | Identificador |
| Placa | Número de placa |
| Asociado | Propietario |
| Estado | Estado del vehículo |

### 3. Rutas (Routes)

Gestión de rutas de transporte.

| Campo | Descripción |
|-------|-------------|
| ID | Identificador |
| Nombre | Nombre de la ruta |
| Estado | Activa/Inactiva |

### 4. Organizaciones

Organizaciones de transporte.

| Campo | Descripción |
|-------|-------------|
| ID | Identificador |
| Nombre | Nombre |
| Estado | Activo/Inactivo |

## Búsqueda Pública

**Ruta:** `/search`

Permite buscar por:
- CI del asociado
- Número de placa del vehículo

## Funcionalidades Admin

### Gestionar Rutas de Organización

- `GET admin/organizations/{id}/routes/edit`
- `PUT admin/organizations/{id}/routes/update`
- `DELETE admin/organizations/{id}/routes/{route}/destroy`
- `GET admin/organizations/{id}/routes/{route}/download`

### Ver QR de Asociado

**Ruta:** `GET admin/associates/{id}/qr`

Genera código QR del asociado.

### Gestionar Membresías

**Ruta:** `POST admin/associates/{associate}/membership`

Registra membresías de asociados.

## Modelo de Datos

| Modelo | Descripción |
|--------|-------------|
| Associate | Asociados de transporte |
| Vehicle | Vehículos |
| Route | Rutas |
| Organization | Organizaciones |
| Membership | Membresías |
| Driver | Conductores |
| Location | Ubicaciones |

## Estados

| Estado | Descripción |
|--------|-------------|
| Activo | Disponible/Operativo |
| Inactivo | No disponible |

## Consideraciones

- El sistema permite buscar asociados o vehículos
- Cada vehículo pertenece a un asociado
- Las rutas pueden asociarse a organizaciones