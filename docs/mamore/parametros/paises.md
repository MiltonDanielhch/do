---
sidebar_position: 2
---

# Gestión de Países

## Vista General
Módulo para administrar la lista de países utilizada en diferentes partes del sistema del Gobierno Autónomo Departamental del Beni, como datos de personal o proveedores.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único del país | Numérico | 3 |
| Nombre | Nombre completo del país | Texto | "Venezuela" |
| Siglas | Abreviatura o código del país | Texto | "VEN" |
| Creado | Fecha de registro | Timestamp | "2023-11-13 10:55:24" |

## Filtros Disponibles

### Básicos
- Por nombre
- Por siglas
- Por rango de fechas

### Avanzados
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa del país.
2.  **Editar**: Modificar datos básicos.
3.  **Exportar**: Generar reporte en Excel/PDF.

## Consideraciones
- Este es un catálogo base utilizado en otros módulos.
- Asegúrese de que las siglas sean consistentes (ej. ISO 3166-1 alpha-3).
- Integración con módulos de:
  - Recursos Humanos (Nacionalidad)
  - Contrataciones (Origen de proveedores)
- Auditoría completa de operaciones.

## Ejemplo de Registro Completo
```plaintext
Id: 3
Nombre: Venezuela
Siglas: VEN
Creado: 2023-11-13 10:55:24
```

# Crear Nuevo País

## Vista General
Formulario para registrar nuevos países en el catálogo base del sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Nombre**: Nombre completo del país.
  - Ejemplo: "Bolivia", "Estados Unidos"
- **Siglas**: Abreviatura o código estándar del país (preferiblemente ISO 3166-1 alpha-3).
  - Ejemplo: "BOL", "USA"

## Proceso de Creación

1.  **Ingresar el nombre completo** del país.
2.  **Especificar las siglas** o código correspondiente.
3.  **Validar la información** ingresada.
4.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 3 caracteres, Único | "Nombre muy corto" o "País ya existe" |
| Siglas | Mín. 2 caracteres, Máx. 5, Único | "Siglas inválidas" o "Siglas ya existen" |

## Ejemplo de Registro
```plaintext
Nombre: Bolivia
Siglas: BOL
```

## Consideraciones
- Este catálogo es fundamental para otros módulos que requieren información de nacionalidad o procedencia.
- Utilizar siglas estandarizadas mejora la consistencia del sistema.
- Integración con módulos de:
  - Recursos Humanos
  - Contrataciones
  - Proveedores
- Genera un registro único para cada país.
- Auditoría completa de operaciones.
