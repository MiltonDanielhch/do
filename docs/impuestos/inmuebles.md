---
sidebar_position: 4
---

# Inmuebles y Avalúos

## Vista General

Gestión de bienes inmueuestres y sus avaluos para trámites de transmisión.

## Cómo Acceder

**Ruta:** `admin/inmuebles`

## Inmuebles

### Listado de Inmuebles

| Campo | Descripción |
|-------|-------------|
| ID | Identificador único |
| Código | Código catastral |
| Dirección | Dirección del inmueble |
| Tipo | Tipo de inmueb |
| Ciudad | Ciudad ubicación |
| Supervisor | Usuario responsable |

### Tipos de Inmueble

**Ruta:** `admin/tipos-inmueble`

| Tipo | Descripción |
|------|-------------|
| Casa | Vivienda unifamiliar |
| Departamento | Apartamento |
| Lote | Terreno sin construir |
| Local Comercial | Espacio comercial |
| others | Otros tipos |

## Avalúos

### Registro de Avalúo

**Ruta:** `admin/avaluos`

| Campo | Descripción |
|-------|-------------|
| ID | Identificador |
| Inmueble | inmueb relacionado |
| Valor | Valor tasado |
| Fecha | Fecha del avaluo |
| Estado | Estado del avaluo |

### Descargar Avalúo

**Ruta:** `GET admin/avaluos/{avaluo}/download`

Permite descargar el documento del avaluo en PDF.

## Integración con Wizard

En el Step 4 del wizard, se agregan los inmueb al trámite.

## Búsqueda AJAX

**Ruta:** `GET admin/inmuebles/ajax/search`

Permite buscar inmueb disponibles para agregar a trámites.

## Estados

| Estado | Descripción |
|--------|-------------|
| Activo | inmueb disponible |
| Inactivo | inmueb no disponible |

## Consideraciones

- Cada inmueb puede tener múltiples avaluos históricos
- El último avaluo se usa para el cálculo del impuesto
- Los avaluos debenestar vigentes