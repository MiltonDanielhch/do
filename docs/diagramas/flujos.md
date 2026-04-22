---
title: Diagramas de Flujo
sidebar_position: 2
---

# Diagramas de Flujo - Sistemas G.A.D. Beni

Esta sección contiene los diagramas de flujo que ilustran los procesos principales de cada sistema.

---

## MAMORÉ - Flujo de Contrataciones

```mermaid
flowchart TD
    subgraph "Inicio"
        A([Usuario accede a MAMORÉ])
    end

    subgraph "Gestión de Personas"
        B{Seleccionar módulo:<br/>Contrataciones}
        C[Buscar/Registrar Persona]
        D{¿Persona existe?}
        E[Crear nueva persona]
        F[Verificar datos:<br/>CI, AFP, Caja de Salud]
    end

    subgraph "Gestión de Contratos"
        G[Crear Contrato]
        H{Seleccionar tipo:<br/>Eventual/Consultor/Permanente}
        I[Ingresar datos del contrato]
        J[Asignar persona al contrato]
        K[Cálculo de salarios y beneficios]
    end

    subgraph "Gestión de Planillas"
        L[Procesar Planilla]
        M[Calcular descuentos:<br/>AFP, IVA, otros]
        N[Generar reporte de planilla]
        O[Enviar a Tesorería]
    end

    subgraph "Tesoreria"
        P[Registrar pago]
        Q[Emitir cheque]
        R{¿Cheque cobrado?}
        S[Conciliar con banco]
        T([Fin del proceso])
    end

    A --> B
    B --> C
    C --> D
    D -->|No| E
    D -->|Sí| F
    E --> F
    F --> G
    G --> H
    H --> I
    I --> J
    J --> K
    K --> L
    L --> M
    M --> N
    N --> O
    O --> P
    P --> Q
    Q --> R
    R -->|Sí| S
    R -->|No| T
```

---

## SISCOR - Flujo de Correspondencia

```mermaid
flowchart LR
    subgraph "Entrada"
        E1([Documento recibido])
        E2[Registrar en Sistema]
        E3[Asignar Hoja de Ruta]
        E4[Digitalizar documento]
    end

    subgraph "Derivación"
        E5[Seleccionar destinatario]
        E6{Destinatario:<br/>Dirección/Unidad}
        E7[Notificar al destinatario]
        E8[Asignar prioridad]
    end

    subgraph "Procesamiento"
        E9[Recibir documento]
        E10{¿Accionar?}
        E11[Derivar a otra unidad]
        E12[Archivar documento]
        E13[Finalizar trámite]
    end

    subgraph "Seguimiento"
        E14[Consultar estado]
        E15{Historial<br/>de derivaciones}
        E16[Generar reporte]
    end

    E1 --> E2 --> E3 --> E4
    E4 --> E5 --> E6 --> E7 --> E8
    E8 --> E9 --> E10
    E10 --> E11
    E10 --> E12
    E10 --> E13
    E11 -.-> E5
    E13 --> E14 --> E15 --> E16
```

---

## ALMACÉN - Flujo de Inventario

```mermaid
flowchart TD
    subgraph "Ingresos"
        IN1([Proveedor entrega])
        IN2{¿Orden de Compra<br/>verificada?}
        IN3[Registrar ingreso]
        IN4[Ingresar artículos]
        IN5[Actualizar stock]
        IN6[Generar acta de recepción]
    end

    subgraph "Solicitudes"
        SOL1([Unidad necesita material])
        SOL2[Crear solicitud]
        SOL3{¿Hay stock<br/>disponible?}
        SOL4[Solicitar compra]
        SOL5[Aprobar solicitud]
        SOL6[Preparar despacho]
    end

    subgraph "Egresos"
        EGR1[Despachar materiales]
        EGR2[Registrar egreso]
        EGR3[Actualizar stock]
        EGR4[Entregar a solicitante]
        EGR5[Archivar documentación]
    end

    subgraph "Reportes"
        REP1[Consulta stock]
        REP2[Kardex por artículo]
        REP3[Reporte de movimientos]
        REP4[Inventario físico]
    end

    IN1 --> IN2
    IN2 -->|Sí| IN3
    IN2 -->|No| SOL4
    IN3 --> IN4 --> IN5 --> IN6
    IN5 --> SOL3
    SOL1 --> SOL2 --> SOL3
    SOL3 -->|Sí| SOL5
    SOL3 -->|No| SOL4
    SOL5 --> SOL6
    SOL6 --> EGR1 --> EGR2 --> EGR3 --> EGR4 --> EGR5
    IN6 -.-> REP1
    EGR5 -.-> REP1
    REP1 --> REP2 --> REP3 --> REP4
```

