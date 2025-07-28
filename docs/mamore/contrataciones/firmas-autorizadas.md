---
sidebar_position: 1
---

# Firmas Autorizadas

## Vista General
Módulo para gestionar las firmas autorizadas para procesos contractuales en el Gobierno Autónomo Departamental del Beni.

## Estructura de la Tabla

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id | Identificador único | Numérico | 139 |
| Dirección Administrativa | Unidad responsable | Texto | "Corregimiento Municipio de Trinidad" |
| Tipo | Tipo de autorización | Dropdown | "RPA", "Inmediato superior" |
| Nombre completo | Funcionario autorizado | Texto | "MILTON DANIEL HIPAMO CHOLIMA" |
| CI | Carnet de identidad | Texto | "10824260" |
| Cargo | Posición institucional | Texto | "RESPONSABLE CONTRATACION" |
| Tipo de designación | Instrumento legal | Texto | "Resolución Administrativa" |
| Decreto de designación | Número de documento | Texto | "04/2025" |
| Fecha de designación | Fecha de autorización | Date | "2025-04-01" |
| Estado | Situación actual | Dropdown | "Activo"/"Inactivo" |
| Creado | Fecha de registro | Timestamp | "2025-04-01 13:15:32" |

## Tipos de Autorización

1. **RPA (Responsable de Proceso de Adquisición)**
   - Autorizado para todo el proceso contractual
   - Designado por resolución administrativa

2. **Inmediato superior**
   - Autoridad jerárquica directa
   - Designado por decreto departamental

## Flujo de Trabajo

### Registro de Nueva Firma
1. **Datos del Funcionario**:
   - Nombre completo y CI
   - Cargo actual
   - Dirección administrativa

2. **Autorización**:
   - Tipo de firma autorizada
   - Documento de designación
   - Fecha de vigencia

3. **Validación**:
   - Verificación de documentos
   - Aprobación por área legal

4. **Registro**:
   - Generación automática de ID
   - Asignación de estado inicial


## Funcionalidades Adicionales
### Filtros Avanzados
- Por dirección administrativa
- Por tipo de autorización
- Por estado (Activo/Inactivo)
- Por rango de fechas
### Acciones Disponibles
- Activar/Desactivar : Cambiar estado de autorización
- Editar : Modificar datos de registro
- Documentos : Adjuntar copias digitalizadas
- Reportes : Generar listados oficiales
## Consideraciones
- Las firmas RPA requieren documentación completa
- Los cambios de estado generan notificaciones automáticas
- Integración con módulos de:
  - Contrataciones
  - Documentos
  - Seguridad
- Las firmas inactivas no pueden validar procesos


## Ejemplo de Registro
```plaintext
Id: 139
Dirección: Corregimiento Municipio de Trinidad
Tipo: RPA
Nombre: MILTON DANIEL HIPAMO CHOLIMA
CI: 10824260
Cargo: RESPONSABLE CONTRATACION
Designación: Resolución Administrativa de Gobernación 04/2025
Fecha: 2025-04-01
Estado: Activo
Registrado: 2025-04-01 13:15:32