---
sidebar_position: 2
---

# Gestión de Activos Fijos

## Vista General
Módulo para administrar los activos fijos del Gobierno Autónomo Departamental del Beni, permitiendo el seguimiento y control de los bienes físicos.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| ID | Identificador único del activo | Numérico | 1172 |
| Código | Código de inventario | Texto | "PB-2744-SD" |
| Categoría | Clasificación del activo | Texto | "EQUIPO DE COMPUTACION" |
| Descripción | Detalle del activo | Texto | "CPU COLOR NEGRO MARCA SURE..." |
| Custodio | Persona responsable | Texto | "Ninguno" |
| Imagen | Fotografía del activo | Imagen | "image" |
| Estado | Condición actual | Dropdown | "Malo", "Regular" |
| Registrado por | Usuario que ingresó el activo | Texto | "ALAN DANIEL" |
| Fecha de Registro | Fecha de ingreso al sistema | Fecha | "12/feb/2025 10:40" |

## Categorías Principales

1. **Equipo de Computación**: Incluye computadoras, impresoras, etc.
2. **Muebles**: Escritorios, sillas, etc.
3. **Vehículos**: Automóviles, motocicletas
4. **Maquinaria**: Equipos industriales

## Filtros Disponibles

### Básicos
- Por categoría
- Por estado
- Por custodio
- Por rango de fechas

### Avanzados
- Por código de inventario
- Por descripción
- Por usuario registrador

## Acciones Disponibles

1. **Ver Detalle**: Información completa del activo
2. **Editar**: Modificar datos básicos
3. **Actualizar Estado**: Cambiar condición del activo
4. **Exportar**: Generar reporte en Excel/PDF

## Ejemplo de Registro Completo
```plaintext
ID: 1172
Código: PB-2744-SD
Categoría: EQUIPO DE COMPUTACION
Descripción: CPU COLOR NEGRO MARCA SURE CON TARGETA MADRE ASROCK H81-VG4 PROCESADOR CORE I3 DE 3RA GENERACION
Custodio: Ninguno
Estado: Malo
Registrado por: ALAN DANIEL
Fecha de Registro: 12/feb/2025 10:40
```
## Consideraciones
- Los activos deben ser revisados periódicamente
- Integración con módulos de:
  - Contabilidad
  - Mantenimiento
  - Inventario
- Auditoría completa de operaciones
- Validez de documentos por 5 años


# Crear Nuevo Activo Fijo

## Vista General
Formulario para registrar nuevos activos fijos en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Sección**: Área administrativa responsable
- **Grupo**: Categoría principal del activo
  - Ejemplo: "Equipo de Computación", "Muebles"
- **Código**: Código de inventario (ej: "PB-0001")
- **Código del SIAF**: Código en el Sistema Integrado de Administración Financiera
- **Código interno**: Identificador único interno
- **N° Serie**: Número de serie del activo

### Detalles del Activo
- **Etiquetas**: Palabras clave asociadas
- **Descripción**: Descripción detallada del activo
- **Precio de compra**: Valor original de adquisición
- **Precio actual**: Valor de mercado actual
- **Imágenes**: Fotografías del activo (opcional)
- **Estado**: Condición actual
  - Nuevo
  - Bueno
  - Regular
  - Malo

### Información Adicional
- **Observaciones**: Notas relevantes sobre el activo

## Proceso de Registro

1. **Seleccionar sección y grupo**
2. **Completar códigos y número de serie**
3. **Agregar etiquetas y descripción**
4. **Ingresar precios de compra y actual**
5. **Subir imágenes (opcional)**
6. **Definir estado inicial**
7. **Agregar observaciones (opcional)**
8. **Validar información**
9. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Código | Único en sistema | "Código ya existe" |
| N° Serie | Mín. 8 caracteres | "Número de serie muy corto" |
| Precio | > 0 Bs. | "El precio debe ser positivo" |

## Ejemplo de Registro
```plaintext
Sección: Tecnología
Grupo: Equipo de Computación
Código: PB-0001
Código SIAF: TEC-001
Código interno: INT-123
N° Serie: 123456789
Etiquetas: Computadora, Negro, Sure
Descripción: CPU color negro marca Sure con tarjeta madre ASRock H81-VG4, procesador Core i3 de 3ra generación
Precio de compra: 5,000.00 Bs.
Precio actual: 4,500.00 Bs.
Estado: Bueno
Observaciones: Incluye garantía de 1 año

## Consideraciones
- Integración con módulos de:
  - Contabilidad
  - Mantenimiento
  - Inventario
- Genera código único automático
- Auditoría completa de operaciones
- Validez de documentos por 5 años