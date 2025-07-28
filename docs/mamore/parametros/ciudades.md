---
sidebar_position: 2
---

# Gestión de Ciudades

## Vista General
Módulo para administrar la lista de ciudades o localidades asociadas a los departamentos/estados registrados en el sistema del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único de la ciudad | Numérico | 122 |
| Departamento/estado | Departamento o estado al que pertenece | Texto (Relacionado) | "Beni", "Cochabamba" |
| Nombre | Nombre completo de la ciudad/localidad | Texto | "MOXOS - CHANEQUERE", "EL TRIUNFO" |
| Siglas | Abreviatura o código de la ciudad (si aplica) | Texto | "MCH" |
| Provincia | Provincia a la que pertenece (si aplica) | Texto | "MOXOS", "JOSE BALLIVIAN", "OTRA" |
| Location | Datos de ubicación geográfica (opcional) | Texto | - |
| Creado | Fecha de registro | Timestamp | "2024-12-13 11:21:40" |

## Filtros Disponibles

### Básicos
- Por departamento/estado
- Por nombre
- Por siglas
- Por provincia
- Por rango de fechas

### Avanzados
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa de la ciudad.
2.  **Editar**: Modificar datos básicos.
3.  **Exportar**: Generar reporte en Excel/PDF.

## Ejemplo de Registro Completo
```plaintext
Id: 122
Departamento/estado: Beni
Nombre: MOXOS - CHANEQUERE
Siglas: MCH
Provincia: MOXOS
Location: 
Creado: 2024-12-13 11:21:40
```
