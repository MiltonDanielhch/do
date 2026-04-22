---
sidebar_position: 1
---

# Minería - Sistema de Gestión

## Vista General

Sistema de gestión del área de minería del Gobierno Autónomo Departamental del Beni. Control de certificados y empresas mineras.

## Módulos Principales

### 1. Certificados

**Ruta:** `admin/certificates`

Gestión de certificados mineros.

| Campo | Descripción |
|-------|-------------|
| ID | Identificador único |
| Empresa | Company asociada |
| Número | Número de certificado |
| Fecha | Fecha de emisión |
| Estado | Vigente/Expirado |

### Impresión de Certificados

**Ruta:** `/certificates/{id}/print`

Genera la impresión del certificado en PDF.

### 2. Empresas

**Ruta:** `admin/companies/create`

Gestión de empresas mineras.

| Campo | Descripción |
|-------|-------------|
| Nombre | Razón social |
| NIT | Número de identificación |
| Representante | Persona de contacto |
| Actividad | Tipo de actividad minera |

### Listado AJAX

**Ruta:** `admin/companies/certificate/list`

Obtiene lista de empresas para seleccionar en certificados.

### 3. Formulario 101

**Ruta:** `admin/form101s`

Gestión del Formulario 101 (Declaración Jurada).

| Campo | Descripción |
|-------|-------------|
| ID | Identificador |
| Empresa | Empresa relacionada |
| Periodo | Año/mes de declaración |
| Estado | Presentado/Pendiente |

### Lista AJAX

**Ruta:** `admin/form101s/ajax/list/{search?}`

Búsqueda de formularios.

### Impresión Formulario 101

**Ruta:** `admin/form101s/prinf/{form}`

Genera impresión del formulario.

## Funcionalidades AJAX

### Buscar Código de Certificado

**Ruta:** `admin/ajax/certificates/code/{code}`

Busca certificado por código.

### Descargar Log

**Ruta:** `admin/download/log/{cad}`

Descarga archivos de log.

## Panel de Administración

**Ruta:** `/admin`

Gestión via Voyager.

## Consideraciones

- Sistema específico para el área de minería
- Control de certificados y empresas
- Formularios 101 para declaraciones juradas