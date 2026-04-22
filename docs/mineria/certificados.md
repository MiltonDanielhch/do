---
sidebar_position: 2
---

# Gestión de Certificados de Operador Minero

## Descripción General

Este módulo centraliza la emisión, seguimiento y control de los **Certificados de Operador Minero (C.O.M.)** del Gobierno Autónomo Departamental del Beni. Cada certificado acredita legalmente a una empresa minera para operar dentro del departamento y tiene una vigencia determinada.

## Tablero Principal de Certificados

El tablero principal ofrece una vista consolidada de todos los certificados emitidos, permitiendo una gestión eficiente.

### Funcionalidades Clave del Tablero:

*   **Creación de Nuevos Certificados:** Botón para iniciar el registro de una nueva empresa/certificado.
*   **Visualización:** Tabla con DataTable configurado en español.
*   **Ordenamiento:** Orden por ID descendente (más recientes primero).
*   **Acciones Directas:** Botones para imprimir certificado o eliminar.

### Estructura de la Tabla de Certificados:

La tabla principal muestra la siguiente información clave para cada certificado:

| Columna                     | Descripción                                                              | Ejemplo de Dato                                  |
| :-------------------------- | :----------------------------------------------------------------------- | :----------------------------------------------- |
| **Id**                      | Identificador único del certificado.                                      | `1`                                             |
| **Nit**                     | Número de Identificación Tributaria de la empresa.                       | `4186508012`                                    |
| **Código Operador Minero**  | Código único del operador asignado por la Dirección de Minería.           | `COM-000001`                                    |
| **Representante Legal**     | Nombre del representante legal de la empresa.                            | `JUAN PÉREZ LÓPEZ`                              |
| **Fecha Emisión**           | Fecha en que se emitió el certificado.                                   | `22-04-2024`                                    |
| **Fecha Validez**           | Fecha de expiración del certificado.                                     | `22-04-2025`                                    |
| **Acciones**                | Botones para operaciones específicas: Imprimir y Eliminar.               | `[Imprimir] [Eliminar]`                         |

## Flujo de Trabajo Detallado

### 1. Registrar un Nuevo Certificado

1.  **Acceder al Módulo:** Navegar a la sección de Certificados desde el menú.
2.  **Iniciar Creación:** Hacer clic en el botón "Crear".
3.  **Completar Datos del Formulario:**
    *   **Empresa:** Seleccionar de la lista de empresas registradas (con NIT, razón social).
    *   **Firma Autorizante:** Seleccionar el funcionario que firma el certificado.
    *   **Nombre del Operador Minero:** Nombre comercial o de operación de la empresa.
    *   **Fecha de Inicio:** Fecha de emisión del certificado.
    *   **Fecha de Vencimiento:** Fecha límite de validez del certificado.
4.  **Guardar:** Confirmar el registro. El sistema:
    *   Generará automáticamente el código COM (Formato: `COM-000001`).
    *   Asignará el ID del usuario registrador.
    *   Redirigirá al listado de certificados.

### 2. Imprimir Certificado

1.  **Ubicar el Certificado:** En el tablero principal, localizar el registro deseado.
2.  **Acción "Imprimir":** Hacer clic en el botón con icono de impresora.
3.  **Visualizar Certificado:** Se abrirá una nueva ventana/pestaña con el formato oficial del certificado.

**Contenido del Certificado Impreso:**

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo GAD Beni]          TÍTULO PRINCIPAL           [Logo]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                         C.O.M.                                  │
│                 CÓDIGO OPERADOR MINERO                          │
│                                                                 │
│                    RAZÓN SOCIAL DE LA EMPRESA                   │
│                    Código del Operador Minero                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  INFORMACIÓN EMPRESA    │  FIRMA AUTORIZANTE    │  CÓDIGO QR   │
│  ───────────────────    │  ──────────────────   │  ──────────  │
│  NIT: 4186508012        │  Nombre Completo      │              │
│  NIM: 1020304050        │  Cargo/Función        │  [QR Code]   │
│  Actividad: Extracción  │                       │              │
│  Rep. Legal: Juan Pérez  │                       │  Fechas:     │
│  C.I.: 1234567 LP       │                       │  Emisión     │
│  Municipio: Trinidad    │                       │  Validez     │
└─────────────────────────────────────────────────────────────────┘
```

**Elementos del certificado:**
*   **Encabezado institucional:** Logos del GAD Beni y Dirección de Minería.
*   **Título C.O.M.:** Certificado de Operador Minero.
*   **Datos de la empresa:** NIT, NIM, actividad económica, representante legal.
*   **Código QR:** Contiene información cifrada para verificación (código COM, operador, NIT, NIM, etc.).
*   **Firma autorizante:** Nombre y cargo del funcionario firmante.
*   **Fechas:** Emisión y validez formateadas en español.

### 3. Eliminar un Certificado

*   **Importante:** La eliminación es un proceso delicado. El sistema realiza eliminación lógica (SoftDeletes).
1.  **Ubicar el Certificado:** En el tablero principal.
2.  **Acción "Eliminar":** Hacer clic en el botón con icono de papelera.
3.  **Confirmación:** El sistema mostrará un modal de confirmación.
4.  **Procesar:** Si se confirma, el certificado se marcará como eliminado y ya no aparecerá en el listado.

### 4. Búsqueda y Filtrado

*   **Búsqueda rápida:** Utilizar el campo de búsqueda para encontrar certificados por NIT, representante o código.
*   **Paginación:** Ajustar la cantidad de registros visibles (10, 25, 50, 100).

## Validaciones del Sistema

Durante la creación de un certificado, el sistema valida:

*   **Empresa única:** No puede existir dos certificados activos para la misma empresa.
*   **Código único:** El sistema genera automáticamente códigos no repetibles.
*   **Fechas coherentes:** La fecha de vencimiento debe ser posterior a la fecha de emisión.

## Estados del Certificado

| Estado      | Descripción                                                    |
| :---------- | :-------------------------------------------------------------- |
| **Vigente** | Certificado activo dentro del período de validez.               |
| **Expirado**| Certificado cuya fecha de validez ha pasado.                    |
| **Eliminado**| Certificado dado de baja (eliminación lógica).                  |

## Integración con WhatsApp

El sistema puede enviar notificaciones automáticas vía WhatsApp a las empresas:

*   Al registrar una nueva empresa, se envía un mensaje de bienvenida con credenciales.
*   Al emitir un certificado, se notifica al representante con el enlace de descarga.

```php
// Ejemplo de notificación (actualmente commented en el código)
Http::get('https://whatsapp-api.beni.gob.bo/?number=591...&message=...');
```

## Permisos de Usuario

El acceso y las acciones disponibles en este módulo están controlados por roles:

*   **Administrador:** Acceso completo, puede crear, imprimir y eliminar certificados.
*   **Funcionario:** Puede crear y visualizar certificados.
*   **Empresa:** Acceso limitado a sus propios certificados.

## Mejores Prácticas

1.  **Verificar datos de empresa:** Antes de crear el certificado, asegurar que los datos de la empresa estén correctos.
2.  **Control de vigencia:** Revisar periódicamente los certificados próximos a vencer.
3.  **Impresiones seguras:** Los certificados impreso son documentos oficiales; guardar copias digitales.
4.  **Respaldos:** El sistema mantiene historial de eliminaciones para posibles auditorías.