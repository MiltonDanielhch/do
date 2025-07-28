---
sidebar_position: 4 # Ajusta según la posición deseada
---

# Gestión de Tipos de Trámite (Tipos de Planillas)

## Vista General

Este módulo permite administrar y configurar los diferentes tipos de trámite o categorías de planillas utilizados dentro del sistema MAMORÉ del Gobierno Autónomo Departamental del Beni. Estos tipos son fundamentales para clasificar contratos y procesos relacionados.

## Tablero Principal de Tipos de Trámite

El tablero principal muestra un listado paginado de todos los tipos de trámite/planilla registrados en el sistema.

### Funcionalidades Clave del Tablero:

*   **Añadir Tipo de trámite:** Botón para abrir el formulario de creación de un nuevo tipo.
*   **Mostrar Entradas:** Opciones para seleccionar la cantidad de registros a mostrar por página (`10`, `25`, `50`, `100`).
*   **Buscar:** Campo para filtrar los tipos de trámite por nombre, tipo de planilla, etc.
*   **(Implícito) Paginación:** Controles para navegar entre las páginas de resultados.

### Estructura de la Tabla de Tipos de Trámite:

La tabla principal presenta la siguiente información para cada tipo registrado:

| Columna          | Descripción                                                                 | Formato/Ejemplo                                     | Notas                                                                   |
| :--------------- | :-------------------------------------------------------------------------- | :-------------------------------------------------- | :---------------------------------------------------------------------- |
| **Id**           | Identificador único del tipo de trámite/planilla.                           | Numérico (`6`)                                      | Asignado automáticamente.                                               |
| **Nombre**       | Nombre descriptivo del tipo de trámite.                                     | Texto (`TGN`, `eventual`, `Permanente`)             | Identifica la categoría principal.                                      |
| **Tipo de planilla**| Clasificación específica o subcategoría de la planilla.                     | Texto (`Ninguna`, `Inversión`, `Permanente`)        | Puede agrupar tipos de trámite similares.                               |
| **Descripción**  | Detalle adicional o aclaración sobre el propósito del tipo de trámite.      | Texto (Puede estar vacío)                           | Opcional, para mayor contexto.                                          |
| **Creado**       | Fecha y hora en que se registró el tipo de trámite.                         | Timestamp (`2022-03-07 11:27:00`) <br/> Tiempo relativo (`hace 3 años`) | Auditoría básica del registro.                                          |
| **Acciones**     | Operaciones disponibles para cada tipo de trámite.                          | Botones (Ej: `Editar`, `Ver`, `Eliminar`)           | Permite gestionar el registro (los botones exactos pueden variar).      |

## Añadir Tipo de Trámite (Formulario)

Al hacer clic en "Añadir Tipo de trámite", se muestra un formulario (posiblemente en un modal) para crear un nuevo registro con los siguientes campos:

### Campos del Formulario:

*   **Nombre:** (Texto) Nombre principal para el nuevo tipo de trámite. *Validación: Requerido, probablemente único.*
*   **Tipo de planilla:** (Desplegable/Texto) Selección o ingreso de la clasificación o subcategoría de planilla asociada. *Validación: Requerido.*
*   **Descripción:** (Texto, opcional) Campo para añadir detalles adicionales sobre el uso o propósito de este tipo de trámite.

## Funcionalidades Adicionales (Potenciales)

*   **Editar:** Modificar los detalles de un tipo de trámite existente (Nombre, Tipo de planilla, Descripción).
*   **Eliminar:** Borrar un tipo de trámite (probablemente con validaciones para evitar eliminar tipos en uso).
*   **Ver Detalles:** Consultar la información completa de un registro.

## Consideraciones Importantes

1.  La correcta definición de los **Tipos de Trámite** es crucial, ya que impacta directamente en la clasificación de contratos, personal y procesos presupuestarios.
2.  Modificar o eliminar tipos existentes puede tener **consecuencias** en registros históricos y procesos activos que los utilicen. Se recomienda precaución y validación previa.
3.  La creación y edición de estos tipos generalmente requiere **permisos de administrador** o roles específicos dentro del sistema.
4.  Este módulo debe estar **integrado** con otros módulos clave como Contrataciones, Planillas y Presupuesto para mantener la coherencia de los datos.
5.  Algunos tipos base (como "Permanente") podrían estar protegidos contra eliminación.

## Ejemplo de Registro (Formato Tabla)

```plaintext
Id: 1
Nombre: Permanente
Tipo de planilla: Permanente
Descripción: (Vacío o descripción específica)
Creado: 2022-01-17 16:13:01 (hace 3 años)
Acciones: (Varía)