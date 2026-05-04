---
sidebar_position: 3
---

# Gestión de Servicios y Sistemas

## Descripción General

Este módulo describe los **servicios y sistemas** enlazados desde el portal beni.gob.bo. El sitio redirecte o proporciona acceso a los diferentes sistemas gubernamentales del Gobierno Autónomo Departamental del Beni.

## Sistemas Disponibles

### 1. Gaceta

Portal de publicaciones legales oficiales.

**URL:** `https://gaceta.beni.gob.bo/`

**Descripción:** Publicación y consulta de Gacetas Oficiales, Decretos y Resoluciones del gobierno departamental.

**Acceso:**
- Directo desde banner principal en Inicio.
- Menú Servicios > Gaceta.

```
┌──────────────────────────────────────────────────┐
│  GACETA                                      │
│  ┌────────────────────────────────────────┐  │
│  │ 📄 Gacetas Oficiales                 │  │
│  │ 📜 Decretos                        │  │
│  │ 📋 Resoluciones                   │  │
│  └────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

### 2. SISCOR

Sistema de Correspondencia y Seguimiento de Trámites.

**URL:** `https://siscor.beni.gob.bo/admin`

**Descripción:** Gestión digital del flujo documental y trámites institucionales.

**Acceso:**
- Menú Servicios > SISCOR (Seguimiento de Trámites).

```
┌──────────────────────────────────────────────────┐
│  SISCOR                                    │
│  ┌────────────────────────────────────────┐  │
│  │ 📨 Bandeja de Entrada                │  │
│  │ 📤 Bandeja de Salida                 │  │
│  │ 🔍 Buscar Trámite                  │  │
│  └────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

### 3. Transparencia

Portal de transparencia y denuncias ciudadanas.

**URL:** `https://transparencia.beni.gob.bo/`

**Descripción:** Sistema de recepción de denuncias ciudadanas y acceso a información pública.

**Acceso:**
- Menú Transparencia.
- Section en Inicio.

### 4. Almacén

Sistema de control de inventarios.

**URL:** `https://almacen.beni.gob.bo/admin`

**Descripción:** Control de inventarios y bienes de consumo del gobierno departamental.

**Acceso:**
- Menú Más Sistemas > Sistema de Almacén.

### 5. Minería

Sistema de gestión minera.

**URL:** `https://mineria.beni.gob.bo/admin`

**Descripción:** Gestión de Certificados de Operador Minero (C.O.M.) y Formularios 101.

**Acceso:**
- Menú Más Sistemas > Sistema de Minería.

### 6. SIRETRA

Sistema de Registro para el Transporte.

**URL:** `https://transporte.beni.gob.bo/`

**Descripción:** Registro y gestión de vehículos de transporte público.

**Acceso:**
- Menú Más Sistemas > SIRETRA.

## Ubicación en el Portal

### Menú Principal

```
┌──────────────────────────────────────���───────────┐
│  SERVICIOS                                  │
│  ├── Gaceta                                  │
│  └── SISCOR (Seguimiento de Tramites)        │
│                                              │
│  TRANSPARENCIA                               │
│  └── Transparencia Beni                       │
│                                              │
│  MÁS SISTEMAS                                │
│  ├── Sistema de Almacen                      │
│  ├── Sistema de Mineria                     │
│  └── SIRETRA (Sistema de Registro para       │
│       el Transporte)                         │
└──────────────────────────────────────────────────┘
```

### Sección en Inicio

El portal muestra los servicios en forma de cards:

```html
<!-- Ejemplo de estructura -->
<section id="servicios">
    <div class="service-card">
        <a href="https://gaceta.beni.gob.bo">
            <span class="icon">📄</span>
            <span class="title">Gaceta</span>
            <span class="description">Publicaciones legales</span>
        </a>
    </div>
    <div class="service-card">
        <a href="https://siscor.beni.gob.bo">
            <span class="icon">📨</span>
            <span class="title">SISCOR</span>
            <span class="description">Seguimiento de Trámites</span>
        </a>
    </div>
    <!-- ... más servicios -->
</section>
```

## Configuración

La gestión de los enlaces a sistemas se realiza desde:

**WordPress > Apariencia > Personalizar > Widgets**

O mediante bloques Uve en la página de inicio.

### Agregar Nuevo Sistema

1.  Acceder a `/wp-admin/`
2.  Ir a Apariencia > Widgets.
3.  Agregar bloque de enlace/enlace personalizado.
4.  Configurar URL, título e icono.
5.  Guardar cambios.

---

*Última actualización: 2025*