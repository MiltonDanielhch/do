---
sidebar_position: 15
---

# Personerías Jurídicas

## Vista General

El módulo de **Personerías Jurídicas** permite gestionar el proceso completo de constitución de personas jurídicas (empresas, fundaciones, asociaciones, etc.) en el Gobierno Autónomo Departamental del Beni. Es la continuación natural del módulo de Reservas de Nombre.

## Relación con Reservas

Las **Personerías Jurídicas** son la culminación del proceso de reservas:

```
Reserva de Nombre (45 días) → Personería Jurídica (Constitución Formal)
```

Una vez que el solicitante completa su trámite dentro del plazo de la reserva, se genera la Personería Jurídica correspondiente.

## Tablero Principal de Personerías

El tablero muestra un listado de todas las personerías jurídicas registradas en el sistema.

### Estructura de la Tabla

| Columna | Descripción | Ejemplo |
|---------|-------------|---------|
| **ID** | Identificador único del registro | `5` |
| **Nombre Reserva** | Nombre de la empresa/entidad | `CONSTRUCTORA DEL NORTE S.R.L.` |
| **Fecha Ingreso** | Fecha de registro del trámite | `15/04/2025 10:30:00` |
| **Hoja Ruta** | Número de hoja de ruta | `HR-2025-0015` |
| **Representante** | Nombre del representante legal | `JUAN PÉREZ GARCÍA` |
| **CI** | Cédula de identidad del representante | `4196168` |
| **Costo** | Monto cancelado por el trámite | `250.00` |
| **Fecha Entrega** | Fecha de entrega del testimonio | - |
| **Fecha Conclusión** | Fecha de conclusión del trámite | - |
| **Acciones** | Botones de operación | Ver, Editar, Anular |

## Estados del Trámite

| Estado | Descripción |
|--------|-------------|
| **Pendiente** | Trámite en proceso de validación |
| **En Tramite** | Documentación en revisión |
| **Concluido** | Personería jurídico otorgada |
| **Anulado** | Trámite cancelado |

## Datos de la Personería

### Información del Modelo

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `fecha_ingreso` | Date | Fecha de ingreso del trámite |
| `hojaruta` | String | Número de hoja de ruta |
| `representante` | String | Nombre del representante legal |
| `ci` | String | Cédula de identidad del representante |
| `costo_personeria` | Decimal | Costo del trámite de personería |
| `costo_valoragregado` | Decimal | Costo de valor agregado |
| `caratula_notarial` | String | Carátula del documento notarial |
| `caratula_expediente` | String | Carátula del expediente |
| `folder_expediente` | String | Número de folder del expediente |
| `numero_testimonio` | String | Número del testimonio notarial |
| `numero_resolucion` | String | Número de resolución de aprobación |
| `fecha_resolucion` | Date | Fecha de la resolución |
| `fecha_entrega` | Date | Fecha de entrega al solicitante |
| `fecha_conclusion` | Date | Fecha de conclusión del trámite |
| `archivo` | String | Ruta del archivo digital |
| `numero_certificado` | String | Número del certificado emitido |
| `documento_municipal` | String | Documento municipal (si aplica) |
| `numero_documento` | String | Número del documento municipal |
| `fecha_numerodocumento` | Date | Fecha del documento municipal |
| `reserva_id` | BigInt | ID de la reserva asociada |
| `departamento_id` | BigInt | ID del departamento |
| `objeto_id` | BigInt | ID del objeto de la entidad |
| `ambitoaplicacion_id` | BigInt | ID del ámbito de aplicación |

## Flujo de Trabajo

### Paso 1: Selección de Reserva
Se selecciona una reserva de nombre vigente (no vencida) como base.

### Paso 2: Ingreso de Datos
Se completa la información del representante legal y datos del trámite.

### Paso 3: Documentación
Se adjunta la documentación soporte:
- Testimonio notarial
- Resoluciones
- Documentos municipales

### Paso 4: Seguimiento
El sistema permite hacer seguimiento del estado del trámite.

### Paso 5: Conclusión
Una vez completado el proceso, se registra la fecha de conclusión.

## Integración con Módulos

- **Reservas:** La personería se crea a partir de una reserva
- **Correspondencia:** Generación de hojas de ruta
- **Certificados:** Emisión de certificados de personería

## Acciones Disponibles

- **Ver:** Ver el detalle completo de la personería
- **Editar:** Modificar datos del registro
- **Anular:** Cancelar el trámite (requiere confirmación)

## Consideraciones

- La personería está vinculada a una reserva específica
- El representante legal debe tener sus datos actualizados
- Los costos pueden incluir valores adicionales
- La documentación digital se almacena en el sistema
- Es importante mantener actualizada la fecha de entrega y conclusión