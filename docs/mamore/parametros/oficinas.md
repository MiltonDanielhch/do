---
sidebar_position: 2
---

# Gestión de Oficinas

## Vista General
Módulo para administrar las diferentes oficinas físicas dentro del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único de la oficina | Numérico | 1 |
| Nombre | Nombre de la oficina | Texto | "Caja" |
| Telefono | Número de contacto de la oficina | Texto | - |
| Descripción | Detalle sobre la función o ubicación | Texto | - |
| Location | Ubicación geográfica o referencia | Texto | - |
| Creado | Fecha de registro | Timestamp | "2022-02-15 16:49:23" |

## Tipos de Oficinas (Ejemplos)

- Caja
- Recepción
- Archivo
- Despacho

## Filtros Disponibles

### Básicos
- Por nombre
- Por ubicación (Location)
- Por rango de fechas

### Avanzados
- Por descripción
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa de la oficina.
2.  **Editar**: Modificar datos básicos.
3.  **Exportar**: Generar reporte en Excel/PDF.

## Consideraciones
- Este módulo ayuda a mapear la estructura física de las instalaciones.
- Puede integrarse con la asignación de personal o activos.
- Integración con módulos de:
  - Recursos Humanos
  - Activos Fijos
  - Correspondencia
- Auditoría completa de operaciones.

## Ejemplo de Registro Completo
```plaintext
Id: 1
Nombre: Caja
Telefono: -
Descripción: -
Location: -
Creado: 2022-02-15 16:49:23
```

# Crear Nueva Oficina

## Vista General
Formulario para registrar nuevas oficinas físicas en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Nombre**: Nombre identificativo de la oficina.
  - Ejemplo: "Caja", "Recepción"
- **Telefono**: Número de contacto directo de la oficina (opcional).
- **Descripción**: Detalle sobre la función, ubicación específica o propósito de la oficina.

## Proceso de Creación

1.  **Ingresar el nombre** de la oficina.
2.  **Especificar el número de teléfono** (si aplica).
3.  **Agregar una descripción** detallada.
4.  **Validar la información** ingresada.
5.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 3 caracteres, Único | "Nombre muy corto" o "Oficina ya existe" |
| Telefono | Formato numérico (opcional) | "Teléfono inválido" |

## Consideraciones
- Este registro ayuda a organizar la estructura física y funcional de las instalaciones.
- Puede vincularse a la asignación de personal o activos fijos.
- Integración con módulos de:
  - Recursos Humanos
  - Activos Fijos
  - Correspondencia
- Genera un registro único para cada oficina.
- Auditoría completa de operaciones.

## Ejemplo de Registro
```plaintext
Nombre: Caja
Telefono: 34621234 ext 105
Descripción: Oficina de pagos y recaudaciones, ubicada en planta baja, ala oeste.
```