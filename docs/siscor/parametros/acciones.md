---
sidebar_position: 7
---

# Gestión de Acciones (Instrucciones de Despacho)

## Vista General
Módulo para administrar el catálogo de acciones o instrucciones predefinidas que se pueden seleccionar al derivar correspondencia en el Sistema de Correspondencia (SISCOR) del Gobierno Autónomo Departamental del Beni. Estas acciones guían al destinatario sobre el curso a seguir con el trámite.

## Estructura de la Tabla de Acciones

La tabla principal muestra las acciones predefinidas:

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| ID | Identificador único de la acción | Numérico | 1, 10 |
| Clave | Código corto o sigla para la acción | Texto | "AH", "TA", "PR" |
| Nombre | Descripción completa de la acción o instrucción | Texto | "Archívese", "Tome Acción Necesaria", "Prepare Respuesta" |
| Estado | Condición actual de la acción (implícito, usualmente activo) | (No visible, asumido Activo) | Activo |
| Creado | Fecha y hora de creación del registro de la acción | Timestamp | "2021-08-15 13:12:46" |
| Acciones | Botones o iconos para realizar operaciones sobre el registro | (Varía) | Editar, Borrar/Desactivar |

## Acciones Predefinidas Registradas

-   **AH**: Archívese
-   **TA**: Tome Acción Necesaria
-   **PR**: Prepare Respuesta
-   **PC**: Para su Conocimiento
-   **IN**: Informe
-   **ES**: Efectúe Seguimiento
-   **DC**: De Curso
-   **CC**: Coordine Con
-   **AR**: Acuse Recibo
-   **AO**: Acuda a mi Oficina
-   *(Existe una entrada adicional no visible en la primera página)*

## Funcionalidades Principales

-   **Registro de Nueva Acción**: (Implícito) Probablemente existe un botón o enlace para añadir una nueva acción predefinida.
-   **Búsqueda**: Permite buscar acciones por Clave o Nombre.
-   **Paginación**: Navegación entre las páginas de registros (actualmente mostrando 11 entradas).
-   **Selección de cantidad de registros**: Permite ajustar cuántos registros se muestran por página (ej. 10).

## Acciones Comunes (Disponibles por registro)

-   **Editar**: Modificar la clave o el nombre de la acción.
-   **Borrar/Desactivar**: Eliminar o marcar como inactiva una acción para que no aparezca en las opciones de derivación.

## Ejemplo de Registro Completo

```plaintext
ID: 1
Clave: AH
Nombre: Archívese
Estado: Activo (asumido)
Creado: 2021-08-15 13:12:46
```

## Consideraciones
- Este catálogo estandariza las instrucciones que se dan al derivar correspondencia, asegurando claridad y consistencia.
- Las acciones definidas aquí se seleccionan típicamente en el formulario de derivación de la `bandeja.md` o al procesar una `entradas.md` .
- Mantener una lista concisa y relevante de acciones facilita el proceso de derivación.
- Integración directa con:
  - Flujo de trabajo de correspondencia (derivaciones).
  - `bandeja.md` .
- Auditoría completa de operaciones.


# Añadir Nueva Acción (Instrucción de Despacho)

## Vista General
Formulario para registrar nuevas acciones o instrucciones predefinidas en el catálogo del Sistema de Correspondencia (SISCOR). Estas acciones se utilizarán al derivar trámites para indicar al destinatario la gestión requerida.

## Campos del Formulario

-   **Clave**: (Campo de texto, requerido) Código corto o sigla única que identifica la acción.
    -   Ejemplo: "RV" (para Revisar), "AP" (para Aprobar).
-   **Nombre**: (Campo de texto, requerido) Descripción completa y clara de la acción o instrucción.
    -   Ejemplo: "Revisar y emitir criterio", "Aprobar y proceder".
-   **Estado**: (Dropdown/Selección) Define si la acción está activa y puede ser seleccionada al derivar correspondencia.
    -   Opciones: "Activo", "Inactivo".

## Proceso de Creación

1.  **Ingresar la Clave** única para la acción.
2.  **Ingresar el Nombre** descriptivo de la acción.
3.  **Seleccionar el Estado** inicial (generalmente "Activo").
4.  **Validar la información** ingresada.
5.  **Confirmar el registro**.

## Validaciones
| Campo | Validación | Mensaje Error (Ejemplo) |
|---|---|---|
| Clave | Campo requerido, Único | "Debe ingresar una clave" o "Esta clave ya existe" |
| Nombre | Campo requerido, Único | "Debe ingresar un nombre" o "Este nombre de acción ya existe" |
| Estado | Selección requerida | "Seleccione un estado" |

## Ejemplo de Registro
```plaintext
Clave: VE
Nombre: Verificar documentación adjunta
Estado: Activo
```

## Consideraciones
- Este formulario permite ampliar el conjunto de instrucciones estándar para la derivación de correspondencia.
- Asegura la consistencia y claridad en las instrucciones dadas a los funcionarios.
- Las acciones creadas aquí estarán disponibles para su selección en los formularios de derivación de correspondencia (usualmente desde la `bandeja.md` ).
- Los registros aparecerán en la lista principal de `acciones.md` .
- Auditoría completa de operaciones.