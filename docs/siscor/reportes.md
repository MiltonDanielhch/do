---
sidebar_position: 1 # Ajusta este número según el orden deseado en la barra lateral
---

# Reporte: Ingresos a RDE (Registro de Correspondencia Entrante)

## Introducción

El reporte de "Ingresos a RDE" (Registro de Entrada) en el sistema SISCOR proporciona un listado detallado de toda la correspondencia y documentación que ha sido recibida y registrada en el sistema dentro de un rango de fechas específico. Este informe es crucial para el seguimiento, la auditoría y la gestión del flujo documental entrante a la institución o a un destinatario particular.

## Filtros del Reporte

Para generar el reporte, usualmente se especifican los siguientes criterios de filtrado:

*   **Fecha Desde:** Indica la fecha de inicio del período para el cual se desea obtener el reporte de ingresos. En el ejemplo proporcionado, sería `02/05/2025`.
*   **Fecha Hasta:** Indica la fecha de fin del período. En el ejemplo, `06/05/2025`.

El sistema listará todos los registros de correspondencia cuya fecha de ingreso se encuentre dentro de este rango.

## Descripción de las Columnas del Reporte

El reporte presenta la información organizada en las siguientes columnas:

| Columna      | Descripción                                                                                                                               |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **N°**       | Número secuencial o correlativo asignado a cada registro en el reporte generado.                                                          |
| **HR\|NCI**  | Hoja de Ruta o Número de Control Interno. Es el identificador único asignado por SISCOR a la correspondencia al momento de su registro. Puede incluir sufijos como "COURIER" o "INVITACIÓN" para indicar el tipo o medio. |
| **FECHA**    | Fecha y hora exactas en que la correspondencia fue registrada en el sistema.                                                              |
| **DESTINATARIO** | Nombre de la persona y/o cargo al cual está dirigida la correspondencia dentro de la institución.                                       |
| **ORIGEN**   | Nombre de la institución, entidad o persona externa que envía la correspondencia.                                                         |
| **REMITENTE**| Nombre de la persona específica que firma o envía la correspondencia desde la entidad de origen.                                            |
| **REFERENCIA**| Asunto o breve descripción del contenido principal de la correspondencia. Proporciona un resumen del tema tratado en el documento.         |
| **ACCION**   | Indica la acción inicial tomada con la correspondencia al momento del registro o el estado actual si aplica (ej. "Registrado", "Derivado", "Para Despacho"). También podría referirse a acciones disponibles en el reporte mismo. En el ejemplo, "reporte siscor" podría ser un valor genérico o un estado específico del sistema. |

## Ejemplo de Detalle de Ingresos

A continuación, se muestra un ejemplo de cómo se verían los datos en el reporte, basado en la información proporcionada:

**Fechas del Reporte de Ejemplo:**
- Desde: 02/05/2025
- Hasta: 06/05/2025

| N° | HR/NCI    | FECHA                | DESTINATARIO                                                | ORIGEN                                                       | REMITENTE             | REFERENCIA                                                                                                     | ACCION        |
|----|-----------|----------------------|-------------------------------------------------------------|--------------------------------------------------------------|-----------------------|----------------------------------------------------------------------------------------------------------------|---------------|
| 1  | 2279/2025 - COURIER | 02/05/2025 09:54:00  | JOSE  <br/> Administracion | ASAMBLEA LEGISLATIVA PLURINACIONAL DE BOLIVIA| RODRÍGUEZ  | PETICIÓN DE INFORME ESCRITO | (ej. Registrado) |

*(Nota: Se ha añadido una primera fila al ejemplo basada en la información previa y se ha generalizado el campo ACCION para mayor claridad, ya que "reporte siscor" es muy genérico).*

## Consideraciones Adicionales

*   Este reporte es fundamental para verificar la recepción de documentos importantes y para realizar seguimientos.
*   La precisión de los datos en este reporte depende de la correcta captura de información durante el proceso de registro de la correspondencia.
*   Dependiendo de la configuración del sistema, podrían existir opciones para exportar este reporte a formatos como PDF o Excel.

---

# Reporte: Documentos

## Introducción

El reporte de "Documentos" en el sistema SISCOR ofrece una vista detallada de los documentos gestionados o procesados dentro de un período específico. A diferencia del reporte de "Ingresos a RDE" que se enfoca en la entrada, este reporte puede abarcar documentos en diversas etapas o con diferentes tipos de interacciones, dependiendo de su configuración y propósito específico dentro del módulo de reportes de SISCOR.

## Filtros del Reporte

Para generar este reporte, se suelen utilizar los siguientes criterios de filtrado:

*   **Fecha Desde:** La fecha de inicio del período para el cual se desea consultar los documentos. En el ejemplo proporcionado, sería `08/05/2025`.
*   **Fecha Hasta:** La fecha de fin del período. En el ejemplo, `08/05/2025`.

El sistema mostrará todos los documentos cuya fecha de registro o última acción relevante se encuentre dentro de este rango.

## Descripción de las Columnas del Reporte

El reporte de "Documentos" presenta la información organizada en las siguientes columnas:

