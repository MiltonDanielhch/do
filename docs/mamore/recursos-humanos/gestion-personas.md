---
sidebar_position: 3
---

# Gestión de Personas (People)

## Vista General

Este módulo permite gestionar la información completa de las personas (funcionarios) del Gobierno Autónomo Departamental del Beni. Es el módulo central de recursos humanos que integra información contractual, laboral y personal.

## Cómo Acceder

**Ruta:** `admin/people`

## Funcionalidades Principales

### 1. Listado de Personas

El tablero principal muestra un listado de todos los funcionarios registrados.

| Campo | Descripción |
|-------|-------------|
| **ID** | Identificador único |
| **Nombre** | Nombre completo |
| **CI** | Cédula de identidad |
| **Ciudad** | Ciudad de nacimiento |
| **AFP** | Tipo de AFP |
| **Estado** | Estado actual del contrato |

### 2. Búsqueda Avanzada

El sistema permite buscar por:
- Nombre completo
- CI (Cédula de Identidad)
- NUA/CUA
- Teléfono
- Ciudad

### 3. Ver Detalle de Persona

**Ruta:** `admin/people/{id}`

Muestra toda la información del funcionario organizada en secciones.

## Secciones del Detalle

### Información Personal
- Datos básicos (nombre, CI, fecha de nacimiento)
- Dirección
- Contacto
- Información AFP

### Contratos
- Historial de contratos
- Estado actual (firmado, concluido, etc.)
- Dirección administrativa
- Unidad

### Rotación de Personal

Permite registrar cambios de unidad o cargo del funcionario.

**Rutas:**
- `admin/people/{id}/rotation` - Ver rotaciones
- `POST admin/people/{id}/rotation` - Crear rotación

### Bienes Asignados

Gestión de bienes institucionales asignados al funcionario.

**Rutas:**
- `POST admin/people/{id}/assets` - Asignar bien
- `GET admin/people/{id}/assets/{person_asset_id}/print` - Imprimir asignación

### Irremovabilidad (Inamovilidad)

Registro de funcionarios con estabilidad laboral.

**Rutas:**
- `POST admin/people/{id}/irremovability` - Crear registro
- `DELETE admin/people/{people}/irremovability/{id}` - Eliminar

### Estado AFP

Gestión del estado de aportación a la AFP.

**Ruta:** `POST admin/people/{id}/afp_status`

### Asistencia

Registro y consulta de asistencia del funcionario.

**Rutas:**
- `POST admin/people/{id}/attendance` - Ver asistencia
- `POST admin/people/{id}/attendance/store` - Registrar asistencia
- `POST admin/people/{id}/attendance/update` - Modificar
- `POST admin/people/{id}/attendance/delete` - Eliminar

### Archivos/Documentos

Gestión de documentos adjuntos por persona.

**Rutas:**
- `POST admin/people/{id}/file` - Subir archivo
- `PUT admin/people/{id}/file` - Actualizar archivo
- `DELETE admin/people/{people}/file/{id}` - Eliminar archivo

## Modelos de Datos Relacionados

| Modelo | Descripción |
|--------|-------------|
| `Person` | Datos principales de la persona |
| `Contract` | Contratos laborales |
| `PersonRotation` | Historial de rotaciones |
| `PersonIrremovability` | Registros de irremovabilidad |
| `PersonFile` | Archivos/documentos |
| `PersonAsset` | Bienes asignados |

## Estados de Contrato

| Estado | Descripción |
|--------|-------------|
| pendientes | Contrato por firmar |
| firmado | Contrato activo |
| concluido | Contrato terminado |
| cancelado | Contrato cancelado |

## Integraciones

Este módulo se integra con:
- **Contratos:** Información contractual
- **Planillas:** Datos para pago de salarios
- **Activos Fijos:** Asignación de bienes
- **Asistencia:** Control de asistencia
- **Correspondencia:** Derivación de documentos