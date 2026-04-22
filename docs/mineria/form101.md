---
sidebar_position: 4
---

# Gestión de Formularios 101 (Declaración Jurada de Ingresos)

## Descripción General

Este módulo permite registrar y gestionar las **Declaraciones Juradas de Ingresos de Minerales** mediante el Formulario 101. Cada formulario documenta el transporte de mineral desde el área de extracción hasta su destino, incluyendo detalles del mineral, transporte y responsables del cargamento.

El Formulario 101 es un documento obligatorio para el transporte legal de minerales en el departamento del Beni.

## Tablero Principal de Formularios

El tablero principal ofrece una vista consolidada de todos los formularios 101 registrados, permitiendo una gestión eficiente y rápida.

### Funcionalidades Clave del Tablero:

*   **Creación de Nuevos Formularios:** Botón para iniciar el registro de una nueva declaración.
*   **Visualización y Paginación:** Opciones para mostrar 25, 50 o 100 registros por página.
*   **Búsqueda:** Campo de búsqueda con funcionalidad de tecla Enter.
*   **Carga Dinámica:** Resultados cargados via AJAX para mejor rendimiento.
*   **Acciones Directas:** Botón "Ver" por registro para acceder al detalle.

### Estructura de la Tabla de Formularios:

La tabla principal muestra la información clave para cada formulario (cargada dinámicamente):

| Columna                | Descripción                                                              |
| :---------------------- | :----------------------------------------------------------------------- |
| **Nro° Formulario**      | Identificador único del formulario (formato: DDMEH-000001).               |
| **Certificado**          | Código COM de la empresa asociada.                                       |
| **Empresa**              | Razón social de la empresa minera.                                        |
| **Tipo Mineral**         | Tipo de mineral transportado.                                            |
| **Peso Neto**             | Peso neto del cargamento (calculado).                                    |
| **Municipio**            | Municipio de origen.                                                     |
| **Fecha**                | Fecha de registro.                                                      |
| **Acciones**             | Botones para ver detalle, imprimir o eliminar.                           |

## Flujo de Trabajo Detallado

### 1. Registrar un Nuevo Formulario 101

1.  **Acceder al Módulo:** Navegar a la sección de Formularios 101 desde el menú.
2.  **Iniciar Creación:** Hacer clic en el botón "Crear".
3.  **Completar Datos del Formulario:**

    **Datos del Certificado:**
    *   **Certificado (COM):** Seleccionar de la lista de certificados activos (búsqueda AJAX por empresa, NIT, etc.).

    **Datos del Mineral:**
    *   **Tipo de Mineral:** Seleccionar de la lista (Ej: Oro, Estaño, etc.).
    *   **Ley del Mineral:** Porcentaje de contenido del mineral valioso.
    *   **Peso Bruto:** Peso total del cargamento.
    *   **Humedad:** Porcentaje de humedad presente.
    *   **Peso Neto:** Peso calculado restando la humedad (automático).
    *   **Lote:** Número de lote del cargamento.

    **Ubicación:**
    *   **Municipio:** Municipio de origen.
    *   **Localidad:** Localidad específica.
    *   **Código Área Minera:** Código del área de extracción.
    *   **Nombre Área Minera:** Nombre descriptivo del área.

    **Datos del Transporte:**
    *   **Medio de Transporte:** Tipo de vehículo (camión, vagoneta, etc.).
    *   **Unidad de Medida:** Unidad de peso utilizada.
    *   **Punto de Origen:** Ubicación de inicio del recorrido.
    *   **Punto Intermedio:** Parada o punto de tránsito (si aplica).
    *   **Punto Final:** Destino del transporte.
    *   **Matrícula:** Número de placa del vehículo.
    *   **Nombre del Conductor:** Nombre completo del chofer.
    *   **Licencia de Conducir:** Número de licencia.
    *   **Nombre del Encargado de Transporte:** Responsable del envío.
    *   **CI del Encargado:** Cédula de identidad del encargado.

    **Observaciones:**
    *   **Observaciones:** Campo opcional para comentarios adicionales.

4.  **Guardar:** Confirmar el registro. El sistema:
    *   Generará automáticamente el código del formulario (formato: `DDMEH-000001`).
    *   Asignará el ID del usuario registrador.
    *   Redirigirá al listado de formularios.

### 2. Ver Detalle del Formulario

1.  **Ubicar el Formulario:** En el tablero principal, localizar el registro deseado.
2.  **Acción "Ver":** Hacer clic en el botón correspondiente.
3.  **Visualizar Detalle:** Se mostrará una pantalla con la información completa organizada en secciones:

    **Cabecera:**
    *   Número de Formulario.
    *   Código COM.
    *   Empresa.
    *   Fecha de registro.

    **Datos del Mineral:**
    *   Tipo de mineral.
    *   Ley, peso bruto, humedad, peso neto.
    *   Lote.

    **Ruta de Transporte:**
    *   Origen, intermedio, destino.
    *   Datos del vehículo y conductor.

### 3. Imprimir Formulario 101

