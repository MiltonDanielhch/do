---
sidebar_position: 5
---

# Gestión de Entidades

## Vista General
Módulo para administrar el catálogo de entidades externas (públicas, privadas, organizaciones, etc.) con las que interactúa el Gobierno Autónomo Departamental del Beni. Este registro es fundamental para identificar correctamente a los remitentes o destinatarios en la correspondencia externa.

## Estructura de la Tabla de Entidades

La tabla principal muestra un resumen de las entidades registradas:

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único de la entidad | Numérico | 2678, 2677 |
| Sigla | Sigla o acrónimo de la entidad (si aplica) | Texto | "MUNICIPIO DE BAURES", "FAGROIND - BENI", "U.A.B" |
| Nombre | Nombre completo de la entidad | Texto | "SUB ALCALDIA PUERTO VILLAZON - PROV. ITENEZ", "ASOCIACIÓN BENIANA DE KARATE DO", "EMPRESA FERLEDS" |
| Estado | Condición actual del registro de la entidad | Texto | "Activo", "Inactivo" |
| Acciones | Botones o iconos para realizar operaciones sobre el registro | (Varía) | Ver, Editar, Cambiar Estado |

## Funcionalidades Principales

-   **Registro de Nueva Entidad**: (Implícito) Probablemente existe un botón o enlace para añadir una nueva entidad.
-   **Búsqueda**: Permite buscar entidades por Sigla o Nombre.
-   **Paginación**: Navegación entre las páginas de registros (actualmente mostrando 2658 registros).
-   **Selección de cantidad de registros**: Permite ajustar cuántos registros se muestran por página (ej. 10).

## Acciones Comunes (Disponibles por registro)

-   **Ver Detalle**: Acceder a la vista completa de la información de la entidad.
-   **Editar**: Modificar los datos registrados (sigla, nombre, estado).
-   **Activar/Desactivar**: Cambiar el estado del registro de la entidad.

## Ejemplo de Registro Completo

```plaintext
Id: 2678
Sigla: MUNICIPIO DE BAURES
Nombre: SUB ALCALDIA PUERTO VILLAZON - PROV. ITENEZ
Estado: Activo
```

## Consideraciones
- Este catálogo es esencial para el módulo de `crear-entrada.md` al registrar correspondencia de origen externo, permitiendo seleccionar o identificar correctamente al remitente.
- Mantener este catálogo actualizado y sin duplicados es importante para la calidad de los datos del sistema de correspondencia.
- El campo "Sigla" ayuda a identificar rápidamente a entidades conocidas por su acrónimo.
- Integración directa con:
  - `crear-entrada.md` (Se usa para seleccionar el remitente externo).
  - Reportes de correspondencia (para agrupar por entidad).
- Auditoría completa de operaciones.

# Añadir Nueva Entidad

## Vista General
Formulario para registrar nuevas entidades externas (públicas, privadas, organizaciones, etc.) en el catálogo del Sistema de Correspondencia (SISCOR) del Gobierno Autónomo Departamental del Beni.

## Campos del Formulario

-   **Sigla**: (Campo de texto, opcional) Sigla o acrónimo por el cual se conoce a la entidad.
    -   Ejemplo: "UAGRM", "ONU", "ABC".
-   **Nombre**: (Campo de texto, requerido) Nombre completo y oficial de la entidad.
    -   Ejemplo: "Universidad Autónoma Gabriel René Moreno", "Organización de las Naciones Unidas", "Administradora Boliviana de Carreteras".
-   **Estado**: (Dropdown/Selección) Define si el registro de la entidad está activo y puede ser utilizado en el sistema.
    -   Opciones: "Activo", "Inactivo".

## Proceso de Creación

1.  **Ingresar la Sigla** de la entidad, si aplica.
2.  **Ingresar el Nombre** completo de la entidad.
3.  **Seleccionar el Estado** inicial (generalmente "Activo").
4.  **Validar la información** ingresada.
5.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error (Ejemplo) |
|---|---|---|
| Nombre | Campo requerido, Único | "Debe ingresar un nombre" o "Esta entidad ya existe" |
| Estado | Selección requerida | "Seleccione un estado" |

## Ejemplo de Registro
```plaintext
Sigla: G.A.M.T.
Nombre: Gobierno Autónomo Municipal de Trinidad
Estado: Activo
```

## Consideraciones
- Este formulario permite poblar el catálogo de entidades externas con las que interactúa la institución.
- Un catálogo completo y preciso es vital para el registro correcto de la correspondencia externa en el módulo de `crear-entrada.md` .
- Evitar la duplicación de entidades mediante la búsqueda previa o validaciones del sistema.
- Los registros creados aquí aparecerán en la lista principal de `entidades.md` y estarán disponibles para su selección al registrar correspondencia externa.
- Auditoría completa de operaciones.