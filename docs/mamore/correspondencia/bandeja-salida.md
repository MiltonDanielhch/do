---
sidebar_position: 2
---

# Correspondencia de Salida (Outbox)

## Vista General

Este módulo gestiona la correspondencia saliente del Sistema Integral MAMORÉ. Permite registrar, gestionar y dar seguimiento a los documentos que se envían desde la institución hacia otras entidades o внутри.

## Bandeja de Salida

La Bandeja de Salida muestra todos los documentos registrados por el funcionario.

### Cómo Acceder

**Ruta:** `admin/outbox`

### Permisos

- **Usuarios normales:** Ven solo sus documentos
- **Administradores:** Ven todos los documentos

## Tablero Principal

### Estructura de la Tabla

| Campo | Descripción |
|-------|-------------|
| **ID** | Identificador único |
| **Tipo** | E (Externo) / I (Interno) |
| **Gestión** | Año de gestión |
| **Cite** | Número de cite del documento |
| **HR** | Número de Hoja de Ruta |
| **Remitente** | Quién envía el documento |
| **Referencia** | Asunto del documento |
| **Entidad** | Entidad de origen |
| **Fecha** | Fecha de registro |

### Búsqueda

El sistema permite buscar por:
- HR
- Cite
- Remitente
- Referencia

## Registrar Nueva Correspondencia

### Cómo Acceder

**Ruta:** `admin/outbox/create`

### Campos del Formulario

| Campo | Descripción | Requerido |
|-------|-------------|-----------|
| **Tipo** | Externoo Interno | Sí |
| **Cite** | Número de cite único | Sí |
| **Remitente** | Persona o entidad que envía | Sí |
| **Destinatario** | Persona o unidad destino | Sí |
| **Referencia** | Asunto del documento | Sí |
| **Entidad** | Entidad de origen | Sí |
| **Urgente** | Marcar como urgente | No |
| **Archivos** | Adjuntar documentos | No |

## Acciones por Documento

### Ver Detalle
Muestra el documento completo con historial de derivaciones.

### Imprimir
Genera la impresión del documento:
- **Impresión normal:** `admin/outbox/{id}/print`
- **Impresión HR:** `admin/outbox/{id}/printhr`

### Derivación
Permite derivar el documento a otro funcionario.

### Gestión de Vías
Permite agregar vías (copias de conocimiento) al documento.

### Eliminar Derivación
Permite eliminar derivaciones específicas.

## Integración con Otros Módulos

- **Inbox:** La derivación aparece en la bandeja del destinatario
- **Bóvedas:** Integración con gestión de efectivo si aplica
- **Archivos:** Almacenamiento de documentos adjuntos

## Estados de la Correspondencia

| Estado | Descripción |
|--------|-------------|
| Registrado | Documento creado |
| Derivado | Enviado a destinatario |
| Atendido | Receptor dio respuesta |
| Finalizado | Trámite conclude |
| Anulado | Documento cancelado |