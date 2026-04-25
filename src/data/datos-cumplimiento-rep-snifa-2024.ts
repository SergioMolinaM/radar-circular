/**
 * Datos de cumplimiento REP — SNIFA Datos Abiertos (SMA)
 * Fuente: snifa.sma.gob.cl/DatosAbiertos → REP → DatosAbiertos2024.xlsx + DatosAbiertos2023.xlsx
 * Descarga: 25 abril 2026
 * Diccionario: "Descripción de los datos_REP_v27Nov2025.pdf" (SMA)
 *
 * DEFINICIONES (textual del diccionario SMA):
 * - Línea base: Estimación de toneladas generadas en el período anterior
 * - Tratamiento (Total): Tratamiento de residuos en favor de la meta (incluye CI informado y CI asignado)
 * - CI informado: Toneladas valorizadas informadas por el SIG a nombre de consumidores industriales
 * - CI asignado: Toneladas valorizadas por CI asignadas al SIG según participación de mercado (solo colectivos)
 *
 * AÑO DE DATOS: 2024 = año 2 de vigencia DS12 (EyE) y año 2 DS8 (NFU)
 * La línea base 2024 corresponde a toneladas puestas en el mercado en 2023.
 * El tratamiento 2024 corresponde a toneladas efectivamente valorizadas durante 2024.
 *
 * METAS DS12 AÑO 2 (2024):
 * - Domiciliario: 3% por subcategoría
 * - No domiciliario: 5% por subcategoría
 *
 * METAS DS8 AÑO 2 (2024) NFU Cat A:
 * - Recolección: 55%
 * - Valorización: 30%
 *
 * ADVERTENCIA: Estos datos NO han sido procesados ni verificados por la SMA.
 * Son datos declarados por los propios SIG. La SMA lo advierte explícitamente.
 */

export interface DeclaracionSIG {
  sistemaGestion: string;
  productoPrioritario: 'Envases' | 'NFU';
  tipo: 'Colectivo' | 'Individual';
  categoria: string;
  subcategoria: string;
  anio: number;
  lineaBaseTon: number | null;
  tratamientoTon: number | null;
  ciInformadoTon: number | null;
  ciAsignadoTon: number | null;
}

// ============================================================
// AÑO 2024 — Dato más reciente disponible (abril 2026)
// ============================================================

