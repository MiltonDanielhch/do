---
sidebar_position: 2
---

# Gestión de Funcionarios y Preguntas Frecuentes

## Descripción General

Este módulo documenta las secciones complementarias del portal de auditoría: **Funcionarios Destacados** (Officials) y **Preguntas Frecuentes** (FAQ). Estas secciones proporcionan información institucional y facilitan la comunicación con los ciudadanos.

## Funcionarios Destacados

### Propósito

Mostrar a los funcionarios principales del gobierno departamental en un slider interactivo. Esto fortalece la transparencia y permite a los ciudadanos conocer a las autoridades.

### Modelo de Datos

```php
class Official extends Model
{
    protected $fillable = [
        'full_name', 'job', 'image', 'description'
    ];
}
```

### Campos del Funcionario

| Campo             | Tipo      | Descripción                                        |
| :---------------- | :-------- | :------------------------------------------------- |
| id                | INTEGER   | Identificador único                               |
| full_name         | STRING    | Nombre completo                                   |
| job               | STRING    | Cargo/posición                                    |
| image             | STRING    | Ruta de la foto de perfil                        |
| description       | TEXT      | Descripción/biografía breve                       |
| deleted_at        | TIMESTAMP | Eliminación lógica                                |

### Visualización en Portal

```
┌─────────────────────────────────────────────────────────┐
│           FUNCIONARIOS DESTACADOS                       │
├─────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │  [img]  │  │  [img]  │  │  [img]  │  │  [img]  │    │
│  │         │  │         │  │         │  │         │    │
│  │ Juan P. │  │ María G.│  │ Carlos R.│  │ Ana L. │    │
│  │ cargo 1 │  │ cargo 2 │  │ cargo 3 │  │ cargo 4 │    │
│  │         │  │         │  │         │  │         │    │
│  │ "Bio..." │  │ "Bio..." │  │ "Bio..." │  │ "Bio..." │    │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘    │
│                         ◀ ● ● ● ▶                      │
└─────────────────────────────────────────────────────────┘
```

### Gestión desde Panel Admin

1.  **Acceder:** Voyager > Officials > Add New.
2.  **Completar Datos:**
    *   Nombre completo.
    *   Cargo/posición.
    *   Foto de perfil.
    *   Descripción/biografía.
3.  **Guardar:** Confirmar el registro.

### Ejemplo de Registro

```
Nombre: Dr. Juan Pérez López
Cargo: Director General de Auditoría
Imagen: [subir foto]
Descripción: Profesional con más de 20 años de experiencia en 
gestión pública y auditoría gubernamental. Ex-director de 
控制系统 de instituciones públicas.
```

## Preguntas Frecuentes (FAQ)

### Propósito

Resolver las dudas más comunes de los visitantes del portal de manera automática y accesible.

### Modelo de Datos

```php
class FrequentQuestion extends Model
{
    protected $fillable = [
        'title', 'description'
    ];
}
```

### Campos de la Pregunta

| Campo          | Tipo      | Descripción                                        |
| :------------- | :-------- | :------------------------------------------------- |
| id             | INTEGER   | Identificador único                               |
| title          | STRING    | Pregunta                                          |
| description    | TEXT      | Respuesta (soporta HTML)                         |
| deleted_at     | TIMESTAMP | Eliminación lógica                                |

### Visualización en Portal

Sección acordeón (collapse) con diseño interactivo:

```
┌─────────────────────────────────────────────────────────┐
│              PREGUNTAS FRECUENTES                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ▶ ¿Cómo puedo acceder a los informes de auditoría?    │
│    │                                                   │
│  ▼ ¿Los informes están disponibles en PDF?            │
│    └─ Sí, todos los informes están disponibles para    │
│        descarga en formato PDF. Puede hacer clic en    │
│        el enlace del documento para verlo o           │
│        descargarlo directamente...                     │
│                                                         │
│  ▶ ¿Puedo buscar informes por palabras clave?          │
│                                                         │
│  ▶ ¿Con qué frecuencia se actualizan los informes?     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Gestión desde Panel Admin

1.  **Acceder:** Voyager > Frequent Questions > Add New.
2.  **Completar Datos:**
    *   Título/Pregunta.
    *   Descripción/Respuesta (soporta HTML).
3.  **Guardar:** Confirmar el registro.

### Ejemplo de FAQ

**Pregunta:**
```
¿Cómo puedo acceder a los informes de auditoría de años anteriores?
```

**Respuesta:**
```
Para acceder a informes de años anteriores:

