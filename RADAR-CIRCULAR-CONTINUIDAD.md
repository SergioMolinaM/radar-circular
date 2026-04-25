# RADAR CIRCULAR — DOCUMENTO DE CONTINUIDAD
## Actualizado: 25 de abril de 2026 — Post Fase 15 (Análisis recreada)

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

### Fase 13 — Cambios UX/diseño

- Paleta actualizada: superficies más luminosas (--bg-surface, --bg-elevated más claros), textos secundarios más legibles
- Componente Callout (3 variantes: explainer/info/warning) — callouts claros en 5 páginas de detalle
- ScrollToTop: scroll al inicio al cambiar de página
- Footer: copyright Tercera Letra con "T" verde en todas las páginas
- Migración completa stone-* → CSS variables en todas las páginas
- Sidebar: "Análisis" removida del menú, "Panorama REP" → "Situación actual", "Hoja de ruta" → "Lo que viene", "Acerca de" → "Acerca de Radar Circular"
- Favicon SVG radar verde
- OG tags y meta description actualizados

### Fase 14 — Mapa Territorial

- Mapa Leaflet con GeoJSON de 16 regiones de Chile (caracena/chile-geojson)
- 3 capas: gestores NFU (105 total), comunas GRANSIC (estimación INE), convenios ReSimple (39)
- Panel lateral con hover por región, KPIs y leyenda
- Tile layer CARTO dark, coherente con paleta editorial
- Card de acceso en Home

### Fase 15 — Análisis recreada

- Escenarios de cumplimiento rediseñados: nomenclatura "dentro SIG / fuera SIG / total país" reemplaza "SIG / Nacional / Simulación"
- Nuevo componente CumplimientoPanel con barras comparativas (meta vs dentro SIG vs total país)
- Callouts explainer + warning sobre fuente de datos (Kyklos, no SMA)
- Paradoja del reciclaje chileno como bloque destacado
- DetalleEyE ya no tiene tabla de 3 escenarios — link a /analisis
- Sidebar restaura "Análisis" en grupo DATOS

### Pantallas construidas (Fases 0–15)

| Ruta | Pantalla | Contenido |
|---|---|---|
| `/` | Home | KPIs ecosistema + cards 6 PP + bloque narrativo + fuentes |
| `/panorama` | Situación actual | Chart barras MDP/MGP + tabla Kyklos + trayectoria metas + 3 escenarios + callout |
| `/producto/eye` | Detalle EyE | SIG + operación GRANSIC + KPIs Kyklos + metas + callouts explicativos |
| `/producto/nfu` | Detalle NFU | SIG + KPIs + alertas + chart gestores + metas + callout |
| `/producto/paee` | Detalle P+AEE | Metas 3 categorías + timeline + KPIs + SIG + callout |
| `/producto/alu` | Detalle ALU | Cifras 47,6% + decreto DS47 + antecedentes + próximos pasos |
| `/producto/bfu` | Detalle BFU | Cifras 74,5%/52% + decreto + alcance + relación P+AEE |
| `/producto/textiles` | Detalle Textiles | 572k ton + normativo + internacional + APL |
| `/fiscalizacion` | Fiscalización | KPIs + 2 sancionatorios + alertas + free-riders + SISREP + callout |
| `/mapa` | Mapa territorial | Leaflet choropleth — gestores NFU, comunas GRANSIC, convenios ReSimple por región |
| `/hoja-de-ruta` | Lo que viene | 19 hitos 2026-2035+ con filtro PP + 3 niveles certeza + callout |
| `/ley-rep` | La Ley REP | Marco legal + ciclo + actores + cronología corregida + enlaces |
| `/sistemas-gestion` | Sistemas de Gestión | 35 SIG RETC con filtros + alerta antigüedad nov 2025 |
| `/glosario` | Glosario | 29 términos REP con definiciones |
| `/acerca` | Acerca de Radar Circular | 10 fuentes + 4 estudios + párrafo Tercera Letra |
| `/analisis` | Análisis | Cumplimiento año 1 (barras dentro/fuera SIG) + diagnóstico estructural + 6 trabas MEP |

### Contexto regulatorio post cambio de gobierno (marzo 2026)

- DS12/2020 (EyE) y DS8/2019 (NFU): NO afectados, plenamente vigentes
- P+AEE: Retirado de Contraloría en marzo, reingresado, toma de razón 23-abr-2026, pendiente DO
- OEC: María José Ureta confirmada (RE N°684, feb 2026)
- Textiles: Convocatoria antecedentes hasta 18-may-2026, verificar continuidad consultoría BID

---

## QUÉ SIGUE

### Pendientes de datos (requieren acceso a fuentes)
- Descargar XLSX RETC SIG aprobados actualizado (>nov 2025)
- Verificar nuevos sancionatorios en SNIFA (>jun 2025)
- Confirmar publicación P+AEE en DO cuando ocurra
- Confirmar mecanismo legal incorporación Textiles como PP

### Pendientes de producto
- Conexión programática RETC (API o scraping)
- Feed de hitos/actualizaciones en Home
- Benchmarking internacional (Alemania Pfand, Francia AGEC)
- Mapa territorial por región
- SEO: meta tags por ruta

### Pendientes diseño (Fase 16+)
- og-image.png real (capturar desde og-image.html)
- Mapa: agregar capa de gestores EyE cuando RETC publique datos actualizados

### Para próxima sesión
Decir: "Continúo sesión Radar Circular" + indicar qué se quiere hacer.
Documentos clave en raíz del repo:
- RADAR-CIRCULAR-CONTINUIDAD.md (este archivo)
- RADAR-CIRCULAR-DATOS-REP-CONSOLIDADO.md (17 secciones)
- AUDITORIA-RADAR-CIRCULAR.md (auditoría completa 25-abr-2026)
