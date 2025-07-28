---
sidebar_position: 2 # O ajusta según tu estructura
---

# Crear Nuevo Contrato

## Vista General
Formulario utilizado para registrar un nuevo contrato dentro del sistema del Gobierno Autónomo Departamental del Beni. Permite capturar la información esencial para la formalización de una relación contractual, ya sea para personal eventual, consultores, etc.

## Campos del Formulario

### Datos Principales
| Campo                        | Descripción                                                                 | Tipo              | Validación/Comportamiento                                     |
| :--------------------------- | :-------------------------------------------------------------------------- | :---------------- | :------------------------------------------------------------ |
| Tipo de planilla             | Modalidad de contratación o tipo de personal (ej. Eventual, Consultor Línea, Permanente) | Desplegable       | Requerido. Lista predefinida. La selección de "Consultoría de línea" o "Eventual" mostrará secciones adicionales. Para "Permanente" típicamente solo se muestran los "Datos Principales". |
| Persona                      | Beneficiario del contrato (buscar y seleccionar de la base de datos)        | Búsqueda/Selección| Requerido. Vinculado al módulo de Beneficiarios.              |
| Dirección administrativa     | Unidad organizacional principal a la que se adscribe el contrato            | Desplegable       | Requerido. Lista de direcciones/secretarías.                  |
| Unidad administrativa        | Subdivisión o unidad específica dentro de la Dirección Administrativa       | Desplegable       | Requerido. Dependiente de la Dirección Administrativa.        |
| Programa                     | Programa presupuestario al que se imputará el gasto                         | Desplegable       | Requerido. Lista de programas válidos.                        |
| Cargo                        | Denominación del puesto o función a desempeñar                               | Búsqueda/Selección| Requerido. Lista de cargos predefinidos o ingreso manual.     |
| Inicio de contrato           | Fecha de comienzo de la vigencia del contrato                               | Selector de Fecha | Requerido. Formato dd/mm/aaaa.                                |
| Fin de contrato              | Fecha de finalización de la vigencia del contrato                           | Selector de Fecha | Requerido. Formato dd/mm/aaaa. Debe ser posterior al inicio. |
| Persona o unidad solicitante | (Opcional) Quién o qué área solicitó la contratación                       | Texto             | Opcional.                                                     |
| Denominación de cargo        | (Opcional) Descripción más detallada del cargo (si difiere del nominal)     | Texto             | Opcional.                                                     |
| Lugar de prestación de servicio | (Opcional) Ubicación física donde se realizará el trabajo                 | Texto             | Opcional.                                                     |
| Firma autorizada             | Nombre de la autoridad que firmará el contrato (ej. Gobernador, Secretario) | Desplegable       | Requerido. Lista de firmantes autorizados.                    |
| Firma autorizada de proceso de contratación RPA | Nombre del Responsable del Proceso de Contratación (si aplica) | Desplegable       | Requerido/Opcional según tipo. Lista de RPAs.                 |

### Datos de Autorización (Visible si Tipo de planilla = "Consultoría de línea")
| Campo                        | Descripción                                     | Tipo              | Validación/Comportamiento |
| :--------------------------- | :---------------------------------------------- | :---------------- | :------------------------ |
| Fecha de autorización        | Fecha en que se autoriza el proceso             | Selector de Fecha | Formato dd/mm/aaaa.       |
| Certificación POA            | Número o referencia de la Certificación POA     | Texto             |                           |
| Certificación PAC            | Número o referencia de la Certificación PAC     | Texto             |                           |

### Datos de Invitación (Visible si Tipo de planilla = "Consultoría de línea")
| Campo                        | Descripción                                     | Tipo              | Validación/Comportamiento |
| :--------------------------- | :---------------------------------------------- | :---------------- | :------------------------ |
| Fecha de invitación          | Fecha de emisión de la invitación               | Selector de Fecha | Formato dd/mm/aaaa.       |
| Fecha límite de invitación   | Fecha tope para recibir propuestas              | Selector de Fecha | Formato dd/mm/aaaa.       |
| Fecha de respuesta a invitación | Fecha en que el consultor responde            | Selector de Fecha | Formato dd/mm/aaaa.       |

