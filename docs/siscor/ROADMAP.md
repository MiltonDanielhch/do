# Roadmap de Mejoras y Actualizaciones - SISCOR

## Resumen del Análisis

Se分析了 el código fuente de SISCOR en `app/Http/Controllers` y la documentación existente en `do/docs/siscor/`. A continuación se detallan los hallazgos y propuestas de mejora.

---

## 1. Módulos Existentes en el Código vs. Documentación

| Módulo | Código | Documentación | Estado |
|--------|--------|---------------|--------|
| Entradas/Correspondencia | ✅ | ✅ | Completo |
| Bandeja de Entrada | ✅ | ✅ | Completo |
| Certificados | ✅ | ✅ | Completo |
| Directorio Telefónico | ✅ | ✅ | Completo |
| Directorio Grupos | ✅ | ✅ | Completo |
| Personas Externas | ✅ | ✅ | Completo |
| Parámetros (Tipos, Estados, etc.) | ✅ | ✅ | Completo |
| **Reservas (Personerías Jurídicas)** | ✅ | ✅ | **COMPLETADO** ⭐ |
| **Embargos** | ✅ | ✅ | **COMPLETADO** ⭐ |
| **Enlace de Trámites** | ✅ | ✅ | **COMPLETADO** ⭐ |
| **Exchange (Canje)** | ✅ | ✅ | **COMPLETADO** ⭐ |
| **Mensajes WhatsApp** | ✅ | ✅ | **COMPLETADO** ⭐ |
| Reportes | ✅ | Parcial | Mejorar |

---

## 2. Módulos por Documentar

### 2.1 Reservas (Personerías Jurídicas)

**ubicación del código:** `app/Http/Controllers/ReservasController.php`

**Funcionalidades identificadas:**
- Listar reservas de nombres
- Crear nuevas reservas
- Anular reservas
- Búsqueda AJAX de reservas
- Mostrar fecha de expiración (45 días para trámite)

**Rutas relacionadas:**
```
Route::resource('reservas', ReservasController::class);
Route::post('anulareserva/{id}', [ReservasController::class, 'nulled']);
Route::get('reservas/ajax/list', [ReservasController::class, 'list']);
```

**Modelo:** `App\Models\Reserva`

---

### 2.2 Embargos

**ubicación del código:** `app/Http/Controllers/EmbargoController.php`

**Funcionalidades identificadas:**
- Listar embargos
- Importar embargos desde Excel
- Habilitar/Inhabilitar embargo
- Buscar por ID, NRO, CI, Nombre, etc.

**Rutas relacionadas:**
```
Route::get('embargos', [EmbargoController::class, 'index']);
Route::post('embargos/import/excel', [EmbargoController::class, 'importExcel']);
Route::post('embargos/list/inhabilitar', ...);
Route::post('embargos/list/habilitar', ...);
```

**Modelo:** `App\Models\Embargo`

---

### 2.3 Enlace de Trámites

**ubicación del código:** `app/Http/Controllers/EnlaceController.php`

**Funcionalidades identificadas:**
- Adjuntar archivos a trámites de correspondencia
- Gestionar enlaces entre documentos

**Rutas relacionadas:**
```
Route::get('enlaces/{enlace?}/file', [EnlaceController::class, 'indexFile']);
Route::post('enlaces/file/store', [EnlaceController::class, 'storeFile']);
Route::post('enlaces/file/delete', [EnlaceController::class, 'destroyFile']);
```

---

### 2.4 Exchange (Canje de Documentos)

**ubicación del código:** `app/Http/Controllers\ExchangeController.php`

**Funcionalidades identificadas:**
- Gestión de canje de documentos
- Búsqueda para impresión
- Transferencia de documentos

**Rutas relacionadas:**
```
Route::resource('exchange', ExchangeController::class);
Route::post('exchange/search/print', [ExchangeController::class, 'print']);
Route::post('exchange/search/transfer', [ExchangeController::class, 'transfer']);
```

---

### 2.5 Mensajes WhatsApp

**ubicación del código:** `app/Http/Controllers\MensajesController.php`, `app/Http/Controllers\EntradasController.php`

**Funcionalidades identificadas:**
- Enviar mensajes de WhatsApp desde la correspondencia
- Ver historial de mensajes enviados
- Notificaciones automáticas

**Rutas relacionadas:**
```
Route::get('entradas/{entrada}/mensajes', [MensajesController::class, 'showMensajes']);
Route::post('send-whatsapp', [EntradasController::class, 'send_message']);
```

**Modelo:** `App\Models\MensajeEnviado`

---

## 3. Mejoras Propuestas para la Documentación Existente

### 3.1 Bandeja de Entrada (`bandeja.md`)
- **Nota:** La documentación menciona "Actualmente la bandeja del usuario no muestra resultados" - verificar si esto ya está solucionado
- Agregar说明 de cómo derivar documentos
- Agregar说明 de la funcionalidad de rechazar/archivar

### 3.2 Reportes (`reportes.md`)
- Agregar说明 del Reporte de Bandeja
- Agregar说明 del Reporte RDE Documents
- Documentar filtros avanzados si existen

