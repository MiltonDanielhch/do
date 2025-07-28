---
sidebar_position: 2 # Ajusta según la estructura de tu sidebar
---

# Gestión de Grupos (Subcategorías de Activos Fijos)

## Vista General

La sección de "Grupos", también referida como "Subcategorías de Activos" (Assets-subcategories), permite organizar y clasificar de manera más detallada los activos fijos de la institución. Cada grupo pertenece a una categoría principal de activos, proporcionando un nivel adicional de especificidad para la gestión y el reporte.

Por ejemplo, dentro de la categoría "MUEBLES", se pueden tener grupos como "EQUIPO DE COMPUTACION", "MAQUINARIA EN GENERAL", etc.

## Acceso a la Sección

Para acceder a la gestión de Grupos:

1.  Navega al **Tablero** principal del sistema.
2.  Busca y selecciona la opción o módulo de **Activos Fijos**.
3.  Dentro de Activos Fijos, localiza la sección de **Subcategorías** o **Grupos** (identificada en la interfaz como "Assets-subcategories" en las migas de pan).

## Interfaz Principal

La pantalla principal de gestión de Grupos presenta los siguientes elementos:

*   **Título de la Sección:** "Grupos".
*   **Migas de Pan (Breadcrumbs):** Indican la ubicación actual dentro del sistema (Ej: `Tablero > Assets-subcategories`).
*   **Selector "Mostrar X entradas":** Permite definir cuántos registros se visualizan por página.
*   **Campo de Búsqueda:** Facilita la localización rápida de grupos específicos.
*   **Tabla de Grupos:** Lista los grupos existentes con su información relevante.
*   **Paginación:** Controles para navegar entre las diferentes páginas de resultados si la lista es extensa.
*   **(Botón "Nuevo Grupo" o similar):** Aunque no visible directamente en la captura, es una funcionalidad estándar para añadir nuevos grupos.

### Columnas de la Tabla de Grupos

La tabla que lista los grupos contiene las siguientes columnas:

| Columna     | Descripción                                                                                                | Ejemplo de Valor                     |
| :---------- | :--------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| **Id**      | Identificador único numérico asignado por el sistema a cada grupo.                                         | `14`                                 |
| **Categoría** | Nombre de la categoría principal a la que pertenece el grupo (ej. Muebles, Inmuebles, Vehículos).          | `MUEBLES`                            |
| **Nombre**  | Nombre específico del grupo o subcategoría.                                                                | `MAQUINARIA EN GENERAL`              |
| **Descripción** | Descripción adicional o aclaratoria sobre el grupo (puede estar vacía).                                  | (Vacío o texto descriptivo)          |
| **Registrado**| Fecha y hora en que el grupo fue creado o registrado en el sistema. También puede mostrar tiempo relativo. | `2023-09-22 15:57:55` / `hace 1 año` |
| **Acciones**| Botones o iconos para realizar operaciones sobre el grupo (ej. Editar, Eliminar, Ver Detalles).            | (Iconos de Editar/Eliminar)          |

## Funcionalidades Principales

### 1. Listar y Visualizar Grupos
La pantalla principal muestra una lista paginada de todos los grupos registrados, permitiendo una visión general rápida.

### 2. Buscar Grupos
Utiliza el campo "Buscar:" para filtrar la lista de grupos por cualquiera de los campos visibles (Id, Categoría, Nombre, etc.).

### 3. Crear un Nuevo Grupo
(Funcionalidad inferida, estándar en módulos de gestión)
Para añadir un nuevo grupo:
1.  Localiza y haz clic en el botón "Nuevo Grupo", "Añadir Subcategoría" o similar.
2.  Se presentará un formulario donde deberás completar los siguientes campos:
    *   **Categoría:** Seleccionar de una lista desplegable la categoría principal a la que pertenecerá el nuevo grupo.
    *   **Nombre:** Ingresar el nombre descriptivo para el nuevo grupo (ej. "Equipo de Oficina", "Herramientas Menores"). (Campo Obligatorio)
    *   **Descripción:** (Opcional) Proporcionar detalles adicionales sobre el grupo.
3.  Haz clic en "Guardar" o "Crear" para registrar el nuevo grupo.

### 4. Editar un Grupo Existente
(Funcionalidad inferida a partir de la columna "Acciones")
1.  En la lista de grupos, localiza el grupo que deseas modificar.
2.  En la columna "Acciones", haz clic en el icono de "Editar" (usualmente un lápiz).
3.  Se cargará un formulario con los datos actuales del grupo.
4.  Modifica los campos necesarios (Categoría, Nombre, Descripción).
5.  Haz clic en "Guardar" o "Actualizar" para aplicar los cambios.

### 5. Eliminar un Grupo
(Funcionalidad inferida a partir de la columna "Acciones")
1.  En la lista de grupos, localiza el grupo que deseas eliminar.
2.  En la columna "Acciones", haz clic en el icono de "Eliminar" (usualmente una papelera o una 'X').
3.  El sistema solicitará una confirmación antes de proceder con la eliminación.
    *   **Nota:** Es posible que no se permita eliminar grupos que ya estén asociados a activos fijos registrados.

## Consideraciones Adicionales
*   La correcta definición de categorías y grupos es fundamental para una clasificación precisa y útil de los activos fijos.
*   Mantener esta información actualizada facilita la generación de reportes y la toma de decisiones.
*   El pie de página "Desarrollado por Unidad de Desarrollo de Sistemas v0.0.1" indica la autoría y versión del módulo.