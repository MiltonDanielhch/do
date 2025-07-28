---
sidebar_position: 2
---

# Gestión de Egresos de Almacén

## Descripción General

Este módulo administra el proceso completo de salida de bienes y materiales del almacén, desde la solicitud inicial hasta la entrega final y la documentación correspondiente. Asegura la trazabilidad y el control adecuado del inventario saliente.

## Flujo General de Egresos

El proceso de egreso se gestiona a través de tableros específicos:

1.  **Gestión de Solicitudes:** Registro y aprobación/rechazo de las solicitudes de materiales.
2.  **Gestión de Salidas de Almacén:** Procesamiento y registro de la entrega física de los materiales aprobados.

---

## Gestión de Solicitudes

### Tablero de Solicitudes
Muestra las solicitudes de salida con los siguientes campos:

| Campo | Descripción | Validación |
|-------|-------------|------------|
| N° | Identificador único | Secuencial |
| Solicitante | Nombre + cargo | Autocompletado |
| Oficina | Unidad administrativa | Catálogo oficial |
| N° Pedido | Referencia formal | Formato: AAA-NNNN/AAAA |
| Fecha Solicitud | DD/MM/AAAA | ≤ Fecha actual |
| Fecha Registro | Timestamp sistema | Automático |
| Sucursal | Ubicación física | Obligatorio |
| Estado | Aprobado/Rechazado | Selección |
| Acción | Opciones disponibles | Según rol |


## Gestión de Salidas de Almacén

### Tablero de Salidas
Muestra los egresos físicos con los siguientes campos:

| Campo | Descripción | Validación |
|-------|-------------|------------|
| N° | Identificador único | Secuencial |
| Oficina | Unidad solicitante | Catálogo oficial |
| N° Pedido | Referencia | Formato: NNN |
| Fecha Solicitud | DD/MM/AAAA | ≤ Fecha actual |
| Fecha Salida | DD/MM/AAAA | ≥ Fecha solicitud |
| Fecha Registro | Timestamp | Automático |
| Estado | Entregado/Pendiente | Predefinido |
| Sucursal | Ubicación física | Obligatorio |

### Flujo de Salidas
1. **Preparación**:
   - Verificación de solicitud aprobada
   - Confirmación de stock disponible
   - Generación de orden de salida

2. **Ejecución**:
   - Registro de fecha de salida real
   - Actualización de estado a "Entregado"
   - Disminución de inventario

3. **Documentación**:
   - Generación de acta de entrega
   - Registro de receptor
   - Archivo de comprobantes

### Ejemplos de Registros
```plaintext
6135 | SEDEDE | 331 | 01/11/2023 | 20/11/2023
Unidad: Desarrollo de Deporte | Estado: ENTREGADO
Sucursal: ALMACEN SEDEDE | Artículos: 5

6132 | Santa Rosa | 58 | 30/12/2023 | 30/12/2023
Unidad: Corregimiento Santa Rosa | Estado: ENTREGADO
Sucursal: ALMACEN CORREGIMIENTO | Artículos: 3
```

## Acciones en Salidas de Almacén

### Botón Eliminar
**Funcionalidad**: Permite anular registros de salida no procesados

**Flujo de Eliminación**:
1. **Validación previa**:
   - Verifica que el registro no tenga entregas asociadas
   - Comprueba permisos del usuario (rol Almacén/Supervisor)

2. **Proceso de anulación**:
   ```plaintext
   ¿Confirmar eliminación de salida?
   ---------------------------------
   N°: 6135 | Pedido: 331
   Fecha: 20/11/2023 | Sucursal: ALMACEN SEDEDE
   
   Motivo: ___________________________
   [Cancelar] [Confirmar Eliminación]
    ```

   ## Acta de Entrega (Impresión)

### Estructura del Documento
```plaintext
GOBIERNO AUTÓNOMO DEPARTAMENTAL DEL BENI
UNIDAD DE ALMACENES MATERIALES Y SUMINISTROS
-------------------------------------------
ACTA DE ENTREGA N° [NRO]
Almacén: [NOMBRE COMPLETO]
Fecha: [DD de Mes de AAAA]

DATOS DE ENTREGA:
| CUENTA | N° SOLICITUD | SOLICITANTE |
|--------|-------------|-------------|
| [Cuenta] | [Número] | [Nombre Completo] |

DETALLE DE ARTÍCULOS:
| N° | Artículo | Código | Presentación | Cantidad | P. Unit. | Total |
|----|----------|--------|-------------|----------|----------|-------|
| 1 | [Nombre] | [COD] | [Unidad] | [X.XX] | [X.XX] | [X.XX] |

TOTAL GENERAL: Bs. [X.XX] ([Literal en palabras])

FIRMAS:
_______________________
Entrega Conforme
_______________________
Recibí Conforme 
```
ACTA DE ENTREGA N° 2
Almacén: ALMACEN CENTRAL GAD-BENI
Fecha: 08 de Diciembre de 2023

