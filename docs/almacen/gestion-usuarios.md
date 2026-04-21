---
sidebar_position: 1
---

# Gestión de Usuarios

## Vista General

Este módulo permite gestionar los usuarios del Sistema de Almacén del Gobierno Autónomo Departamental del Beni. Incluye funcionalidades de seguridad, control de sesiones y administración de cuentas.

## Cómo Acceder

**Ruta:** `admin/usuario`

## Funcionalidades Principales

### 1. Listado de Usuarios

Muestra todos los usuarios activos del sistema de almacén.

### 2. Ver Sesiones Activas

**Ruta:** `GET admin/usuario/seguridad`

Permite visualizar las sesiones activas de cada usuario.

| Campo | Descripción |
|-------|-------------|
| ID Sesión | Identificador único de la sesión |
| Usuario | Nombre del usuario conectado |
| IP | Dirección IP desde donde accede |
| Última actividad | Tiempo de inactividad |

### 3. Eliminar Sesión

**Ruta:** `DELETE admin/usuario/sesion/`

Permite cerrar una sesión activa de un usuario de forma remota.

### 4. Cambiar Contraseña

**Ruta:** `PUT admin/ususario/change-password/`

Permite cambiar la contraseña del usuario.

### 5. Activar/Desactivar Usuarios

**Rutas:**
- `POST admin/usuarios/desactivar` - Desactivar usuario
- `POST admin/usuarios/activar` - Activar usuario

### Estados de Usuario

| Estado | Descripción |
|--------|-------------|
| Activo | Usuario puede acceder al sistema |
| Inactivo | Usuario bloqueado, no puede acceder |

## Integración con Sucursales

El sistema relaciona usuarios con sucursales:
- Cada usuario puede tener una o más sucursales asignadas
- La condición `1` indica usuario activo en la sucursal

## Consideraciones

- El sistema sincroniza automáticamente el sucursal_id del usuario
- Las sesiones muestran información de seguridad importante
- Los usuarios desactivados no pueden acceder al sistema

---

## Funcionalidades Avanzadas

### 1. Obtener Funcionario

**Ruta:** `GET admin/usuario/get-funcionario`

Permite buscar y obtener datos de un funcionario del sistema.

### 2. Crear Usuario

**Ruta:** `POST admin/usuario/create_user`

Permite crear un nuevo usuario en el sistema.

### 3. Actualizar Usuario

**Ruta:** `PUT admin/usuario/{user}/update_user`

Permite modificar los datos de un usuario existente.

### 4. Obtener Sub-Sucursal

**Ruta:** `GET admin/usuario/get-sub-sucursal/{id}`

Permite obtener las sub-sucursales relacionadas con una sucursal.

---

## Mejoras y Actualizaciones Recientes

### Corrección de Búsqueda en Personas Externas
- Se corrigió la búsqueda en PeopleExt para manejar múltiples conexiones de BD