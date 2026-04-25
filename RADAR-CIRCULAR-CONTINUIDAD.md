# RADAR CIRCULAR — DOCUMENTO DE CONTINUIDAD
## Actualizado: 25 de abril de 2026 — Post Fase 12 (Auditoría + Correcciones)

---

## ESTADO ACTUAL

**Deploy:** https://radar-circular.cl
**Repo:** SergioMolinaM/radar-circular · Verificar commit con `git log --oneline -1`
**Stack:** React 19 + Vite + TS + Tailwind 4 + Recharts

### Auditoría realizada (25-abr-2026)

Triple lente: Gobierno · Empresa · Producto Digital. Resultado:
- 87 cifras de metas EyE verificadas contra DS12/2020 original: TODAS correctas
- 4 errores corregidos en Fase 12: ProREP→colectivo, metas %POM, art.21 compensación, RE fecha, GRANSIC definición
- 6 riesgos de antigüedad mitigados con alertas visibles
- Documento completo: AUDITORIA-RADAR-CIRCULAR.md

### Pantallas construidas (Fases 0–12)

| Ruta | Pantalla | Contenido |
|---|---|---|
| `/` | Home | KPIs ecosistema + cards 6 PP + bloque narrativo + fuentes |
| `/panorama` | Panorama REP | Chart barras MDP/MGP + tabla Kyklos + trayectoria metas + 3 escenarios |
| `/producto/eye` | Detalle EyE | SIG + operación GRANSIC + KPIs Kyklos + metas dom/no dom (% POM) + cumplimiento |
| `/producto/nfu` | Detalle NFU | SIG + KPIs + alertas (recauchaje, DS8) + chart gestores + metas |
| `/producto/paee` | Detalle P+AEE | Metas 3 categorías + timeline post cambio gobierno + KPIs + SIG en formación |
| `/producto/alu` | Detalle ALU | Cifras 47,6% + decreto DS47 + antecedentes + próximos pasos |
| `/producto/bfu` | Detalle BFU | Cifras 74,5%/52% + decreto + alcance + relación P+AEE |
| `/producto/textiles` | Detalle Textiles | 572k ton + normativo + internacional + APL |
| `/fiscalizacion` | Fiscalización | KPIs + 2 sancionatorios + alerta cobertura temporal + free-riders + SISREP |
| `/analisis` | Análisis | Tesis Figueroa + 6 trabas MEP (3 EyE + 3 NFU) + crítica MMA |
| `/hoja-de-ruta` | Hoja de Ruta | 19 hitos 2026-2035+ con filtro PP + 3 niveles certeza |
| `/ley-rep` | La Ley REP | Marco legal + ciclo + actores + cronología corregida + enlaces |
| `/sistemas-gestion` | Sistemas de Gestión | 35 SIG RETC con filtros + alerta antigüedad oct 2025 |
| `/glosario` | Glosario | 28 términos REP con definiciones (GRANSIC corregida, OEC actualizada) |
| `/acerca` | Acerca de | 10 fuentes oficiales + 4 estudios referencia |

### Contexto regulatorio post cambio de gobierno (marzo 2026)

- DS12/2020 (EyE) y DS8/2019 (NFU): NO afectados, plenamente vigentes
- P+AEE: Retirado de Contraloría en marzo, reingresado, toma de razón 23-abr-2026, pendiente DO
- OEC: Jefatura sujeta a verificación
- Textiles: Convocatoria antecedentes hasta 18-may-2026, verificar continuidad consultoría BID

---

## QUÉ SIGUE

### Pendientes de datos (requieren acceso a fuentes)
- Descargar XLSX RETC SIG aprobados actualizado (>oct 2025)
- Verificar nuevos sancionatorios en SNIFA (>jun 2025)
- Confirmar publicación P+AEE en DO cuando ocurra
- Verificar jefatura OEC post cambio gobierno
- Confirmar mecanismo legal incorporación Textiles como PP

### Pendientes de producto
- Conexión programática RETC (API o scraping)
- Feed de hitos/actualizaciones en Home
- Benchmarking internacional (Alemania Pfand, Francia AGEC)
- Mapa territorial por región
- SEO: meta tags por ruta

### Para próxima sesión
Decir: "Continúo sesión Radar Circular" + indicar qué se quiere hacer.
Documentos clave en raíz del repo:
- RADAR-CIRCULAR-CONTINUIDAD.md (este archivo)
- RADAR-CIRCULAR-DATOS-REP-CONSOLIDADO.md (17 secciones)
- AUDITORIA-RADAR-CIRCULAR.md (auditoría completa 25-abr-2026)
