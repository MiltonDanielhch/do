---
sidebar_position: 10
---

# Donaciones

## Vista General

Este módulo permite gestionar el registro de donaciones realizadas al Gobierno Autónomo Departamental del Beni. Registra tanto los datos del donante como el tipo y descripción de la donación.

## Funcionalidades

### Registrar Donación

**Ruta:** `POST admin/donations/store`

Permite registrar una nueva donación.

### Datos del Donante

El sistema busca o crea una persona externa con los siguientes datos:

| Campo | Descripción |
|-------|-------------|
| **Nombre Completo** | Nombre del donante |
| **CI/NIT** | Cédula de identidad o NIT |
| **Teléfono** | Número de contacto |
| **Dirección** | Dirección del donante |
| **Email** | Correo electrónico |

### Datos de la Donación

| Campo | Descripción |
|-------|-------------|
| **Tipo de Donación** | Clasificación de la donación |
| **Descripción** | Detalle de lo donado |

## Modelo de Datos

### Donation

| Campo | Descripción |
|-------|-------------|
| `id` | Identificador único |
| `donations_type_id` | Tipo de donación |
| `person_external_id` | ID del donante |
| `description` | Descripción de la donación |
| `created_at` | Fecha de registro |

### PersonExternal

| Campo | Descripción |
|-------|-------------|
| `id` | Identificador único |
| `person_external_type_id` | Tipo de persona |
| `full_name` | Nombre completo |
| `ci_nit` | CI o NIT |
| `phone` | Teléfono |
| `address` | Dirección |
| `email` | Correo electrónico |
| `observations` | Observaciones |

## Tipos de Donación

| Tipo | Descripción |
|------|-------------|
| Dinero | Donación en efectivo |
| Bienes | Donación de objetos/muebles |
| Servicios | Donación de servicios |
| others | Otros tipos |

## Integración

- **Personas Externas:** Gestión de datos de donantes
- **Activos Fijos:** Si la donación es un bien, puede integrarse con activos

## Consideraciones

- Si el donante ya existe (por CI/NIT), se asocia automáticamente
- Si no existe, se crea un nuevo registro
- Las donaciones pueden ser de dinero, bienes o servicios