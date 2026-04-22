---
sidebar_position: 6
---

# Parámetros del Sistema

## Vista General

Catálogos y configuraciones del sistema de impuestos.

## Tipos de Transmisión

**Ruta:** `admin/tipos-transmision`

| ID | Nombre | Descripción |
|----|--------|-------------|
| 1 | Compra-Venta | Transmisión por compra |
| 2 | Donación | Transmisión gratuita |
| 3 | Sucesión | Herencia |
| 4 | Otros | Otras formas de transmisión |

## Parentescos

**Ruta:** `admin/parentescos`

|ID | Nombre | Categoría |
|---|--------|-----------|
| 1 | Cónyuge | 1 |
| 2 | Hijos | 1 |
| 3 | Padres | 1 |
| 10 | Hermanos | 10 |
| 20 | Otros | 20 |

## Tipos de Inmueble

**Ruta:** `admin/tipos-inmueble`

| ID | Nombre |
|----|--------|
| 1 | Casa |
| 2 | Departamento |
| 3 | Lote |
| 4 | Local Comercial |
| 5 | Terreno |

## Tasas

**Ruta:** `admin/tasas`

| ID | Nombre | Valor |
|----|--------|-------|
| 1 | Tasa 1% | 1% |
| 10 | Tasa 10% | 10% |
| 20 | Tasa 20% | 20% |

## Exenciones

**Ruta:** `admin/exenciones`

| ID | Nombre | Descripción |
|----|--------|-------------|
| 1 | Donación Empresa | Done por empresa |
| 2 | Institución Pública | Entidad pública |
| 3 | others | others |

---

## UFV - Actualización de Valores

El sistema maneja la UFV (Unidad de Fomento de Vivienda) para actualizar valores históricos a valores actuales.

### Cálculo UFV
- Los valores se ajustan según la UFV de la fecha de transmisión
- Permite valores justos en transacciones antiguas