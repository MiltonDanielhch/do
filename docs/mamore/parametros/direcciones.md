---
sidebar_position: 2
---

# Gestión de Direcciones

## Vista General
Módulo para administrar las direcciones del Gobierno Autónomo Departamental del Beni, permitiendo el seguimiento y control de las ubicaciones administrativas.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único de la dirección | Numérico | 77 |
| Tipo | Clasificación de la dirección | Texto | "Secretarías" |
| Ciudad/Localidad | Ubicación geográfica | Texto | "SANTISIMA TRINIDAD" |
| Office Id | Identificador de oficina | Texto | - |
| Nombre | Nombre completo de la dirección | Texto | "DIRECCIÓN DE AUDITORÍA INTERNA" |
| Sigla | Abreviatura de la dirección | Texto | "DDAI" |
| NIT | Número de Identificación Tributaria | Texto | "177396029" |
| Estado | Condición actual | Dropdown | "Activo", "Inactivo" |
| Registrado | Fecha de registro | Timestamp | "2025-01-17 10:34:40" |

## Tipos de Direcciones

1. **Secretarías**: Unidades administrativas principales
2. **Subdirecciones**: Unidades subordinadas
3. **Departamentos**: Áreas especializadas

## Filtros Disponibles

### Básicos
- Por tipo de dirección
- Por ciudad/localidad
- Por estado

### Avanzados
- Por nombre o sigla
- Por NIT
- Por rango de fechas

## Acciones Disponibles

1. **Ver Detalle**: Información completa de la dirección
2. **Editar**: Modificar datos básicos
3. **Activar/Desactivar**: Cambiar estado
4. **Exportar**: Generar reporte en Excel/PDF

## Consideraciones
- Las direcciones deben ser revisadas periódicamente para mantener la precisión
- Integración con módulos de:
  - Recursos Humanos
  - Contabilidad
  - Correspondencia
- Auditoría completa de operaciones
- Validez de documentos por 5 años

## Ejemplo de Registro Completo
```plaintext
Id: 77
Tipo: Secretarías
Ciudad/Localidad: SANTISIMA TRINIDAD
Nombre: DIRECCIÓN DE AUDITORÍA INTERNA
Sigla: DDAI
NIT: 177396029
Estado: Activo
Registrado: 2025-01-17 10:34:40
```

# Crear Nueva Dirección

## Vista General
Formulario para registrar nuevas direcciones administrativas en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Tipo**: 
  - Secretarías
  - Subdirecciones
  - Departamentos
- **Ciudad/Localidad**: Ubicación geográfica
- **Oficina**: Identificador de oficina (opcional)
- **Nombre**: Nombre completo de la dirección
- **Sigla**: Abreviatura de la dirección
- **NIT**: Número de Identificación Tributaria
- **Estado**: 
  - Activo
  - Inactivo

### Información Adicional
- **Dirección**: Ubicación física detallada

## Proceso de Creación

1. **Seleccionar tipo de dirección**
2. **Completar ciudad/localidad y oficina**
3. **Ingresar nombre y sigla**
4. **Especificar NIT**
5. **Definir estado inicial**
6. **Agregar dirección física**
7. **Validar información**
8. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 5 caracteres | "Nombre muy corto" |
| Sigla | Mín. 2 caracteres | "Sigla muy corta" |
| NIT | Formato numérico | "NIT inválido" |

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
Tipo: Secretarías
Ciudad/Localidad: SANTISIMA TRINIDAD
Oficina: Oficina Central
Nombre: DIRECCIÓN DE AUDITORÍA INTERNA
Sigla: DDAI
NIT: 177396029
Estado: Activo
Dirección: Av. Principal #123, Santísima Trinidad
```