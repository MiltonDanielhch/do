---
sidebar_position: 5 # Ajusta según la posición deseada
---

# Gestión de Programas y Proyectos

## Vista General

Este módulo permite la creación, gestión y seguimiento de los programas y proyectos institucionales registrados en el sistema MAMORÉ del Gobierno Autónomo Departamental del Beni, vinculándolos a sus respectivas fuentes de financiamiento y unidades ejecutoras.

## Tablero Principal de Programas/Proyectos

El tablero principal muestra un listado paginado de todos los programas y proyectos registrados.

### Funcionalidades Clave del Tablero:

*   **Añadir Programa/Proyecto:** Botón para abrir el formulario de creación de un nuevo registro.
*   **Mostrar Registros:** Opciones para seleccionar la cantidad de registros a mostrar por página (`10`, `25`, `50`, `100`).
*   **Buscar:** Campo para filtrar los programas/proyectos por diversos criterios (ej. Nombre, ID, Dirección Administrativa, Partida).
*   **(Implícito) Paginación:** Controles para navegar entre las páginas de resultados.

### Estructura de la Tabla de Programas/Proyectos:

La tabla principal presenta la siguiente información clave para cada programa o proyecto:

| Columna                  | Descripción                                                                                             | Formato/Ejemplo                                                                                                | Notas                                                                                                                                  |
| :----------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **N°**                   | Número secuencial en la vista actual.                                                                   | Numérico (`1`, `2`, `3`)                                                                                       | Facilita la referencia en la página actual.                                                                                            |
| **ID**                   | Identificador único del programa/proyecto en el sistema.                                                | Numérico (`612`, `611`)                                                                                        | Asignado automáticamente.                                                                                                              |
| **Nombre**               | Nombre descriptivo del programa o proyecto.                                                             | Texto (`SEGURIDAD INFORMATICA`) <br/> `(Tipo)` (`eventual`, `Consultoría de línea`)                             | Muestra el nombre y el tipo asociado para rápida identificación.                                                                       |
| **Dirección Administrativa**| Unidad o dependencia responsable de la ejecución del programa/proyecto.                                 | Texto (`Secretaria Departamental de Administracion y Finanzas`)                                                | Indica la unidad ejecutora.                                                                                                            |
| **Partida**              | Código presupuestario asignado para el financiamiento.                                                  | Texto (`123`, `25220`)                                                                                         | Debe coincidir con la nomenclatura presupuestaria oficial (ej. SIGMA).                                                                 |
| **Categoría Programática**| Clasificación presupuestaria adicional que estructura el gasto.                                         | Texto (`213 344 132`, `950 0 083`)                                                                             | Define la estructura programática del presupuesto.                                                                                     |
| **Monto**                | Presupuesto total asignado al programa/proyecto para la gestión.                                        | Numérico (`23891`, `130917`)                                                                                   | Expresado en Bolivianos (Bs.).                                                                                                         |
| **Gestión**              | Año fiscal al que corresponde el registro y el presupuesto.                                             | Numérico (`2025`)                                                                                              | Indica el periodo de vigencia presupuestaria.                                                                                          |
| **Registrado**           | Fecha y hora en que se creó el registro del programa/proyecto.                                          | Fecha y Hora (`01/abr/2025 13:07`) <br/> Tiempo relativo (`hace 1 mes`)                                         | Auditoría básica del registro.                                                                                                         |
| **Acciones**             | Operaciones disponibles para cada registro.                                                             | Botones (Ej: `Editar`, `Ver Detalles`, `Eliminar`, `Restringir`)                                               | Permite gestionar el registro específico (los botones exactos pueden variar).                                                          |

## Añadir Programa/Proyecto (Formulario)

Al hacer clic en "Añadir Programa/Proyecto", se muestra un formulario para registrar un nuevo programa o proyecto con los siguientes campos:

### Campos del Formulario:

