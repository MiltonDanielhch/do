---
sidebar_position: 1
---

# Sistema de Transparencia - Portal de Denuncias Ciudadanas

## Introducción

Bienvenido a la documentación del **Sistema de Transparencia** del Gobierno Autónomo Departamental del Beni. Esta plataforma es la herramienta centralizada para la recepción y gestión de **denuncias ciudadanas**, permitiendo a los habitantes del Beni reportar irregularidades, hechos sospechosos o posibles delitos de manera **anónima o identificada**.

El sistema está diseñado para garantizar el **acceso a la justicia**, asegurar la **trazabilidad** de las denuncias recibidas y facilitar la **gestión interna** por parte de las autoridades competentes.

## Propósito y Beneficios

*   **Acceso Abierto:** Cualquier ciudadano puede presentar una denuncia sin registrarse.
*   **Confidencialidad:** Permite denuncias anónimas para proteger al denunciante.
*   **Trazaabilidad:** Cada denuncia tiene un seguimiento desde su recepción.
*   **Evidencia Digital:** Admite adjuntos como pruebas documentadas.
*   **Eficiencia:** Agiliza el proceso de recepción y derivación de casos.

## Funcionalidades Clave

El sistema se organiza en los siguientes módulos principales:

*   **Portal Público de Denuncias:**
    *   Formulario de registro de denuncias.
    *   Carga de archivos adjuntos como evidencia.
    *   Confirmación de recepción.
*   **Gestión Administrativa:**
    *   Consulta de denuncias recibidas.
    *   Actualización de estados.
    *   Registro de seguimiento.

## Audiencia Destinataria

Esta documentación está dirigida a:

*   **Ciudadanos:** Presentan denuncias de hechos irregulares.
*   **Funcionarios de Transparencia:** Gestionan y derivan denuncias.
*   **Autoridades Competentes:** Reciben denuncias para investigación.
*   **Administradores:** Configuran y mantienen el sistema.

## Estructura del Sistema

