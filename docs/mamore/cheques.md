# Cheques
## Listado de Cheques

## Vista General
Este módulo permite visualizar, buscar y gestionar los cheques emitidos por el Gobierno Autónomo Departamental del Beni, ya sea para pagos a proveedores, subsidios, sueldos extraordinarios u otros conceptos.

## Controles de Visualización
-   **Mostrar registros**: Permite seleccionar cuántos registros de cheques se muestran por página (ej. 10, 25, 50).
-   **Buscar**: Campo de texto para filtrar dinámicamente los cheques mostrados en la tabla por cualquier dato visible (Nro Cheque, Beneficiario, Detalle, etc.).

## Estructura de la Tabla

| Campo         | Descripción                               | Tipo     | Ejemplo                                      |
| :------------ | :---------------------------------------- | :------- | :------------------------------------------- |
| Id°           | Identificador único del registro del cheque | Numérico | 5                                            |
| Tipo.         | Clasificación o propósito del cheque      | Texto    | "Proveedores", "Lactancia"                   |
| Nro Cheque.   | Número físico impreso en el cheque        | Texto    | "237790"                                     |
| Beneficiario. | Nombre de la persona o entidad receptora  | Texto    | "LABORATORIOS IFA S.A."                      |
| Nro Mem.      | Número de memorándum de referencia        | Texto    | "6104"                                       |
| Nro Prev      | Número de preventivo asociado             | Texto    | "526"                                        |
| Nro Dev.      | Número de devengado asociado              | Texto    | "1"                                          |
| Fecha Ingreso | Fecha de registro del cheque en sistema   | Fecha    | "2022-01-31"                                 |
| Fecha Cheque  | Fecha de emisión impresa en el cheque     | Fecha    | "31/12/2021"                                 |
| Monto         | Valor monetario del cheque (Bs.)          | Decimal  | 54864.50                                     |
| Detalle       | Descripción breve del motivo del pago     | Texto    | "pago por la adquisición de medicamentos"    |
| Estado        | Situación actual del cheque               | Texto    | "Entregado", "Aprobado", "Anulado", "Impreso" |
| Acciones      | Operaciones disponibles sobre el cheque   | Iconos   | (Ver Detalle, Entregar, Anular, Imprimir)    |

## Tipos de Cheques Comunes
1.  **Proveedores**: Pagos por bienes o servicios adquiridos.
2.  **Lactancia / Subsidios**: Pagos de beneficios sociales (natalidad, prenatales, etc.).
3.  **Vacaciones**: Pagos por días de vacaciones no gozadas.
4.  **Pago de sueldo**: Remuneraciones pagadas mediante cheque (casos especiales).
5.  **Caja Chica**: Reposición de fondos menores.
6.  **Viáticos**: Pagos por gastos de viaje.

## Estados Comunes de Cheques
-   **Impreso**: El cheque ha sido generado físicamente.
-   **Aprobado**: Autorizado para entrega, pero aún no entregado físicamente.
-   **Entregado**: El cheque físico ha sido entregado al beneficiario.
-   **Anulado**: El cheque ha sido cancelado antes de su entrega o cobro.
-   **Pagado/Cobrado**: (Opcional) Estado si se tiene conciliación bancaria.
-   **Devuelto**: El cheque fue entregado pero devuelto por alguna razón.

## Filtros Disponibles (Implícitos en Buscar)
La funcionalidad de **Buscar** permite filtrar por:
-   Tipo de cheque
-   Nombre del Beneficiario
-   Número de Cheque
-   Números de documentos asociados (Memo, Preventivo, Devengado)
-   Estado
-   Detalle (palabras clave)
-   Fechas (buscando por el texto)
-   Montos (si la búsqueda avanzada lo permite)

## Acciones Disponibles (Iconos Comunes)
1.  **Ver Detalle**: Mostrar información completa del cheque y documentos asociados.
2.  **Entregar**: Registrar la entrega física del cheque al beneficiario (cambia estado a "Entregado").
3.  **Anular**: Cancelar un cheque que no ha sido entregado o cobrado (cambia estado a "Anulado").
4.  **Imprimir**: (Re)imprimir el cheque físico o un comprobante asociado.
5.  **Devolver**: Registrar la devolución de un cheque previamente entregado.
6.  **Exportar**: Generar reportes del listado filtrado en Excel o PDF.

## Consideraciones
-   La emisión y aprobación de cheques suele requerir autorización previa de Tesorería y/o niveles superiores.
-   Los montos se expresan en Bolivianos (Bs.).
-   Integración fundamental con módulos de:
    *   Contabilidad (SIGEP/SIGMA, registro de devengados, preventivos)
    *   Tesorería (Control de chequeras, saldos bancarios)
    *   Proveedores (Registro de pagos)
    *   Planillas (Para pagos de subsidios, sueldos especiales)
-   Se debe mantener una auditoría completa de la creación, aprobación, entrega, anulación y otras acciones sobre los cheques.

# Crear Nuevos Cheques
## Vista General
Ventana modal (formulario emergente) utilizada para registrar la información y solicitar la emisión de un nuevo cheque de pago en el sistema del Gobierno Autónomo Departamental del Beni.

## Proceso de Creación
1. Abrir la ventana modal "Crear cheque" (generalmente desde el listado de cheques).
2. Seleccionar el Tipo de Cheque: de la lista desplegable.
3. Ingresar el Nro Cheque: (si no es asignado automáticamente).
4. Ingresar el Monto: del cheque.
5. Ingresar el nombre del Beneficiario: .
6. (Opcional/Requerido) Ingresar los números de Nro memorándum: , Nro Preventivo: , Nro Devengado: .
7. Seleccionar la Fecha Ingreso: usando el calendario.
8. Seleccionar la Fecha Cheque: usando el calendario.
9. Escribir el Detalle: o glosa del pago.
10. Confirmar la creación (mediante un botón como "Guardar", "Registrar" o "Aceptar").
## Validaciones Comunes
- Todos los campos marcados como requeridos deben ser completados.
- El Nro Cheque: no debe estar duplicado (si es ingresado manualmente).
- El Monto: debe ser un número positivo válido.
- Las fechas deben tener un formato correcto (dd/mm/aaaa).
- Puede haber validaciones cruzadas con los módulos de Contabilidad (Preventivo/Devengado).
## Consideraciones (Creación)
- El registro de un cheque usualmente lo deja en estado "Registrado" o "Pendiente de Aprobación".
- Requiere un proceso posterior de aprobación (Tesorería) e impresión física.
- Se integra con:
  - Contabilidad (SIGEP/SIGMA)
  - Tesorería (Control de chequeras, bancos)
  - Proveedores / Planillas (según el tipo)
- Genera una entrada en el listado de cheques y registros de auditoría.

## Ejemplo de Registro en Tabla
```plaintext
Id°: 5
Tipo.: Proveedores
Nro Cheque.: 237790
Beneficiario.: LABORATORIOS IFA S.A.
Nro Mem.: 6104
Nro Prev: 526
Nro Dev.: 1
Fecha Ingreso: 2022-01-31
Fecha Cheque: 31/12/2021
Monto: 54864.50
Detalle: pago por la adquisición de medicamentos
Estado: Entregado
Acciones: [Icono Ver Detalle] [Icono Imprimir Comprobante]

