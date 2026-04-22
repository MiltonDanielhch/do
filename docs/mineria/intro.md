---
sidebar_position: 1
---

# Sistema de Gestión de Minería - Dirección Departamental de Minería, Energía e Hidrocarburos

## Introducción

Bienvenido a la documentación del **Sistema de Gestión de Minería** del Gobierno Autónomo Departamental del Beni. Esta plataforma es la herramienta centralizada para la administración y control de los **Certificados de Operador Minero (C.O.M.)** y la **Declaración Jurada de Ingresos de Minerales (Formulario 101)**.

El sistema está diseñado para registrar y controlar las operaciones mineras legales en el departamento del Beni, asegurando la **trazabilidad, transparencia y cumplimiento normativo** en el sector minero departamental.

## Propósito y Beneficios

*   **Legalidad:** Garantiza que solo operadores mineros con certificado vigente operen en el departamento.
*   **Trazabilidad:** Registra cada transporte de mineral desde la extracción hasta su destino final.
*   **Transparencia:** Proporciona información auditable sobre operaciones mineras.
*   **Control Departamental:** Facilita la supervisión de actividades mineras por parte de la Dirección de Minería.
*   **Eficiencia:** Agiliza la emisión de certificados y declaraciones juradas.

## Funcionalidades Clave

El sistema se organiza en los siguientes módulos principales:

*   **Gestión de Empresas (`companies`):**
    *   Registro de empresas mineras con sus datos legales.
    *   Asignación de Código de Operador Minero (COM).
    *   Gestión de representantes legales y contactos.
    *   Creación automática de usuarios del sistema para empresas.
*   **Gestión de Certificados (`certificates`):**
    *   Emisión de Certificados de Operador Minero (C.O.M.).
    *   Seguimiento de vigencia de certificados.
    *   Impresión de certificados oficiales con código QR de verificación.
    *   Vinculación con empresas y firmas autorizantes.
*   **Gestión de Formularios 101 (`form101s`):**
    *   Declaración jurada de ingresos de mineral.
    *   Registro detallado del transporte (origen, intermedio, destino).
    *   Control de peso bruto, humedad y peso neto.
    *   Seguimiento por tipo de mineral.
*   **Gestión de Firmas (`signatures`):**
    *   Catálogo de firmas autorizadas para certificados.
    *   Control de vigencia de firmas.
*   **Catálogos de Apoyo:**
    *   Tipos de minerales registrados.
    *   Códigos utilizados en el sistema.

## Audiencia Destinataria

Esta documentación está dirigida a:

*   **Personal de la Dirección de Minería:** Encargados de emitir certificados y revisar declaraciones.
*   **Empresas Mineras:** Operadores que requieren registrar sus actividades y obtener certificados.
*   **Transportistas:** Conductores que presentan Formularios 101 en puntos de control.
*   **Auditores:** Revisan la trazabilidad de operaciones mineras.
*   **Administradores del Sistema:** Gestionan la configuración y seguridad.

## Flujo General del Sistema

```
┌─────────────┐     ┌──────────────┐     ┌────────────────┐
│   EMPRESA   │────▶│ CERTIFICADO  │────▶│ FORMULARIO 101 │
│  MINERA     │     │   (C.O.M.)   │     │  (Declaración) │
└─────────────┘     └──────────────┘     └────────────────┘
      │                    │                      │
      ▼                    ▼                      ▼
  Registro de         Emisión de           Registro de
  datos legales      certificado           ingresos de
                     con vigencia          mineral
```

## Integración con Otros Sistemas

El sistema de Minería está preparado para integrarse con:

*   **WhatsApp API:** Envío de notificaciones a empresas y transportistas.
*   **SISCOR:** Sistema de correspondencia institucional.
*   **Mamoré:** Para gestión de recursos humanos y finanzas.

---