### 3.3 Certificados (`certificados.md`)
- Verificar si existe la funcionalidad de código QR mencionada en "Consideraciones"
- Documentar el proceso de impresión

---

## 4. Funcionalidades Adicionales Encontradas en el Código

### 4.1 Cambio de Fecha de Entrada
```
Route::post('entradas/{id?}/date/update', [FileController::class, 'UpdateDateEntrada'])
```
Permite cambiar la fecha del documento y agregar respaldo.

### 4.2 Vías de Derivación
```
Route::post('entradas/store/vias', [EntradasController::class, 'store_vias']);
Route::post('entradas/nulledvia', [EntradasController::class, 'anulacion_via']);
```
Gestión de múltiples vías de derivación.

### 4.3 Árbol de Derivaciones
```
Route::get('treejs/{id?}', [EntradasController::class, 'treeAjax'])
```
Visualización del árbol genealógico de derivaciones.

### 4.4 Búsqueda de Trámites
```
Route::get('tramites', [TramiteController::class, 'index']);
Route::get('get-tramites', [TramiteController::class, 'documentosjson']);
```
Búsqueda unificada de trámites externos e internos.

---

## 5. Prioridades Recomendadas

| Prioridad | Módulo/Acción | Razón | Estado |
|-----------|---------------|-------|--------|
| Alta | Documentar Reservas (Personerías) | Módulo funcional sin docs | ✅ COMPLETADO |
| Alta | Documentar Embargos | Módulo funcional sin docs | ✅ COMPLETADO |
| Media | Documentar Mensajes WhatsApp | Funcionalidad valiosa de comunicación | ✅ COMPLETADO |
| Media | Documentar Enlace de Trámites | Integración importante | ✅ COMPLETADO |
| Media | Documentar Exchange | Módulo especializado | ✅ COMPLETADO |
| Baja | Mejorar Reportes | Completar documentación existente | ✅ COMPLETADO |
| Baja | Documentar Vías de Derivación | Gestión de múltiples vías | ✅ COMPLETADO |
| Baja | Documentar Árbol de Derivaciones | Visualización de flujo | ✅ COMPLETADO |

---

## 6. Pendientes Detectados (SISCOR)

| Prioridad | Módulo/Acción | Razón | Estado |
|-----------|---------------|-------|--------|
| Media | **Personerías Jurídicas** | Controller existe | ✅ COMPLETADO |
| Baja | **Cambio de Fecha de Documento** | Permite cambiar fecha con respaldo | ✅ COMPLETADO |
| Baja | **Búsqueda de Trámites** | Ruta `/tramites` | ✅ COMPLETADO |
| Baja | **Derivaciones: Archivar/Rechazar** | Acciones en bandeja | ✅ COMPLETADO |
| Baja | **Importar Datos Antiguos** | Ruta `/import` - migración | ⏳ PENDIENTE |

---

## 7. SISCOR - COMPLETADO ✅

**Total de módulos documentados: 27**

- bandeja, entradas, certificados, reportes
- directorio-telefonico, directorio-grupos
- parametros/* (8 archivos)
- vias-derivacion, arbol-derivaciones
- cambio-fecha, busqueda-tramites, archivar-rechazar
- reservas, personerias, embargos
- mensajes-whatsapp, enlace-tramites, exchange
- ROADMAP

---

## 6. Archivos de Referencia

### Documentación Actual
- `do/docs/siscor/intro.md` - Introducción
- `do/docs/siscor/bandeja.md` - Bandeja de entrada
- `do/docs/siscor/entradas.md` - Registro de entradas
- `do/docs/siscor/certificados.md` - Certificados
- `do/docs/siscor/reportes.md` - Reportes
- `do/docs/siscor/directorio-telefonico.md` - Directorio
- `do/docs/siscor/directorio-grupos.md` - Grupos de directorio
- `do/docs/siscor/parametros/*.md` - Módulos de parámetros
- `do/docs/siscor/vias-derivacion.md` - Vías de Derivación
- `do/docs/siscor/arbol-derivaciones.md` - Árbol de Derivaciones
- `do/docs/siscor/cambio-fecha.md` - Cambio de Fecha
- `do/docs/siscor/busqueda-tramites.md` - Búsqueda de Trámites
- `do/docs/siscor/archivar-rechazar.md` - Archivar/Rechazar
- `do/docs/siscor/reservas.md` - Reservas de Nombre
- `do/docs/siscor/personerias.md` - Personerías Jurídicas
- `do/docs/siscor/embargos.md` - Embargos
- `do/docs/siscor/mensajes-whatsapp.md` - Mensajes WhatsApp
- `do/docs/siscor/enlace-tramites.md` - Enlace de Trámites
- `do/docs/siscor/exchange.md` - Canje de Documentos
- `do/docs/siscor/ROADMAP.md` - Roadmap y Estado

### Controladores a Revisar
- `app/Http/Controllers/ReservasController.php`
- `app/Http/Controllers/EmbargoController.php`
- `app/Http/Controllers/EnlaceController.php`
- `app/Http/Controllers/ExchangeController.php`
- `app/Http/Controllers/MensajesController.php`

---

*Documento generado: 21/04/2026*