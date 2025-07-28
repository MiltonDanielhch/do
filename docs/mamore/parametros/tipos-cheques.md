---
sidebar_position: 2
---

# Gestión de Tipos de Cheques

## Vista General
Módulo para administrar las diferentes categorías o tipos de cheques utilizados para los pagos en el sistema del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único del tipo de cheque | Numérico | 11 |
| Nombre | Nombre de la categoría del cheque | Texto | "Otros", "Prestación de servicios" |
| Descripción | Detalle sobre el propósito del tipo de cheque | Texto | "pago de haberes mensuales de inversión, funcionamiento, estipendio, consultoría, etc." |
| Estado | Condición actual | Dropdown | "Activo", "Inactivo" |
| Creado | Fecha de registro | Timestamp | "2022-05-30 12:50:28" |

## Tipos de Cheques (Ejemplos)

- Otros
- Prestación de servicios
- Servicios Básicos
- Viaticos
- Vacaciones
- Judiciales
- Lactancia
- Proveedores
- Fondo en avance
- Pago de sueldo

## Filtros Disponibles

### Básicos
- Por nombre
- Por estado
- Por rango de fechas

### Avanzados
- Por descripción
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa del tipo de cheque.
2.  **Editar**: Modificar datos básicos.
3.  **Borrar**: Eliminar tipo de cheque (requiere confirmación).
4.  **Exportar**: Generar reporte en Excel/PDF.

## Ejemplo de Registro Completo
```plaintext
Id: 2
Nombre: Pago de sueldo
Descripción: pago de haberes mensuales de inversión, funcionamiento, estipendio, consultoría, etc.
Estado: Activo
Creado: 2022-02-15 12:31:32
```
## Consideraciones
- Este catálogo es fundamental para clasificar los egresos realizados mediante cheques.
- Ayuda en la generación de reportes financieros y de tesorería.
- Integración con módulos de:
  - Tesorería (Emisión de Cheques)
  - Contabilidad
  - Planillas
  - Contrataciones
- Auditoría completa de operaciones.

# Crear Nuevo Tipo de Cheque

## Vista General
Formulario para registrar nuevas categorías o tipos de cheques en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Nombre**: Nombre identificativo de la categoría del cheque.
  - Ejemplo: "Pago de sueldo", "Viáticos", "Proveedores"
- **Descripción**: Detalle sobre el propósito o uso de este tipo de cheque (opcional).
- **Estado**: Define si el tipo de cheque está activo y puede ser utilizado.
  - Activo
  - Inactivo

## Proceso de Creación

1.  **Ingresar el nombre** de la categoría del cheque.
2.  **Agregar una descripción** si es necesario.
3.  **Seleccionar el estado** inicial (generalmente "Activo").
4.  **Validar la información** ingresada.
5.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 3 caracteres, Único | "Nombre muy corto" o "Tipo de cheque ya existe" |
| Estado | Selección requerida | "Seleccione un estado" |

## Consideraciones
- La correcta categorización de los cheques es esencial para el control financiero y la generación de reportes.
- Asegúrese de que los nombres sean claros y descriptivos.
- Integración con módulos de:
  - Tesorería (Emisión de Cheques)
  - Contabilidad
  - Ejecución Presupuestaria
- Genera un registro único para cada tipo de cheque.
- Auditoría completa de operaciones.

## Ejemplo de Registro
```plaintext
Nombre: Viáticos
Descripción: Pagos correspondientes a gastos de viaje y representación.
Estado: Activo
```