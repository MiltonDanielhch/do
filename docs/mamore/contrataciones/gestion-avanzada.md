---
sidebar_position: 3
---

# Gestión de Contratos - Avanzado

## Vista General

El módulo de contratos en Mamoré incluye funcionalidades avanzadas para la gestión del ciclo de vida contractual: adendas, transferencias, promociones y reasignaciones.

## Adendas (Enmiendas)

Las adendas permiten modificar un contrato existente sin necesidad de crear uno nuevo.

### Crear Adenda

**Ruta:** `POST admin/contracts/addendum/store`

### Estados de Adenda

| Estado | Descripción |
|--------|-------------|
| pendiente | Esperando firma |
| firmado | Adenda activa |
| concluido | Período terminado |

### Actualizar Estado de Adenda

**Ruta:** `POST admin/contracts/addendum/status`

Cuando una adenda se firma, se actualiza automáticamente la fecha de fin del contrato principal.

### Eliminar Adenda

**Ruta:** `POST admin/contracts/addendum/delete`

---

## Transferencia de Contratos

Permite transferir un contrato de un funcionario a otro (por ejemplo, por rotación de personal).

### Crear Transferencia

**Ruta:** `POST admin/contracts/transfer/store`

### Datos de la Transferencia

| Campo | Descripción |
|-------|-------------|
| Código | Número secuencial automático (N/AAAA) |
| Fecha | Fecha de la transferencia |
| Contrato ID | Contrato a transferir |
| Motivo | Razón de la transferencia |

---

## Promoción de Contratos

Permite promover a un funcionario a un nuevo cargo o nivel.

### Crear Promoción

**Ruta:** `POST admin/contracts/promotion/store`

### Datos de la Promoción

| Campo | Descripción |
|-------|-------------|
| Código | Número secuencial automático |
| Fecha | Fecha de promoción |
| Nuevo cargo | Cargo al que promueve |
| Nuevo nivel | Nivel salarial |
| Nueva dirección | Unidad administrativa |

---

## Reasignación de Contratos

Permite reasignar un contrato a otra unidad o dirección administrativa.

### Crear Reasignación

**Ruta:** `POST admin/contracts/reassignment/store`

---

## Descuentos Adicionales

Permite gestionar descuentos adicionales a un contrato (préstamos, seguros, etc.).

### Agregar Descuento

**Ruta:** `POST admin/contracts/additional/discount/store`

### Eliminar Descuento

**Ruta:** `DELETE admin/contracts/additional/discount/{id}/delete`

---

## Restauración de Contratos

Permite restaurar contratos que fueron eliminados o finalizados.

### Restaurar Contrato Eliminado

**Ruta:** `POST admin/contracts/{id}/restore`

**Condiciones:**
- Solo se puede restaurar el último contrato eliminado de la persona
- La persona no debe tener un contrato activo

### Restaurar Contrato Finalizado

**Ruta:** `POST admin/contracts/{id}/restore-deleted`

Permite reopen un contrato que fue marcado como concluido para reactivarlo.

---

## Edición Parcial de Contratos

Permite modificar ciertos campos de un contrato sin afectar otras configuraciones.

**Ruta:** `POST admin/contracts/{id}/update/partial`

---

## Actualización de Resolución

Permite actualizar los datos de resolución de un contrato.

**Ruta:** `POST admin/contracts/resolution/update`

---

## Ratificación de Contratos

Permite ratificar un contrato que estaba en estado pendiente.

**Ruta:** `POST admin/contracts/ratificate`

---

## Cambios de Estado de Contrato

Permite cambiar el estado de un contrato (firmar, concluir, cancelar).

**Ruta:** `POST admin/contracts/status`

### Validaciones al Concluir un Contrato

- Verifica que no existan planillas pagadas después de la fecha de finalización
- Para contratos de consultoría, la fecha debe ser igual o mayor al período actual
- Validación de aguinaldo (que no se haya procesado)

---

## Búsqueda de Contratos

Búsqueda avanzada de contratos por diferentes criterios.

**Ruta:** `GET admin/contracts/search/ajax`

---

## Consideraciones

- Las adendas afectan las fechas del contrato original
- Las transferencias generan historial
- Las promociones pueden incluir cambio de escala salarial
- Los descuentos adicionales se calculan en planillas
- La restauración tiene validaciones específicas