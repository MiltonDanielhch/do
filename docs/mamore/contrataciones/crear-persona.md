---
sidebar_position: 1
---

# Crear Persona (Añadir Persona)

## Propósito

Este formulario permite registrar los datos personales de nuevos individuos (funcionarios, contratistas, etc.) en el sistema MAMORÉ del Gobierno Autónomo Departamental del Beni, paso previo y necesario para la gestión de contratos y otros procesos relacionados.

## Ruta de Acceso

[**Contrataciones → Datos Personales → Crear**](https://mamore.beni.gob.bo/admin/people/create) (o ruta similar que lleve al formulario "Añadir Persona")

## Campos del Formulario

El formulario se organiza en secciones para facilitar el ingreso de datos:

### Información Personal Básica

*   **Lugar de nacimiento:** (Desplegable) Selección de la ciudad o localidad de nacimiento.
    *   *Acción relacionada:* Posibilidad de [crear nueva ciudad](https://mamore.beni.gob.bo/admin/cities/create) si no existe en la lista.
    *   *Validación:* Requerido.
*   **Nombre(s):** (Texto) Nombres completos de la persona, sin abreviaturas.
    *   *Validación:* Requerido.
*   **Apellidos:** (Texto) Apellidos completos de la persona.
    *   *Validación:* Requerido.
*   **CI:** (Texto) Cédula de Identidad.
    *   *Formato:* Numérico, puede incluir extensión alfanumérica (Ej: `1234567`, `4172732BN`).
    *   *Validación:* Requerido, formato específico, verificación de duplicados.
*   **Profesión:** (Texto) Ocupación o título profesional principal.
    *   *Validación:* Opcional.
*   **Telefono/Celular:** (Texto) Número de contacto principal.
    *   *Validación:* Requerido, formato numérico (mínimo 7-8 dígitos).
*   **Género:** (Desplegable) Selección del género de la persona.
    *   *Validación:* Requerido.
*   **Fecha de nacimiento:** (Selector de Fecha)
    *   *Formato:* `dd/mm/aaaa`.
    *   *Validación:* Requerido, fecha válida.
*   **Email:** (Texto) Dirección de correo electrónico personal o laboral.
    *   *Nota:* Idealmente debe coincidir con el registrado en SIGEP si aplica.
    *   *Validación:* Requerido, formato de email válido.

### Información Laboral y de Seguridad Social

*   **AFP:** (Desplegable/Texto fijo) Administradora de Fondos de Pensiones.
    *   *Nota:* Actualmente puede estar fijo en "Gestora".
    *   *Validación:* Requerido.
*   **Nua/Cua:** (Texto) Número Único de Afiliado o Código Único de Asegurado.
    *   *Validación:* Requerido.
*   **Caja de Salud:** (Desplegable) Entidad aseguradora de salud.
    *   *Valor por defecto:* Puede ser "CORDES".
    *   *Validación:* Requerido.
*   **Número de cuenta:** (Texto) Número de cuenta bancaria para pagos.
    *   *Nota:* Debe coincidir con la registrada en SIGEP si aplica. Ingresar sin espacios ni guiones.
    *   *Validación:* Requerido.

### Información Adicional

*   **Estado civil:** (Desplegable) Situación civil actual.
    *   *Validación:* Requerido.
*   **Dirección:** (Texto) Domicilio actual de la persona.
    *   *Validación:* Opcional o requerido según configuración.

### Documentación Adjunta

*   **Fotografía:** (Carga de archivo) Imagen tipo carnet de la persona.
    *   *Formatos aceptados:* JPG, PNG.
    *   *Restricciones:* Tamaño máximo (ej. 2MB), resolución recomendada (ej. 200x200 px).
    *   *Validación:* Requerido.

### Información de Registro (Automática)

*   **Registrado por:** (Texto informativo) Muestra el usuario que está realizando el registro (Ej: `Milton`). *Este campo generalmente no es editable por el usuario.*

## Validaciones Clave

1.  **Campos Obligatorios:** Todos los campos marcados como requeridos deben ser completados.
2.  **Formatos Específicos:** Se valida el formato correcto para CI, Teléfono, Email, Fecha de Nacimiento, NUA/CUA, Número de cuenta.
3.  **Duplicidad de CI:** El sistema verifica que el número de CI no esté previamente registrado.
4.  **Fecha Válida:** La fecha de nacimiento debe ser una fecha coherente y posible.
5.  **Fotografía:** Se requiere adjuntar una fotografía que cumpla con los requisitos.

## Proceso de Registro Sugerido

1.  **Verificación Previa:** Antes de iniciar, buscar si la persona ya existe en el sistema usando el número de CI.
2.  **Completar Formulario:** Llenar todos los campos obligatorios y opcionales relevantes, asegurando la exactitud de los datos.
3.  **Adjuntar Fotografía:** Subir una fotografía clara y reciente de la persona.
4.  **Validación Cruzada:** Comparar los datos ingresados con la documentación física original (CI, certificados, etc.).
5.  **Guardar:** Hacer clic en el botón "Guardar" o "Crear". El sistema realizará las validaciones.
6.  **Confirmación:** Si todo es correcto, el sistema mostrará un mensaje de éxito y asignará un ID único a la persona.

## Consideraciones Importantes

*   La **precisión** de los datos es fundamental, especialmente CI, Nombres, Apellidos, NUA/CUA y Número de Cuenta, ya que impactan en contratos y pagos.
*   La **fotografía** debe ser clara y permitir la identificación de la persona.
*   Los datos como **Fecha de registro** y **Usuario que registró** se guardan automáticamente por el sistema para auditoría.
*   El **Estado** inicial de la persona (ej. "Sin contrato") se asigna automáticamente al crear el registro.

## Ejemplo de Datos para Registro

```plaintext
Lugar de nacimiento: SANTISIMA TRINIDAD
Nombre(s): Celia
Apellido(s): Celia
CI: 12345678*
Profesión: Estudiante
Telefono/Celular: 75344723
Género: Femenino
Fecha de nacimiento: 01/06/1996
Email: celia.ejemplo@correo.com
AFP: Gestora
Nua/Cua: 0987654321
Caja de Salud: CORDES
Estado civil: Soltera
Número de cuenta: 10000012345678
Dirección: Av. Principal #123
(Fotografía adjunta)
```
