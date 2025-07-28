---
sidebar_position: 18
---

# Reporte de Acceso de Usuarios al Almacén

## Descripción General
Este reporte muestra el registro de usuarios autorizados para realizar operaciones en el sistema de almacén del Gobierno Autónomo Departamental del Beni.

### Características Principales
- Listado completo de usuarios por almacén
- Detalle de operaciones realizadas
- Registro de cantidades y valores
- Filtrado por almacén y período
- Exportación en múltiples formatos

## Procesos Disponibles
### Generación del Reporte
1. Seleccionar almacén(es)
2. Definir período de consulta
3. Configurar formato de salida (PDF/Excel/CSV)
4. Generar y descargar documento
### Funcionalidades Adicionales
- Búsqueda rápida : Por CI o nombre de usuario
- Filtrado avanzado : Por tipo de operación
- Exportación selectiva : Por rango de fechas
## Consideraciones
- Listado actualizado en tiempo real
- Solo muestra usuarios activos
- Requiere permisos de nivel administrativo
- Los valores reflejan el período seleccionado
- Datos auditables y verificables

## Estructura del Reporte

| Campo | Descripción |
|-------|-------------|
| N° | Número de orden |
| ALMACEN | Ubicación del almacén |
| USUARIOS | Lista de usuarios autorizados (CI - Nombre Completo) |
| INGRESO CANT. | Cantidad total de operaciones |
| INGRESO BS | Valor total en bolivianos |

## Datos de Ejemplo

```plaintext
1 | ALMACEN CENTRAL GAD-BENI
Usuarios: 
5618540 - MARIANNE ABUCHAIN GUZMAN
7630560 - ALDAHIR ALEXIS AÑEZ JIMENEZ
4192451 - CAROLINA RODRIGUEZ RIBERA
...
Total: 494,998.86 operaciones | Bs. 4,672,777.81

2 | CORREGIMIENTO SAN JAVIER
Usuarios:
4189519 - ROBERTO CARLOS D'ESTE PEDRAZA
1735706 - PEDRO MUIBA YUJO
Total: 2,890.00 operaciones | Bs. 20,295.44