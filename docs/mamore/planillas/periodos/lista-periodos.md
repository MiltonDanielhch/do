---
sidebar_position: 2
---

# Listado de Periodos de Pago

## Vista General
Este módulo permite administrar los periodos fiscales (mensuales o especiales) utilizados para el cálculo y procesamiento de las planillas de pago en el Gobierno Autónomo Departamental del Beni. La interfaz muestra una tabla con los periodos configurados, junto con controles para la visualización y búsqueda.

## Controles de Visualización
-   **Mostrar entradas**: Permite seleccionar el número de registros a mostrar por página (ej. 10, 25, 50).
-   **Buscar**: Campo de texto para filtrar dinámicamente los periodos mostrados en la tabla según cualquier columna visible.

## Estructura de la Tabla

| Campo         | Descripción                                       | Tipo          | Ejemplo                                       |
| :------------ | :------------------------------------------------ | :------------ | :-------------------------------------------- |
| Id            | Identificador único del periodo                   | Numérico      | 37                                            |
| Nombre        | Identificador del periodo, usualmente en formato AAAAMM | Texto         | "202501"                                      |
| Tipo DA       | Ámbito de aplicación (Direcciones Administrativas) | Texto         | "Secretarías, Secretarías Desconcentradas..." |
| Observaciones | Notas o comentarios adicionales sobre el periodo  | Texto         | (Vacío o texto descriptivo)                   |
| Creado por    | Usuario que registró el periodo                   | Texto         | "Administrador"                               |
| Estado        | Situación actual del periodo                      | Texto/Badge   | "Activo", "Inactivo", "Cerrado"               |
| Creado        | Fecha y hora de registro, con indicación relativa | Timestamp/Texto | "2025-01-28 10:24:53 (hace 3 meses)"          |
| Acciones      | Operaciones disponibles sobre el periodo          | Iconos        | (Ver, Editar, Activar/Desactivar, Cerrar)     |

## Tipos de Periodos

1.  **Mensuales**: Creados generalmente de forma automática para cada mes calendario.
2.  **Especiales**: Definidos manualmente para pagos extraordinarios (ej. aguinaldos, bonos).
3.  **Ajustes**: Utilizados para realizar correcciones o pagos retroactivos.

## Filtros Disponibles (Implícitos en Buscar)

La funcionalidad de **Buscar** permite filtrar por:
-   Nombre del periodo (año/mes)
-   Tipo de Dirección Administrativa (parcial o total)
-   Estado
-   Usuario creador
-   Fechas (si se busca por el texto de la fecha)

## Acciones Disponibles (Iconos Comunes)

1.  **Ver Detalle**: Mostrar información completa del periodo sin permitir edición.
2.  **Editar**: Modificar parámetros del periodo (como observaciones o ámbito, si está permitido).
3.  **Activar/Desactivar**: Cambiar el estado entre "Activo" e "Inactivo". Solo un periodo puede estar activo a la vez para un mismo ámbito.
4.  **Cerrar Periodo**: Marcar el periodo como finalizado, impidiendo futuras modificaciones o procesamientos de planillas en él (acción usualmente irreversible).

## Consideraciones
-   La creación de periodos mensuales puede estar automatizada (ej. crearse el día 25 del mes anterior).
-   Generalmente, solo un periodo puede estar "Activo" simultáneamente para un conjunto específico de Direcciones Administrativas.
-   El cierre de un periodo es una acción crítica que finaliza el ciclo de pago para ese mes/evento.
-   Integración con módulos de:
    *   Cálculo de Planillas
    *   Tesorería (Generación de pagos)
    *   Contabilidad (Asientos contables)
-   Los periodos que ya han tenido planillas procesadas o están cerrados no suelen poder eliminarse.

## Ejemplo de Registro en Tabla
```plaintext
Id: 37
Nombre: 202501
Tipo DA: Secretarías, Secretarías Desconcentradas, Servicios Desconcentrados, Todas
Observaciones: (Vacío)
Creado por: Administrador
Estado: Activo
Creado: 2025-01-28 10:24:53 (hace 3 meses)
Acciones: [Icono Ver] [Icono Editar] [Icono Desactivar] [Icono Cerrar]