export const datosREP2024: DeclaracionSIG[] = [
  // --- EyE DOMICILIARIO — ReSimple ---
  { sistemaGestion: 'ReSimple', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'Domiciliario', subcategoria: 'Cartón para líquidos', anio: 2024, lineaBaseTon: 19032.86, tratamientoTon: 216.23, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'ReSimple', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'Domiciliario', subcategoria: 'Metal', anio: 2024, lineaBaseTon: 67926.86, tratamientoTon: 141.93, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'ReSimple', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'Domiciliario', subcategoria: 'Papel y cartón', anio: 2024, lineaBaseTon: 132255.68, tratamientoTon: 13264.06, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'ReSimple', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'Domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 207175.60, tratamientoTon: 3396.97, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'ReSimple', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'Domiciliario', subcategoria: 'Vidrio', anio: 2024, lineaBaseTon: 339623.44, tratamientoTon: 20961.35, ciInformadoTon: 0, ciAsignadoTon: 0 },

  // --- EyE DOMICILIARIO — GIRO ---
  { sistemaGestion: 'GIRO', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'Domiciliario', subcategoria: 'Cartón para líquidos', anio: 2024, lineaBaseTon: 7187.47, tratamientoTon: 776.18, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'GIRO', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'Domiciliario', subcategoria: 'Metal', anio: 2024, lineaBaseTon: 2149.39, tratamientoTon: 154.66, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'GIRO', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'Domiciliario', subcategoria: 'Papel y cartón', anio: 2024, lineaBaseTon: 9059.50, tratamientoTon: 1073.50, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'GIRO', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'Domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 11554.82, tratamientoTon: 369.38, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'GIRO', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'Domiciliario', subcategoria: 'Vidrio', anio: 2024, lineaBaseTon: 9929.56, tratamientoTon: 1499.64, ciInformadoTon: 0, ciAsignadoTon: 0 },

  // --- EyE NO DOMICILIARIO — ReSimple ---
  { sistemaGestion: 'ReSimple', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Metal', anio: 2024, lineaBaseTon: 12172.00, tratamientoTon: 6063.54, ciInformadoTon: 5111.76, ciAsignadoTon: 951.78 },
  { sistemaGestion: 'ReSimple', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Papel y cartón', anio: 2024, lineaBaseTon: 306035.46, tratamientoTon: 164130.84, ciInformadoTon: 161398.81, ciAsignadoTon: 2732.03 },
  { sistemaGestion: 'ReSimple', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 67176.97, tratamientoTon: 18441.28, ciInformadoTon: 16557.69, ciAsignadoTon: 1883.59 },

  // --- EyE NO DOMICILIARIO — GIRO ---
  { sistemaGestion: 'GIRO', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Metal', anio: 2024, lineaBaseTon: 763.10, tratamientoTon: 1632.39, ciInformadoTon: 1572.72, ciAsignadoTon: 59.67 },
  { sistemaGestion: 'GIRO', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Papel y cartón', anio: 2024, lineaBaseTon: 20875.63, tratamientoTon: 8944.89, ciInformadoTon: 8758.53, ciAsignadoTon: 186.36 },
  { sistemaGestion: 'GIRO', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 4758.17, tratamientoTon: 2726.81, ciInformadoTon: 2593.39, ciAsignadoTon: 133.42 },

  // --- EyE NO DOMICILIARIO — ProREP ---
  { sistemaGestion: 'ProREP', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Metal', anio: 2024, lineaBaseTon: 13775.26, tratamientoTon: 2171.99, ciInformadoTon: 1094.85, ciAsignadoTon: 1077.14 },
  { sistemaGestion: 'ProREP', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Papel y cartón', anio: 2024, lineaBaseTon: 39408.14, tratamientoTon: 42769.28, ciInformadoTon: 42988.48, ciAsignadoTon: 351.80 },
  { sistemaGestion: 'ProREP', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 30343.44, tratamientoTon: 5056.30, ciInformadoTon: 4205.49, ciAsignadoTon: 850.81 },

  // --- EyE NO DOMICILIARIO — Campo Limpio ---
  { sistemaGestion: 'Campo Limpio', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Metal', anio: 2024, lineaBaseTon: 100.57, tratamientoTon: 7.86, ciInformadoTon: 0, ciAsignadoTon: 7.86 },
  { sistemaGestion: 'Campo Limpio', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Papel y cartón', anio: 2024, lineaBaseTon: 711.57, tratamientoTon: 577.35, ciInformadoTon: 571.00, ciAsignadoTon: 6.35 },
  { sistemaGestion: 'Campo Limpio', productoPrioritario: 'Envases', tipo: 'Colectivo', categoria: 'No domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 1434.62, tratamientoTon: 158.23, ciInformadoTon: 0, ciAsignadoTon: 40.23 },

  // --- EyE INDIVIDUALES (No domiciliario) ---
  { sistemaGestion: 'Molynor', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 11.21, tratamientoTon: 79.46, ciInformadoTon: 49.68, ciAsignadoTon: 0 },
  { sistemaGestion: 'Sugal Chile', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Metal', anio: 2024, lineaBaseTon: 360.58, tratamientoTon: 183.42, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Sugal Chile', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 33.96, tratamientoTon: 11.48, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Verallia Chile', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 0, tratamientoTon: 51.20, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Sierra Gorda SCM', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Metal', anio: 2024, lineaBaseTon: 4.70, tratamientoTon: 4.70, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Sierra Gorda SCM', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Papel y cartón', anio: 2024, lineaBaseTon: 0.33, tratamientoTon: 0, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Sierra Gorda SCM', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 11.03, tratamientoTon: 0, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Molymetnos', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Metal', anio: 2024, lineaBaseTon: 19.80, tratamientoTon: 8.95, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Molymetnos', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 26.40, tratamientoTon: 148.50, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Coca-Cola Chile', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Metal', anio: 2024, lineaBaseTon: 38.46, tratamientoTon: 0, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Coca-Cola Chile', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Papel y cartón', anio: 2024, lineaBaseTon: 108.15, tratamientoTon: 26.15, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Coca-Cola Chile', productoPrioritario: 'Envases', tipo: 'Individual', categoria: 'No domiciliario', subcategoria: 'Plástico', anio: 2024, lineaBaseTon: 250.23, tratamientoTon: 0, ciInformadoTon: 0, ciAsignadoTon: 0 },

  // --- NFU COLECTIVOS ---
  { sistemaGestion: 'Neuvol', productoPrioritario: 'NFU', tipo: 'Colectivo', categoria: 'A', subcategoria: '-', anio: 2024, lineaBaseTon: 39982.23, tratamientoTon: 13780.91, ciInformadoTon: 1650.83, ciAsignadoTon: 452.29 },
  { sistemaGestion: 'SIGA', productoPrioritario: 'NFU', tipo: 'Colectivo', categoria: 'A', subcategoria: '-', anio: 2024, lineaBaseTon: 8697.91, tratamientoTon: 282.52, ciInformadoTon: 0, ciAsignadoTon: 98.39 },
  { sistemaGestion: 'Valora Más', productoPrioritario: 'NFU', tipo: 'Colectivo', categoria: 'A', subcategoria: '-', anio: 2024, lineaBaseTon: null, tratamientoTon: null, ciInformadoTon: null, ciAsignadoTon: null }, // Marcado como "pendiente" en el XLSX

  // --- NFU INDIVIDUALES ---
  { sistemaGestion: 'Anglo American Sur', productoPrioritario: 'NFU', tipo: 'Individual', categoria: 'B', subcategoria: '-', anio: 2024, lineaBaseTon: 0, tratamientoTon: 128.97, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Goodyear', productoPrioritario: 'NFU', tipo: 'Individual', categoria: 'B', subcategoria: '-', anio: 2024, lineaBaseTon: 728.90, tratamientoTon: 188.86, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Finning', productoPrioritario: 'NFU', tipo: 'Individual', categoria: 'B', subcategoria: '-', anio: 2024, lineaBaseTon: 160.14, tratamientoTon: 69.81, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Bridgestone OTR', productoPrioritario: 'NFU', tipo: 'Individual', categoria: 'B', subcategoria: '-', anio: 2024, lineaBaseTon: 17686.21, tratamientoTon: 4816.00, ciInformadoTon: 300.00, ciAsignadoTon: 0 },
  { sistemaGestion: 'Michelin Chile', productoPrioritario: 'NFU', tipo: 'Individual', categoria: 'B', subcategoria: '-', anio: 2024, lineaBaseTon: 23806.50, tratamientoTon: 8414.24, ciInformadoTon: 2273.99, ciAsignadoTon: 0 },
  { sistemaGestion: 'Starco', productoPrioritario: 'NFU', tipo: 'Individual', categoria: 'A', subcategoria: '-', anio: 2024, lineaBaseTon: 188.39, tratamientoTon: 97.84, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'HD Hyundai Infracore', productoPrioritario: 'NFU', tipo: 'Individual', categoria: 'A', subcategoria: '-', anio: 2024, lineaBaseTon: 41.75, tratamientoTon: 49.90, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'Autorentas del Pacífico', productoPrioritario: 'NFU', tipo: 'Individual', categoria: 'A', subcategoria: '-', anio: 2024, lineaBaseTon: 880974.36, tratamientoTon: 570.89, ciInformadoTon: 0, ciAsignadoTon: 0 }, // ⚠️ Línea base anómala
  { sistemaGestion: 'Epiroc Chile', productoPrioritario: 'NFU', tipo: 'Individual', categoria: 'A', subcategoria: '-', anio: 2024, lineaBaseTon: 48.06, tratamientoTon: 33.40, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'AA Comercial', productoPrioritario: 'NFU', tipo: 'Individual', categoria: 'A', subcategoria: '-', anio: 2024, lineaBaseTon: 1939.66, tratamientoTon: 1161.59, ciInformadoTon: 0, ciAsignadoTon: 0 },
  { sistemaGestion: 'SIGA', productoPrioritario: 'NFU', tipo: 'Colectivo', categoria: 'A', subcategoria: '-', anio: 2024, lineaBaseTon: 8697.91, tratamientoTon: 282.52, ciInformadoTon: 0, ciAsignadoTon: 98.39 },
];

/**
 * ALERTAS VERIFICADAS SOBRE LOS DATOS:
 *
 * 1. Valora Más (NFU Cat A): línea base marcada literalmente como "pendiente" en el XLSX.
 *    Sin tratamiento reportado. No se puede evaluar cumplimiento.
 *
 * 2. Autorentas del Pacífico (NFU Cat A Individual): línea base 880.974 ton es anómala.
 *    Posible error de unidades o registro. No usar para cálculos agregados sin advertencia.
 *
 * 3. GIRO Metal No Domiciliario: tratamiento (1.632 ton) supera línea base (763 ton) = 214%.
 *    ProREP Papel y cartón No Dom: tratamiento (42.769 ton) supera base (39.408 ton) = 109%.
 *    Puede indicar valorización de stock de años anteriores o discrepancia en declaración de base.
 *    NO es necesariamente un error — la SMA advierte que los datos no han sido verificados.
 *
 * 4. El dato más reciente es año de cumplimiento 2024. El año 3 (2025) se declarará
 *    en mayo-junio 2026 vía SISREP y no está disponible aún.
 *
 * 5. Consumidores industriales catastrados en SISREP: 410 (al 10-abr-2026).
 *    Listado nominal disponible en ConsumidoresIndustriales(20260410).xlsx.
 */
