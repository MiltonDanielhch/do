---
sidebar_position: 1
---

# Gestión de Informes de Auditoría

## Descripción General

Este módulo describe el funcionamiento del **portal de informes de auditoría** del Gobierno Autónomo Departamental del Beni. El sistema permite a los ciudadanos acceder a los informes de auditoría general de todas las gestiones del gobierno departamental, organizados por año de gestión.

## Tablero Principal de Informes

El portal principal muestra:

### Sección Hero

Zona superior con diseño impactante:
*   **Banner:** Imagen configurable desde Voyager Settings.
*   **Título:** "Bienvenido a [Nombre del Sitio]".
*   **Descripción:** Texto descriptivo del portal.
*   **Botones:** "Iniciar ahora" y "Ver Video".

### Sección de Informes

```
┌─────────────────────────────────────────────────────────────┐
│  INFORMES EJECUTIVOS                                        │
│  Informes de auditoría general de todas las gestiones      │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌────────────────────────────────────┐  │
│  │ AÑOS         │  │ LISTA DE INFORMES                  │  │
│  │ ────────────  │  │ ─────────────────────────────────  │  │
│  │ 2024 (5)     │  │ [Card] [Card] [Card]               │  │
│  │ 2023 (12)    │  │                                     │  │
│  │ 2022 (8)     │  │ [Card] [Card] [Card]               │  │
│  │ 2021 (10)    │  │                                     │  │
│  │ ...          │  │ [Paginación]                       │  │
│  └──────────────┘  └────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Filtro por Año

### Lista de Años

El panel izquierdo muestra los años disponibles:

```php
// En HomeController@index
$years = Publication::where('deleted_at', NULL)
    ->groupByRaw('YEAR(publish_date)')
    ->selectRaw('YEAR(publish_date) as year, COUNT(id) as count')
    ->get();
```

**Características:**
*   Cada año muestra el número de informes entre paréntesis.
*   El año actual aparece resaltado.
*   Clic en año filtra la lista de informes.

### Visualización

| Elemento           | Descripción                                           |
| :----------------- | :----------------------------------------------------- |
| Año                | Gestión (ej: 2024)                                    |
| Contador           | Número de informes en badges verdes                   |
| Estado activo      | Año seleccionado aparece destacado                    |

**Ejemplo:**
```
2024 (5)    <- 5 informes publicados
2023 (12)   <- 12 informes publicados
2022 (8)    <- 8 informes publicados
```

## Lista de Informes

### Carga Dinámica

Los informes se cargan mediante AJAX:

```javascript
function getList(page = 1){
    let search = $('#form-search input[name="search"]').val();
    let url = "{{ url('') }}";
    $.get(`${url}/search/${year}/${search ? search : ''}?page=${page}`, function(res){
        $('#list-details').html(res);
    });
}
```

### Resultado por Gestión

```php
// En HomeController@list
$list = Publication::whereRaw($query_search)
    ->whereYear('publish_date', $year)
    ->where('deleted_at', NULL)
    ->orderBy('publish_date', 'DESC')
    ->paginate(10);
```

**Ordenamiento:** Por fecha de publicación (más reciente primero).

### Tarjeta de Informe

```
┌─────────────────────────────────────────┐
│  [Icono de documento]                   │
│                                         │
│  Título del Informe de Auditoría       │
│  15/04/2024                             │
│                                         │
│  Descripción breve del contenido del   │
│  informe de auditoría...               │
│                                         │
│  [Ver documento]  Vistas: 245          │
└─────────────────────────────────────────┘
```

## Búsqueda

### Campo de Búsqueda

**Ubicación:** En la lista de resultados.

**Campos buscados:**
*   **Título:** Nombre del informe.
*   **Etiquetas:** Palabras clave asociadas.
*   **Descripción:** Resumen del contenido.

**Ejemplo:**
```
Usuario ingresa: "informe financiero"
Resultado: Todos los informes que contengan "informe" o "financiero"
```

### Funcionamiento

1.  **Ingresar texto:** En el campo de búsqueda.
2.  **Presionar Enter:** O clic en botón buscar.
3.  **Resultado:** Lista filtrada dentro del año seleccionado.

```php
$query_search = $search 
    ? '(title like "%'.$search.'%" or tags like "%'.$search.'%" or description like "%'.$search.'%")' 
    : 1;
