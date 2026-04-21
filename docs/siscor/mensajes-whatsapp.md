---
sidebar_position: 12
---

# Mensajes WhatsApp

## Vista General

Este módulo permite enviar notificaciones automáticas por WhatsApp a los destinatarios de correspondencia. Es una funcionalidad de comunicación que facilita la información oportuna sobre documentos recibidos, mejorando la eficiencia en la gestión de trámites.

## Configuración Requerida

Para utilizar esta funcionalidad, el sistema debe tener configurados los siguientes parámetros en Voyager (Settings):

| Setting | Descripción | Ejemplo |
|---------|-------------|---------|
| `servidores.whatsapp` | URL del servidor de WhatsApp API | `http://192.168.1.100:3000` |
| `servidores.whatsapp-session` | ID de sesión de WhatsApp | `sesion01` |

## Cómo Enviar un Mensaje WhatsApp

### Desde la Vista de Detalle de una Entrada

1. Abrir una **Entrada** o trámite de correspondencia
2. En la vista de detalle, buscar el botón **"Notificar"** con icono de WhatsApp
3. Hacer clic en el botón
4. Se mostrará un formulario para enviar el mensaje

### Campos del Formulario de Envío:

| Campo | Descripción | Requerido |
|-------|-------------|-----------|
| **Teléfono** | Número de teléfono del destinatario | Sí |
| **Mensaje** | Texto del mensaje a enviar | Sí |

### Contenido Automático del Mensaje

El sistema puede incluir automáticamente información del trámite:
- Número de Hoja de Ruta (HR)
- Remitente
- Referencia
- Fecha de derivación
- Enlace al sistema (si está configurado)

## Historial de Mensajes

### Ver Mensajes Enviados

Cada entrada de correspondencia guarda un historial de los mensajes de WhatsApp enviados.

**Ruta:** `admin/entradas/{entrada}/mensajes`

### Información del Historial:

| Campo | Descripción |
|-------|-------------|
| **Nombre Persona** | Nombre del destinatario |
| **Teléfono** | Número al que se envió el mensaje |
| **Mensaje** | Contenido del mensaje enviado |
| **Fecha de Envio** | Fecha y hora del envío |
| **Usuario** | Funcionario que realizó el envío |

## Modelo de Datos

### Tabla: mensaje_enviados

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | BigInt | Identificador único |
| `nombre_persona` | String | Nombre del destinatario |
| `phone` | String | Número de teléfono |
| `message` | Text | Contenido del mensaje |
| `user_id` | BigInt | ID del usuario que envía |
| `entrada_id` | BigInt | ID de la entrada asociada |
| `fecha_envio` | Datetime | Fecha y hora del envío |

## Integración con el Sistema

### Activación Automática

El sistema verifica automáticamente si WhatsApp está configurado:
- Si están configurados los settings `servidores.whatsapp` y `servidores.whatsapp-session`, se mostrará el botón de notificación
- Si no están configurados, el botón no será visible

### Envío Automático en Derivación

Además del envío manual, el sistema puede enviar automáticamente un WhatsApp cuando se deriva una correspondencia:
- Se verifica si el destinatario tiene un número de teléfono registrado
- Se envía una notificación con los datos del trámite

## Consideraciones

- El servicio de WhatsApp debe estar configurado y funcionando en un servidor externo
- Los números de teléfono deben incluir el código de país (ej. +591)
- El sistema guarda un registro de todos los mensajes enviados para auditoría
- Es importante verificar que el servidor de WhatsApp esté disponible antes de intentar enviar mensajes
- Esta funcionalidad complementa, pero no sustituye, las notificaciones formales del sistema de correspondencia