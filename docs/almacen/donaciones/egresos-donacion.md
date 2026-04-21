---
sidebar_position: 4
---

# Egresos por Donación (Salidas)

## Vista General

Este módulo gestiona la salida de productos donados del almacén. Permite entregar productos a los centros beneficiarios.

## Cómo Acceder

**Ruta:** Panel de egresos por donación

## Funcionalidades Principales

### 1. Listado de Egresos por Donación

Muestra todos los egresos (salidas) de productos donados.

| Campo | Descripción |
|-------|-------------|
| ID | Identificador único |
| Nro Solicitud | Número de solicitud |
| Centro | Centro receptor de la donación |
| Observación | Notas adicionales |
| Fecha Entrega | Fecha de entrega |
| Condición | Estado del egreso |

### 2. Registro de Egreso

Permite registrar la salida de productos donados:
- Seleccionar centro beneficiario
- Elegir artículos del stock de donaciones
- Registrar cantidad a entregar
- Fecha de entrega

### 3. Control de Stock

El sistema controla:
- Cantidad restante en almacén
- Historial de entregas por centro
- Productos próximos a vencer

## Modelo de Datos

### Tablas Relacionadas

| Tabla | Descripción |
|-------|-------------|
| `donacion_egresos` | Cabecera de egresos por donación |
| `donacion_egreso_detalles` | Detalle de artículos entregados |

## Integración con Otros Módulos

- **Ingresos Donación:** Fuente del stock disponible
- **Stock Donaciones:** Control de inventario
- **Notificaciones:** Alertas de productos próximos a vencer

## Flujo de Donaciones

```
Ingreso Donación → Stock Donación → Egreso Donación → Centro Beneficiario
```

## Estados

| Estado | Descripción |
|--------|-------------|
| Activo | Egreso registrado |
| Inativo | Egreso cancelado |

## Consideraciones

- Los egresos se realizan desde el stock de donaciones
- Se puede entregar a diferentes centros
- El sistema descuenta del stock restante