---
sidebar_position: 2
---

# Notificaciones

## Vista General

Este módulo gestiona las notificaciones del Sistema de Almacén, principalmente alertas sobre productos próximos a vencer, especialmente en el área de donaciones.

## Cómo Acceder

El sistema muestra notificaciones automáticamente en la interfaz.

## Funcionalidades

### 1. Alerta de Caducidad de Donaciones

El sistema verifica productos donados próximos a vencer.

**Lógica de verificación:**
- Consulta productos con fecha de caducidad registrada
- Filtra productos con cantidad restante mayor a 0
- Identifica productos que vencen en 5 días o menos

### Datos Mostrados en Notificación

| Campo | Descripción |
|-------|-------------|
| ID | Identificador del ingreso |
| Nro Solicitud | Número de solicitud de donación |
| Artículo | Nombre del producto |
| Caducidad | Fecha de vencimiento |

## Integración

- **Donaciones:** Notifica sobre productos próximos a vencer
- **Almacén:** Control de stock de productos donados

## Consideraciones

- Solo notifica productos con cantidad restante
- El umbral de alerta es de 5 días
- Solo afecta productos de donación