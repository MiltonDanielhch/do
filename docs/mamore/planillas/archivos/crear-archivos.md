---
sidebar_position: 1
---

# Añadir Archivos de Planilla

## Vista General
Formulario diseñado para la carga y asociación de documentos digitales a las planillas de pagos (sueldos, aguinaldos, etc.) gestionadas en el sistema del Gobierno Autónomo Departamental del Beni.

## Campos del Formulario

Los siguientes campos deben ser completados para añadir un archivo:

-   **Tipo de dirección administrativa**: Selección de la categoría institucional (ej. "Secretaría", "Sub Gobernación"). (Selector desplegable)
-   **Dirección administrativa**: Selección de la unidad organizacional específica a la que pertenece la planilla. (Selector desplegable, dependiente del anterior)
-   **Periodo**: Mes y año al que corresponde la planilla (formato: MM/AAAA). (Campo de texto o selector de mes/año)
-   **Tipo de planilla**: Selección del tipo de planilla a la que se asocia el archivo (ej. "Permanente", "Eventual"). (Selector desplegable)
-   **Tipo de archivo**: Selección de la naturaleza del documento que se está cargando. Las opciones comunes incluyen:
    *   Biométrico (registros de asistencia)
    *   RC-IVA (documentos tributarios)
    *   Comprobantes (vouchers de pago bancario)
    *   Planilla Firmada
    *   Anexos (otra documentación de respaldo)
    (Selector desplegable)
-   **Archivo**: Botón para seleccionar el archivo desde el dispositivo local. Inicialmente muestra el texto "No se ha seleccionado ningún archivo". (Campo de tipo archivo)

## Proceso de Carga

1.  Seleccionar el **Tipo de dirección administrativa**.
2.  Seleccionar la **Dirección administrativa** correspondiente.
3.  Especificar el **Periodo** (mes y año) de la planilla.
4.  Seleccionar el **Tipo de planilla**.
5.  Elegir el **Tipo de archivo** que se va a cargar.
6.  Hacer clic en el botón **Archivo** y seleccionar el documento deseado en el explorador de archivos.
7.  Verificar que todos los datos sean correctos.
8.  Confirmar la carga (generalmente mediante un botón "Guardar", "Cargar" o "Aceptar").

## Validaciones

| Campo   | Validación                                   | Mensaje de Error Típico                 |
| :------ | :------------------------------------------- | :-------------------------------------- |
| Todos   | Campos obligatorios no deben estar vacíos    | "Este campo es requerido"               |
| Archivo | Tamaño máximo permitido (ej. 5MB, 10MB)      | "El archivo excede el tamaño máximo"    |
| Archivo | Formato de archivo permitido (PDF, JPG, PNG) | "Formato de archivo no soportado"       |
| Periodo | Formato válido (ej. MM/AAAA o YYYYMM)        | "Formato de periodo inválido"           |
| General | No duplicar archivo para mismo periodo/tipo  | "Ya existe un archivo de este tipo..." |

## Consideraciones
-   Una vez cargado, el archivo queda vinculado a la planilla específica (identificada por dirección, periodo y tipo).
-   La acción de cargar archivos requiere que el usuario tenga los permisos adecuados en el sistema.
-   Se integra con los módulos de:
    *   Gestión de Planillas
    *   Gestión Documental
    *   Tesorería (para comprobantes de pago)
-   El sistema debe registrar quién cargó el archivo y cuándo (auditoría).

## Ejemplo de Datos para Carga
```plaintext
Tipo dirección administrativa: Secretaría Departamental
Dirección administrativa: SECRETARÍA GENERAL DE GOBERNACIÓN
Periodo: 01/2025
Tipo planilla: Permanente
Tipo archivo: RC-IVA
Archivo seleccionado: Formulario_110_RCIVA_Enero_2025.pdf