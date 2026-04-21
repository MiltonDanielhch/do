---
sidebar_position: 8
---

# Permisos de Asistencia (Attendance Permits)

## Vista General

Este módulo gestiona los permisos de asistencia de los funcionarios. Permite registrar, aprobar y dar seguimiento a los diferentes tipos de permisos laborales.

## Cómo Acceder

**Ruta:** `admin/attendances-permits`

## Funcionalidades Principales

### 1. Listado de Permisos

Muestra todos los permisos de asistencia registrados.

| Campo | Descripción |
|-------|-------------|
| **ID** | Identificador único |
| **Tipo** | Tipo de permiso |
| **Usuario** | Usuario que registró el permiso |
| **Detalles** | Información específica del permiso |
| **Acciones** | Opciones de edición/eliminación |

### 2. Búsqueda

Permite buscar permisos por diferentes criterios.

### 3. Paginación

Opciones para mostrar 10, 25, 50 o más registros por página.

## Tipos de Permisos

El sistema permite diferentes tipos de permisos:

| Tipo | Descripción |
|------|-------------|
| Permiso Médico | Por cuestiones de salud |
| Permiso Laboral | Por actividades laborales |
| Permiso Personal | Por asuntos personales |
| others | Otros tipos de permisos |

## Registro de Permisos

### Permisos Personal

**Ruta:** `POST admin/attendances-permits/store/personal`

Permite registrar un permiso directo para un funcionario.

## Modelos de Datos

### AttendancePermit

| Campo | Descripción |
|-------|-------------|
| `id` | Identificador único |
| `type` | Tipo de permiso |
| `user_id` | Usuario que registró |
| `details` | Detalles del permiso |

### AttendancePermitContract

Relación del permiso con el contrato del funcionario.

## Integración con Otros Módulos

- **Attendances:** Afecta el registro de asistencia
- **People:** Información del funcionario
- **Contracts:** Contrato laboral del funcionario
- **Planillas:** Descuentos por permisos no aprobados

## Estados de Permiso

| Estado | Descripción |
|--------|-------------|
| Pendiente | Esperando aprobación |
| Aprobado | Permiso autorizado |
| Rechazado | Permiso denegado |
| Utilizado | Permiso ya usado |

## Consideraciones

- Los permisos deben ser aprobados por un superior
- Los permisos afectan el cálculo de asistencia
- Existe un catálogo de tipos de permisos configurables
- Los permisos pueden tener límite de días al año