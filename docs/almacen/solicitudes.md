---
sidebar_position: 3
---

# Gestión de Solicitudes de Almacén

## Descripción General

Este módulo centraliza la creación, seguimiento y gestión de todas las solicitudes de materiales y suministros realizadas por las diferentes unidades del Gobierno Autónomo Departamental del Beni hacia los almacenes correspondientes.

## Tablero Principal de Solicitudes

El tablero principal ofrece una vista consolidada de todas las solicitudes, permitiendo una gestión eficiente y rápida.

### Funcionalidades Clave del Tablero:

*   **Visualización y Paginación:** Opciones para mostrar 10, 25, 50 o 100 registros por página.
*   **Filtrado Rápido por Estado:** Botones para filtrar solicitudes por "Todos", "Pendientes", "Aprobados", "Entregados", "Rechazados".
*   **Búsqueda y Ordenamiento:** Funcionalidad para buscar por cualquiera de los campos y ordenar las columnas.
*   **Acciones Directas:** Botón "Ver" por registro para acceder al detalle de la solicitud.

### Estructura de la Tabla de Solicitudes:

La tabla principal muestra la siguiente información clave para cada solicitud:

| Columna         | Descripción                                                                 | Ejemplo de Dato (Registro 1048)                               | Origen / Notas                     |
| :-------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------ | :--------------------------------- |
| **Nro°**        | Identificador único de la solicitud.                                        | `1048`                                                        | Secuencial, Automático             |
| **Solicitante** | Nombre y cargo del funcionario que realiza la solicitud.                    | `CAROLINA RODRIGUEZ RIBERA - DIRECTOR DPTAL. DE RECURSOS HUMANOS` | Base de datos de usuarios          |
| **Oficina**     | Unidad administrativa solicitante. Incluye gestión y dependencia superior.  | `Gestion: 2023` <br/> `DIRECCIÓN DPTAL. DE RECURSOS HUMANOS GAD - BENI` <br/> `Secretaria Departamental de Administracion y Finanzas` | Catálogo oficial de unidades       |
| **Nro Pedido**  | Código formal asignado a la solicitud.                                      | `DRRHH-0012/2023`                                             | Formato: PREFIJO-NNNN/AAAA         |
| **Fecha Sol.**  | Fecha en que se requiere o se creó la solicitud.                            | `17/01/2024`                                                  | Ingreso manual (DD/MM/AAAA)        |
| **Fecha Reg.**  | Fecha y hora exactas en que se registró la solicitud en el sistema.         | `17/01/2024 11:12:09` <br/> `(hace 1 año)`                    | Timestamp automático + Relativo    |
| **Sucursal**    | Almacén físico al que se dirige la solicitud.                               | `ALMACEN - ALMACEN CENTRAL GAD-BENI`                          | Selección / Catálogo de almacenes |
| **Estado**      | Estado actual del procesamiento de la solicitud.                            | `Pendiente`                                                   | Predefinido (Pendiente, Aprobado, etc.) |
| **Acción**      | Botones para operaciones específicas sobre la solicitud.                    | `[Ver]`                                                       | Según rol y estado                 |

## Procesos Disponibles

