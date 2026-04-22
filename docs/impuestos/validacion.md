---
sidebar_position: 8
---

# Validación de Trámites

## Vista General

Sistema de validación pública que permite verificar la autenticidad de trámites completados.

## Cómo Acceder

**Ruta:** `/validar/{hash}`

## Funcionalidades

### 1. Verificar Trámite

Ingresa el código hash del trámite para verificar su estado.

| Campo | Descripción |
|-------|-------------|
| Hash | Código único de validación |
| Estado | Estado del trámite |
| Fecha | Fecha de registro |
| Resultado | Información del trámite |

### 2. Estados de Validación

| Estado | Descripción |
|--------|-------------|
| Vigente | Trámite válido y activo |
| Cancelado | Trámite cancelado |
| No Encontrado | Hash no válido |

## Consideraciones

- La validación es pública (no requiere inicio de sesión)
- Cada trámite tiene un código hash único
- Útil para verificar autenticidad de documentos