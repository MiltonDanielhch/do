---
sidebar_position: 2
---

# Gestión de Datos Personales (Lista de Personas)

## Vista General

Este módulo centraliza el registro y la gestión de la información personal de los individuos relacionados con la institución, como funcionarios, contratistas o beneficiarios. Muestra un listado completo de las personas registradas y permite realizar diversas acciones sobre sus datos.

## Tablero Principal de Datos Personales

El tablero principal presenta un listado paginado de todas las personas registradas.

### Funcionalidades Clave del Tablero:

*   **Crear:** Botón para iniciar el registro de una nueva persona.
*   **Mostrar Registros:** Opciones para seleccionar la cantidad de registros a mostrar por página (`10`, `25`, `50`, `100`).
*   **(Implícito) Búsqueda:** Probablemente exista un campo para buscar registros.
*   **(Implícito) Paginación:** Controles para navegar entre las páginas de resultados.

### Estructura de la Tabla de Datos Personales:

La tabla principal muestra la siguiente información clave para cada persona:

| Columna           | Descripción                                                                                                | Formato/Ejemplo                                                              | Notas                                                                                                                               |
| :---------------- | :--------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| **ID**            | Identificador único de la persona en el sistema.                                                           | Numérico (`4009`)                                                            | Asignado automáticamente.                                                                                                           |
| **Nombre completo**| Nombre(s) y apellidos de la persona.                                                                       | Texto (`celia celia`)                                                        | Puede incluir información adicional debajo como Profesión (`estudiante`) o Estado (`Contrato en proceso`) dependiendo del registro. |
| **CI**            | Cédula de Identidad y posible extensión.                                                                   | Alfanumérico (`12345678*`, `12345678 BN`)                                     | Identificador oficial.                                                                                                              |
| **Lugar nac.**    | Lugar de nacimiento registrado.                                                                            | Texto (`SANTISIMA TRINIDAD`)                                                 | Basado en catálogo oficial.                                                                                                         |
| **Fecha nac.**    | Fecha de nacimiento de la persona.                                                                         | `DD/MM/AAAA` (`01/06/1998`) <br/> `(Edad)` (`27 años`)                       | La edad se calcula y muestra automáticamente.                                                                                       |
| **Telefono**      | Número de teléfono de contacto principal.                                                                  | Numérico (`12345678`)                                                        |                                                                                                                                     |
| **AFP**           | Información de la Administradora de Fondos de Pensiones.                                                   | Texto (`Gestora`) <br/> `(NUA/CUA)` (`0987654321`)                           | Muestra el tipo de AFP y el NUA/CUA asociado.                                                                                       |
| **Registrado**    | Información sobre quién y cuándo se realizó el registro.                                                   | Usuario (`Milton`) <br/> Fecha y Hora (`01/04/2025 12:26`) <br/> Tiempo relativo (`hace 1 mes`) | Auditoría básica del registro.                                                                                                      |
| **Acciones**      | Operaciones disponibles para cada registro.                                                                | Botones (`Más`, `Ver`, `Editar`, `Borrar`)                                   | Permite interactuar con los datos de la persona.                                                                                    |

## Filtros de Búsqueda (Potenciales)

Aunque no visibles directamente en el ejemplo, es común encontrar filtros como:

*   **Básicos**: ID, Nombre completo, CI, Teléfono.
*   **Avanzados**: NUA/CUA, Lugar de nacimiento, Estado, Rango de fechas de registro.

## Acciones Disponibles

### Botón "Más" (Acciones Adicionales)

Este botón despliega un menú con opciones avanzadas:

*   **Agregar documentación**: Permite adjuntar archivos relevantes al registro de la persona (ej. CI escaneado, NIT, certificados, títulos). Al seleccionar esta opción, se abre un modal con los siguientes campos:
    *   **Título:** (Texto) Descripción breve del documento que se va a adjuntar. (Ej: "Cédula de Identidad Anverso", "Certificado de Nacimiento"). *Validación: Requerido.*
    *   **Archivo:** (Carga de archivo) Botón para seleccionar el archivo desde el dispositivo. Muestra "No se ha seleccionado ningún archivo" por defecto. *Validación: Requerido, verificar tipos de archivo permitidos (PDF, JPG, PNG) y tamaño máximo.*
    *   **Observaciones:** (Texto, opcional) Campo para añadir notas o comentarios adicionales sobre el documento adjunto.
