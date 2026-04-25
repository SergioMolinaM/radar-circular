/**
 * Benchmarking Internacional — Sistemas EPR de Envases y Embalajes
 * Compilado: 26 abril 2026
 * 
 * FUENTES VERIFICADAS:
 * - Eurostat 2023 (publicado oct 2025): packaging waste statistics
 * - EEA "Waste recycling in Europe" (2023 data)
 * - CITEO Francia: rapport 2024 (publicado oct 2025)
 * - Verpackungsgesetz Alemania / EEA country profile 2025
 * - Korea MOE / ChemLinked EPR system
 * - Colombia: Resolución 1407/2018 + Ley 2232/2022
 * - Brasil: PNRS Ley 12305/2010
 * - Chile: DS12/2020 + SNIFA DatosAbiertos2024
 *
 * ⚠️ Los datos de cada país corresponden al año más reciente disponible
 * y verificado. Las tasas no son directamente comparables entre sí sin
 * considerar diferencias metodológicas (punto de cálculo del reciclaje,
 * definición de "valorización", inclusión/exclusión de exportaciones, etc.).
 * Eurostat armonizó la metodología en 2020, lo que causó una caída del 3,4%
 * en las tasas reportadas por la UE ese año.
 */

export interface PaisBenchmark {
  pais: string;
  region: string;
  anioEPR: number;           // Año de inicio del sistema EPR para envases
  anioData: number;          // Año de los datos reportados
  tasaReciclajeGlobalPct: number | null;  // Tasa general de reciclaje de envases
  tasaPorMaterial: {
    papelCarton?: number;
    vidrio?: number;
    plastico?: number;
    metal?: number;
    cartonLiquidos?: number;
  };
  metaVigente: string;       // Meta legal vigente
  modeloEPR: string;         // Descripción breve del modelo
  fuenteDato: string;
  notaClave: string;
}