*   **Tipo:** (Desplegable) Selección del tipo de programa o proyecto (ej. "eventual", "Consultoría de línea", "Permanente", etc.). *Validación: Requerido.*
*   **Nombre:** (Texto) Nombre descriptivo y único para el programa o proyecto. (Ej: `FORTAL INSTITUCIONAL`). *Validación: Requerido.*
*   **Tipo de planilla:** (Desplegable/Texto) Puede estar vinculado al 'Tipo' o ser una selección adicional relacionada con la naturaleza del gasto o contratación asociada. *Validación: Requerido.*
*   **Dirección administrativa:** (Desplegable) Selección de la unidad o dependencia responsable de la lista predefinida (Ej: `Corregimiento Municipio de Trinidad`, `Secretaria Departamental de Administracion y Finanzas`, etc.). *Validación: Requerido.*
*   **Partida:** (Texto) Código de la partida presupuestaria asignada. *Validación: Requerido, formato numérico/alfanumérico según nomenclatura.*
*   **Categoría programátiva:** (Texto) Código de la categoría programática correspondiente. *Validación: Requerido, formato específico.*
*   **Monto:** (Numérico) Monto del presupuesto asignado en Bolivianos. *Validación: Requerido, numérico.*
*   **Gestión:** (Numérico/Desplegable) Año fiscal para el cual se registra el programa/proyecto (Ej: `2025`). *Validación: Requerido.*

## Flujo de Trabajo Sugerido

### Creación de Nuevo Programa/Proyecto:

1.  **Seleccionar Tipo y Nombre:** Definir la naturaleza y el nombre del programa/proyecto.
2.  **Asignar Unidad y Presupuesto:** Seleccionar la Dirección Administrativa responsable y completar los datos presupuestarios (Partida, Categoría, Monto, Gestión).
3.  **Validar Datos:** Asegurarse de que los códigos presupuestarios y la información sean correctos y coincidan con la planificación oficial.
4.  **Guardar Registro:** Confirmar la creación. El sistema asignará un ID y registrará la fecha.

## Funcionalidades Adicionales (Potenciales)

*   **Filtros Avanzados:** Permitir filtrar por Dirección Administrativa, Rango de Montos, Gestión, Tipo, etc.
*   **Edición:** Modificar datos de programas/proyectos existentes (puede requerir permisos).
*   **Eliminar:** Borrar un programa/proyecto (probablemente con validaciones para evitar eliminar registros en uso).
*   **Ver Detalles:** Consultar la información completa de un registro.
*   **Restringir:** Abre un modal para limitar la visibilidad o aplicabilidad del programa/proyecto a una unidad específica.
    *   **Modal: Restringir a una sola Jefatura/Unidad**
        *   **Unidad Administrativa:** (Desplegable/Búsqueda) Permite seleccionar la Jefatura o Unidad específica a la que se restringirá el programa/proyecto. *Validación: Requerido.*
*   **Reportes:** Generar informes detallados por diferentes criterios (ej. por unidad, por partida).
*   **Seguimiento Presupuestario:** Visualizar la ejecución o el estado del presupuesto asignado (si está integrado con módulos financieros).

## Consideraciones Importantes

1.  La **exactitud** de los datos presupuestarios (Partida, Categoría, Monto, Gestión) es fundamental y debe alinearse con los sistemas oficiales de presupuesto (ej. SIGMA).
2.  La selección de la **Dirección Administrativa** correcta asegura la asignación adecuada de responsabilidades.
3.  La creación y modificación de programas/proyectos usualmente requiere **permisos específicos** dentro del sistema.
4.  Este módulo es clave para la **integración** con Contrataciones, permitiendo asociar contratos a programas/proyectos específicos y controlar la ejecución presupuestaria.

## Ejemplo de Registro (Formato Tabla)

```plaintext
N°: 1
ID: 612
Nombre: SEGURIDAD INFORMATICA (Tipo: eventual)
Dirección Administrativa: Secretaria Departamental de Administracion y Finanzas
Partida: 123
Categoría Programática: 213 344 132
Monto: 23891
Gestión: 2025
Registrado: 01/abr/2025 13:07 (hace 1 mes)
Acciones: (Varía)
```