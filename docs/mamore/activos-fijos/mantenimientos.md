---
sidebar_position: 1
---

# Crear Nuevo Mantenimiento

## Vista General
Formulario para registrar nuevos mantenimientos de activos en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Activo registrado**: Selección del activo a mantener
- **Estado de ingreso**: Condición del activo al momento de ingreso
- **Procedencia**: Origen del activo
- **Tipo de mantenimiento**:
  - Preventivo
  - Correctivo
  - Planificado

### Trabajo Realizado
- **Configuración**:
  - Carpeta compartidas
  - Impresoras compartidas
  - Impresoras en red
  - Acceso a internet
- **Impresoras**:
  - Limpieza de cabezales
  - Reseteo de contador
  - Ajuste de sensores
  - Ajustes de engranajes
  - Limpieza de rodillos
  - Ajuste de bomba de succión
- **Instalación**:
  - Instalación de Windows y paquetes
  - Reinstalar Office
  - Activación Windows
  - Activación de Office
  - Instalación/actualización de drivers
- **Limpieza**:
  - Limpieza completa de PC
  - Virus en memorias USB
- **Mantenimiento**:
  - Mantenimiento general de PC
  - Diagnóstico de la PC
  - Corrección de errores del disco duro
- **Otros**:
  - Asesoramiento en paquetes de ofimática
  - Backups de información
  - Conexión de data show para proyección
  - Instalación de portátil con cable HDMI al televisor
  - Otro (especificar)

### Información Adicional
- **Fecha de ingreso**: Fecha de inicio del mantenimiento (ej: 16/04/2025)
- **Fecha de salida**: Fecha de finalización del mantenimiento (ej: 16/04/2025)
- **Lugar de trabajo**: Ubicación donde se realiza el mantenimiento

## Proceso de Registro

1. **Seleccionar activo y estado de ingreso**
2. **Definir procedencia y tipo de mantenimiento**
3. **Seleccionar trabajo realizado**
4. **Especificar fechas de ingreso y salida**
5. **Indicar lugar de trabajo**
6. **Validar información**
7. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Activo registrado | Selección requerida | "Seleccione un activo" |
| Fecha de ingreso | ≤ fecha de salida | "Fecha de ingreso debe ser anterior a la fecha de salida" |

## Ejemplo de Registro
```plaintext
Activo registrado: CPU color negro marca Sure
Estado de ingreso: Regular
Procedencia: Unidad de sistemas
Tipo de mantenimiento: Correctivo
Trabajo realizado: Limpieza completa de PC, Instalación de Windows y paquetes
Fecha de ingreso: 16/04/2025
Fecha de salida: 16/04/2025
Lugar de trabajo: Oficina del funcionario
```

## Consideraciones
- Integración con módulos de:
  - Inventario
  - Contabilidad
  - Recursos Humanos
- Genera reporte automático de mantenimiento
- Auditoría completa de operaciones

# Listado de Mantenimientos

## Vista General
Módulo para gestionar los registros de mantenimiento de activos del Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| N° | Número consecutivo | Numérico | 1 |
| Código | Identificador del mantenimiento | Texto | "MT-0001" |
| Tipo | Clasificación del mantenimiento | Texto | "Preventivo", "Correctivo" |
| Activo | Nombre del activo mantenido | Texto | "CPU color negro marca Sure" |
| Ingreso | Fecha de inicio del mantenimiento | Fecha | "16/04/2025" |
| Salida | Fecha de finalización del mantenimiento | Fecha | "16/04/2025" |
| Detalles | Descripción del trabajo realizado | Texto | "Limpieza completa de PC, Instalación de Windows y paquetes" |

## Tipos de Mantenimiento

1. **Preventivo**: Acciones para evitar fallos futuros
2. **Correctivo**: Reparaciones de fallos existentes
3. **Planificado**: Mantenimiento programado regularmente

## Filtros Disponibles

### Básicos
- Por tipo de mantenimiento
- Por activo
- Por rango de fechas

### Avanzados
- Por código de mantenimiento
- Por detalles del trabajo realizado

## Acciones Disponibles

1. **Ver Detalle**: Información completa del mantenimiento
2. **Editar**: Modificar datos básicos
3. **Exportar**: Generar reporte en Excel/PDF

## Consideraciones
- Los mantenimientos deben ser registrados inmediatamente después de realizados
- Integración con módulos de:
  - Inventario
  - Contabilidad
  - Recursos Humanos
- Auditoría completa de operaciones
- Validez de documentos por 5 años

## Ejemplo de Registro Completo
```plaintext
N°: 1
Código: MT-0001
Tipo: Correctivo
Activo: CPU color negro marca Sure
Ingreso: 16/04/2025
Salida: 16/04/2025
Detalles: Limpieza completa de PC, Instalación de Windows y paquetes