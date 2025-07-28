---
sidebar_position: 1
---

# Categorías de Memorándum

## Vista General
Módulo para gestionar las categorías de memorándum utilizadas en el sistema financiero del Gobierno Autónomo Departamental del Beni.

## Campos Principales

### Información Básica
- **Nombre de categoría**: Identificador único (ej: "Pagos a proveedores")
- **Código**: Referencia alfanumérica (ej: "PROV-001")
- **Tipo**:
  - Ingreso
  - Egreso
  - Transferencia
- **Descripción**: Detalle del propósito

### Configuraciones Adicionales
- **Área responsable**: Unidad administrativa
- **Requiere aprobación**: Sí/No
- **Nivel de aprobación**: Cantidad de firmas requeridas

## Proceso de Creación

1. **Ingresar nombre y código**
2. **Seleccionar tipo de movimiento**
3. **Definir configuración de aprobación**
4. **Agregar descripción detallada**
5. **Asignar área responsable**
6. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Único en sistema | "Categoría ya existe" |
| Código | Formato XXX-999 | "Formato inválido" |
| Descripción | Mín. 20 caracteres | "Descripción muy breve" |

## Ejemplo de Registro
```plaintext
Nombre: Pagos a proveedores
Código: PROV-001
Tipo: Egreso
Descripción: Pagos a proveedores registrados por bienes y servicios
Área: Finanzas
Aprobación: Sí (2 firmas)
```
## Consideraciones
- Integración con módulos de:
  - Tesorería
  - Contabilidad
  - Proveedores
- Genera código de auditoría automático
- Permite adjuntar documentos soporte

# Crear Categoría de Memorándum

## Vista General
Formulario para registrar nuevas categorías de memorándum en el sistema financiero del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Nombre**: Identificador único de la categoría
  - Ejemplo: "Pagos a proveedores"
- **Estado**: 
  - Activo
  - Inactivo

### Información Adicional (Opcional)
- **Código**: Referencia alfanumérica
- **Descripción**: Detalle del propósito
- **Área responsable**: Unidad administrativa

## Proceso de Creación

1. **Ingresar nombre de categoría**
2. **Definir estado inicial**
3. **Completar información adicional** (opcional)
4. **Validar información**
5. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 5 caracteres | "Nombre muy corto" |
| Nombre | Único en sistema | "Categoría ya existe" |
| Estado | Selección requerida | "Seleccione estado" |


## Consideraciones
- Las categorías se integran con:
  - Módulo de Tesorería
  - Sistema de Contabilidad
  - Gestión Documental
- Genera código único automático
- Auditoría completa de operaciones

## Ejemplo de Registro
```plaintext
Nombre: Pagos a proveedores
Estado: Activo
Código: PROV-001
Descripción: Pagos a proveedores registrados
Área: Finanzas
```