---
sidebar_position: 2
---

# Gestión de Tipos de AFP

## Vista General
Módulo para administrar los tipos de Administradoras de Fondos de Pensiones (AFP) del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único del tipo de AFP | Numérico | 3 |
| Nombre | Nombre de la AFP | Texto | "Gestora" |
| Descripción | Detalle sobre la AFP | Texto | - |
| Estado | Condición actual | Dropdown | "Activo", "Inactivo" |
| Registrado | Fecha de registro | Timestamp | "2022-11-21 13:37:04" |

## Tipos de AFP

1. **Gestora**: Nueva administradora de fondos
2. **BBVA Previsión**: Administradora tradicional
3. **Futuro**: Administradora de fondos de pensiones

## Filtros Disponibles

### Básicos
- Por nombre
- Por estado
- Por rango de fechas

### Avanzados
- Por descripción
- Por usuario registrador

## Acciones Disponibles

1. **Ver Detalle**: Información completa de la AFP
2. **Editar**: Modificar datos básicos
3. **Activar/Desactivar**: Cambiar estado
4. **Exportar**: Generar reporte en Excel/PDF

## Consideraciones
- Las AFP deben ser revisadas periódicamente para mantener la precisión
- Integración con módulos de:
  - Recursos Humanos
  - Contabilidad
  - Planillas
- Auditoría completa de operaciones
- Validez de documentos por 5 años

## Ejemplo de Registro Completo
```plaintext
Id: 3
Nombre: Gestora
Descripción: Nueva administradora de fondos
Estado: Activo
Registrado: 2022-11-21 13:37:04
```

# Crear Nuevo Tipo de AFP

## Vista General
Formulario para registrar nuevos tipos de Administradoras de Fondos de Pensiones (AFP) en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Nombre**: Nombre de la AFP
  - Ejemplo: "Gestora"
- **Descripción**: Detalle sobre la AFP
  - Ejemplo: "Nueva administradora de fondos"
- **Estado**: 
  - Activo
  - Inactivo

## Proceso de Creación

1. **Ingresar nombre de la AFP**
2. **Agregar descripción detallada**
3. **Definir estado inicial**
4. **Validar información**
5. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 3 caracteres | "Nombre muy corto" |
| Descripción | Mín. 10 caracteres | "Descripción insuficiente" |

## Consideraciones
- Integración con módulos de:
  - Recursos Humanos
  - Contabilidad
  - Planillas
- Genera código único automático
- Auditoría completa de operaciones
- Validez de documentos por 5 años

## Ejemplo de Registro
```plaintext
Nombre: Gestora
Descripción: Nueva administradora de fondos
Estado: Activo

