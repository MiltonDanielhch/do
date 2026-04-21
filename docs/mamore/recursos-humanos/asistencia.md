---
sidebar_position: 5
---

# Control de Asistencia (Attendances)

## Vista General

Este módulo gestiona el registro y control de asistencia de los funcionarios del Gobierno Autónomo Departamental del Beni. Se integra con el sistema biométrico para registrar marcaciones.

## Cómo Acceder

**Ruta:** `admin/attendances`

## Funcionalidades Principales

### 1. Registro de Asistencia

**Ruta:** `admin/attendances (resource)`

El sistema registra:
- Fecha y hora de entrada
- Fecha y hora de salida
- Funcionario que marca
- Tipo de marcación

### 2. Generación de Planillas

**Ruta:** `POST admin/attendances/generate`

Permite generar planillas de asistencia para un período determinado.

### 3. Gestión de Ausencias

**Ruta:** `POST admin/attendances/absences`

Permite registrar y gestionar las ausencias de los funcionarios.

## Tabla de Asistencia

| Campo | Descripción |
|-------|-------------|
| **Funcionario** | Nombre del funcionario |
| **Fecha** | Día de asistencia |
| **Entrada** | Hora de ingreso |
| **Salida** | Hora de salida |
| **Horas Trabajadas** | Total de horas |
| **Estado** | Asistencia, ausencia, permiso |

## Estados de Asistencia

| Estado | Descripción |
|--------|-------------|
| Presente | Asistió normalmente |
| Ausente | No asistió |
| Permiso | Tiene permiso registrado |
| Tardanza | Llegó tarde |
| Abandonó | Salió antes de hora |

## Integración con Otros Módulos

- **Schedules:** Utiliza los horarios definidos
- **People:** Información de funcionarios
- **Contract:** Contratos laborales
- **Planillas:** Cálculo de descuentos por ausencias

## Permisos de Asistencia

Gestión de tipos de permisos disponibles.

**Ruta:** `admin/attendances-permits`

### Tipos de Permiso
- Permiso por enfermedad
- Permiso laboral
- Permiso personal
- others

## Consideraciones

- El sistema se integra con biométrico
- Las ausencias afectan el cálculo de planillas
- Los permisos deben ser aprobados previamente
- Existe control de horarios por contrato