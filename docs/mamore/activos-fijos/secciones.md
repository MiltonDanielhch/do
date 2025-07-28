---
sidebar_position: 1 # Ajusta según la estructura de tu sidebar, antes de "Grupos"
---

# Gestión de Secciones (Categorías de Activos Fijos)

## Vista General

La sección de "Secciones", también referida como "Categorías de Activos" (Assets-categories), es fundamental para la organización jerárquica de los activos fijos. Estas secciones representan las clasificaciones principales bajo las cuales se agruparán los bienes de la institución.

Por ejemplo, "INMUEBLES" y "MUEBLES" son categorías generales que luego pueden contener grupos o subcategorías más específicas.

## Acceso a la Sección

Para acceder a la gestión de Secciones (Categorías):

1.  Navega al **Tablero** principal del sistema.
2.  Busca y selecciona la opción o módulo de **Activos Fijos**.
3.  Dentro de Activos Fijos, localiza la sección de **Categorías** o **Secciones** (identificada en la interfaz como "Assets-categories" en las migas de pan).

## Interfaz Principal

La pantalla principal de gestión de Secciones presenta los siguientes elementos:

*   **Título de la Sección:** "Secciones".
*   **Migas de Pan (Breadcrumbs):** Indican la ubicación actual dentro del sistema (Ej: `Tablero > Assets-categories`).
*   **Selector "Mostrar X entradas":** Permite definir cuántos registros se visualizan por página (ej. 10, 25, 50).
*   **Campo de Búsqueda:** Facilita la localización rápida de secciones específicas.
*   **Tabla de Secciones:** Lista las categorías de activos existentes con su información relevante.
*   **Paginación:** Controles para navegar entre las diferentes páginas de resultados si la lista es extensa.
*   **(Botón "Nueva Sección" o similar):** Aunque no visible directamente en la captura, es una funcionalidad estándar para añadir nuevas categorías.

### Columnas de la Tabla de Secciones

La tabla que lista las secciones (categorías) contiene las siguientes columnas:

| Columna     | Descripción                                                                                                | Ejemplo de Valor                     |
| :---------- | :--------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| **Id**      | Identificador único numérico asignado por el sistema a cada sección.                                       | `2`                                  |
| **Nombre**  | Nombre descriptivo de la categoría principal del activo.                                                   | `MUEBLES`                            |
| **Descripción** | Descripción adicional o aclaratoria sobre la sección (puede estar vacía).                                | (Vacío o texto descriptivo)          |
| **Registrado**| Fecha y hora en que la sección fue creada o registrada en el sistema. También puede mostrar tiempo relativo. | `2023-08-28 15:51:33` / `hace 1 año` |
| **Acciones**| Botones o iconos para realizar operaciones sobre la sección (ej. Editar, Eliminar, Ver Detalles).          | (Iconos de Editar/Eliminar)          |

## Funcionalidades Principales

### 1. Listar y Visualizar Secciones
La pantalla principal muestra una lista paginada de todas las secciones (categorías) registradas, permitiendo una visión general rápida.

### 2. Buscar Secciones
Utiliza el campo "Buscar:" para filtrar la lista de secciones por cualquiera de los campos visibles (Id, Nombre, etc.).

### 3. Crear una Nueva Sección
(Funcionalidad inferida, estándar en módulos de gestión)
Para añadir una nueva sección (categoría):
1.  Localiza y haz clic en el botón "Nueva Sección", "Añadir Categoría" o similar.
2.  Se presentará un formulario donde deberás completar los siguientes campos:
    *   **Nombre:** Ingresar el nombre descriptivo para la nueva sección (ej. "VEHÍCULOS", "EQUIPO DE CÓMPUTO"). (Campo Obligatorio)
    *   **Descripción:** (Opcional) Proporcionar detalles adicionales sobre la sección.
3.  Haz clic en "Guardar" o "Crear" para registrar la nueva sección.

### 4. Editar una Sección Existente
(Funcionalidad inferida a partir de la columna "Acciones")
1.  En la lista de secciones, localiza la sección que deseas modificar.
2.  En la columna "Acciones", haz clic en el icono de "Editar" (usualmente un lápiz).
3.  Se cargará un formulario con los datos actuales de la sección.
4.  Modifica los campos necesarios (Nombre, Descripción).
5.  Haz clic en "Guardar" o "Actualizar" para aplicar los cambios.

### 5. Eliminar una Sección
(Funcionalidad inferida a partir de la columna "Acciones")
1.  En la lista de secciones, localiza la sección que deseas eliminar.
2.  En la columna "Acciones", haz clic en el icono de "Eliminar" (usualmente una papelera o una 'X').
3.  El sistema solicitará una confirmación antes de proceder con la eliminación.
    *   **Nota:** Es posible que no se permita eliminar secciones que ya contengan grupos (subcategorías) o activos fijos asociados. Primero se deberían reasignar o eliminar dichos elementos dependientes.

## Consideraciones Adicionales
*   La definición clara de secciones es el primer paso para una estructuración lógica del inventario de activos fijos.
*   Estas categorías principales ayudarán a organizar los "Grupos" (subcategorías) de manera coherente.
*   El pie de página "Desarrollado por Unidad de Desarrollo de Sistemas v0.0.1" indica la autoría y versión del módulo.