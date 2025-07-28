---
sidebar_position: 1 # O ajusta según tu estructura de reportes
---

# Reporte de Datos Personales

## Vista General
Este reporte proporciona una vista detallada de la información personal y contractual de los individuos registrados en el sistema. Permite filtrar y visualizar datos clave para la gestión de recursos humanos y el seguimiento de contratos.

## Filtros Disponibles
La interfaz del reporte presenta las siguientes opciones de filtrado rápido para visualizar subconjuntos de personas:
-   **Todos**: Muestra todos los registros de personas sin aplicar filtros de estado contractual.
-   **Contrato activo**: Filtra y muestra únicamente a las personas que actualmente tienen un contrato vigente.
-   **Contrato en proceso**: Filtra y muestra a las personas cuyos contratos están en alguna etapa de elaboración o aprobación, pero aún no están activos o firmados.

## Estructura de la Tabla
El reporte presenta la información en un formato tabular con las siguientes columnas:

| Columna        | Descripción                                                                 | Tipo          | Ejemplo                                                                 |
| :------------- | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------------------------------------- |
| N°             | Número secuencial del registro en la vista actual del reporte.              | Numérico      | 1                                                                       |
| Fotografía     | Imagen de perfil de la persona (si está disponible).                        | Imagen        | (Vacío o miniatura)                                                     |
| Nombre completo| Nombres y apellidos de la persona.                                          | Texto         | "FRANCO FLORES HURTADO"                                                 |
| CI             | Cédula de Identidad de la persona.                                          | Texto         | "1934915"                                                               |
| Lugar nac.     | Lugar de nacimiento de la persona.                                          | Texto         | "SANTISIMA TRINIDAD"                                                    |
| Fecha nac.     | Fecha de nacimiento de la persona.                                          | Fecha         | "02/02/1977"                                                            |
| Edad           | Edad actual de la persona, calculada a partir de la fecha de nacimiento.    | Numérico      | 48                                                                      |
| Género         | Género de la persona.                                                       | Texto         | "Masculino"                                                             |
| Telefono       | Número de teléfono de contacto de la persona.                               | Texto         | "72813085"                                                              |
| Email          | Dirección de correo electrónico de la persona.                              | Texto         | (Vacío o dirección de email)                                            |
| AFP            | Administradora de Fondos de Pensiones a la que está afiliada la persona.    | Texto         | "Gestora"                                                               |
| NUA/CUA        | Número Único Asignado o Código Único de Asegurado en la AFP.                | Texto         | "34199524"                                                              |
| Caja de salud  | Entidad de seguro de salud a la que está afiliada la persona.               | Texto         | "Caja Cordes"                                                           |
| Dependencia    | Unidad organizacional o secretaría a la que está asignada la persona.       | Texto         | "Secretaria Departamental De Minería, Energía e Hidrocarburos"          |
| Registrado     | Usuario que registró o modificó por última vez los datos de la persona y la fecha/hora de dicha acción. | Texto (Multi) | "CHRISTIAN MANUEL NAVARRE ROSAS<br/>10/05/2023 15:03"                 |

## Ejemplo de Registro en Tabla
```plaintext
N°: 1
Fotografía: (Vacío)
Nombre completo: FRANCO FLORES HURTADO
CI: 1934915
Lugar nac.: SANTISIMA TRINIDAD
Fecha nac.: 02/02/1977
Edad: 48
Género: Masculino
Telefono: 72813085
Email: (Vacío)
AFP: Gestora
NUA/CUA: 34199524
Caja de salud: Caja Cordes
Dependencia: Secretaria Departamental De Minería, Energía e Hidrocarburos
Registrado: CHRISTIAN MANUEL NAVARRE ROSAS | 10/05/2023 15:03