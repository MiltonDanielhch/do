---
sidebar_position: 4
---

# Rutas

## Vista General

Gestión de rutas de transporte público.

## Modelo de Datos

| Campo | Descripción |
|-------|-------------|
| id | Identificador único |
| nombre | Nombre de la ruta |
| descripcion | Descripción |
| origen | Punto de inicio |
| destino | Punto final |

## Estados

| Estado | Descripción |
|--------|-------------|
| Activa | Operativa |
| Inactiva | No disponible |

## Asignación a Organizaciones

Las rutas se asignan a organizaciones con resolución de shutdown.

**Permisos requeridos:**
- `add_routes` - Agregar rutas
- `delete_routes` - Eliminar rutas

### Gestionar Rutas de Organización

**Ruta:** `GET /admin/organizations/{id}/routes/edit`

Permite ver y gestionar las rutas asignadas a una organización.

### Agregar Ruta

**Ruta:** `PUT /admin/organizations/{id}/routes/update`

Requiere:
- Lista de rutas
- Archivo de resolución de shutdown (opcional)

### Eliminar Ruta

**Ruta:** `DELETE /admin/organizations/{id}/routes/{route}/destroy`

### Descargar Resolución

**Ruta:** `GET /admin/organizations/{id}/routes/{route}/download`

Permite descargar el archivo de resolución.