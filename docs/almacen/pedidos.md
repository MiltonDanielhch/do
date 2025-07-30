---
sidebar_position: 6
---

# Gestión de Pedidos

## Descripción General

Este módulo centraliza la visualización y gestión de todos los pedidos de materiales y suministros realizados por las diferentes unidades administrativas del Gobierno Autónomo Departamental del Beni. Permite seguir el ciclo de vida de un pedido desde su creación hasta su posible entrega o cancelación.

*(Nota: Este módulo parece ser muy similar o solaparse con el de "Gestión de Solicitudes". Es importante clarificar si "Pedidos" y "Solicitudes" representan el mismo concepto o etapas distintas del proceso).*

## Tablero Principal de Pedidos ("Outbox")

El tablero principal ofrece una vista consolidada de los pedidos, permitiendo una gestión eficiente. La interfaz incluye elementos como el logo, el nombre del usuario conectado (Ej: `MARIA CARLA PAZ`) y la paginación de resultados.

### Funcionalidades Clave del Tablero:

*   **Visualización y Paginación:** Opciones para mostrar 10, 25, 50 o 100 registros por página. Se indica el rango de registros mostrados y el total (Ej: `Mostrando del 1 al 10 de 147 registros`). Navegación entre páginas disponible (Ej: `‹123...15›`).
*   **Filtrado Rápido por Estado:** Botones para filtrar pedidos por "Pendiente", "Entregados", "Rechazados", "Eliminado".
*   **Búsqueda y Ordenamiento:** (Asumido) Funcionalidad para buscar y ordenar por columnas.
*   **Acciones Directas:** (Asumido) Botones por registro para acciones como "Ver Detalle", "Imprimir", "Anular", etc., dependiendo del estado y permisos.

### Estructura de la Tabla de Pedidos:

La tabla principal muestra la siguiente información clave para cada pedido:

| Columna         | Descripción                                                                 | Ejemplo de Dato (Registro 1061)                               | Origen / Notas                     |
| :-------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------ | :--------------------------------- |
| **Nro°**        | Identificador único del pedido.                                             | `1061`                                                        | Secuencial, Automático             |
| **Oficina**     | Unidad administrativa solicitante. Incluye gestión y dependencia superior.  | `Gestion: 2023` <br/> `DESPACHO DE LA SECRETARIA DEPARTAMENTAL DE ADMINISTRACION Y FINANZAS` <br/> `Secretaria Departamental de Administracion y Finanzas` | Catálogo oficial de unidades       |
| **Nro Pedido**  | Código formal asignado al pedido/solicitud.                                 | `DSDAF-0001/2023`                                             | Formato: PREFIJO-NNNN/AAAA         |
| **Fecha Sol.**  | Fecha en que se requiere o se creó el pedido.                               | `30/04/2025`                                                  | Ingreso manual (DD/MM/AAAA)        |
| **Fecha Reg.**  | Fecha y hora exactas en que se registró el pedido en el sistema.            | `30/04/2025 09:15:00` <br/> `(hace 1 hora)`                   | Timestamp automático + Relativo    |
| **Sucursal**    | Almacén físico al que se dirige el pedido.                                  | `ALMACEN - ALMACEN CENTRAL GAD-BENI`                          | Selección / Catálogo de almacenes |
| **Estado**      | Estado actual del procesamiento del pedido.                                 | `Aprobado`                                                    | Predefinido (Pendiente, Aprobado, Entregado, Rechazado, Eliminado, Enviado) |
| **Acción**      | Botones para operaciones específicas sobre el pedido.                       | (Varía según estado y permisos, no visible en ejemplos)       | Según rol y estado                 |

## Procesos Disponibles (Flujo Típico)

### Crear Nuevo Pedido

Para iniciar un nuevo pedido, el usuario (identificado en la interfaz, ej: `Roberto pedraza perez - Tecnico I`) utiliza el formulario de creación ("Outbox Create"). Este formulario generalmente incluye los siguientes campos:

