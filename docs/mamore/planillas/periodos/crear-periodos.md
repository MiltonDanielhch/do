---
sidebar_position: 1
---

# Crear Nuevo Periodo de Pago

## Vista General
Formulario para la configuración y registro de nuevos periodos de pago (mensuales o especiales) dentro del sistema de planillas del Gobierno Autónomo Departamental del Beni.

## Campos del Formulario

-   **Nombre**: Identificador único del periodo. Se requiere el formato `AAAAMM` (Año con 4 dígitos y Mes con 2 dígitos).
    *   Ejemplo: `202501` para Enero 2025.
    (Campo de texto obligatorio)
-   **Tipo DA (Dirección Administrativa)**: Selección del ámbito o conjunto de unidades organizacionales a las que aplicará este periodo. Permite seleccionar una o varias opciones.
    *   Opciones disponibles:
        *   Secretarías
        *   Secretarías Desconcentradas
        *   Sub Gobernaciones
        *   Corregimientos
        *   Servicios Desconcentrados
        *   Todas (selecciona todas las anteriores)
    (Grupo de checkboxes o selector múltiple obligatorio)
-   **Observaciones**: Campo opcional para añadir notas o comentarios relevantes sobre el propósito o características especiales del periodo.
    (Área de texto opcional)
-   **Creado por**: Muestra el nombre del usuario actualmente logueado que está creando el periodo.
    (Campo informativo, no editable, se llena automáticamente)
-   **Estado**: Define el estado inicial del periodo al ser creado.
    *   Opciones: "Activo", "Inactivo".
    (Selector desplegable o radio buttons obligatorios)

## Proceso de Creación

1.  Ingresar el **Nombre** del periodo siguiendo el formato `AAAAMM`.
2.  Seleccionar uno o varios **Tipo DA** a los que aplicará el periodo.
3.  (Opcional) Añadir **Observaciones** si es necesario.
4.  Verificar el usuario en **Creado por**.
5.  Seleccionar el **Estado** inicial ("Activo" o "Inactivo").
6.  Confirmar la creación del periodo (mediante un botón como "Guardar", "Crear" o "Aceptar").

## Validaciones

| Campo   | Validación                                      | Mensaje de Error Típico              |
| :------ | :---------------------------------------------- | :----------------------------------- |
| Nombre  | Requerido y formato `AAAAMM` válido             | "Formato de nombre inválido (AAAAMM)" |
| Nombre  | Único (no debe existir otro periodo con el mismo nombre) | "El periodo ya existe"               |
| Tipo DA | Al menos una opción debe ser seleccionada       | "Debe seleccionar al menos un Tipo DA" |
| Estado  | Selección requerida                             | "Debe seleccionar un estado"         |

## Consideraciones
-   La creación manual se usa típicamente para periodos especiales (aguinaldos, bonos) o ajustes. Los periodos mensuales regulares pueden generarse automáticamente.
-   Un periodo "Activo" permite el procesamiento de planillas. Solo un periodo debería estar activo simultáneamente para un mismo Tipo DA.
-   El usuario que crea el periodo queda registrado para fines de auditoría.

## Ejemplo de Datos para Creación
```plaintext
Nombre: 202502
Tipo DA: [Seleccionado: Secretarías, Secretarías Desconcentradas]
Observaciones: Periodo regular mes de Febrero 2025.
Creado por: Administrador (Automático)
Estado: Activo