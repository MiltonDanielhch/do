---
sidebar_position: 3
---

# Gestión de Cargos Adicionales

## Vista General
Módulo para registrar y administrar cargos o responsabilidades adicionales asignadas a funcionarios o personas dentro del Gobierno Autónomo Departamental del Beni. Esto puede incluir designaciones temporales (a.i.), responsabilidades específicas de proyectos, o roles en comités, distintos a su cargo principal.

## Estructura de la Tabla de Cargos Adicionales

La tabla principal muestra un resumen de los cargos adicionales registrados:

| Campo | Descripción | Tipo | Ejemplo |
|-------|-------------|------|---------|
| Id° | Identificador único del registro del cargo adicional | Numérico | 18, 19 |
| Funcionario | Nombre completo de la persona a quien se asigna el cargo adicional | Texto | "MARCOS MACHICADO ZURITA", "ERICK ALEJANDRO SUAREZ MENDOZA" |
| Cargo | Descripción del cargo o responsabilidad adicional asignada | Texto | "DIRECTOR TÉCNICO DEL SEDES BENI", "DIRECTOR DE DESARROLLO DE OBRAS Y SANEAMIENTOS BASICOS ai." |
| Estado | Condición actual de la asignación del cargo adicional | Texto | "Activo", "Inactivo" |
| Acciones | Botones o iconos para realizar operaciones sobre el registro | (Varía) | Ver, Editar, Cambiar Estado |

## Funcionalidades Principales

-   **Registro de Nuevo Cargo Adicional**: (Implícito) Probablemente existe un botón o enlace para añadir una nueva asignación de cargo.
-   **Búsqueda**: Permite buscar asignaciones por Funcionario o Cargo.
-   **Paginación**: Navegación entre las páginas de registros.
-   **Filtrado por Estado**: Visualizar solo cargos activos o inactivos.

## Acciones Comunes (Disponibles por registro)

-   **Ver Detalle**: Acceder a la vista completa de la información de la asignación.
-   **Editar**: Modificar los datos registrados (funcionario, cargo, estado).
-   **Activar/Desactivar**: Cambiar el estado de la asignación del cargo adicional.

## Ejemplo de Registro Completo

```plaintext
Id°: 18
Funcionario: MARCOS MACHICADO ZURITA
Cargo: DIRECTOR TÉCNICO DEL SEDES BENI
Estado: Activo
```
## Consideraciones
- Este módulo ayuda a formalizar y rastrear responsabilidades que van más allá del cargo principal de una persona.
- Es útil para identificar quién ocupa roles específicos en proyectos, comités o direcciones de forma interina (a.i.).
- Mantener el estado ("Activo"/"Inactivo") actualizado es importante para reflejar la situación real.
- Podría vincularse al registro de la persona en el módulo de Recursos Humanos o Personas Externas.
- Integración con módulos de:
  - Recursos Humanos (para asociar al funcionario).
  - Correspondencia (SISCOR) (para identificar roles específicos en derivaciones).
  - Gestión de Proyectos.
- Auditoría completa de operaciones.
