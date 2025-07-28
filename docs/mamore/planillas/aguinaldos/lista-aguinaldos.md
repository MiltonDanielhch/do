---
sidebar_position: 2
---

# Listado y Gestión de Aguinaldos

## Vista General

Este módulo centraliza la visualización y gestión de los registros correspondientes al pago de aguinaldos (bonificación anual) para el personal del Gobierno Autónomo Departamental del Beni.

## Tablero Principal de Aguinaldos

El tablero principal muestra un listado paginado de todos los registros de aguinaldos generados.

### Funcionalidades Clave del Tablero:

*   **(Implícito) Añadir Registro de Aguinaldo:** Generalmente, la creación se realiza desde otro módulo o proceso, pero podría existir un botón aquí.
*   **Mostrar Registros:** Opciones para seleccionar la cantidad de registros a mostrar por página (`10`, `25`, `50`, `100`).
*   **Buscar:** Campo para filtrar los registros por diversos criterios (ej. Dirección Administrativa, Gestión, Tipo de Planilla).
*   **(Implícito) Paginación:** Controles para navegar entre las páginas de resultados.

### Estructura de la Tabla de Aguinaldos:

La tabla principal presenta la siguiente información clave para cada registro de aguinaldo:

| Columna                   | Descripción                                                                                                | Formato/Ejemplo                                                                                             | Notas                                                                                                                                                           |
| :------------------------ | :--------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **N°**                    | Número secuencial del registro de aguinaldo en la lista.                                                   | Numérico (`1`)                                                                                              | Identificador visual en la página actual.                                                                                                                       |
| **Dirección administrativa**| Unidad o dependencia para la cual se generó el registro de aguinaldo.                                      | Texto (`Sub Gobernacion Provincia Yacuma`)                                                                  | Indica la unidad ejecutora.                                                                                                                                     |
| **Tipo de planilla**      | Clasificación de la planilla asociada al personal (eventual, permanente).                                  | Texto (`eventual`)                                                                                          | Indica el tipo de personal incluido.                                                                                                                            |
| **N° de personas**        | Cantidad total de funcionarios incluidos en este registro de aguinaldo.                                    | Numérico (`3`)                                                                                              |                                                                                                                                                                 |
| **Gestión**               | Año fiscal al que corresponde el pago del aguinaldo.                                                       | Numérico (`2024`)                                                                                           | Indica el periodo del beneficio.                                                                                                                                |
| **Registrado**            | Información sobre quién y cuándo se creó el registro.                                                      | Texto (Usuario) <br/> Fecha y Hora (`30/12/2024 18:02`) <br/> Tiempo relativo (`hace 4 meses`)             | Combina el usuario creador (`Nadir Vaca`) con la fecha/hora de registro.                                                                                        |
| **Acciones**              | Operaciones disponibles para cada registro de aguinaldo.                                                   | Botones/Menú (Ej: `Ver Detalle`, `Promover`/`Imprimir Boletas`, `Exportar`, `Anular`)                       | Las acciones varían según el estado. Incluye un flujo de promoción que habilita la impresión de boletas.                                                         |

## Filtros Disponibles (Potenciales)

*   **Básicos:** Por Dirección administrativa, Tipo de planilla, Gestión (Año).
*   **Avanzados:** Por rango de fechas de registro, por N° de personas (mín/máx), por Usuario creador.

## Acciones Comunes Disponibles (Potenciales)

Las acciones dependen del estado del registro y los permisos del usuario:

1.  **Ver Detalle:** Acceder a la vista detallada del registro, incluyendo el listado de funcionarios y montos individuales.
2.  **Promover:** (Disponible en estado `Registrado` o similar)
    *   **Acción:** Clic en el botón `Promover`.
    *   **Modal de Confirmación:** *"¿Desea promover la siguiente planilla? Si promueve la planilla ya no podrá editarla o anularla."*
    *   **Resultado:** Si se confirma, el estado del registro cambia (ej. a `Promovido` o `Listo para Pago`), y el botón `Promover` es reemplazado por `Imprimir Boletas`. La edición y anulación pueden quedar deshabilitadas.
3.  **Imprimir Boletas:** (Disponible después de `Promover`, en estado `Promovido` o `Procesado/Pagado`) Generar las boletas de pago individuales para los funcionarios incluidos en el registro de aguinaldo.
4.  **Exportar (PDF/Excel):** Generar un reporte formal del registro de aguinaldo.
5.  **Anular:** Cancelar el registro (generalmente requiere justificación y permisos especiales). Usualmente disponible solo *antes* de promover.
6.  **(Potencial) Procesar/Pagar:** Acción adicional para marcar el aguinaldo como pagado si la promoción no lo hace automáticamente.

## Estados Posibles del Registro de Aguinaldo

*   **Registrado:** El aguinaldo ha sido calculado y guardado, pero aún no se ha procesado ni promovido para pago. Edición y anulación posibles.
*   **Promovido / Listo para Pago:** El registro ha sido confirmado y validado (promovido). Ya no se puede editar ni anular fácilmente. Listo para la generación de boletas y/o procesamiento de pago.
*   **Procesado/Pagado:** El proceso de pago ha sido completado o confirmado.
*   **Anulado:** El registro ha sido cancelado (antes de promoverse) y no será pagado.

## Consideraciones Importantes

*   El cálculo del aguinaldo generalmente se basa en el promedio de los últimos sueldos (según normativa) y el tiempo trabajado durante la gestión.
*   Solo el personal que cumple los requisitos de tiempo de servicio en la gestión es elegible.
*   La **integración** con los módulos de Planillas y Personal/Contratos es crucial para obtener los datos necesarios para el cálculo.
*   Puede requerir validaciones presupuestarias y de Tesorería antes del pago.

## Ejemplo de Registro (Formato Tabla Resumido)

```plaintext
N°: 1
Dirección: Sub Gobernacion Provincia Yacuma
Tipo Planilla: eventual
Personas: 3
Gestión: 2024
Registrado por: Nadir Vaca
Fecha Registro: 30/12/2024 18:02 (hace 4 meses)
Acciones: Ver Detalle, Promover, Exportar, Anular (Estado: Registrado)
// O después de promover:
Acciones: Ver Detalle, Imprimir Boletas, Exportar (Estado: Promovido)