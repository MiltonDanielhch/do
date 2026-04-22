---
sidebar_position: 3
---

# Registro de Cambios (Changelog)

Documento histórico de actualizaciones, mejoras y correcciones realizadas en los sistemas del Gobierno Autónomo Departamental del Beni.

---

## Registro de Versiones

### v2.0.0 - 2024

**Fecha:** Enero 2024

#### Nuevos Sistemas Agregados

| Sistema | Descripción | Fecha Deploy |
|---------|-------------|--------------|
| **Auditoría** | Portal de informes ejecutivos de auditoría | Enero 2024 |
| **Minería** | Sistema de Certificados de Operador Minero | Enero 2024 |
| **Ecoalbergue** | Sistema de gestión hotelera | Enero 2024 |

#### Mejoras Generales

*   Implementación de nuevos sistemas en la plataforma de documentación
*   Actualización de guías de usuario para todos los sistemas
*   Creación de FAQ comprensiva
*   Despliegue en Coolify con Docker

---

### v1.5.0 - 2023

**Fecha:** Diciembre 2023

#### Sistemas Actualizados

| Sistema | Cambio |
|---------|--------|
| **MAMORÉ** | Nuevo módulo de importación de datos |
| **SISCOR** | Integración con sistema de correspondencia Exchange |
| **GACETAS** | Nuevo diseño de portal público |
| **TRANSPARENCIA** | Mejora en formulario de denuncias |

#### Correcciones

*   **MAMORÉ:** Corrección de cálculos en planillas de aguinaldo
*   **SISCOR:** Fix en derivación de documentos múltiples
*   **ALMACÉN:** Corrección de-stock en transacciones simultáneas
*   **IMPUESTOS:** Fix en cálculo de UFV

---

### v1.4.0 - 2023

**Fecha:** Septiembre 2023

#### Nuevos Módulos

*   **MAMORÉ:** Módulo de activos fijos con mantenimientos
*   **SISCOR:** Directorio telefónico y grupos
*   **ALMACÉN:** Sistema de donations
*   **IMPUESTOS:** Wizard de trámites

#### Mejoras de Rendimiento

*   Optimización de consultas en reportes de planillas
*   Implementación de caché para vistas frecuentes
*   Mejora en tiempo de carga de listados

---

### v1.3.0 - 2023

**Fecha:** Junio 2023

#### Mejoras UI/UX

*   Actualización de Voyager a versión estable
*   Mejora de diseño en portales públicos
*   Implementación de tema responsive
*   Agregación de iconografía consistente

#### Nuevas Funcionalidades

*   **SISCOR:** Mensajes de WhatsApp integrados
*   **ALMACÉN:** Reportes anuales detallados
*   **GACETAS:** Sistema de búsqueda avanzada

---

### v1.2.0 - 2023

**Fecha:** Marzo 2023

#### Sistemas Nuevos

*   **IMPUESTOS** - Sistema de gestión de impuestos departamentales
*   **TRANSPARENCIA** - Portal de denuncias ciudadanas

#### Migraciones

*   Migración de base de datos a MySQL 8.0
*   Actualización de Laravel 7 a Laravel 8
*   Migración a Voyager 1.4

---

### v1.1.0 - 2022

**Fecha:** Diciembre 2022

#### Mejoras

*   Implementación de logs de auditoría
*   Sistema de permisos por roles
*   Reportes exportables a Excel
*   Notificaciones por email

---

### v1.0.0 - 2022

**Fecha:** Enero 2022

#### Sistemas Originales

*   **MAMORÉ** - Sistema integral administrativo
*   **SISCOR** - Sistema de correspondencia
*   **ALMACÉN** - Sistema de inventario
*   **GACETAS** - Portal de publicaciones oficiales

#### Características Base

*   Panel de administración Voyager
*   Autenticación de usuarios
*   Gestión de roles y permisos
*   CRUD de entidades principales

---

## Línea de Tiempo de Desarrollo

