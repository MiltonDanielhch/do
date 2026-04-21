---
sidebar_position: 6
---

# Planillas de Previsión Social (Spreadsheets)

## Vista General

Este módulo gestiona las planillas de previsión social, que son documentos utilizados para el control y seguimiento de los aportes y descuentos de los funcionarios.

## Cómo Acceder

**Ruta:** `admin/spreadsheets`

## Funcionalidades Principales

### 1. Listado de Planillas

Muestra todas las planillas registradas en el sistema.

| Campo | Descripción |
|-------|-------------|
| **Selección** | Checkbox para selección múltiple |
| **Detalles** | Dirección administrativa y tipo de planilla |
| **AFP** | Administradora de Fondo de Pensiones (Futuro/Previsión) |
| **Usuario** | Usuario que creó la planilla |
| **Período** | Mes y año de la planilla |
| **Total** | Monto total de la planilla |
| **Acciones** | Opciones de edición/eliminación |

### 2. Eliminación Múltiple

**Ruta:** `POST admin/spreadsheets/delete/multiple`

Permite eliminar varias planillas al mismo tiempo.

## Estructura de Datos

### Modelo: Spreadsheet

| Campo | Descripción |
|-------|-------------|
| `id` | Identificador único |
| `tipo_planilla_id` | Tipo de planilla |
| `afp_id` | ID de AFP (1=Futuro, 2=Previsión) |
| `direccion_administrativa_id` | Dirección administrativa |
| `month` | Mes de la planilla |
| `year` | Año de la planilla |
| `total` | Monto total |
| `user_id` | Usuario que creó el registro |
| `deleted_at` | Fecha de eliminación |

## Integración con Otros Módulos

- **Previsión Social:** Generación de planillas de pagos
- **AFP:** Clasificación por administrador de fondos
- **Dirección Administrativa:** Organização por unidades

## Estados

| Estado | Descripción |
|--------|-------------|
| Activa | Planilla vigente |
| Eliminada | Planilla borrada lógicamente |

## Consideraciones

- Las planillas se clasifican por AFP
- Cada planilla pertenece a una dirección administrativa
- El sistema guarda quién creó cada planilla
- Es posible eliminar múltiples planillas