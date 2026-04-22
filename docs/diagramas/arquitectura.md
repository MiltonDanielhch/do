---
title: Arquitectura
sidebar_position: 1
---

# Módulo de Contrataciones

```mermaid
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