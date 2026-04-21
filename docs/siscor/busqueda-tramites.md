---
sidebar_position: 17
---

# Búsqueda de Trámites

## Vista General

Este módulo permite realizar una búsqueda unificada de todos los trámites (correspondencia) del sistema. A diferencia de los reportes específicos, esta herramienta está diseñada para encontrar documentos específicos de manera rápida.

## Cómo Acceder

**Ruta:** `admin/tramites`

## Funcionalidades

### Búsqueda Unificada

El sistema permite buscar tanto:
- **Correspondencia Externa** (documentos que vienen de fuera de la institución)
- **Correspondencia Interna (NCI)** (Notas de Comunicación Interna)

### Campos de Búsqueda

El sistema utiliza los siguientes campos para la búsqueda:

| Campo | Descripción |
|-------|-------------|
| **ID** | Identificador único del registro |
| **Tipo** | Tipo de documento (E = Externo, I = Interno) |
| **Cite** | Número de cite del documento |
| **Remitente** | Persona o entidad que envía |
| **Referencia** | Asunto o tema del documento |
| **Entidad** | Entidad de origen |
| **Estado** | Estado actual del trámite |
| **Categoría** | Categoría del documento |
| **Fecha** | Fecha de registro |

## Tabla de Resultados

### Columnas Mostradas

| Columna | Descripción |
|---------|-------------|
| **ID** | Identificador único |
| **Tipo** | E (Externo) / I (Interno) |
| **Cite** | Número de cite |
| **Remitente** | Quién envía el documento |
| **Referencia** | Asunto del documento |
| **Entidad** | Entidad de origen |
| **Estado** | Estado actual |
| **Fecha** | Fecha de registro |

### Características de la Tabla

- **Paginación:** Navegación entre páginas de resultados
- **Ordenamiento:** Ordenar por cualquier columna
- **Búsqueda en Tiempo Real:** Los resultados se actualizan mientras se escribe
- **Filtrado:** Opciones para filtrar por tipo, estado, categoría

## Uso Típico

### 1. Buscar un Documento Específico
Si se conoce el número de cite, se puede buscar directamente.

### 2. Seguimiento de Trámites
Para saber el estado de un documento en particular.

### 3. Auditoría
Para verificar si un documento fue registrado y su estado.

### 4. Búsqueda por Remitente
Para ver toda la correspondence recibida de una entidad o persona.

## Integración con Otros Módulos

Esta búsqueda complementa:
- **Bandeja de Entrada:** Documentos pendientes del usuario
- **Reportes:** Análisis general de la correspondence
- **Detalle de Entrada:** Para ver el historial completo de un documento

## Consideraciones

- La búsqueda es **unificada**: muestra tanto externos como internos
- Requiere autenticación para acceder
- Los resultados dependen de los permisos del usuario
- Es útil para usuarios que necesitan localizar documentos rápidamente