DATOS DE ENTREGA:
| CUENTA | N° SOLICITUD | SOLICITANTE |
|--------|-------------|-------------|
| MATERIALES Y SUMINISTROS | 2 | DIRECCION DE COMUNICACION Y PRENSA |

DETALLE:
| N° | Artículo | Código | Presentación | Cantidad | P. Unit. | Total |
|----|----------|--------|-------------|----------|----------|-------|
| 1 | BARBIJOS | 57 | CAJA | 5.00 | 14.50 | 72.50 |
| 2 | ENGRAMPADORA INDUSTRIAL | 74 | PIEZA | 2.00 | 368.00 | 736.00 |

TOTAL: Bs. 808.50 (OCHOCIENTOS OCHO BOLIVIANOS CON CINCUENTA CENTAVOS)

FIRMAS: [2 líneas para firmas]


### Flujo de Solicitudes
1. **Creación**:
   - Seleccionar solicitante (usuarios registrados)
   - Especificar oficina y justificación
   - Adjuntar documentos soporte (PDF/IMG)

2. **Aprobación**:
   - Validación por almacén central
   - Asignación de número de pedido
   - Cambio de estado a "Aprobado"

3. **Ejecución**:
   - Generación de orden de salida
   - Registro de fecha de entrega
   - Actualización de stock


## Vista Detallada de Solicitud

### Pantalla de Detalle
Al seleccionar "Ver" en una solicitud se muestra:

## Proceso de Rechazo de Solicitudes

### Flujo de Rechazo
1. **Seleccionar "Rechazar"** en la vista detallada
2. **Completar formulario**:
   - Motivo del rechazo (campo obligatorio, mínimo 20 caracteres)
   - Adjuntar documentación soporte (opcional)
3. **Confirmación**:
   - Diálogo de verificación muestra resumen
   - Requiere firma electrónica del responsable

```plaintext
DETALLE DE SOLICITUD
---------------------------------
Almacén: [NOMBRE ALMACÉN]
N° Solicitud: [AAA-NNNN/AAAA]
Solicitante: [Nombre + Cargo]
Fecha: [DD/MM/AAAA HH:MM:SS]

DATOS INSTITUCIONALES:
- Dirección: [Nombre completo]
- Unidad: [Unidad específica]

DETALLE DE ARTÍCULOS:
| N° | Partida | Descripción | Unidad | Solicitado | A Entregar |
|----|---------|-------------|--------|------------|------------|
| 1 | [Código] | [Nombre] | [Unidad] | [X.XX] | [X.XX] |


DETALLE DE SOLICITUD
---------------------------------
Almacén: ALMACEN - CORREGIMIENTO SANTA ROSA
N° Solicitud: DCSR-0020/2023
Solicitante: DELIA MOLINA SALVATIERRA - ENCARGADA ALMACEN
Fecha: 24/01/2024 00:00:00

DATOS INSTITUCIONALES:
- Dirección: Corregimiento De Municipio Santa Rosa
- Unidad: Despacho Corregimiento Santa Rosa

DETALLE DE ARTÍCULOS:
| N° | Partida | Descripción | Unidad | Solicitado | A Entregar |
|----|---------|-------------|--------|------------|------------|
| 1 | 3.4.1.10 | ACEITE PARA MOTOR | LITRO | 25.00 | 0 |
| 2 | 3.4.1.10 | ACEITE 20 - 50 | LITRO | 35.00 | 0 |
| 3 | 3.4.1.10 | GRASA 10 KG | KILOS | 10.00 | 0 |
| 4 | 3.4.1.10 | ACEITE HIDRAULICO | BALDE | 1.00 | 0 |


### Ejemplos de Registros
```plaintext
1057 | DELIA MOLINA SALVATIERRA - ENCARGADA ALMACEN
Oficina: Corregimiento Santa Rosa | Pedido: DCSR-0022/2023
Fecha: 24/01/2024 | Estado: Aprobado
Sucursal: ALMACEN CORREGIMIENTO

