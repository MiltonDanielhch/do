---
sidebar_position: 1
---

# Gestión de Paquetes Especiales

## Descripción General

Este módulo permite administrar los **paquetes turísticos especiales** del Ecoalbergue Departamental del Beni. Los paquetes ofrecen promociones que combinan alojamiento con servicios adicionales a precios especiales, incentivando la reserva directa.

## Tablero Principal de Paquetes

El tablero principal ofrece una vista consolidada de todos los paquetes disponibles.

### Funcionalidades Clave

*   **CRUD de Paquetes:** Crear, leer, actualizar y eliminar paquetes.
*   **Precios Promocionales:** Definir precio normal y precio especial.
*   **Período de Validez:** Control de fechas de vigencia.
*   **Gestión de Contenido:** Descripción e imágenes del paquete.

### Estructura de la Tabla

| Campo                | Descripción                                        |
| :------------------- | :------------------------------------------------- |
| ID                   | Identificador único                               |
| Nombre               | Nombre del paquete                                 |
| Precio Normal        | Precio sin descuento                               |
| Precio Especial      | Precio promocional                                  |
| Fecha Validez        | Período de vigencia                                |
| Estado               | Activo/Inactivo                                    |

## Modelo de Datos

### Campos del Paquete

| Campo                | Tipo      | Descripción                                        |
| :------------------- | :-------- | :------------------------------------------------- |
| id                   | INTEGER   | Identificador único                               |
| name                 | STRING    | Nombre del paquete                                |
| description          | TEXT      | Descripción del paquete                           |
| price_normal         | DECIMAL   | Precio regular                                    |
| price_special        | DECIMAL   | Precio promocional                                |
| valid_date            | DATE      | Fecha de validez                                 |
| includes             | TEXT      | Servicios incluidos                              |
| images               | JSON      | Rutas de imágenes                                 |
| status               | STRING    | Estado                                           |
| created_at           | TIMESTAMP | Fecha de creación                                |
| updated_at           | TIMESTAMP | Fecha de última actualización                      |

## Portal Público

### Listado de Paquetes

**Ruta:** `/paquetes-especiales`

**Características:**
*   Diseño en cards con imagen principal.
*   Precios normal y especial claramente diferenciados.
*   Indicador de descuento.
*   Enlace a detalle del paquete.

**Ejemplo de vista:**

```
┌─────────────────────────────────────────────┐
│  PAQUETES ESPECIALES                        │
├─────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌─────────────────┐│
│  │      [Imagen]       │  │    [Imagen]     ││
│  │                     │  │                 ││
│  │   PACK DESCRIPCIÓN  │  │  PACK DESCRIP.  ││
│  │  Normal: Bs. 150    │  │  Normal: Bs. 200 ││
│  │  Especial: Bs. 100  │  │  Especial: Bs.150││
│  │  [Ahorra 33%]       │  │  [Ahorra 25%]   ││
│  │      [Ver más]      │  │      [Ver más]  ││
│  └─────────────────────┘  └─────────────────┘│
└─────────────────────────────────────────────┘
```

### Detalle de Paquete

**Ruta:** `/paquetes-especiales/{id}`

**Información mostrada:**
*   Nombre del paquete.
*   Imagen principal.
*   Descripción completa.
*   Servicios incluidos.
*   Precio normal vs especial.
*   Fecha de validez.
*   Botón de reserva o contacto.

**Ejemplo de detalle:**

```
┌─────────────────────────────────────────────┐
│  PAQUETE FIN DE SEMANA                      │
├─────────────────────────────────────────────┤
│  [Imagen Principal]                          │
│  [Galería de imágenes]                       │
│                                             │
│  DESCRIPCIÓN                                │
│  Disfruta un fin de semana relajante en    │
│  nuestro ecoalbergue con todas las          │
│  comodidades.                                │
│                                             │
│  INCLUYE                                    │
│  • 2 noches en Suite Junior                 │
│  • Desayuno continental diario              │
│  • Acceso a piscina y áreas verdes          │
│  • Tour guiado por la naturaleza            │
│                                             │
│  PRECIOS                                    │
│  Normal: Bs. 300                            │
│  Especial: Bs. 250                          │
│  [Ahorra Bs. 50!]                           │
│                                             │
│  Válido hasta: 30/06/2024                   │
│                                             │
│  [Solicitar Reserva]                        │
└─────────────────────────────────────────────┘
```

## Cálculo de Descuento

El sistema calcula automáticamente el porcentaje de ahorro:

```php
$descuento = (($price_normal - $price_special) / $price_normal) * 100;
```

**Ejemplo:**
```
Precio Normal: Bs. 150
Precio Especial: Bs. 100
Ahorro: (150 - 100) / 150 * 100 = 33.33%
```

## Gestión desde Panel Admin

### Crear Nuevo Paquete

1.  **Acceder:** Voyager > Paquetes > Add New.
2.  **Completar Datos:**
    *   Nombre del paquete.
    *   Descripción detallada.
    *   Precio normal.
    *   Precio especial.
    *   Fecha de validez.
    *   Servicios incluidos.
3.  **Cargar Imágenes:** Agregar fotos del paquete.
4.  **Guardar:** Confirmar la creación.

### Editar Paquete

1.  **Seleccionar:** En la lista, hacer clic en "Edit".
2.  **Modificar:** Actualizar datos necesarios.
3.  **Guardar Cambios:** Confirmar modificaciones.

### Estados del Paquete

| Estado       | Descripción                                                    |
| :----------- | :-------------------------------------------------------------- |
| **Activo**    | Paquete visible y disponible para reserva                     |
| **Inactivo**  | Paquete no disponible temporalmente                            |
| **Vencido**   | Paquete cuya fecha de validez ha pasado                       |

## Campos Detallados

### Servicios Incluidos

El campo "includes" lista los servicios incluidos:

```
• 2 noches de alojamiento
• Desayuno buffet
• Almuerzo incluido
• Acceso ilimitado a piscina
• Wi-Fi gratuito
• Estacionamiento
• Tour por la naturaleza
```

### Fecha de Validez

Controla cuándo está disponible la promoción:

*   **Fecha específica:** Válido solo un día.
*   **Rango de fechas:** Válido en un período.
*   **Sin fecha:** Siempre disponible hasta desactivar.

## Integración con Habitaciones

Los paquetes pueden incluir diferentes tipos de habitaciones:

```
Paquete "Esencia del Beni"
├── Suite Junior (2 noches)
├── Suite Master (1 noche)
└── Habitación Standard (3 noches)
```

## Comparativa Visual

El portal muestra claramente la diferencia:

```
┌─────────────────────────────────┐
│  DESDE Bs. 250                  │
│  (antes Bs. 300)                │
│  ────────────────              │
│  Ahorra Bs. 50                  │
│  (17% de descuento)             │
└─────────────────────────────────┘
```

## Estadísticas de Paquetes

El sistema puede mostrar:
*   Paquetes más vendidos.
*   Ingresos por paquete.
*   Tasa de conversión.

## Mejores Prácticas

1.  **Promociones atractivas:** Ofrecer descuentos significativos.
2.  **Descripciones claras:** Detallar exactamente qué incluye.
3.  **Imágenes appealing:** Usar fotos de alta calidad.
4.  **Fechas actualizadas:** Mantener vigencia correcta.
5.  **Límite de disponibilidad:** Indicar si hay límite de cupos.