1.  **Ubicar el Formulario:** En el tablero principal o desde la vista de detalle.
2.  **Acción "Imprimir":** Hacer clic en el botón correspondiente.
3.  **Generar PDF:** El sistema genera el documento oficial en formato PDF.

**Contenido del Formulario Impreso:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    FORMULARIO 101                               │
│         DECLARACIÓN JURADA DE INGRESO DE MINERALES              │
├─────────────────────────────────────────────────────────────────┤
│  Nro Formulario: DDMEH-000001                                   │
│  Fecha: 22/04/2024                                              │
├─────────────────────────────────────────────────────────────────┤
│  EMPRESA: Minera del Norte S.A.                                 │
│  NIT: 4186508012    |    NIM: 1020304050                        │
│  Código COM: COM-000001                                         │
├─────────────────────────────────────────────────────────────────┤
│  DATOS DEL MINERAL                                               │
│  ────────────────────────────────────────────────────────────── │
│  Tipo: Oro        | Ley: 85%     | Peso Bruto: 1000 kg         │
│  Humedad: 5%      | Peso Neto: 950 kg    | Lote: L-2024-001    │
├─────────────────────────────────────────────────────────────────┤
│  ÁREA MINERA                                                      │
│  Código: AM-001    | Nombre: Mina El Dorado                     │
│  Municipio: Riberalta    | Localidad: Comunidad Santa Rosa     │
├─────────────────────────────────────────────────────────────────┤
│  DATOS DEL TRANSPORTE                                            │
│  ────────────────────────────────────────────────────────────── │
│  Medio: Camión    | Matrícula: 1234ABC    | U/M: Kilogramo      │
│  Conductor: Juan Pérez    | Licencia: 1234567                   │
│  Origen: Mina El Dorado                                          │
│  Intermedio: -                                                  │
│  Destino: Trinidad                                              │
├─────────────────────────────────────────────────────────────────┤
│  ENCARGADO DEL TRANSPORTE                                        │
│  Nombre: Carlos López    | CI: 12345678                         │
├─────────────────────────────────────────────────────────────────┤
│  [QR Code]                                                       │
└─────────────────────────────────────────────────────────────────┘
```

**Elementos del formulario:**
*   **Título oficial:** Formulario 101 - Declaración Jurada.
*   **Identificación:** Número único y fecha.
*   **Datos de empresa:** Información del operador minero.
*   **Datos del mineral:** Características físico-químicas.
*   **Ruta:** Trayecto completo del transporte.
*   **Código QR:** Para verificación y trazabilidad.

### 4. Búsqueda y Filtrado

*   **Búsqueda por empresa:** Buscar por razón social, representante o NIT.
*   **Búsqueda por certificado:** Buscar por código COM.
*   **Búsqueda por mineral:** Buscar por tipo de mineral.
*   **Búsqueda por código:** Buscar por número de formulario.

### 5. Eliminación de Formularios

*   **Importante:** La eliminación es un proceso delicado.
*   El sistema realiza **eliminación lógica** con registro del usuario eliminador.
*   Los formularios eliminados no aparecerán en el listado normal.

## Cálculos Automáticos

El sistema calcula automáticamente:

```php
// Cálculo de peso neto
$pesoNeto = $pesoBruto * (1 - $humedad / 100);
```

**Ejemplo:**
*   Peso Bruto: 1000 kg
*   Humedad: 5%
*   Peso Neto: 1000 × (1 - 0.05) = 950 kg

## Códigos de Formulario

El sistema genera automáticamente códigos únicos:

```
DDMEH-000001
│││││││││││││└── Número secuencial (6 dígitos, padded con ceros)
│││││││││││││└─ Guión
││││││││││││└── Iniciales DDMEH (Dirección Departamental de Minería, Energía e Hidrocarburos)
```

## Estados del Formulario

| Estado           | Descripción                                                    |
| :--------------- | :-------------------------------------------------------------- |
| **Registrado**    | Formulario ingresado en el sistema.                             |
| **Eliminado**     | Formulario dado de baja (eliminación lógica).                   |

## Permisos de Usuario

*   **Administrador:** Acceso completo, puede crear, ver, imprimir y eliminar.
*   **Funcionario:** Puede crear y visualizar formularios.
*   **Empresa:** Acceso limitado a sus propios formularios (vinculados a sus certificados).

## Restricciones por Rol

Los funcionarios tienen restricciones especiales:

```php
// En Form101Controller@list
->whereRaw(Auth::user()->role->name == 'funcionario' ? 'company_id = '.Auth::user()->company_id : 1);
```

Esto significa que los funcionarios solo pueden ver los formularios de su propia empresa.

## Mejores Prácticas

1.  **Verificar certificado:** Antes de crear el formulario, asegurar que el certificado esté vigente.
2.  **Datos exactos:** Los datos de peso y humedad deben ser exactos para cumplimiento legal.
3.  **Documentación del transporte:** Mantener documentación de respaldo del vehículo y conductor.
4.  **Trazabilidad:** Cada formulario QR contiene información para verificación en puntos de control.