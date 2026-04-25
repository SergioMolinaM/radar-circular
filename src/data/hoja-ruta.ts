// src/data/hoja-ruta.ts
// Fuentes: DS12/2020, DS8/2019, DS47/2023, Decreto P+AEE, comunicados MMA y SMA
// Todos los eventos con certeza "determinado" están fijados por decreto vigente.
// Los eventos "estimado" o "pendiente" pueden cambiar por modificaciones legales.

export type Certeza = 'determinado' | 'estimado' | 'pendiente'

export interface HitoFuturo {
  fecha: string
  pp: string
  ppId: string
  evento: string
  certeza: Certeza
  fuente: string
}

export const hitosFuturos: HitoFuturo[] = [
  // 2026
  {
    fecha: '2026',
    pp: 'NFU',
    ppId: 'nfu',
    evento: 'Metas saltan de 50% a 80% (Cat. A y B)',
    certeza: 'determinado',
    fuente: 'DS 8/2019, tabla de metas',
  },
  {
    fecha: 'Abr-May 2026',
    pp: 'P+AEE',
    ppId: 'paee',
    evento: 'Publicación del decreto en el Diario Oficial',
    certeza: 'estimado',
    fuente: 'Contraloría tomó razón 20-abr-2026. MMA indica publicación "en los próximos días"',
  },
  {
    fecha: 'May 2026',
    pp: 'Textiles',
    ppId: 'textiles',
    evento: 'Cierre convocatoria de antecedentes técnicos (18 mayo)',
    certeza: 'determinado',
    fuente: 'MMA economiacircular.mma.gob.cl/textiles/',
  },
  {
    fecha: '2026',
    pp: 'EyE',
    ppId: 'eye',
    evento: 'Metas domiciliarias año 3: P&C 14%, Cart.líq. 11%, Metal 12%, Plástico 8%, Vidrio 19%',
    certeza: 'determinado',
    fuente: 'DS 12/2020, tabla metas domiciliarias',
  },
  {
    fecha: '2026',
    pp: 'EyE',
    ppId: 'eye',
    evento: 'Metas no domiciliarias año 3: P&C 60%, Plástico 25%, Metal 42%',
    certeza: 'determinado',
    fuente: 'DS 12/2020, tabla metas no domiciliarias',
  },
  // 2027
  {
    fecha: 'Ene 2027',
    pp: 'ALU',
    ppId: 'alu',
    evento: 'Entrada en vigor de metas de recolección y valorización',
    certeza: 'determinado',
    fuente: 'DS 47/2023',
  },
  {
    fecha: '2027',
    pp: 'EyE',
    ppId: 'eye',
    evento: 'Vence compensación entre materiales domiciliarios (art. 21 DS12). Cada material debe cumplir por separado.',
    certeza: 'determinado',
    fuente: 'DS 12/2020, artículo 21',
  },
  {
    fecha: '2027',
    pp: 'EyE',
    ppId: 'eye',
    evento: 'Metas domiciliarias año 4: P&C 18%, Cart.líq. 15%, Metal 15%, Plástico 11%, Vidrio 22%',
    certeza: 'determinado',
    fuente: 'DS 12/2020',
  },
  // 2028
  {
    fecha: '~2028',
    pp: 'P+AEE',
    ppId: 'paee',
    evento: 'Inicio cumplimiento metas (24 meses post-publicación DO). Otros AEE: 3%, Pilas: 3%.',
    certeza: 'estimado',
    fuente: 'Decreto P+AEE. Fecha exacta depende de publicación DO.',
  },
  {
    fecha: 'Antes ene 2028',
    pp: 'NFU',
    ppId: 'nfu',
    evento: 'Revisión obligatoria del DS 8/2019 (art. 35 Reglamento)',
    certeza: 'determinado',
    fuente: 'DS 8/2019, artículo 35: "a lo menos cada 5 años desde la completa entrada en vigencia"',
  },
  {
    fecha: '~2028',
    pp: 'EyE',
    ppId: 'eye',
    evento: 'Revisión DS 12/2020 (5 años desde vigencia completa sep 2023)',
    certeza: 'estimado',
    fuente: 'Reglamento general: revisión cada 5 años. No tiene fecha obligatoria fija como DS8.',
  },
  {
    fecha: '2028',
    pp: 'EyE',
    ppId: 'eye',
    evento: 'Metas domiciliarias año 5: P&C 23%, Cart.líq. 19%, Metal 17%, Plástico 14%, Vidrio 26%',
    certeza: 'determinado',
    fuente: 'DS 12/2020',
  },
  {
    fecha: '2028',
    pp: 'NFU',
    ppId: 'nfu',
    evento: 'Metas suben a 90% (Cat. A y B)',
    certeza: 'determinado',
    fuente: 'DS 8/2019',
  },
  // 2029+
  {
    fecha: '~2029',
    pp: 'P+AEE',
    ppId: 'paee',
    evento: 'Primer informe de cumplimiento de metas P+AEE ante SMA',
    certeza: 'estimado',
    fuente: 'Un año después del inicio de metas',
  },
  {
    fecha: '~2030',
    pp: 'P+AEE',
    ppId: 'paee',
    evento: 'Inicio metas AIT (6%) y Paneles FV (6%) — año 3 del decreto',
    certeza: 'estimado',
    fuente: 'Decreto P+AEE, tabla de metas',
  },
  {
    fecha: '2032',
    pp: 'EyE',
    ppId: 'eye',
    evento: 'Metas no domiciliarias alcanzan tope: P&C 85%, Plástico 55%, Metal 70%',
    certeza: 'determinado',
    fuente: 'DS 12/2020',
  },
  {
    fecha: '2035+',
    pp: 'EyE',
    ppId: 'eye',
    evento: 'Metas domiciliarias en régimen: P&C 70%, Cart.líq. 60%, Metal 55%, Plástico 45%, Vidrio 65%',
    certeza: 'determinado',
    fuente: 'DS 12/2020',
  },
  // Pendientes sin fecha
  {
    fecha: 'Sin fecha',
    pp: 'BFU',
    ppId: 'bfu',
    evento: 'Publicación decreto de metas (post consulta pública abril 2026)',
    certeza: 'pendiente',
    fuente: 'MMA',
  },
  {
    fecha: 'Sin fecha',
    pp: 'Textiles',
    ppId: 'textiles',
    evento: 'Anteproyecto de decreto, consulta pública, tramitación',
    certeza: 'pendiente',
    fuente: 'MMA — proceso recién iniciado',
  },
]

export const certezaConfig: Record<Certeza, { label: string; className: string }> = {
  determinado: { label: 'Determinado por decreto', className: 'bg-emerald-900/40 text-emerald-300 border-emerald-800/50' },
  estimado: { label: 'Estimado', className: 'bg-amber-900/40 text-amber-300 border-amber-800/50' },
  pendiente: { label: 'Pendiente de definición', className: 'bg-stone-800 text-stone-400 border-stone-700' },
}
