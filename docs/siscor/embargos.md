---
sidebar_position: 11
---

# Embargos

## Vista General

Este módulo permite gestionar los embargos laborales del Gobierno Autónomo Departamental del Beni. Un embargo es un descuento obligatorio del salario de un trabajador por concepto de deudas (préstamos, cuotas alimentarias, etc.). El sistema permite importar, buscar, habilitar e inhabilitar embargos.

## Tablero Principal de Embargos

El tablero muestra un listado de todos los embargos registrados en el sistema.

### Funcionalidades Clave del Tablero:

- **Importar Embargos:** Botón para importar embargos desde un archivo Excel.
- **Buscar:** Campo para buscar por ID, N° documento, CI, Nombre, etc.
- **Paginación:** Controles para navegar entre las páginas de resultados.
- **Selección de Registros:** Opción para definir cuántos registros mostrar por página (10, 25, 50).
- **Eliminar Todos:** Opción para eliminar todos los registros de embargo.

### Estructura de la Tabla de Embargos:

| Columna | Descripción | Ejemplo |
|---------|-------------|---------|
| **ID** | Identificador único del registro | `1` |
| **Nro** | Número de embargo interno | `100` |
| **Nro PIET** | Número de documento PIET | `2025-001` |
| **Fecha PIET** | Fecha del documento PIET | `15/03/2025` |
| **RUT/NIT** | Número de RUT o NIT del empleador | `123456789` |
| **CI** | Cédula de identidad del trabajador | `4196168` |
| **Nombre** | Nombre completo del trabajador | `JUAN PEREZ GARCIA` |
| **Monto Embargo** | Monto total del embargo | `1500.00` |
| **Nota Embargo** | Descripción del motivo del embargo | `Préstamo Personal` |
| **Monto Levantamiento** | Monto cancelado o levantado | `0.00` |
| **Nota Levantamiento** | Descripción del levantamiento | - |
| **Estado** | Estado del embargo (Activo/Inactivo) | `Activo` |
| **Acciones** | Botones de operaciones | Habilitar/Inhabilitar |

## Importar Embargos desde Excel

Esta funcionalidad permite cargar masivamente embargos desde un archivo Excel.

### Formato del Archivo Excel:

El archivo debe contener las siguientes columnas:

| Columna | Descripción |
|---------|-------------|
| **nro** | Número de embargo |
| **nroPiet** | Número de documento PIET |
| **fechaPiet** | Fecha del documento PIET |
| **rutNit** | RUT/NIT del empleador |
| **ci** | Cédula de identidad del trabajador |
| **nombre** | Nombre completo del trabajador |
| **montoEmbargo** | Monto total del embargo |
| **notaEmbargo** | Descripción del motivo |

### Proceso de Importación:

1. Hacer clic en el botón **"Importar Embargos"**
2. Seleccionar el archivo Excel desde el equipo
3. Confirmar la importación
4. El sistema asignará un número de importación automático

## Gestión de Estados

### Habilitar/Inhabilitar

Cada embargo puede estar en uno de dos estados:

| Estado | Descripción |
|--------|-------------|
| **Activo** | El embargo está vigente y debe aplicarse el descuento |
| **Inhabilitado** | El embargo está temporalmente desactivado |

### Acciones Disponibles:

- **Habilitar:** Activar un embargo que estaba deshabilitado
- **Inhabilitar:** Desactivar un embargo temporalmente

### Levantar un Embargo

Para levantar (cancelar) un embargo, se debe ingresar:
- **Monto de Levantamiento:** Monto que se está cancelando
- **Nota de Levantamiento:** Descripción o motivo del levantamiento

## Búsqueda Avanzada

El sistema permite buscar embargos por múltiples campos:

- ID del registro
- Número de embargo
- Número PIET
- RUT/NIT
- Cédula de Identidad (CI)
- Nombre del trabajador
- Nota/Observación del embargo

## Consideraciones

- Los embargos se importan desde archivos Excel proporcionados por el área de Recursos Humanos
- Cada importación recibe un número secuencial para trazabilidad
- El campo "status" determina si el embargo está vigente (1) o no (0)
- Este módulo se integra con el módulo de **Planillas** para la aplicación automática de descuentos
- Es importante mantener actualizados los estados de los embargos para evitar descuentos indebidos