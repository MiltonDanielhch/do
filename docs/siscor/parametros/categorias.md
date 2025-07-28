---
sidebar_position: 4
---

# Gestión de Categorías de Trámites

## Vista General
Módulo para administrar y clasificar los diferentes tipos de trámites o documentos que se manejan en el Sistema de Correspondencia (SISCOR) del Gobierno Autónomo Departamental del Beni. Permite agrupar trámites similares bajo una categoría general y un nombre específico.

## Estructura de la Tabla de Categorías

La tabla principal muestra las categorías y nombres específicos registrados:

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Categoria | Agrupación general del tipo de trámite | Texto | "SOLICITUDES", "COURIER" |
| Nombre | Nombre específico del trámite dentro de la categoría | Texto | "RETENCION", "CARTA DE PRESENTACIÓN", "PIE COTEYA" |
| Created At | Fecha y hora de creación del registro | Timestamp | "2025-04-17 15:23:08" |
| Deleted At | Fecha y hora de eliminación lógica (si aplica) | Timestamp | (vacío o fecha) |
| Acciones | Botones o iconos para realizar operaciones sobre el registro | (Varía) | Borrar, Editar, Ver |

## Ejemplos de Categorías y Nombres

-   **SOLICITUDES**:
    -   RETENCION
    -   CARTA DE PRESENTACIÓN
    -   EXENCIÓN DE PAGO
    -   EMISIÓN
    -   CONSULTA DE LICENCIA AMBIENTAL
    -   FIRMA DE CHEQUES
    -   PONGO EN CONOCIMIENTO Y SOLICITO
    -   DE MEDIDA EXCEPCIONAL
-   **COURIER**:
    -   PIE COTEYA
    -   CONVOCATORIA

## Funcionalidades Principales

-   **Crear**: Botón para añadir una nueva categoría o un nuevo nombre específico dentro de una categoría existente.
-   **Borrado masivo**: Opción para eliminar múltiples registros seleccionados.
-   **Búsqueda**: Permite buscar por Categoria o Nombre.
-   **Paginación**: Navegación entre las páginas de registros (actualmente mostrando 573 entradas).
-   **Selección de cantidad de registros**: Permite ajustar cuántos registros se muestran por página (10, 25, 50, 100).
-   **Mostrar/Ocultar eliminados**: (Implícito por el campo "Deleted At") Posibilidad de ver registros eliminados lógicamente.

## Acciones Comunes (Disponibles por registro)

-   **Borrar**: Eliminar (lógicamente) el registro.
-   **Editar**: Modificar la categoría o el nombre.
-   **Ver**: Visualizar los detalles del registro.

## Ejemplo de Registro Completo

```plaintext
Categoria: SOLICITUDES
Nombre: RETENCION
Created At: 2025-04-17 15:23:08
Deleted At: 
```
## Consideraciones
- Este catálogo es fundamental para clasificar y estandarizar los tipos de trámites que ingresan o se generan en la institución.
- Una buena categorización facilita la búsqueda, el enrutamiento y la generación de reportes sobre la correspondencia.
- Se utiliza principalmente en el módulo de `crear-entrada.md` al seleccionar el "Tipo Trámite".
- La estructura parece permitir una categoría general y un nombre más específico para detallar el trámite.
- Auditoría completa de operaciones.


# Añadir Nueva Categoría/Nombre de Trámite

## Vista General
Formulario para registrar nuevas categorías generales o nombres específicos para clasificar los trámites y documentos en el Sistema de Correspondencia (SISCOR) del Gobierno Autónomo Departamental del Beni.

## Campos del Formulario

-   **Categoria**: (Dropdown/Selección o Campo de texto) La agrupación general a la que pertenece el trámite. Se puede seleccionar una categoría existente o, potencialmente, escribir una nueva.
    -   Ejemplo: "SOLICITUDES", "INFORMES", "NOTIFICACIONES".
-   **Nombre**: (Campo de texto) El nombre específico del tipo de trámite o documento dentro de la categoría seleccionada.
    -   Ejemplo: "RETENCION" (dentro de SOLICITUDES), "INFORME TÉCNICO" (dentro de INFORMES).

## Proceso de Creación

1.  **Seleccionar o ingresar la Categoria** general del trámite.
2.  **Ingresar el Nombre** específico del trámite.
3.  **Validar la información** ingresada.
4.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error (Ejemplo) |
|---|---|---|
| Categoria | Selección/Entrada requerida | "Debe seleccionar o ingresar una categoría" |
| Nombre | Campo requerido, Único dentro de la categoría | "Debe ingresar un nombre" o "Este nombre ya existe para la categoría seleccionada" |

## Ejemplo de Registro

**Añadir nombre a categoría existente:**
```plaintext
Categoria: SOLICITUDES 
Nombre: PERMISO DE VIAJE
```

## Consideraciones
- Este formulario permite expandir el catálogo de tipos de trámites utilizados en el sistema.
- La correcta definición y asignación de categorías y nombres es crucial para la organización y búsqueda eficiente de la correspondencia.
- Los registros creados aquí estarán disponibles para su selección en el campo "Tipo Trámite" del formulario de `crear-entrada.md` .
- Mantener un catálogo coherente y bien definido mejora la gestión documental.
- Integración directa con:
  - `categorias.md` (El nuevo registro aparecerá en esta lista).
  - `crear-entrada.md` (La nueva opción estará disponible aquí).
- Auditoría completa de operaciones.