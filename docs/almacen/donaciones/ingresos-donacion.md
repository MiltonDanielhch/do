---
sidebar_position: 3
---

# Ingresos por Donación (SEDEGES)

## Vista General

Este módulo gestiona el ingreso de productos donados al almacén del Gobierno Autónomo Departamental del Beni, principalmente a través de SEDEGES (Secretaría de Desarrollo Social).

## Cómo Acceder

**Ruta:** Panel de ingresos por donación

## Funcionalidades Principales

### 1. Listado de Ingresos por Donación

Muestra todos los ingresos de productos donados.

| Campo | Descripción |
|-------|-------------|
| ID | Identificador único |
| Nro Solicitud | Número de solicitud de donación |
| Centro | Centro receptor de la donación |
| Observación | Notas adicionales |
| Fecha Donación | Fecha de la donación |
| Fecha Ingreso | Fecha de ingreso al almacén |
| Condición | Estado del ingreso |
| Stock | Control de stock |

### 2. Registro de Donación

Permite registrar nuevas donaciones con:
- Datos del donante (empresa o persona)
- Categoría de donación
- Artículos donados
- Fechas de caducidad (importante para control)
- Archivos adjuntos

### 3. Control de Caducidad

El sistema registra la fecha de caducidad de cada producto donado para:
- Alertar cuando falten 5 días para vencer
- Controlar productos próximos a vencer
- Gestionar stock restante

## Modelo de Datos

### Tablas Relacionadas

| Tabla | Descripción |
|-------|-------------|
| `donacion_ingresos` | Cabecera de ingresos por donación |
| `donacion_ingreso_detalles` | Detalle de artículos donados |
| `donacion_articulos` | Catálogo de artículos para donación |
| `donacion_categorias` | Categorías de donación |
| `donacion_archivos` | Archivos adjuntos |

### Donantes

| Modelo | Descripción |
|--------|-------------|
| `DonadorEmpresa` | Empresas que donan |
| `DonadorPersona` | Personas individuales que donan |

## Integración con Otros Módulos

- **Notificaciones:** Alertas de productos próximos a vencer
- **Egresos Donación:** Salida de productos donados
- **Stock Donaciones:** Control de inventario

## Estados

| Estado | Descripción |
|--------|-------------|
| Activo | Donación registrada y en stock |
| Inactivo | Donación cancelada o agotada |

## Consideraciones

- Este módulo es específico para donaciones (no compras)
- Controla vencimiento de productos
- Se integra con el sistema de notificaciones