---
sidebar_position: 11
---

# Servicios del Sistema

## Vista General

Impuestos cuenta con servicios especializados para el cálculo y gestión.

### IdtgbCalculator

**Ubicación:** `app/Services/IdtgbCalculator.php`

Servicio principal para el cálculo del IDTGB.

**Funcionalidades:**
- Calcular impuesto según categoría de tasa
- Aplicar rebajas por parentesco
- Calcular mora por atraso
- Generar cálculo estimado

### DashboardService

**Ubicación:** `app/Services/DashboardService.php`

Servicio para el panel de administración.

**Funcionalidades:**
- Estadísticas de trámites
- Conteo por estado
- Datos para gráficos

### DashboardCacheInvalidator

**Ubicación:** `app/Services/DashboardCacheInvalidator.php`

Gestión de cache del dashboard.

---

## Observers

### TramiteObserver

**Ubicación:** `app/Observers/TramiteObserver.php`

Observa cambios en trámites:
- `saving` - Antes de guardar
- `created` - Después de crear
- `updated` - Después de actualizar
- `deleted` - Después de eliminar

---

## Rutas Públicas Adicionales

### Tutorial Ciudadano

**Ruta:** `/tutorial-ciudadano`

Muestra guía para ciudadanos sobre cómo usar el sistema.

### Clear Cache

**Ruta:** `/admin/clear-cache`

Limpia la cache del sistema (solo admin).