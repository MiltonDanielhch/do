---
sidebar_position: 2
---

# Gestión de Memorándums

## Vista General
Módulo para administrar los memorándums financieros del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| N° | Número consecutivo | Texto | "0607/2025" |
| Código | Identificador único | Texto | "0607/2025" |
| De | Remitente con cargo | Texto | "GILBERTO MENDOZA DEUGARTE<br />DIRECTOR DE FINANZAS" |
| Para | Destinatario con cargo | Texto | "WILGERS MEJÍA MOLINA<br />JEFE DE UNIDAD II - CONTABILIDAD Y ARCHIVO" |
| Tipo | Clasificación del memo | Texto | "CONSULTORIA EN LINEA" |
| Orden | Tipo de pago | Texto | "Deposito" |
| Monto | Valor de la transacción | Decimal | "4.950,00" |
| Fecha | Fecha de emisión | Fecha | "22/02/2025" |
| Registrado | Usuario y fecha de registro | Timestamp | "Monica<br />13/02/2025 17:32" |

## Tipos de Memorándums
1. **Consultoría en línea**: Pagos a consultores externos
2. **Servicios profesionales**: Honorarios por servicios
3. **Gastos operativos**: Viáticos y otros gastos
4. **Transferencias**: Movimientos entre cuentas

## Filtros Disponibles

### Básicos
- Por número/código
- Por remitente (campo "De")
- Por destinatario (campo "Para")
- Por tipo de memo
- Por rango de fechas

### Avanzados
- Por rango de montos
- Por usuario registrador
- Por número de documento (CI/NIT)

## Acciones Disponibles
1. **Ver Detalle**: Información completa del memo
2. **Exportar**: Generar reporte en Excel/PDF
3. **Anular**: Cancelar memo no procesado
4. **Seguimiento**: Ver historial de derivaciones

## Ejemplo de Registro Completo
```plaintext
N°: 0607/2025
De: GILBERTO MENDOZA DEUGARTE (DIRECTOR DE FINANZAS)
Para: WILGERS MEJÍA MOLINA (JEFE DE UNIDAD II)
Tipo: CONSULTORIA EN LINEA
Orden: Deposito
Beneficiario: OMAR MILTON MONTAÑO PINTO (CI: 7587804)
Monto: 4.950,00 Bs.
Fecha: 22/02/2025
Registrado por: Monica (13/02/2025 17:32)
```

## Consideraciones
- Genera comprobante PDF automático
- Integración con módulos de:
  - Tesorería
  - Contabilidad
  - Recursos Humanos
- Auditoría completa de operaciones
- Validez de documentos por 5 años


# Crear Nuevo Memorándum

## Vista General
Formulario para registrar nuevos memorándums financieros en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Tipo**:
  - Normal
  - Extraordinario
- **Fecha**: Fecha de emisión (DD/MM/AAAA)
- **Origen**: Unidad/Persona remitente
- **Destino**: Unidad/Persona destinataria

### Datos Financieros
- **Preventivo**: Número de preventivo
- **DA (SIGEP)**: Dirección administrativa en SIGEP
- **Fuente**: Fuente de financiamiento
- **Monto**: Valor de la transacción (Bs.)
- **Imputación**: Clasificación presupuestaria

### Contenido
- **Sirvase**: Instrucciones/encabezado
- **A la orden de**: Beneficiario final
- **Concepto**: Descripción detallada

## Proceso de Creación

1. **Seleccionar tipo de memo**
2. **Completar datos básicos**:
   - Fecha
   - Origen/Destino
3. **Ingresar información financiera**:
   - Números de referencia
   - Montos
4. **Redactar contenido**:
   - Instrucciones
   - Concepto
5. **Validar información**
6. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Fecha | ≤ fecha actual | "Fecha no puede ser futura" |
| Monto | > 0 Bs. | "El monto debe ser positivo" |
| Concepto | Mín. 20 caracteres | "Descripción muy breve" |

## Ejemplo de Registro
```plaintext
Tipo: Normal
Fecha: 22/02/2025
Origen: DIRECTOR DE FINANZAS
Destino: JEFE DE UNIDAD II
Preventivo: 12345
DA (SIGEP): FIN-001
Fuente: Recursos propios
Monto: 4.950,00
Imputación: CONSULTORIA
Sirvase: Realizar el pago correspondiente
A la orden de: OMAR MILTON MONTAÑO PINTO
Concepto: Pago por servicios de consultoría en línea
```

## Consideraciones
- Genera código consecutivo automático
- Requiere aprobación según monto
- Integración con módulos de:
  - Tesorería
  - Contabilidad
  - SIGEP
- Auditoría completa de operaciones