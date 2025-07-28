---
sidebar_position: 2
---

# Gestión de Tipos de Beneficiario

## Vista General
Módulo para administrar los diferentes tipos de personas o entidades externas (beneficiarios) con los que interactúa el Gobierno Autónomo Departamental del Beni, principalmente para fines de pagos o registros.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único del tipo de beneficiario | Numérico | 4 |
| Nombre | Nombre del tipo de beneficiario | Texto | "Funcionario", "Proveedor" |
| Detalles | Información adicional sobre el tipo | Texto | - |
| Estado | Condición actual del tipo | Dropdown | "Activo", "Inactivo" |
| Creado | Fecha de registro | Timestamp | "2022-09-21 14:50:00" |

## Tipos de Beneficiarios Registrados

1.  **Funcionario**: Personal interno de la institución (para pagos específicos fuera de planilla, como viáticos, fondos en avance, etc.).
2.  **Prestador de servicio**: Personas o empresas que brindan servicios específicos.
3.  **Proveedor**: Entidades que suministran bienes o productos.
4.  **Sin clasificar**: Categoría general para casos no especificados.

## Filtros Disponibles

### Básicos
- Por nombre
- Por estado
- Por rango de fechas

### Avanzados
- Por detalles
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa del tipo de beneficiario.
2.  **Editar**: Modificar datos básicos.
3.  **Exportar**: Generar reporte en Excel/PDF.

## Ejemplo de Registro Completo
```plaintext
Id: 4
Nombre: Funcionario
Detalles: 
Estado: Activo
Creado: 2022-09-21 14:50:00
```
## Consideraciones
- Este catálogo ayuda a clasificar a las personas o entidades externas para diversos procesos, especialmente pagos y contrataciones.
- Permite diferenciar entre empleados, proveedores, consultores, etc.
- Integración con módulos de:
  - Tesorería (Pagos, Cheques)
  - Contrataciones
  - Recursos Humanos (para diferenciar de pagos regulares de planilla)
- Auditoría completa de operaciones.

# Crear Nuevo Tipo de Beneficiario

## Vista General
Formulario para registrar nuevos tipos de beneficiarios (personas o entidades externas) en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Nombre**: Nombre identificativo del tipo de beneficiario.
  - Ejemplo: "Proveedor", "Prestador de servicio", "Funcionario"
- **Detalles**: Información adicional o aclaratoria sobre este tipo de beneficiario (opcional).
- **Estado**: Define si este tipo de beneficiario está activo y puede ser utilizado en los registros.
  - Activo
  - Inactivo

## Proceso de Creación

1.  **Ingresar el nombre** del tipo de beneficiario.
2.  **Agregar detalles** adicionales si es necesario.
3.  **Seleccionar el estado** inicial (generalmente "Activo").
4.  **Validar la información** ingresada.
5.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 3 caracteres, Único | "Nombre muy corto" o "Tipo de beneficiario ya existe" |
| Estado | Selección requerida | "Seleccione un estado" |

## Ejemplo de Registro
```plaintext
Nombre: Proveedor
Detalles: Entidades o personas que suministran bienes a la institución.
Estado: Activo
```
## Consideraciones
- Este catálogo ayuda a clasificar correctamente a las personas o entidades con las que interactúa la institución, especialmente para pagos.
- Asegúrese de que los nombres sean claros y reflejen el propósito del tipo.
- Integración con módulos de:
  - Tesorería (Registro de Beneficiarios para Pagos)
  - Contrataciones
  - Cuentas por Pagar
- Genera un registro único para cada tipo de beneficiario.
- Auditoría completa de operaciones.