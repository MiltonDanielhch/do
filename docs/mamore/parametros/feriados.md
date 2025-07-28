---
sidebar_position: 2
---

# Gestión de Feriados

## Vista General
Módulo para administrar el calendario de feriados nacionales y departamentales reconocidos por el Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único del feriado | Numérico | 1 |
| Nombre | Nombre del feriado | Texto | "Año nuevo", "Día de la Independencia" |
| Descripción | Detalle adicional sobre el feriado (opcional) | Texto | - |
| Día | Día del mes en que cae el feriado | Numérico | 1, 22, 6 |
| Mes | Mes en que cae el feriado | Texto | "Enero", "Marzo", "Agosto" |
| Año | Año específico (si aplica, para feriados no recurrentes) | Numérico | - |
| Habilitado | Indica si el feriado está activo en el sistema | Booleano (Sí/No) | "Sí" |
| Registrado | Fecha de registro del feriado en el sistema | Timestamp | "2023-11-24 13:53:33" |

## Feriados Registrados (Ejemplos Fijos Nacionales)

- Año nuevo (1 de Enero)
- Estado plurinacional (22 de Marzo - *Nota: Usualmente es 22 de Enero*)
- Día del trabajador (1 de Mayo)
- Año Nuevo aymara o andino (21 de Junio)
- Día de la Independencia (6 de Agosto)
- Día de los Difuntos (2 de Noviembre)
- Navidad (25 de Diciembre)
- *Otros feriados móviles (Carnaval, Corpus Christi, Viernes Santo) o departamentales deben añadirse.*

## Filtros Disponibles

### Básicos
- Por nombre
- Por mes
- Por año (si aplica)
- Por estado (Habilitado/Deshabilitado)
- Por rango de fechas de registro

### Avanzados
- Por descripción
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa del feriado.
2.  **Editar**: Modificar datos (nombre, fecha, estado).
3.  **Habilitar/Deshabilitar**: Activar o desactivar el feriado.
4.  **Exportar**: Generar reporte en Excel/PDF.

## Ejemplo de Registro Completo
```plaintext
Id: 1
Nombre: Año nuevo
Descripción: 
Día: 1
Mes: Enero
Año: 
Habilitado: Sí
Registrado: 2023-11-24 13:53:33
```
## Consideraciones
- Este catálogo es esencial para la gestión de asistencia, cálculo de planillas y plazos administrativos.
- Feriados móviles (como Carnaval, Viernes Santo, Corpus Christi) pueden requerir registro anual o una lógica específica.
- Feriados departamentales (ej. Aniversario del Beni) deben ser añadidos.
- Mantener la lista actualizada según decretos supremos es crucial.
- Integración con módulos de:
  - Recursos Humanos (Asistencia, Vacaciones)
  - Planillas (Cálculo de días trabajados)
  - Trámites (Cómputo de plazos)
- Auditoría completa de operaciones.

# Crear Nuevo Feriado

## Vista General
Formulario para registrar nuevos feriados nacionales, departamentales o específicos en el calendario del sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Nombre**: Nombre oficial o descriptivo del feriado.
  - Ejemplo: "Año Nuevo", "Aniversario del Beni", "Carnaval"
- **Descripción**: Detalle adicional sobre el feriado (opcional).
- **Día**: Día del mes en que cae el feriado (1-31).
- **Mes**: Mes del año en que cae el feriado (Enero-Diciembre).
- **Año**: Año específico si el feriado ocurre solo una vez o es móvil y se define anualmente. Dejar en blanco para feriados fijos anuales.
  - Ejemplo: 2024 (para Carnaval 2024)
- **Habilitado**: Indica si el feriado debe considerarse activo en el sistema.
  - Sí / No

## Proceso de Creación

1.  **Ingresar el nombre** del feriado.
2.  **Agregar una descripción** si es necesario.
3.  **Especificar el Día y Mes**.
4.  **Ingresar el Año** solo si el feriado no es recurrente anualmente en la misma fecha o si es un feriado móvil definido para ese año específico.
5.  **Seleccionar si está Habilitado** (generalmente "Sí").
6.  **Validar la información** ingresada.
7.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 3 caracteres | "Nombre muy corto" |
| Día | Numérico (1-31), Válido para el mes | "Día inválido" |
| Mes | Selección requerida | "Seleccione un mes" |
| Año | Numérico (4 dígitos, opcional) | "Año inválido" |
| Habilitado | Selección requerida | "Seleccione si está habilitado" |

## Ejemplo de Registro

**Feriado Fijo Anual:**
```plaintext
Nombre: Día de la Independencia
Descripción: Aniversario de la independencia de Bolivia.
Día: 6
Mes: Agosto
Año: 
Habilitado: Sí
```
## Consideraciones
- Es crucial registrar correctamente los feriados fijos y añadir anualmente los feriados móviles (Carnaval, Viernes Santo, Corpus Christi) según el calendario oficial.
- No olvidar los feriados departamentales (ej. Aniversario del Beni).
- Este catálogo impacta directamente en cálculos de asistencia, planillas y plazos administrativos.
- Integración con módulos de:
  - Recursos Humanos
  - Planillas
  - Trámites Administrativos
- Genera un registro único para cada instancia de feriado (un feriado fijo anual tendrá un solo registro sin año, un feriado móvil tendrá un registro por cada año).
- Auditoría completa de operaciones.