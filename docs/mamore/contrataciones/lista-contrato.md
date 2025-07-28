---
sidebar_position: 1 # O ajusta según tu estructura
---

# Listado de Contratos

## Vista General
Este módulo presenta un listado detallado de los contratos gestionados por el Gobierno Autónomo Departamental del Beni, abarcando diferentes tipos como consultorías, personal eventual, etc. Permite visualizar, buscar y acceder a las acciones correspondientes a cada contrato.

## Controles de Visualización
-   **Mostrar registros**: Permite seleccionar cuántos contratos se muestran por página (ej. 10, 25, 50).
-   **Buscar...**: Campo de texto para filtrar dinámicamente los contratos por cualquier dato visible en la tabla (Código, Persona, Dirección, etc.).

## Estructura de la Tabla

| Campo                   | Descripción                                                                 | Tipo          | Ejemplo                                                                 |
| :---------------------- | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------------------------------------- |
| ID                      | Identificador único del registro del contrato                               | Numérico      | 12176                                                                   |
| Fotografía              | Imagen del contratado (si está disponible)                                  | Imagen        | (Vacío o miniatura)                                                     |
| Código                  | Código único asignado al contrato                                           | Texto         | "SDAF-37/2025"                                                          |
| Tipo                    | Modalidad de contratación                                                    | Texto         | "Consultoría de línea", "eventual"                                      |
| Persona                 | Datos del contratado (Nombre, CI, Teléfono)                                 | Texto (Multi) | "celia celia<br/>CI: 12345678*<br/>Telf: 75344723"                       |
| Dirección administrativa| Unidad organizacional a la que pertenece el contrato                        | Texto         | "Secretaria Departamental de Administracion y Finanzas"                 |
| Detalles                | Información clave del contrato (Cargo, Sueldo, Fechas, Duración, Total, Estado) | Texto (Multi) | "Cargo: Asesor Tecnico V<br/>Sueldo: Bs. 5.250,00<br/>Desde ... Estado: Concluido" |
| Registrado por          | Usuario que registró/modificó el contrato y fecha/hora/tiempo relativo      | Texto (Multi) | "Milton<br/>01/abr/2025 12:49<br/>hace 1 mes"                            |
| Acciones                | Operaciones disponibles sobre el contrato                                   | Iconos        | (Ver, Editar, Imprimir, Finalizar, etc.)                                |

## Tipos de Contratos Comunes
(Basado en la columna `Tipo`)
1.  **Consultoría de línea**: Contratación de profesionales para funciones específicas y continuas.
2.  **Eventual**: Contratación de personal por un periodo determinado para tareas específicas.

## Estados Comunes de Contratos
(Basado en la sección `Detalles` y el proceso de promoción)
-   **Elaborado**: Estado inicial del contrato recién creado en el sistema. Pendiente de revisión y envío.
-   **Enviado**: El contrato ha sido promovido desde "Elaborado" y enviado a la siguiente instancia para revisión o aprobación. Se registra una observación en este paso.
-   **Firmado**: El contrato ha sido promovido desde "Enviado", indicando que ha sido aprobado y formalizado por las partes. Se registra una observación en este paso.
-   **En Proceso/Vigente**: El contrato está actualmente activo y dentro de su periodo de ejecución (generalmente después de ser "Firmado").
-   **Concluido**: El periodo del contrato ha finalizado. En este estado, las acciones disponibles pueden ser limitadas, siendo "Crear adenda" una opción principal para extensiones o modificaciones post-finalización.
-   **Anulado/Rescindido**: El contrato ha sido cancelado antes de su finalización.

## Filtros Disponibles (Implícitos en Buscar)
La funcionalidad de **Buscar...** permite filtrar por:
-   ID
-   Código de contrato
-   Tipo de contrato
-   Nombre, CI o Teléfono de la Persona
-   Nombre de la Dirección administrativa
-   Cargo, Estado u otra palabra clave en Detalles
-   Nombre del usuario registrador

