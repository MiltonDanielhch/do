---
title: Contrataciones
sidebar_position: 1
---

# Módulo de Contrataciones

```mermaid
%%{init: {'theme': 'neutral', 'themeVariables': {'primaryColor': '#2b3b52', 'lineColor': '#4a90e2', 'textColor': '#333'}}}%%
classDiagram
  direction TB
  
  class Persona {
    +String nombres
    +String apellidos
    +String ci
    +validarCI()$
    +registrar() 
  }

  class Contrato {
    +String numero
    +Date fechaInicio
    +generarPDF()
  }

  Persona "1" --> "1..*" Contrato : "posee"
  note for Persona "Validaciones:\n- Formato CI: 1234567LP\n- Campos obligatorios marcados con *"
  note for Contrato "Formato:\n- PDF/A-3\n- Firma digital"