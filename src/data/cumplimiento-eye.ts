// src/data/cumplimiento-eye.ts
// Fuente: Estudio Kyklos 2024 — Cuadro 14 (pág. 32-33)
// Tres escenarios de cumplimiento de metas 2024

export interface CumplimientoMeta {
  categoria: 'domiciliario' | 'no-domiciliario'
  material: string
  metaRep2024: number
  // Escenario 1: Solo lo reportado por SIG
  mgpSig: number
  cumpleSig: number
  // Escenario 2: Estimación nacional (toda la industria)
  mgpNacional: number
  cumpleNacional: number
  // Escenario 3: Simulación (si todo el MGP nacional se integrara a SIG)
  cumpleSimulacion: number
}

export const cumplimiento2024: CumplimientoMeta[] = [
  // Domiciliarios
  {
    categoria: 'domiciliario',
    material: 'Papel y cartón',
    metaRep2024: 5,
    mgpSig: 14075,
    cumpleSig: 10.3,
    mgpNacional: 99103,
    cumpleNacional: 47.5,
    cumpleSimulacion: 72.7,
  },
  {
    categoria: 'domiciliario',
    material: 'Cartón para líquidos',
    metaRep2024: 5,
    mgpSig: 363,
    cumpleSig: 1.5,
    mgpNacional: 825,
    cumpleNacional: 3.2,
    cumpleSimulacion: 3.4,
  },
  {
    categoria: 'domiciliario',
    material: 'Metal',
    metaRep2024: 6,
    mgpSig: 195,
    cumpleSig: 0.3,
    mgpNacional: 12530,
    cumpleNacional: 11.7,
    cumpleSimulacion: 17.9,
  },
  {
    categoria: 'domiciliario',
    material: 'Plástico',
    metaRep2024: 3,
    mgpSig: 3594,
    cumpleSig: 1.6,
    mgpNacional: 27398,
    cumpleNacional: 8.1,
    cumpleSimulacion: 12.2,
  },
  {
    categoria: 'domiciliario',
    material: 'Vidrio',
    metaRep2024: 11,
    mgpSig: 21599,
    cumpleSig: 5.9,
    mgpNacional: 100641,
    cumpleNacional: 22.4,
    cumpleSimulacion: 27.7,
  },
  // No domiciliarios
  {
    categoria: 'no-domiciliario',
    material: 'Papel y cartón',
    metaRep2024: 48,
    mgpSig: 207425,
    cumpleSig: 55.5,
    mgpNacional: 320827,
    cumpleNacional: 49.3,
    cumpleSimulacion: 85.8,
  },
  {
    categoria: 'no-domiciliario',
    material: 'Plástico',
    metaRep2024: 13,
    mgpSig: 25040,
    cumpleSig: 24.8,
    mgpNacional: 71933,
    cumpleNacional: 49.3,
    cumpleSimulacion: 71.3,
  },
  {
    categoria: 'no-domiciliario',
    material: 'Metal',
    metaRep2024: 23,
    mgpSig: 8618,
    cumpleSig: 38.3,
    mgpNacional: 13728,
    cumpleNacional: 38.4,
    cumpleSimulacion: 61.0,
  },
]
