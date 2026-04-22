---
sidebar_position: 3
---

# Vehículos

## Vista General

Gestión de vehículos registrados en el sistema de transporte.

## Modelo de Datos

| Campo | Descripción |
|-------|-------------|
| id | Identificador único |
| associate_id | ID del propietario |
| marca | Marca del vehículo |
| modelo | Modelo |
| year | Año de fabricación |
| number_plate | Número de placa |
| color | Color |
| tipo_vehiculo | Tipo de vehículo |

## Estados

| Estado | Descripción |
|--------|-------------|
| Activo | En operación |
| Inactivo | Fuera de servicio |

## Consideraciones

- Cada vehículo pertenece a un asociado
- Se puede buscar vehículo por número de placa