**Cabecera del Pedido:**

*   **Almacen:** Selección del almacén de destino.
*   **Tipo Almacen:** Selección del tipo de almacén (si aplica).
*   **Solicitante:** Nombre y cargo del usuario que crea el pedido (mostrado automáticamente).
*   **Fecha de Solicitud:** Fecha y hora de creación (generada por el sistema, ej: `30/04/2025 10:59:24`).
*   **Dirección:** Selección de la Dirección administrativa a la que pertenece la unidad solicitante (Ej: `Secretaria Departamental de Administracion y Finanzas`).
*   **Unidad:** Selección de la Unidad administrativa específica que realiza el pedido (Ej: `DESPACHO DE LA SECRETARIA DEPARTAMENTAL DE ADMINISTRACION Y FINANZAS`).

**Detalle de Artículos:**

*   **Buscar producto:** Campo para buscar y seleccionar los artículos a solicitar.
*   **Tabla de Artículos Añadidos:** Muestra los artículos seleccionados con:
    *   **N°:** Numeración secuencial.
    *   **Detalle:** Descripción del artículo (Ej: `PAPEL BOND DE COLORES T/CARTA MULTICOLOR 10 COLORES 8.5"X11" RESMA`).
    *   **Cantidad:** Campo para ingresar la cantidad requerida (Ej: `2`).

Una vez completados los campos y añadidos los artículos, el usuario enviará el formulario para registrar el pedido en el sistema con estado inicial "Pendiente".

### Revisión y Aprobación/Rechazo
1.  **Revisión:** El personal de almacén o un aprobador revisa el pedido (Estado: `Pendiente`).
2.  **Aprobación/Rechazo:** El pedido es aprobado (Estado: `Aprobado`) o rechazado (Estado: `Rechazado`). Un pedido también podría ser `Eliminado` lógicamente.

### Preparación, Envío y Entrega
3.  **Preparación/Envío:** Si es aprobado, se preparan los materiales. El estado podría cambiar a `Enviado` (como en el ejemplo 1048) o directamente a `Entregado` tras la salida física.
4.  **Entrega:** Se confirma la recepción por parte de la unidad solicitante (Estado: `Entregado`).

### Filtrado y Búsqueda
*   Utilizar los botones de estado ("Pendiente", "Entregados", etc.) para una vista rápida.
*   Ajustar la paginación (10, 25, 50, 100) según sea necesario.

## Ejemplos de Registros en el Tablero

```plaintext
# Registro 1
Nro°: 1061
Oficina: Gestion: 2023 / DESPACHO DE LA SECRETARIA DEPARTAMENTAL DE ADMINISTRACION Y FINANZAS / Secretaria Departamental de Administracion y Finanzas
Nro Pedido: DSDAF-0001/2023
Fecha Solicitud: 30/04/2025
Fecha Registro: 30/04/2025 09:15:00 (hace 1 hora)
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Estado: Aprobado
Acción: (No especificada)

# Registro 2
Nro°: 1060
Oficina: Gestion: 2023 / DIRECCION DPTAL. ADMINISTRATIVA GAD - BENI / Secretaria Departamental de Administracion y Finanzas
Nro Pedido: DADM-0016/2023
Fecha Solicitud: 26/03/2024
Fecha Registro: 26/03/2024 15:11:31 (hace 1 año)
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Estado: Pendiente
Acción: (No especificada)

# Registro 3 (Ejemplo Estado Enviado)
Nro°: 1048
Oficina: Gestion: 2023 / DIRECCIÓN DPTAL. DE RECURSOS HUMANOS GAD - BENI / Secretaria Departamental de Administracion y Finanzas
Nro Pedido: DRRHH-0012/2023
Fecha Solicitud: 17/01/2024
Fecha Registro: 17/01/2024 11:12:09 (hace 1 año)
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Estado: Enviado
Acción: (No especificada)
```