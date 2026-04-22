---
sidebar_position: 2
---

# Gestión de Denunciantes

## Descripción General

Este módulo permite administrar la información de los **ciudadanos denunciantes** que presentan quejas o denuncias en el Sistema de Transparencia del Gobierno Autónomo Departamental del Beni. El sistema gestiona automáticamente la creación o búsqueda de denunciantes según la información proporcionada.

## Tablero Principal de Denunciantes

El tablero principal ofrece una vista consolidada de todas las personas que han presentado denuncias, permitiendo consulta y gestión.

### Funcionalidades Clave

*   **Lista de Denunciantes:** Ver todos los ciudadanos que han presentado denuncias.
*   **Historial:** Consultar todas las denuncias presentadas por un denunciante.
*   **Datos de Contacto:** Información para seguimiento.

### Estructura de la Tabla

| Campo             | Descripción                                        |
| :---------------- | :------------------------------------------------- |
| ID                | Identificador único                               |
| CI                | Cédula de identidad                               |
| Nombre Completo   | Nombre del denunciante                            |
| Teléfono         | Número de contacto                                |
| Dirección        | Dirección del denunciante                         |
| Denuncias         | Cantidad de denuncias presentadas                  |

## Modelo de Datos

### Campos del Denunciante

| Campo             | Tipo      | Descripción                                        |
| :---------------- | :-------- | :------------------------------------------------- |
| id                | INTEGER   | Identificador único                               |
| ci                | STRING    | Cédula de identidad (para búsqueda)                |
| nombre_completo    | STRING    | Nombre completo del denunciante                   |
| telefono          | STRING    | Número de teléfono                                 |
| direccion         | TEXT      | Dirección del denunciante                         |
| created_at        | TIMESTAMP | Fecha de creación                                 |
| updated_at        | TIMESTAMP | Fecha de última actualización                      |

## Creación/Actualización Automática

El sistema maneja automáticamente los denunciantes:

```php
// En DenunciasController@store_landingpage
$denunciante = Denunciante::firstOrNew(['ci' => $request->ci]);
if (!$denunciante->exists) {
    $denunciante->fill([
        'nombre_completo' => $request->nombre_completo,
        'telefono' => $request->telefono,
        'direccion' => $request->direccion,
    ])->save();
}
```

### Lógica de Funcionamiento

1.  **Denunciante existente:** Si el CI ya está registrado, se reutiliza el perfil existente.
2.  **Nuevo denunciante:** Si el CI no existe, se crea un nuevo registro.
3.  **Denuncia anónima:** Si no se proporciona CI, se crea un registro sin CI.

## Gestión desde Panel Admin

### Ver Detalle de Denunciante

1.  **Acceder a Denunciantes:** En Voyager, navegar a Denunciantes.
2.  **Seleccionar Denunciante:** Hacer clic en el registro deseado.
3.  **Ver Información:** Datos personales y denuncias asociadas.

### Editar Datos de Contacto

1.  **Editar:** En la vista de detalle, hacer clic en "Edit".
2.  **Modificar:** Actualizar teléfono, dirección u otros datos.
3.  **Guardar:** Confirmar los cambios.

### Historial de Denuncias

Cada denunciante puede tener asociadas múltiples denuncias:

```
Denunciante: Juan Pérez López
CI: 1234567
Teléfono: 71123456

Denuncias:
- ID 1: Denuncia contra Carlos Gómez (Delito: Robo) - Estado: En Proceso
- ID 2: Denuncia contra María Rodríguez (Delito: Fraude) - Estado: Cerrada
```

## Casos de Uso

### Caso 1: Denunciante Identificado

```
CI: 1234567
Nombre: Juan Pérez López
Teléfono: 71123456
Dirección: Av. 6 de Agosto #123

El ciudadano presenta una denuncia. El sistema busca por CI y reutiliza
el perfil existente, asociando la nueva denuncia.
```

### Caso 2: Denunciante Nuevo

```
CI: 8765432
Nombre: María García
Teléfono: 71234567
Dirección: Calle Bolívar #456

El ciudadano presenta su primera denuncia. El sistema crea un nuevo
registro de denunciante y lo asocia con la denuncia.
```

### Caso 3: Denuncia Anónima

```
CI: (vacío)
Nombre: Anónimo
Teléfono: -
Dirección: -

El ciudadano decide no identificar. El sistema crea un registro
temporal sin datos de contacto para mantener la trazabilidad.
```

## Estados del Denunciante

| Estado       | Descripción                                                    |
| :----------- | :-------------------------------------------------------------- |
| **Activo**    | Denunciante con datos completos y verificables                  |
| **Parcial**   | Denunciante anónimo o con datos incompletos                     |

## Integración

Los denunciantes se relacionan con:
*   **Denuncias:** Cada denuncia tiene un denunciante asociado.
*   **Panel Admin:** Gestión mediante Voyager.

## Mejores Prácticas

1.  **Verificar datos:** Al atender una denuncia, confirmar datos de contacto.
2.  **Mantener actualizada la información:** Actualizar teléfono y dirección si cambian.
3.  **Documentar historial:** Mantener registro de todas las interacciones.
4.  **Proteger datos:** Respetar la privacidad de la información.