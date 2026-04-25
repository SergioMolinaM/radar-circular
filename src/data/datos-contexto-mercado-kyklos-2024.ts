/**
 * Contexto de mercado: Estadísticas del Reciclaje 2024 — Envases y Embalajes
 * Fuente: Estudio ANIR/Kyklos "Estadísticas del Reciclaje 2024 – Envases y Embalajes"
 * Publicado: 4 septiembre 2025 (webinar "De los datos a la acción")
 * Encargado por: ANIR + ReSimple
 * Ejecutado por: Kyklos (Antonia González, jefa de estudios de economía circular)
 *
 * Metodología: análisis arancelario (aduanas), 21 entrevistas con actores clave,
 * información pública (RETC, prensa, reportes), encuesta a 42 gestores de todas las regiones.
 *
 * ⚠️ ADVERTENCIA IMPORTANTE:
 * Estos son DATOS ESTIMADOS por Kyklos/ANIR, NO datos oficiales de la SMA.
 * No tienen el mismo estatus que los DatosAbiertos del SNIFA.
 * Usar como CONTEXTO DE MERCADO, separado visualmente de datos oficiales.
 * En la UI, etiquetar siempre como "Estimación ANIR/Kyklos 2024".
 *
 * Referencia verificable:
 * - País Circular, 8 sep 2025: "Más de la mitad del reciclaje de envases y embalajes
 *   en Chile ocurre fuera del sistema de la Ley REP, revela estudio"
 * - Kyklos, feb 2026: "Estadísticas del reciclaje en Chile 2024: estudio ANIR y Kyklos"
 * - PDF completo: resimple.cl/wp-content/uploads/2025/09/Estudio-Estadisticas-del-Reciclaje-2024
 */

export interface MaterialMercado {
  material: string;
  materialDisponiblePaisTon: number;  // MDP: producción + importación - exportación
  materialGestionadoPaisTon: number;  // MGP: valorizado nacional + exportado con pretratamiento
  tasaValorizacionPct: number;        // MGP / MDP * 100
  pctDentroSIG: number;              // % del MGP que pasa por Sistemas de Gestión
  pctFueraSIG: number;               // % del MGP fuera de los SIG (recicladores base, municipios, gestores independientes)
}

export const contextoMercadoKyklos2024: MaterialMercado[] = [
  {
    material: 'Papel y cartón',
    materialDisponiblePaisTon: 858000,
    materialGestionadoPaisTon: 414930,
    tasaValorizacionPct: 48.3,
    pctDentroSIG: 52.7,
    pctFueraSIG: 47.3,
  },
  {
    material: 'Vidrio',
    materialDisponiblePaisTon: 458000,
    materialGestionadoPaisTon: 110641,
    tasaValorizacionPct: 24.1,
    pctDentroSIG: 21.5,
    pctFueraSIG: 78.5,
  },
  {
    material: 'Plástico (todos)',
    materialDisponiblePaisTon: 486000,    // ~485.917 según PDF
    materialGestionadoPaisTon: 100000,    // "aproximadamente 100.000 toneladas" — País Circular
    tasaValorizacionPct: 20.0,            // "20%" — País Circular
    pctDentroSIG: 28.8,
    pctFueraSIG: 71.2,
  },
  {
    material: 'Metal (envases)',
    materialDisponiblePaisTon: 142000,    // ~141.773 según ANIR cierre 2025 (incluye aluminio + hojalata)
    materialGestionadoPaisTon: 26258,     // dato exacto del PDF
    tasaValorizacionPct: 18.4,            // "18,4%" — País Circular (para envases EyE)
    pctDentroSIG: 33.6,
    pctFueraSIG: 66.4,
  },
  {
    material: 'Cartón para líquidos',
    materialDisponiblePaisTon: 26160,
    materialGestionadoPaisTon: 825,
    tasaValorizacionPct: 3.2,
    pctDentroSIG: 44.0,
    pctFueraSIG: 56.0,
  },
];

// Subtotales verificados por material específico (fuente: PDF Kyklos + ANIR cierre 2025)
export const detallesPlastico = {
  PET: { mdpTon: 91789, mgpTon: 20536, tasaPct: 22.4, nota: 'Gestión íntegra por actores no socios ANIR' },
  PS:  { mdpTon: 11940, mgpTon: 32,    tasaPct: 0.3,  nota: 'Barreras técnicas y económicas críticas' },
  // PP, PE, hojalata: datos estimados por Kyklos en cuadro 10 del PDF — no verificables individualmente
};

export const detallesAluminio = {
  envasesAluminio: { mgpTon: 12232, tasaPct: 29.3, nota: 'Más de 50% gestionado por socios ANIR. Alto valor de mercado facilita recolección informal.' },
  // Aluminio automotriz (ALU): 57.438 ton, 47.6% — fuera del alcance EyE, es sector automotriz
};

// Totales agregados
export const resumenMercado2024 = {
  totalMDP: 1963258,         // Material Disponible País total EyE
  totalMGP: 646000,          // Material Gestionado País (aprox.) — "alrededor de 646.000" País Circular
  tasaGlobal: 33,            // "cercana al 33%" — País Circular
  pctMDPenSIG: 67,           // "67% (1.316.258)" del MDP declarado en algún SIG
  pctMDPfueraSIG: 33,        // "33% de material afecto a la ley que no está siendo declarado"
  pctMGPenSIG: 43.4,         // "43,4% (280.908 toneladas)" del MGP pasa por SIG
  mgpEnSIG: 280908,          // Toneladas gestionadas dentro de SIG
  mgpFueraSIG: 365092,       // ~646.000 - 280.908 = gestionadas fuera de SIG
  hallazgoClave: 'Más de la mitad del reciclaje de EyE en Chile ocurre fuera del sistema formal de la Ley REP',
};

/**
 * DATOS COMPLEMENTARIOS DEL ESTUDIO ANIR/KYKLOS CIERRE 2025:
 * (Fuente: País Circular, 20 feb 2026 — "ANIR presenta estadísticas de reciclaje 2024 y Anuario 2025")
 *
 * - Vidrio: 458k MDP, 110.641 MGP (24,1%), 55% gestionado por socios ANIR
 *   → 319k+ ton sin valorización
 * - Cartón: 858k MDP, 414.930 MGP (48,3%) — mejor desempeño del sistema
 * - PET: 91.789 MDP, 20.536 MGP (22,4%) — dos plantas BtB nuevas en 2024
 * - Aluminio envases: 12.232 MGP (29,3%) — alto valor de mercado
 * - Cartón líquidos: 26.160 MDP, 825 MGP (3,2%) — situación crítica
 * - PS: 11.940 MDP, 32 MGP (0,3%) — casi nula valorización
 * - Capacidad instalada país: supera volúmenes tratados (subutilización >80% en algunos flujos)
 *
 * CITAS VERIFICADAS (parafraseadas, no textuales):
 * - Antonia González (Kyklos): el reciclaje en Chile existe como red activa,
 *   pero hay una red paralela a los SIG con recicladores base, municipios y gestores
 *   que no se integran formalmente a la Ley REP
 * - Javier Fuentes (ReSimple): se necesita modificar el DS12 para contabilizar
 *   material gestionado a nivel nacional, no solo lo que pasa por los SIG
 * - Antonia Biggs (ANIR): hay ventana abierta para ajustes al DS12
 */
