---
sidebar_position: 1
---

# Gestión de Publicaciones

## Descripción General

Este módulo permite registrar, gestionar y consultar las **publicaciones oficiales** del Gobierno Autónomo Departamental del Beni. Cada publicación corresponde a un documento legal específico (gaceta, decreto, resolución, etc.) que se pone a disposición pública para consulta y descarga.

## Tablero Principal de Publicaciones

El tablero principal ofrece una vista consolidada de todas las publicaciones, permitiendo una gestión eficiente.

### Funcionalidades Clave

*   **Creación:** Registrar nuevas publicaciones.
*   **Búsqueda:** Buscar por título, etiquetas o descripción.
*   **Filtrado por Tipo:** Ver publicaciones por categoría.
*   **Destacados:** Marcar publicaciones importantes.
*   **Descarga:** Acceso a archivos PDF.

### Estructura de la Tabla

| Campo                    | Descripción                                           |
| :----------------------- | :----------------------------------------------------- |
| ID                       | Identificador único                                   |
| Título                   | Nombre del documento                                 |
| Tipo                     | Categoría (Gaceta, Decreto, Resolución, etc.)         |
| Fecha Publicación        | Fecha de publicación en el sistema                   |
| Fecha Vigencia           | Fecha de entrada en vigencia                          |
| Archivo                  | Documento PDF adjunto                                 |
| Destacado                | Marcado de importancia                                |
| Vistas                   | Número de visualizaciones                            |

## Flujo de Gestión

### 1. Registrar una Nueva Publicación

1.  **Acceder al Admin:** Navegar a Publicaciones en Voyager.
2.  **Nueva Publicación:** Hacer clic en "Add New".
3.  **Completar Datos:**

    **Información General:**
    *   Título del documento.
    *   Tipo de publicación (relación).
    *   Etiquetas (palabras clave separadas por comas).
    *   Descripción breve.

    **Fechas:**
    *   Fecha de publicación.
    *   Fecha de entrada en vigencia.

    **Archivo:**
    *   Cargar documento PDF.

    **Opciones:**
    *   Marcar como destacado.

4.  **Guardar:** Confirmar el registro.

### 2. Campos Detallados

| Campo                     | Tipo      | Requerido | Descripción                                        |
| :------------------------ | :-------- | :-------- | :------------------------------------------------- |
| Título                    | STRING    | Sí        | Título oficial del documento                      |
| Tipo                      | RELATION  | Sí        | Relación con tipo de publicación                  |
| Etiquetas                 | TEXT      | No        | Palabras clave para búsqueda                       |
| Descripción               | TEXT      | No        | Resumen o sumilla del contenido                   |
| Fecha Publicación         | DATE      | Sí        | Fecha en que se publica                           |
| Fecha Vigencia            | DATE      | No        | Fecha en que entra en vigor                       |
| Archivo                   | FILE      | No        | Documento PDF                                     |
| Destacado                 | BOOLEAN   | No        | Marcar como publicación importante                |
| Vistas                    | INTEGER   | Auto      | Contador de visualizaciones                       |

### 3. Búsqueda de Publicaciones

El portal público permite buscar por:

*   **Título:** Nombre del documento.
*   **Etiquetas:** Palabras clave asociadas.
*   **Descripción:** Texto del resumen.

**Ejemplo de búsqueda:**
```
Usuario ingresa: "decreto tránsito"
Sistema busca en: título, etiquetas y descripción
Resultado: Todos los documentos que contengan "tránsito" o "decreto"
```

### 4. Publicaciones Destacadas

Las publicaciones marcadas como destacadas aparecen prioritariamente:

*   Se muestran primero en el listado.
*   Pueden tener un diseño visual especial.
*   Útil para comunicados importantes.

## Modelo de Datos

### Campos de Publicación

| Campo                     | Tipo      | Descripción                                        |
| :------------------------ | :-------- | :------------------------------------------------- |
| id                        | INTEGER   | Identificador único                               |
| publications_type_id      | INTEGER   | Relación con tipo de publicación                   |
| title                     | STRING    | Título del documento                               |
| tags                      | TEXT      | Etiquetas separadas por comas                      |
| description               | TEXT      | Descripción/resumen                               |
| publication_date         | DATE      | Fecha de publicación                              |
| effective_date            | DATE      | Fecha de entrada en vigencia                      |
| file                      | STRING    | Ruta del archivo PDF                               |
| featured                  | BOOLEAN   | Publicación destacada                             |
| views                     | INTEGER   | Contador de visualizaciones                       |
| created_at                | TIMESTAMP | Fecha de creación                                 |
| deleted_at                | TIMESTAMP | Eliminación lógica                                |

## Visualización Pública

### Vista por Tipo

1.  **Acceder:** Clic en card de tipo en la página principal.
2.  **URL:** `/gacetas`, `/decretos`, etc.
3.  **Contenido:** Lista de publicaciones del tipo seleccionado.

### Vista de Detalle

Cada publicación muestra:
*   Título completo.
*   Tipo al que pertenece.
*   Fecha de publicación.
*   Fecha de vigencia.
*   Descripción.
*   Archivo PDF para descarga.
*   Número de vistas.

### Descarga de PDF

1.  **Ubicar publicación:** En el listado o resultados de búsqueda.
2.  **Clic en archivo:** Enlace al documento PDF.
3.  **Resultado:** Descarga o visualización del archivo.

## Estados de la Publicación

| Estado            | Descripción                                                    |
| :---------------- | :-------------------------------------------------------------- |
| **Activo**         | Publicación visible públicamente                               |
| **Eliminado**      | Eliminación lógica, no visible                                 |
| **Destacado**      | Marcado especial para prioridad                                |

## Mejores Prácticas

1.  **Títulos claros:** Usar el nombre oficial completo del documento.
2.  **Etiquetas útiles:** Incluir variaciones y sinónimos.
3.  **Descripciones concisas:** Resumir el contenido principal.
4.  **Archivos completos:** Verificar que el PDF esté completo y legible.
5.  **Fechas correctas:** Asegurar precisión en fechas de publicación y vigencia.
6.  **Destacar lo importante:** Marcar solo publicaciones relevantes.

## Control de Vistas

El sistema registra cada visualización:

```php
// El contador se incrementa al acceder a la publicación
$publication->views = $publication->views + 1;
$publication->save();
```

**Propósito:**
*   Medir interés ciudadana.
*   Identificar documentos más consultados.
*   Informar decisiones de contenido.

## Integración

Las publicaciones se relacionan con:
*   **Tipos de Publicación:** Cada publicación tiene un tipo.
*   **Panel Admin:** Gestión completa vía Voyager.