export const benchmarkInternacional: PaisBenchmark[] = [
  // --- UNIÓN EUROPEA (agregado) ---
  {
    pais: 'Unión Europea (27)',
    region: 'Europa',
    anioEPR: 1994,
    anioData: 2023,
    tasaReciclajeGlobalPct: 67.5,
    tasaPorMaterial: {
      plastico: 42.1,
      // Papel/cartón, vidrio, metal: tasas superiores a 70% en promedio UE
    },
    metaVigente: 'PPWR 2025: 65% global, 50% plástico, 70% vidrio, 75% papel/cartón, 70% metal. Meta 2030: 70% global, 55% plástico.',
    modeloEPR: 'Directiva 94/62/CE. PROs competitivos en la mayoría de estados. Nuevo Reglamento PPWR (Reg. 2025/40) vigente desde 2025, vinculante desde ago 2026.',
    fuenteDato: 'Eurostat, packaging waste statistics 2023 (publicado oct 2025)',
    notaClave: '7 países ya superan meta 2030 del 70%: Bélgica (79,7%), Países Bajos (75,8%), Italia (75,6%), Chequia (74,8%), Eslovenia (73,6%), Eslovaquia (71,9%), España (70,5%).',
  },

  // --- ALEMANIA ---
  {
    pais: 'Alemania',
    region: 'Europa',
    anioEPR: 1991,
    anioData: 2022,
    tasaReciclajeGlobalPct: 65,
    tasaPorMaterial: {
      plastico: 52.2,
      // Papel/cartón >85%, vidrio >80%, metal >90% (datos EEA)
    },
    metaVigente: 'VerpackG 2019: 90% vidrio, 90% papel/cartón, 80% aluminio, 80% hojalata, 63% plástico (desde 2022).',
    modeloEPR: 'Sistema dual competitivo (9+ PROs). Grüner Punkt como marca histórica. ZSVR como registro central. Eco-modulación obligatoria por diseño para reciclabilidad. Pfand (depósito) para envases de bebidas con 98% retorno.',
    fuenteDato: 'EEA country profile Germany 2025 + Eurostat 2022',
    notaClave: 'Pioneer EPR desde 1991 (35 años). Modelo de referencia mundial. Generación alta (227 kg/hab, 28% sobre promedio UE) pero reciclaje también alto. Metas más exigentes que la UE. Plástico >50% por primera vez en 2022.',
  },

  // --- FRANCIA ---
  {
    pais: 'Francia',
    region: 'Europa',
    anioEPR: 1992,
    anioData: 2024,
    tasaReciclajeGlobalPct: 69,
    tasaPorMaterial: {
      papelCarton: 77,
      vidrio: 88,
      plastico: 26,
      metal: 92,    // Acero; aluminio más bajo
    },
    metaVigente: 'Ley AGEC 2020: eliminación total de plásticos de un solo uso para 2040. 100% plástico reciclado para 2025 (no alcanzado). 5% reúso envases para 2023.',
    modeloEPR: 'CITEO como PRO principal (20.000+ empresas). Adelphe para no domiciliario. Eco-modulación por reciclabilidad y presencia de materiales perturbadores. Extensión sorting a 98% de hogares en 2024.',
    fuenteDato: 'CITEO rapport 2024 (oct 2025) + ReCoRe/Veolia France profile',
    notaClave: 'Plástico en 26% es el punto débil (debajo del promedio UE de 42%). Acero lidera con 92%. Ley AGEC es la más ambiciosa de Europa en prohibición de plásticos. Nuevo PRO para envases industriales (LEKO) desde 2025.',
  },

  // --- BÉLGICA ---
  {
    pais: 'Bélgica',
    region: 'Europa',
    anioEPR: 1994,
    anioData: 2023,
    tasaReciclajeGlobalPct: 79.7,
    tasaPorMaterial: {
      plastico: 59.5,
    },
    metaVigente: 'Ya supera meta PPWR 2030 (70%).',
    modeloEPR: 'Fost Plus (domiciliario) + VAL-I-PAC (industrial). Sistema de bolsas azules PMD (Plastic, Metal, Drinks cartons). Expansión a "Nuevo Saco Azul" en 2021 que amplió materiales aceptados.',
    fuenteDato: 'Eurostat 2023',
    notaClave: 'Líder mundial en tasa de reciclaje de envases. Plástico 59,5% es la más alta de la UE. Modelo de bolsa azul PMD es referencia para sistemas domiciliarios.',
  },

  // --- COREA DEL SUR ---
  {
    pais: 'Corea del Sur',
    region: 'Asia',
    anioEPR: 2003,
    anioData: 2024,
    tasaReciclajeGlobalPct: null, // No hay dato agregado comparable
    tasaPorMaterial: {},
    metaVigente: 'MOE fija tasas anuales por material. Vidrio ~80%, papel ~90%, plástico ~60%, metal ~80% (tasas obligatorias 2024, fuente ChemLinked).',
    modeloEPR: 'Cooperativas de reciclaje (Mutual Aid Cooperatives). Productores pagan cuotas proporcionales. Recargo del 30% si no cumplen. Reemplazó sistema de depósito WDR en 2003. MOE + KECO como fiscalizadores.',
    fuenteDato: 'ChemLinked South Korea EPR System + OECD 2019 + RKC-MPD',
    notaClave: 'Incremento del 70% en tasas de reciclaje entre 2003 y 2017 (OECD). Metas obligatorias anuales por material más altas que Chile. Sistema maduro con 21 años de operación.',
  },

  // --- COLOMBIA ---
  {
    pais: 'Colombia',
    region: 'América Latina',
    anioEPR: 2018,
    anioData: 2024,
    tasaReciclajeGlobalPct: null,
    tasaPorMaterial: {},
    metaVigente: 'Res. 1407/2018 + Res. 803/2024: 30% aprovechamiento mínimo de envases puestos en mercado. Ley 2232/2022: eliminación gradual de 21 plásticos de un solo uso para 2030.',
    modeloEPR: 'Planes individuales o colectivos de gestión ambiental. ANLA como fiscalizador. Metodología multicriterio para planes colectivos. No hay PROs formales como en Europa.',
    fuenteDato: 'Res. 1407/2018 MADS + Ley 2232/2022 + ANLA PAPGAREE',
    notaClave: 'Sistema incipiente. Primer informe de avance obligatorio en 2024. Meta de 30% es inferior a las metas DS12 de Chile para no domiciliario (5%-45% progresivo). No hay datos públicos de cumplimiento comparables al SNIFA chileno.',
  },

  // --- BRASIL ---
  {
    pais: 'Brasil',
    region: 'América Latina',
    anioEPR: 2010,
    anioData: 2024,
    tasaReciclajeGlobalPct: null,
    tasaPorMaterial: {},
    metaVigente: 'PNRS Ley 12305/2010: responsabilidad compartida por ciclo de vida. Acuerdos sectoriales voluntarios. Decreto 11.413/2023 establece créditos de reciclaje (certificados de reciclaje verificables).',
    modeloEPR: 'Responsabilidad compartida (no EPR puro). Acuerdos sectoriales por flujo: neumáticos (Reciclanip desde 1999), agroquímicos (inpEV), aceites lubricantes. Envases generales sin sistema obligatorio de metas cuantitativas hasta 2023.',
    fuenteDato: 'PNRS + Mundo EXPO PACK + Inncontext análisis regional',
    notaClave: 'Modelo de "responsabilidad compartida" diferente al EPR europeo. No tiene metas cuantitativas comparables al DS12 chileno. Reciclaje avanza principalmente por mercado informal (catadores/cooperativas). Decreto 2023 introduce certificados de reciclaje como innovación.',
  },

  // --- CHILE ---
  {
    pais: 'Chile',
    region: 'América Latina',
    anioEPR: 2016,
    anioData: 2024,
    tasaReciclajeGlobalPct: 33,  // Estimación Kyklos/ANIR 2024
    tasaPorMaterial: {
      papelCarton: 48.3,
      vidrio: 24.1,
      plastico: 20.0,   // Todos los plásticos, estimación Kyklos
      metal: 18.4,       // Envases, estimación Kyklos
      cartonLiquidos: 3.2,
    },
    metaVigente: 'DS12/2020: domiciliario 3% año 2 → 60% año 12. No domiciliario 5% año 2 → 55-65% año 12 (varía por material). Revisión DS12 pendiente.',
    modeloEPR: 'Ley 20.920 (2016). GRANSIC para domiciliario (ReSimple, GIRO). SIG colectivos e individuales para no domiciliario (ProREP, Campo Limpio, individuales). SMA fiscaliza vía SISREP. 35 SIG aprobados. 2.757 productores, 410 CI.',
    fuenteDato: 'SNIFA DatosAbiertos2024 (oficial SMA) + Kyklos/ANIR 2024 (estimación mercado)',
    notaClave: 'Año 2 de vigencia (2024). Tasa global 33% comparable a promedio UE de hace 15 años (~2008). Brecha domiciliario vs no domiciliario: 16,6% vs 59,3% del material valorizado pasa por SIG. >50% del reciclaje ocurre fuera del sistema formal REP. Cartón para líquidos (3,2%) y metal domiciliario (0,2%) son los materiales más críticos.',
  },
];

