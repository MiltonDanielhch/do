---
sidebar_position: 1
---

# Transparencia - Sistema de Denuncias

## Vista General

Sistema de gestión de denuncias del Gobierno Autónomo Departamental del Beni. Permite a ciudadanos presentar denuncias de forma anónima o identificada.

## Funcionalidades

### 1. Registro de Denuncia (Público)

**Ruta:** `POST /denuncias/store`

Formulario público para presentar denuncias.

### Campos del Formulario

| Campo | Descripción | Requerido |
|-------|-------------|-----------|
| CI | Cédula de identidad del denunciante | No (anónimo) |
| Nombre Completo | Nombre del denunciante | Sí |
| Teléfono | Contacto telefónico | No |
| Dirección | Dirección del denunciante | No |
| Denunciado | Persona o entidad denunciada | Sí |
| Delito | Descripción del hecho | Sí |
| Archivos | Evidencia adjunta | No |

### Proceso de Registro

1. El sistema busca o crea el denunciante
2. Registra la denuncia con la fecha actual
3. Adjunta los archivos si existen
4. Retorna respuesta JSON

### Estados

| Campo | Descripción |
|-------|-------------|
| Fecha Registro | Fecha de presentación |
| Estado | Estado de la denuncia |

## Modelo de Datos

### Denunciante

| Campo | Descripción |
|-------|-------------|
| id | Identificador |
| ci | Cédula de identidad |
| nombre_completo | Nombre completo |
| telefono | Teléfono |
| direccion | Dirección |

### Denuncia

| Campo | Descripción |
|-------|-------------|
| id | Identificador |
| denunciante_id | ID del denunciante |
| fecha_registro | Fecha de registro |
| denunciado | Persona denunciada |
| delito | Descripción del hecho |
| archivos | Archivos adjuntos (JSON) |

## Panel de Administración

**Ruta:** `/admin`

Gestión completa de denuncias via Voyager.

## Consideraciones

- El sistema permite denuncias anónimas (CI opcional)
- Los archivos se almacenan en disco público
- Cada denuncia tiene fecha automática de registro