---
sidebar_position: 13
---

# Reporte de Stock Disponible

## Descripción General
Este reporte muestra el inventario actual de artículos disponibles en el almacén del Gobierno Autónomo Departamental del Beni.

### Características Principales
- Listado detallado de artículos en stock
- Información de compra y proveedores
- Cálculo de valores por artículo y totales
- Filtrado por sucursal, tipo y fecha límite
- Exportación en múltiples formatos

## Estructura del Reporte

| Campo | Descripción |
|-------|-------------|
| N° | Número de orden |
| F. INGRESO | Fecha de ingreso al almacén |
| ENTIDAD + NRO COMPRA | Origen y referencia de compra |
| PROVEEDOR | Nombre del proveedor |
| NRO | Número de documento |
| ARTICULO | Nombre del artículo |
| CODIGO ART | Código único del artículo |
| PRESENTACION | Unidad de medida |
| PRECIO | Valor unitario en Bs. |
| CANT. | Cantidad disponible |
| SUBTOTAL | Valor total en Bs. |

## Procesos Disponibles
### Generación del Reporte
1. Seleccionar sucursal(es)
2. Especificar tipo de artículo (opcional)
3. Definir fecha límite de consulta
4. Configurar formato de salida (PDF/Excel/CSV)
5. Generar y descargar documento
### Funcionalidades Adicionales
- Búsqueda avanzada : Por artículo, proveedor o código
- Ordenamiento : Por fecha, valor o cantidad
- Totalización : Sumatorias automáticas por categoría
## Interpretación Financiera
- Valor total : Suma del valor de todo el stock disponible
- Artículos críticos : Bajas cantidades de productos importantes
- Stock obsoleto : Productos sin movimiento por largo tiempo
## Consideraciones
- Valores expresados en bolivianos (Bs.)
- Refleja el estado actual del inventario
- Requiere permisos básicos de consulta
- Los datos se actualizan en tiempo real
- Incluye solo artículos con existencia positiva

## Datos de Ejemplo

```plaintext
1 | 03/01/2022 | APOYO NACIONAL UCNS-0001 | DUBEI S.R.L.(SC) | Orden 38
Artículo: TONER 12A | Código: 8 | Presentación: PIEZA
Precio: 455.00 | Cantidad: 5.00 | Subtotal: 2,275.00

8 | 03/01/2022 | APOYO NACIONAL UCNS-0014 | ALMA MATER | Orden 4
Artículo: ENGRAMPADORA SEMI-INDUSTRIAL | Código: 75
Precio: 178.00 | Cantidad: 52.00 | Subtotal: 9,256.00