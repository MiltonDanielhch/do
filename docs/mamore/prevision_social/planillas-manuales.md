---
sidebar_position: 2
---

# Planillas Manuales

## Vista General
Módulo para gestionar planillas de pago ingresadas manualmente en el sistema del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| id | Identificador único | Numérico | 34 |
| Detalles | Información de la planilla | Texto expandible | Ver ejemplo |
| AFP | Fondo de pensiones | Texto | "Futuro", "Previsión" |
| Planilla | Número de planilla | Texto | "8530" |
| Periodo | Mes/Año de pago | Texto | "Noviembre/2020" |
| Nro Personas | Beneficiarios | Numérico | 29 |
| Total | Monto total | Decimal | 76.694,51 |
| Total AFP | Aportes patronales | Decimal | 14.687,10 |
| Registrado por | Usuario que ingresó | Texto | "Romied Loras" |
| Registrado el | Fecha de ingreso | Timestamp | "16/02/2022 14:57" |

## Detalles Expandidos
```plaintext
Dirección: Secretaria Departamental de Administracion y Finanzas
Tipo: Inversion
```


## Tipos de Planillas
1. Inversión : Para proyectos y obras
2. Funcionamiento : Gastos operativos regulares
3. Personal : Remuneraciones extraordinarias
## Filtros Disponibles
- Básicos :
  
  - Por dirección administrativa
  - Por tipo de planilla (Inversión/Funcionamiento)
  - Por AFP
  - Por periodo
- Avanzados :
  
  - Por rango de montos
  - Por cantidad de beneficiarios
  - Por usuario registrador
  - Por rango de fechas
## Acciones Disponibles
1. Ver Detalle : Información completa
2. Editar : Modificar datos básicos
3. Exportar : Generar reporte en Excel/PDF
4. Conciliar : Registrar conciliación contable
## Ejemplo de Registro Completo

ID: 34
Detalles:
  Dirección: Secretaria Departamental de Administracion y Finanzas
  Tipo: Inversion
AFP: Futuro
Planilla: 8530
Periodo: Noviembre/2020
Personas: 29
Total: 76.694,51 Bs.
Total AFP: 14.687,10 Bs.
Registrado por: Romied Loras
Fecha: 16/02/2022 14:57

## Consideraciones
- Requiere validación de Tesorería para pagos
- Integración con módulos de:
  - Contabilidad
  - Recursos Humanos
  - Presupuesto
- Genera comprobante PDF automático
- Auditoría completa de operaciones

# Crear Planilla Manual

## Vista General
Formulario para registrar planillas de pago de forma manual en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Dirección administrativa**: Selección de unidad organizacional
- **Tipo de planilla**: 
  - Inversión
  - Funcionamiento
  - Personal
- **Código de planilla**: Identificador único (formato alfanumérico)
- **Mes**: Periodo de pago (Enero-Diciembre)
- **Año**: Año fiscal (formato: YYYY)
- **Cantidad de personas**: Número de beneficiarios (1-999)

### Datos Financieros
- **Tipo de AFP**: Selección de fondo de pensiones
- **Total ganado**: Monto bruto a pagar (en bolivianos)
- **Total AFP**: Aportes patronales (en bolivianos)

## Proceso de Registro

1. **Seleccionar dirección administrativa**
2. **Definir tipo de planilla**
3. **Ingresar código de planilla**
4. **Especificar periodo (mes/año)**
5. **Indicar cantidad de beneficiarios**
6. **Completar datos financieros**
7. **Validar información**
8. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Código planilla | Único en el sistema | "Código ya existe" |
| Año | 2000-2099 | "Año fuera de rango" |
| Cantidad personas | 1-999 | "Cantidad inválida" |
| Montos | > 0 Bs. | "El monto debe ser positivo" |

## Ejemplo de Registro
```plaintext
Dirección: Secretaria Departamental de Administracion y Finanzas
Tipo: Inversion
Código: 8530
Periodo: Noviembre 2020
Personas: 29
AFP: Futuro
Total ganado: 76.694,51 Bs.
Total AFP: 14.687,10 Bs.
```

## Consideraciones
- Requiere permisos de "Registro Manual"
- Genera comprobante PDF automático
- Integración con módulos de:
  - Planillas principales
  - Tesorería
  - Contabilidad
- Auditoría completa de operaciones
- Validez de documentos por 5 años