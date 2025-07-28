---
sidebar_position: 2
---

# Gestión de Unidades Administrativas

## Vista General
Módulo para administrar las unidades administrativas del Gobierno Autónomo Departamental del Beni, permitiendo el seguimiento y control de las diferentes áreas organizacionales.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único de la unidad | Numérico | 427 |
| Dirección adm. | Dirección administrativa superior | Texto | "Despacho De Gobernacion" |
| Nombre | Nombre completo de la unidad | Texto | "UNIDAD DE PROTOCOLO" |
| Sigla | Abreviatura de la unidad | Texto | "UDP" |
| Estado | Condición actual | Dropdown | "Activa", "Inactiva" |
| Registrado | Fecha de registro | Timestamp | "2025-02-03 12:38:15" |

## Tipos de Unidades

1. **Despacho**: Oficinas de gestión directa
2. **Secretarías**: Áreas de planificación y desarrollo
3. **Direcciones**: Unidades de ejecución y control

## Filtros Disponibles

### Básicos
- Por dirección administrativa
- Por estado
- Por rango de fechas

### Avanzados
- Por nombre o sigla
- Por usuario registrador

## Acciones Disponibles

1. **Ver Detalle**: Información completa de la unidad
2. **Editar**: Modificar datos básicos
3. **Borrar**: Eliminar unidad (requiere confirmación)
4. **Exportar**: Generar reporte en Excel/PDF

## Consideraciones
- Las unidades deben ser revisadas periódicamente para mantener la precisión
- Integración con módulos de:
  - Recursos Humanos
  - Contabilidad
  - Correspondencia
- Auditoría completa de operaciones
- Validez de documentos por 5 años

## Ejemplo de Registro Completo
```plaintext
Id: 427
Dirección adm.: Despacho De Gobernacion
Nombre: UNIDAD DE PROTOCOLO
Sigla: UDP
Estado: Activa
Registrado: 2025-02-03 12:38:15
```

# Crear Nueva Unidad Administrativa

## Vista General
Formulario para registrar nuevas unidades administrativas en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Dirección adm.**: Dirección administrativa superior a la que pertenece la unidad
- **Nombre**: Nombre completo de la unidad
- **Sigla**: Abreviatura de la unidad
- **Direccion**: Ubicación física de la unidad
- **Estado**: 
  - Activa
  - Inactiva

## Proceso de Creación

1. **Seleccionar dirección administrativa superior**
2. **Ingresar nombre y sigla de la unidad**
3. **Especificar dirección física**
4. **Definir estado inicial**
5. **Validar información**
6. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 5 caracteres | "Nombre muy corto" |
| Sigla | Mín. 2 caracteres | "Sigla muy corta" |
| Direccion | Mín. 10 caracteres | "Dirección muy corta" |

## Consideraciones
- Integración con módulos de:
  - Recursos Humanos
  - Contabilidad
  - Correspondencia
- Genera código único automático
- Auditoría completa de operaciones
- Validez de documentos por 5 años

## Ejemplo de Registro
```plaintext
Dirección adm.: Despacho De Gobernacion
Nombre: UNIDAD DE PROTOCOLO
Sigla: UDP
Direccion: Av. Principal #123, Santísima Trinidad
Estado: Activa
```