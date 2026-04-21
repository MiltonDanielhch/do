---
sidebar_position: 9
---

# Árbol de Derivaciones

## Vista General

El Árbol de Derivaciones es una herramienta visual que permite ver la cadena completa de derivaciones de un documento. Muestra el flujo completo desde que el documento ingresa hasta su estado actual, permitiendo entender claramente quién ha intervenido en el trámite.

## Cómo Acceder

**Ruta:** `admin/treejs/{id}`

Desde la vista de detalle de una entrada, generalmente hay un botón o enlace para visualizar el árbol de derivaciones.

## Estructura del Árbol

El árbol muestra una representación jerárquica que incluye:

### Niveles del Árbol

1. **Nodo Principal (Entrada)**
   - ID de la entrada
   - Remitente original
   - Cite del documento
   - Referencia

2. **Derivaciones (Ramas)**
   - Cada derivación se muestra como una rama desde el nodo principal
   - Muestra el funcionário que recibió el documento
   - Cargo del funcionario
   - Fecha de derivación
   - Estado de la derivación

3. **Sub-derivaciones**
   - Si un documento fue re-derivado, se muestra como sub-ramas
   - Permite ver la cadena completa de responsabilidades

## Información Mostrada por Nodo

| Campo | Descripción |
|-------|-------------|
| **Entrada** | ID y datos principales del documento |
| **Remitente** | Persona o entidad que envió el documento |
| **Cite** | Número de cite único |
| **Para** | Funcionario que recibió la derivación |
| **Cargo** | Cargo del funcionario receptor |
| **Derivación** | ID de la derivación |
| **Parent** | ID de la derivación padre (para sub-derivaciones) |

## Ejemplo de Visualización

```
📄 Entrada #1234
   ├── 👤 José Pérez - Director de Finanzas (Derivación #1)
   │      ├── 👤 María López - Unidad de Contabilidad (Derivación #2)
   │      └── 👤 Carlos Ruiz - Auditoría (Derivación #3)
   └── 👤 Ana García - Secretaría General (Derivación #4)
```

## Casos de Uso

### 1. Seguimiento de Trámites
Permite ver rápidamente todo el recorrido de un documento sin necesidad de revisar cada derivación manualmente.

### 2. Identificar Cuellos de Botella
Al ver el árbol, se puede identificar en qué punto está detenido un trámite.

### 3. Auditoría
Facilita la auditoría al mostrar claramente la cadena de responsabilidades.

### 4. Resolución de Errores
Ayuda a identificar si un documento fue derivado incorrectamente.

## Implementación Técnica

### Ruta del Sistema
```
GET /admin/treejs/{id}
```

### Consulta SQL
El árbol se construye consultando las tablas:
- `entradas` - Datos del documento
- `derivations` - Registro de derivaciones

### Datos Obtenidos
```php
select(
    'e.id as entrada',
    'e.remitente',
    'e.cite',
    'job_de as cargo',
    'd.funcionario_nombre_para as para',
    'd.funcionario_cargo_para as cargos',
    'd.id as derivacion',
    'd.parent_id as parent'
)
```

## Consideraciones

- El árbol solo muestra derivaciones no eliminadas (`deleted_at = null`)
- Las entradas eliminadas no aparecen en el árbol
- La visualización es dinámica y se genera en tiempo real
- Permite identificar fácilmente el flujo principal vs. derivaciones secundarias
- Es una herramienta valiosa para nuevos funcionarios que necesitan entender el historial de un documento