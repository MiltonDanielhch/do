---
sidebar_position: 1
---

# Gestión de Certificados

## Vista General
Módulo para generar, registrar y gestionar diferentes tipos de certificados emitidos por el Gobierno Autónomo Departamental del Beni. Estos pueden ser certificados de trabajo, certificados de no adeudo, u otros documentos oficiales que requieran validación institucional.

## Tablero Principal de Certificados ("Registros")

El tablero principal muestra un listado de todos los certificados generados y registrados en el sistema.

### Funcionalidades Clave del Tablero:

*   **Título:** La sección se identifica comúnmente como "Registros".
*   **Búsqueda:** Campo `Buscar...` para filtrar certificados por Código, CI, Nombre, Registrado Por, etc.
*   **Generación de Nuevo Certificado**: (Implícito) Debe existir un botón o enlace (como "Nuevo Certificado" o "Generar") para iniciar el proceso de creación.
*   **Paginación**: Controles para navegar entre las páginas de resultados si el número de registros es extenso. (Ej: Mostrar X registros por página).

### Estructura de la Tabla de Registros:

La tabla principal presenta la siguiente información para cada certificado:

| Campo            | Descripción                                                     | Tipo               | Ejemplo (Registro ARN24308)        | Notas                                                              |
| :--------------- | :-------------------------------------------------------------- | :----------------- | :--------------------------------- | :----------------------------------------------------------------- |
| **CODIGO**       | Código único alfanumérico asignado al certificado generado.     | Alfanumérico       | `ARN24308`                         | Identificador único del documento.                                 |
| **TIPO**         | Clasificación del certificado.                                  | Texto              | `interno`                          | Diferencia entre tipos (ej. Trabajo, No Adeudo, etc.).             |
| **PRECIO**       | Costo asociado a la emisión del certificado, si aplica.         | Numérico (Decimal) | `0.00`                             | Indica si el certificado tiene un valor monetario.                 |
| **CI**           | Cédula de Identidad de la persona a quien se emite.             | Alfanumérico       | `4196168`                          | Identificador del beneficiario/solicitante.                        |
| **NOMBRE**       | Nombre completo de la persona a quien se emite el certificado.  | Texto              | `ABSALON ROJAS PEREZ`               | Nombre del beneficiario/solicitante.                               |
| **REGISTRADO POR**| Nombre del funcionario que generó o registró el certificado.    | Texto              | `HALDO MAURICIO PEREZ` | Registra quién realizó la operación en el sistema.                 |
| **ACCIONES**     | Botones o iconos para realizar operaciones sobre el registro.   | (Botones/Iconos)   | (Vacío en ejemplos)                | Las acciones (Ver, Imprimir, Anular) pueden variar según permisos. |

## Acciones Comunes (Disponibles por registro)

*   **Ver/Imprimir**: Visualizar el contenido del certificado y/o generar una versión para impresión.
*   **Anular**: Invalidar un certificado emitido. Esta acción requiere permisos especiales y generalmente deja un registro de auditoría.
*   **Editar**: Modificar algún dato del registro. Es menos común para certificados ya finalizados, pero podría aplicar en estados iniciales o para correcciones menores con permisos adecuados.

## Ejemplos de Registros en el Tablero

```plaintext
# Ejemplo 1
CODIGO: ARN24308
TIPO: interno
PRECIO: 0.00
CI: 4196168
NOMBRE: ABSALON PEREZ
REGISTRADO POR: HALDO MAURICIO PEREZ
ACCIONES: (Varía)

# Ejemplo 2
CODIGO: CNM24307
TIPO: interno
PRECIO: 0.00
CI: 2345678
NOMBRE: CAMILA NAVIA MONJE
REGISTRADO POR: HALDO MAURICIO PEREZ
ACCIONES: (Varía)

# Ejemplo 3 (Original)
CODIGO: LOM24135
TIPO: interno
PRECIO: 0.00
CI: 1901006
NOMBRE: LEOPOLDINA PEREZ
REGISTRADO POR: HALDO VACA
ACCIONES: (Varía)
```

## Consideraciones
- Este módulo centraliza la emisión de documentos oficiales tipo certificado.
- El campo "TIPO" es importante para diferenciar los distintos certificados que emite la institución (ej. Certificado de Trabajo, Certificado de Años de Servicio, etc.).
- El campo "PRECIO" sugiere que algunos certificados podrían tener un costo asociado.
- La seguridad es importante para evitar la falsificación de certificados. Podría incluir características como códigos QR o firmas digitales.
- Integración con módulos de:
  - Recursos Humanos (para datos de funcionarios).
  - Tesorería/Recaudaciones (si hay certificados con costo).
  - Gestión Documental.
- Auditoría completa de operaciones (quién generó qué certificado y cuándo).