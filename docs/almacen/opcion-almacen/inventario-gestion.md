---
sidebar_position: 6 # Ajusta la posición según necesites en tu menú lateral
---

# Gestión de Inventarios por Periodo (Gestión)

## Descripción General

Este módulo permite administrar y controlar los diferentes periodos o ciclos de inventario (denominados "Gestión") para un almacén o sucursal específica. Facilita la apertura, seguimiento y cierre de inventarios anuales o por periodos definidos, asegurando un control contable y administrativo adecuado de las existencias.

## Tablero Principal de Gestión de Inventario

El tablero principal muestra el listado de las gestiones de inventario registradas para la sucursal actualmente seleccionada (Ej: `ALMACEN - SERVICIO REGIONAL DE SALUD AMAZONICO (SEREAS)`). Permite visualizar el estado de cada gestión y acceder a acciones específicas.

### Elementos de la Interfaz:

*   **Encabezado:**
    *   `Tablero`: Enlace o indicador de la sección principal.
    *   `Inventory`: (Podría ser "Inventario" o "Gestiones") Título del módulo.
    *   `28`: Posiblemente un contador o indicador (requiere clarificación).
    *   `FABRICIO PEREZ PEREIRA`: Nombre del usuario conectado.
    *   `Inventario [NOMBRE_SUCURSAL]`: Indica claramente la sucursal para la cual se está viendo la gestión de inventario.
*   **Controles de Tabla:**
    *   `Mostrar X registros`: Permite seleccionar cuántas gestiones mostrar por página (10, 25, 50, 100).
    *   `Buscar:`: Campo para filtrar las gestiones por ID, Año (`Gestion`), Estado, etc.
*   **Paginación:**
    *   `Mostrando registros del X al Y de un total de Z registros`: Información sobre los registros visibles.
    *   `Anterior` / `Siguiente`: Botones para navegar entre páginas.
*   **Pie de Página:** Información de copyright (`Copyright GAD BENI V0.0.1 Powered by The Control Group`).

### Estructura de la Tabla de Gestiones:

La tabla principal muestra la siguiente información clave para cada gestión de inventario:

| Columna             | Descripción                                                                 | Ejemplo de Dato (Registro 55) | Origen / Notas                                     |
| :------------------ | :-------------------------------------------------------------------------- | :---------------------------- | :------------------------------------------------- |
| **Id**              | Identificador único de la gestión de inventario en el sistema.              | `55`                          | Secuencial, Automático                             |
| **Gestion**         | Año o periodo al que corresponde el ciclo de inventario.                    | `2025`                        | Generalmente el año fiscal o periodo definido      |
| **Fecha Inicio**    | Fecha en que se inició o aperturó formalmente la gestión del inventario.    | `17/02/2025`                  | Ingreso manual o automático al crear la gestión    |
| **Fecha Finalizacion**| Fecha en que se cerró la gestión. Estará vacía (`Sin Fecha`) si aún está abierta. | `Sin Fecha`                   | Se actualiza al ejecutar la acción "Cerrar Gestion"|
| **Estado**          | Situación actual de la gestión (Ej: ABIERTA, CERRADA, PENDIENTE).           | `ABIERTA`                     | Cambia según las acciones (Apertura, Cierre)       |
| **Accion**          | Botones para operaciones específicas sobre la gestión.                      | (Ej: `Historial`, `Cerrar Gestion`) | Depende del estado de la gestión y los permisos |

## Procesos Disponibles