1. En la sección "Informes Ejecutivos", observe el panel izquierdo
   con la lista de años disponibles.

2. Haga clic en el año que desea consultar (por ejemplo: 2023).

3. Se mostrarán todos los informes publicados durante esa gestión.

4. Utilice el campo de búsqueda para filtrar por palabras clave
   específicas.

5. Haga clic en cualquier informe para ver su detalle y descargar
   el documento PDF si está disponible.
```

### Características del Editor

*   **Soporte HTML:** La descripción permite formato HTML.
*   **Enlaces:** Se pueden incluir enlaces a documentos.
*   **Listas:** Se pueden crear listas ordenadas y desordenadas.
*   **Imágenes:** Se pueden插入 imágenes en las respuestas.

## Secciones del Portal

### Estructura Completa

```
┌─────────────────────────────────────────────────────────┐
│              PÁGINA PRINCIPAL                            │
├─────────────────────────────────────────────────────────┤
│  HERO SECTION                                           │
│  Banner, título, descripción, botones de acción        │
├─────────────────────────────────────────────────────────┤
│  INFORMES DE AUDITORÍA                                  │
│  Lista de años + Lista de informes con búsqueda         │
├─────────────────────────────────────────────────────────┤
│  FUNCIONARIOS DESTACADOS                                │
│  Slider con fotos y datos de funcionarios               │
├─────────────────────────────────────────────────────────┤
│  PREGUNTAS FRECUENTES (FAQ)                             │
│  Acordeón con preguntas y respuestas                     │
├─────────────────────────────────────────────────────────┤
│  CONTÁCTANOS                                            │
│  Formulario de contacto                                  │
└─────────────────────────────────────────────────────────┘
```

### Estilos Visuales

*   **Funcionarios:** Slider con transiciones suaves.
*   **FAQ:** Acordeón expandible con animación.
*   **Responsive:** Adaptable a dispositivos móviles.

## Mejores Prácticas

### Funcionarios

1.  **Fotos profesionales:** Usar imágenes de calidad.
2.  **Datos actualizados:** Mantener cargos y nombres actuales.
3.  **Biografías concisas:** Descripciones breves y relevantes.
4.  **Orden lógico:** Mostrar funcionarios en orden jerárquico.

### FAQ

1.  **Preguntas comunes:** Incluir las dudas más frecuentes.
2.  **Respuestas claras:** Explicar de manera sencilla.
3.  **Actualización:** Revisar y actualizar periódicamente.
4.  **Enlaces útiles:** Vincular a secciones relevantes.
5.  **Formato legible:** Usar párrafos cortos y listas.

## Configuraciones del Sitio

En Voyager > Settings:

| Configuración          | Descripción                                      |
| :--------------------- | :----------------------------------------------- |
| **site.title**         | Título del sitio                                 |
| **site.description**   | Descripción meta                                |
| **site.banner**        | Imagen del banner principal                     |
| **site.background**    | Imagen de fondo para secciones                  |

## Estados

### Funcionario

| Estado         | Descripción                                                    |
| :------------- | :-------------------------------------------------------------- |
| **Activo**       | Visible en el slider                                           |
| **Eliminado**    | Eliminación lógica, no visible                                 |

### Pregunta Frecuente

| Estado         | Descripción                                                    |
| :------------- | :-------------------------------------------------------------- |
| **Activo**       | Visible en la sección FAQ                                     |
| **Eliminado**    | Eliminación lógica, no visible                                 |

## Integración

### Con Informes

Las secciones de funcionarios y FAQ complementan la información de informes:
*   Permiten conocer a las autoridades responsables.
*   Resuelven dudas sobre el acceso a información.

### Con Voyager

Ambos módulos se gestionan completamente desde Voyager:
*   CRUD de Officials.
*   CRUD de FrequentQuestions.
*   Reordenamiento de elementos.