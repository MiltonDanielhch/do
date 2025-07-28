---
sidebar_position: 1
---

# Gestión de Personas Externas

## Vista General

Este módulo centraliza el registro y la administración de información sobre personas que, sin ser necesariamente funcionarios de planilla, interactúan formalmente con el Gobierno Autónomo Departamental del Beni. Esto incluye directores de unidades desconcentradas, beneficiarios de pagos, contactos clave externos, representantes legales, entre otros. El objetivo es mantener un directorio actualizado y fiable de estos contactos.

## Tablero Principal de Personas Externas

El tablero principal muestra un listado paginado de todas las personas externas registradas en el sistema.

### Funcionalidades Clave del Tablero:

*   **Añadir Nueva Persona:** Botón o enlace (Ej: "Añadir", "Registrar") para abrir el formulario de registro de una nueva persona externa (ver sección [Registrar/Editar Persona Externa](#registrareditar-persona-externa)).
*   **Búsqueda:** Campo para filtrar la lista por C.I., Nombre (Funcionario) o Cargo.
*   **Paginación:** Controles para navegar entre las páginas de resultados.
*   **Selección de Registros por Página:** Opción para definir cuántos registros mostrar (Ej: 10, 25, 50).

### Estructura de la Tabla de Personas Externas:

La tabla presenta la siguiente información clave para cada persona registrada:

| Columna       | Descripción                                                                 | Tipo         | Ejemplo (Registro 44)                                        | Notas                                                               |
| :------------ | :-------------------------------------------------------------------------- | :----------- | :----------------------------------------------------------- | :------------------------------------------------------------------ |
| **Id°**       | Identificador único del registro en el sistema.                             | Numérico     | `44`                                                         | Secuencial, asignado automáticamente.                               |
| **C.I.**      | Cédula de Identidad de la persona.                                          | Alfanumérico | `7603184`                                                    | Identificador principal de la persona.                              |
| **Funcionario**| Nombre completo de la persona externa registrada.                           | Texto        | `VICTOR HUGO RIOS PEREIRA`                                   | Nombre de la persona.                                               |
| **Cargo**     | Cargo o rol que desempeña la persona en relación con la institución.        | Texto        | `DIRECTOR DEL SERVICIO REGIONAL DE SALUD AMAZONICO (SEREAS)` | Describe su función o posición relevante.                           |
| **Estado**    | Condición actual del registro (`Activo` o `Inactivo`).                      | Texto        | `Activo`                                                     | Indica si el registro está vigente.                                 |
| **Acciones**  | Botones o iconos para operaciones específicas sobre el registro.            | (Botones)    | (Varía)                                                      | Generalmente incluye "Editar", "Ver Detalles", "Cambiar Estado". |

## Registrar/Editar Persona Externa (Formulario Modal) {#registrareditar-persona-externa}

Al hacer clic en "Añadir" o "Editar" en el tablero principal, se despliega un formulario (generalmente en una ventana modal) para ingresar o modificar los datos de una persona externa.

### Campos del Formulario:

*   **Persona:** (Búsqueda/Selección) Campo para buscar y seleccionar la persona por C.I. o Nombre.
    *   *Nota:* Si la persona no existe en la base de datos general, podría requerir un registro previo o permitir la creación básica desde aquí.
    *   *Validación:* Selección requerida. Mensaje: "Debe seleccionar una persona".
*   **Direccion:** (Desplegable/Selección) Permite seleccionar la Dirección Administrativa o área principal a la que se asocia la persona.
    *   *Ejemplo:* "Secretaría General", "Dirección Departamental de Salud".
    *   *Validación:* Selección requerida. Mensaje: "Debe seleccionar una Dirección".
*   **Unidad:** (Desplegable/Selección) Permite seleccionar la Unidad Funcional específica, dependiente de la Dirección elegida.
    *   *Ejemplo:* "Unidad de Archivo Central", "Servicio Regional de Salud Amazónico (SEREAS)".
    *   *Validación:* Selección requerida. Mensaje: "Debe seleccionar una Unidad".
*   **Cargo:** (Campo de texto) Descripción del cargo o rol específico que la persona desempeña en relación con la Dirección/Unidad seleccionada.
    *   *Ejemplo:* "Director(a)", "Representante Legal", "Contacto Principal".
    *   *Validación:* Campo requerido. Mensaje: "Debe ingresar un Cargo".
*   **Observación:** (Campo de texto, opcional) Espacio para añadir notas o aclaraciones relevantes sobre el registro.

### Proceso de Registro/Edición:

1.  **Buscar y seleccionar** la `Persona` (o registrarla si es nueva y el sistema lo permite).
2.  **Seleccionar** la `Direccion` administrativa.
3.  **Seleccionar** la `Unidad` funcional.
4.  **Ingresar o modificar** el `Cargo`.
5.  **(Opcional)** Añadir o editar la `Observación`.
6.  **Confirmar** (Guardar) los cambios. El registro aparecerá o se actualizará en el tablero principal.

## Ejemplo de Registro Completo

```plaintext
Id°: 44
C.I.: 7603184
Funcionario: VICTOR HUGO RIOS PEREIRA
Cargo: DIRECTOR DEL SERVICIO REGIONAL DE SALUD AMAZONICO (SEREAS)
Estado: Activo
(Asociado a Dirección: Dirección Departamental de Salud, Unidad: SEREAS)
```

## Consideraciones
- Este módulo sirve como un directorio centralizado para personas relevantes que no son parte de la planilla principal pero interactúan con la institución.
- Es útil para identificar a directores de hospitales, servicios desconcentrados, o incluso proveedores o beneficiarios recurrentes.
- El campo "Cargo" puede ser descriptivo del rol que cumple la persona en relación con la Gobernación.
- Mantener el estado ("Activo"/"Inactivo") actualizado es importante.
- Integración con módulos de:
  - Tesorería (para identificar beneficiarios de pagos).
  - Correspondencia (SISCOR) (para identificar remitentes/destinatarios externos o de unidades específicas).
  - Contrataciones.
- Auditoría completa de operaciones.


# Registrar Nueva Persona Externa (Modal)

## Vista General
Este modal se utiliza para añadir el registro de una nueva persona externa al sistema. Permite asociar a una persona (previamente registrada o nueva) con una estructura administrativa específica (Dirección, Unidad) y un cargo determinado.

## Campos del Formulario (Modal)

-   **Persona**: (Búsqueda/Selección) Campo para buscar y seleccionar la persona a registrar. Es probable que se base en el C.I. o Nombre. Si la persona no existe, podría enlazar a un formulario de creación de persona básica.
    -   *Acción*: Buscar por C.I. o Nombre, seleccionar de los resultados.
-   **Direccion**: (Dropdown/Selección) Selección de la Dirección Administrativa o área principal a la que se asocia la persona externa.
    -   Ejemplo: "Secretaría General", "Dirección de Salud", "Dirección de Obras Públicas".
-   **Unidad**: (Dropdown/Selección, dependiente de Dirección) Selección de la Unidad Funcional específica dentro de la Dirección seleccionada.
    -   Ejemplo: "Unidad de Archivo Central" (dentro de Secretaría General), "Hospital Materno Infantil" (dentro de Dirección de Salud).
-   **Cargo**: (Campo de texto) El cargo o rol específico que desempeña esta persona en relación con la unidad/dirección seleccionada.
    -   Ejemplo: "Director(a)", "Contacto Principal", "Representante Legal".
-   **Observación**: (Campo de texto, opcional) Notas adicionales o aclaraciones sobre el registro de esta persona externa.

## Proceso de Registro

1.  **Buscar y seleccionar** la Persona.
2.  **Seleccionar la Dirección** administrativa correspondiente.
3.  **Seleccionar la Unidad** funcional dentro de la Dirección.
4.  **Ingresar el Cargo** específico.
5.  **Añadir Observaciones** si es necesario.
6.  **Confirmar** para guardar el registro de la persona externa.

## Validaciones
| Campo | Validación | Mensaje Error (Ejemplo) |
|---|---|---|
| Persona | Selección requerida | "Debe seleccionar una persona" |
| Direccion | Selección requerida | "Debe seleccionar una Dirección" |
| Unidad | Selección requerida | "Debe seleccionar una Unidad" |
| Cargo | Campo requerido | "Debe ingresar un Cargo" |

## Ejemplo de Registro
```plaintext
Persona: VICTOR HUGO RIOS PEREIRA (CI: 7603184)
Direccion: Dirección de Salud
Unidad: Servicio Regional de Salud Amazónico (SERES)
Cargo: DIRECTOR DEL SERVICIO REGIONAL DE SALUD AMAZONICO (SEREAS)
Observación: Contacto principal para temas de salud en la región amazónica.
```
## Consideraciones
- Este registro vincula a una persona con una estructura organizacional y un rol específico.
- Es fundamental para identificar correctamente a los responsables o contactos en diferentes unidades o entidades relacionadas.
- La persona registrada aparecerá luego en la lista principal de `lista-personas-externas.md` .
- Asegura que la información de contacto y roles esté actualizada y centralizada.