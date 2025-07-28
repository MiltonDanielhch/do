```mermaid
erDiagram
    PERSONA ||--o{ CONTRATO : "posee"
    PERSONA }|--|| LUGAR : "nace_en"
    PERSONA }|--|| AFP : "pertenece_a"
    PERSONA }|--|| CAJA_SALUD : "tiene"
    CONTRATO }|--|| ESTADO_CONTRATO : "tiene_estado"

    PERSONA {
        int id PK "Autoincremental"
        int city_id FK "Ciudad de nacimiento"
        int user_id FK "Usuario asociado"
        string first_name "Nombre (max 50)"
        string last_name "Apellidos (max 50)"
        string ci "Cédula de Identidad"
        date fecha_nacimiento "Fecha de nacimiento"
        string issued "Fecha de emisión"
        string profession "Profesión (max 50)"
        string email "Email (max 100)"
        string phone "Teléfono (max 15)"
        string address "Dirección (max 100)"
        string email "Email (max 100)"
        string afp "AFP (max 50)"
        string cc "Cuenta Corriente (max 20)"
        string afp_status "Estado AFP (max 20)"
        string gender "Género (max 10)"
        string number_children "Número de hijos (max 2)"
        string birthday "Fecha de nacimiento"
        string civil_status "Estado civil (max 20)"
        string nua_cua "NUA/CUA (max 20)"
        string image "Imagen"
        string number_account "Numero de cuenta"
    }

    countries{
        int id PK "Autoincremental"
        string name "Nombre (max 50)"
        string initials "Siglas (max 10)"
    }
    states{
        int id PK "Autoincremental"
        int country_id FK "País"
        string name "Nombre (max 50)"
        string initials "Siglas (max 10)"
    }
    

    CONTRATO {
        int id PK "Autoincremental"
        string numero "Número de contrato (20)"
        date fecha_inicio
        date fecha_fin
        number salario "Salario (10,2)"
        int id_estado FK
        string ci_persona FK
    }

    LUGAR {
        int id PK
        string ciudad "Ciudad (max 50)"
        string departamento "Departamento (max 50)"
    }

    AFP {
        string codigo PK "Código AFP (10)"
        string nombre "Gestora (max 50)"
    }

    CAJA_SALUD {
        string codigo PK "Código Caja (10)"
        string nombre "CORDES (max 50)"
    }

    ESTADO_CONTRATO {
        int id PK
        string estado "Estado (max 20)"
    }

    note for PERSONA "Restricciones: CI formato: 0000000LP, Email válido, Campos NOT NULL: nombres, apellidos, ci"
    note for CONTRATO "Reglas: fecha_fin > fecha_inicio, salario >= salario mínimo"