---
sidebar_position: 1
---

# Sistema de Gacetas Oficiales - Portal de Publicaciones Legales

## Introducción

Bienvenido a la documentación del **Sistema de Gacetas Oficiales** del Gobierno Autónomo Departamental del Beni. Este portal es la herramienta centralizada para la publicación, consulta y seguimiento de las **Gacetas Oficiales**, **Decretos**, **Resoluciones** y demás documentos legales del gobierno departamental.

El sistema está diseñado para garantizar el **acceso público** a la información legal, asegurando la **transparencia institucional** y facilitando a los ciudadanos el cumplimiento de las normativas departamentales.

## Propósito y Beneficios

*   **Acceso Público:** Cualquier ciudadano puede consultar las publicaciones sin necesidad de registro.
*   **Transparencia:** Garante el acceso a las decisiones oficiales del gobierno departamental.
*   **Organización:** Clasifica las publicaciones por tipo (Gacetas, Decretos, Resoluciones).
*   **Búsqueda Eficiente:** Permite encontrar documentos por título, etiquetas o descripción.
*   **Trazabilidad:** Control de visualizaciones para medir el interés ciudadana.
*   **Destacados:** Permite marcar publicaciones importantes.

## Funcionalidades Clave

El sistema se organiza en los siguientes módulos principales:

*   **Portal Público:**
    *   Vista de tipos de publicación (Gacetas, Decretos, Resoluciones).
    *   Listado de publicaciones por tipo.
    *   Búsqueda por palabras clave.
    *   Descarga de documentos PDF.
*   **Gestión de Contenido (Admin):**
    *   CRUD de tipos de publicación.
    *   CRUD de publicaciones.
    *   Carga de archivos PDF.
    *   Marcado de destacados.
    *   Control de fechas de vigencia.

## Tipos de Contenido

### 1. Gacetas Oficiales

Publicaciones periódicas que recopilan las normativas del período.

**Ejemplos:**
*   Gaceta Oficial del Beni - Enero 2024
*   Gaceta Oficial del Beni - Febrero 2024

### 2. Decretos

Resoluciones emitidas por la Gobernatura.

**Ejemplos:**
*   Decreto Departamental N° 001/2024
*   Decreto N° 045/2023 - Regulación de Tránsito

### 3. Resoluciones

Disposiciones administrativas específicas.

**Ejemplos:**
*   Resolución Administrativa N° 123/2024
*   Resolución de Personal - Nombramientos

### 4. Otros Documentos

Documentos legales adicionales como:
*   Convocatorias
*   Licitaciones
*   Comunicados Oficiales

## Audiencia Destinataria

Esta documentación está dirigida a:

*   **Ciudadanos:** Consultan normativas y documentos legales.
*   **Abogados y Profesionales:** Requieren acceso a decrees y resoluciones.
*   **Empresas:** Verifican requisitos legales para trámites.
*   **Funcionarios:** Gestionan el contenido del portal.
*   **Administradores:** Configuran y mantienen el sistema.

## Estructura del Sistema

```
┌──────────────────────────────────────────────────────────┐
│                    PORTAL PÚBLICO                         │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐         │
│  │  GACETAS   │  │  DECRETOS  │  │RESOLUCIONES│  ...    │
│  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘         │
│        │               │               │                  │
│        ▼               ▼               ▼                  │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐         │
│  │  Lista de  │  │  Lista de  │  │  Lista de  │         │
│  │Publicaciones│ │Publicaciones│ │Publicaciones│         │
│  └────────────┘  └────────────┘  └────────────┘         │
│                                                          │
│  [Búsqueda por palabras clave]                           │
└──────────────────────────────────────────────────────────┘
```

## Flujo de Navegación Pública

### 1. Acceso al Portal

1.  **URL Principal:** `https://gaceta.beni.gob.bo/`
2.  Se muestra una página con cards de los tipos de publicación disponibles.
3.  Cada card incluye:
    *   Imagen representativa del tipo.
    *   Título (ej: "Gacetas Oficiales").
    *   Descripción breve.
    *   Indicador de última actualización.

### 2. Ver Listado por Tipo

1.  **Acción:** Hacer clic en una card de tipo de publicación.
2.  **URL:** `/gacetas`, `/decretos`, `/resoluciones` (según el slug).
3.  **Vista:** Muestra el tipo seleccionado con:
    *   Información del tipo (título, descripción).
    *   Formulario de búsqueda.
    *   Lista de publicaciones del tipo.

### 3. Buscar Publicaciones

1.  **Campo de búsqueda:** Ingresar palabras clave.
2.  **Campos buscados:** Título, etiquetas (tags), descripción.
3.  **Resultado:** Lista filtrada de publicaciones.
4.  **Paginación:** Navegar entre páginas de resultados.

### 4. Ver Detalle de Publicación

