---
sidebar_position: 2
---

# Gestión de Dependencias

## Vista General
Módulo para administrar las diferentes dependencias (entidades o unidades organizativas) del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único de la dependencia | Numérico | 18 |
| Nombre o razón social | Nombre oficial de la dependencia | Texto | "Stria. de Administración y Finanzas" |
| Regional | Ubicación regional de la dependencia | Texto | "Trinidad", "San Ignacio" |
| Nombre del representante legal | Persona responsable legalmente | Texto | "Jose Alejandro Unzueta S." |
| Creado | Fecha de registro | Timestamp | "2022-08-15 10:00:14" |

## Tipos de Dependencias (Ejemplos)

- Secretarías Departamentales (Stria.)
- Corregimientos
- Administración Central
- Sub Gobernaciones (implícito)

## Filtros Disponibles

### Básicos
- Por nombre o razón social
- Por regional
- Por nombre del representante legal
- Por rango de fechas

### Avanzados
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa de la dependencia.
2.  **Editar**: Modificar datos básicos.
3.  **Exportar**: Generar reporte en Excel/PDF.

## Consideraciones
- Este módulo centraliza la información de las diferentes entidades que componen la estructura organizacional.
- La información del representante legal debe mantenerse actualizada.
- Integración con módulos de:
  - Recursos Humanos
  - Contabilidad
  - Correspondencia
  - Contrataciones
- Auditoría completa de operaciones.

## Ejemplo de Registro Completo
```plaintext
Id: 18
Nombre o razón social: Stria. de Administración y Finanzas
Regional: Trinidad
Nombre del representante legal: Jose Alejandro Unzueta S.
Creado: 2022-08-15 10:00:14
```

# Crear Nueva Dependencia

## Vista General
Formulario para registrar nuevas dependencias (entidades o unidades organizativas) en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información de la Dependencia
- **Nombre o razón social**: Nombre oficial de la dependencia.
  - Ejemplo: "Secretaría Departamental de Administración y Finanzas"
- **Nro de NIT**: Número de Identificación Tributaria de la dependencia.
- **Nro patronal**: Número de registro patronal ante las entidades de seguridad social.
- **Regional**: Ubicación regional principal.
  - Ejemplo: "Trinidad", "San Ignacio"
- **Domicilio**: Dirección física completa de la dependencia.
- **Teléfono**: Número de contacto principal.

### Información del Representante Legal
- **Nombre del representante legal**: Nombre completo de la persona responsable.
  - Ejemplo: "Jose Alejandro Unzueta S."
- **CI del representante legal**: Cédula de Identidad del representante legal.

## Proceso de Creación

1.  **Ingresar el nombre o razón social** de la dependencia.
2.  **Completar los números de NIT y patronal**.
3.  **Especificar la regional y el domicilio**.
4.  **Añadir el número de teléfono**.
5.  **Ingresar los datos del representante legal** (nombre y CI).
6.  **Validar la información** ingresada.
7.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre o razón social | Mín. 5 caracteres | "Nombre muy corto" |
| Nro de NIT | Formato numérico | "NIT inválido" |
| Nro patronal | Formato específico | "Número patronal inválido" |
| CI del representante legal | Formato numérico | "CI inválido" |

## Ejemplo de Registro
```plaintext
Nombre o razón social: Secretaría Departamental de Administración y Finanzas
Nro de NIT: 177396029
Nro patronal: 9876543
Regional: Trinidad
Domicilio: Plaza Principal Mcal. José Ballivián acera Oeste
Teléfono: 34621234
Nombre del representante legal: Jose Alejandro Unzueta S.
CI del representante legal: 1234567
```

## Consideraciones
- Mantener actualizada la información del representante legal es crucial.
- Asegúrese de que los números de NIT y patronal sean correctos.
- Integración con módulos de:
  - Recursos Humanos
  - Contabilidad
  - Correspondencia
  - Contrataciones
- Genera un registro único para cada dependencia.
- Auditoría completa de operaciones.