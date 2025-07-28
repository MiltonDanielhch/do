---
sidebar_position: 1
---

# Gestión de Ingresos de Almacén

## Descripción General

Este módulo permite registrar, gestionar y consultar todas las entradas de bienes y materiales al sistema de almacén del Gobierno Autónomo Departamental del Beni. Proporciona un control detallado sobre las recepciones, proveedores y documentación asociada.

## Tablero Principal de Ingresos

El tablero principal ofrece una vista consolidada de todos los registros de ingreso, permitiendo una gestión eficiente y rápida.

### Funcionalidades Clave del Tablero:

*   **Creación de Nuevos Ingresos:** Botón para iniciar el registro de una nueva entrada.
*   **Visualización y Paginación:** Opciones para mostrar 10, 25, 50 o 100 registros por página.
*   **Filtrado Rápido:** Filtros para visualizar ingresos "Todos", "Con Stock" disponible, o "Sin Stock".
*   **Búsqueda y Ordenamiento:** Funcionalidad para buscar por cualquiera de los campos y ordenar las columnas.
*   **Acciones Directas:** Botones por registro para gestionar el "Stock" o "Anular" el ingreso.

### Estructura de la Tabla de Ingresos:

La tabla principal muestra la siguiente información clave para cada registro:

| Columna                 | Descripción                                                                 | Ejemplo de Dato                               |
| :---------------------- | :-------------------------------------------------------------------------- | :-------------------------------------------- |
| **Nro° Entidad**        | Identificador único del registro de ingreso.                                | `1952`                                        |
| **Tipo Contratación**   | Modalidad de adquisición o tipo de ingreso (Ej: Contratación Menor, Compra Directa). Incluye número de proceso y gestión. | `CONTRATACIONES CON OBJETOS ESPECIFICOS` <br/> `DCP-0012` <br/> `Gestion: 2023` |
| **Oficina**             | Unidad administrativa solicitante o de destino.                             | `DIRECCION DE COMUNICACION Y PRENSA`          |
| **Proveedor**           | Nombre y NIT del proveedor que realiza la entrega.                          | `IMPRENTA LIBRERIA "MORONI II"` <br/> `NIT: 4186508012` |
| **Factura/Orden Compra**| Referencia documental (Número de factura/orden, monto, fecha del documento). | `N:1` <br/> `Monto: Bs.306.00` <br/> `Fecha: 10/04/2023` |
| **Fecha Registro**      | Fecha y hora exactas en que se registró el ingreso en el sistema.           | `10/04/2025 09:41:56`                         |
| **Stock**               | Indica si hay existencias disponibles de este ingreso (`SI`/`NO`).          | `SI`                                          |
| **Sucursal**            | Almacén físico donde se recibieron los materiales.                          | `ALMACEN - ALMACEN CENTRAL GAD-BENI`          |
| **Acciones**            | Botones para operaciones específicas: `Stock` (ver detalle) y `Anular`.     | `[Stock] [Anular]`                            |

*Nota: La columna "Fecha Registro" también puede mostrar una indicación relativa del tiempo transcurrido (ej: "hace 2 semanas").*

## Flujo de Trabajo Detallado

### 1. Registrar un Nuevo Ingreso

1.  **Acceder al Módulo:** Navegar a la sección de Ingresos.
2.  **Iniciar Creación:** Hacer clic en el botón "Crear".
3.  **Completar Datos de Cabecera:**
    *   Seleccionar la **Sucursal** de destino (obligatorio).
    *   Especificar la **Dirección** y **Unidad Administrativa** relacionada.
    *   Indicar la **Modalidad de Compra** o tipo de ingreso (debe existir en el catálogo).
    *   Registrar la **Fecha de Ingreso** real de los materiales (formato DD/MM/AAAA).
4.  **Detallar Proveedor y Documentos:**
    *   Seleccionar o registrar el **Proveedor** (con NIT).
    *   Ingresar los datos de la **Factura** o documento de respaldo (Número, Fecha, Monto).
