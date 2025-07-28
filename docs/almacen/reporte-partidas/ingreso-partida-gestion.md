---
sidebar_position: 16
---

# Reporte de Ingresos por Partida Presupuestaria

## Descripción General
Este reporte detalla los ingresos de artículos clasificados por partida presupuestaria específica en el Gobierno Autónomo Departamental del Beni.

### Características Principales
- Registro cronológico de ingresos por partida
- Detalle completo por artículo con valores unitarios y totales
- Filtrado por fechas, sucursal y tipo de material
- Totalización automática por partida seleccionada
- Exportación en múltiples formatos


## Procesos Disponibles
### Generación del Reporte
1. Seleccionar partida presupuestaria
2. Definir rango de fechas
3. Especificar sucursal (opcional)
4. Configurar formato de salida (PDF/Excel/CSV)
5. Generar y descargar documento
### Análisis de Datos
- Consumo por partida : Comparativa entre categorías
- Tendencias temporales : Evolución de compras
- Artículos más adquiridos : Identificación de necesidades recurrentes
- Proveedores principales : Análisis por factura
## Interpretación Financiera
- Total general : Suma de todos los ingresos (Bs. 92.862,00 en ejemplo)
- Promedio por artículo : Valor medio de las adquisiciones
- Distribución temporal : Concentración de compras por período
## Consideraciones
- Valores expresados en bolivianos (Bs.)
- Refleja solo ingresos aprobados y registrados
- Requiere permisos de nivel administrativo
- Los datos se actualizan diariamente
- Incluye filtros para análisis específicos

## Estructura del Reporte

| Campo | Descripción |
|-------|-------------|
| N° | Número de orden |
| N° SOLICITUD | Referencia de solicitud |
| FECHA INGRESO | Fecha de registro |
| N° FACTURA | Documento de compra |
| ARTICULO | Nombre del material |
| PRESENTACION | Unidad de medida |
| CANTIDAD | Unidades ingresadas |
| PRECIO U. | Valor unitario en Bs. |
| SUB TOTAL | Valor total en Bs. |

## Datos de Ejemplo

```plaintext
1 | SMA-0002 | 25/05/2023 | 12 | YPFB GX EXTRA SAE 40 1L
Presentación: LITRO | Cantidad: 125,00 | Precio: 30,00 | Total: 3.750,00

4 | DDVT-0014 | 29/06/2023 | 64-A | ACEITE DE TRANSMISICION 10W30 (20L)
Presentación: BALDE | Cantidad: 10,00 | Precio: 620,00 | Total: 6.200,00

50 | DDC-0018 | 26/12/2023 | 177-A | ACEITE DE MOTOR A DIESEL 20W50
Presentación: BALDE | Cantidad: 4,00 | Precio: 500,00 | Total: 2.000,00