---

## MINERÍA - Flujo de Certificados

```mermaid
flowchart TD
    subgraph "Empresa"
        EMP1([Registrar empresa])
        EMP2[Ingresar datos:<br/>NIT, Razón Social, NIM]
        EMP3[Asignar representante]
        EMP4[Crear usuario de empresa]
        EMP5[Empresa registrada]
    end

    subgraph "Certificado COM"
        CERT1[Solicitar certificado]
        CERT2{Seleccionar empresa}
        CERT3[Asignar firma autorizante]
        CERT4[Definir vigencia:<br/>Fecha inicio/fin]
        CERT5[Generar código COM]
        CERT6[Certificado listo]
    end

    subgraph "Formulario 101"
        F101([Transportista presenta])
        F102[Seleccionar certificado COM]
        F103[Datos del mineral:<br/>Tipo, peso, humedad]
        F104[Datos del transporte:<br/>Vehículo, conductor]
        F105[Generar código DDMEH]
        F106[Imprimir formulario]
    end

    subgraph "Verificación"
        VER1[Verificar en punto de control]
        VER2{¿Válido?}
        VER3[Registrar paso]
        VER4[Rechazar/Reportar]
    end

    EMP1 --> EMP2 --> EMP3 --> EMP4 --> EMP5
    EMP5 --> CERT1
    CERT1 --> CERT2 --> CERT3 --> CERT4 --> CERT5 --> CERT6
    CERT6 -.-> F101
    F101 --> F102 --> F103 --> F104 --> F105 --> F106
    F106 -.-> VER1
    VER1 --> VER2
    VER2 -->|Sí| VER3
    VER2 -->|No| VER4
```

---

## GACETAS - Flujo de Publicación

```mermaid
flowchart LR
    subgraph "Admin"
        GA1([Acceder a Admin])
        GA2{Seleccionar tipo:<br/>Gaceta/Decreto/Resolución}
        GA3[Crear publicación]
        GA4[Cargar datos:<br/>Título, descripción]
        GA5[Adjuntar archivo PDF]
        GA6[Publicar]
    end

    subgraph "Portal Público"
        GP1([Ciudadano accede])
        GP2{Seleccionar tipo de<br/>publicación}
        GP3[Ver lista de publicaciones]
        GP4{¿Buscar?}
        GP5[Filtrar por año/palabra]
        GP6[Ver detalle]
        GP7[Descargar PDF]
    end

    subgraph "Estadísticas"
        ST1[Contador de vistas]
        ST2[Reportes de consulta]
        ST3[Análisis de interés]
    end

    GA1 --> GA2 --> GA3 --> GA4 --> GA5 --> GA6
    GA6 -.-> GP1
    GP1 --> GP2 --> GP3
    GP3 --> GP4
    GP4 -->|Sí| GP5
    GP4 -->|No| GP6
    GP5 --> GP6
    GP6 --> GP7
    GP7 -.-> ST1 --> ST2 --> ST3
```

---

## TRANSPARENCIA - Flujo de Denuncias

