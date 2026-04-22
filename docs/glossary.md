---
sidebar_position: 100
---

# Glosario de Términos

Este glosario contiene definiciones de los términos técnicos y abbreviations utilizados en los sistemas del Gobierno Autónomo Departamental del Beni.

---

## Términos Generales

### G.A.D. Beni
**Gobierno Autónomo Departamental del Beni.** Entidad gubernamental que administra el departamento del Beni en Bolivia.

### Voyager
Panel de administración para Laravel que proporciona CRUD visual para bases de datos.

### SoftDeletes
Patrón de eliminación donde los registros no se borran físicamente, sino que se marcan con un timestamp `deleted_at`.

### BREAD
Acronismo para Browse, Read, Edit, Add, Delete - las operaciones CRUD estándar.

### Middleware
Filtro que procesa requests antes de que lleguen al controlador.

---

## Sistema MAMORÉ

### AFP
**Administradora de Fondos de Pensiones.** Entidad que gestiona los fondos de jubilación.

### Planilla
Documento que contiene el detalle de pagos a empleados (sueldos, deducciones, etc.).

### Aguinaldo
Beneficio social equivalente a un mes de salary pagado antes de Navidad.

### Bono de Antigüedad
Beneficio adicional basado en los años de servicio del trabajador.

### Contrato Eventual
Contrato por tiempo determinado para trabajos específicos.

### Consultor de Línea
Trabajador bajo contrato de consultoria con relación de dependencia.

### Partida Presupuestaria
Código que identifica una categoría específica de gasto en el presupuesto.

### Bóveda
Cuenta bancaria especial para gestionar recursos financieros.

---

## Sistema SISCOR

### Correspondencia
Documentos oficiales entrantes y salientes de una institución.

### Hoja de Ruta
Documento que identifica y rastrea un trámite o expediente.

### Derivación
Acción de enviar un documento a otra unidad o persona para su atención.

### Persona Externa
Persona que no es funcionario pero puede recibir o enviar correspondencia.

### Vía de Derivación
Ruta predefinida por la que fluye un tipo de documento.

### Estados
*   **Recibido:** Documento acaba de ingresar
*   **En Proceso:** Siendo atendido
*   **Derivado:** Enviado a otra unidad
*   **Atendido:** Proceso completado
*   **Archivado:** Almacenado permanentemente

---

## Sistema ALMACÉN

### Stock
Cantidad disponible de un artículo en almacén.

### Ingreso
Entrada de productos al almacén (compra, donación).

### Egreso
Salida de productos del almacén (despacho, préstamo).

### Partida
Código presupuestario que clasifica los gastos.

### Modalidad de Compra
Tipo de proceso de adquisición:
*   Contratación Menor
*   Compra Directa
*   Licitación Pública
*   Contratación por Excepción

### Acta de Recepción
Documento que certifica la recepción de materiales.

### Kardex
Registro detallado de movimientos de un artículo.

---

## Sistema MINERÍA

### C.O.M.
**Certificado de Operador Minero.** Documento que autoriza a una empresa para operar en actividades mineras.

### NIM
**Número de Identificación Minera.** Identificador único asignado a operaciones mineras.

### DDMEH
**Dirección Departamental de Minería, Energía e Hidrocarburos.**

### Formulario 101
Declaración Jurada de Ingresos de Minerales que documenta el transporte de mineral.

### Peso Neto
Peso del mineral después de restar la humedad: `Peso Neto = Peso Bruto × (1 - Humedad%)`

### Código COM
Código único del certificado de operador minero (formato: COM-000001).

---

## Sistema IMPUESTOS

### UFV
**UnidadFnanciera de Valor.** Unidad de medida usada para cálculos de impuestos en Bolivia.

### Alícuota
Porcentaje aplicado sobre la base imponible para calcular el impuesto.

### Base Imponible
Cantidad sobre la cual se aplica el porcentaje de impuesto.

### Gestión Fiscal
Período contable de un año (del 1 de enero al 31 de diciembre).

### Certificado de No Adeudar
Documento que certifica que un contribuyente no tiene deudas pendientes.

---

## Sistema TRANSPARENCIA

### Denuncia
Reporte de un ciudadano sobre irregularidades o posibles delitos.

### Denunciante
Persona que presenta una denuncia (puede ser anónima).

### Delito
Descripción del hecho irregular reportado.

### Evidencia
Documentos o imágenes adjuntas como prueba.

---

## Sistema AUDITORÍA

### Informe de Auditoría
Documento que presenta los hallazgos de una auditoría realizados por la controllaría.

### Gestión
Período de un año de gestión gubernamental.

### Funcionario
Persona que labora en el gobierno departamental.

---

## Sistema TRANSPORTE

### Asociado
Miembro de una asociación de transportistas.

### Membresía
Pertenencia activa de un asociado a una organización.

### QR Code
Código de barras bidimensional para identificación rápida.

### Placa
Número de identificación vehicular.

---

## Sistema ECOALBERGUE

### Habitación
Unidad de alojamiento en el ecoalbergue.

### Paquete Especial
Oferta que combina servicios a precio promocional.

### Blog/Post
Artículo de noticias o información publicado en el portal.

### Galería
Colección de fotografías organizadas por álbum.

---

## Acrónimos Comunes

| Acrónimo | Significado |
|----------|-------------|
| CRUD | Create, Read, Update, Delete |
| API | Application Programming Interface |
| URL | Uniform Resource Locator |
| SQL | Structured Query Language |
| CI | Cédula de Identidad |
| NIT | Número de Identificación Tributaria |
| VPN | Virtual Private Network |
| SSL | Secure Sockets Layer |
| DNS | Domain Name System |
| CDN | Content Delivery Network |
| PWA | Progressive Web App |
| SEO | Search Engine Optimization |
| UI | User Interface |
| UX | User Experience |

---

## Estados Comunes en Sistemas

| Estado | Descripción |
|--------|-------------|
| **Activo** | Habilitado para uso |
| **Inactivo** | Deshabilitado temporalmente |
| **Eliminado** | Removido con SoftDeletes |
| **Vigente** | Dentro del período de validez |
| **Vencido** | Pasada la fecha límite |
| **Pendiente** | Aguardando acción |
| **Aprobado** | Aceptado/certificado |
| **Rechazado** | No aceptado |
| **Anulado** | Cancelado sin validez |

---

## Tecnologías

| Tecnología | Descripción |
|-----------|-------------|
| **Laravel** | Framework PHP para desarrollo web |
| **PHP 8.x** | Lenguaje de programación del backend |
| **MySQL 8.0** | Sistema de gestión de bases de datos |
| **Voyager** | Panel admin para Laravel |
| **Nginx** | Servidor web |
| **Docker** | Plataforma de contenedores |
| **Coolify** | Plataforma de despliegue |
| **Docusaurus** | Framework para documentación |

---

*Este glosario se actualiza regularmente. Si encuentras un término que no está definido, contacta al equipo de soporte.*