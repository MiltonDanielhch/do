---
sidebar_position: 2
---

# Gestión de Tipos de Permisos de Asistencia

## Vista General
Módulo para administrar los diferentes tipos de permisos que pueden ser solicitados o registrados para justificar ausencias o salidas del personal en el sistema del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo (Ilustrativo) |
|-------|-------------|------|---------|
| Id | Identificador único del tipo de permiso | Numérico | 1 |
| Nombre | Nombre del tipo de permiso | Texto | "Permiso Médico" |
| Cantidad de días | Duración máxima estándar en días (puede ser 0 o decimal para horas) | Numérico/Decimal | 3 |
| Descripción | Detalle sobre el tipo de permiso, condiciones, etc. | Texto | "Permiso por enfermedad con respaldo médico" |
| Estado | Condición actual del tipo de permiso | Dropdown | "Activo", "Inactivo" |
| Registrado | Fecha de registro del tipo de permiso | Timestamp | "2024-01-15 10:00:00" |

*Nota: Actualmente no hay datos registrados en la tabla.*

## Tipos de Permisos (Ejemplos Potenciales)

- Permiso Médico (con/sin goce de haberes)
- Comisión Oficial
- Asuntos Personales (con/sin goce de haberes)
- Licencia por Luto
- Licencia por Matrimonio
- Permiso por Horas
- Permiso Sindical
- Declaratoria en Comisión

## Filtros Disponibles

### Básicos
- Por nombre
- Por cantidad de días
- Por estado
- Por rango de fechas de registro

### Avanzados
- Por descripción
- Por usuario registrador

## Acciones Disponibles

1.  **Crear**: Añadir un nuevo tipo de permiso (generalmente a través de un botón/enlace separado).
2.  **Ver Detalle**: Información completa del tipo de permiso.
3.  **Editar**: Modificar datos básicos (nombre, días, descripción, estado).
4.  **Borrar/Desactivar**: Eliminar o marcar como inactivo el tipo de permiso.
5.  **Exportar**: Generar reporte en Excel/PDF.

## Ejemplo de Registro Completo (Ilustrativo)
```plaintext
Id: 1
Nombre: Permiso Médico
Cantidad de días: 3
Descripción: Permiso por enfermedad con respaldo médico. Requiere certificado.
Estado: Activo
Registrado: 2024-01-15 10:00:00 
```
## Consideraciones
- Este catálogo es fundamental para la gestión de asistencia y el control de ausentismo del personal.
- Es necesario definir claramente cada tipo de permiso, su duración estándar (si aplica) y si requiere o no goce de haberes (esto último podría gestionarse en el módulo de solicitud de permisos o planillas).
- Debe alinearse con el reglamento interno de personal y la normativa laboral vigente.
- Integración con módulos de:
  - Recursos Humanos (Solicitud y Aprobación de Permisos, Control de Asistencia)
  - Planillas (Cálculo de días trabajados/descuentos)
- Auditoría completa de operaciones.

# Crear Nuevo Tipo de Permiso de Asistencia

## Vista General
Formulario para registrar nuevos tipos de permisos de asistencia en el sistema del Gobierno Autónomo Departamental del Beni, que luego podrán ser utilizados por el personal para justificar ausencias o salidas.

## Campos Obligatorios

### Información Básica
- **Nombre**: Nombre descriptivo y único para el tipo de permiso.
  - Ejemplo: "Permiso Médico", "Comisión Oficial", "Licencia por Luto"
- **Cantidad de días**: Duración estándar o máxima permitida para este tipo de permiso, expresada en días. Puede ser un número entero o decimal (ej. 0.5 para medio día). Ingresar 0 si la duración es variable o se define por horas en la solicitud.
  - Ejemplo: 3 (para Permiso Médico), 1 (para Asuntos Personales), 0 (para Permiso por Horas)
- **Descripción**: Detalles adicionales sobre el permiso, como condiciones, requerimientos (ej. certificado médico), o si incluye goce de haberes (opcional).
- **Estado**: Define si este tipo de permiso está activo y puede ser seleccionado al solicitar un permiso.
  - Activo
  - Inactivo

*Nota: El campo "User Id" parece ser información interna del sistema y no un dato a ingresar manualmente para definir el tipo de permiso.*

## Proceso de Creación

1.  **Ingresar el Nombre** del tipo de permiso.
2.  **Especificar la Cantidad de días** estándar o máxima (usar 0 si es variable o por horas).
3.  **Agregar una Descripción** detallada si es necesario.
4.  **Seleccionar el Estado** inicial (generalmente "Activo").
5.  **Validar la información** ingresada.
6.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 3 caracteres, Único | "Nombre muy corto" o "Tipo de permiso ya existe" |
| Cantidad de días | Numérico (>= 0) | "Cantidad de días inválida" |
| Estado | Selección requerida | "Seleccione un estado" |

## Ejemplo de Registro
```plaintext
Nombre: Permiso Médico
Cantidad de días: 3
Descripción: Permiso por enfermedad justificada. Requiere presentación de certificado médico. Con goce de haberes según normativa.
Estado: Activo
```
## Consideraciones
- La correcta definición de estos tipos es crucial para la gestión de asistencia y el cálculo de planillas.
- Asegúrese de que los tipos de permiso creados se ajusten al reglamento interno de personal y a la legislación laboral vigente.
- La "Cantidad de días" aquí definida puede ser un valor por defecto o un límite máximo, dependiendo de cómo se implemente en el módulo de solicitud de permisos.
- Integración con módulos de:
  - Recursos Humanos (Solicitud/Aprobación de Permisos, Control de Asistencia)
  - Planillas (Cálculo de días trabajados/descuentos)
- Genera un registro único para cada tipo de permiso.
- Auditoría completa de operaciones.