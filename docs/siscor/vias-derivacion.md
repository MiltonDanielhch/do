---
sidebar_position: 8
---

# Vías de Derivación

## Vista General

Las Vías de Derivación permiten establecer una ruta secundaria o paralela para un documento. Es útil cuando un trámite debe ser conocido por múltiples personas o unidades al mismo tiempo, sin que sea una derivación principal.

## Diferencia entre Derivación y Vía

| Aspecto | Derivación | Vía |
|---------|------------|-----|
| **Propósito** | Enviar el documento a un responsable principal | Informar a otros sobre el documento |
| ** Acción requerida** | El destinatario debe actuar | El destinatario solo toma conocimiento |
| **Flujo** | Secuencial (puede re-derivar) | Simultáneo o paralelo |
| **Estado** | Afecta el estado del trámite | No afecta el estado principal |

## Cómo Agregar una Vía

### Paso 1: Acceder al Detalle de la Entrada

1. Ir a **Entradas** o **Bandeja de Entrada**
2. Seleccionar un documento
3. En la vista de detalle, buscar la sección **"Vías"**

### Paso 2: Seleccionar Funcionarios

1. Hacer clic en **"Agregar Vía"**
2. Buscar y seleccionar el/los funcionarios que recibirán copia
3. Confirmar la selección

### Paso 3: Confirmar

El sistema mostrará un mensaje de éxito: "Vía agregada exitosamente"

## Modelo de Datos

### Tabla: vias

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | BigInt | Identificador único |
| `entrada_id` | BigInt | ID de la entrada asociada |
| `funcionario_id` | BigInt | ID del funcionario |
| `people_id` | BigInt | ID de la persona |
| `nombre` | String | Nombre del funcionario |
| `cargo` | String | Cargo del funcionario |
| `deleted_at` | Datetime | Fecha de eliminación |

## Ver Vías de un Documento

En la vista de detalle de cada entrada, se muestra un listado de las vías agregadas con:
- Nombre del funcionario en copia
- Cargo
- Estado (activo/anulado)

## Anular una Vía

Si se necesita quitar una vía previamente agregada:

1. En la lista de vías, hacer clic en **"Anular"** o **"Eliminar"**
2. Confirmar la acción
3. La vía se marcará como eliminada lógicamente

## Casos de Uso

### 1. Conocimiento Múltiple
Un documento que debe ser conocido por varias direcciones al mismo tiempo.

### 2. Coordinación Entre Áreas
Cuando dos o más unidades deben coordinar acciones sobre un mismo documento.

### 3. Seguimiento de Proyectos
Documentos relacionados con proyectos que requieren participación de múltiples áreas.

### 4. Compliance/Regulatorio
Documentos que por normativa deben ser conocidos por áreas específicas (legal, finanzas, etc.).

## Consideraciones

- Las vías son independientes de las derivaciones principales
- Un documento puede tener múltiples vías simultáneas
- Las vías no aparecen en la bandeja de pendientes del destinatario como tareas
- El sistema permite agregar o quitar vías en cualquier momento
- Las vías eliminadas quedan registradas con fecha de eliminación para auditoría