### Datos de Memorandum (Visible si Tipo de planilla = "Consultoría de línea")
| Campo                             | Descripción                                          | Tipo              | Validación/Comportamiento |
| :-------------------------------- | :--------------------------------------------------- | :---------------- | :------------------------ |
| Fecha de declaración jurada       | Fecha de la declaración jurada del proponente        | Selector de Fecha | Formato dd/mm/aaaa.       |
| Fecha de memorandum               | Fecha de emisión del memorandum de designación       | Selector de Fecha | Formato dd/mm/aaaa.       |
| Fecha de respuesta de memorandum  | Fecha de aceptación/respuesta al memorandum          | Selector de Fecha | Formato dd/mm/aaaa.       |
| Responsable(s) de evaluación    | Nombre(s) de quienes evalúan las propuestas/documentos | Texto/Selección   |                           |

### Datos Complementarios (Visible si Tipo de planilla = "Consultoría de línea")
| Campo                             | Descripción                                          | Tipo              | Validación/Comportamiento |
| :-------------------------------- | :--------------------------------------------------- | :---------------- | :------------------------ |
| Fecha de nota de adjudicación     | Fecha de la notificación de adjudicación             | Selector de Fecha | Formato dd/mm/aaaa.       |
| Fecha de informe de evaluación    | Fecha del informe de evaluación de propuestas        | Selector de Fecha | Formato dd/mm/aaaa.       |
| Fecha de Presentación de documentos | Fecha límite o de entrega de documentos contractuales | Selector de Fecha | Formato dd/mm/aaaa.       |
| Cuadro de nivel de consultoría    | Nivel asignado al consultor según tabulador          | Texto/Desplegable |                           |

### Datos Complementarios (Visible si Tipo de planilla = "Eventual")
| Campo                        | Descripción                                     | Tipo              | Validación/Comportamiento |
| :--------------------------- | :---------------------------------------------- | :---------------- | :------------------------ |
| Funciones generales          | Descripción de las tareas principales a realizar| Área de texto     | Opcional.                 |

## Proceso de Creación

1.  Acceder al formulario "Crear contrato".
2.  Seleccionar el **Tipo de planilla**.
    *   Si se selecciona "Consultoría de línea", se mostrarán secciones adicionales para "Datos de Autorización", "Datos de Invitación", "Datos de Memorandum" y "Datos Complementarios (Consultoría)".
    *   Si se selecciona "Eventual", se mostrará una sección adicional para "Datos Complementarios (Eventual)".
    *   Si se selecciona "Permanente", generalmente solo se presentarán los campos de la sección "Datos Principales".
3.  Buscar y seleccionar la **Persona** (beneficiario). La información de CI/NIT y teléfono puede autocompletarse.
4.  Seleccionar la **Dirección administrativa**, **Unidad administrativa** y **Programa**.
5.  Seleccionar o ingresar el **Cargo**.
6.  Establecer las fechas de **Inicio de contrato** y **Fin de contrato** usando los selectores.
7.  (Opcional) Completar los campos: **Persona o unidad solicitante**, **Denominación de cargo**, **Lugar de prestación de servicio**.
8.  Seleccionar la **Firma autorizada** principal.
9.  Seleccionar la **Firma autorizada de proceso de contratación RPA** (si corresponde).
10. Revisar todos los datos ingresados.
11. Confirmar la creación del contrato (mediante un botón como "Guardar", "Registrar" o "Crear").

## Validaciones Comunes
-   Todos los campos marcados como requeridos deben ser completados.
-   La **Persona** seleccionada debe existir en la base de datos de beneficiarios.
-   La **Fecha de Fin de contrato** debe ser igual o posterior a la **Fecha de Inicio de contrato**.
-   Las selecciones en desplegables deben corresponder a valores válidos y activos.
-   Puede haber validaciones presupuestarias asociadas al **Programa** y **Cargo**.

## Consideraciones
-   Al guardar, el sistema genera un **Código** único para el contrato y lo añade al listado, usualmente en estado "Elaborado".
-   Este registro es el paso inicial para la generación del documento físico del contrato.
-   Requiere procesos posteriores como la aprobación, firma e impresión.
-   Se integra con:
    *   Beneficiarios
    *   Presupuesto/Contabilidad (Programas)
    *   Recursos Humanos (Cargos, Planillas)
    *   Estructura Organizacional (Direcciones, Unidades)
