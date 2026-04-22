---
title: Arquitectura General
sidebar_position: 1
---

# Arquitectura de Sistemas - G.A.D. Beni

## Visión General de la Infraestructura

Todos los sistemas del Gobierno Autónomo Departamental del Beni comparten una **arquitectura común basada en Laravel + Voyager**, lo que permite:

*   Consistencia en la gestión de usuarios y permisos
*   Reutilización de componentes y patrones
*   Mantenimiento centralizado
*   Escalabilidad modular

---

## Arquitectura Técnica Común

```mermaid
graph TB
    subgraph "Capa de Presentación"
        WEB[".env: Cliente Web<br/>Navegador"]
        MOBILE[".env: Cliente Móvil<br/>Futuro App"]
    end

    subgraph "Capa de Aplicación"
        NGINX[".env: Nginx<br/>Servidor Web"]
        PHP[".env: PHP 8.x<br/>Laravel"]
        VOYAGER[".env: Voyager<br/>Panel Admin"]
    end

    subgraph "Capa de Datos"
        MYSQL[".env: MySQL 8.0<br/>Base de Datos"]
        STORAGE[".env: Storage<br/>Archivos"]
    end

    subgraph "Infraestructura"
        COOLIFY[".env: Coolify<br/>Contenedores Docker"]
        SERVER[".env: Servidor VPS<br/>Ubuntu/Nginx"]
    end

    WEB --> NGINX
    MOBILE --> NGINX
    NGINX --> PHP
    PHP --> VOYAGER
    PHP --> MYSQL
    PHP --> STORAGE
    COOLIFY --> SERVER
    SERVER --> NGINX
```

---

## Modelos de Datos Comunes

### Sistema de Autenticación (Compartido)

```mermaid
erDiagram
    USER ||--o{ ROLE : "tiene"
    USER ||--o{ PERMISSION : "posee"
    ROLE ||--o{ PERMISSION : "contiene"

    USER {
        bigint id PK
        string name
        string email
        string password
        string avatar
        int role_id FK
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
    }

    ROLE {
        bigint id PK
        string name
        string display_name
        text description
        timestamp created_at
        timestamp updated_at
    }

    PERMISSION {
        bigint id PK
        string name
        string display_name
        text description
        timestamp created_at
    }

    PERMISSION_ROLE {
        bigint permission_id FK
        bigint role_id FK
    }
```

### Sistema de Settings (Voyager)

```mermaid
erDiagram
    SETTINGS ||--o{ DATA_TYPE : "configura"
    DATA_TYPE ||--o{ DATA_ROW : "define"
    DATA_ROW ||--o{ MENU_ITEM : "pertenece"

    SETTINGS {
        int id PK
        string key
        text value
        string display_type
        timestamp created_at
    }

    DATA_TYPE {
        int id PK
        string slug
        string name
        string display_name_singular
        string display_name_plural
        string icon
        string model_name
        timestamp created_at
    }

    DATA_ROW {
        int id PK
        int data_type_id FK
        string field
        string type
        string display_name
        int display_order
    }

    MENU_ITEM {
        int id PK
        int parent_id FK
        string name
        string url
        string icon
        int order
    }
```

---

## Diagrama de Red y URLs

```mermaid
flowchart LR
    subgraph "Dominios - beni.gob.bo"
        GACETAS["gacetas.beni.gob.bo<br/>Portal Público"]
        TRANSPARENCIA["transparencia.beni.gob.bo<br/>Portal Público"]
        AUDITORIA["auditoria.beni.gob.bo<br/>Portal Público"]
        ECOALBERGUE["ecoalbergue.beni.gob.bo<br/>Portal+Admin"]
    end

    subgraph "Subdominios - admin.beni.gob.bo"
        MAMORE["mamore.beni.gob.bo<br/>Admin"]
        SISCOR["siscor.beni.gob.bo<br/>Admin"]
        ALMACEN["almacen.beni.gob.bo<br/>Admin"]
        IMPUESTOS["impuestos.beni.gob.bo<br/>Admin"]
        MINERIA["mineria.beni.gob.bo<br/>Admin"]
    end

    subgraph "Docs Centralizado"
        DOCS["docs.gadbeni.gob.bo<br/>Documentación Docusaurus"]
    end

    subgraph "APIs Internas"
        WHATSAPP["WhatsApp API<br/>Notificaciones"]
        EXCHANGE["Exchange Server<br/>Email/Correo"]
    end
```

---

## Catálogo de Sistemas

| Sistema | Tipo | Stack | Base de Datos | Puerto |
|---------|------|-------|---------------|--------|
| MAMORÉ | Admin | Laravel 8 + Voyager | MySQL | 443 |
| SISCOR | Admin | Laravel 8 + Voyager | MySQL | 443 |
| ALMACÉN | Admin | Laravel 8 + Voyager | MySQL | 443 |
| IMPUESTOS | Admin | Laravel 8 + Voyager | MySQL | 443 |
| MINERÍA | Admin | Laravel 8 + Voyager | MySQL | 443 |
| GACETAS | Portal | Laravel 8 + Voyager | MySQL | 80 |
| TRANSPARENCIA | Portal | Laravel 8 + Voyager | MySQL | 80 |
| AUDITORÍA | Portal | Laravel 8 + Voyager | MySQL | 80 |
| ECOALBERGUE | Mixto | Laravel 8 + Voyager | MySQL | 443 |
| DOCUMENTACIÓN | Docs | Docusaurus | - | 3000 |