/**
 * ANÁLISIS COMPARATIVO — HALLAZGOS CLAVE (solo lo que los datos soportan):
 *
 * 1. MADUREZ DEL SISTEMA:
 *    - Alemania tiene 35 años de EPR (1991), Chile tiene 2 años de metas vigentes (2023).
 *    - La UE tardó ~15 años en pasar de ~35% a ~67% de reciclaje de envases.
 *    - Chile parte en 33% con 2 años de sistema operativo.
 *    → No es razonable comparar tasas absolutas; sí es útil comparar trayectorias.
 *
 * 2. MODELO COMPETITIVO vs MONOPOLIO:
 *    - Alemania pasó de 1 PRO (DSD, 1991-2003) a 9+ PROs competitivos → redujo costos.
 *    - Francia tiene 1 PRO dominante (CITEO) + 1 nuevo competidor (LEKO desde 2025).
 *    - Chile tiene 2 GRANSIC domiciliarios (ReSimple 95% + GIRO 5% de línea base).
 *    → El mercado chileno es casi monopólico en domiciliario. GIRO tiene mejor tasa
 *      de cumplimiento pero 19x menos volumen.
 *
 * 3. PLÁSTICO COMO PUNTO DÉBIL UNIVERSAL:
 *    - Francia: 26%, la más baja de sus materiales
 *    - UE promedio: 42,1%
 *    - Chile: 20% (Kyklos) / 1,6% domiciliario ReSimple (SNIFA)
 *    → El plástico es difícil en todas partes. Chile no es excepción.
 *
 * 4. DEPÓSITO-RETORNO (DRS):
 *    - Alemania: Pfand con 98% retorno en envases de bebidas
 *    - 12 países UE con DRS para aluminio → 76,3% reciclaje latas
 *    - Chile: no tiene DRS
 *    → DRS es el mecanismo más efectivo para envases de bebidas.
 *      Su ausencia en Chile explica parte de la brecha en aluminio (0,2% domiciliario).
 *
 * 5. AMÉRICA LATINA:
 *    - Chile es el sistema EPR más avanzado de la región (único con metas cuantitativas
 *      vigentes y fiscalización activa SMA).
 *    - Colombia tiene meta de 30% pero sin datos públicos de cumplimiento.
 *    - Brasil no tiene metas cuantitativas para envases generales.
 *    → Chile lidera en marco regulatorio pero la implementación está en fase temprana.
 *
 * 6. ECO-MODULACIÓN:
 *    - Alemania: obligatoria por diseño para reciclabilidad (ZSVR publica estándar mínimo).
 *    - Francia: CITEO aplica bonificaciones/penalizaciones por material y diseño.
 *    - Chile: DS12 no contempla eco-modulación. Es una oportunidad para la revisión del decreto.
 */
