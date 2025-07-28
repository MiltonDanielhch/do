---
sidebar_position: 6 # Ajusta según la posición deseada
---

# Gestión de Cargos

## Vista General

Este módulo centraliza la administración de los cargos funcionales y presupuestarios dentro de la estructura organizacional del Gobierno Autónomo Departamental del Beni, incluyendo su creación, asignación a unidades y definición salarial.

## Tablero Principal de Cargos

El tablero principal muestra un listado paginado de todos los cargos registrados en el sistema.

### Funcionalidades Clave del Tablero:

*   **Añadir Cargo:** Botón para abrir el formulario de creación de un nuevo cargo.
*   **Mostrar Entradas:** Opciones para seleccionar la cantidad de registros a mostrar por página (ej. `10`, `25`, `50`, `100`).
*   **Buscar:** Campo para filtrar los cargos por diversos criterios (ej. Nombre, Item, Nivel, Dirección Administrativa).
*   **(Implícito) Paginación:** Controles para navegar entre las páginas de resultados.

### Estructura de la Tabla de Cargos:

La tabla principal presenta la siguiente información detallada para cada cargo:

| Columna                  | Descripción                                                                                             | Formato/Ejemplo                                                                                                | Notas                                                                                                                                                           |
| :----------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Id**                   | Identificador único del cargo en el sistema.                                                            | Numérico (`926`)                                                                                               | Asignado automáticamente.                                                                                                                                       |
| **Item**                 | Número de ítem presupuestario asociado al cargo.                                                        | Numérico (`123`, `59`)                                                                                         | Vincula el cargo a una posición presupuestaria específica.                                                                                                      |
| **Nivel**                | Nivel jerárquico o salarial del cargo dentro de la escala institucional.                                  | Numérico (`1`, `10`)                                                                                           | Define la posición relativa del cargo.                                                                                                                          |
| **Nombre**               | Denominación oficial del cargo.                                                                         | Texto (`JEFE DE LOS JEFES`, `JEFE DE UNIDAD II - COORDINACIÓN`)                                                |                                                                                                                                                                 |
| **Category**             | Clasificación o agrupación funcional del cargo (puede indicar la unidad principal o tipo).                | Texto (`Corregimiento Municipio de Trinidad`, `SECRETARÍA DEPARTAMENTAL DE DESARROLLO HUMANO`)                 | Ayuda a organizar los cargos.                                                                                                                                   |
| **Dirección Administrativa**| Unidad administrativa de nivel superior a la que pertenece el cargo.                                    | Texto (Puede mostrar `Sin resultados` si no aplica o no está asignada)                                         | Indica la dependencia principal.                                                                                                                                |
| **Unidad Administrativa**| Unidad específica o departamento donde se ubica el cargo (puede estar vacío).                             | Texto (Puede mostrar `Sin resultados`)                                                                         | Detalla la ubicación funcional.                                                                                                                                 |
| **Salario**              | Remuneración mensual bruta asignada al cargo.                                                           | Decimal (`76565.00`, `6880.00`)                                                                                | Expresado en Bolivianos (Bs.).                                                                                                                                  |
| **Estado**               | Situación actual del cargo (si está activo y puede ser ocupado, o inactivo).                              | Texto (`Activo`, `Inactivo`)                                                                                   | Controla la disponibilidad del cargo.                                                                                                                           |
| **Registrado**           | Fecha y hora en que se creó o modificó por última vez el registro del cargo.                              | Timestamp (`2025-04-01 13:11:03`) <br/> Tiempo relativo (`hace 1 mes`)                                         | Auditoría básica del registro.                                                                                                                                  |
| **Acciones**             | Operaciones disponibles para cada cargo.                                                                | Botones (Ej: `Editar`, `Activar/Desactivar`, `Ver Historial`)                                                  | Permite gestionar el registro específico (los botones exactos pueden variar).                                                                                   |

## Añadir Cargo (Formulario)

Al hacer clic en "Añadir Cargo", se muestra un formulario (posiblemente en un modal) para crear un nuevo registro con los siguientes campos:

### Campos del Formulario:

*   **Item:** (Numérico) Número de ítem presupuestario que se asignará al nuevo cargo. *Validación: Requerido, probablemente único y debe existir en presupuesto.*
*   **Nivel:** (Numérico/Desplegable) Nivel jerárquico o salarial para el cargo. *Validación: Requerido.*
*   **Nombre:** (Texto) Denominación oficial del nuevo cargo. *Validación: Requerido.*
*   **Category:** (Desplegable/Texto) Selección o ingreso de la categoría funcional o unidad principal. *Validación: Requerido.*
*   **Dirección Administrativa:** (Desplegable) Selección de la unidad administrativa superior. *Validación: Requerido.*
*   **Unidad Administrativa:** (Desplegable, opcional) Selección de la unidad específica (si aplica).
*   **Salario:** (Numérico) Monto del salario mensual bruto. *Validación: Requerido, numérico.*
*   **Estado:** (Desplegable/Radio) Estado inicial del cargo al crearlo (Ej: "Activo"). *Validación: Requerido.*

## Flujo de Trabajo Sugerido

### Creación de Nuevo Cargo:

1.  **Definir Datos Clave:** Ingresar Item, Nivel y Nombre del cargo.
2.  **Asignar Ubicación:** Seleccionar Categoría, Dirección y Unidad Administrativa.
3.  **Establecer Salario y Estado:** Ingresar el monto salarial y definir el estado inicial.
4.  **Validar y Guardar:** Verificar la información (especialmente el ítem y salario contra presupuesto) y confirmar la creación. El sistema asignará un ID.

## Funcionalidades Adicionales (Potenciales)

*   **Filtros Avanzados:** Por Nivel, Dirección/Unidad Administrativa, Rango Salarial, Estado.
*   **Edición:** Modificar datos de cargos existentes (puede requerir permisos y validaciones presupuestarias).
*   **Activación/Desactivación:** Cambiar el estado de un cargo. Los cargos inactivos no deberían poder asignarse.
*   **Reportes:** Generar listados de cargos (escala salarial, organigrama, cargos vacantes/ocupados).
*   **Historial:** Ver un registro de cambios realizados sobre un cargo (cambios de salario, estado, asignación).

## Consideraciones Importantes

1.  La gestión de **Items** es crítica y debe estar sincronizada con el módulo de Presupuesto. Un ítem usualmente representa una posición financiada.
2.  Los **Niveles** y **Salarios** deben seguir la escala salarial aprobada por la institución.
3.  La asignación a **Direcciones/Unidades Administrativas** define la estructura organizacional.
4.  Los cargos **Inactivos** no deben estar disponibles para nuevas contrataciones o asignaciones.
5.  La creación y modificación de cargos, especialmente los de alto nivel o con cambios salariales significativos, puede requerir **aprobaciones** de RRHH o instancias superiores.
6.  Este módulo es fundamental para la **integración** con Contrataciones (para asignar personas a cargos) y Planillas (para el cálculo de salarios).

## Ejemplo de Registro (Formato Tabla)

```plaintext
Id: 926
Item: 123
Nivel: 1
Nombre: JEFE DE LOS JEFES
Category: Corregimiento Municipio de Trinidad
Dirección Adm.: (Sin resultados)
Unidad Adm.: (Sin resultados)
Salario: 76565.00
Estado: Activo
Registrado: 2025-04-01 13:11:03 (hace 1 mes)
Acciones: (Varía)
```