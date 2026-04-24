// src/data/datos-paee.ts
// Fuentes:
// - País Circular 23-abr-2026: "Contraloría tomó razón del decreto de metas para P+RAEE"
// - MMA comunicado jun 2025: "Consejo de Ministros aprueba decreto P+AEE"
// - País Circular 15-jun-2025: seminario claves nuevo reglamento REP
// - Paz Maluenda (MMA), Mitzy Lagos (Midas), Rodrigo Sagaceta (Wee Chile), Romina Reyes (TRAEE)

export interface MetaPAEE {
  año: number // año de implementación (año 1 = ~2028 si publicación DO en 2026)
  otrosAEE: number // pilas + otros aparatos
  ait: number | null // aparatos intercambio temperatura (desde año 3)
  panelesFV: number | null // paneles fotovoltaicos (desde año 3)
}

// Metas de recolección y valorización (% del POM)
// "Otros AEE" incluye pilas, computadores, celulares, electrodomésticos, etc.
// "AIT" = aparatos de intercambio de temperatura (refrigeradores, AC)
// "Paneles FV" = paneles fotovoltaicos
export const metasPAEE: MetaPAEE[] = [
  { año: 1, otrosAEE: 3, ait: null, panelesFV: null },
  { año: 2, otrosAEE: 5, ait: null, panelesFV: null },
  { año: 3, otrosAEE: 10, ait: 6, panelesFV: 6 },
  { año: 4, otrosAEE: 15, ait: 8, panelesFV: 8 },
  { año: 5, otrosAEE: 20, ait: 10, panelesFV: 10 },
  { año: 6, otrosAEE: 25, ait: 14, panelesFV: 14 },
  { año: 7, otrosAEE: 30, ait: 18, panelesFV: 18 },
  { año: 8, otrosAEE: 35, ait: 22, panelesFV: 22 },
  { año: 9, otrosAEE: 40, ait: 26, panelesFV: 26 },
  { año: 10, otrosAEE: 45, ait: 30, panelesFV: 30 },
]

export const datosClavesPAEE = {
  contraloriaTomaRazon: '20 de abril de 2026',
  pendientePublicacionDO: true,
  plazoParaMetas: '24 meses desde publicación DO',
  productoresAEE: 17000,
  productoresPilas: 3500,
  productoresTotal: 20500,
  tasaReciclajeActual: 4.1, // %
  categorias: [
    {
      nombre: 'Otros Aparatos',
      descripcion: 'Electrodomésticos, computadores, celulares, telecomunicaciones, pilas (<5kg)',
      metaInicio: '3% año 1',
      metaFinal: '45% año 10',
    },
    {
      nombre: 'Aparatos de Intercambio de Temperatura (AIT)',
      descripcion: 'Refrigeradores, aires acondicionados, bombas de calor',
      metaInicio: '6% año 3',
      metaFinal: '30% año 9+',
    },
    {
      nombre: 'Paneles Fotovoltaicos',
      descripcion: 'Paneles solares en desuso. Incorporados durante tramitación del decreto.',
      metaInicio: '6% año 3',
      metaFinal: '30% año 9+',
    },
  ],
  sigEnFormacion: [
    {
      nombre: 'Wee Chile',
      responsable: 'Rodrigo Sagaceta',
      organizacion: 'New Hope Ecotech (NHE)',
    },
    {
      nombre: 'TRAEE',
      responsable: 'Romina Reyes',
      organizacion: 'Cámara de Comercio de Santiago',
    },
  ],
  principalValorizador: {
    nombre: 'Midas Chile',
    responsable: 'Mitzy Lagos, Gerenta de Economía Circular',
    nota: '23 años de operación. Plan de crecimiento 2025-2030 incluye aumento de capacidad para RAEE.',
  },
  timeline: [
    { fecha: '2021', evento: 'Inicio elaboración decreto (procesos separados Pilas y AEE)' },
    { fecha: '2023', evento: 'Fusión procesos Pilas + AEE. Incorporación paneles fotovoltaicos.' },
    { fecha: 'Mayo 2025', evento: 'Resolución MMA con propuesta final de decreto.' },
    { fecha: 'Junio 2025', evento: 'Consejo de Ministros para la Sustentabilidad aprueba decreto.' },
    { fecha: 'Marzo 2026', evento: 'Gobierno retira 43 decretos de Contraloría (cambio de gobierno). P+AEE reingresado a los pocos días.' },
    { fecha: '20 abril 2026', evento: 'Contraloría General toma razón del decreto.' },
    { fecha: 'Próximos días', evento: 'Publicación en Diario Oficial (pendiente).' },
    { fecha: '~2028', evento: 'Inicio cumplimiento de metas (24 meses post-publicación DO).' },
  ],
}
