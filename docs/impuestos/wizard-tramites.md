---
sidebar_position: 2
---

# Wizard de Trámites

## Vista General

El sistema de trámites utiliza un **asistente de 7 pasos** para guiar al usuario en el registro de trámites de transmisión de bienes gratuitos.

## Cómo Acceder

**Ruta:** `admin/tramites/wizard/create-step-1`

O desde el menú: **Trámites → Crear Nuevo**

## Pasos del Wizard

### Step 1: Datos de Disponentes

**Ruta:** `admin/tramites/wizard/create-step-1`

Permite agregar las personas que transmiten (entregan) el bien.

| Campo | Descripción |
|-------|-------------|
| Persona | Seleccionar persona existente |
| Agregar Nuevo | Crear nueva persona |
| Tipo Relación | Relación con el inmueble |

### Step 2: Adquirentes

**Ruta:** `admin/tramites/wizard/create-step-2`

Permite agregar las personas que reciben (adquieren) el bien.

| Campo | Descripción |
|-------|-------------|
| Persona | Seleccionar persona existente |
| Agregar Nuevo | Crear nueva persona |
| Porcentaje Adquisición | Porcentaje de participación |

### Step 3: Inmuebles

**Ruta:** `admin/tramites/wizard/create-step-3`

Permite registrar los bienes inmueb trasmitidos.

| Campo | Descripción |
|-------|-------------|
| Inmueble | Seleccionar inmueble existente |
| Agregar Nuevo | Registrar nuevo inmueble |
| Valor | Valor de tasación |

### Step 4: Documentos

**Ruta:** `admin/tramites/wizard/create-step-4`

Adjuntar documentación soporte del trámite.

| Campo | Descripción |
|-------|-------------|
| Tipo Documento | Tipo de documento |
| Archivo | Subir archivo PDF |
| Observación | Notas del documento |

### Step 5: Exenciones

**Ruta:** `admin/tramites/wizard/create-step-5`

Aplicar exonerraciones al trámite si corresponde.

| Campo | Descripción |
|-------|-------------|
| Tipo Exención | Selección de exonerración |
| Documento | Justificación de exonerración |

### Step 6: Resumen

**Ruta:** `admin/tramites/wizard/create-step-6`

Vista general de todos los datos antes de guardar.

### Step 7: Guardar

**Ruta:** `admin/tramites/wizard/store`

Confirmación y registro final del trámite.

## Funcionalidades AJAX

- `ajax/person-list` - Buscar personas
- `add-disponente` - Agregar disponente
- `remove-disponente/{id}` - Quitar disponente
- `add-adquirente` - Agregar adquirente
- `remove-adquirente/{id}` - Quitar adquirente
- `add-inmueble` - Agregar inmueb
- `remove-inmueble/{id}` - Quitar inmueb
- `add-documento` - Agregar documento
- `remove-documento/{id}` - Quitar documento
- `add-exencion` - Agregar exonerración
- `remove-exencion/{id}` - Quitar exonerración

## Estados del Trámite

| Estado | Descripción |
|--------|-------------|
| Borrador | En proceso de creación |
| Completado | Trámite registrado |
| Cancelado | Trámite anulado |

## Cancelar Trámite

**Ruta:** `GET admin/tramites/wizard/cancel`

Permite cancelar el proceso en cualquier momento.

## Consideraciones

- Los datos se guardan en sesión hasta completar el wizard
- Es posible editar un trámite existente
- Cada paso valida los datos antes de continuar