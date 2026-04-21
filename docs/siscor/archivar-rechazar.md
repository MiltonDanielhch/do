---
sidebar_position: 18
---

# Acciones de Derivación: Archivar y Rechazar

## Vista General

En la bandeja de entrada, existen dos acciones importantes para gestionar los documentos recibidos: **Archivar** y **Rechazar**. Estas acciones permiten dar por atendida o devolver una correspondencia.

## Archivar Documento

### Qué Significa

Archivar un documento indica que el trámite ha sido **concluido** por el funcionario. El documento deja de aparecer como pendiente en la bandeja, pero queda registrado en el historial.

### Cuándo Usar

- Cuando se ha dado respuesta al documento
- Cuando el trámite ha sido completado
- Cuando ya no se requiere más acción sobre el documento
- Para limpiar la bandeja de documentos atendidos

### Cómo Archivar

1. En la bandeja de entrada, seleccionar el documento a archivar
2. Hacer clic en el botón **"Archivar"**
3. (Opcional) Agregar una **observación** explicando el motivo del archivo
4. Confirmar la acción

### Efectos del Archivo

- El campo `ok` de la derivación cambia a `ARCHIVADO`
- Se guarda la `observación` de archivo (si se proporcionó)
- El documento desaparece de la bandeja de pendientes
- El documento queda en el historial para referencia futura

### Campos Modificados

```php
Derivation::where('id', $request->derivacion_id)->update([
    'ok' => 'ARCHIVADO', 
    'observationArchivado' => $request->observacion
]);
```

---

## Rechazar Documento

### Qué Significa

Rechazar un documento significa **devolverlo** al funcionario que lo envió originalmente. Es útil cuando el documento fue derivado incorrectamente o no corresponde al área.

### Cuándo Usar

- Cuando el documento fue derivado a la persona equivocada
- Cuando el documento no corresponde al área
- Cuando faltan documentos o información necesaria
- Para reasignar el documento al remitente original

### Cómo Rechazar

1. En la bandeja de entrada, seleccionar el documento a rechazar
2. Hacer clic en el botón **"Rechazar"**
3. Confirmar la acción

### Efectos del Rechazo

- El sistema crea una **nueva derivación** hacia el funcionario original
- El documento desaparece de la bandeja actual
- El documento aparece en la bandeja del funcionario que originalmente envió
- Se mantiene el historial completo de la derivación

### Flujo del Rechazo

```
Funcionario A → Deriva → Funcionario B
                              ↓
                      Funcionario B → Rechaza
                              ↓
                      Funcionario A ← Nueva derivación
```

---

## Diferencias Clave

| Aspecto | Archivar | Rechazar |
|---------|----------|----------|
| **Destino** | No se deriva a nadie | Se devuelve al remitente original |
| **Estado** | Trámite completado | Trámite reasignado |
| **Bandeja Actual** | Se limpia | Se limpia |
| **Historial** | Queda registrado | Nueva derivación creada |

---

## Consideraciones

- **Archivo:** Es irreversible desde la bandeja (el documento queda marcado como archivado)
- **Rechazo:** El documento vuelve a la bandeja del originario con una nueva derivación
- **Auditoría:** Ambas acciones quedan registradas en el historial del documento
- **Notificación:** El rechazo puede generar notificación al funcionario original