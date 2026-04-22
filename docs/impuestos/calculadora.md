---
sidebar_position: 1
---

# Calculadora IDTGB Beni

## Vista General

La Calculadora de IDTGB (Impuesto Departamental de Transmisión de Bienes Gratuitos) del Beni permite calcular el monto de impuesto a pagar por transmisión de bienes gratuitos.

## Cómo Acceder

**Ruta:** `/calculadora-idtgb-beni`

## Funcionalidades

### 1. Formulario de Cálculo

Permite ingresar los datos para calcular el impuesto.

### Campos Requeridos

| Campo | Descripción | Ejemplo |
|-------|-------------|--------|
| **Nombre Sujeto** | Nombre del contribuyente | Juan Pérez |
| **CI Sujeto** | Cédula de identidad | 4196168 |
| **Tipo Contribuyente** | Natural o Jurídica | Natural |
| **Categoría Tasa** | Categoría de parentesco | 1 (hasta 2°) |
| **Fecha Transmisión** | Fecha de la transmisión | 15/03/2025 |
| **Base Imponible** | Valor del inmueble | 500,000 |
| **Tipo Transmisión** | Tipo de transmisión | Compra/Venta |
| **Participación** | Porcentaje de participación | 100% |

### 2. Resultado del Cálculo

El sistema calcula automáticamente:
- Base imponible
- Rebaja por parentesco
- Débito fiscal
- Total a pagar

## Integración con UFV

El sistema actualiza automáticamente los valores basado en la UFV (Unidad de Fomento de Vivienda) de la fecha de transmisión.

## Consideraciones

- La fecha de transmisión no puede ser futura
- Las categorías van de 1 a 20 según el parentesco
- El tipo de contribuyente afecta el cálculo