5.  **Agregar Artículos:**
    *   Buscar y seleccionar cada artículo recibido.
    *   Especificar la **Cantidad** recibida y el **Precio Unitario**.
    *   El sistema calculará el **Subtotal** por artículo y el **Monto Total** del ingreso.
    *   Verificar la **Partida Presupuestaria** asociada a cada artículo.
    ```plaintext
    Ejemplo Detalle de Artículos:
    1. Código: 603 - CAMARA DE AIRE 265 X 18 (PIEZA)
       Partida: 3.4.3 - LLANTAS Y NEUMÁTICOS
       Cantidad: 2 | Precio U.: 150.00 | Subtotal: 300.00

    2. Código: 96 - PAPEL CARBONICO T/OFICIO (PAQUETE)
       Partida: 3.9.5 - ÚTILES DE ESCRITORIO
       Cantidad: 3 | Precio U.: 2.00 | Subtotal: 6.00

    Monto Total Ingreso: Bs. 306.00
    ```
6.  **Guardar:** Confirmar y guardar el registro de ingreso. El sistema asignará un `Nro° Entidad`.

### 2. Consultar Stock Disponible

1.  **Ubicar el Ingreso:** En el tablero principal, localizar el registro deseado.
2.  **Acción "Stock":** Hacer clic en el botón `Stock`.
3.  **Visualizar Detalle:** Se mostrará una pantalla o modal con:
    *   Datos generales del ingreso (Proveedor, Factura, Fecha).
    *   Tabla detallada de artículos del ingreso:
        | Nº | Artículo (Descripción Completa) | Presentación | Cantidad Ingresada | Cantidad Disponible |
        |----|---------------------------------|--------------|--------------------|---------------------|
        | 1  | CAMARA DE AIRE...               | PIEZA        | 2.00               | 2.00                |
        | 2  | PAPEL CARBONICO...              | PAQUETE      | 3.00               | 3.00                |

### 3. Imprimir Acta de Recepción

1.  **Seleccionar Ingreso:** Localizar el registro en el tablero.
2.  **Acción "Imprimir" (o similar):** Utilizar la opción correspondiente (puede estar dentro de "Acciones" o como botón separado).
3.  **Generar Acta:** El sistema generará el documento "Acta de Recepción de Materiales" en formato PDF o similar, listo para imprimir.
    *   **Contenido del Acta:** Incluirá detalles del almacén, referencia, fecha, datos del proveedor, detalle de artículos (código, descripción, cantidad, precios) y el total general (numérico y literal).
    *   **Espacios para Firmas:** Dispondrá de secciones para las firmas del Responsable de Almacén, Jefe de Unidad Solicitante/Contrataciones y Proveedor.

### 4. Anular un Ingreso

*   **Importante:** La anulación es un proceso delicado y generalmente requiere permisos especiales. Solo debe realizarse si el ingreso fue erróneo y antes de que los artículos hayan sido distribuidos (egreso).
1.  **Ubicar el Ingreso:** En el tablero principal.
2.  **Acción "Anular":** Hacer clic en el botón `Anular`.
3.  **Confirmación:** El sistema mostrará un mensaje solicitando confirmación, usualmente mostrando los detalles clave del ingreso a anular.
    ```plaintext
    ¿Está seguro que desea anular el siguiente registro de ingreso?

    Nro° Entidad: 1952
    Proveedor: IMPRENTA LIBRERIA "MORONI II"
    Fecha: 10/04/2023
    Monto: Bs. 306.00
    ... (más detalles si es necesario)

    [Cancelar] [Confirmar Anulación]
    ```
4.  **Procesar Anulación:** Si se confirma, el sistema marcará el ingreso como anulado, revirtiendo lógicamente la entrada de stock (si aplica según el estado). Puede requerir justificación o validación adicional (ej: firma electrónica).

## Seguridad y Permisos

*   El acceso y las acciones disponibles en este módulo están controlados por roles:
    *   **Registrador/Operador de Almacén:** Puede crear y consultar ingresos.
    *   **Supervisor/Jefe de Almacén:** Puede crear, consultar, gestionar stock y potencialmente aprobar/validar ingresos.
    *   **Administrador del Sistema:** Acceso completo, incluyendo la configuración y anulación (con posibles controles adicionales).
*   Las operaciones críticas como la anulación pueden requerir validaciones adicionales o registros de auditoría específicos.