```mermaid
flowchart TD
    subgraph "Ciudadano"
        C1([Acceder al portal])
        C2{¿Identificado o<br/>anónimo?}
        C3[Completar datos<br/>personales]
        C4[Describir denuncia]
        C5[Adjuntar evidencia]
        C6[Enviar denuncia]
        C7([Confirmación])
    end

    subgraph "Recepción"
        R1[Recibir denuncia]
        R2[Asignar número de caso]
        R3[Clasificar tipo de denuncia]
        R4[Derivar a área competente]
    end

    subgraph "Gestión"
        G1[Revisar denuncia]
        G2{¿Válida?}
        G3[Solicitar más info]
        G4[Investigar]
        G5[Documentar hallazgos]
        G6[Tomar acción]
    end

    subgraph "Cierre"
        CL1[Cerrar caso]
        CL2{¿Notificar al<br/>denunciante?}
        CL3[Enviar respuesta]
        CL4[Archivar expediente]
    end

    C1 --> C2
    C2 -->|Identificado| C3
    C2 -->|Anónimo| C4
    C3 --> C4
    C4 --> C5 --> C6 --> C7
    C7 -.-> R1
    R1 --> R2 --> R3 --> R4
    R4 --> G1 --> G2
    G2 -->|Sí| G4
    G2 -->|No| G3
    G3 -.-> C1
    G4 --> G5 --> G6
    G6 --> CL1
    CL1 --> CL2
    CL2 -->|Sí| CL3
    CL2 -->|No| CL4
```

---

## AUDITORÍA - Flujo de Informes

```mermaid
flowchart LR
    subgraph "Gestión de Informes"
        AI1([Acceder al Admin])
        AI2[Crear nuevo informe]
        AI3[Cargar datos:<br/>Título, descripción]
        AI4[Adjuntar PDF]
        AI5[Definir fecha de publicación]
        AI6[Publicar informe]
    end

    subgraph "Portal Público"
        AP1([Ciudadano accede])
        AP2{Seleccionar año<br/>de gestión}
        AP3[Ver lista de informes]
        AP4{¿Buscar?}
        AP5[Filtrar por palabras]
        AP6[Ver informe]
        AP7[Descargar PDF]
    end

    subgraph "Organización"
        ORG1[Agrupar por año]
        ORG2[Ordenar por fecha]
        ORG3[Marcar destacados]
        ORG4[Actualizar anualmente]
    end

    AI1 --> AI2 --> AI3 --> AI4 --> AI5 --> AI6
    AI6 -.-> ORG1 --> ORG2 --> ORG3 --> ORG4
    ORG4 -.-> AP1
    AP1 --> AP2 --> AP3
    AP3 --> AP4
    AP4 -->|Sí| AP5
    AP4 -->|No| AP6
    AP5 --> AP6
    AP6 --> AP7
```

---

## ECOALBERGUE - Flujo de Reservas

```mermaid
flowchart TD
    subgraph "Portal Público"
        E1([Visitante accede])
        E2[Ver habitaciones]
        E3{¿Ver paquetes<br/>especiales?}
        E4[Paquetes con descuento]
        E5[Ver detalle:<br/>Habitación/Paquete]
        E6[Contactar para reserva]
    end

    subgraph "Gestión Admin"
        EA1[Gestionar habitaciones]
        EA2[Gestionar paquetes]
        EA3[Actualizar precios]
        EA4[Gestionar disponibilidad]
        EA5[Publicar noticias/blog]
    end

    subgraph "Blog/Noticias"
        B1[Crear post]
        B2[Redactar contenido]
        B3[Agregar imágenes]
        B4[Publicar]
        B5[Visible en portal]
    end

    subgraph "Galería"
        G1[Subir fotos]
        G2[Agrupar por álbum]
        G3[Galería lugar/visitantes]
        G4[Visible públicamente]
    end

    E1 --> E2
    E2 --> E3
    E3 -->|Sí| E4
    E3 -->|No| E5
    E4 --> E5
    E5 --> E6
    E6 -.-> EA1
    EA1 --> EA2 --> EA3 --> EA4
    EA2 -.-> B1 --> B2 --> B3 --> B4 --> B5
    EA2 -.-> G1 --> G2 --> G3 --> G4
```

---

## IMPUESTOS - Flujo de Tramitación

