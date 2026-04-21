---
sidebar_position: 7
---

# Horarios y Biométrico (Schedules)

## Vista General

Este módulo permite gestionar los horarios de trabajo de los funcionarios y su integración con el sistema biométrico. Define los turnos y horarios que se aplicarán para el control de asistencia.

## Cómo Acceder

**Ruta:** `admin/schedules/create`

## Funcionalidades Principales

### 1. Crear Horario

Permite definir un nuevo horario de trabajo.

**Campos del formulario:**

| Campo | Descripción | Requerido |
|-------|-------------|-----------|
| **Nombre** | Nombre identificador del horario | Sí |
| **Descripción** | Descripción del horario | No |
| **Días** | Número de días del ciclo | Sí |
| **Entrada 1** | Hora de ingreso turno 1 | Sí |
| **Salida 1** | Hora de salida turno 1 | Sí |
| **Entrada 2** | Hora de ingreso turno 2 (opcional) | No |
| **Salida 2** | Hora de salida turno 2 (opcional) | No |

### 2. Editar Horario

**Ruta:** `GET admin/schedules/{id}/edit`

Permite modificar un horario existente.

### 3. Actualizar Horario

**Ruta:** `PUT admin/schedules/{id}`

Guarda los cambios del horario.

### 4. Asignar Horarios a Funcionarios

**Rutas:**
- `GET admin/schedules/{id}/assignments` - Ver asignaciones
- `GET admin/schedules/{id}/assignments/create` - Crear asignación
- `POST admin/schedules/{id}/assignments/store` - Guardar asignación

### 5. Gestión de Asignaciones

**Rutas:**
- `POST admin/schedules/assignments/update` - Actualizar asignación
- `DELETE admin/schedules/assignments/{id}/delete` - Eliminar asignación

## Estructura de Datos

### Modelos Relacionados

| Modelo | Descripción |
|--------|-------------|
| `Schedule` | Datos del horario |
| `ScheduleDetail` | Detalles de horas por día |
| `ContractSchedule` | Asignación de horarios a contratos |

### Tipos de Horario

| Tipo | Descripción |
|------|-------------|
| Horario Continuo | Un solo turno (ej. 8:00 - 16:00) |
| Horario Partido | Dos turnos (ej. mañana y tarde) |
| Horario Rotativo | Ciclos de días específicos |

## Integración con Otros Módulos

- **Attendances:** Utilizado para validar asistencia
- **People:** Asignación de horarios a personas
- **Contracts:** Horario asociado al contrato

## Casos de Uso

### 1. Horario Normal
Lunes a viernes, 8:00 a 16:00

### 2. Horario con Refrigerio
Lunes a viernes, 8:00-12:00 y 14:00-18:00

### 3. Horario Personalizado
Ciclos de 7 días con diferentes turnos

## Consideraciones

- Un horario puede tener uno o dos turnos por día
- Los horarios se asignan a nivel de contrato
- El sistema biométrico usa estos horarios para validar marcaciones