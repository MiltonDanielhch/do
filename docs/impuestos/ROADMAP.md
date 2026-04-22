# Roadmap de Mejoras y Actualizaciones - IMPUESTOS

## Resumen del Análisis

Se analizó el código fuente de IMPUESTOS en `impuestos/app/Http/Controllers`. No existe documentación previa en el proyecto.

---

## 1. Módulos del Sistema (25 Controladores)

| Módulo | Controlador | Descripción |
|--------|-------------|-------------|
| **Calculadora** | CalculadoraBeniController | Cálculo de IDTGB |
| **Validación** | ValidacionController | Validación pública de trámites |
| **Trámite Exención** | TramiteExencionController | Exenciones en trámites |
| **Documento** | DocumentoController | Gestión de documentos |
| **UFV** | UfvController | Valor UFV |
| **Trámite** | TramiteController | Gestión de trámites |
| **Inmueble** | InmuebleController | Bienes raíces |
| **Avalúo** | AvaluoController | Avalúos de propiedades |
| **Tipo Inmueble** | TipoInmuebleController | Catálogo de tipos de inmueble |
| **Persona** | PersonController | Gestión de personas |
| **Trámite Inmueble** | TramiteInmuebleController | Inmuebles en trámites |
| **Adquirente Trámite** | AdquirenteTramiteController | Adquirentes en trámites |
| **Tasa** | TasaController | Catálogo de tasas |
| **Tipo Transmisión** | TipoTransmisionController | Tipos de transmisión |
| **Parentesco** | ParentescoController | Catálogo de parentescos |
| **Usuario** | UserController | Gestión de usuarios |
| **Rol** | RoleController | Gestión de roles |
| **Ajax** | AjaxController | Funciones AJAX |
| **Pago** | PagoController | Gestión de pagos |
| **Exención** | ExencionController | Catálogo de exonerraciones |
| **Disponente Trámite** | DisponenteTramiteController | Disponentes en trámites |
| **Solución Digital** | SolucionDigitalController | Soluciones digitales |
| **Reporte** | ReporteController | Reportes del sistema |
| **Almacenamiento** | StorageController | Archivos y storage |
| **Error** | ErrorController | Manejo de errores |

---

## 2. Rutas Principales

### Públicas
- `/` - Home
- `/calculadora-idtgb-beni` - Calculadora de impuestos
- `/validar/{hash}` - Validar trámite

### Admin
- `/admin/tramites/wizard/*` - Wizard de trámites (7 pasos)
- `/admin/tramites/{tramite}/inmuebles` - Inmuebles del trámite
- `/admin/tramites/{tramite}/exenciones` - Exenciones del trámite
- `/admin/tramites/{tramite}/adquirentes` - Adquirentes del trámite
- `/admin/tramites/{tramite}/disponentes` - Disponentes del trámite
- `/admin/tramites/{tramite}/documentos` - Documentos del trámite
- `/admin/tramites/{tramite}/pagos` - Pagos del trámite

---

## 3. Flujo de Trámites (Wizard)

El sistema usa un asistente de 7 pasos para crear trámites:

### Step 1: Disponentes
Datos del transmitente/vendedor

### Step 2: Adquirentes
Datos del receptor/comprador

### Step 3: Inmuebles
Bienes raíces involucrados

### Step 4: Documentos
Documentación soporte

### Step 5: Exenciones
Exoneraciones aplicadas

### Step 6: Resumen
Vista general antes de guardar

### Step 7: Guardar
Confirmación y registro

---

## 4. Estados de Trámite

| Estado | Descripción |
|--------|-------------|
| Pendiente | En proceso de creación |
| Completado | Trámite registrado |
| Cancelado | Trámite cancelado |

---

## 5. Documentación por Crear

| Prioridad | Módulo | Estado |
|----------|--------|--------|
| Alta | Calculadora IDTGB | ✅ COMPLETADO |
| Alta | Wizard de Trámites (7 pasos) | ✅ COMPLETADO |
| Media | Personas (Disponentes/Adquirentes) | ✅ COMPLETADO |
| Media | Inmuebles y Avalúos | ✅ COMPLETADO |
| Media | Pagos | ✅ COMPLETADO |
| Baja | Parámetros (tasas, tipos, etc.) | ✅ COMPLETADO |
| Baja | Reportes | ✅ COMPLETADO |
| Baja | Validación Pública | ✅ COMPLETADO |

---

## 6. Estado - COMPLETADO ✅

**Módulos documentados:** 9/25

---

*Documento generado: 21/04/2026*