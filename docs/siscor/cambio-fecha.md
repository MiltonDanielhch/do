---
sidebar_position: 16
---

# Cambio de Fecha de Documento

## Vista General

Este módulo permite modificar la fecha de registro de una entrada de correspondencia. Es útil cuando un documento físico ingresa en una fecha diferente a la del registro en el sistema, o cuando se necesita regularizar documentación 历史ica.

## Cómo Acceder

**Ruta:** `admin/entradas/{id}/date/update`

Desde la vista de detalle de una entrada, generalmente hay un botón o enlace para "Cambiar Fecha".

## Funcionalidad

### Cuando Usar Esta Función

1. **Documentos con Fecha de Recepcíón Diferente:** Cuando el documento físico llegó en una fecha distinta al registro
2. **Regularización de Documentos Antiguos:** Para documentar trámites que se procesaron anteriormente
3. **Errores de Registro:** Corrección de fechas registradas incorrectamente
4. **Documentación Retroactiva:** Ingreso de documentos históricos al sistema

## Formulario de Cambio de Fecha

### Campos

| Campo | Descripción | Requerido |
|-------|-------------|-----------|
| **Nueva Fecha** | Nueva fecha y hora para el documento | Sí |
| **Archivo de Respaldo** | Documento que justifica el cambio (PDF, imagen) | No |
| **Observación** | Motivo o justificación del cambio | No |

### Proceso

1. Seleccionar la **Nueva Fecha** del documento
2. (Opcional) Adjuntar un **archivo de respaldo** que justifique el cambio
3. (Opcional) Agregar una **observación** explicando el motivo
4. Confirmar el cambio

## Historial de Cambios

El sistema guarda un registro completo de cada cambio:

### Modelo: ArchivoDate

| Campo | Descripción |
|-------|-------------|
| `entrada_id` | ID de la entrada modificada |
| `dateActual` | Nueva fecha establecida |
| `dateHistoria` | Fecha anterior del documento |
| `file` | Ruta del archivo de respaldo |
| `observation` | Observación del cambio |
| `registerUser_id` | Usuario que realizó el cambio |
| `nci` | Indicador de tipo de documento |

## Ejemplo de Uso

**Situación:** Un documento llegó el 15 de marzo pero se registró el 20 de marzo.

**Solución:**
1. Acceder al cambio de fecha
2. Cambiar la fecha del documento al 15/03/2025
3. Adjuntar el documento original o理由 del cambio
4. El sistema guardará:
   - Fecha anterior: 20/03/2025
   - Nueva fecha: 15/03/2025
   - Usuario que hizo el cambio
   - Archivo de respaldo (si se adjuntó)

## Consideraciones

- **Trazabilidad:** Cada cambio queda registrado con el usuario y la fecha
- **Justificación:** Se recomienda siempre adjuntar un respaldo
- **Reversión:** El sistema guarda la fecha anterior para referencia
- **Permisos:** Solo usuarios con permisos pueden realizar cambios de fecha
- **Validación:** El sistema permite cambiar a cualquier fecha, pero se recomienda ser preciso