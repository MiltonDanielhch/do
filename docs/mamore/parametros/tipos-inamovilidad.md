---
sidebar_position: 2
---

# Gestión de Tipos de Inamovilidad

## Vista General
Módulo para administrar los diferentes tipos de inamovilidad laboral reconocidos para el personal del Gobierno Autónomo Departamental del Beni, según la normativa vigente.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único del tipo de inamovilidad | Numérico | 5 |
| Nombre | Nombre del tipo de inamovilidad | Texto | "Tutor Padre o Madre (Discapacidad)" |
| Descripción | Detalle sobre el tipo de inamovilidad | Texto | - |
| Estado | Condición actual del tipo | Dropdown | "activo", "inactivo" |
| Creado el | Fecha de registro | Timestamp | "2022-11-07 13:59:57" |

## Tipos de Inamovilidad Registrados

1.  **Tutor Padre o Madre (Discapacidad)**: Inamovilidad por ser tutor de una persona con discapacidad.
2.  **Persona con Discapacidad PDC (funcionario)**: Inamovilidad por ser el propio funcionario una persona con discapacidad.
3.  **Maternidad/Paternidad (Lactancia)**: Inamovilidad durante el periodo de gestación y lactancia.
4.  **Tutoria Judicial / Interdicto Judicial**: Inamovilidad por designación judicial como tutor.

## Filtros Disponibles

### Básicos
- Por nombre
- Por estado
- Por rango de fechas

### Avanzados
- Por descripción
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa del tipo de inamovilidad.
2.  **Editar**: Modificar datos básicos.
3.  **Exportar**: Generar reporte en Excel/PDF.

## Ejemplo de Registro Completo
```plaintext
Id: 5
Nombre: Tutor Padre o Madre (Discapacidad)
Descripción: 
Estado: activo
Creado el: 2022-11-07 13:59:57
```
## Consideraciones
- Este catálogo es fundamental para la gestión de Recursos Humanos y el cumplimiento de la normativa laboral.
- Debe mantenerse actualizado según las leyes y decretos vigentes.
- Integración directa con el módulo de:
  - Recursos Humanos (Registro de Personal, Contratos)
  - Planillas
- Auditoría completa de operaciones.


# Crear Nuevo Tipo de Inamovilidad

## Vista General
Formulario para registrar nuevos tipos de inamovilidad laboral en el sistema del Gobierno Autónomo Departamental del Beni, conforme a la normativa vigente.

## Campos Obligatorios

### Información Básica
- **Nombre**: Nombre descriptivo del tipo de inamovilidad.
  - Ejemplo: "Maternidad/Paternidad (Lactancia)", "Persona con Discapacidad PDC (funcionario)"
- **Descripción**: Detalle adicional sobre las condiciones o alcance del tipo de inamovilidad (opcional).
- **Estado**: Define si este tipo de inamovilidad está activo y puede ser asignado al personal.
  - activo
  - inactivo

## Proceso de Creación

1.  **Ingresar el nombre** del tipo de inamovilidad.
2.  **Agregar una descripción** si es necesario para clarificar.
3.  **Seleccionar el estado** inicial (generalmente "activo").
4.  **Validar la información** ingresada.
5.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 5 caracteres, Único | "Nombre muy corto" o "Tipo de inamovilidad ya existe" |
| Estado | Selección requerida | "Seleccione un estado" |

## Consideraciones
- Este catálogo es crucial para la gestión de Recursos Humanos y el cumplimiento de las leyes laborales bolivianas.
- Es importante mantener esta lista actualizada según las disposiciones legales.
- La asignación de estos tipos se realiza en el módulo de Recursos Humanos.
- Integración directa con:
  - Recursos Humanos (Gestión de Contratos, Datos Personales)
- Genera un registro único para cada tipo de inamovilidad.
- Auditoría completa de operaciones.

## Ejemplo de Registro
```plaintext
Nombre: Maternidad/Paternidad (Lactancia)
Descripción: Inamovilidad laboral durante el periodo de gestación y hasta un año después del parto.
Estado: activo
```
