---
sidebar_position: 1
---

# Sistema de Auditoría - Portal de Informes Ejecutivos

## Introducción

Bienvenido a la documentación del **Sistema de Auditoría** del Gobierno Autónomo Departamental del Beni. Este portal es la herramienta centralizada para la publicación y consulta de **Informes de Auditoría General** de todas las gestiones del gobierno departamental.

El sistema está diseñado para garantizar la **transparencia institucional**, facilitar el **acceso público** a la información de auditoría y proporcionar un mecanismo de **rendición de cuentas** a los ciudadanos del Beni.

## Propósito y Beneficios

*   **Transparencia:** Publica informes de auditoría para conocimiento ciudadano.
*   **Acceso Público:** Cualquier persona puede consultar sin necesidad de registro.
*   **Organización por Gestión:** Filtra informes por año de gestión.
*   **Búsqueda Eficiente:** Encuentra informes por título, etiquetas o descripción.
*   **Destacados:** Los informes importantes pueden marcarse para visibilidad.
*   **Control de Vistas:** Registra el número de consultas de cada informe.

## Funcionalidades Clave

El sistema se organiza en los siguientes módulos principales:

*   **Portal Público:**
    *   Vista de años de gestión disponibles.
    *   Listado de informes por año.
    *   Búsqueda por palabras clave.
    *   Secciones de funcionarios destacados.
    *   Preguntas frecuentes (FAQ).
    *   Formulario de contacto.
*   **Gestión de Contenido (Admin):**
    *   CRUD de publicaciones/informes.
    *   CRUD de tipos de publicación.
    *   CRUD de funcionarios (Officials).
    *   CRUD de preguntas frecuentes.
    *   Configuración general del sitio.

## Audiencia Destinataria

Esta documentación está dirigida a:

*   **Ciudadanos:** Consultan informes de auditoría para transparencia.
*   **Organismos de Control:** Acceden a información verificable.
*   **Medios de Comunicación:** Obtienen datos para reportajes.
*   **Funcionarios:** Gestionan la publicación de informes.
*   **Administradores:** Configuran y mantienen el sistema.

## Estructura del Sistema

```
┌──────────────────────────────────────────────────────────┐
│                    PORTAL PÚBLICO                         │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │                 HERO SECTION                        │  │
│  │  Bienvenido a [Título del Sitio]                    │  │
│  │  [Descripción del sitio]                            │  │
│  │  [Botón Iniciar] [Botón Video]                     │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │              INFORMES DE AUDITORÍA                   │  │
│  │  ┌──────────┐  ┌──────────────────────────────┐    │  │
│  │  │ AÑOS     │  │ LISTA DE INFORMES            │    │  │
│  │  │ ──────── │  │ ──────────────────────────── │    │  │
│  │  │ 2024 (5) │  │ Informe 1 | Informe 2       │    │  │
│  │  │ 2023 (12)│  │ Informe 3 | Informe 4       │    │  │
│  │  │ 2022 (8) │  │ ...                         │    │  │
│  │  └──────────┘  └──────────────────────────────┘    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │              FUNCIONARIOS DESTACADOS                │  │
│  │  [Slider con fotos y datos de funcionarios]        │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │              PREGUNTAS FRECUENTES (FAQ)             │  │
│  │  [Acordeón con preguntas y respuestas]             │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │              CONTÁCTANOS                             │  │
│  │  [Formulario de contacto]                          │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Modelos de Datos

### Publication (Publicación/Informe)

| Campo                  | Tipo      | Descripción                                        |
| :--------------------- | :-------- | :------------------------------------------------- |
| id                     | INTEGER   | Identificador único                               |
| publications_type_id   | INTEGER   | Relación con tipo de publicación                   |
| user_id                | INTEGER   | Usuario que creó el registro                       |
| title                  | STRING    | Título del informe                                 |
| tags                   | STRING    | Etiquetas para búsqueda                             |
| description            | TEXT      | Descripción/resumen del informe                    |
| publish_date           | DATE      | Fecha de publicación                               |
| enact_date             | DATE      | Fecha de promulgación/vigencia                     |
| file                   | STRING    | Ruta del archivo PDF/documento                     |
| highlight              | INTEGER   | Marcado como destacado (0/1)                      |
| view                   | INTEGER   | Contador de visualizaciones                       |
| deleted_at             | TIMESTAMP | Eliminación lógica                                |

### PublicationsType (Tipo de Publicación)

| Campo          | Tipo      | Descripción                                        |
| :------------- | :-------- | :------------------------------------------------- |
| id             | INTEGER   | Identificador único                               |
| title          | STRING    | Nombre del tipo                                   |
| slug           | STRING    | URL amigable                                      |
| icon           | STRING    | Clase CSS del ícono                               |
| image          | STRING    | Ruta de la imagen                                 |
| description    | TEXT      | Descripción del tipo                              |
| deleted_at     | TIMESTAMP | Eliminación lógica                                |

### Official (Funcionario)

| Campo             | Tipo      | Descripción                                        |
| :---------------- | :-------- | :------------------------------------------------- |
| id                | INTEGER   | Identificador único                               |
| full_name         | STRING    | Nombre completo del funcionario                   |
| job               | STRING    | Cargo/posición                                    |
| image             | STRING    | Ruta de la foto                                   |
| description       | TEXT      | Descripción/biografía breve                       |
| deleted_at        | TIMESTAMP | Eliminación lógica                                |

### FrequentQuestion (Pregunta Frecuente)

| Campo          | Tipo      | Descripción                                        |
| :------------- | :-------- | :------------------------------------------------- |
| id             | INTEGER   | Identificador único                               |
| title          | STRING    | Pregunta                                          |
| description    | TEXT      | Respuesta (soporta HTML)                          |
| deleted_at     | TIMESTAMP | Eliminación lógica                                |

## Flujo de Navegación

### 1. Acceso al Portal

**URL Principal:** `/`

**Componentes:**
*   Hero section con banner configurable.
*   Título del sitio (desde Voyager Settings).
*   Descripción del sitio.
*   Botones de llamada a la acción.

### 2. Filtrar por Año

1.  **Lista de años:** En el panel lateral izquierdo.
2.  **Contador:** Cada año muestra el número de informes.
3.  **Selección:** Clic en un año filtra los informes.
4.  **Resultado:** Se cargan dinámicamente los informes del año.

```php
// En HomeController@index
$years = Publication::where('deleted_at', NULL)
    ->groupByRaw('YEAR(publish_date)')
    ->selectRaw('YEAR(publish_date) as year, COUNT(id) as count')
    ->get();
