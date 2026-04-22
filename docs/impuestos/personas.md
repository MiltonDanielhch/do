---
sidebar_position: 3
---

# Personas (Disponentes y Adquirentes)

## Vista General

Este módulo gestiona las personas involucradas en los trámites de transmisión de bienes: disponentes (transmisores) y adquirentes (receptores).

## Cómo Acceder

**Ruta:** `admin/people`

## Funcionalidades

### 1. Listado de Personas

Muestra todas las personas registradas en el sistema.

| Campo | Descripción |
|-------|-------------|
| ID | Identificador único |
| Nombre | Nombre completo |
| CI | Cédula de identidad |
| Nit | NIT (si es jurídico) |
| Teléfono | Contacto telefónico |
| Email | Correo electrónico |

### 2. Crear Persona

**Ruta:** `POST admin/people`

Permite registrar nuevas personas.

### 3. Ver Detalle

**Ruta:** `GET admin/people/{person}`

Muestra el detalle completo de la persona.

### 4. Editar Persona

**Ruta:** `PUT admin/people/{person}`

Permite modificar datos de la persona.

### 5. Eliminar Persona

**Ruta:** `DELETE admin/people/{person}`

Elimina lógicamente una persona.

## Búsqueda AJAX

**Ruta:** `GET admin/people/ajax/list`

Permite buscar personas dinámicamente en el wizard de trámites.

## Tipos de Persona

| Tipo | Descripción |
|------|-------------|
| Natural | Persona física con CI |
| Jurídica | Empresa con NIT |

## Integración con Trámites

- Las personas se adicionan como disponentes en el Step 1 del wizard
- Las personas se adicionan como adquirentes en el Step 2 del wizard
- Cada persona puede tener múltiples parentescos asociados

## Parentescos

**Ruta:** `admin/parentescos`

Catálogo de relaciones de parentesco para el cálculo de tasas.

| Campo | Descripción |
|-------|-------------|
| ID | Identificador |
| Nombre | Nombre del parentesco |
| Categoría | Categoría de tasa (1, 10, 20) |