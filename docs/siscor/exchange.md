---
sidebar_position: 14
---

# Exchange (Canje de Documentos)

## Vista General

Este módulo permite realizar el "canje" o transferencia de documentos entre funcionarios. Es útil cuando un documento fue derivado a una persona equivocada o cuando se necesita reasignar un trámite a otro funcionario sin perder el historial de derivaciones.

## Cómo Acceder

**Ruta:** `admin/exchange`

## Funcionalidades del Módulo

### 1. Búsqueda de Documentos

El módulo permite buscar todos los documentos derivados a una persona específica.

#### Paso 1: Seleccionar Funcionario
- En el tablero principal, seleccionar el **funcionario actual** (de quien se van a tomar los documentos)
- Hacer clic en "Buscar" o "Imprimir"

#### Paso 2: Ver Documentos Encontrados
El sistema mostrará todos los documentos que están pendientes de atención por ese funcionario:
- Documentos marcados como transferidos (`transferred = 0`) no aparecerán
- Solo muestra documentos derivados directamente (no los re-derivados)

### Estructura de la Tabla de Resultados:

| Campo | Descripción |
|-------|-------------|
| **Selección** | Checkbox para seleccionar documentos a transferir |
| **Fecha** | Fecha de derivación del documento |
| **HR/NCI** | Hoja de Ruta o Número de Control Interno |
| **Cite** | Número de cite del documento |
| **Remitente** | Persona o entidad que envió el documento |
| **Referencia** | Asunto del documento |
| **Prioridad** | Indicador de urgencia |
| **Estado** | Estado actual del trámite |

## Transferir Documentos

### Proceso de Transferencia

1. **Seleccionar documentos:** Marcar los checkboxes de los documentos a transferir
2. **Elegir nuevo destinatario:** Seleccionar el funcionario que recibirá los documentos
3. **Agregar observación (opcional):** Registrar el motivo de la transferencia
4. **Confirmar transferencia:** Ejecutar la acción

### Qué Sucede en la Transferencia

Cuando se transfiere un documento:

1. **Se crea una nueva derivación** hacia el nuevo funcionario (con los mismos datos de cargo, dirección, unidad)
2. **El documento original se marca como transferido** (`transferred = 1`)
3. **Se registra:**
   - Usuario que realizó la transferencia
   - Funcionario destino
   - Fecha de transferencia
   - Detalle/Observación

### Datos que se Conservan

Al transferir, se mantienen todos los datos originales:
- Cargo del destinatario original
- Dirección Administrativa
- Unidad
- Responsable actual
- Fecha de registro original
- Observaciones
- Estado del documento

## Modelo de Datos

### Cambios en la Tabla derivations

| Campo | Descripción |
|-------|-------------|
| `transferred` | 0 = No transferido, 1 = Transferido |
| `transferredUser_id` | ID del usuario que realizó la transferencia |
| `transferredDetails` | Detalle u observación de la transferencia |
| `transferredPeople_id` | ID de la persona que recibió el documento |
| `transferredDate` | Fecha y hora de la transferencia |

## Casos de Uso

### 1. Error en Derivación
Cuando un documento fue derivado a la persona incorrecta.

### 2. Reasignación por Vacaciones
Cuando un funcionario sale de vacaciones y sus documentos deben ser atendidos por otro.

### 3. Cambio de Área
Cuando un funcionario cambia de unidad y tiene documentos pendientes.

### 4. Redistribución de Carga
Para equilibrar la carga de trabajo entre funcionarios.

## Consideraciones

- La transferencia mantiene el historial completo del documento
- El documento original queda marcado como transferido para no aparecer en la bandeja del origen
- El nuevo destinatario verá el documento en su bandeja de pendientes
- Se registra quién hizo la transferencia y cuándo (trazabilidad)
- Es posible transferir múltiples documentos a la vez
- La transferencia es diferente a derivar: en la derivación se crea una nueva cadena, en la transferencia se reasigna un documento existente