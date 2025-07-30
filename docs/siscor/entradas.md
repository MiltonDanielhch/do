---
sidebar_position: 2
---

# Registro de Entradas de Correspondencia (SISCOR)

## Vista General
Este módulo es el punto central para registrar toda la correspondencia, tanto externa como interna (Notas de Comunicación Interna - NCI), que ingresa o se genera en el Gobierno Autónomo Departamental del Beni. Aquí se crea el registro inicial, se asigna una Hoja de Ruta (HR) y se visualiza el estado general de los trámites iniciados.

## Tablero Principal de Entradas

El tablero principal muestra un listado paginado de toda la correspondencia registrada, permitiendo una visión rápida del flujo de documentos.

### Funcionalidades Clave del Tablero:

*   **Crear Nueva Correspondencia:** Botón `Crear` para acceder al formulario de registro de nueva correspondencia externa o NCI. (Ver sección [Formulario Añadir Correspondencia/NCI](#formulario-añadir-correspondencianci)).
*   **Visualización y Paginación:**
    *   Opciones para seleccionar la cantidad de registros a mostrar por página (`10`, `25`, `50`, `100`).
    *   Navegación entre páginas si el total de registros excede el límite por página.
*   **Búsqueda:** (Asumido) Campo para buscar registros por ID, Cite, Remitente, Destinatario, Referencia, etc.

### Estructura de la Tabla de Entradas:

La tabla principal presenta la siguiente información para cada registro de correspondencia:

| Columna             | Descripción                                                                    | Tipo          | Ejemplo (Registro 100442)                               | Notas                                                              |
| :------------------ | :----------------------------------------------------------------------------- | :------------ | :------------------------------------------------------ | :----------------------------------------------------------------- |
| **ID**              | Identificador único del registro en el sistema SISCOR.                         | Numérico      | `100442`                                                | Secuencial, asignado automáticamente.                              |
| **Fecha de registro**| Fecha y hora exactas en que se creó el registro. También muestra tiempo relativo. | Timestamp     | `30/04/2025 16:56:20` <br/> `hace 6 horas`              | Indica cuándo ingresó al sistema. El tiempo relativo es dinámico. |
| **Nro. de cite**    | Número de referencia o cite único del documento original.                      | Alfanumérico  | `DDAI-114/2025`                                         | Clave para identificar el documento físico o digital original.     |
| **Origen**          | Indica si la correspondencia es generada dentro (`Interna`) o fuera (`Externa`). | Texto         | `Interna`                                               | Define el flujo inicial.                                           |
| **Remitente**       | Nombre de la persona, unidad (interna) o entidad (externa) que envía.          | Texto         | `GUSTAVO PEREZ`                               | Quién origina la comunicación.                                     |
| **Destinatario**    | Nombre de la persona o unidad interna a la que se dirige inicialmente.         | Texto         | `CLAUDIA VACA`                                        | Primer receptor dentro de la institución.                          |
| **Referencia**      | Asunto o tema principal de la correspondencia.                                 | Texto Largo   | `SOLICITUD DE DOCUMENTACIÓN E INFORMACION`              | Describe brevemente el contenido.                                  |
| **Estado**          | Estado actual del trámite dentro del flujo de correspondencia.                 | Texto         | `Pendiente`                                             | Indica si está esperando acción, derivado, finalizado, etc.        |
| **Acciones**        | Botones o iconos para realizar operaciones sobre el registro específico.       | (Botones)     | `Cambiar fecha`, `Ver`, `Editar`, `Anular`              | Las acciones disponibles pueden variar según el estado y permisos. |

## Acciones Comunes Disponibles por Registro

*   **Cambiar fecha:** (ajustar la fecha de recepción real si difiere del registro). Requiere clarificación sobre su función exacta.
*   **Ver:** Acceder a la vista detallada de la Hoja de Ruta, incluyendo historial de derivaciones, proveídos y documentos adjuntos.
*   **Editar:** Modificar datos del registro inicial. Esta acción suele estar restringida una vez que el trámite ha sido derivado.
*   **Anular:** Cancelar un registro de correspondencia si fue creado por error o ya no procede. Requiere permisos especiales y generalmente una justificación.
*   **Derivar:** (No visible en el ejemplo, pero fundamental) Acción para enviar la correspondencia al destinatario o a la siguiente etapa del flujo.

## Ejemplo Detallado de Registros

**Registro 1 (Interna):**
```plaintext
ID: 100442
Fecha de registro: 30/04/2025 16:56:20 (hace 6 horas)
Nro. de cite: DDAI-114/2025
Origen: Interna
Remitente: GUSTAVO PEREZ
Destinatario: CLAUDIA VACA
Referencia: SOLICITUD DE DOCUMENTACIÓN E INFORMACION
Estado: Pendiente
Acciones: Cambiar fecha, Ver, Editar, Anular
```

## Formulario Añadir Correspondencia/NCI

Al hacer clic en el botón `Crear` del tablero principal, se despliega el formulario para registrar una nueva correspondencia (externa) o Nota de Comunicación Interna (NCI). La apariencia y los campos disponibles pueden variar ligeramente dependiendo de si se está registrando una entrada externa o una NCI.

### Campos del Formulario:

El formulario solicita la siguiente información:

| Campo                 | Descripción                                                                                                | Tipo de Campo      | Ejemplo/Valor Inicial                               | Notas                                                                         |
| :-------------------- | :--------------------------------------------------------------------------------------------------------- | :----------------- | :-------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Tipo Trámite**      | Clasificación del tipo de documento o proceso que se está registrando.                                     | Desplegable/Select | (Vacío)                                             | Permite categorizar el trámite. Presente en ambos casos.                      |
| **Nro de cite**       | Número de referencia único del documento físico o digital que se está registrando.                         | Texto              | `1/2022` (Ej. Externo) <br/> `DF-1/2022` (Ej. NCI) | Es fundamental para la identificación unívoca. El formato puede variar.       |
| **Fecha Registro**    | Fecha y hora en que se está realizando el registro en el sistema.                                          | Fecha/Hora (Auto)  | `01/05/2025 00:06`                                  | Generalmente se completa automáticamente. Presente en ambos casos.            |
| **Remitente**         | Persona, unidad (interna) o entidad (externa) que envía la correspondencia.                                | Texto/Búsqueda     | (Vacío)                                             | Identifica al originador. Presente en ambos casos.                            |
| **Nro. de Hojas/Anexos**| Descripción cuantitativa del documento principal y los materiales adjuntos.                                | Texto              | `3 hojas y 1 CD`                                    | Ayuda a verificar la integridad. Presente en ambos casos.                     |
| **Plazo**             | Fecha límite para que el destinatario atienda o responda la correspondencia, si aplica.                    | Fecha              | `dd/mm/aaaa` (placeholder)                          | Opcional. Presente en ambos casos.                                            |
| **Origen**            | Indica si la correspondencia se origina dentro (`Interna`) o fuera (`Externa`) de la institución.            | Desplegable/Select | (Vacío)                                             | **Puede no ser visible directamente en el formulario NCI**, asumiéndose como "Interna". |
| **Destinatario**      | Persona o unidad administrativa interna a la que se dirige inicialmente la correspondencia.                | Texto/Búsqueda     | (Vacío)                                             | Define el primer punto de contacto interno. Presente en ambos casos.          |
| **Archivos**          | Permite adjuntar la versión digital del documento principal y sus anexos.                                  | Carga de Archivo   | Botón "No se ha seleccionado ningún archivo"        | Esencial para la digitalización. Presente en ambos casos.                     |
| **Personería jurídica**| Indicador para marcar si el trámite está relacionado con la gestión de personerías jurídicas.             | Checkbox           | (Desmarcado)                                        | **Generalmente presente solo para correspondencia Externa.**                  |
| **Referencia**        | Asunto o tema principal de la correspondencia. Debe ser claro y conciso.                                   | Área de Texto      | (Vacío)                                             | El resumen del contenido. Presente en ambos casos.                            |
| **Urgente**           | Indicador para marcar si la correspondencia requiere atención prioritaria.                                 | Checkbox           | (Desmarcado)                                        | Resalta el trámite. Presente en ambos casos.                                  |

### Proceso de Registro:

1.  **Seleccionar** el `Tipo Trámite`.
2.  **Determinar/Seleccionar** el `Origen` (puede ser implícito para NCI).
3.  **Ingresar** el `Nro de cite` del documento original.
4.  **Verificar** la `Fecha Registro`.
5.  **Identificar** al `Remitente`.
6.  **Describir** el `Nro. de Hojas/Anexos`.
7.  **Establecer** un `Plazo` si es necesario.
8.  **Identificar** al `Destinatario`.
9.  **Adjuntar** los `Archivos` digitales.
10. **Marcar** `Personería jurídica` si aplica (solo externo).
11. **Escribir** la `Referencia`.
12. **Marcar** `Urgente` si requiere prioridad.
13. **Revisar** la información.
14. **Confirmar** el registro para generar la Hoja de Ruta.

## Acciones Comunes Disponibles por Registro

*   **Cambiar fecha:** (ajustar la fecha de recepción real si difiere del registro). Requiere clarificación sobre su función exacta.
*   **Ver:** Acceder a la vista detallada de la Hoja de Ruta, incluyendo historial de derivaciones, proveídos y documentos adjuntos.
*   **Editar:** Modificar datos del registro inicial. Esta acción suele estar restringida una vez que el trámite ha sido derivado.
*   **Anular:** Cancelar un registro de correspondencia si fue creado por error o ya no procede. Requiere permisos especiales y generalmente una justificación.
*   **Derivar:** (No visible en el ejemplo, pero fundamental) Acción para enviar la correspondencia al destinatario o a la siguiente etapa del flujo.

## Ejemplo Detallado de Registros

**Registro 1 (Interna):**
```plaintext
ID: 100442
Fecha de registro: 30/04/2025 16:56:20 (hace 6 horas)
Nro. de cite: DDAI-114/2025
Origen: Interna
Remitente: GUSTAVO PEREZ
Destinatario: CLAUDIA VACA
Referencia: SOLICITUD DE DOCUMENTACIÓN E INFORMACION
Estado: Pendiente
Acciones: Cambiar fecha, Ver, Editar, Anular
```

## Consideraciones
*   La precisión en el llenado de estos campos es fundamental para el correcto seguimiento y gestión de la correspondencia.
*   El remitente y destinatario deben ser identificados correctamente para asegurar que la correspondencia llegue a la persona/unidad adecuada.
*   Adjuntar los archivos digitales facilita el acceso a la información y reduce la dependencia del papel.
*   El estado inicial del trámite registrado será generalmente "Pendiente" hasta que sea derivado o procesado.
*   Integración con:
    *   <mcfile name="entradas.md" path="c:\laravel\proyectoGobe\docs1\docs\siscor\entradas.md"></mcfile> (El registro aparecerá en esta lista).
    *   (Asumido) Módulo de Bandeja de Entrada (<mcfile name="bandeja.md" path="c:\laravel\proyectoGobe\docs1\docs\siscor\bandeja.md"></mcfile>) (El registro aparecerá en la bandeja del destinatario una vez derivado).
*   Auditoría completa de operaciones.