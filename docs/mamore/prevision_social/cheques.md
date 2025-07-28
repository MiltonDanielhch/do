---
sidebar_position: 3
---

# Cheques de Planilla

## Vista General
Módulo para gestionar los cheques emitidos para pagos de planillas del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| ID | Identificador único | Numérico | 12479 |
| Dirección administrativa | Unidad responsable | Texto | "Sub Gobernacion Provincia Vaca Diez" |
| Detalles de cheque | Información del cheque | Texto expandible | Ver ejemplo |
| Beneficiario | Receptor del pago | Texto | "Caja de Salud Cordes" |
| Impresión | Fecha de impresión | Fecha | "29/02/2024" |
| Vencimiento | Fecha de caducidad | Fecha | "29/03/2024" |
| Registrado por | Usuario que generó | Texto | "Milton Cuellar" |
| Derivaciones | Fecha de registro | Timestamp | "15/10/2024 12:13" |

## Detalles Expandidos del Cheque
```plaintext
N°: 257470
Tipo: eventual - 202312
Planilla: 004113 - Gestora
Monto: 1.850,00 Bs.
Estado: Pagado
Concepto: Aporte Pat. Salud
```

## Tipos de Cheques
1. Aportes patronales : Seguro salud, AFP, etc.
2. Remuneraciones : Pagos directos a funcionarios
3. Bonos : Pagos extraordinarios
## Filtros Disponibles
- Básicos :
  
  - Por dirección administrativa
  - Por beneficiario
  - Por rango de fechas
  - Por estado (Pagado, Pendiente)
- Avanzados :
  
  - Por número de cheque
  - Por número de planilla
  - Por rango de montos
## Acciones Disponibles
1. Ver Detalle : Información completa del cheque
2. Reimprimir : Generar nuevo comprobante
3. Anular : Cancelar cheque no cobrado
4. Exportar : Generar reporte en Excel/PDF
5. Seguimiento : Ver historial de derivaciones

## Consideraciones
- Los cheques tienen validez de 30 días
- Requieren firma autorizada para su emisión
- Integración con módulos de:
  - Planillas principales
  - Tesorería
  - Bancos
- Auditoría completa de operaciones

Ejemplo de Registro Completo
ID: 12479
Dirección: Sub Gobernacion Provincia Vaca Diez
Detalles:
  N°: 257470
  Tipo: eventual - 202312
  Planilla: 004113 - Gestora
  Monto: 1.850,00 Bs.
Beneficiario: Caja de Salud Cordes
Impresión: 29/02/2024
Vencimiento: 29/03/2024
Registrado por: Milton Cuellar
Derivaciones: 15/10/2024 12:13


# Agregar Cheque de Seguridad Social

## Vista General
Formulario para crear nuevos cheques de seguridad social en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Tipo de Cheque**:
  - Normal
  - Centralizadas
  - Planilla
- **Programa/Proyecto**: Selección de iniciativa presupuestaria
- **N° de cheque**: Número consecutivo (formato: 00000001-99999999)
- **Beneficiario**: Nombre completo de la entidad o persona
- **Monto**: Valor del cheque (en bolivianos)
- **Fecha de impresión**: Fecha de emisión (DD/MM/AAAA)
- **Estado**: 
  - Pendiente
  - Aprobado
  - Anulado

### Información Adicional
- **Observaciones**: Notas relevantes sobre el cheque

## Proceso de Creación

1. **Seleccionar tipo de cheque**
2. **Asignar programa/proyecto**
3. **Ingresar número de cheque**
4. **Completar datos del beneficiario**
5. **Definir monto y fecha**
6. **Establecer estado inicial**
7. **Agregar observaciones (opcional)**
8. **Confirmar creación**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| N° cheque | Formato numérico | "Número de cheque inválido" |
| Monto | > 0 Bs. | "El monto debe ser positivo" |
| Fecha | ≤ fecha actual | "Fecha no puede ser futura" |

## Consideraciones
- Genera comprobante PDF automático
- Requiere aprobación de Tesorería
- Integración con módulos de:
  - Planillas
  - Presupuesto
  - Contabilidad
- Auditoría completa de operaciones
- Validez de 30 días desde emisión

## Ejemplo de Registro
```plaintext
Tipo: Planilla
Programa: Todos
N° cheque: 257471
Beneficiario: Caja de Salud Cordes
Monto: 1850.00 Bs.
Fecha: 15/06/2024
Estado: Pendiente
Observaciones: Aporte patronal salud - Diciembre 2023