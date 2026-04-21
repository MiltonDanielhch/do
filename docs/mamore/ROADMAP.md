# Roadmap de Mejoras y Actualizaciones - MAMORÉ

## Resumen del Análisis

Se analizó el código fuente de MAMORÉ en `sysadmin/app/Http/Controllers` y la documentación existente en `do/docs/mamore/`. 

---

## 1. Módulos del Código vs. Documentación

| Módulo | Código | Documentación | Estado |
|--------|--------|---------------|--------|
| **Correspondencia (Inbox/Outbox)** | ✅ TcInboxController, TcOutboxController | ✅ | **COMPLETADO** ⭐ |
| **People (Personas)** | ✅ PeopleController | ✅ | **COMPLETADO** ⭐ |
| **Cajas (Cashiers)** | ✅ CashiersController | ✅ | Documentado |
| **Bóvedas (Vaults)** | ✅ VaultsController | ✅ | **COMPLETADO** ⭐ |
| **Planillas Pagos** | ✅ PlanillasController | ✅ | Documentado |
| **Activos Fijos** | ✅ AssetsControllers | ✅ | Documentado |
| **Previsión Social** | ✅ SocialSecurityController | ✅ | Documentado |
| **Spreadsheets** | ✅ SpreadsheetsController | ✅ | **COMPLETADO** ⭐ |
| **Planillas Adicionales** | ✅ StipendController | ✅ | Documentado |
| **Cheques** | ✅ CheckController | ✅ | Documentado |
| **Contratos** | ✅ ContractsController | ✅ | Documentado |
| **Programas/Proyectos** | ✅ ProgramsController | ✅ | Documentado |
| **Bono Antigüedad** | ✅ SeniorityBonusPeopleController | ✅ | Documentado |
| **Memos** | ✅ MemosController | ✅ | Documentado |
| **Schedules (Biométrico)** | ✅ SchedulesController | ✅ | **COMPLETADO** ⭐ |
| **Attendances (Asistencia)** | ✅ AttendancesController | ✅ | **COMPLETADO** ⭐ |
| **Attendance Permits** | ✅ AttendancePermitsController | ✅ | **COMPLETADO** ⭐ |
| **Reports** | ✅ ReportsController | ✅ | Documentado (extenso) |
| **Imports** | ✅ ImportsController | ✅ | **COMPLETADO** ⭐ |
| **Donaciones** | ✅ DonationsController | ✅ | **COMPLETADO** ⭐ |

---

## 2. Módulos por Documentar

### 2.1 Correspondencia (Inbox/Outbox)

**Controladores:**
- `TcInboxController.php` - Bandeja de entrada de trámites
- `TcOutboxController.php` - Bandeja de salida de trámites
- `TcController.php` - Funciones auxiliares

**Rutas principales:**
```
admin/inbox (resource)
admin/outbox (resource)
```

**Funcionalidades:**
- Registro de correspondencia externa/interna
- Derivación de documentos
- Gestión de vías
- Archivar derivaciones
- Adjuntar archivos
- Impresión de HR

---

### 2.2 People (Gestión de Personas)

**Controlador:** `PeopleController.php`

**Rutas principales:**
```
admin/people
admin/people/{id}/rotation
admin/people/{id}/assets
admin/people/{id}/irremovability
admin/people/{id}/attendance
```

**Funcionalidades:**
- Listar personas/funcionarios
- Ver detalle de persona
- Gestión de rotación de personal
- Archivos adjuntos por persona
- Bienes/asignaciones a persona
- Irremovabilidad (inamovilidad)
- Estado AFP
- Registro de asistencia
- Búsqueda avanzada

---

### 2.3 Bóvedas (Vaults)

**Controlador:** `VaultsController.php`

**Rutas:**
```
admin/vaults
admin/vaults/{id}/open
admin/vaults/{id}/close
```

**Funcionalidades:**
- Apertura de bóveda
- Cierre de bóveda
- Detalles de bóveda
- Impresión de estados

---

### 2.4 Spreadsheets (Planillas)

**Controlador:** `SpreadsheetsController.php`

**Rutas:**
```
admin/spreadsheets (resource)
```

---

### 2.5 Schedules (Biométrico)

**Controlador:** `SchedulesController.php`

**Rutas:**
```
admin/schedules
admin/schedules/{id}/assignments
```

**Funcionalidades:**
- Crear horarios
- Asignar horarios a personas
- Gestión de turnos

---

### 2.6 Attendances (Asistencia)

**Controlador:** `AttendancesController.php`

**Rutas:**
```
admin/attendances (resource)
admin/attendances/generate
admin/attendances/absences
```

**Funcionalidades:**
- Registro de asistencia
- Generación de planillas de asistencia
- Gestión de ausencias