```mermaid
flowchart TD
    subgraph "Persona/Contribuyente"
        I1([Registrar datos])
        I2[Ingresar CI, nombre,<br/>dirección]
        I3[Registrar inmueble]
        I4[Datos del property:<br/>Ubicación, superficie]
        I5[Calcular impuesto]
    end

    subgraph "Cálculo"
        C1[Ingresar datos<br/>para cálculo]
        C2[Obtener UFV actual]
        C3[Aplicar alícuota]
        C4[Generar monto<br/>a pagar]
        C5[Generar boleta]
    end

    subgraph "Pago"
        P1[Realizar pago]
        P2{Seleccionar método:<br/>Efectivo/Tarjeta/Transferencia}
        P3[Registrar pago]
        P4[Actualizar estado]
        P5[Generar comprobante]
    end

    subgraph "Reportes"
        RP1[Estado de cuenta]
        RP2[Historial de pagos]
        RP3[Reportes de<br/>recaudación]
    end

    I1 --> I2 --> I3 --> I4 --> I5
    I5 -.-> C1
    C1 --> C2 --> C3 --> C4 --> C5
    C5 -.-> P1
    P1 --> P2 --> P3 --> P4 --> P5
    P5 -.-> RP1 --> RP2 --> RP3
```

---

## Resumen de Modelos de Datos Principales

### MAMORÉ - Modelo de Personas y Contratos

```mermaid
erDiagram
    PERSONA ||--o{ CONTRATO : "posee"
    PERSONA }|--|| LUGAR : "nace_en"
    PERSONA }|--|| AFP : "pertenece_a"
    PERSONA }|--|| CAJA_SALUD : "tiene"
    CONTRATO }|--|| ESTADO_CONTRATO : "tiene_estado"

    PERSONA {
        int id PK
        string ci UK
        string nombres
        string apellidos
        date fecha_nacimiento
        string email
        string telefono
        int lugar_id FK
        string afp
        string caja_salud
    }

    CONTRATO {
        int id PK
        string numero UK
        int persona_id FK
        date fecha_inicio
        date fecha_fin
        decimal salario
        int estado_id FK
        string tipo
    }

    ESTADO_CONTRATO {
        int id PK
        string nombre
    }
```

---

### MINERÍA - Modelo de Certificados y Formularios

```mermaid
erDiagram
    COMPANY ||--o{ CERTIFICATE : "posee"
    CERTIFICATE ||--|| SIGNATURE : "firmado_por"
    CERTIFICATE ||--o{ FORM101 : "genera"
    FORM101 }|--|| TYPE_MINERAL : "contiene"

    COMPANY {
        int id PK
        string nit UK
        string razon
        string nim
        string representative
        string telefono
        string municipe
    }

    CERTIFICATE {
        int id PK
        string code
        int company_id FK
        int signature_id FK
        date dateStart
        date dateFinish
        string status
    }

    FORM101 {
        int id PK
        string code
        int certificate_id FK
        int typeMineral_id FK
        decimal pesoBruto
        decimal humedad
        decimal pesoNeto
        string medioTransporte
    }

    TYPE_MINERAL {
        int id PK
        string symbol
        string name
    }

    SIGNATURE {
        int id PK
        string alias
        string first_name
        string last_name
        string job
    }
```

---

### ALMACÉN - Modelo de Inventario

```mermaid
erDiagram
    SUCURSAL ||--o{ INGRESO : "recibe"
    SUCURSAL ||--o{ EGRESO : "despacha"
    PROVEEDOR ||--o{ INGRESO : "entrega"
    ARTICULO ||--o{ INGRESO_DETALLE : "incluido"
    ARTICULO ||--o{ EGRESO_DETALLE : "incluido"
    INGRESO ||--o{ INGRESO_DETALLE : "contiene"
    EGRESO ||--o{ EGRESO_DETALLE : "contiene"

    SUCURSAL {
        int id PK
        string nombre
        string direccion
    }

    PROVEEDOR {
        int id PK
        string nit
        string nombre
        string telefono
    }

    ARTICULO {
        int id PK
        string codigo
        string nombre
        string unidad_medida
    }

    INGRESO {
        int id PK
        int sucursal_id FK
        int proveedor_id FK
        date fecha
        string numero
        string estado
    }

    EGRESO {
        int id PK
        int sucursal_id FK
        date fecha
        string solicitante
        string estado
    }
```