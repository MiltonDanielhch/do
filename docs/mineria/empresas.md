---
sidebar_position: 3
---

# Gestión de Empresas Mineras

## Descripción General

Este módulo permite el registro, gestión y consulta de las **empresas mineras** que operan en el departamento del Beni bajo la jurisdicción del Gobierno Autónomo Departamental. Cada empresa registrada puede obtener un Certificado de Operador Minero (C.O.M.) y presentar declaraciones juradas mediante el Formulario 101.

## Tablero Principal de Empresas

El tablero principal ofrece una vista consolidada de todas las empresas registradas, permitiendo una gestión eficiente y rápida.

### Funcionalidades Clave del Tablero:

*   **Creación de Nuevas Empresas:** Botón para iniciar el registro de una nueva empresa.
*   **Visualización y Paginación:** Opciones para mostrar 25, 50 o 100 registros por página.
*   **Búsqueda y Ordenamiento:** Funcionalidad para buscar por cualquiera de los campos y ordenar las columnas.
*   **Acciones Directas:** Botón "Ver" por registro para acceder al detalle.

### Estructura de la Tabla de Empresas:

La tabla principal muestra la información clave de cada empresa (cargada dinámicamente via AJAX):

| Columna                   | Descripción                                                              |
| :------------------------ | :----------------------------------------------------------------------- |
| **Id**                    | Identificador único de la empresa.                                        |
| **Razón Social**           | Nombre legal de la empresa.                                              |
| **NIT**                   | Número de Identificación Tributaria.                                     |
| **NIM**                   | Número de Identificación Minera.                                         |
| **Código Operador**        | Código asignado por la Dirección de Minería.                             |
| **Representante**          | Nombre del representante legal.                                          |
| **Municipio**              | Municipio donde opera la empresa.                                        |
| **Acciones**               | Botones para ver detalle, editar o gestionar permisos.                   |

## Flujo de Trabajo Detallado

### 1. Registrar una Nueva Empresa

1.  **Acceder al Módulo:** Navegar a la sección de Empresas desde el menú.
2.  **Iniciar Creación:** Hacer clic en el botón "Crear".
3.  **Completar Datos del Formulario:**

    **Datos Legales:**
    *   **NIT:** Número de Identificación Tributaria (único, obligatorio).
    *   **Razón Social:** Nombre legal completo de la empresa.
    *   **Actividad:** Tipo de actividad minera que realiza.
    *   **NIM:** Número de Identificación Minera.

    **Código de Operador:**
    *   **Código Operador Minero:** Código asignado por la Dirección de Minería.

    **Representante Legal:**
    *   **Nombre Completo:** Nombre y apellidos del representante.
    *   **Cédula de Identidad:** CI del representante.
    *   **Teléfono:** Número de contacto.

    **Ubicación:**
    *   **Municipio:** Municipio donde está ubicada la empresa.
    *   **Municipio Operador Minero:** Municipio donde realiza operaciones mineras.

    **Datos de Acceso al Sistema:**
    *   **Nombre de Usuario:** Para acceso al portal de la empresa.
    *   **Correo Electrónico:** Email del representante (único).
    *   **Contraseña:** Contraseña inicial para el usuario.

4.  **Guardar:** Confirmar el registro. El sistema:
    *   Validará que el NIT no esté duplicado.
    *   Validará que el correo no esté en uso.
    *   Creará el registro de empresa.
    *   Generará automáticamente un usuario del sistema vinculado a la empresa.
    *   Redirigirá al listado de empresas.

### 2. Consulta de Empresas (Lista AJAX)

El sistema proporciona una lista dinámica de empresas para selección en otros módulos (como creación de certificados):

**Ruta:** `admin/companies/certificate/list`

**Características:**
*   Búsqueda por múltiples campos: Razón social, representante, NIT, actividad.
*   Resultados cargados via AJAX para mejor rendimiento.
*   Integración con selectores de empresas en formularios.

### 3. Gestión de Usuarios por Empresa

Una característica especial del sistema es la **creación automática de usuarios** al registrar una empresa:

```php
// En CompanyController@store
User::create([
    'company_id' => $company->id,
    'name' => $request->name,
    'role_id' => 2,  // Rol de empresa/operador
    'email' => $request->email,
    'avatar' => 'users/default.png',
    'password' => bcrypt($request->password),
]);
```

Esto permite que cada empresa tenga acceso al sistema para:
*   Consultar sus propios certificados.
*   Presentar formularios 101.
*   Verificar el estado de sus tramites.

### 4. Eliminación de Empresas

*   **Importante:** La eliminación es un proceso delicado. El sistema utiliza **eliminación lógica (SoftDeletes)**.
*   Las empresas eliminadas no aparecerán en los listados normales pero permanecen en la base de datos para auditorías.

## Validaciones del Sistema

Durante el registro de una empresa, el sistema valida:

| Campo          | Tipo de Validación                                      |
| :------------- | :------------------------------------------------------ |
| **NIT**         | ÚNICO - No puede existir otra empresa con el mismo NIT. |
| **Correo**      | ÚNICO - No puede estar en uso por otro usuario.         |
| **Razón Social** | OBLIGATORIO - Debe ser ingresado.                        |
| **Campos varios** | OBLIGATORIOS según configuración.                       |

## Estados de la Empresa

| Estado         | Descripción                                                    |
| :------------- | :-------------------------------------------------------------- |
| **Activo**      | Empresa vigente que puede operar y obtener certificados.         |
| **Inactivo**    | Empresa suspendida temporal o permanentemente.                   |
| **Eliminado**   | Empresa dada de baja (eliminación lógica).                      |

## Integración con WhatsApp

Al registrar una nueva empresa, el sistema puede enviar un mensaje de bienvenida con las credenciales de acceso:

```php
// Ejemplo de notificación (actualmente commented en el código)
Http::get('https://whatsapp-api.beni.gob.bo/?number=591...&message=Hola [NOMBRE]%0A%0ADETALLE DE LA EMPRESA%0ANIT: [NIT]%0ANIM: [NIM]%0ARAZON SOCIAL: [RAZON]%0A%0AUSUARIO: [EMAIL]%0ACONTRASEÑA: [PASSWORD]%0A%0APara ingresar al sistema...');
```

## Permisos de Usuario

*   **Administrador:** Acceso completo al módulo de empresas.
*   **Empresa:** Puede ver y editar únicamente sus propios datos.

## Mejores Prácticas

1.  **Verificar NIT:** Antes de registrar, confirmar que el NIT sea correcto y no esté registrado.
2.  **Datos de contacto:** Mantener actualizados los datos de contacto para notificaciones.
3.  **Credenciales seguras:** Cambiar la contraseña inicial después del primer acceso.
4.  **Documentación:** Conservar documentación de respaldo de los datos registrados.