```
┌──────────────────────────────────────────────────────────┐
│                    PORTAL PÚBLICO                         │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │         FORMULARIO DE DENUNCIA                     │  │
│  │  ┌──────────────────────────────────────────────┐  │  │
│  │  │ Datos del Denunciante (Opcional)              │  │  │
│  │  │ - CI                                          │  │  │
│  │  │ - Nombre Completo                             │  │  │
│  │  │ - Teléfono                                    │  │  │
│  │  │ - Dirección                                   │  │  │
│  │  └──────────────────────────────────────────────┘  │  │
│  │  ┌──────────────────────────────────────────────┐  │  │
│  │  │ Datos de la Denuncia                         │  │  │
│  │  │ - Persona Denunciada                         │  │  │
│  │  │ - Descripción del Delito                     │  │  │
│  │  │ - Archivos Adjuntos                          │  │  │
│  │  └──────────────────────────────────────────────┘  │  │
│  │                                                     │  │
│  │  [Enviar Denuncia]                                 │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Flujo de Trabajo Detallado

### 1. Presentar una Denuncia (Portal Público)

1.  **Acceder al Formulario:** Navegar a la sección de denuncias del portal.
2.  **Completar Datos del Denunciante (Opcional):**
    *   **Cédula de Identidad (CI):** Para identificación (opcional si desea anonimato).
    *   **Nombre Completo:** Nombre del denunciante.
    *   **Teléfono:** Número de contacto.
    *   **Dirección:** Dirección del denunciante.
3.  **Completar Datos de la Denuncia:**
    *   **Persona Denunciada:** Nombre de la persona o entidad involucrada.
    *   **Descripción del Delito:** Narración detallada de los hechos.
    *   **Archivos Adjuntos:** Evidencia fotográfica o documental (opcional).
4.  **Enviar:** Confirmar el envío de la denuncia.
5.  **Confirmación:** El sistema retorna una respuesta JSON confirmando la recepción.

### 2. Gestión de Denunciante

El sistema maneja automáticamente la creación o búsqueda de denunciantes:

```php
// En DenunciasController@store_landingpage
$denunciante = Denunciante::firstOrNew(['ci' => $request->ci]);
if (!$denunciante->exists) {
    $denunciante->fill([
        'nombre_completo' => $request->nombre_completo,
        'telefono' => $request->telefono,
        'direccion' => $request->direccion,
    ])->save();
}
```

**Lógica:**
*   Si el CI ya existe, se reutiliza el registro del denunciante.
*   Si es nuevo, se crea automáticamente.

### 3. Registro de la Denuncia

```php
// Crear denuncia con archivos
Denuncia::create([
    'denunciante_id' => $denunciante->id,
    'fecha_registro' => date('Y-m-d'),
    'denunciado' => $request->denunciado,
    'delito' => $request->delito,
    'archivos' => $this->agregar_archivo($request->file, 'denuncias')
]);
```

**Campos registrados:**
*   **ID del Denunciante:** Relación con la tabla de denunciantes.
*   **Fecha de Registro:** Fecha actual automática.
*   **Denunciado:** Persona o entidad denunciada.
*   **Delito:** Descripción de los hechos.
*   **Archivos:** Rutas de los archivos adjuntos (JSON).

## Campos del Formulario

| Campo              | Tipo         | Requerido | Descripción                                        |
| :----------------- | :----------- | :-------- | :------------------------------------------------- |
| **CI**             | Texto        | No        | Cédula de identidad (permite anonimato)            |
| **Nombre Completo** | Texto        | Sí        | Nombre del denunciante                            |
| **Teléfono**        | Texto        | No        | Número de contacto                                 |
| **Dirección**       | Texto        | No        | Dirección del denunciante                         |
| **Denunciado**      | Texto        | Sí        | Persona o entidad denunciada                      |
| **Delito**          | Texto largo  | Sí        | Descripción detallada de los hechos               |
| **Archivos**        | Archivo(s)   | No        | Evidencia adjunta (fotos, documentos)              |

## Modelo de Datos

### Denunciante

| Campo             | Tipo      | Descripción                                        |
| :---------------- | :-------- | :------------------------------------------------- |
| id                | INTEGER   | Identificador único                               |
| ci                | STRING    | Cédula de identidad (único)                        |
| nombre_completo    | STRING    | Nombre completo del denunciante                   |
| telefono          | STRING    | Número de teléfono                                 |
| direccion         | TEXT      | Dirección del denunciante                         |
| created_at        | TIMESTAMP | Fecha de creación                                 |
| updated_at        | TIMESTAMP | Fecha de última actualización                      |

### Denuncia

| Campo             | Tipo      | Descripción                                        |
| :---------------- | :-------- | :------------------------------------------------- |
| id                | INTEGER   | Identificador único                               |
| denunciante_id    | INTEGER   | Relación con denunciante                           |
| fecha_registro    | DATE      | Fecha de registro de la denuncia                   |
| denunciado        | STRING    | Persona o entidad denunciada                      |
| delito            | TEXT      | Descripción detallada de los hechos                |
| archivos          | JSON      | Rutas de archivos adjuntos                         |
| created_at        | TIMESTAMP | Fecha de creación                                 |
| updated_at        | TIMESTAMP | Fecha de última actualización                      |

## Manejo de Archivos

El sistema permite adjuntar evidencia:

```php
private function agregar_archivo($file, $carpeta) {
    if ($file) {
        $path = $file->store('public/' . $carpeta);
        return json_encode(['path' => $path]);
    }
    return null;
}
```

**Características:**
*   Almacenamiento en `storage/app/public/denuncias/`
*   Formato JSON para múltiples archivos.
*   Soporte para imágenes y documentos.

## Estados de la Denuncia

| Estado             | Descripción                                                    |
| :----------------- | :-------------------------------------------------------------- |
| **Recibida**        | Nueva denuncia registrada                                      |
| **En Proceso**      | Denuncia siendo revisada/investigada                          |
| **Derivada**        | Derivada a autoridad competente                                |
| **Cerrada**         | Caso cerrado sin seguimiento adicional                         |

*Nota: Los estados pueden gestionarse desde el panel admin.*

## Panel de Administración

**URL:** `/admin`

Gestionado mediante Voyager con las siguientes funcionalidades:

### Gestión de Denunciantes

*   Ver lista de denunciantes.
*   Editar datos de contacto.
*   Historial de denuncias por denunciante.

### Gestión de Denuncias

*   Ver todas las denuncias.
*   Filtrar por fecha, estado, denunciante.
*   Ver detalle de cada denuncia.
*   Adjuntar documentos de seguimiento.
*   Actualizar estado de la denuncia.

### Reportes

*   Estadísticas de denuncias recibidas.
*   Reporte por período.
*   Reporte por tipo de denuncia.

## Integración

El sistema está preparado para integrarse con otros módulos del GAD Beni:

*   **SISCOR:** Para derivación formal de denuncias.
*   **Mamoré:** Para gestión de recursos en investigación.
*   **WhatsApp API:** Para notificaciones al denunciante (si proporciona contacto).

## Seguridad y Privacidad

### Protección de Datos

*   **Anonimato:** El campo CI es opcional.
*   **Encriptación:** Datos sensibles almacenados de forma segura.
*   **Acceso restringido:** Solo personal autorizado puede ver denuncias.

### Políticas de Uso

*   Denuncias falsas pueden tener consecuencias legales.
*   Los datos personales están protegidos.
*   La información se usa exclusivamente para fines institucionales.

## Mejores Prácticas

1.  **Datos completos:** Aunque el denunciante es opcional, datos de contacto facilitan seguimiento.
2.  **Evidencia clara:** Adjuntar fotos o documentos que respalden la denuncia.
3.  **Narración detallada:** Describir los hechos con claridad y precisión.
4.  **Veracidad:** Presentar solo hechos reales verificables.

## URL del Sistema

*   **Portal Público:** `https://transparencia.beni.gob.bo/`
*   **Panel Admin:** `https://transparencia.beni.gob.bo/admin`