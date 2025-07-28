---
sidebar_position: 2
---

# Tipos de Memorándum

## Vista General
Módulo para gestionar los tipos de memorándum utilizados en el sistema financiero del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único | Numérico | 327 |
| Categoría | Clasificación principal | Texto | "Varios", "Medios Comunicación" |
| De | Remitente del memo | Texto | "CONSTRUCTORA CHARU" |
| A | Destinatario | Texto | - |
| Descripción | Propósito del memo | Texto | - |
| Estado | Situación actual | Dropdown | "Activo", "Inactivo" |
| Registrado | Fecha de creación | Timestamp | "2025-02-06 15:22:49" |

## Categorías Principales

1. **Medios Comunicación**: Para radios y medios informativos
2. **Varios**: Otros tipos de memorándum
3. **Proveedores**: Comunicaciones con contratistas
4. **Instituciones**: Correspondencia con entidades públicas

## Filtros Disponibles

### Básicos
- Por categoría
- Por remitente (campo "De")
- Por estado
- Por rango de fechas

### Avanzados
- Por palabra clave en descripción
- Por usuario registrador

## Acciones Disponibles

1. **Ver Detalle**: Información completa del memo
2. **Editar**: Modificar datos básicos
3. **Activar/Desactivar**: Cambiar estado
4. **Exportar**: Generar reporte en Excel/PDF

## Ejemplo de Registro
```plaintext
ID: 327
Categoría: Varios
De: CONSTRUCTORA CHARU
Estado: Activo
Registrado: 2025-02-06 15:22:49
```

# Tipos de Memorándum

## Vista General
Módulo para gestionar los tipos de memorándum utilizados en el sistema financiero del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único | Numérico | 327 |
| Categoría | Clasificación principal | Texto | "Varios", "Medios Comunicación" |
| De | Remitente del memo | Texto | "CONSTRUCTORA CHARU" |
| A | Destinatario | Texto | - |
| Descripción | Propósito del memo | Texto | - |
| Estado | Situación actual | Dropdown | "Activo", "Inactivo" |
| Registrado | Fecha de creación | Timestamp | "2025-02-06 15:22:49" |

## Categorías Principales

1. **Medios Comunicación**: Para radios y medios informativos
2. **Varios**: Otros tipos de memorándum
3. **Proveedores**: Comunicaciones con contratistas
4. **Instituciones**: Correspondencia con entidades públicas

## Filtros Disponibles

### Básicos
- Por categoría
- Por remitente (campo "De")
- Por estado
- Por rango de fechas

### Avanzados
- Por palabra clave en descripción
- Por usuario registrador

## Acciones Disponibles

1. **Ver Detalle**: Información completa del memo
2. **Editar**: Modificar datos básicos
3. **Activar/Desactivar**: Cambiar estado
4. **Exportar**: Generar reporte en Excel/PDF

## Ejemplo de Registro
```plaintext
ID: 327
Categoría: Varios
De: CONSTRUCTORA CHARU
Estado: Activo
Registrado: 2025-02-06 15:22:49
```

# Crear Tipo de Memorándum

## Vista General
Formulario para registrar nuevos tipos de memorándum en el sistema financiero del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Grupo**: Categoría principal
  - Ejemplo: "Medios Comunicación", "Proveedores"
- **De**: Remitente del memo
  - Ejemplo: "CONSTRUCTORA CHARU"
- **A**: Destinatario (opcional)
- **Descripción**: Propósito del memo
- **Estado**: 
  - Activo
  - Inactivo
- **Concepto**: Clasificación contable asociada

## Proceso de Creación

1. **Seleccionar grupo/categoría**
2. **Ingresar remitente (campo "De")**
3. **Completar destinatario (opcional)**
4. **Agregar descripción detallada**
5. **Definir estado inicial**
6. **Asignar concepto contable**
7. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Grupo | Selección requerida | "Seleccione un grupo" |
| De | Mín. 3 caracteres | "Remitente muy corto" |
| Descripción | Mín. 10 caracteres | "Descripción insuficiente" |

## Ejemplo de Registro
```plaintext
Grupo: Medios Comunicación
De: RADIO JIPIJAPA
A: Departamento de Comunicación
Descripción: Contratación de pauta publicitaria
Estado: Activo
Concepto: Gastos de publicidad
```

## Consideraciones
- Integración con módulos de:
  - Tesorería
  - Contabilidad
  - Correspondencia
- Genera código único automático
- Auditoría completa de operaciones