-   Se registra quién y cuándo se creó el contrato (auditoría).

## Ejemplo de Datos para Creación
```plaintext
Tipo de planilla: Consultoría de línea
Persona: AÑEZ JUSTINIANO GISELLE (ID: XXXX, CI: 8866901)
Dirección administrativa: Corregimiento Municipio de Trinidad
Unidad administrativa: Despacho Corregidor
Programa: 10 - Funcionamiento CMT
Cargo: Tecnico IV
Inicio de contrato: 11/02/2025
Fin de contrato: 31/05/2025
Persona o unidad solicitante: Corregidor Municipal
Denominación de cargo: Técnico de Apoyo Administrativo
Lugar de prestación de servicio: Oficinas del Corregimiento
Firma autorizada: Nombre del Corregidor
Firma autorizada de proceso de contratación RPA: Nombre del RPA de la Dirección
```


# Módulo de Contrataciones diagrama

```mermaid
%%{init: {'theme': 'neutral', 'themeVariables': {'primaryColor': '#2b3b52', 'lineColor': '#4a90e2', 'textColor': '#333', 'fontSize': '20px'}}}%%
classDiagram
  direction LR

  class Contrato {
    +String codigoContrato
    +Date fechaInicio
    +Date fechaFin
    +String personaSolicitanteOpcional
    +String denominacionCargoOpcional
    +String lugarPrestacionServicioOpcional
    +String funcionesGenerales (Solo si Eventual)
    +String certificacionPOA (Solo si Consultoria)
    +String certificacionPAC (Solo si Consultoria)
    +Date fechaAutorizacion (Solo si Consultoria)
    +Date fechaInvitacion (Solo si Consultoria)
    +Date fechaMemorandum (Solo si Consultoria)
    +String responsablesEvaluacion (Solo si Consultoria)
    +String cuadroNivelConsultoria (Solo si Consultoria)
    +generarDocumentoPDF()
    +validarDatosContrato()
    +asignarCodigoUnico()
    +cambiarEstado()
  }
  note for Contrato "Atributos específicos de Consultoría o Eventual se activan según el TipoPlanilla.\nEl estado inicial suele ser 'Elaborado'."

  class Persona {
    +String idPersona
    +String nombres
    +String apellidos
    +String ci
    +String nit
    +String telefono
    +validarDatosPersonales()$
    +buscarRegistrosExistentes()$
  }
  note for Persona "Representa al beneficiario del contrato (empleado, consultor)."

  class TipoPlanilla {
    +String idTipoPlanilla
    +String nombre
    +String descripcion
    +Boolean requiereDatosAutorizacion
    +Boolean requiereDatosInvitacion
    +Boolean requiereDatosMemorandum
    +Boolean requiereDatosComplementariosConsultoria
    +Boolean requiereDatosComplementariosEventual
  }
  note for TipoPlanilla "Ej: Eventual, Consultor Línea, Permanente.\nDefine qué secciones del formulario son visibles."

  class DireccionAdministrativa {
    +String idDireccion
    +String nombre
    +String codigo
  }

  class UnidadAdministrativa {
    +String idUnidad
    +String nombre
    +String codigo
  }

  class Programa {
    +String idPrograma
    +String nombre
    +String codigoPresupuestario
  }

  class Cargo {
    +String idCargo
    +String nombre
    +String nivelSalarial
    +String descripcionFuncionesBase
  }

  class FirmaAutorizada {
    +String idFirma
    +String nombreCompletoFuncionario
    +String cargoFuncionario
    +String tipoFirma (Principal, RPA)
  }
  note for FirmaAutorizada "Puede ser la firma principal del contrato o la del RPA."

  Contrato "1" -- "1" Persona : "beneficia a"
  Contrato "1" -- "1" TipoPlanilla : "es de tipo"
  Contrato "1" -- "1" DireccionAdministrativa : "adscrito a"
  Contrato "1" -- "1" UnidadAdministrativa : "pertenece a unidad específica"
  Contrato "1" -- "1" Programa : "imputado a programa"
  Contrato "1" -- "1" Cargo : "para el cargo de"
  Contrato "1" -- "1..2" FirmaAutorizada : "requiere firma(s) de"

  DireccionAdministrativa "1" -- "*" UnidadAdministrativa : "contiene"