| Columna      | Descripción                                                                                                                               |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **N°**       | Número secuencial o correlativo asignado a cada registro en el reporte generado.                                                          |
| **FECHA**    | Fecha y hora exactas asociadas al documento en el contexto del reporte (puede ser fecha de creación, última modificación, envío, etc.).     |
| **CITE**     | Número de CITE o identificador único del documento. Similar al HR/NCI, puede incluir información adicional como el tipo de documento (ej. "INVITACIÓN"). |
| **DESTINATARIO** | Nombre de la persona y/o cargo al cual está dirigido el documento o con quien está relacionado principalmente.                           |
| **ORIGEN**   | Nombre de la institución, entidad o persona externa que originó el documento o desde donde se envió.                                      |
| **REMITENTE**| Nombre de la persona específica que firma o envía el documento desde la entidad de origen.                                                |
| **REFERENCIA**| Asunto o breve descripción del contenido principal del documento.                                                                         |

## Ejemplo de Detalle de Documentos

A continuación, se muestra un ejemplo de cómo se verían los datos en el reporte, basado en la información proporcionada:

**Fechas del Reporte de Ejemplo:**
- Desde: 08/05/2025
- Hasta: 08/05/2025

| N° | FECHA                | CITE                   | DESTINATARIO                                                     | ORIGEN                     | REMITENTE             | REFERENCIA                                                                                                                                                                                                                                                           |
|----|----------------------|------------------------|------------------------------------------------------------------|----------------------------|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | 08/05/2025 09:46:47  | 2361/2025 - INVITACIÓN | JOSE  - asambleista  | CENTRO DE SALUD CASARABE   |  ROLDAN | INVITACIÓN AL ACTO PROTOCOLAR |
| ...| ...                  | ...                    | ...                                                              | ...                        | ...                   | ...                                                                                                                                                                                                                                                                  |

## Consideraciones Adicionales

* Este reporte es útil para obtener una visión general de la actividad documental en un período determinado.
* Puede ser utilizado para auditorías, seguimiento de trámites específicos o para entender la carga de trabajo documental.
* La utilidad y el alcance exacto del reporte "Documentos" pueden variar según la implementación específica de SISCOR en la institución.
* Al igual que otros reportes, es probable que exista la opción de exportarlo a formatos como PDF o Excel.

---

# Reporte: Bandeja de Entrada

## Introducción

El reporte de "Bandeja de Entrada" permite visualizar todos los documentos pendientes de atención de un funcionario específico en un período de tiempo determinado. Es útil para supervisores y para el propio funcionario para hacer seguimiento de su carga de trabajo.

## Cómo Acceder

**Ruta:** `admin/report/bandeja`

## Filtros del Reporte

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Funcionario** | Seleccionar el funcionario a reportar | José Pérez |
| **Fecha Desde** | Fecha de inicio del período | 01/04/2025 |
| **Fecha Hasta** | Fecha de fin del período | 30/04/2025 |

## Descripción de las Columnas

| Columna | Descripción |
|---------|-------------|
| **ID** | Identificador de la derivación |
| **Entrada** | ID de la entrada/hoja de ruta |
| **Cite** | Número de cite del documento |
| **Remitente** | Persona o entidad que envió el documento |
| **Referencia** | Asunto del documento |
| **Fecha Derivación** | Fecha cuando fue derivado al funcionario |
| **Estado** | Estado actual del trámite |
| **Visto** | Indicador si el funcionario ha visto el documento |

## Estados Incluidos/Excluidos

El reporte exclude automáticamente los estados:
- Estado ID 4 (Finalizado)
- Estado ID 6 (Archivado)

Solo muestra documentos **pendientes** de atención.

## Casos de Uso

1. **Supervisión:** El supervisor puede ver la carga de trabajo de cada funcionario
2. **Control Personal:** El funcionario revisa sus documentos pendientes
3. **Auditoría:** Verificar que los documentos están siendo atendidos oportunamente
4. **Planificación:** Identificar acumulación de documentos en algún funcionario

---

# Reporte: RDE Documents (Documentos Derivados)

## Introducción

El reporte "RDE Documents" muestra un listado de documentos que han sido derivados, agrupados por cite. A diferencia del reporte de ingresos que muestra el registro inicial, este reporte enfoca en las derivaciones realizadas.

## Cómo Acceder

**Ruta:** `admin/report/rde-documents`

## Filtros del Reporte

| Campo | Descripción |
|-------|-------------|
| **Fecha Desde** | Fecha de inicio del período |
| **Fecha Hasta** | Fecha de fin del período |

## Descripción de las Columnas

| Columna | Descripción |
|---------|-------------|
| **Fecha** | Fecha de creación/registro del documento |
| **Cite** | Número de cite único del documento |
| **Origen** | Entidad de origen del documento |
| **Remitente** | Persona que envía el documento |
| **Referencia** | Asunto del documento |
| **Funcionario** | Nombre del funcionario que recibió la derivación |
| **Cargo** | Cargo del funcionario receptor |

## Características Especiales

- **Agrupación por Cite:** El reporte agrupa los resultados por número de cite, evitando duplicados
- **Solo Derivaciones:** Muestra únicamente documentos que han sido derivados (no los pendientes de derivar)
- **Documentos Externos:** Filtra solo correspondence de tipo "E" (Externo)

## Diferencias con Otros Reportes

| Reporte | Enfoque |
|---------|---------|
| Ingresos RDE | Documentos registrados (entrada) |
| Bandeja | Documentos pendientes por funcionario |
| RDE Documents | Documentos derivados (salida) |

## Consideraciones

- Este reporte es útil para verificar el flujo de documentos salientes
- Permite identificar qué funcionarios están recibiendo más documentos
- Útil para análisis de carga laboral por área