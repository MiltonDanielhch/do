---
sidebar_position: 13
---

# Enlace de Trámites

## Vista General

Este módulo permite gestionar y vincular documentos externos o trámites que no están registrados en el sistema de correspondencia principal (SISCOR). Es útil para mantener un registro de documentación relacionada que ingresa por otros medios o que necesita ser enlazada a trámites existentes.

## Tablero Principal de Enlaces

El tablero muestra un listado de los documentos/trámites enlazados.

### Estructura de la Tabla de Enlaces:

| Campo | Descripción |
|-------|-------------|
| **ID** | Identificador único del enlace |
| **Fecha Nota** | Fecha del documento original |
| **Cite** | Número de cite del documento |
| **Entidad** | Entidad o institución de origen |
| **Institución** | Nombre completo de la institución |
| **Destinatario** | Persona o cargo destinatario |
| **Referencia** | Asunto o tema del documento |
| **Fecha Entidad** | Fecha del documento en la entidad de origen |
| **Estado** | Estado del enlace (Activo/Inactivo) |

## Gestión de Archivos Adjuntos

### Subir Archivos

Cada enlace puede tener múltiples archivos adjuntos.

**Ruta:** `admin/enlaces/{enlace}/file`

### Campos del Formulario de Archivo:

| Campo | Descripción |
|-------|-------------|
| **Archivos** | Selector de archivos desde el equipo |

### Proceso de Adjuntar Archivos:

1. Acceder al detalle de un enlace
2. Hacer clic en el botón para agregar archivos
3. Seleccionar uno o múltiples archivos desde el equipo
4. Confirmar la carga
5. Los archivos se almacenarán en: `storage/app/public/entradas/{mes}/{año}/{nombre_archivo}`

### Eliminación de Archivos

Los archivos adjuntos pueden ser eliminados (eliminación lógica):
- Se guarda el usuario que eliminó el archivo
- Se registra la fecha de eliminación
- El archivo ya no aparece en el listado activo

## Modelo de Datos

### Tabla: enlaces

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | BigInt | Identificador único |
| `fechaNota` | Date | Fecha del documento |
| `cite` | String | Número de cite |
| `entidad` | String | Entidad de origen |
| `institucion` | String | Nombre de institución |
| `destinatario` | String | Persona destinataria |
| `referencia` | Text | Asunto del documento |
| `fechaEntidad` | Date | Fecha en la entidad |
| `status` | Boolean | Estado activo/inactivo |
| `registerUser_id` | BigInt | Usuario que registró |
| `deleted_at` | Datetime | Fecha de eliminación |
| `deleteUser_id` | BigInt | Usuario que eliminó |

### Tabla: enlace_files

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | BigInt | Identificador único |
| `nombre_origen` | String | Nombre original del archivo |
| `enlace_id` | BigInt | ID del enlace padre |
| `ruta` | String | Ruta de almacenamiento |
| `registerUser_id` | BigInt | Usuario que subió el archivo |
| `deleted_at` | Datetime | Fecha de eliminación |
| `deleteUser_id` | BigInt | Usuario que eliminó |

## Casos de Uso

### 1. Documentos que ingresan por Courier Externo
Cuando documentos llegan por servicios de courier que no pasan por registro normal.

### 2. Documentos de Otras Instituciones
Registrar documentación que llega de otras entidades gubernamentales.

### 3. Seguimiento de Trámites Externos
Mantener registro de trámites que se realizan fuera del sistema principal.

### 4. Adjuntos Adicionales
Agregar documentación adicional a trámites ya registrados.

## Consideraciones

- Este módulo es complementario al sistema de correspondencia principal
- Permite mantener trazabilidad de documentos que de otra forma no quedarían registrados
- Los archivos se almacenan en el storage del sistema con organización por fecha
- Se mantiene historial de quién subió y quién eliminó archivos
- Es útil para casos donde el documento físico llega pero no se registra en el flujo normal