*   **Apertura de Gestión:** (Asumido) Debe existir un proceso (probablemente un botón "Nueva Gestión" o similar no visible en la captura) para crear una nueva gestión de inventario. Se definiría el año (`Gestion`) y la `Fecha Inicio`. El estado inicial sería `ABIERTA`.
*   **Cerrar Gestion:**
    1.  Al hacer clic en el botón "Cerrar Gestion" (o similar) para una gestión en estado `ABIERTA`, se mostrará un diálogo de confirmación.
    2.  **Diálogo de Confirmación:**
        *   **Pregunta:** `Desea cerrar gestion?`
        *   **Advertencia:** Se mostrará un mensaje crítico: `Advertencia: Una ves cerrada la gestion actual, se cerrara para todos los almacenes y no se podra re abrir la gestion que haya sido cerrada.` Es crucial entender que esta acción es **irreversible** y afecta a **todas las sucursales/almacenes**.
        *   **Observación:** Se requerirá ingresar un comentario o motivo en el campo `Observación.`.
    3.  Al confirmar (y proporcionar la observación), la acción marca la finalización del periodo de inventario, registra la `Fecha Finalizacion`, guarda la `Observación` y cambia el `Estado` de la gestión a `CERRADA`.
    4.  Una vez cerrada, no se podrán registrar más movimientos de inventario (ingresos, egresos, ajustes) bajo esa gestión.
*   **Ver Historial:** Al hacer clic en el botón "Historial" (o similar) asociado a una gestión específica en el tablero principal, se accede a una pantalla que muestra el registro histórico de las gestiones de inventario.

    ### Pantalla de Historial de Gestiones

    Esta pantalla muestra un registro de las gestiones pasadas o eventos importantes relacionados con los ciclos de inventario.

    **Elementos de la Interfaz:**
    *   **Encabezado:** Similar al tablero principal, con el título "Historial". Puede incluir contadores (`5`, `10`) cuyo significado requiere clarificación (¿número de registros?, ¿acciones?).
    *   **Controles de Tabla:** `Mostrar X registros`, `Buscar:`.
    *   **Tabla de Historial:** Muestra información detallada de cada registro histórico.
    *   **Paginación:** Navegación estándar.
    *   **Pie de Página:** Información de copyright.

    **Estructura de la Tabla de Historial:**

    | Columna             | Descripción                                                                 | Ejemplo de Dato (Registro 9) | Origen / Notas                                     |
    | :------------------ | :-------------------------------------------------------------------------- | :---------------------------- | :------------------------------------------------- |
    | **Id**              | Identificador único del registro de historial.                              | `9`                           | Secuencial, Automático                             |
    | **Gestion**         | Año o periodo al que corresponde el ciclo de inventario relacionado.        | `2022`                        | Año fiscal o periodo definido                      |
    | **Fecha Inicio**    | Fecha de inicio de la gestión referenciada.                                 | `01/01/2022`                  | Dato de la gestión original                        |
    | **Fecha Finalizacion**| Fecha de cierre de la gestión referenciada.                                 | `31/12/2022`                  | Dato de la gestión original                        |
    | **Cancelado Por**   | Usuario que realizó alguna acción relevante (Ej: cierre, cancelación).      | `Ignacio`                     | Nombre del usuario registrado                      |
    | **Observación**     | Descripción o motivo del registro histórico (Ej: apertura, cierre, ajuste). | `apertura 2022`               | Texto descriptivo ingresado manualmente           |
    | **Archivo**         | (Opcional) Enlace o referencia a un documento adjunto relacionado.          | (Vacío)                       | Podría contener un enlace a un PDF, etc.           |

    **Ejemplo de Registro en el Historial:**
    ```plaintext
    Id: 9
    Gestion: 2022
    Fecha Inicio: 01/01/2022
    Fecha Finalizacion: 31/12/2022
    Cancelado Por: Ignacio
    Observación: apertura 2022
    Archivo: (Vacío)
    ```

## Consideraciones Importantes
*   La gestión de inventario (`Gestion`) es fundamental para el control periódico del stock, la valoración de existencias y el cierre contable/administrativo.
*   El estado `ABIERTA` indica que el periodo está activo y se pueden registrar operaciones de inventario.
*   El estado `CERRADA` indica que el periodo ha finalizado y está bloqueado para nuevas operaciones.
*   La correcta gestión de estos periodos es crucial para la integridad de los datos de inventario.
*   Normalmente, se requiere un permiso específico (Ej: Jefe de Almacén, Administrador) para abrir o cerrar gestiones.

## Ejemplo de Registro en el Tablero

```plaintext
Id: 55
Gestion: 2025
Fecha Inicio: 17/02/2025
Fecha Finalizacion: Sin Fecha
Estado: ABIERTA
Accion: (Botones como "Historial", "Cerrar Gestion")