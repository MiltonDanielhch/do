---
sidebar_position: 1
---

# Correspondencia (Bandeja de Entrada)

## Vista General

Este módulo gestiona la correspondencia entrante en el Sistema Integral MAMORÉ. Permite a los funcionarios visualizar y gestionar los documentos que les han sido derivados desde otras unidades o entidades externas.

## Bandeja de Entrada

La Bandeja de Entrada es el punto central para la gestión de la correspondencia recibida. Cada funcionario ve únicamente los documentos que le han sido derivados.

### Cómo Acceder

**Ruta:** `admin/inbox`

El sistema identifica automáticamente al funcionario por su CI de usuario.

### Pestañas de la Bandeja

| Pestaña | Descripción |
|---------|-------------|
| **Pendientes** | Documentos que requieren acción |
| **Urgentes** | Documentos marcados como urgentes |
| **Archivados** | Documentos ya atendidos |

## Estructura de la Tabla

| Campo | Descripción |
|-------|-------------|
| **ID** | Identificador único de la derivación |
| **HR** | Número de Hoja de Ruta |
| **Cite** | Número de cite del documento |
| **Remitente** | Persona o entidad que envía |
| **Referencia** | Asunto del documento |
| **Fecha Derivación** | Fecha cuando fue derivado |

## Funcionalidades

### Ver Documento
Al hacer clic en un documento, se muestra el detalle incluyendo:
- Datos completos del documento
- Historial de derivaciones
- Archivos adjuntos
- Estado actual

### Derivar Documento
Permite re-derivar el documento a otro funcionario.

### Archivar Documento
Marca el documento como atendido y lo mueve a la pestaña de archivados.

### Eliminar Derivación
Permite eliminar una derivación específica.

## Estados de la Correspondencia

| Estado | Descripción |
|--------|-------------|
| Pendiente | Documento recibido, sin acción |
| Derivado | Enviado a otro funcionario |
| Atendido | Documento procesado |
| Archivado | Trámite conclude |
| Urgente | Requiere atención prioritaria |

## Integración

Esta bandeja se integra con:
- **Correspondencia de Salida (Outbox):** Documentos enviados
- **Gestión de Vías:** Copias de conocimiento
- **Adjuntos:** Archivos digitales asociados