---
sidebar_position: 2
---

# Listado de Archivos de Planillas

## Vista General
Este módulo permite visualizar, buscar y gestionar los archivos digitales asociados a las diferentes planillas de pagos (sueldos, aguinaldos, etc.) del Gobierno Autónomo Departamental del Beni. La interfaz presenta una tabla paginada con los archivos cargados y opciones de filtrado y acciones.

## Controles de Visualización
- **Mostrar registros**: Permite seleccionar cuántos registros se muestran por página (ej. 10, 25, 50).

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| ID | Identificador único del registro de archivo | Numérico | 996 |
| Dirección administrativa | Unidad organizacional responsable de la planilla | Texto | "Servicio Departamental de Deportes (SEDEDE)" |
| Periodo | Mes y año al que corresponde la planilla | Texto (AAAAMM) | "202501" |
| Tipo planilla | Clasificación de la planilla | Texto | "eventual", "Permanente" |
| Tipo de archivo | Naturaleza del documento adjunto | Texto | "biométrico", "rc-iva" |
| Estado | Situación actual del archivo en el sistema | Texto | "Cargado", "Observado" |
| Creado por | Nombre del usuario que realizó la carga | Texto | "alexander guaji parada" |
| Fecha | Fecha y hora de carga, con indicación relativa | Fecha/Texto | "12/02/2025 (hace 2 meses)" |
| Acciones | Operaciones disponibles sobre el archivo | Iconos | (Ver, Descargar, Editar, Eliminar) |

## Tipos de Archivos Comunes

1.  **Biométrico**: Registros de asistencia (marcas de reloj biométrico).
2.  **RC-IVA**: Formularios y respaldos del Régimen Complementario al IVA.
3.  **Comprobantes**: Vouchers o recibos de pago bancario.
4.  **Planilla Firmada**: Documento escaneado de la planilla con firmas.
5.  **Anexos**: Otros documentos de respaldo relevantes.

## Filtros Disponibles

### Básicos
- Por **Dirección administrativa**
- Por **Tipo de planilla**
- Por **Periodo** (mes/año)

### Avanzados
- Por **Tipo de archivo**
- Por **Estado** del archivo
- Por **Rango de fechas** de carga
- Por **Usuario creador**

## Acciones Disponibles (Iconos)

1.  **Ver/Detalle**: Visualizar información adicional o una vista previa.
2.  **Descargar**: Obtener una copia local del archivo.
3.  **Editar/Reemplazar**: Actualizar el archivo o sus metadatos (si aplica y se tienen permisos).
4.  **Eliminar**: Borrar el registro y archivo del sistema (requiere permisos especiales).

## Consideraciones
- Formatos de archivo permitidos usualmente: PDF, JPG, PNG, Excel (XLSX), Word (DOCX).
- Puede existir un límite de tamaño por archivo (ej. 5MB o 10MB).
- La eliminación de archivos suele estar restringida a roles específicos (Administrador, Encargado de Planillas).
- Integración con módulos de:
    - Planillas (Sueldos, Aguinaldos)
    - Tesorería (Pagos)
    - Gestión Documental

## Ejemplo de Registro en la Tabla
```plaintext
ID: 996
Dirección administrativa: Servicio Departamental de Deportes (SEDEDE)
Periodo: 202501
Tipo planilla: eventual
Tipo archivo: biométrico
Estado: Cargado
Creado por: alexander guaji parada
Fecha: 12/02/2025 (hace 2 meses)
Acciones: [Icono Ver] [Icono Descargar] [Icono Editar] [Icono Eliminar]