```

### 3. Buscar Informes

1.  **Campo de búsqueda:** En la lista de resultados.
2.  **Campos buscados:** Título, etiquetas, descripción.
3.  **Resultado:** Lista filtrada con paginación.

```php
// En HomeController@list
$query_search = $search 
    ? '(title like "%'.$search.'%" or tags like "%'.$search.'%" or description like "%'.$search.'%")' 
    : 1;
```

### 4. Ver Detalle de Informe

Cada informe muestra:
*   Título del documento.
*   Fecha de publicación.
*   Descripción/resumen.
*   Enlace al archivo PDF.
*   Número de visualizaciones.

## Panel de Administración

**URL:** `/admin`

Gestionado mediante Voyager:

### Gestión de Publicaciones

| Campo                  | Descripción                                           |
| :--------------------- | :----------------------------------------------------- |
| Título                 | Nombre del informe                                    |
| Tipo                   | Categoría (si aplica)                                 |
| Etiquetas              | Palabras clave                                         |
| Descripción            | Resumen del contenido                                 |
| Fecha Publicación      | Fecha de publicación                                  |
| Fecha Vigencia         | Fecha de promulgación                                 |
| Archivo                | Documento PDF                                         |
| Destacado              | Marcar como importante                               |
| Vistas                 | Contador (automático)                                 |

### Gestión de Funcionarios

| Campo             | Descripción                                           |
| :---------------- | :----------------------------------------------------- |
| Nombre Completo   | Nombre del funcionario                                |
| Cargo             | Posición/cargo                                        |
| Imagen            | Foto del funcionario                                  |
| Descripción       | Biografía breve                                       |

### Gestión de Preguntas Frecuentes

| Campo          | Descripción                                           |
| :------------- | :----------------------------------------------------- |
| Pregunta       | Título de la pregunta                                 |
| Respuesta      | Contenido (soporta HTML)                              |

## Configuración del Sitio

En Voyager > Settings:

| Configuración          | Descripción                                      |
| :--------------------- | :----------------------------------------------- |
| **site.title**         | Título del sitio web                             |
| **site.description**   | Descripción meta                                |
| **site.banner**        | Imagen del banner principal                      |
| **site.background**    | Imagen de fondo para secciones                   |

## Control de Vistas

El sistema puede registrar visualizaciones:

```php
// En Publication model (potencial implementación)
$publication->view = $publication->view + 1;
$publication->save();
```

**Propósito:**
*   Medir interés ciudadana.
*   Identificar informes más consultados.
*   Informar decisiones de contenido.

## Estados de la Publicación

| Estado            | Descripción                                                    |
| :---------------- | :-------------------------------------------------------------- |
| **Activo**         | Informe visible públicamente                                   |
| **Eliminado**      | Eliminación lógica, no visible                                 |
| **Destacado**      | Marcado especial para prioridad                                |

## URL del Sistema

*   **Portal Público:** `https://auditoria.beni.gob.bo/`
*   **Panel Admin:** `https://auditoria.beni.gob.bo/admin`

## Integración

El sistema comparte estructura con el de **Gacetas** para publicaciones:
*   Mismo modelo de Publication.
*   Mismo modelo de PublicationsType.
*   Gestión mediante Voyager.

Diferencia principal: **Organización por año de gestión** en Auditoría.