Cada publicación incluye:
*   **Título:** Nombre del documento.
*   **Etiquetas:** Palabras clave para búsqueda.
*   **Descripción:** Resumen del contenido.
*   **Fecha de Publicación:** Cuándo se publicó.
*   **Fecha de Entrada en Vigencia:** Cuándo entra en vigor.
*   **Archivo PDF:** Documento para descarga.
*   **Contador de Vistas:** Número de visualizaciones.

### 5. Descargar Documento

1.  **Acción:** Hacer clic en el enlace/botón del archivo PDF.
2.  **Resultado:** Se descarga o abre el documento PDF.

## Panel de Administración

**URL:** `/admin`

Gestionado mediante Voyager con las siguientes funcionalidades:

### Gestión de Tipos de Publicación

| Campo           | Descripción                                           |
| :-------------- | :----------------------------------------------------- |
| **Título**       | Nombre del tipo (ej: "Gacetas Oficiales")              |
| **Slug**         | URL amigable (ej: "gacetas")                          |
| **Ícono**        | Ícono representativo (clase CSS)                      |
| **Imagen**       | Imagen para mostrar en la card del portal              |
| **Descripción**  | Descripción del tipo                                  |

### Gestión de Publicaciones

| Campo                    | Descripción                                           |
| :----------------------- | :----------------------------------------------------- |
| **Título**                | Título del documento                                  |
| **Tipo**                  | Tipo de publicación (relación)                        |
| **Etiquetas**             | Palabras clave separadas por comas                     |
| **Descripción**           | Resumen del contenido                                 |
| **Fecha de Publicación**  | Fecha de publicación en el sistema                   |
| **Fecha Vigencia**        | Fecha de entrada en vigencia                          |
| **Archivo**               | Documento PDF                                         |
| **Destacado**             | Marcar como importante                                |
| **Vistas**                | Contador de visualizaciones (auto)                    |

## Campos de la Base de Datos

### PublicationsType (Tipo de Publicación)

| Campo          | Tipo      | Descripción                                        |
| :------------- | :-------- | :------------------------------------------------- |
| id             | INTEGER   | Identificador único                                |
| title          | STRING    | Nombre del tipo                                   |
| slug           | STRING    | URL amigable                                      |
| icon           | STRING    | Clase CSS del ícono                               |
| image          | STRING    | Ruta de la imagen                                 |
| description    | TEXT      | Descripción del tipo                              |
| deleted_at     | TIMESTAMP | Eliminación lógica                                |

### Publication (Publicación)

| Campo                     | Tipo      | Descripción                                        |
| :------------------------ | :-------- | :------------------------------------------------- |
| id                        | INTEGER   | Identificador único                                |
| publications_type_id      | INTEGER   | Relación con tipo de publicación                   |
| title                     | STRING    | Título del documento                               |
| tags                      | STRING    | Etiquetas (JSON o texto)                          |
| description               | TEXT      | Descripción/resumen                               |
| publication_date          | DATE      | Fecha de publicación                              |
| effective_date            | DATE      | Fecha de entrada en vigencia                      |
| file                      | STRING    | Ruta del archivo PDF                               |
| featured                  | BOOLEAN   | Marcar como destacado                             |
| views                     | INTEGER   | Contador de visualizaciones                       |
| created_at                | TIMESTAMP | Fecha de creación                                 |
| deleted_at                | TIMESTAMP | Eliminación lógica                                |

## Control de Vistas

El sistema lleva un control de las visualizaciones de cada publicación:

```php
// En Publication model (implícito)
$publication->views = $publication->views + 1;
$publication->save();
```

**Propósito:**
*   Medir el interés ciudadana por tipo de contenido.
*   Identificar publicaciones más consultadas.
*   Informar decisiones de contenido.

## Configuraciones del Sitio

En Voyager > Settings:

| Configuración          | Descripción                                      |
| :--------------------- | :----------------------------------------------- |
| **Título del sitio**    | Nombre del portal                               |
| **Descripción**         | Descripción meta para SEO                       |
| **Banner del sitio**    | Imagen principal del portal                     |

## Mejores Prácticas

1.  **Nombres descriptivos:** Usar títulos claros para cada publicación.
2.  **Etiquetas útiles:** Incluir palabras clave relevantes.
3.  **Archivos actualizados:** Asegurar que los PDFs estén completos.
4.  **Fechas correctas:** Verificar fechas de publicación y vigencia.
5.  **Destacados relevantes:** Marcar solo publicaciones importantes.

## Consideraciones Técnicas

*   **Multiidioma:** El sistema puede estar preparado para español.
*   **Responsive:** El portal es accesible desde dispositivos móviles.
*   **SEO:** Implementar meta tags para posicionamiento.
*   **Almacenamiento:** Los archivos se guardan en `storage/app/public/`.

## URLs del Sistema

*   **Portal Público:** `https://gaceta.beni.gob.bo/`
*   **Panel Admin:** `https://gaceta.beni.gob.bo/admin`