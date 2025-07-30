---
sidebar_position: 6 # Ajusta este número según la posición deseada en la barra lateral
---

# Directorio Telefónico

## Vista General

Este módulo proporciona un directorio centralizado de los números de teléfono internos y los responsables de los cargos dentro del Gobierno Autónomo Departamental del Beni. Facilita la búsqueda rápida de contactos dentro de la institución.

## Tablero Principal del Directorio Telefónico

El tablero principal muestra un listado de los registros telefónicos, agrupados por área o "Directorio Grupo".

### Funcionalidades Clave del Tablero:

*   **(Implícito) Crear Registro:** Botón o enlace para acceder al formulario "Crear registro Telefónico".
*   **Mostrar Registros:** Opción para seleccionar la cantidad de registros a mostrar por página (ej. `10`).
*   **Búsqueda:** Campo "Ingrese busqueda..." para filtrar registros por Nombre, Cargo, Número Interno, etc.
*   **Filtro:** (Funcionalidad específica) Campo "Filtro:" que podría permitir filtrar por "Directorio Grupo" u otro criterio.
*   **Agrupación:** Los registros se muestran agrupados por "Directorio Grupo" (ej. "DESPACHO DE GOBERNACIÓN", "PROTOCOLO").

### Estructura de la Tabla (por Grupo):

Dentro de cada grupo, la tabla presenta la siguiente información:

| Columna             | Descripción                                         | Tipo         | Ejemplo (DESPACHO DE GOBERNACIÓN) | Notas                                     |
| :------------------ | :-------------------------------------------------- | :----------- | :-------------------------------- | :---------------------------------------- |
| **Cargo Responsable**| El cargo oficial asociado al número interno.        | Texto        | `SECRETARIA DEL GOBERNADOR`       | Define la función o puesto.               |
| **Nombre**          | Nombre completo de la persona que ocupa el cargo.   | Texto        | `MARTHA AMERICA PEREZ`    | Identifica a la persona.                  |
| **Número Interno**  | El número de extensión telefónica asignado.         | Numérico/Texto| `110`                             | El número corto para llamadas internas.   |
| **Acciones**        | Botones para operaciones sobre el registro.         | (Botones)    | (Vacío en ejemplos)             | Probablemente `Editar`, `Eliminar`.       |

## Acciones Comunes Disponibles por Registro (Inferido)

*   **Editar:** Abrir el formulario para modificar los datos del registro telefónico.
*   **Eliminar:** Quitar un registro del directorio (puede ser borrado lógico o físico).

## Crear/Editar Registro Telefónico (Formulario)

Al hacer clic en "Crear" o "Editar", se muestra un formulario con los siguientes campos:

### Campos del Formulario:

*   **Funcionario:** (Búsqueda/Selección) Campo para buscar y seleccionar al funcionario al que se asociará el registro. Es probable que permita buscar por nombre o CI.
*   **Cargo responsable:** (Campo de texto) Para ingresar o modificar el nombre del cargo asociado al número.
    *   *Validación:* Requerido.
*   **Nombre:** (Campo de texto, posiblemente autocompletado) Nombre de la persona. Podría llenarse automáticamente al seleccionar el `Funcionario`.
    *   *Validación:* Requerido.
*   **Telefono interno:** (Campo numérico/texto) Para ingresar o modificar el número de extensión.
    *   *Validación:* Requerido, formato numérico.
*   **Directorio Grupo:** (Desplegable/Selección) Para seleccionar el área o grupo al que pertenece el registro (ej. "DESPACHO DE GOBERNACIÓN").
    *   *Validación:* Requerido.

### Proceso de Registro/Edición:

1.  Seleccionar el `Funcionario`.
2.  Ingresar/Modificar el `Cargo responsable`.
3.  Verificar/Ingresar el `Nombre`.
4.  Ingresar/Modificar el `Telefono interno`.
5.  Seleccionar el `Directorio Grupo`.
6.  Confirmar (Guardar) los cambios. El registro aparecerá o se actualizará en el tablero principal, dentro de su grupo correspondiente.

## Ejemplos de Registros en el Tablero

**Grupo: DESPACHO DE GOBERNACIÓN**
```plaintext
Cargo Responsable: SECRETARIA DEL GOBERNADOR
Nombre: MARTHA AMERICA PEREZ 
Número Interno: 110
Acciones: (Varía)

Cargo Responsable: SECRETARIA DE DESPACHO
Nombre: MARIANA PEREZ
Número Interno: 112
Acciones: (Varía)