### Ver Detalle de Solicitud
1.  Localizar la solicitud deseada en el tablero.
2.  Hacer clic en el botón `Ver` en la columna "Acción".
3.  Se mostrará una pantalla o sección con la información detallada de la solicitud, estructurada de la siguiente manera:

    **Cabecera de la Solicitud:**
    *   **Almacen:** Nombre del almacén de destino (Ej: `ALMACEN - ALMACEN CENTRAL GAD-BENI`)
    *   **Nro Solicitud:** Código formal de la solicitud (Ej: `DRRHH-0012/2023`)
    *   **Solicitante:** Nombre y cargo del funcionario (Ej: `CAROLINA RODRIGUEZ  - DIRECTOR DPTAL. DE RECURSOS HUMANOS`)
    *   **Fecha de Solicitud:** Fecha y hora de la solicitud (Ej: `17/01/2024 00:00:00`)
    *   **Dirección:** Dirección administrativa a la que pertenece la unidad (Ej: `Secretaria Departamental de Administracion y Finanzas`)
    *   **Unidad:** Unidad administrativa específica que solicita (Ej: `DIRECCIÓN DPTAL. DE RECURSOS HUMANOS GAD - BENI`)

    **Detalle de Artículos Solicitados:**
    Una tabla con los siguientes campos:

    | N° | PARTIDA                               | DETALLE                                                     | UNIDAD | CANTIDAD SOLICITADA |
    | :-- | :------------------------------------ | :---------------------------------------------------------- | :----- | :------------------ |
    | 1   | 3.9.5 - ÚTILES DE ESCRITORIO Y OFICINA | CUADERNO EMPAST. T/MEDIO OFICIO                             | PIEZA  | 9,00                |
    | 2   | 3.9.5 - ÚTILES DE ESCRITORIO Y OFICINA | MARCADOR GRUESO COLOR ROJO                                  | PIEZA  | 6,00                |
    | 3   | 3.9.5 - ÚTILES DE ESCRITORIO Y OFICINA | MARCADOR PERMANENTE GRUESO, COLOR VERDE, PUNTA BISELADA     | PIEZAS | 6,00                |
    | ... | ...                                   | ...                                                         | ...    | ...                 |

    *   También puede incluir información adicional como historial de cambios, adjuntos o estado detallado de aprobación/entrega por artículo.

    **Acciones Disponibles en el Detalle (según permisos y estado):**
    *   **Botón Aprobar:** Permite al personal autorizado (generalmente de almacén) validar la solicitud. Al aprobar:
        *   El estado de la solicitud cambia de "Pendiente" a "Aprobado".
        *   Se pueden habilitar campos para indicar la cantidad a entregar por cada artículo (si difiere de la solicitada y hay stock).
        *   La solicitud queda lista para el proceso de egreso (preparación y entrega).
    *   **Botón Rechazar:** Permite al personal autorizado denegar la solicitud. Al rechazar:
        *   Generalmente se requiere ingresar un **Motivo de Rechazo** (obligatorio).
        *   El estado de la solicitud cambia a "Rechazado".
        *   La solicitud no procederá al egreso.

### Filtrado y Búsqueda
*   Utilizar los botones de estado ("Pendientes", "Aprobados", etc.) para una vista rápida.
*   Utilizar campos de búsqueda (si existen) para encontrar solicitudes por Nro°, Solicitante, Oficina, etc.
*   Ajustar la paginación (10, 25, 50, 100) para ver más o menos registros por página.

## Ejemplos de Registros en el Tablero

```plaintext
# Registro 1
Nro°: 1048
Solicitante: CAROLINA RODRIGUEZ RIBERA - DIRECTOR DPTAL. DE RECURSOS HUMANOS
Oficina: Gestion: 2023 / DIRECCIÓN DPTAL. DE RECURSOS HUMANOS GAD - BENI / Secretaria Departamental de Administracion y Finanzas
Nro Pedido: DRRHH-0012/2023
Fecha Solicitud: 17/01/2024
Fecha Registro: 17/01/2024 11:12:09 (hace 1 año)
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Estado: Pendiente
Acción: Ver

# Registro 2
Nro°: 1046
Solicitante: DAYANA MENDEZ QUIROGA - ANALISTA IV - BIENESTAR LABORAL
Oficina: Gestion: 2023 / DIRECCION DE GABINETE DESPACHO / Despacho De Gobernacion
Nro Pedido: DGD-0018/2023
Fecha Solicitud: 11/01/2024
Fecha Registro: 11/01/2024 10:31:16 (hace 1 año)
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Estado: Pendiente
Acción: Ver```