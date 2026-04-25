// src/data/cumplimiento-eye.ts
// Fuente: Estudio Kyklos 2024 (encargado por ANIR-ReSimple), Cuadro 14, pp. 32-33
// Datos de primer año de operación (2024)
//
// NOTA CRÍTICA SOBRE LOS ESCENARIOS:
// - "Dentro del sistema REP" = tonelaje gestionado por SIG aprobados. ESTE es el que cuenta
//   para cumplimiento de metas según DS12 art. 22.
// - "Fuera del sistema REP" = reciclaje que ocurre en Chile pero NO a través de SIG.
//   Este tonelaje NO cuenta para el cumplimiento de metas bajo la regulación actual.
//   La Ley REP exige gestión a través de un SIG. El reciclaje fuera de SIG es actividad
//   económica legítima pero regulatoriamente invisible.
// - "Total país" = suma de ambos. Es una medida del reciclaje REAL pero NO del cumplimiento REP.

export interface MaterialCumplimiento {
  material: string
  categoria: 'domiciliario' | 'no-domiciliario'
  metaDS12: number           // Meta del decreto para año 1 (%)
  // Dentro del sistema REP (SIG)
  tonSIG: number             // Toneladas gestionadas por SIG
  cumpleSIG: number          // % cumplimiento real (el que cuenta)
  cumpleMeta: boolean        // ¿Cumple la meta?
  // Fuera del sistema REP
  tonFueraSIG: number        // Toneladas recicladas fuera de SIG
  // Total país
  tonTotalPais: number       // SIG + fuera de SIG
  tasaTotalPais: number      // % si se contara TODO el reciclaje nacional
}

export const cumplimiento2024: MaterialCumplimiento[] = [
  // === DOMICILIARIOS ===
  {
    material: 'Papel y cartón',
    categoria: 'domiciliario',
    metaDS12: 5,
    tonSIG: 14075,
    cumpleSIG: 10.3,
    cumpleMeta: true,
    tonFueraSIG: 99103 - 14075,
    tonTotalPais: 99103,
    tasaTotalPais: 47.5,
  },
  {
    material: 'Cartón para líquidos',
    categoria: 'domiciliario',
    metaDS12: 5,
    tonSIG: 363,
    cumpleSIG: 1.5,
    cumpleMeta: false,
    tonFueraSIG: 825 - 363,
    tonTotalPais: 825,
    tasaTotalPais: 3.2,
  },
  {
    material: 'Metal',
    categoria: 'domiciliario',
    metaDS12: 6,
    tonSIG: 195,
    cumpleSIG: 0.3,
    cumpleMeta: false,
    tonFueraSIG: 12530 - 195,
    tonTotalPais: 12530,
    tasaTotalPais: 11.7,
  },
  {
    material: 'Plástico',
    categoria: 'domiciliario',
    metaDS12: 3,
    tonSIG: 3594,
    cumpleSIG: 1.6,
    cumpleMeta: false,
    tonFueraSIG: 27398 - 3594,
    tonTotalPais: 27398,
    tasaTotalPais: 8.1,
  },
  {
    material: 'Vidrio',
    categoria: 'domiciliario',
    metaDS12: 11,
    tonSIG: 21599,
    cumpleSIG: 5.9,
    cumpleMeta: false,
    tonFueraSIG: 100641 - 21599,
    tonTotalPais: 100641,
    tasaTotalPais: 22.4,
  },
  // === NO DOMICILIARIOS ===
  {
    material: 'Papel y cartón',
    categoria: 'no-domiciliario',
    metaDS12: 48,
    tonSIG: 207425,
    cumpleSIG: 55.5,
    cumpleMeta: true,
    tonFueraSIG: 320827 - 207425,
    tonTotalPais: 320827,
    tasaTotalPais: 49.3,
  },
  {
    material: 'Plástico',
    categoria: 'no-domiciliario',
    metaDS12: 13,
    tonSIG: 25040,
    cumpleSIG: 24.8,
    cumpleMeta: true,
    tonFueraSIG: 71933 - 25040,
    tonTotalPais: 71933,
    tasaTotalPais: 49.3,
  },
  {
    material: 'Metal',
    categoria: 'no-domiciliario',
    metaDS12: 23,
    tonSIG: 8618,
    cumpleSIG: 38.3,
    cumpleMeta: true,
    tonFueraSIG: 13728 - 8618,
    tonTotalPais: 13728,
    tasaTotalPais: 38.4,
  },
]

// Resumen
export const resumenCumplimiento = {
  año: 2024,
  fuente: 'Estudio Kyklos 2024, Cuadro 14 (pp. 32-33)',
  tipoFuente: 'sectorial' as const,
  disclaimer: 'Estos datos son estimaciones del estudio Kyklos (encargado por ANIR-ReSimple), no mediciones oficiales de la SMA. El cumplimiento real será determinado por la SMA con base en los informes que presenten los SIG.',
  hallazgoPrincipal: 'En domiciliarios, solo papel y cartón cumple la meta del año 1 dentro del sistema formal. Cartón para líquidos es el único material que incumple incluso considerando todo el reciclaje nacional. En no domiciliarios, los 3 materiales cumplen sus metas.',
  paradoja: 'Chile recicla más de lo que la Ley REP le exige en la mayoría de los materiales. Pero la mayor parte de ese reciclaje ocurre fuera del sistema formal de Sistemas de Gestión creado por la ley. Solo el material gestionado dentro de un SIG cuenta para el cumplimiento de metas.',
}