```
2022                    2023                         2024
 │                       │                           │
 ├─ v1.0.0               │                           │
 │  ├─ MAMORÉ            │                           │
 │  ├─ SISCOR            │                           │
 │  ├─ ALMACÉN           │                           │
 │  └─ GACETAS           │                           │
 │                       │                           │
 │                    ├─ v1.2.0                      │
 │                    │  ├─ IMPUESTOS                │
 │                    │  └─ TRANSPARENCIA           │
 │                    │                              │
 │                    ├─ v1.3.0                      │
 │                    │  └─ Mejoras UI/UX           │
 │                    │                              │
 │                    ├─ v1.4.0                      │
 │                    │  └─ Nuevos módulos          │
 │                    │                              │
 │                    └─ v1.5.0                      │
 │                       └─ Mejoras y fixes          │
 │                                                  │
 │                                               ├─ v2.0.0
 │                                               │  ├─ AUDITORÍA
 │                                               │  ├─ MINERÍA
 │                                               │  └─ ECOALBERGUE
```

---

## Métricas de Desarrollo

### Sistemas en Producción

| Sistema | Estado | Último Update | Documentación |
|---------|--------|----------------|----------------|
| MAMORÉ | ✅ Activo | 2024 | ✅ Completa |
| SISCOR | ✅ Activo | 2024 | ✅ Completa |
| ALMACÉN | ✅ Activo | 2024 | ✅ Completa |
| IMPUESTOS | ✅ Activo | 2024 | ✅ Completa |
| GACETAS | ✅ Activo | 2024 | ✅ Completa |
| TRANSPARENCIA | ✅ Activo | 2024 | ✅ Completa |
| AUDITORÍA | ✅ Activo | 2024 | ✅ Completa |
| MINERÍA | ✅ Activo | 2024 | ✅ Completa |
| ECOALBERGUE | ✅ Activo | 2024 | ✅ Completa |

### Estadísticas de Documentación

| Métrica | Valor |
|---------|-------|
| Total de documentos | ~200 |
| Sistemas documentados | 9 |
| Páginas en español | 100% |
| Roadmaps disponibles | 4 |

---

## Próximas Actualizaciones

### Planificadas para v2.1.0

*   Integración de API REST para sistemas móviles
*   Nuevo módulo de reportes gerenciales para MAMORÉ
*   Sistema de notificaciones push
*   Dashboard unificado para todos los sistemas

### En Investigación

*   App móvil para SISCOR
*   Firma digital de documentos
*   Integración con servicios de gobierno electrónico
*   Sistema de backup automático redundante

---

## Notas de Seguridad

### Actualizaciones de Seguridad Aplicadas

| Fecha | Sistema | Descripción |
|-------|---------|-------------|
| 2024-01 | Todos | Actualización de dependencias |
| 2023-12 | Todos | Patch de seguridad Laravel |
| 2023-06 | Voyager | Actualización a versión segura |
| 2022-08 | Todos | Hardening de configuración |

---

## Procedimiento de Despliegue

### Entornos

| Entorno | URL | Propósito |
|---------|-----|----------|
| Desarrollo | Local | Pruebas |
| Staging | `staging.beni.gob.bo` | Validación |
| Producción | `*.beni.gob.bo` | Uso real |

### Flujo de Despliegue

```
1. Desarrollo Local (git)
       ↓
2. Push a Branch (feature/fix)
       ↓
3. Code Review
       ↓
4. Merge a Develop
       ↓
5. Deploy a Staging
       ↓
6. Pruebas UAT
       ↓
7. Merge a Main
       ↓
8. Deploy a Producción (Coolify)
```

---

## Contribuciones

Para reportar errores o sugerir mejoras:

1.  **Bug Reports:** Crear issue en repositorio con descripción detallada
2.  **Feature Requests:** Proponer en la sección de roadmap
3.  **Documentación:** Editar archivos Markdown en `/docs`

---

*Este changelog se actualiza con cada release significativo. Para cambios menores, consulta el historial de commits.*