## Acciones Disponibles (Iconos Comunes)
1.  **Ver Detalle**: Mostrar la información completa del contrato, incluyendo adendas, informes, etc.
2.  **Editar**: Modificar la información del contrato (generalmente disponible en estado "Elaborado" o según permisos).
3.  **Imprimir**: Generar una versión imprimible de documentos asociados al contrato. Las opciones varían según el `Tipo` de contrato:
    *   **Si el Tipo es "Consultoría de línea":**
        *   Autorización
        *   Invitación
        *   Declaración
        *   Memorandum
        *   Informe
        *   Nota de adjudicación
        *   Contrato
    *   **Si el Tipo es "Eventual":**
        *   Contrato
        *   Contrato inamovible
        *   Memorandum
    *   **Si el Tipo es "Permanente":** 
        *   Contrato
        *   Contrato inamovible
        *   Memorandum
4.  **Promover**:
    *   Disponible cuando el contrato está en estado "Elaborado" o "Enviado".
    *   Al hacer clic, se abre un modal preguntando: "Desea promover el contrato a la siguiente instancia?".
    *   El modal incluye un campo para "Observaciones" que es registrado.
    *   Si se acepta:
        *   De "Elaborado" cambia a "Enviado".
        *   De "Enviado" cambia a "Firmado".
5.  **Exportar**: Generar reportes del listado filtrado en Excel o PDF.

    **Acciones Adicionales (usualmente bajo un menú "Más opciones" o similar, disponibles tras el estado "Firmado"):**
    *Nota: La disponibilidad de estas acciones puede variar según el estado actual del contrato. Por ejemplo, para contratos en estado "Concluido", la opción principal suele ser "Crear adenda".*
6.  **Rotar**:
    *   Permite registrar la rotación o reasignación de un contrato.
    *   Al seleccionar esta acción, se abre un modal titulado "Realizar rotación" con los siguientes campos:
        *   **Fecha de rotación**: Fecha en la que se efectúa la rotación (ej. 06/05/2025).
        *   **Solicitante**: Persona o unidad que solicita la rotación.
        *   **Destino**: Nueva unidad administrativa o dependencia a la que se rota el contrato.
        *   **Responsable**: Persona responsable de la gestión de la rotación.
        *   **Observaciones**: Campo para añadir notas o justificaciones sobre la rotación.
7.  **Ratificar**:
    *   Permite confirmar o validar la continuidad o condiciones de un contrato.
    *   Al seleccionar esta acción, se abre un modal preguntando: "Desea ratificar el siguiente contrato?" con los siguientes campos:
        *   **Fecha de ratificación**: Fecha en la que se efectúa la ratificación (ej. 06/05/2025).
        *   **Observaciones**: Campo para añadir notas, justificaciones o detalles de la ratificación.
8.  **Crear adenda**:
    *   Permite registrar modificaciones formales al contrato original, como extensiones de plazo, cambios en el alcance, o ajustes post-finalización.
    *   El contenido del modal "Crear adenda" puede variar según el contexto o estado del contrato.
    *   **Ejemplo de modal para adenda general (contrato activo/firmado):**
        *   Un texto informativo mostrando los detalles del contrato principal (ej. "Contrato principal desde 06 de mayo hasta el 13 de mayo de 2025, con una duración de 8 días.").
        *   **Inicio**: Fecha de inicio de la adenda (ej. 14/05/2025).
        *   **Fin**: Fecha de finalización de la adenda (ej. 21/05/2025).
        *   Un texto informativo mostrando la duración calculada de la adenda (ej. "8 días de duración").
        *   **Firma autorizada**: Selección de la persona que autoriza la adenda.
        *   **Fecha de suscripción de adenda**: Fecha en la que se firma la adenda (ej. 14/05/2025).
        *   Botones de acción como "Aceptar y guardar".
    *   **Ejemplo de modal para adenda (contrato en estado "Concluido"):**
        *   Título: "Crear adenda".
        *   Texto informativo: "Contrato principal desde 01 de septiembre hasta el 31 de diciembre de 2023, con una duración de 120 días."
        *   **Inicio**: Fecha de inicio de la nueva vigencia de la adenda (ej. 01/01/2024).
        *   **Fin**: Fecha de fin de la nueva vigencia de la adenda (formato dd/mm/aaaa).
        *   **Solicitante**: Persona o unidad que solicita la adenda.
        *   **NCI**: Número de Comunicación Interna que respalda la adenda.
        *   **Fecha de NCI**: Fecha del documento NCI (formato dd/mm/aaaa).
        *   **Certificación presupuestaria**: Código o referencia de la certificación presupuestaria.
        *   **Fecha de certificación presupuestaria**: Fecha de la certificación (formato dd/mm/aaaa).
        *   **Firma autorizada**: Selección de la persona que autoriza la adenda.
        *   **Fecha de suscripción de adenda**: Fecha en la que se firma la adenda (ej. 01/01/2024).
        *   Botones de acción como "Aceptar y guardar".
