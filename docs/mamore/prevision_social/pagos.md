---
sidebar_position: 2
---

# Pagos de Planilla

## Vista General
Módulo para gestionar los pagos procesados de planillas del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| ID | Identificador único | Numérico | 9721 |
| Dirección administrativa | Unidad responsable | Texto | "Secretaria Departamental de Administracion y Finanzas" |
| Planilla | Información de planilla | Texto expandible | Ver ejemplo |
| Nro de FPC | Número de Formulario de Pago Complementario | Texto | "2413668" |
| Nro de GTC-11 | Número de documento tributario | Texto | "1482" |
| Nro de deposito | Número de depósito bancario | Texto | "7083428" |
| Registrado por | Usuario que procesó | Texto | "Milton Cuellar" |
| Fecha | Fecha de registro | Timestamp | "16/01/2025 09:38" |

## Detalles Expandidos de Planilla
```plaintext
Tipo: eventual - 202409
Planilla: 005159 - Gestora
N° personas: 134
Total ganado: 549.400,00 Bs.
```
## Tipos de Pagos
1. Permanente : Pagos regulares a personal fijo
2. Eventual : Pagos a personal temporal
3. Complementarios : Ajustes y pagos adicionales
## Filtros Disponibles
- Básicos :
  
  - Por dirección administrativa
  - Por tipo de planilla
  - Por rango de fechas
  - Por número de documento (FPC, GTC-11, depósito)
- Avanzados :
  
  - Por rango de montos
  - Por cantidad de beneficiarios
  - Por usuario registrador
## Acciones Disponibles
1. Ver : Detalle completo del pago
2. Editar : Modificar información básica
3. Borrar : Eliminar registro (solo para pagos no conciliados)
4. Exportar : Generar reporte en Excel/PDF
5. Conciliar : Registrar conciliación bancaria
## Ejemplo de Registro Completo

ID: 9721
Dirección: Secretaria Departamental de Administracion y Finanzas
Planilla:
  Tipo: eventual - 202409
  N°: 005159 - Gestora
  Personas: 134
  Total: 549.400,00 Bs.
FPC: 2413668 (23/10/2024)
GTC-11: 1482
Depósito: 7083428 (23/10/2024)
Registrado por: Milton Cuellar
Fecha: 16/01/2025 09:38

## Consideraciones
- Los pagos requieren documentos soporte completos
- Integración con módulos de:
  - Planillas principales
  - Tesorería
  - Sistema bancario
  - Contabilidad (SIGMA)
- Auditoría completa de operaciones
- Validez de documentos por 5 años


# Agregar Pago de Seguridad Social

## Vista General
Formulario para registrar pagos de aportes a la seguridad social (AFP y Caja de Salud) en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Tipo de Pago**:
  - No centralizadas
  - Centralizadas
  - Planilla

### Sección AFP
- **AFP's**: Selección de fondo de pensiones
- **N° de recibo AFP**: Número de comprobante
- **N° de FPC**: Formulario de Pago Complementario
- **Fecha de pago a AFP**: DD/MM/AAAA
- **N° de cheque(s) AFP**: Números de cheques emitidos
- **Multa**: Monto de multas aplicadas (si corresponde)

### Sección Caja Cordes
- **Fecha de pago a Caja Cordes**: DD/MM/AAAA
- **N° de deposito**: Número de depósito bancario
- **N° de GTC-11**: Documento tributario
- **N° de recibo**: Número de comprobante
- **Multa**: Monto de multas aplicadas (si corresponde)

## Proceso de Registro

1. **Seleccionar tipo de pago**
2. **Completar datos de AFP**:
   - Seleccionar AFP
   - Ingresar números de documentos
   - Especificar fechas
3. **Completar datos de Caja Cordes**:
   - Ingresar números de documentos
   - Especificar fechas
4. **Validar información**
5. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Fechas | Formato DD/MM/AAAA | "Formato de fecha inválido" |
| Números | Formato numérico | "Debe contener solo números" |
| Montos | ≥ 0 | "El monto no puede ser negativo" |

## Ejemplo de Registro
```plaintext
Tipo: Planilla

AFP:
  AFP: Futuro
  Recibo: 123456
  FPC: 789012
  Fecha: 15/06/2024
  Cheque: 987654
  Multa: 0.00

Caja Cordes:
  Fecha: 15/06/2024
  Depósito: 654321
  GTC-11: 321098
  Recibo: 456789
  Multa: 0.00

  ## Consideraciones
- Genera comprobante PDF automático
- Requiere aprobación de Tesorería
- Integración con módulos de:
  - Planillas
  - Contabilidad
  - Bancos
- Auditoría completa de operaciones
- Validez de documentos por 5 años