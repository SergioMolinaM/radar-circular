// src/data/metas-eye.ts
// Fuentes:
// - Metas: Decreto Supremo 12/2020 (MMA), Tablas de metas de recolección y valorización
// - Tonelaje 2024: Estudio Kyklos 2024 "Estadísticas del Reciclaje" (encargado por ANIR-ReSimple)

export interface MetaAnual {
  año: number
  papelCarton: number
  cartonLiquidos: number
  metal: number
  plastico: number
  vidrio: number
}

export const metasDomiciliarias: MetaAnual[] = [
  { año: 2024, papelCarton: 5, cartonLiquidos: 5, metal: 6, plastico: 3, vidrio: 11 },
  { año: 2025, papelCarton: 9, cartonLiquidos: 8, metal: 9, plastico: 6, vidrio: 15 },
  { año: 2026, papelCarton: 14, cartonLiquidos: 11, metal: 12, plastico: 8, vidrio: 19 },
  { año: 2027, papelCarton: 18, cartonLiquidos: 15, metal: 15, plastico: 11, vidrio: 22 },
  { año: 2028, papelCarton: 23, cartonLiquidos: 19, metal: 17, plastico: 14, vidrio: 26 },
  { año: 2029, papelCarton: 28, cartonLiquidos: 23, metal: 21, plastico: 17, vidrio: 31 },
  { año: 2030, papelCarton: 34, cartonLiquidos: 27, metal: 25, plastico: 20, vidrio: 37 },
  { año: 2031, papelCarton: 39, cartonLiquidos: 31, metal: 29, plastico: 23, vidrio: 42 },
  { año: 2032, papelCarton: 45, cartonLiquidos: 36, metal: 32, plastico: 27, vidrio: 47 },
  { año: 2033, papelCarton: 50, cartonLiquidos: 40, metal: 36, plastico: 30, vidrio: 52 },
  { año: 2034, papelCarton: 60, cartonLiquidos: 50, metal: 45, plastico: 37, vidrio: 58 },
  { año: 2035, papelCarton: 70, cartonLiquidos: 60, metal: 55, plastico: 45, vidrio: 65 },
]

export const metasNoDomiciliarias: { año: number; papelCarton: number; plastico: number; metal: number }[] = [
  { año: 2024, papelCarton: 48, plastico: 13, metal: 23 },
  { año: 2025, papelCarton: 54, plastico: 19, metal: 32 },
  { año: 2026, papelCarton: 60, plastico: 25, metal: 42 },
  { año: 2027, papelCarton: 65, plastico: 32, metal: 51 },
  { año: 2028, papelCarton: 71, plastico: 38, metal: 61 },
  { año: 2029, papelCarton: 74, plastico: 42, metal: 64 },
  { año: 2030, papelCarton: 78, plastico: 46, metal: 66 },
  { año: 2031, papelCarton: 81, plastico: 51, metal: 68 },
  { año: 2032, papelCarton: 85, plastico: 55, metal: 70 },
]

export interface TonelajeEyE2024 {
  material: string
  mdp: number
  mgp: number
  tasaValorizacion: number
  enSig: number
  mgpDomEnSig: number
  mgpNoDomEnSig: number
}

export const tonelaje2024: TonelajeEyE2024[] = [
  { material: 'Papel y cartón', mdp: 858672, mgp: 419930, tasaValorizacion: 48.9, enSig: 59.4, mgpDomEnSig: 14.2, mgpNoDomEnSig: 64.7 },
  { material: 'Vidrio', mdp: 450091, mgp: 100641, tasaValorizacion: 22.4, enSig: 80.7, mgpDomEnSig: 21.5, mgpNoDomEnSig: 0 },
  { material: 'Plástico', mdp: 485917, mgp: 99331, tasaValorizacion: 20.4, enSig: 67.0, mgpDomEnSig: 13.1, mgpNoDomEnSig: 34.8 },
  { material: 'Metal', mdp: 142902, mgp: 26258, tasaValorizacion: 18.4, enSig: 64.8, mgpDomEnSig: 1.6, mgpNoDomEnSig: 62.8 },
  { material: 'Cartón para líquidos', mdp: 25676, mgp: 825, tasaValorizacion: 3.2, enSig: 95.9, mgpDomEnSig: 44.0, mgpNoDomEnSig: 0 },
]
