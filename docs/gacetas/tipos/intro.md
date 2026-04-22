---
sidebar_position: 2
---

# Gestión de Tipos de Publicación

## Descripción General

Este módulo permite administrar los diferentes tipos de documentos legales que se publican en el portal de Gacetas Oficiales del Gobierno Autónomo Departamental del Beni. Cada tipo define una categoría específica de publicación con su propia的外观 y configuración.

## Tipos de Publicación Disponibles

### 1. Gacetas Oficiales

**Slug:** `gacetas`

Publicaciones periódicas que recopilan las resoluciones, decretos y demás normativa del período gubernamental.

| Campo           | Descripción                                           |
| :-------------- | :----------------------------------------------------- |
| Título          | "Gacetas Oficiales"                                   |
| Slug            | gacetas                                               |
| Ícono           | Clase CSS para representación visual                  |
| Imagen          | Imagen representativa de la categoría                  |
| Descripción     | Descripción de la categoría                           |

**URL pública:** `/gacetas`

**Ejemplo de uso:**
```
Gaceta Oficial del Beni - Enero 2024
Gaceta Oficial del Beni - Febrero 2024
```

### 2. Decretos

**Slug:** `decretos`

Resoluciones emitidas por la Gobernatura departamental.

**URL pública:** `/decretos`

**Ejemplo de uso:**
```
Decreto Departamental N° 001/2024
Decreto N° 045/2023 - Regulación de Tránsito
```

### 3. Resoluciones

**Slug:** `resoluciones`

Disposiciones administrativas específicas de las distintas direcciones.

**URL pública:** `/resoluciones`

**Ejemplo de uso:**
```
Resolución Administrativa N° 123/2024
Resolución de Personal - Nombramientos
```

### 4. Otros Documentos

**Slug:** `otros`

Documentos legales adicionales como convocatorias, licitaciones y comunicados.

**URL pública:** `/otros`

**Ejemplo de uso:**
```
Convocatoria a Licitación Pública
Comunicado Oficial - Suspensión de Labores
```

## Estructura de la Tabla de Tipos

| Campo          | Tipo      | Descripción                                        |
| :------------- | :-------- | :------------------------------------------------- |
| id             | INTEGER   | Identificador único                               |
| title          | STRING    | Nombre del tipo                                   |
| slug           | STRING    | URL amigable (único)                              |
| icon           | STRING    | Clase CSS del ícono                               |
| image          | STRING    | Ruta de la imagen                                 |
| description    | TEXT      | Descripción del tipo                              |
| created_at     | TIMESTAMP | Fecha de creación                                 |
| deleted_at     | TIMESTAMP | Eliminación lógica                                |

## Flujo de Gestión

### 1. Crear un Nuevo Tipo de Publicación

1.  **Acceder al Admin:** Navegar a Tipos de Publicación en Voyager.
2.  **Nuevo Registro:** Hacer clic en "Add New".
3.  **Completar Datos:**
    *   Título del tipo.
    *   Slug (URL amigable).
    *   Ícono CSS (opcional).
    *   Imagen representativa.
    *   Descripción.
4.  **Guardar:** Confirmar la creación.

### 2. Editar un Tipo Existente

1.  **Seleccionar Tipo:** En la lista de tipos, hacer clic en "Edit".
2.  **Modificar Datos:** Actualizar los campos necesarios.
3.  **Guardar Cambios:** Confirmar las modificaciones.

### 3. Eliminar un Tipo

*   **Precaución:** La eliminación de un tipo puede afectar las publicaciones existentes.
*   Se recomienda usar eliminación lógica para mantener la integridad de los datos.

## Consideraciones

*   El **slug** debe ser único y amigable para URLs.
*   La **imagen** se muestra en la card del portal público.
*   El **ícono** ayuda a identificar visualmente el tipo.
*   El campo **descripción** aparece en el portal público.

## Mejores Prácticas

1.  **Slugs consistentes:** Usar nombres simples y descriptivos.
2.  **Imágenes de calidad:** Subir imágenes representativas de cada categoría.
3.  **Descripciones claras:** Facilitar la comprensión del tipo de contenido.
4.  **No eliminar tipos activos:** Mantener tipos con publicaciones activas.