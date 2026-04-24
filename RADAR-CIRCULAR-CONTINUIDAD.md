# RADAR CIRCULAR — DOCUMENTO DE CONTINUIDAD
## Actualizado: 24 de abril de 2026 — Post Fase 9

---

## ESTADO ACTUAL

**Deploy:** https://radar-circular-cl.netlify.app
**Repo:** SergioMolinaM/radar-circular · Commit: da0d9d8
**Stack:** React 19 + Vite + TS + Tailwind 4 + Recharts

### Pantallas construidas (Fases 0–9)

| Ruta | Pantalla | Contenido |
|---|---|---|
| `/` | Home | KPIs ecosistema + cards 6 PP + bloque narrativo "¿Qué es RC?" + fuentes |
| `/panorama` | Panorama REP | Chart barras MDP/MGP + tabla Kyklos + trayectoria metas LineChart + 3 escenarios cumplimiento |
| `/producto/eye` | Detalle EyE | SIG + operación GRANSIC primer año + KPIs Kyklos + chart + metas dom/no dom + trayectoria + cumplimiento |
| `/producto/nfu` | Detalle NFU | SIG + KPIs + alertas (recauchaje, DS8) + chart gestores región + metas |
| `/producto/paee` | Detalle P+AEE | Metas 3 categorías + chart líneas + KPIs + SIG en formación + timeline Contraloría |
| `/producto/alu` | Detalle ALU | 4 secciones (cifras 47,6%, decreto, antecedentes, próximos pasos) + enlaces |
| `/producto/bfu` | Detalle BFU | 4 secciones (cifras 74,5%/52%, decreto, alcance, relación P+AEE) + enlaces |
| `/producto/textiles` | Detalle Textiles | 4 secciones (572k ton, normativo, internacional, APL) + enlaces |
| `/fiscalizacion` | Fiscalización | KPIs + 2 sancionatorios + free-riders + timeline + SISREP + infracciones |
| `/analisis` | Análisis | Tesis Figueroa + 6 trabas MEP (3 EyE + 3 NFU) + crítica MMA |
| `/hoja-de-ruta` | Hoja de Ruta | 19 hitos futuros 2026-2035+ con filtro PP + 3 niveles certeza + disclaimer |
| `/ley-rep` | La Ley REP | Marco legal + ciclo 6 pasos + 5 actores + cronología 12 hitos + 6 enlaces oficiales |
| `/glosario` | Glosario | 24 términos REP con definiciones |
| `/acerca` | Acerca de | 10 fuentes oficiales + 4 estudios referencia |

### Componentes transversales
- Sidebar responsive 3 grupos (Datos / PP / Referencia)
- FuenteDatos (badges oficial/estimación/sectorial/declaración-actor)
- UltimaActualizacion (fecha en cada página)
- Disclaimer global en footer
- MetasTable, MetasLineChart, TonelajeChart, CumplimientoTable reutilizables

### Archivos de datos (src/data/)
productos-prioritarios.ts, metas-eye.ts, cumplimiento-eye.ts, datos-nfu.ts, datos-paee.ts, datos-alu-bfu.ts, operacion-eye.ts, sig-aprobados.ts, fiscalizacion-rep.ts, analisis-rep.ts, hoja-ruta.ts

---

## QUÉ SIGUE

### Pendientes técnicos
- Archivar repo rep-envases-embalajes en GitHub
- Deploy automático GitHub → Netlify
- Dominio custom (radar-circular.cl)
- SEO: meta tags, Open Graph, title por ruta
- Descargar XLSX RETC SIG aprobados desde máquina local (proxy container lo bloquea)

### Contenido futuro
- Panorama NFU (si se publica estudio de tonelaje comparable a Kyklos)
- Datos RETC reales (productores PP declarados)
- Scraper SNIFA para nuevos sancionatorios
- Benchmarking internacional (Alemania Pfand, Francia AGEC/Refashion, UE directivas)
- Actualización P+AEE cuando se publique en DO (metas exactas, plazos)

---

## PARA ARRANCAR PRÓXIMA SESIÓN

Decir: "Continúo sesión Radar Circular" + indicar qué se quiere hacer.
Documentos de trabajo en raíz del repo: RADAR-CIRCULAR-CONTINUIDAD.md y RADAR-CIRCULAR-DATOS-REP-CONSOLIDADO.md.
