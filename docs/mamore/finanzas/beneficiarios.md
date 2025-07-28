---
sidebar_position: 2
---

# Gestión de Beneficiarios

## Vista General
Módulo para administrar la base de datos de beneficiarios (funcionarios, proveedores, consultores, etc.) registrados en el sistema del Gobierno Autónomo Departamental del Beni. Permite buscar, visualizar y gestionar la información de los beneficiarios.

## Controles de Visualización
-   **Filtro de Búsqueda**: Un menú desplegable (ej. "contiene") junto a un campo de texto **Buscar** que permite filtrar los registros de la tabla dinámicamente por cualquier columna visible.

## Estructura de la Tabla

| Campo            | Descripción                                       | Tipo      | Ejemplo                                      |
| :--------------- | :------------------------------------------------ | :-------- | :------------------------------------------- |
| Id               | Identificador único del beneficiario              | Numérico  | 1628                                         |
| Tipo             | Clasificación del beneficiario                    | Texto     | "Funcionario", "Proveedor"                   |
| Persona          | Nombre completo y/o CI/NIT del beneficiario       | Texto     | "7587804 OMAR MILTON MONTAÑO PINTO"          |
| Razón social     | Nombre legal (si aplica, ej. para proveedores)    | Texto     | -                                            |
| CI/NIT           | Documento de identidad (puede ser redundante)     | Texto     | "7587804"                                    |
| Telefono/Celular | Número de contacto principal                      | Texto     | "69407779"                                   |
| Location         | Ubicación o dirección (si aplica)                 | Texto     | -                                            |
| Creado           | Fecha y hora de registro, con indicación relativa | Timestamp | "2025-02-13 17:31:38 / hace 2 meses"         |
| Acciones         | Operaciones disponibles sobre el registro         | Iconos    | (Ver Detalle, Editar, Eliminar, Historial)   |

## Tipos de Beneficiarios Comunes
1.  **Funcionario**: Personal activo o pasivo de la institución.
2.  **Proveedor**: Empresas o personas naturales que proveen bienes o servicios.
3.  **Consultor**: Profesionales contratados para servicios específicos.
4.  **Beneficiario**: Otros receptores de pagos o servicios (ej. subsidios).

## Filtros Disponibles
-   La combinación del desplegable (ej. "contiene", "empieza con", "igual a") y el campo **Buscar** permite filtrar por `Id`, `Tipo`, `Persona`, `Razón social`, `CI/NIT`, `Telefono/Celular`, etc.

## Acciones Disponibles (Iconos Comunes)
1.  **Ver Detalle**: Mostrar la información completa del beneficiario.
2.  **Editar**: Abrir el formulario para modificar los datos del beneficiario.
3.  **Eliminar**: Dar de baja lógica al beneficiario (si no tiene transacciones asociadas).
4.  **Exportar**: Generar un reporte del listado (filtrado) en Excel o PDF.
5.  **Historial**: Ver cambios o transacciones asociadas al beneficiario.

## Consideraciones
-   Es crucial mantener la información de los beneficiarios actualizada y validada.
-   Integración con módulos de:
    *   Contrataciones (SICOES)
    *   Planillas (RRHH)
    *   Tesorería (Pagos, Cheques)
    *   Contabilidad (SIGEP/SIGMA)
-   Se debe mantener una auditoría completa de las altas, bajas y modificaciones.
-   Verificar la validez y vigencia de documentos como CI/NIT.

## Ejemplo de Registro en Tabla
```plaintext
Id: 1628
Tipo: Funcionario
Persona: 7587804 OMAR MILTON MONTAÑO PINTO
Razón social: -
CI/NIT: 7587804
Telefono/Celular: 69407779
Location: -
Creado: 2025-02-13 17:31:38 / hace 2 meses
Acciones: [Icono Editar] [Icono Ver Detalle]
```

# Registrar Nuevo Beneficiario

## Vista General
Formulario para agregar nuevos beneficiarios al sistema del Gobierno Autónomo Departamental del Beni.

## Campos Obligatorios

### Información Básica
- **Tipo**: 
  - Funcionario
  - Proveedor
  - Consultor
  - Beneficiario
- **Nombre completo**: Nombre y apellidos
- **CI/NIT**: Documento de identidad
- **N° de cuenta**: Cuenta bancaria (opcional)

### Datos de Contacto
- **Celular**: Número de contacto
- **Email**: Correo electrónico (opcional)
- **Dirección**: Ubicación física

## Proceso de Registro

1. **Seleccionar tipo de beneficiario**
2. **Ingresar datos personales**:
   - Nombre completo
   - Documento de identidad
3. **Completar información de contacto**:
   - Teléfono celular
   - Dirección
4. **Agregar datos bancarios (opcional)**
5. **Validar información**
6. **Confirmar registro**

## Validaciones
| Campo | Validación | Mensaje Error |
|-------|-----------|--------------|
| Nombre | Mín. 5 caracteres | "Nombre muy corto" |
| CI/NIT | Formato válido | "Documento inválido" |
| Celular | 8 dígitos | "Teléfono incorrecto" |
| Email | Formato válido | "Email inválido" |

## Ejemplo de Registro
```plaintext
Tipo: Funcionario
Nombre: OMAR MILTON MONTAÑO PINTO
CI: 7587804
Cuenta: 1234567890
Celular: 69407779
Email: omar.montano@example.com
Dirección: Av. Ejército #123, Trinidad
```
## Consideraciones
- Los datos se integran con:
  - Módulo de Planillas
  - Sistema de Contrataciones
  - Base de Proveedores
- Genera código único automático
- Auditoría completa de operaciones
- Validez de documentos verificada