1050 | JAIME MANSILLA VACA
Oficina: SEDEGES | Pedido: ALM-0030/2023
Fecha: 24/01/2024 | Estado: Entregado
Sucursal: ALMACEN SEDEGES
```

### 1. Registrar Nuevo Egreso
1. **Seleccionar "Nuevo Egreso"**

## Formulario de Creación de Egresos

### Campos Obligatorios
1. **Cabecera**:
   - Sucursal (usuario autenticado)
   - Dirección Administrativa (selección jerárquica)
   - Unidad Administrativa (dependiente de dirección)
   - Modalidad de Compra (catálogo predefinido)

2. **Datos de Pedido**:
   - Número de pedido (autogenerado/formato: NNN)
   - Fecha de solicitud (DD/MM/YYYY)
   - Fecha de egreso (≥ fecha solicitud)

3. **Detalle de Artículos**:
   - Selección de artículo (búsqueda por código/nombre)
   - Presentación (unidad de medida)
   - Cantidad (validación: ≤ stock disponible)
   - Precio unitario (automático/editable)

### Validaciones
| Campo | Regla | Mensaje Error |
|-------|-------|--------------|
| Fechas | Solicitud ≤ Egreso | "Fecha inválida" |
| Cantidad | > 0 y ≤ stock | "Stock insuficiente" |
| Artículo | Existente en catálogo | "Artículo no válido" |

### Ejemplo de Registro
```plaintext
Sucursal: ALMACEN CENTRAL
Dirección: Secretaría de Administración
Unidad: Contrataciones
Modalidad: CONTRATACION MENOR
Pedido: 148 | Fechas: 01/12/2023 - 08/12/2023

Artículos:
1. BARBIJOS (CAJA)
   Stock: 12 | Cantidad: 5 | Precio: 14.50 | Subtotal: 72.50

Total General: Bs. 72.50
```

### Tablero de Salidas

Este tablero muestra los registros de las entregas físicas de materiales (egresos), permitiendo su consulta y gestión.

*   **Filtros:** Opciones para mostrar "Solicitudes", "Salida Almacen" (entregas), o "Eliminadas".
*   **Paginación:** Opciones para mostrar 10, 25, 50, 100 registros por página.

| Columna         | Descripción                                                                 | Ejemplo de Dato (Registro 9860)                               | Origen / Notas                     |
| :-------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------ | :--------------------------------- |
| **Nro°**        | Identificador único del registro de salida/egreso.                          | `9860`                                                        | Secuencial, Automático             |
| **Oficina**     | Unidad administrativa que recibe los materiales. Incluye gestión y dependencia.| `Gestion: 2025` <br/> `Centro de Acogida Niña y Niño Trinidad` <br/> `Servicio Departamental de Gestion Social (SEDEGES - BENI)` | Desde la solicitud aprobada        |
| **Nro Pedido**  | Número de la solicitud de pedido original o referencia interna.             | `55`                                                          | Referencia a la solicitud / Manual |
| **Fecha Sol.**  | Fecha original de la solicitud de pedido.                                   | `21/03/2025`                                                  | Desde la solicitud                 |
| **Fecha Salida**| Fecha efectiva en que los materiales salieron del almacén.                  | `21/03/2025`                                                  | Ingreso manual (DD/MM/AAAA)        |
| **Fecha Reg.**  | Fecha y hora de registro de la salida en el sistema.                        | `29/04/2025 14:28:18` <br/> `(hace 10 horas)`                 | Timestamp automático + Relativo    |
| **Estado**      | Estado de la entrega física.                                                | `Entregado`                                                   | Predefinido (Entregado, Anulado)   |
| **Sucursal**    | Almacén físico desde donde se realiza la entrega.                           | `ALMACEN - SERVICIO DEPARTAMENTAL DE GESTION SOCIAL (SEDEGES)`| Desde la solicitud / Usuario       |
| **Acción**      | Botones para acciones sobre la salida (Ver Detalle, Imprimir Acta, Eliminar). | `[Eliminar]`                                                  | Según rol y estado                 |

### Ejemplos de Registros de Salida

```plaintext
Nro°: 9860
Oficina: Gestion: 2025 / Centro de Acogida Niña y Niño Trinidad / SEDEGES - BENI
Nro Pedido: 55
Fecha Solicitud: 21/03/2025 | Fecha Salida: 21/03/2025 | Fecha Registro: 29/04/2025 14:28:18 (hace 10 horas)
Estado: Entregado
Sucursal: ALMACEN - SERVICIO DEPARTAMENTAL DE GESTION SOCIAL (SEDEGES)
Acción: Eliminar

Nro°: 9859
Oficina: Gestion: 2025 / Unidad De Tesoreria / Secretaria Departamental de Administracion y Finanzas
Nro Pedido: UT-0007/2025
Fecha Solicitud: 24/04/2025 | Fecha Salida: 29/04/2025 | Fecha Registro: 29/04/2025 14:08:17 (hace 11 horas)
Estado: Entregado
Sucursal: ALMACEN - ALMACEN CENTRAL GAD-BENI
Acción: (Ninguna visible)
```