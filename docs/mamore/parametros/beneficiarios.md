---
sidebar_position: 2
---

# Gestión de Beneficiarios de Cheques (Seguro Social)

## Vista General
Módulo para administrar los beneficiarios asociados a los pagos de seguro social en el sistema del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único del registro | Numérico | 29 |
| Seguro social | Tipo de aporte asociado | Texto | "Aporte Solidario" |
| Nombre completo | Nombre del beneficiario (persona o entidad) | Texto | "GESTORA PUBLICA", "MILTON JESUS CUELLAR JIMENEZ" |
| CI | Cédula de Identidad (si aplica) | Texto | "1931655" |
| Detalle | Información adicional | Texto | - |
| Creado | Fecha de registro | Timestamp | "2023-07-20 11:03:06" |

## Tipos de Seguro Social Asociados

- Aporte Solidario
- Aporte Pat. Vivienda
- Aporte SIP
- Aporte SIP + Solidario
- Aporte Pat. Salud
- Aporte SIP + Solidario + Vivienda

## Filtros Disponibles

### Básicos
- Por tipo de seguro social
- Por nombre completo
- Por CI
- Por rango de fechas

### Avanzados
- Por detalle
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa del registro.
2.  **Editar**: Modificar datos básicos.
3.  **Exportar**: Generar reporte en Excel/PDF.

## Ejemplo de Registro Completo
```plaintext
Id: 29
Seguro social: Aporte Solidario
Nombre completo: GESTORA PUBLICA
CI: -
Detalle: -
Creado: 2023-07-20 11:03:06
```
## Consideraciones
- Este módulo vincula los tipos de aportes con los beneficiarios correspondientes (personas o entidades recaudadoras).
- Integración con módulos de:
  - Planillas
  - Pagos de Seguridad Social
  - Tesorería
- Auditoría completa de operaciones.

# Crear Nuevo Beneficiario de Cheque (Seguro Social)

## Vista General
Formulario para registrar nuevos beneficiarios asociados a los pagos de seguro social en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Seguro social**: Selección del tipo de aporte al que se asocia el beneficiario.
  - Ejemplo: "Aporte Solidario", "Aporte Pat. Salud"
- **Nombre completo**: Nombre del beneficiario (persona o entidad).
  - Ejemplo: "GESTORA PUBLICA", "MILTON JESUS CUELLAR JIMENEZ"
- **CI**: Cédula de Identidad del beneficiario (si aplica).
  - Ejemplo: "1931655"
- **Detalle**: Información adicional relevante sobre el beneficiario o la asociación.

## Proceso de Creación

1.  **Seleccionar el tipo de seguro social** correspondiente.
2.  **Ingresar el nombre completo** del beneficiario.
3.  **Especificar la Cédula de Identidad** (si es una persona física).
4.  **Agregar detalles adicionales** si es necesario.
5.  **Validar la información** ingresada.
6.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Seguro social | Selección requerida | "Seleccione un tipo de seguro" |
| Nombre completo | Mín. 5 caracteres | "Nombre muy corto" |
| CI | Formato numérico (si aplica) | "CI inválido" |

## Ejemplo de Registro
```plaintext
Seguro social: Aporte Solidario
Nombre completo: GESTORA PUBLICA
CI: 
Detalle: Entidad recaudadora de aportes solidarios.
```

## Consideraciones
- Este registro vincula un tipo de aporte específico con la persona o entidad que recibirá el pago correspondiente.
- Asegúrese de seleccionar el tipo de seguro social correcto para cada beneficiario.
- Integración con módulos de:
  - Planillas
  - Pagos de Seguridad Social
  - Tesorería
- Genera un registro único para la combinación de beneficiario y tipo de aporte.
- Auditoría completa de operaciones.