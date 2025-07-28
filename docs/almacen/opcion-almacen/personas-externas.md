---
sidebar_position: 19
---

# Gestión de Personas Externas

## Descripción General

Este módulo permite administrar el registro y la autorización de personas externas (que no son empleados directos o no tienen usuario regular en el sistema) que necesitan interactuar con los almacenes o realizar operaciones específicas dentro del sistema del Gobierno Autónomo Departamental del Beni. Gestiona su identificación, cargo, y el período de validez de su autorización.

## Tablero Principal de Personas Externas ("People_ext")

El tablero principal muestra el listado de todas las personas externas registradas, permitiendo su consulta y gestión. La interfaz incluye elementos como el logo y el nombre del usuario conectado (Ej: `MILTON DANIEL HIPAMO CHOLIMA`).

### Funcionalidades Clave del Tablero:

*   **Visualización y Paginación:** Opciones para mostrar 10, 25, 50 o 100 registros por página (Ej: `Mostrar 10 registros`). Se indica el rango de registros mostrados y el total (Ej: `Mostrando del 1 al 10 de 26 registros`). Navegación entre páginas disponible.
*   **Búsqueda y Filtrado:** (Asumido) Funcionalidad para buscar por nombre, CI, cargo, etc., y filtrar por estado (Activo/Inactivo).
*   **Acciones Directas:** Botones por registro para acciones como "Editar", "Desactivar", "Ver Historial", etc., dependiendo del estado y permisos.

### Estructura de la Tabla de Personas Externas:

La tabla principal muestra la siguiente información clave para cada persona externa registrada:

| Columna           | Descripción                                                              | Ejemplo de Dato (Registro 27)                               | Origen / Notas                     |
| :---------------- | :----------------------------------------------------------------------- | :---------------------------------------------------------- | :--------------------------------- |
| **ID**            | Identificador único del registro de la persona externa.                  | `27`                                                        | Secuencial, Automático             |
| **CI**            | Número de Cédula de Identidad de la persona.                             | `7634681`                                                   | Ingreso manual, único            |
| **Nombre completo** | Nombres y apellidos de la persona externa.                               | `Delia Molina Salvatierra`                                  | Ingreso manual                   |
| **Cargo**         | Función, rol o motivo por el cual se registra a la persona externa.      | `Encargada almacen Municipio santa rosa`                    | Ingreso manual                   |
| **Fecha**         | Rango de fechas durante el cual la autorización está vigente.            | `Inicio: 2024-01-23` <br/> `Fin: 2024-01-31`                 | Ingreso manual (Fecha Inicio/Fin) |
| **Estado**        | Situación actual de la autorización (Activo/Inactivo).                   | `Activo`                                                    | Predefinido (Activo, Inactivo)     |
| **Acciones**      | Botones para operaciones específicas sobre el registro.                  | (Varía según estado y permisos, no visible en ejemplos)     | Según rol y estado                 |

## Procesos Disponibles

### Registrar Nueva Persona Externa
1.  Desde el tablero "People_ext", hacer clic en el botón "Crear" (o similar).
2.  Se presentará el formulario "Crear Persona Externa".
3.  Completar la sección "Detalle Personas Externas" con la siguiente información:
    *   **Persona:** Buscar o seleccionar la persona (puede implicar ingresar CI y Nombre si no existe).
    *   **Cargo:** Ingresar el cargo o función específica para esta autorización.
    *   **Fecha Inicio:** Seleccionar o ingresar la fecha de inicio de validez (formato `dd/mm/aaaa`).
    *   **Fecha Fin:** Seleccionar o ingresar la fecha de fin de validez (formato `dd/mm/aaaa`).
4.  Guardar el registro. El estado inicial será "Activo" y la autorización será válida entre las fechas especificadas.

### Gestionar Registros Existentes
*   **Editar:** Modificar los datos (nombre, cargo, fechas) de un registro existente.
*   **Activar/Desactivar:** Cambiar el estado de la autorización. Una autorización inactiva o expirada no permite realizar operaciones.
*   **Eliminar:** (Si aplica) Borrar lógicamente un registro (puede requerir permisos especiales).
*   **Exportar:** Generar listados del personal externo (si la funcionalidad existe).

## Consideraciones Importantes
*   Las autorizaciones suelen tener una **fecha de fin** para controlar el acceso temporal.
*   El sistema podría generar alertas o notificaciones antes de que una autorización expire.
*   La gestión de personas externas generalmente requiere permisos administrativos específicos.
*   Es crucial mantener esta información actualizada para la seguridad y el control de acceso.

## Ejemplos de Registros en el Tablero

```plaintext
# Registro 1
ID: 27
CI: 7634681
Nombre completo: Delia Molina Salvatierra
Cargo: Encargada almacen Municipio santa rosa
Fecha: Inicio: 2024-01-23 / Fin: 2024-01-31
Estado: Activo
Acciones: (No especificadas)

# Registro 2
ID: 25
CI: 1710851
Nombre completo: ELIZABETH VARGAS SALINAS
Cargo: RESPONSABLE ALMACEN CENTRAL INGRESO - EGRESOS
Fecha: Inicio: 2024-01-09 / Fin: 2024-01-31
Estado: Activo
Acciones: (No especificadas)

# Registro 3
ID: 24
CI: 7656337
Nombre completo: SANDIBEL VARGAS MOYE
Cargo: ADM ALMACEN CORREGIMIENTO DEL MUNICIPIO DE SAN BORJA
Fecha: Inicio: 2024-01-03 / Fin: 2024-01-31
Estado: Activo
Acciones: (No especificadas)

# Registro 4
ID: 23
CI: 4196258
Nombre completo: ROGELIO SOLETO SARAVIA
Cargo: ADMINISTRADOR DEL ALMACEN SEDES
Fecha: Inicio: 2024-01-02 / Fin: 2024-01-31
Estado: Activo
Acciones: (No especificadas)