---
sidebar_position: 3
---

# Formulario de Registro de Denuncias

## Descripción General

Este módulo describe el **formulario público** que cualquier ciudadano puede utilizar para presentar una denuncia en el Sistema de Transparencia del Gobierno Autónomo Departamental del Beni. El formulario está diseñado para ser intuitivo y permitir denuncias tanto identificadas como anónimas.

## Acceso al Formulario

**Ruta pública:** `/denuncias` (o similar según configuración)

El formulario es accesible sin necesidad de registro ni autenticación, garantizando el acceso abierto a todos los ciudadanos del Beni.

## Campos del Formulario

| Campo              | Tipo         | Requerido | Descripción                                        |
| :----------------- | :----------- | :-------- | :------------------------------------------------- |
| CI                 | Texto        | No        | Cédula de identidad (permite anonimato)            |
| Nombre Completo    | Texto        | Sí        | Nombre del denunciante                            |
| Teléfono           | Texto        | No        | Número de contacto                                 |
| Dirección          | Texto        | No        | Dirección del denunciante                         |
| Denunciado         | Texto        | Sí        | Persona o entidad denunciada                      |
| Delito             | Área texto   | Sí        | Descripción detallada de los hechos               |
| Archivos           | Archivo(s)   | No        | Evidencia adjunta (fotos, documentos)              |

## Flujo de Registro

### Paso 1: Completar Datos Personales (Opcional)

El ciudadano puede decidir si desea identificarse o mantener el anonimato:

**Modo Identificado:**
```
Cédula de Identidad: 1234567
Nombre Completo: Juan Pérez López
Teléfono: 71123456
Dirección: Av. 6 de Agosto #123
```

**Modo Anónimo:**
```
Cédula de Identidad: (dejar vacío)
Nombre Completo: Anónimo (o ingresar cualquier texto)
Teléfono: (dejar vacío)
Dirección: (dejar vacío)
```

### Paso 2: Describir la Denuncia

**Denunciado:**
```
Nombre de la persona o entidad denunciada:
> Carlos Gómez, Funcionario Público
```

**Descripción del Delito:**
```
Describa los hechos ocurridos:
> El día 15 de marzo de 2024, el Sr. Carlos Gómez, quien labora como
> técnico en la Dirección de Transportes, solicitó un soborno de Bs. 500
> para agilizar un trámite de matriculación vehicular. El hechos occurred
> en las oficinas de la Dirección Departamental de Transportes.
```

### Paso 3: Adjuntar Evidencia (Opcional)

El ciudadano puedeadjuntar archivos como evidencia:

```
Archivos adjuntos:
[Seleccionar archivo] > captura_pantalla.png
[Seleccionar archivo] > documento.pdf
```

**Tipos de archivos permitidos:**
*   Imágenes: JPG, PNG
*   Documentos: PDF, DOC, DOCX
*   Límite de tamaño: Según configuración del servidor

### Paso 4: Enviar Denuncia

1.  **Revisar:** Verificar que los campos obligatorios estén completos.
2.  **Enviar:** Hacer clic en el botón de envío.
3.  **Confirmación:** El sistema muestra respuesta JSON con éxito.

## Manejo de Datos en el Backend

### Procesamiento del Formulario

```php
public function store_landingpage(Request $request)
{
    DB::beginTransaction();
    try {
        // Obtener o registrar denunciante
        $denunciante = Denunciante::firstOrNew(['ci' => $request->ci]);
        if (!$denunciante->exists) {
            $denunciante->fill([
                'nombre_completo' => $request->nombre_completo,
                'telefono' => $request->telefono,
                'direccion' => $request->direccion,
            ])->save();
        }

        // Crear denuncia
        Denuncia::create([
            'denunciante_id' => $denunciante->id,
            'fecha_registro' => date('Y-m-d'),
            'denunciado' => $request->denunciado,
            'delito' => $request->delito,
            'archivos' => $this->agregar_archivo($request->file, 'denuncias')
        ]);

        DB::commit();
        return response()->json(['success' => 1]);
    } catch (\Throwable $th) {
        DB::rollback();
    }
}
```

### Proceso Automático

1.  **Validación:** Se verifican campos obligatorios.
2.  **Denunciante:** Se busca o crea automáticamente.
3.  **Fecha:** Se asigna automáticamente la fecha actual.
4.  **Archivos:** Se almacenan en `/storage/app/public/denuncias/`.
5.  **Respuesta:** Se retorna confirmación JSON.

## Validaciones del Formulario

| Campo              | Validación                                                   |
| :----------------- | :----------------------------------------------------------- |
| CI                 | Opcional, formato numérico (longitud según país)             |
| Nombre Completo    | Obligatorio, texto                                          |
| Teléfono           | Opcional, formato numérico                                  |
| Denunciado         | Obligatorio, texto                                          |
| Delito             | Obligatorio, texto (mínimo caracteres)                      |
| Archivos           | Opcional, tipos permitidos, límite de tamaño                 |

## Manejo de Archivos

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
*   Almacenamiento seguro en directorio público.
*   Formato JSON para múltiples archivos.
*   Preservación de extensión original.

## Respuesta del Sistema

### Éxito

```json
{
  "success": 1,
  "message": "Denuncia registrada exitosamente"
}
```

### Error

```json
{
  "success": 0,
  "message": "Error al registrar la denuncia"
}
```

## Consideraciones de Seguridad

### Protección de Datos

*   **Anonimato:** El sistema permite denuncias sin identificar.
*   **Encriptación:** Datos sensibles se manejan de forma segura.
*   **Acceso restringido:** Solo personal autorizado puede ver denuncias.

### Validez Legal

*   Las denuncias falsas pueden tener consecuencias legales.
*   La evidencia adjunta debe ser legítima.
*   Los datos se usan exclusivamente para fines institucionales.

## Mejores Prácticas para el Denunciante

1.  **Datos completos:** Proporcionar toda la información posible.
2.  **Evidencia clara:** Adjuntar fotos o documentos relevantes.
3.  **Narración detallada:** Describir con precisión qué, cuándo, dónde y quién.
4.  **Veracidad:** Solo reportar hechos reales verificables.
5.  **Contacto:** Dejar teléfono para seguimiento si es posible.

## Estados de la Denuncia Post-Registro

| Estado             | Descripción                                                    |
| :----------------- | :-------------------------------------------------------------- |
| **Recibida**        | Nueva denuncia registrada                                      |
| **En Proceso**      | Denuncia siendo revisada/investigada                          |
| **Derivada**        | Derivada a autoridad competente                                |
| **Cerrada**         | Caso cerrado sin seguimiento adicional                         |

*Nota: Los estados se gestionan desde el panel administrativo.*

## Integración con Panel Admin

Las denuncias registradas aparecen en:
*   **Lista de Denuncias:** Todas las denuncias recibidas.
*   **Detalle:** Información completa incluyendo archivos.
*   **Acciones:** Actualizar estado, agregar seguimiento.