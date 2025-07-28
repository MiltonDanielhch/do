---
sidebar_position: 2
---

# Gestión de Departamentos/Estados

## Vista General
Módulo para administrar la lista de departamentos o estados asociados a los países registrados en el sistema del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único del departamento/estado | Numérico | 13 |
| País | País al que pertenece | Texto (Relacionado) | "Venezuela", "Bolivia" |
| Nombre | Nombre completo del departamento/estado | Texto | "No definido", "LA PAZ" |
| Siglas | Abreviatura o código del departamento/estado | Texto | "SN", "LP" |
| Creado | Fecha de registro | Timestamp | "2023-11-13 10:59:07" |

## Filtros Disponibles

### Básicos
- Por país
- Por nombre
- Por siglas
- Por rango de fechas

### Avanzados
- Por usuario registrador

## Acciones Disponibles

1.  **Ver Detalle**: Información completa del departamento/estado.
2.  **Editar**: Modificar datos básicos.
3.  **Exportar**: Generar reporte en Excel/PDF.

## Ejemplo de Registro Completo
```plaintext
Id: 11
País: Bolivia
Nombre: LA PAZ
Siglas: LP
Creado: 2022-03-07 15:29:39
```
- Este catálogo depende del módulo de `paises.md` . Cada estado debe estar asociado a un país existente.
- Se utiliza para detallar ubicaciones en módulos como Recursos Humanos, Proveedores, Direcciones, etc.
- Mantener siglas consistentes es importante.
- Auditoría completa de operaciones.


# Crear Nuevo Departamento/Estado

## Vista General
Formulario para registrar nuevos departamentos o estados asociados a un país existente en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **País**: Selección del país al que pertenece el departamento/estado (debe existir previamente en el sistema).
  - Ejemplo: "Bolivia", "Estados Unidos"
- **Nombre**: Nombre completo del departamento o estado.
  - Ejemplo: "LA PAZ", "Carolina del Sur"
- **Siglas**: Abreviatura o código del departamento/estado.
  - Ejemplo: "LP", "SC" (para South Carolina)

## Proceso de Creación

1.  **Seleccionar el País** de la lista desplegable.
2.  **Ingresar el nombre completo** del departamento o estado.
3.  **Especificar las siglas** o código correspondiente.
4.  **Validar la información** ingresada.
5.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| País | Selección requerida | "Seleccione un país" |
| Nombre | Mín. 2 caracteres, Único dentro del país | "Nombre muy corto" o "Departamento/Estado ya existe para este país" |
| Siglas | Mín. 1 caracter, Máx. 5, Único dentro del país | "Siglas inválidas" o "Siglas ya existen para este país" |

## Ejemplo de Registro
```plaintext
País: Bolivia
Nombre: BENI
Siglas: BN
```

## Consideraciones
- Es fundamental seleccionar primero el País correcto.
- Este catálogo se utiliza para refinar ubicaciones en otros módulos.
- Mantener la consistencia en nombres y siglas es importante.
- Integración con módulos de:
  - Recursos Humanos
  - Proveedores
  - Direcciones
- Genera un registro único para cada departamento/estado dentro de un país.
- Auditoría completa de operaciones.