*   **Rotación**: Permite registrar cambios de dependencia, unidad o área de trabajo de la persona. Al seleccionar esta opción, se abre un modal ("Realizar rotación") con los siguientes campos:
    *   **Fecha de rotación:** (Selector de Fecha) Fecha en la que se hace efectiva la rotación. (Ej: `02/05/2025`). *Validación: Requerido.*
    *   **Solicitante:** (Texto/Selección) Persona o unidad que solicita la rotación. *Validación: Requerido.*
    *   **Destino:** (Texto/Selección) Nueva dependencia, unidad o área a la que se traslada la persona. *Validación: Requerido.*
    *   **Responsable:** (Texto/Selección) Persona responsable de aprobar o gestionar la rotación. *Validación: Requerido.*
    *   **Observaciones:** (Texto, opcional) Notas o justificación de la rotación.
*   **Inamovilidad**: Permite registrar un período de inamovilidad laboral para la persona debido a condiciones especiales (ej. embarazo, discapacidad, dirigente sindical). Al seleccionar esta opción, se abre un modal ("Registrar inamovilidad") con los siguientes campos:
    *   **Destino:** (Texto/Selección) Puede referirse a la dependencia o cargo donde aplica la inamovilidad. *Validación: Requerido.*
    *   **Inicio de inamovilidad:** (Selector de Fecha) Fecha en la que comienza el período de inamovilidad. (Ej: `02/05/2025`). *Validación: Requerido.*
    *   **Fin de inamovilidad:** (Selector de Fecha) Fecha en la que finaliza el período de inamovilidad. *Formato: `dd/mm/aaaa`. Validación: Requerido, debe ser posterior a la fecha de inicio.*
    *   **Observaciones:** (Texto, opcional) Detalles o base legal de la inamovilidad.
*   **Opciones AFP**: Permite configurar si la persona realiza aportes a la AFP y si es jubilado. Al seleccionar esta opción, se abre un modal ("Opciones de AFP") con los siguientes campos:
    *   **Aporte a la AFP:** (Radio Button Sí/No) Indica si la persona está realizando aportes activos a la AFP. *Validación: Requerido.*
    *   **Jubilado:** (Radio Button Sí/No) Indica si la persona tiene condición de jubilado. *Validación: Requerido.*
    *   *Acciones del modal:* Botones "Cancelar" y "Guardar".
*  **Marcaciones**: Permite registrar las marcas de tiempo asociadas a la persona. Al seleccionar esta opción, se abre un modal ("Registrar marcación") con los siguientes campos:
    *   **Fecha de marcación:** (Selector de Fecha) Fecha en la que se realiza la marcación. (Ej: `02/05/2025`). *Validación: Requerido.*    
*   **Generar QR**: Genera un código QR único asociado a la persona (ej. para `celia cortez`). Este QR puede ser utilizado para credenciales digitales o físicas, permitiendo una verificación rápida de la identidad o acceso a información relevante del individuo. *Nota: La funcionalidad exacta puede variar (ej. mostrar datos, validar acceso).*

### Acciones Directas

*   **Ver**: Consultar el registro completo y detallado de la persona.
*   **Editar**: Modificar los datos personales existentes.
*   **Borrar**: Eliminar el registro de la persona (usualmente con validaciones previas para evitar pérdida de datos si está asociada a contratos u otros registros).

## Consideraciones Importantes

1.  El **Estado** contractual ("Con contrato", "En proceso", etc.) puede mostrarse dinámicamente bajo el nombre según los contratos activos de la persona.
2.  La **Edad** se calcula automáticamente a partir de la fecha de nacimiento.
3.  La acción **Borrar** debe implementar validaciones para prevenir la eliminación de personas con historial relevante (contratos, trámites, etc.).
4.  Los **Filtros** (si existen) deberían permitir búsquedas exactas o parciales para facilitar la localización de registros.

## Ejemplo de Registro (Formato Tabla)

```plaintext
ID: 4008
Nombre completo: ANA KARINA LEIGUE AVILA
(Profesión): PSICOPEDAGOGIA
(Estado): Contrato en proceso
CI: 4172732 BN
Lugar nac.: SANTISIMA TRINIDAD
Fecha nac.: 31/10/1981 (43 años)
Telefono: 60846997
AFP: Gestora (NUA/CUA: 35400547)
Registrado: Priscila Hisita Vallejos - 13/02/2025 10:42 (hace 2 meses)
Acciones: Más, Ver, Editar, Borrar
```