---
sidebar_position: 4
---

# Bóvedas (Vaults)

## Vista General

El módulo de Bóvedas gestiona el control de efectivo y valores en la institución. Permite abrir y cerrar bóvedas, registrar movimientos de dinero y generar reportes de estado.

## Cómo Acceder

**Ruta:** `admin/vaults`

## Funcionalidades Principales

### 1. Apertura de Bóveda

**Ruta:** `POST admin/vaults/{id}/open`

Permite abrir una bóveda registrando:
- Fecha y hora de apertura
- Usuario que abre
- Monto inicial (si aplica)

### 2. Cierre de Bóveda

**Ruta:** 
- `GET admin/vaults/{id}/close` - Ver formulario de cierre
- `POST admin/vaults/{id}/close/store` - Confirmar cierre

El cierre incluye:
- Total de ingresos
- Total de egresos
- Saldo final
- Detalle por denominaciones

### 3. Detalles de Bóveda

**Rutas:**
- `GET admin/vaults/details/{id}` - Ver detalles
- `POST admin/vaults/{id}/details/store` - Agregar detalle
- `POST admin/vaults/details/delete` - Eliminar detalle

### 4. Impresión de Reportes

**Rutas:**
- `GET admin/vaults/{id}/print/details` - Imprimir detalles
- `GET admin/vaults/{vault}/print/closure` - Imprimir cierre
- `GET admin/vaults/{vault}/print/status` - Imprimir estado

## Estructura de Datos

### Modelos Relacionados

| Modelo | Descripción |
|--------|-------------|
| `Vault` | Bóveda principal |
| `VaultsDetail` | Detalles de movimientos |
| `VaultsDetailsCash` | Detalles de efectivo |
| `VaultsClosure` | Cierres de bóveda |
| `VaultsClosuresDetail` | Detalles del cierre |

### Tipos de Movimiento

| Tipo | Descripción |
|------|-------------|
| Ingreso | Depósito de efectivo |
| Egreso | Retiros de efectivo |
| Ajuste | Ajustes de inventario |

## Estados de la Bóveda

| Estado | Descripción |
|--------|-------------|
| Abierta | Bóveda en operación |
| Cerrada | Bóveda con operación finalizada |
| Bloqueada | Sin acceso |

## Integraciones

- **Cajas:** Se integra con el módulo de cajas
- **Pagos:** Registra pagos realizados
- **Planillas:** Control de efectivo para pagos

## Consideraciones

- Solo usuarios autorizados pueden abrir/cerrar bóvedas
- Cada movimiento queda registrado con el usuario
- Los cierres pueden revertirse en casos especiales
- El sistema controla el flujo de efectivo