```

## Campos del Informe

### Panel Admin (Voyager)

| Campo                  | Tipo      | Descripción                                           |
| :--------------------- | :-------- | :----------------------------------------------------- |
| Título                 | STRING    | Nombre del informe de auditoría                       |
| Tipo                   | RELATION  | Categoría (si está configurado)                       |
| Etiquetas              | STRING    | Palabras clave separadas por comas                     |
| Descripción            | TEXT      | Resumen del contenido del informe                     |
| Fecha Publicación      | DATE      | Fecha en que se publicó el informe                    |
| Fecha Vigencia         | DATE      | Fecha de promulgación del informe                     |
| Archivo                | FILE      | Documento PDF del informe                             |
| Destacado              | BOOLEAN   | Marcar como importante (0/1)                          |
| Vistas                 | INTEGER   | Contador de visualizaciones (automático)              |

### Portal Público

| Campo                  | Descripción                                           |
| :--------------------- | :----------------------------------------------------- |
| Título                 | Nombre del informe                                    |
| Fecha Publicación      | Fecha de publicación                                  |
| Descripción            | Resumen del contenido                                 |
| Archivo                | Enlace al PDF para descarga                            |
| Contador Vistas        | Número de visualizaciones                            |

## Modelo de Datos

### Publication (Informe)

| Campo                  | Tipo      | Descripción                                        |
| :--------------------- | :-------- | :------------------------------------------------- |
| id                     | INTEGER   | Identificador único                               |
| publications_type_id   | INTEGER   | Relación con tipo de publicación                   |
| user_id                | INTEGER   | Usuario que creó el registro                       |
| title                  | STRING    | Título del informe                                 |
| tags                   | STRING    | Etiquetas (texto)                                 |
| description            | TEXT      | Descripción/resumen                               |
| publish_date           | DATE      | Fecha de publicación                              |
| enact_date             | DATE      | Fecha de promulgación                             |
| file                   | STRING    | Ruta del archivo PDF                               |
| highlight              | INTEGER   | Destacado (default 1)                             |
| view                   | INTEGER   | Contador de vistas (default 0)                    |
| deleted_at             | TIMESTAMP | Eliminación lógica                                |

## Funcionalidades del Portal

### 1. Cambio de Año

```javascript
$('.list-group-item').click(function(){
    year = $(this).data('year');
    getList();
    $('.list-group-item').removeClass('active-item');
    $(this).addClass('active-item');
});
```

**Resultado:**
*   Se actualiza la variable `year`.
*   Se llama a `getList()` con el nuevo año.
*   Se resalta el año seleccionado.

### 2. Paginación

*   10 informes por página.
*   Navegación mediante AJAX.
*   Mantiene el año y búsqueda seleccionados.

### 3. Descarga de Documentos

1.  **Ubicar informe:** En la lista de resultados.
2.  **Clic en archivo:** Enlace al documento PDF.
3.  **Resultado:** Descarga o visualización del archivo.

## Estados del Informe

| Estado            | Descripción                                                    |
| :---------------- | :-------------------------------------------------------------- |
| **Activo**         | Visible públicamente en el portal                              |
| **Eliminado**      | Eliminación lógica, no visible                                 |
| **Destacado**      | Marcado especial para prioridad                                |

## Secciones Adicionales

### Funcionarios Destacados

Slider que muestra funcionarios del gobierno:

```
┌─────────────────────────────────────────────────────────┐
│  [Imagen]  [Imagen]  [Imagen]  [Imagen]                │
│  Nombre 1  Nombre 2  Nombre 3  Nombre 4                 │
│  Cargo 1   Cargo 2   Cargo 3   Cargo 4                  │
└─────────────────────────────────────────────────────────┘
```

**Datos:**
*   Nombre completo.
*   Cargo/posición.
*   Imagen.
*   Descripción/biografía.

### Preguntas Frecuentes (FAQ)

Sección acordeón con preguntas y respuestas:

```
┌─────────────────────────────────────────────────────────┐
│  ¿Cómo puedo acceder a los informes de auditoría?     │
│  └─ [Respuesta expandida]                               │
│                                                         │
│  ¿Los informes están disponibles en PDF?                │
│  └─ [Respuesta expandida]                               │
└─────────────────────────────────────────────────────────┘
```

### Formulario de Contacto

Permite a los ciudadanos enviar consultas o comentarios.

## Mejores Prácticas

1.  **Títulos descriptivos:** Usar nombres claros del tipo de informe.
2.  **Fechas correctas:** Verificar precisión en fechas de publicación.
3.  **Archivos completos:** Asegurar que los PDFs estén completos y legibles.
4.  **Etiquetas útiles:** Incluir términos de búsqueda relevantes.
5.  **Organización anual:** Publicar los informes en el año correspondiente.

## Integración con Voyager

El sistema usa Voyager para:
*   CRUD de Publications (informes).
*   CRUD de PublicationsTypes (tipos).
*   CRUD de Officials (funcionarios).
*   CRUD de FrequentQuestions (FAQ).
*   Configuración del sitio.

## URL del Sistema

*   **Portal:** `https://auditoria.beni.gob.bo/`
*   **Admin:** `https://auditoria.beni.gob.bo/admin`
*   **Búsqueda:** `https://auditoria.beni.gob.bo/search/{año}/{búsqueda}`