---
sidebar_position: 2
---

# Gestión de Tipos de Seguro Social

## Vista General
Módulo para administrar los diferentes tipos de aportes al seguro social utilizados en el sistema del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único del tipo de aporte | Numérico | 6 |
| Nombre | Nombre del tipo de aporte | Texto | "Aporte SIP + Solidario + Vivienda" |
| Porcentaje | Porcentaje aplicado (si corresponde) | Decimal | 10.00 |
| Descripción | Detalle sobre el tipo de aporte | Texto | - |
| Creado | Fecha de registro | Timestamp | "2021-10-26 11:48:21" |

## Tipos de Aportes

1.  **Aporte SIP + Solidario + Vivienda**: Combinación de aportes.
2.  **Aporte SIP**: Aporte al Sistema Integral de Pensiones.
3.  **Aporte SIP + Solidario**: Combinación de aportes.
4.  **Aporte Pat. Vivienda**: Aporte patronal para vivienda.
5.  **Aporte Solidario**: Aporte al fondo solidario.
6.  **Aporte Pat. Salud**: Aporte patronal para salud.

## Filtros Disponibles

### Básicos
- Por nombre
- Por rango de porcentajes
- Por rango de fechas

### Avanzados
- Por descripción
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa del tipo de aporte.
2.  **Editar**: Modificar datos básicos.
3.  **Exportar**: Generar reporte en Excel/PDF.

## Ejemplo de Registro Completo
```plaintext
Id: 1
Nombre: Aporte Pat. Salud
Porcentaje: 10.00
Descripción: -
Creado: 2021-09-24 11:47:54
```

# Crear Nuevo Tipo de Seguro Social

## Vista General
Formulario para registrar nuevos tipos de aportes al seguro social en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Nombre**: Nombre del tipo de aporte
  - Ejemplo: "Aporte Pat. Salud"
- **Porcentaje**: Porcentaje aplicado (si corresponde)
  - Ejemplo: 10.00
- **Descripción**: Detalle sobre el tipo de aporte

## Proceso de Creación

1. **Ingresar nombre del tipo de aporte**
2. **Especificar porcentaje (si aplica)**
3. **Agregar descripción detallada**
4. **Validar información**
5. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 5 caracteres | "Nombre muy corto" |
| Porcentaje | Formato numérico (0-100) | "Porcentaje inválido" |

## Consideraciones
- Los porcentajes deben estar alineados con la normativa vigente.
- Integración con módulos de:
  - Recursos Humanos
  - Contabilidad
  - Planillas
- Genera código único automático.
- Auditoría completa de operaciones.

## Ejemplo de Registro
```plaintext
Nombre: Aporte Pat. Salud
Porcentaje: 10.00
Descripción: Aporte patronal destinado al seguro de salud.