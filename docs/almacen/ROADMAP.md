# Roadmap de Mejoras y Actualizaciones - ALMACÉN

## Resumen del Análisis

Se analizó el código fuente de ALMACÉN en `sysalmacen/app/Http/Controllers` y la documentación existente en `do/docs/almacen/`. 

---

## 1. Módulos del Código vs. Documentación

| Módulo | Código | Documentación | Estado |
|--------|--------|---------------|--------|
| **Artículos/Productos** | ✅ ArticleController | ✅ | Documentado |
| **Ingresos (Compras)** | ✅ IncomeController | ✅ | Documentado |
| **Egresos (Salidas)** | ✅ EgressController | ✅ | Documentado |
| **Inventario** | ✅ InventarioController, InventarioAlmacenController | ✅ | Documentado |
| **Proveedores** | ✅ ProviderController | ✅ | Documentado |
| **Sucursales** | ✅ SucursalController | ✅ | Documentado |
| **Usuarios** | ✅ UserController | ✅ | **COMPLETADO** ⭐ |
| **Personas Externas** | ✅ PeopleExtController | ✅ | Documentado |
| **Solicitudes de Pedido** | ✅ SolicitudPedidoController | ✅ | Documentado |
| **Solicitud Bandeja (Aprobación)** | ✅ SolicitudBandejaController | ✅ | Documentado |
| **Solicitudes Inexistentes** | ✅ NonStockRequestController | ✅ | Documentado |
| **Ingresos por Donación** | ✅ IncomeDonorController | ✅ | **COMPLETADO** ⭐ |
| **Egresos por Donación** | ✅ EgressDonorController | ✅ | **COMPLETADO** ⭐ |
| **Stock de Donaciones** | ✅ DonationStockController | ✅ | **COMPLETADO** ⭐ |
| **Solicitud de Donación** | ✅ DonacionSolicitudController | ❌ | **POR DOCUMENTAR** |
| **Reportes** | ✅ ReportAlmacenController | ✅ | Documentado |
| **Notificaciones** | ✅ NotificationController | ✅ | **COMPLETADO** ⭐ |
| **Producto Existente** | ✅ ExistingProductController | ✅ | Documentado |

---

## 2. Módulos por Documentar

### 2.1 Usuarios

**Controlador:** `UserController.php`

**Rutas:**
```
admin/usuario (resource)
admin/usuario/seguridad
POST usuarios/desactivar
POST usuarios/activar
PUT usario/change-password
```

**Funcionalidades:**
- Gestión de usuarios del sistema de almacén
- Control de sesiones
- Activar/Desactivar usuarios
- Cambio de contraseña

---

### 2.2 Donaciones

Este módulo gestiona las donaciones de productos al almacén.

#### Ingresos por Donación

**Controlador:** `IncomeDonorController.php`

**Rutas:**
- Registro de donaciones que ingresan al almacén

#### Egresos por Donación

**Controlador:** `EgressDonorController.php`

**Rutas:**
- Salida de productos donados

#### Stock de Donaciones

**Controlador:** `DonationStockController.php`

**Rutas:**
- Control de inventario de productos donados

#### Solicitud de Donación

**Controlador:** `DonacionSolicitudController.php`

**Rutas:**
- Gestión de solicitudes de productos en donación

---

### 2.3 Notificaciones

**Controlador:** `NotificationController.php`

**Funcionalidades:**
- Envío de notificaciones a usuarios
- Alertas de stock bajo
- Notificaciones de solicitudes pendientes

---

## 3. Documentación Actual (27 archivos)

### Archivos Existentes
- `intro.md` - Introducción
- `solicitudes.md` - Solicitudes
- `solicitudes-inexistentes.md` - Productos inexistentes
- `producto-existentes.md` - Productos en existencia
- `producto-existencia.md` - Existencia de productos
- `pedidos.md` - Pedidos
- `ingreso-egreso/ingresos.md` - Ingresos
- `ingreso-egreso/egresos.md` - Egresos

### Opciones de Almacén
- `opcion-almacen/articulos.md`
- `opcion-almacen/partidas.md`
- `opcion-almacen/proveedores.md`
- `opcion-almacen/sucursales.md`
- `opcion-almacen/personas-externas.md`
- `opcion-almacen/modalidad-compras.md`
- `opcion-almacen/inventario-gestion.md`

### Reportes Artículos
- `reporte-articulos/lista-articulos.md`
- `reporte-articulos/stock-disponibles.md`
- `reporte-articulos/ingresos-oficinas.md`
- `reporte-articulos/egresos-oficinas.md`

### Reportes Partidas
- `reporte-partidas/ingreso-partida-gestion.md`

### Reportes Proveedores
- `reporte-proveedores/lista-proveedores.md`
- `reporte-proveedores/usuarios.md`

### Reportes Anuales
- `reportes-anuales/inv-anual-partida.md`
- `reportes-anuales/inv-anual-detalle-item.md`
- `reportes-anuales/inv-anual-da.md`
- `reportes-anuales/inv-anual-da-central.md`
- `reportes-anuales/ingreso-anual-partida.md`

---

## 4. Prioridades Recomendadas

| Prioridad | Módulo/Acción | Razón | Estado |
|-----------|---------------|-------|--------|
| Alta | Usuarios | Módulo de seguridad sin docs | ✅ COMPLETADO |
| Media | Donaciones | Módulo completo sin docs | ✅ COMPLETADO |
| Baja | Notificaciones | Funcionalidad complementaria | ✅ COMPLETADO |

---

## 5. Estado Final

**Módulos documentados:** 17/18

**Pendientes:**
- Solicitud de Donación (DonacionSolicitudController) - Baja prioridad

---

## 6. Documentos Agregados

| Archivo | Descripción |
|---------|-------------|
| `gestion-usuarios.md` | Gestión de usuarios y seguridad |
| `notificaciones.md` | Alertas de productos próximos a vencer |
| `donaciones/ingresos-donacion.md` | Ingresos por donación SEDEGES |
| `donaciones/egresos-donacion.md` | Salida de productos donados |
| `donaciones/stock-donaciones.md` | Control de inventario donado |

---

## 7. Mejoras y Actualizaciones

### del Código
- Funciones avanzadas de usuario: getFuncionario, create_user, update_user, getSubSucursal
- Control de sesiones y cambio de contraseña

### del Sistema (git log)
- Corrección de búsqueda en PeopleExt para manejar múltiples conexiones de BD

---

*Documento generado: 21/04/2026*