---
sidebar_position: 4
---

# Gestión de Solicitudes de Inexistencias

## Descripción General

Este módulo se encarga de registrar y gestionar las solicitudes realizadas por los usuarios cuando un material o suministro requerido no se encuentra disponible en el inventario del almacén correspondiente. Permite dar seguimiento a estas necesidades para futuras adquisiciones o transferencias.

## Tablero Principal de Solicitudes de Inexistencias

El tablero principal muestra todas las solicitudes de inexistencias registradas.

> **Información:** Aquí se muestran las solicitudes de inexistencias que han sido enviadas por los usuarios.

### Funcionalidades Clave del Tablero:

*   **Visualización y Paginación:** Opciones para mostrar 10, 25, 50 o 100 registros por página.
*   **Filtrado Rápido por Estado:** Botones para filtrar solicitudes por "Todos", "Pendientes", "Aprobados", "Rechazados".
*   **Búsqueda y Ordenamiento:** (Asumido) Funcionalidad para buscar y ordenar por columnas.
*   **Acciones Directas:** (Asumido) Posibles acciones como "Ver Detalle", "Aprobar", "Rechazar" según el estado y permisos.

### Estructura de la Tabla de Solicitudes de Inexistencias:

La tabla principal muestra la siguiente información clave para cada solicitud de inexistencia:

| Columna         | Descripción                                                                 | Ejemplo de Dato (Registro 17)                               | Origen / Notas                     |
| :-------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------ | :--------------------------------- |
| **Nro°**        | Identificador único de la solicitud de inexistencia.                        | `17`                                                          | Secuencial, Automático             |
| **Solicitante** | Nombre y cargo del funcionario que reporta la inexistencia.                 | `FERNANDO NAURO ROJAS - DIRECTOR/A GESTION TERRITORIAL`       | Base de datos de usuarios          |
| **Oficina**     | Unidad administrativa del solicitante. Incluye gestión y dependencia.       | `Gestion: 2023` <br/> `DIRECCION DE GESTION TERRITORIAL` <br/> `Secretaria Dptal. Desarrollo Indigena` | Catálogo oficial de unidades       |
| **Nro Form**    | Número de formulario o referencia interna de la solicitud de inexistencia.  | `FI-DDGT-0001/2023`                                           | Formato específico / Manual        |
| **Fecha Sol.**  | Fecha en que se reportó o se requirió el material inexistente.              | `26/03/2024`                                                  | Ingreso manual (DD/MM/AAAA)        |
| **Fecha Reg.**  | Fecha y hora exactas en que se registró la solicitud en el sistema.         | `26/03/2024 12:10:09` <br/> `(hace 1 año)`                    | Timestamp automático + Relativo    |
| **Sucursal**    | Almacén donde se detectó la inexistencia o al que corresponde la solicitud. | `ALMACEN - ALMACEN CENTRAL GAD-BENI`                          | Selección / Catálogo de almacenes |
| **Estado**      | Estado actual del procesamiento de la solicitud de inexistencia.            | `Pendiente`                                                   | Predefinido (Pendiente, Aprobado, etc.) |
| **Acción**      | Botones para operaciones específicas (Ver, Aprobar, Rechazar, etc.).        | (Varía según estado y permisos, no visible en ejemplos)       | Según rol y estado                 |

## Procesos Disponibles (Flujo Típico)

1.  **Registro:** Un usuario, al no encontrar un material necesario durante una solicitud normal o al verificar stock, registra una "Solicitud de Inexistencia", detallando el material faltante.
2.  **Revisión (Almacén):** El personal de almacén revisa las solicitudes de inexistencias pendientes. Verifica si realmente no hay stock o si existe un sustituto.
3.  **Aprobación/Rechazo:**
    *   **Aprobar:** Si se confirma la inexistencia y la necesidad, se aprueba la solicitud (Estado: "Aprobado"). Esto puede iniciar un proceso de compra o transferencia.
    *   **Rechazar:** Si el material existe, no es necesario, o hay un error, se rechaza la solicitud (Estado: "Rechazado") con una justificación.
4.  **Seguimiento:** Las solicitudes aprobadas sirven como base para la planificación de compras o gestión de inventario.

### Filtrado y Búsqueda
*   Utilizar los botones de estado ("Pendientes", "Aprobados", etc.) para filtrar la vista.
*   Ajustar la paginación (10, 25, 50, 100) según sea necesario.

## Ejemplos de Registros en el Tablero

```plaintext
# Registro 1
Nro°: 17
Solicitante: FERNANDO NAURO ROJAS - DIRECTOR/A GESTION TERRITORIAL
Oficina: Gestion: 2023 / DIRECCION DE GESTION TERRITORIAL / Secretaria Dptal. Desarrollo Indigena
Nro Form: FI-DDGT-0001/2023
Fecha Solicitud: 26/03/2024
Fecha Registro: 26/03/2024 12:10:09 (hace 1 año)
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Estado: Pendiente
Acción: (No especificada)

# Registro 2
Nro°: 16
Solicitante: ELIZABETH VARGAS SALINAS - RESPONSABLE ALMACEN CENTRAL INGRESO - EGRESOS
Oficina: Gestion: 2023 / DIRECCION DPTAL. ADMINISTRATIVA GAD - BENI / Secretaria Departamental de Administracion y Finanzas
Nro Form: FI-DADM-0007/2023
Fecha Solicitud: 26/03/2024
Fecha Registro: 26/03/2024 11:53:10 (hace 1 año)
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Estado: Aprobado
Acción: (No especificada)