9.  **Resolución**:
    *   Permite registrar la finalización anticipada o modificación sustancial de un contrato mediante una resolución administrativa.
    *   Al seleccionar esta acción, se abre un modal titulado "Resolución de contrato" con los siguientes campos:
        *   **Fecha de resolución**: Fecha en la que se emite o aplica la resolución (ej. 13/05/2025).
        *   **Informe técnico**: Referencia o resumen del informe técnico que sustenta la resolución (ej. "SByA Nº 001/2023 D.B. y A..- RR.HH., de 16 de marzo de 2023 procede a la resolución de contrato emitido por...").
        *   **NCI**: Número de Comunicación Interna o documento similar relacionado (ej. "I-DRRHH/AAA-93/2023 de 03 de abril de 2023, emitida por...").
        *   **Informe legal**: Referencia o resumen del informe legal que respalda la resolución (ej. "Nº 001/2023 de 05 de abril de 2023, la Abog...").
        *   **Inciso mencionado**: Cláusula o inciso específico del contrato o normativa que se invoca para la resolución (ej. ". e) Inasistencia injustificada de tres (3) días hábiles consecutivos o seis (6) días hábiles discontinuos en un (1) mes").
10. **Agregar descuento adicional**:
    *   Permite aplicar descuentos específicos al monto total o a los pagos programados del contrato.
    *   Al seleccionar esta acción, se abre un modal titulado "Crear descuento adicional" con los siguientes campos:
        *   **Tipo de descuento**: Selección del método de descuento (ej. "Monto fijo", "Porcentaje").
        *   **Monto**: Valor numérico del descuento a aplicar.
        *   **Motivo**: Razón o justificación para el descuento.
        *   **Detalles adicionales**: Campo para observaciones o información complementaria sobre el descuento.
11. **Gestionar Adendas**: (Puede mantenerse si "Crear adenda" es un sub-tipo o si la funcionalidad es distinta, aunque "Crear adenda" parece ser la acción principal para esto).
12. **Finalizar/Concluir**: Marcar el contrato como terminado (si no es automático por fecha o si se requiere una acción explícita tras una resolución).
13. **Anular**: Cancelar el contrato (si el estado y permisos lo permiten, usualmente antes de la firma o inicio de vigencia).


## Consideraciones
-   La gestión de contratos debe seguir la normativa vigente (ej. NB-SABS).
-   Es crucial mantener la información actualizada, especialmente fechas y estados.
-   Integración con módulos de:
    *   Recursos Humanos (para personal)
    *   Finanzas/Presupuesto (para pagos y disponibilidad)
    *   Beneficiarios (para datos del contratado)
-   Se debe mantener una auditoría completa de la creación, modificación, y cambios de estado.

## Ejemplo de Registro en Tabla
```plaintext
ID: 12176
Fotografía: (Vacío)
Código: SDAF-37/2025
Tipo: Consultoría de línea
Persona: celia celia | CI: 12345678* | Telf: 75344723
Dirección administrativa: Secretaria Departamental de Administracion y Finanzas
Detalles: Cargo: Asesor Tecnico V | Sueldo: Bs. 5.250,00 | Desde 01/abr/2025 hasta 30/abr/2025 | Duración: 30 Días | Total: Bs. 5.250,00 | Estado: Concluido
Registrado por: Milton | 01/abr/2025 12:49 | hace 1 mes
Acciones: [Icono Ver] [Icono Imprimir] [Icono Historial]