---

## Tecnologías por Capa

```mermaid
graph TD
    subgraph "Frontend"
        HTML["HTML5"]
        CSS["CSS3/Tailwind"]
        JS["JavaScript/jQuery"]
        BOOTSTRAP["Bootstrap 5"]
        DATATABLES["DataTables"]
    end

    subgraph "Backend"
        LARAVEL["Laravel 8.x"]
        PHP["PHP 8.x"]
        VOYAGER["Voyager 1.4+"]
        BAREDOC["Barryvdh/DomPDF"]
        QR["SimpleSoftwareIO/QrCode"]
    end

    subgraph "Database"
        MYSQL["MySQL 8.0"]
        REDIS["Redis (Caché)"]
    end

    subgraph "Infrastructure"
        NGINX["Nginx"]
        DOCKER["Docker/Coolify"]
        UBUNTU["Ubuntu Server"]
        SSL["SSL/TLS Let's Encrypt"]
    end

    subgraph "Tools"
        COMPOSER["Composer"]
        NPM["npm/yarn"]
        GIT["Git"]
        PHPSTORM["PHPStorm/VSCode"]
    end
```

---

## Modelo de Despliegue (Coolify)

```mermaid
flowchart TB
    subgraph "Desarrollo"
        DEV["Desarrollo Local"]
        GIT["GitHub/GitLab"]
    end

    subgraph "CI/CD"
        PUSH["Push a Branch"]
        PR["Pull Request"]
        REVIEW["Code Review"]
        MERGE["Merge to Main"]
    end

    subgraph "Producción (Coolify)"
        CONTAINER["Docker Container"]
        NGINX_P["Nginx Proxy"]
        APP["Aplicación Laravel"]
        DB_P["MySQL"]
    end

    subgraph "Dominios"
        DOMAIN["*.beni.gob.bo<br/>DNS Config"]
        SSL_P["SSL Certificate"]
    end

    DEV --> GIT
    GIT --> PUSH
    PUSH --> PR
    PR --> REVIEW
    REVIEW --> MERGE
    MERGE --> CONTAINER
    CONTAINER --> NGINX_P
    NGINX_P --> APP
    APP --> DB_P
    NGINX_P --> SSL_P
    SSL_P --> DOMAIN
```

---

## Seguridad

```mermaid
flowchart TD
    subgraph "Autenticación"
        AUTH["Auth::check()"]
        SESSION["Sesión Laravel"]
        GUARD["Voyager Guard"]
    end

    subgraph "Autorización"
        PERMS["Permisos por Rol"]
        ROLES["Roles: Admin/User"]
        POLICY["Policies"]
    end

    subgraph "Protección"
        CSRF["CSRF Token"]
        XSS["XSS Protection"]
        SQLI["SQL Injection Prevention"]
        HTTPS["HTTPS Only"]
    end

    subgraph "Auditoría"
        LOGS["Activity Logs"]
        BACKUP["Backups Diarios"]
        MONITOR["Monitoreo"]
    end

    AUTH --> PERMS
    PERMS --> ROLES
    ROLES --> POLICY
    GUARD --> AUTH
    AUTH --> CSRF
    AUTH --> XSS
    AUTH --> SQLI
    HTTPS --> AUTH
    LOGS --> BACKUP
    BACKUP --> MONITOR
```

---

## Estructura de Directorios Común

```
proygobe/
├── mamore/           # Sistema MAMORÉ
│   ├── app/
│   │   ├── Http/Controllers/
│   │   ├── Models/
│   │   └── Providers/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── resources/
│   │   ├── views/
│   │   └── lang/
│   └── routes/
│
├── siscor/           # Sistema SISCOR
├── almacen/          # Sistema ALMACÉN
├── impuestos/       # Sistema IMPUESTOS
├── mineria/          # Sistema MINERÍA
├── gacetas/          # Portal GACETAS
├── transparencia/    # Portal TRANSPARENCIA
├── auditoria/        # Portal AUDITORÍA
└── plantilla-ecoalbergue/  # Sistema ECOALBERGUE
```

---

## Características Compartidas

### Voyager BREAD

Todos los sistemas usan Voyager para CRUD:

| Operación | Método | Descripción |
|----------|--------|-------------|
| **B**rowse | GET | Listar registros |
| **R**ead | GET | Ver detalle |
| **E**dit | GET/POST | Editar registro |
| **A**dd | GET/POST | Crear nuevo |
| **D**elete | DELETE | Eliminar registro |

### Modelo de SoftDeletes

```php
// Todos los modelos principales usan SoftDeletes
class Modelo extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
}
```

### Timestamps Automáticos

```php
// Created_at y updated_at gestionados por Laravel
// deleted_at para eliminación lógica
```

---

## Métricas de Infraestructura

| Métrica | Valor |
|---------|-------|
| Total Sistemas | 9 |
| Bases de Datos | 9 (1 por sistema) |
| Dominios | 10+ |
| Contenedores | ~15 (prod + dev) |
| Backups | Diarios automáticos |
| Uptime Target | 99.5% |

---

## Futuras Mejoras

*   **API REST:** Endpoints centralizados para apps móviles
*   **Microservicios:** Descomposición de sistemas monolithicos
*   **CDN:** Distribución de assets estáticos
*   **Monitoreo:** Dashboard Grafana + Prometheus
*   **Logging Centralizado:** ELK Stack