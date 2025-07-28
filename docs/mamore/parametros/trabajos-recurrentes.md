---
sidebar_position: 2
---

# Gestión de Tipos de Mantenimiento de Activos (Trabajos Recurrentes)

## Vista General
Módulo para administrar los diferentes tipos de trabajos de mantenimiento o tareas recurrentes que se realizan sobre los activos (principalmente tecnológicos) del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único del tipo de trabajo | Numérico | 14 |
| Categoría | Agrupación general del tipo de trabajo | Texto | "Configuración", "Impresoras", "Limpieza" |
| Nombre | Nombre específico del trabajo/tarea | Texto | "ACCESO A INTERNET", "LIMPIEZA DE CABEZALES" |
| Descripción | Detalle adicional sobre el trabajo (opcional) | Texto | - |
| Estado | Condición actual del tipo de trabajo | Dropdown | "Activo", "Inactivo" |
| Registrado | Fecha de registro del tipo de trabajo | Timestamp | "2023-12-15 12:05:36" |

## Categorías y Tipos de Trabajos (Ejemplos)

- **Configuración**:
    - ACCESO A INTERNET
    - IMPRESORAS EN RED
    - IMPRESORAS COMPARTIDAS
    - CARPETA COMPARTIDAS
- **Impresoras**:
    - LIMPIEZA DE CABEZALES
- **Limpieza**:
    - LIMPIEZA COMPLETA DE PC
- **Otros**:
    - ASESORAMIENTO EN PAQUETES DE OFIMATICA
- **Mantenimiento**:
    - CORRECION DE ERRORES DEL DISCO DURO
- **Instalación**:
    - ACTIVACION DE OFFICE
    - ACTIVACION WINDOWS

## Filtros Disponibles

### Básicos
- Por categoría
- Por nombre
- Por estado
- Por rango de fechas

### Avanzados
- Por descripción
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa del tipo de trabajo.
2.  **Editar**: Modificar datos básicos (categoría, nombre, descripción, estado).
3.  **Borrar/Desactivar**: Eliminar o marcar como inactivo el tipo de trabajo.
4.  **Exportar**: Generar reporte en Excel/PDF.

## Ejemplo de Registro Completo
```plaintext
Id: 14
Categoría: Configuración
Nombre: ACCESO A INTERNET
Descripción: 
Estado: Activo
Registrado: 2023-12-15 12:05:36 
```

## Consideraciones
- Este catálogo es fundamental para registrar y categorizar las tareas de soporte técnico y mantenimiento de activos.
- Ayuda a estandarizar los tipos de servicios ofrecidos por la unidad de sistemas o mantenimiento.
- Puede utilizarse para generar estadísticas sobre los trabajos más frecuentes.
- Integración con módulos de:
  - Gestión de Activos Fijos
  - Mesa de Ayuda / Sistema de Tickets
  - Inventario Tecnológico
- Auditoría completa de operaciones.


# Crear Nuevo Tipo de Mantenimiento de Activo (Trabajo Recurrente)

## Vista General
Formulario para registrar nuevos tipos de trabajos de mantenimiento o tareas recurrentes aplicables a los activos (principalmente tecnológicos) en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Categoría**: Selección de la agrupación general a la que pertenece el trabajo.
  - Ejemplo: "Configuración", "Instalación", "Mantenimiento", "Limpieza"
- **Nombre**: Nombre específico y descriptivo del trabajo o tarea.
  - Ejemplo: "ACCESO A INTERNET", "LIMPIEZA COMPLETA DE PC", "ACTIVACION WINDOWS"
- **Descripción**: Detalle adicional sobre el trabajo, pasos involucrados o propósito (opcional).
- **Estado**: Define si este tipo de trabajo está activo y puede ser seleccionado en los registros de mantenimiento.
  - Activo
  - Inactivo

## Proceso de Creación

1.  **Seleccionar la Categoría** adecuada de la lista desplegable.
2.  **Ingresar el Nombre** específico del trabajo recurrente.
3.  **Agregar una Descripción** si es necesario para mayor claridad.
4.  **Seleccionar el Estado** inicial (generalmente "Activo").
5.  **Validar la información** ingresada.
6.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Categoría | Selección requerida | "Seleccione una categoría" |
| Nombre | Mín. 5 caracteres, Único dentro de la categoría | "Nombre muy corto" o "Este trabajo ya existe en la categoría" |
| Estado | Selección requerida | "Seleccione un estado" |

## Ejemplo de Registro
```plaintext
Categoría: Instalación
Nombre: INSTALACION DE ANTIVIRUS CORPORATIVO
Descripción: Proceso de instalación y configuración del antivirus estándar de la institución.
Estado: Activo
```

## Consideraciones
- Este catálogo permite estandarizar y clasificar las tareas de soporte y mantenimiento.
- Facilita el registro de actividades en módulos de mesa de ayuda o gestión de activos.
- Una buena categorización y nomenclatura ayuda a generar reportes útiles sobre el mantenimiento de activos.
- Integración con módulos de:
  - Gestión de Activos Fijos
  - Mesa de Ayuda / Sistema de Tickets
  - Inventario Tecnológico
- Genera un registro único para cada tipo de trabajo.
- Auditoría completa de operaciones.