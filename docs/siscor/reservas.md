---
sidebar_position: 10
---

# Reservas de Nombre (Personerías Jurídicas)

## Vista General

Este módulo permite gestionar las reservas de nombre para la constitución de personas jurídicas (empresas, fundaciones, asociaciones, etc.) ante el Gobierno Autónomo Departamental del Beni. La reserva de nombre es un requisito previo para el registro formal de una entidad.

## Tablero Principal de Reservas

El tablero muestra un listado de todas las reservas de nombre registradas en el sistema.

### Funcionalidades Clave del Tablero:

- **Crear Nueva Reserva:** Botón para acceder al formulario de registro de una nueva reserva de nombre.
- **Búsqueda:** Campo para filtrar reservas por ID, Nombre, Solicitante, etc.
- **Paginación:** Controles para navegar entre las páginas de resultados.
- **Indicador de Plazo:** Muestra visualmente si la reserva está vigente o vencida.

### Estructura de la Tabla de Reservas:

| Columna | Descripción | Ejemplo |
|---------|-------------|---------|
| **ID** | Identificador único del registro | `12` |
| **Nombre Reserva** | Nombre reservado para la persona jurídica | `CONSTRUCTORA DEL NORTE S.R.L.` |
| **Estado del Plazo** | Indicador visual del tiempo restante (verde=vigente, rojo=vencido) | "Tiene 30 días para realizar su trámite" |
| **Solicitante** | Nombre de la persona que realiza la reserva | `JUAN PEREZ` |
| **Localidad** | Municipio donde se realiza el trámite | ` Trinidad` |
| **N° Recibo** | Número del recibo de pago | `12345` |
| **Costo** | Monto cancelado por la reserva | `150.00` |
| **Fecha Inicio** | Fecha de registro de la reserva | `15/03/2025` |
| **Estado** | Estado actual de la reserva | `Activo` / `Anulado` |
| **Acciones** | Botones de operaciones | Ver, Editar, Anular |

## Estados de una Reserva

| Estado | Descripción |
|--------|-------------|
| **Activo** | Reserva vigente, dentro del plazo legal |
| **Anulado** | Reserva cancelada por el usuario o por vencimiento |
| **Concluido** | Reserva convertida en personería jurídica正式 |

## Plazo Legal

Las reservas de nombre tienen un plazo de **45 días** para completar el trámite de constitución de la persona jurídica. El sistema muestra:

- **Verde:** Quedan días disponibles para el trámite
- **Rojo:** El plazo ya expiró

## Crear Nueva Reserva

### Campos del Formulario:

| Campo | Descripción | Tipo | Requerido |
|-------|-------------|------|-----------|
| **Nombre Solicitante** | Nombre completo de la persona que realiza la reserva | Texto | Sí |
| **Nombre de Reserva** | Nombre que se desea reservar para la empresa | Texto | Sí |
| **Localidad** | Municipio donde se realiza el trámite | Selección | Sí |
| **Número de Recibo** | Número del comprobante de pago | Texto | Sí |
| **Costo de Reserva** | Monto cancelado | Número | Sí |
| **Fecha de Inicio** | Fecha de realización del trámite | Fecha | Sí (auto) |

### Validaciones:

- El **Nombre de Reserva** no puede estar ya registrado en la misma provincia
- El **Solicitante** es obligatorio

### Proceso de Registro:

1. Ingresar el **Nombre del Solicitante**
2. Ingresar el **Nombre de Reserva** deseado
3. Seleccionar la **Localidad** (Municipio)
4. Ingresar el **Número de Recibo** de pago
5. Ingresar el **Costo de Reserva**
6. Confirmar el registro

## Acciones por Registro

- **Ver:** Ver el detalle completo de la reserva
- **Editar:** Modificar los datos de la reserva (si está activa)
- **Anular:** Cancelar la reserva (requiere confirmación)

## Consideraciones

- La reserva de nombre es **exclusiva por provincia**: no pueden existir dos reservas con el mismo nombre en la misma provincia
- El plazo de 45 días es legal y no es posible ampliarlo desde el sistema
- Una vez vencido el plazo, la reserva queda automáticamente sin efecto
- Este módulo se integra con el módulo de **Personerías Jurídicas** para la conversión final del trámite