---
sidebar_position: 1
---

# Bandeja de Entrada de Correspondencia (SISCOR)

## Vista General
La Bandeja de Entrada es el punto central para la gestión de la correspondencia recibida por el usuario en el Sistema de Correspondencia (SISCOR) del Gobierno Autónomo Departamental del Beni. Permite visualizar, organizar y procesar los trámites y documentos asignados.

## Secciones de la Bandeja

La bandeja se organiza en pestañas para facilitar la gestión de la correspondencia:

1.  **Pendientes**: Muestra toda la correspondencia que ha sido derivada al usuario y que requiere alguna acción (revisión, derivación, respuesta, archivo). Es la vista principal de trabajo.
2.  **Urgentes**: Filtra la correspondencia marcada como urgente, permitiendo priorizar su atención.
3.  **Derivados**: Muestra la correspondencia que el usuario ya ha procesado y derivado a otra instancia o funcionario. Sirve como historial de las acciones de derivación realizadas.
4.  **Archivados**: Contiene la correspondencia que el usuario ha marcado como concluida o archivada dentro de su gestión.

## Estructura de la Tabla de Correspondencia

Cada pestaña muestra una tabla con la siguiente información (columnas):

| Campo | Descripción | Tipo | Ejemplo (Ilustrativo) |
|-------|-------------|------|---------|
| ID | Identificador único del registro de correspondencia en el sistema | Numérico | 12345 |
| HR | Número de Hoja de Ruta asignado al trámite | Alfanumérico | GADB-SAF-2024-00150 |
| Fecha de derivación | Fecha y hora en que la correspondencia fue derivada al usuario actual | Timestamp | 2024-05-15 10:30:00 |
| Nro. de cite | Número de referencia o cite del documento original | Alfanumérico | INF/GADB/RRHH/050/2024 |
| Remitente | Nombre de la persona, unidad o entidad que envió originalmente la correspondencia | Texto | Juan Perez / Secretaría de Obras Públicas |
| Referencia | Asunto o tema principal de la correspondencia | Texto | Solicitud de Informe Técnico |

*Nota: Actualmente la bandeja del usuario no muestra resultados.*

## Funcionalidades Principales

- **Búsqueda**: Permite buscar correspondencia por cualquiera de los campos visibles (HR, Cite, Remitente, Referencia).
- **Paginación**: Navegación entre páginas si hay muchos registros.
- **Selección de cantidad de registros**: Permite ajustar cuántos registros se muestran por página (ej. 50).

## Acciones Comunes (Disponibles por registro, usualmente mediante botones/iconos)

- **Ver Detalle**: Abrir la Hoja de Ruta completa para ver el historial, documentos adjuntos y detalles.
- **Derivar**: Enviar la correspondencia a otro funcionario o unidad.
- **Archivar**: Marcar la correspondencia como concluida para el usuario actual.
- **Responder**: Generar un documento de respuesta asociado (si aplica).
- **Marcar como Urgente/No Urgente**: Cambiar la prioridad del trámite.

## Consideraciones
- La bandeja es personal para cada usuario.
- La correcta y oportuna gestión de la bandeja es crucial para el flujo de la correspondencia institucional.
- Las acciones realizadas (derivación, archivo) quedan registradas en la Hoja de Ruta del trámite.
- Integración con módulos de:
  - Registro de Correspondencia
  - Gestión de Documentos
  - Notificaciones
- Auditoría completa de operaciones.