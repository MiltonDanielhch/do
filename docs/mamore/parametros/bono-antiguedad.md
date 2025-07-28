---
sidebar_position: 2
---

# Gestión de Tipos de Bono de Antigüedad

## Vista General
Módulo para administrar los diferentes rangos y porcentajes aplicables al bono de antigüedad para el personal del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único del rango | Numérico | 1 |
| Descripción | Rango de años de antigüedad | Texto | "2 a 4 años" |
| Percentage | Porcentaje del bono correspondiente | Numérico | 5 |
| Estado | Condición actual del rango | Dropdown | "Activo", "Inactivo" |
| Creado | Fecha de registro | Timestamp | "2022-02-17 13:25:07" |

## Rangos de Antigüedad y Porcentajes

| Años de Servicio | Porcentaje (%) |
|------------------|----------------|
| 2 a 4 años       | 5              |
| 5 a 7 años       | 11             |
| 8 a 10 años      | 18             |
| 11 a 14 años     | 26             |
| 15 a 19 años     | 34             |
| 20 a 24 años     | 42             |
| 25 o más años    | 50             |

## Filtros Disponibles

### Básicos
- Por descripción (rango de años)
- Por porcentaje
- Por estado
- Por rango de fechas

### Avanzados
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa del rango.
2.  **Editar**: Modificar descripción, porcentaje o estado.
3.  **Exportar**: Generar reporte en Excel/PDF.

## Ejemplo de Registro Completo
```plaintext
Id: 1
Descripción: 2 a 4 años
Percentage: 5
Estado: Activo
Creado: 2022-02-17 13:25:07 
```
## Consideraciones
- Estos porcentajes se aplican sobre la base de cálculo definida (usualmente sobre salarios mínimos nacionales).
- Es crucial mantener estos rangos actualizados según la normativa laboral vigente.
- Integración directa con el módulo de:
  - Planillas (Cálculo de Sueldos)
  - Recursos Humanos (Registro de Antigüedad)
- Auditoría completa de operaciones.

# Crear Nuevo Tipo de Bono de Antigüedad

## Vista General
Formulario para registrar nuevos rangos y porcentajes para el cálculo del bono de antigüedad en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Descripción**: Rango de años de servicio al que aplica el bono.
  - Ejemplo: "2 a 4 años", "25 o mas años"
- **Percentage**: Porcentaje del bono correspondiente a ese rango.
  - Ejemplo: 5, 50
- **Estado**: Define si el rango está activo y se utilizará en los cálculos.
  - Activo
  - Inactivo

## Proceso de Creación

1.  **Ingresar la descripción** del rango de años (ej. "5 a 7 años").
2.  **Especificar el porcentaje** correspondiente (ej. 11).
3.  **Seleccionar el estado** inicial (generalmente "Activo").
4.  **Validar la información** ingresada.
5.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Descripción | Mín. 5 caracteres, Formato específico (ej. "X a Y años"), Único | "Descripción inválida" o "Rango ya existe" |
| Percentage | Numérico, > 0 | "Porcentaje debe ser mayor a cero" |
| Estado | Selección requerida | "Seleccione un estado" |

## Consideraciones
- Es fundamental que estos rangos y porcentajes coincidan con la normativa laboral vigente en Bolivia.
- La base de cálculo para este porcentaje suele ser un múltiplo de salarios mínimos nacionales.
- Este catálogo es esencial para el cálculo automático en el módulo de Planillas.
- Integración directa con:
  - Planillas
  - Recursos Humanos
- Genera un registro único para cada rango de antigüedad.
- Auditoría completa de operaciones.

## Ejemplo de Registro
```plaintext
Descripción: 2 a 4 años
Percentage: 5
Estado: Activo
```