---

### 2.7 Attendance Permits (Permisos)

**Controlador:** `AttendancePermitsController.php`

**Rutas:**
```
admin/attendances-permits (resource)
```

---

### 2.8 Imports (Importaciones)

**Controlador:** `ImportsController.php`

**Rutas:**
```
admin/imports
```

---

### 2.9 Donations (Donaciones)

**Controlador:** `DonationsController.php`

---

## 3. Prioridades Recomendadas

| Prioridad | Módulo/Acción | Razón |
|-----------|---------------|-------|
| Alta | Correspondencia (Inbox/Outbox) | Módulo principal, sin docs |
| Alta | People (Personas) | Gestión de funcionarios, sin docs |
| Media | Bóvedas (Vaults) | Módulo financiero |
| Media | Attendances (Asistencia) | Control de personal |
| Baja | Spreadsheets | Complemento de planillas |
| Baja | Schedules | Integración con asistencia |
| Baja | Imports | Funcionalidad técnica |

---

## 4. Documentación Actual (91 archivos)

### Contrataciones (12)
- intro, lista-persona, crear-persona, lista-contrato, crear-contrato
- bono-antiguedad, tipos-planillas, programas-proyectos
- cargos, cargos-alternos, firmas-autorizadas

### Planillas (14)
- intro, lista-planilla, crear-planilla
- lista-periodos, crear-periodos
- lista-pagos
- lista-cajas, crear-cajas
- lista-archivos, crear-archivos
- lista-aguinaldos, crear-aguinaldos
- tickets-caja, imprimir-tickets
- planillas-adicionales

### Finanzas (6)
- intro, memos, tipos-memo, categorias-memo, beneficiarios

### Activos Fijos (5)
- intro, activos, grupos, secciones, mantenimientos

### Previsión Social (4)
- intro, cheques, pagos, planillas-manuales

### Parámetros (17)
- intro, unidades-admin, direcciones, dependencias
- tipos-afp, tipos-seguro-social, tipos-inamovilidad
- tipos-cheques, tipos-beneficiarios, bono-antiguedad
- trabajos-recurrentes, tipo-permisos
- paises, ciudades, departamentos-estados
- feriados, oficinas

### Reportes (24)
- intro, proyectos, planillas, planillas-manuales
- parentescos, pagos-seguro-social, pagos-realizados
- pagos-planillas, pagos-cheques, pagos-anuales
- marcaciones, mantenimientos, generar-excel
- datos-personales, contratos, contrataciones
- contraloria, cierres-boveda, cheques, cargos
- caratula, cajas, aportes-individuales
- anniversarios, aguinaldos, adendas

### Otros
- intro general
- cheques

---

## 7. Mejoras y Actualizaciones Recientes

### Documentos Agregados/Recientes

| Archivo | Descripción |
|---------|-------------|
| `correspondencia/bandeja-entrada.md` | Bandeja de entrada |
| `correspondencia/bandeja-salida.md` | Bandeja de salida |
| `recursos-humanos/gestion-personas.md` | Gestión de Personas |
| `recursos-humanos/asistencia.md` | Control de Asistencia |
| `recursos-humanos/horarios.md` | Horarios y Biométrico |
| `recursos-humanos/permisos-asistencia.md` | Permisos |
| `tesoreria/bovedas.md` | Gestión de Bóvedas |
| `prevision_social/spreadsheets.md` | Planillas de Previsión |
| `configuracion/importaciones.md` | Importaciones Excel |
| `administracion/donaciones.md` | Donaciones |
| `contrataciones/gestion-avanzada.md` | Adendas, Transferencias, Promociones |

### Funcionalidades Avanzadas de Contratos (del código)

- **Restauración de contratos** eliminados o finalizados
- **Edición parcial** de contratos
- **Actualización de resolución** de contratos
- **Ratificación** de contratos pendientes
- **Cambios de estado** con validaciones (verifica planillas pagadas)
- **Soporte para nombre de cargo alternativo** desde relación job
- **Múltiples contratos por cargo** y rutas dinámicas

### Actualizaciones del Sistema (del git log)

- Corrección de bug de cálculo de contratos
- Corrección de contratos eventuales SEDEGES
- Edición parcial de código de contrato
- Mejoras en reporte de aniversarios
- Agrupar reporte de contratos por persona con Excel
- Soporte para múltiples contratos por cargo
- Cambio en tenor de documentos
- Mejoras en cálculo de aguinaldos al 50%
- Separación de apellido (nombre/apellido)

---

## 8. Estado Final - COMPLETADO ✅

**Total módulos documentados: 20/20**

---

*Documento generado: 21/04/2026*