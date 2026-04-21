---
sidebar_position: 9
---

# Importaciones (Imports)

## Vista General

Este módulo permite importar datos desde archivos Excel al sistema. Es útil para cargar información masiva de empleados,struktur-organizacional, u otros datos.

## Cómo Acceder

**Ruta:** `admin/imports`

## Funcionalidades

### Importar Datos

**Ruta:** `POST admin/imports/store`

Permite subir un archivo Excel con datos a importar.

### Tipos de Importación

| Tipo | Descripción |
|------|-------------|
| Estructura Permanente | Importa структура организационная permanente |
| others | Otros tipos de importación |

### Proceso de Importación

1. Seleccionar el **tipo de importación**
2. Seleccionar el **tipo de procedimiento** (si aplica)
3. Elegir el **archivo Excel** desde el equipo
4. Confirmar la importación

## Estructura del Archivo Excel

El archivo debe contener las columnas requeridas según el tipo de importación. Generalmente incluye:

| Campo | Descripción |
|-------|-------------|
| Código | Identificador del registro |
| Nombre | Nombre o descripción |
| others | Campos específicos según el tipo |

## Integración

- **Jobs:** Cargos/funciones
- **Estructura Organizacional:** Unidades y departamentos

## Consideraciones

- El archivo debe ser en formato Excel (.xlsx o .xls)
- Los datos existentes pueden actualizarse o ignorarse según la configuración
- La importación puede tardar dependiendo del volumen de datos
- Se recomienda hacer backup antes de importar