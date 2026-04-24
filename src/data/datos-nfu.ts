// src/data/datos-nfu.ts
// Fuentes: Presentación CORFO MEP NFU (nov 2025), SIGA, Valora Más, Chile Neumáticos AG, Informe MEP NFU V1

export interface MetaNFU {
  año: number
  metaCatA: number
  metaCatB: number
}

// DS8/2019 — metas de valorización NFU (% del POM año anterior)
// Cat A: neumáticos de vehículos livianos
// Cat B: neumáticos mineros/industriales
export const metasNFU: MetaNFU[] = [
  { año: 2023, metaCatA: 25, metaCatB: 25 },
  { año: 2024, metaCatA: 50, metaCatB: 50 },
  { año: 2025, metaCatA: 50, metaCatB: 50 },
  { año: 2026, metaCatA: 80, metaCatB: 80 },
  { año: 2027, metaCatA: 80, metaCatB: 80 },
  { año: 2028, metaCatA: 90, metaCatB: 90 },
]

export interface GestorNFURegion {
  region: string
  recoleccion: number
  almacenamiento: number
  valorizacion: number
  total: number
}

// Gestores registrados RETC 2025
export const gestoresNFU: GestorNFURegion[] = [
  { region: 'Metropolitana', recoleccion: 30, almacenamiento: 1, valorizacion: 8, total: 39 },
  { region: 'Antofagasta', recoleccion: 7, almacenamiento: 1, valorizacion: 9, total: 17 },
  { region: 'Tarapacá', recoleccion: 5, almacenamiento: 1, valorizacion: 3, total: 9 },
  { region: 'Los Lagos', recoleccion: 4, almacenamiento: 3, valorizacion: 0, total: 7 },
  { region: 'Otras regiones', recoleccion: 0, almacenamiento: 0, valorizacion: 0, total: 33 },
]

export const datosClaveNFU = {
  gestoresTotalRETC: 105,
  ctipInput2023: 88570,
  ctipInput2025: 94360,
  recauchajeTonAnual: 6333,
  stockAcumuladoTon: 20000,
  importadoresTotal: 475,
  importadoresSinSig: 409, // 86% de 475
  porcentajeFreeRiders: 86,
  sgcOperativos: ['Neuvol', 'Valora Más', 'SIGA'],
  revisionDS8Antes: 'Enero 2028',
}
