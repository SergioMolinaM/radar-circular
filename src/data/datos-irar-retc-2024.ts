/**
 * Instalaciones IRAR (Recepción y Almacenamiento de Residuos) — RETC Open Data 2024
 * Fuente: datosretc.mma.gob.cl/dataset/instalacion-de-recepcion-y-almacenamiento-de-residuos-no-peligrosos
 * Fecha extracción: diciembre 2025 (dataset 2024)
 * Licencia: Creative Commons Attribution
 *
 * EyE: 102 instalaciones que reciben envases y embalajes (LER 15 01)
 * NFU: 28 instalaciones que reciben neumáticos fuera de uso (LER 16 01 03 / caucho)
 *
 * NOTA: Estos son puntos de INFRAESTRUCTURA DE VALORIZACIÓN (dónde se reciben y procesan residuos),
 * NO cobertura de recolección domiciliaria (eso es ReSimple).
 * Algunas instalaciones aparecen con región "Metropolitana de Santiago" pero coordenadas en otra región
 * (error de registro en RETC — se mantiene tal cual viene en la fuente oficial).
 */

export interface InstalacionIRAR {
  nombre: string;
  razonSocial: string;
  comuna: string;
  region: string;
  lat: number;
  lon: number;
  toneladasAnuales2024: number;
}

// --- 102 instalaciones que reciben Envases y Embalajes (LER 15 01) ---
export const instalacionesEyE: InstalacionIRAR[] = [
  // Antofagasta (3)
  { nombre: 'Recinort', razonSocial: 'SOCIEDAD RECINORT LIMITADA', comuna: 'Antofagasta', region: 'Antofagasta', lat: -23.5486, lon: -70.3903, toneladasAnuales2024: 93.8 },
  { nombre: 'CLIM - SL', razonSocial: 'SERVILINARES SPA', comuna: 'Antofagasta', region: 'Antofagasta', lat: -23.7858, lon: -70.3101, toneladasAnuales2024: 6.6 },
  { nombre: 'Espacio Sustentable Pasaje Orella', razonSocial: 'FUNDACION MR BARBER', comuna: 'María Elena', region: 'Antofagasta', lat: -22.3436, lon: -69.6601, toneladasAnuales2024: 4.0 },
  // Atacama (2)
  { nombre: 'Punto Eco', razonSocial: 'MARIO ENRIQUE ESPEJO PAREDES', comuna: 'Copiapó', region: 'Atacama', lat: -27.4073, lon: -70.2664, toneladasAnuales2024: 179.5 },
  { nombre: 'Cerenor', razonSocial: 'CENTRO DE RECICLAJE DEL NORTE LIMITADA', comuna: 'Tierra Amarilla', region: 'Atacama', lat: -27.4295, lon: -70.2631, toneladasAnuales2024: 22.0 },
  // Coquimbo (2)
  { nombre: 'Eco 360', razonSocial: 'ECO CIRCULAR SPA', comuna: 'Coquimbo', region: 'Coquimbo', lat: -30.2065, lon: -71.2690, toneladasAnuales2024: 14.7 },
  { nombre: 'Copeval Ovalle', razonSocial: 'COMPANIA AGROPECUARIA COPEVAL SA', comuna: 'Ovalle', region: 'Coquimbo', lat: -30.6083, lon: -71.2125, toneladasAnuales2024: 0.6 },
  // Valparaíso (7)
  { nombre: 'CTI Casablanca', razonSocial: 'I MUNICIPALIDAD DE CASABLANCA', comuna: 'Casablanca', region: 'Valparaíso', lat: -33.3229, lon: -71.3899, toneladasAnuales2024: 8.0 },
  { nombre: 'Transportes Paro', razonSocial: 'SOCIEDAD DE TRANSPORTES PARO LIMITADA', comuna: 'Putaendo', region: 'Valparaíso', lat: -32.6968, lon: -70.7340, toneladasAnuales2024: 11.7 },
  { nombre: 'Reciclador Ltda', razonSocial: 'SOC COMERCIAL DE SERVICIOS DE RECICLAJE INTEGRAL LTDA', comuna: 'Quintero', region: 'Valparaíso', lat: -32.7854, lon: -71.5395, toneladasAnuales2024: 1101.1 },
  { nombre: 'Enrique Reyes', razonSocial: 'ENRIQUE ALFONSO REYES CONTRERAS', comuna: 'Santa María', region: 'Valparaíso', lat: -32.7446, lon: -70.6657, toneladasAnuales2024: 6.6 },
  { nombre: 'SOREPA Viña del Mar', razonSocial: 'SOC RECUPERADORA DE PAPEL SPA', comuna: 'Viña del Mar', region: 'Valparaíso', lat: -33.0510, lon: -71.5048, toneladasAnuales2024: 1936.9 },
  { nombre: 'Núcleo Verde', razonSocial: 'NÚCLEO VERDE SPA', comuna: 'Viña del Mar', region: 'Valparaíso', lat: -32.9773, lon: -71.4938, toneladasAnuales2024: 0.3 },
  { nombre: 'Revaloriza', razonSocial: 'RST RESIDUOS SPA', comuna: 'Viña del Mar', region: 'Valparaíso', lat: -32.9850, lon: -71.4918, toneladasAnuales2024: 135.9 },
  // O'Higgins (4)
  { nombre: 'Recimass', razonSocial: 'SOC COMERCIAL RECIMASS LIMITADA', comuna: 'Coinco', region: "O'Higgins", lat: -34.2511, lon: -70.8925, toneladasAnuales2024: 62.8 },
  { nombre: 'Reciclajes Parraguez', razonSocial: 'RECICLAJES PARRAGUEZ SPA', comuna: 'Coltauco', region: "O'Higgins", lat: -34.2766, lon: -71.0688, toneladasAnuales2024: 20.3 },
  { nombre: 'Economía Circular SPA', razonSocial: 'ECONOMÍA CIRCULAR SPA', comuna: 'Rancagua', region: "O'Higgins", lat: -34.1377, lon: -70.7411, toneladasAnuales2024: 56.1 },
  { nombre: 'POCA Reciclajes', razonSocial: 'POCA RECICLAJES SPA', comuna: 'San Vicente', region: "O'Higgins", lat: -34.4539, lon: -70.9945, toneladasAnuales2024: 3.1 },
  // Maule (7)
  { nombre: 'Comercial Cauquenes', razonSocial: 'SOC COMERCIAL CAUQUENES LIMITADA', comuna: 'Cauquenes', region: 'Maule', lat: -35.9704, lon: -72.3165, toneladasAnuales2024: 2.5 },
  { nombre: 'Ortiz Fuenzalida', razonSocial: 'RECUPERADORA DE EXCEDENTES INDUSTRIALES RODOLFO ORTIZ', comuna: 'Curicó', region: 'Maule', lat: -34.9886, lon: -71.2471, toneladasAnuales2024: 581.5 },
  { nombre: 'Schade Yankovic', razonSocial: 'CARMEN LUISA SCHADE YANKOVIC', comuna: 'Curicó', region: 'Maule', lat: -35.0507, lon: -71.2042, toneladasAnuales2024: 126.0 },
  { nombre: 'Ciclo Verde', razonSocial: 'RECICLAJE CICLO VERDE LIMITADA', comuna: 'Curicó', region: 'Maule', lat: -34.9441, lon: -71.2141, toneladasAnuales2024: 20.8 },
  { nombre: 'Ecomaule', razonSocial: 'ECOMAULE SA', comuna: 'Río Claro', region: 'Maule', lat: -35.2008, lon: -71.4019, toneladasAnuales2024: 13.2 },
  { nombre: 'SOREPA Talca', razonSocial: 'SOC RECUPERADORA DE PAPEL SPA', comuna: 'Talca', region: 'Maule', lat: -35.4238, lon: -71.6376, toneladasAnuales2024: 729.1 },
  { nombre: 'Plásticos Vergara', razonSocial: 'GUERNICA PATRICIA EGLANTINA VERGARA', comuna: 'Talca', region: 'Maule', lat: -35.4094, lon: -71.6661, toneladasAnuales2024: 57.0 },
  // Ñuble (6)
  { nombre: 'Comercializadora Unión', razonSocial: 'COMERCIALIZADORA UNION LIMITADA', comuna: 'Chillán', region: 'Ñuble', lat: -36.6063, lon: -72.1023, toneladasAnuales2024: 140.9 },
  { nombre: 'Copeval Chillán', razonSocial: 'COMPANIA AGROPECUARIA COPEVAL SA', comuna: 'Chillán', region: 'Ñuble', lat: -36.5863, lon: -72.1019, toneladasAnuales2024: 7.9 },
  { nombre: 'SOREPA Chillán', razonSocial: 'SOC RECUPERADORA DE PAPEL SPA', comuna: 'Chillán', region: 'Ñuble', lat: -36.5933, lon: -72.1067, toneladasAnuales2024: 668.6 },
  { nombre: 'Castro Santander', razonSocial: 'TRANSPORTES NORA ISABEL CASTRO SANTANDER EIRL', comuna: 'Chillán', region: 'Ñuble', lat: -36.5881, lon: -72.0712, toneladasAnuales2024: 177.7 },
  { nombre: 'Green Route', razonSocial: 'INVERSIONES GREEN ROUTE SPA', comuna: 'Chillán', region: 'Ñuble', lat: -36.5290, lon: -71.9971, toneladasAnuales2024: 0.0 },
  { nombre: 'Liexser', razonSocial: 'SOCIEDAD DE SERVICIOS LIEXSER LTDA', comuna: 'Yungay', region: 'Ñuble', lat: -37.1423, lon: -72.0524, toneladasAnuales2024: 227.5 },
  // Biobío (7)
  { nombre: 'Fuentes San Martín', razonSocial: 'HUMBERTO IGNACIO FUENTES SAN MARTIN', comuna: 'Coronel', region: 'Biobío', lat: -36.9186, lon: -73.1529, toneladasAnuales2024: 39.4 },
  { nombre: 'Resipac', razonSocial: 'RESIDUOS INDUSTRIALES DEL PACIFICO SPA', comuna: 'Los Ángeles', region: 'Biobío', lat: -37.3550, lon: -72.2927, toneladasAnuales2024: 12.4 },
  { nombre: 'Centro acopio Nacimiento', razonSocial: 'RECUPERADORA DE MATERIALES RECICLABLES', comuna: 'Nacimiento', region: 'Biobío', lat: -37.5080, lon: -72.6572, toneladasAnuales2024: 7.7 },
  { nombre: 'Inversiones Ecochile', razonSocial: 'INVERSIONES ECOCHILE SPA', comuna: 'San Pedro de la Paz', region: 'Biobío', lat: -36.8350, lon: -73.1380, toneladasAnuales2024: 10.0 },
  { nombre: 'Recicladora Miramar', razonSocial: 'TRANSPORTES Y RECICLADORA MIRAMAR SPA', comuna: 'San Pedro de la Paz', region: 'Biobío', lat: -36.8348, lon: -73.1378, toneladasAnuales2024: 5.5 },
  { nombre: 'EXCIND', razonSocial: 'SOC RECUPERADORA DE EXCEDENTES INDUSTRIALES LTDA', comuna: 'Talcahuano', region: 'Biobío', lat: -36.7265, lon: -73.1105, toneladasAnuales2024: 532.6 },
  { nombre: 'SOREPA Concepción', razonSocial: 'SOC RECUPERADORA DE PAPEL SPA', comuna: 'Talcahuano', region: 'Biobío', lat: -36.7734, lon: -73.0852, toneladasAnuales2024: 2319.8 },
  // La Araucanía (5)
  { nombre: 'Comercial Morcas (Vidrio)', razonSocial: 'COMERCIAL MORCAS LIMITADA', comuna: 'Lautaro', region: 'La Araucanía', lat: -38.5575, lon: -72.4455, toneladasAnuales2024: 6217.6 },
  { nombre: 'Eco-Lautaro', razonSocial: 'ECO LOGICA SA', comuna: 'Lautaro', region: 'La Araucanía', lat: -38.6038, lon: -72.4469, toneladasAnuales2024: 288.7 },
  { nombre: 'Terranova Trünkay', razonSocial: 'TERRANOVA TRÜNKAY SPA', comuna: 'Padre Las Casas', region: 'La Araucanía', lat: -38.6905, lon: -72.4866, toneladasAnuales2024: 5.7 },
  { nombre: 'SOREPA Temuco', razonSocial: 'SOC RECUPERADORA DE PAPEL SPA', comuna: 'Temuco', region: 'La Araucanía', lat: -38.6923, lon: -72.5219, toneladasAnuales2024: 632.8 },
  { nombre: 'Copeval Victoria', razonSocial: 'COMPANIA AGROPECUARIA COPEVAL SA', comuna: 'Victoria', region: 'La Araucanía', lat: -38.2311, lon: -72.3520, toneladasAnuales2024: 1.4 },
  // Los Ríos (2)
  { nombre: 'Cantero Michillanca', razonSocial: 'TRANSPORTES Y ALMACENAMIENTO DENNIS GABRIEL CANTERO MICHILLANCA EIRL', comuna: 'Lanco', region: 'Los Ríos', lat: -39.4494, lon: -72.7779, toneladasAnuales2024: 13.1 },
  { nombre: 'Recuperadora Los Ríos', razonSocial: 'RECUPERADORA Y RECICLADORA LOS RIOS SPA', comuna: 'Valdivia', region: 'Los Ríos', lat: -39.8583, lon: -73.2426, toneladasAnuales2024: 134.1 },
  // Los Lagos (10)
  { nombre: 'Galpón Circular Ancud', razonSocial: 'I MUNICIPALIDAD DE ANCUD', comuna: 'Ancud', region: 'Los Lagos', lat: -41.8759, lon: -73.8189, toneladasAnuales2024: 4.8 },
  { nombre: 'Nova Terra Dalcahue', razonSocial: 'NOVA TERRA RECICLAJES SPA', comuna: 'Dalcahue', region: 'Los Lagos', lat: -42.2063, lon: -73.7170, toneladasAnuales2024: 1.2 },
  { nombre: 'Copeval Osorno', razonSocial: 'COMPANIA AGROPECUARIA COPEVAL SA', comuna: 'Osorno', region: 'Los Lagos', lat: -40.5361, lon: -73.0792, toneladasAnuales2024: 2.7 },
  { nombre: 'REM Osorno', razonSocial: 'RECICLAJES REM SPA', comuna: 'Osorno', region: 'Los Lagos', lat: -40.5766, lon: -73.1537, toneladasAnuales2024: 27.4 },
  { nombre: 'Mi Gran Chile Osorno', razonSocial: 'SELLO DE RECICLAJE MI GRAN CHILE SPA', comuna: 'Osorno', region: 'Los Lagos', lat: -40.5988, lon: -73.1013, toneladasAnuales2024: 75.8 },
  { nombre: 'Toledo Vergara', razonSocial: 'CAMILA MACARENA TOLEDO VERGARA', comuna: 'Osorno', region: 'Los Lagos', lat: -40.5673, lon: -73.0977, toneladasAnuales2024: 39.9 },
  { nombre: 'Rojas Uribe', razonSocial: 'ANA MARIA ROJAS URIBE', comuna: 'Osorno', region: 'Los Lagos', lat: -40.5831, lon: -73.1719, toneladasAnuales2024: 5.0 },
  { nombre: 'Recimar Puerto Montt', razonSocial: 'RECIMAR SA', comuna: 'Puerto Montt', region: 'Los Lagos', lat: -41.4447, lon: -73.0061, toneladasAnuales2024: 0.6 },
  { nombre: 'Paz Recycling Puerto Montt', razonSocial: 'PAZ RECYCLING CONSULTING SPA', comuna: 'Puerto Montt', region: 'Los Lagos', lat: -41.4309, lon: -72.9542, toneladasAnuales2024: 92.5 },
  { nombre: 'Remap Puerto Varas', razonSocial: 'REMAP SPA', comuna: 'Puerto Varas', region: 'Los Lagos', lat: -41.3761, lon: -72.9995, toneladasAnuales2024: 44.2 },
  // Magallanes (2)
  { nombre: 'Recrea Patagonia', razonSocial: 'RECICLAJE RECREA PATAGONIA LIMITADA', comuna: 'Punta Arenas', region: 'Magallanes', lat: -53.1579, lon: -70.8913, toneladasAnuales2024: 310.5 },
  { nombre: 'Rembre Magallanes', razonSocial: 'REMBRE MAGALLANES SPA', comuna: 'Punta Arenas', region: 'Magallanes', lat: -53.1173, lon: -70.8729, toneladasAnuales2024: 31.8 },
  // Tarapacá (2)
  { nombre: 'Recicla Tarapacá', razonSocial: 'RECICLA TARAPACÁ SPA', comuna: 'Alto Hospicio', region: 'Tarapacá', lat: -20.2454, lon: -70.0988, toneladasAnuales2024: 273.4 },
  { nombre: 'Recynor', razonSocial: 'RECYNOR SPA', comuna: 'Iquique', region: 'Tarapacá', lat: -20.2929, lon: -70.1234, toneladasAnuales2024: 406.7 },
  // Metropolitana (43) — solo las principales por tonelaje
  { nombre: 'SOREPA Pudahuel', razonSocial: 'SOC RECUPERADORA DE PAPEL SPA', comuna: 'Pudahuel', region: 'Metropolitana', lat: -33.3924, lon: -70.7744, toneladasAnuales2024: 35008.2 },
  { nombre: 'SOREPA Puente Alto', razonSocial: 'SOC RECUPERADORA DE PAPEL SPA', comuna: 'Puente Alto', region: 'Metropolitana', lat: -33.6093, lon: -70.5554, toneladasAnuales2024: 17885.8 },
  { nombre: 'Enfaena La Pintana', razonSocial: 'ENFAENA SA', comuna: 'La Pintana', region: 'Metropolitana', lat: -33.6139, lon: -70.6434, toneladasAnuales2024: 15838.4 },
  { nombre: 'SOREPA Carlos Valdovinos', razonSocial: 'SOC RECUPERADORA DE PAPEL SPA', comuna: 'San Joaquín', region: 'Metropolitana', lat: -33.4822, lon: -70.6364, toneladasAnuales2024: 12313.4 },
  { nombre: 'Ecológica Lampa', razonSocial: 'ECO LOGICA SA', comuna: 'Lampa', region: 'Metropolitana', lat: -33.3089, lon: -70.7351, toneladasAnuales2024: 3640.6 },
  { nombre: 'Rembre El Juncal', razonSocial: 'REMBRE SPA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3324, lon: -70.7214, toneladasAnuales2024: 2243.0 },
  { nombre: 'Garibaldi', razonSocial: 'GARIBALDI SA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3800, lon: -70.7434, toneladasAnuales2024: 1265.7 },
  { nombre: 'Río Aconcagua', razonSocial: 'COMERCIAL RIO ACONCAGUA SPA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3735, lon: -70.7194, toneladasAnuales2024: 815.8 },
  { nombre: 'Medina e Hijo', razonSocial: 'SOC RECUPERADORA DE PAPELES Y CARTONES', comuna: 'La Cisterna', region: 'Metropolitana', lat: -33.5294, lon: -70.6780, toneladasAnuales2024: 795.8 },
  { nombre: 'Hope Recoleta', razonSocial: 'HOPE SPA', comuna: 'Recoleta', region: 'Metropolitana', lat: -33.4010, lon: -70.6234, toneladasAnuales2024: 714.3 },
  { nombre: 'Rembre Quilicura', razonSocial: 'REMBRE SPA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3274, lon: -70.7243, toneladasAnuales2024: 712.5 },
  { nombre: 'Abuplast', razonSocial: 'ABUPLAST SPA', comuna: 'Renca', region: 'Metropolitana', lat: -33.4169, lon: -70.6824, toneladasAnuales2024: 676.7 },
  { nombre: 'NNG Plásticos', razonSocial: 'NNG PLASTICOS SPA', comuna: 'La Granja', region: 'Metropolitana', lat: -33.5212, lon: -70.6281, toneladasAnuales2024: 605.3 },
  { nombre: 'Recicla Maipú', razonSocial: 'RECICLA SPA', comuna: 'Maipú', region: 'Metropolitana', lat: -33.5202, lon: -70.7238, toneladasAnuales2024: 576.6 },
  { nombre: 'Kyklos Cerrillos', razonSocial: 'ASESORIAS Y SERVICIOS KYKLOS SPA', comuna: 'Cerrillos', region: 'Metropolitana', lat: -33.5221, lon: -70.7310, toneladasAnuales2024: 522.0 },
  { nombre: 'CCU Renca', razonSocial: 'EMBOTELLADORAS CHILENAS UNIDAS SA', comuna: 'Renca', region: 'Metropolitana', lat: -33.4110, lon: -70.7752, toneladasAnuales2024: 511.1 },
  { nombre: 'Ecobio Quilicura', razonSocial: 'ECOBIO SPA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3802, lon: -70.7545, toneladasAnuales2024: 494.3 },
  { nombre: 'FYJ Renca', razonSocial: 'COMERCIALIZADORA EXCEDENTES PLASTICOS FYJ LTDA', comuna: 'Renca', region: 'Metropolitana', lat: -33.4174, lon: -70.6842, toneladasAnuales2024: 356.1 },
  { nombre: 'Bastías La Pintana', razonSocial: 'RECICLAJES BASTIAS SPA', comuna: 'La Pintana', region: 'Metropolitana', lat: -33.6189, lon: -70.6301, toneladasAnuales2024: 349.3 },
  { nombre: 'Recipet Santiago', razonSocial: 'RECIPET SA', comuna: 'Santiago', region: 'Metropolitana', lat: -33.4672, lon: -70.6768, toneladasAnuales2024: 319.4 },
  { nombre: 'Bendito Residuo', razonSocial: 'COMERCIAL BENDITO RESIDUO SPA', comuna: 'San Bernardo', region: 'Metropolitana', lat: -33.5671, lon: -70.7065, toneladasAnuales2024: 262.9 },
  { nombre: 'Natural Plas Lampa', razonSocial: 'RECICLAJES INDUSTRIALES NATURAL PLAS LTDA', comuna: 'Lampa', region: 'Metropolitana', lat: -33.2813, lon: -70.7438, toneladasAnuales2024: 208.2 },
  { nombre: 'Go Planet La Cisterna', razonSocial: 'GO PLANET SPA', comuna: 'La Cisterna', region: 'Metropolitana', lat: -33.5165, lon: -70.6655, toneladasAnuales2024: 152.3 },
  { nombre: 'López Reciclajes', razonSocial: 'RECICLAJES LOPEZ SPA', comuna: 'San Joaquín', region: 'Metropolitana', lat: -33.5087, lon: -70.6385, toneladasAnuales2024: 148.5 },
  { nombre: 'GAIA WM La Pintana', razonSocial: 'GESTION AMBIENTAL INTEGRADA SPA', comuna: 'La Pintana', region: 'Metropolitana', lat: -33.6223, lon: -70.6424, toneladasAnuales2024: 144.8 },
  { nombre: 'Poliplas', razonSocial: 'POLIPLAS LIMITADA', comuna: 'Independencia', region: 'Metropolitana', lat: -33.4072, lon: -70.6762, toneladasAnuales2024: 108.6 },
  { nombre: 'Reciclados Industriales Maipú', razonSocial: 'RECICLADOS INDUSTRIALES SA', comuna: 'Maipú', region: 'Metropolitana', lat: -33.5248, lon: -70.7308, toneladasAnuales2024: 93.6 },
  { nombre: 'Ecoengranaje', razonSocial: 'ECOENGRANAJE SPA', comuna: 'Estación Central', region: 'Metropolitana', lat: -33.4680, lon: -70.6854, toneladasAnuales2024: 81.2 },
  { nombre: 'Difeza La Pintana', razonSocial: 'COMERCIAL PRAXEDES DEL ROSARIO PIZARRO LANDERO SPA', comuna: 'La Pintana', region: 'Metropolitana', lat: -33.5878, lon: -70.6375, toneladasAnuales2024: 63.6 },
  { nombre: 'Ecoclean Quilicura', razonSocial: 'ECOCLEAN SA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3482, lon: -70.7111, toneladasAnuales2024: 58.2 },
  { nombre: 'REPS La Pintana', razonSocial: 'REPS SPA', comuna: 'La Pintana', region: 'Metropolitana', lat: -33.6007, lon: -70.6089, toneladasAnuales2024: 16.2 },
  { nombre: 'Copeval Paine', razonSocial: 'COMPANIA AGROPECUARIA COPEVAL SA', comuna: 'Paine', region: 'Metropolitana', lat: -33.7770, lon: -70.7463, toneladasAnuales2024: 12.8 },
  { nombre: 'Integral Start Maipú', razonSocial: 'INTEGRALSTART SPA', comuna: 'Maipú', region: 'Metropolitana', lat: -33.5493, lon: -70.7623, toneladasAnuales2024: 10.9 },
  { nombre: 'Norte Verde Quilicura', razonSocial: 'RECUPERADORA NORTE VERDE SPA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3733, lon: -70.7206, toneladasAnuales2024: 9.6 },
  { nombre: 'Verun La Pintana', razonSocial: 'SOC COM VERUN LTDA', comuna: 'La Pintana', region: 'Metropolitana', lat: -33.5884, lon: -70.6632, toneladasAnuales2024: 1.9 },
  { nombre: 'Recycla Pudahuel', razonSocial: 'RECYCLA CHILE SA', comuna: 'Pudahuel', region: 'Metropolitana', lat: -33.3815, lon: -70.7754, toneladasAnuales2024: 1.6 },
  // --- 7 instalaciones declaradas RM en RETC pero algunas ubicadas fuera de RM según coordenadas ---
  { nombre: 'Virutex Ilko San Carlos', razonSocial: 'VIRUTEX ILKO SPA', comuna: 'San Carlos', region: 'Metropolitana', lat: -36.4459, lon: -71.9735, toneladasAnuales2024: 80.1 }, // ⚠️ Coordenadas en Ñuble
  { nombre: 'Eco-PuertoMontt', razonSocial: 'ECO LOGICA SA', comuna: 'Puerto Montt', region: 'Metropolitana', lat: -41.4401, lon: -73.0059, toneladasAnuales2024: 37.1 }, // ⚠️ Coordenadas en Los Lagos
  { nombre: 'Ambipar Los Ángeles', razonSocial: 'AMBIPAR ENVIRONMENT CHILE LIMITADA', comuna: 'Los Ángeles', region: 'Metropolitana', lat: -37.4590, lon: -72.3730, toneladasAnuales2024: 17.1 }, // ⚠️ Coordenadas en Biobío
  { nombre: 'GAIA WM Talca', razonSocial: 'GESTION AMBIENTAL INTEGRADA SPA', comuna: 'Talca', region: 'Metropolitana', lat: -35.4530, lon: -71.5934, toneladasAnuales2024: 14.3 }, // ⚠️ Coordenadas en Maule
  { nombre: 'Labdur Bodegas', razonSocial: 'GESTION AMBIENTAL INTEGRADA SPA', comuna: 'Pudahuel', region: 'Metropolitana', lat: -35.4530, lon: -71.5934, toneladasAnuales2024: 12.8 }, // ⚠️ Dice Pudahuel pero coordenadas en Maule (misma ubicación GAIA WM Talca)
  { nombre: 'Excedentes La Cisterna', razonSocial: 'SOC COMERCIALIZADORA DE EXCEDENTES INDUSTRIALES SPA', comuna: 'La Cisterna', region: 'Metropolitana', lat: -33.5361, lon: -70.6529, toneladasAnuales2024: 9.4 },
  { nombre: 'ET Cerro Los Cóndores', razonSocial: 'GESTION ECOLOGICA DE RESIDUOS SA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3400, lon: -70.7199, toneladasAnuales2024: 1.8 },
];

// --- 28 instalaciones que reciben Neumáticos Fuera de Uso ---
export const instalacionesNFU: InstalacionIRAR[] = [
  // Antofagasta (2)
  { nombre: 'CLIM - SL', razonSocial: 'SERVILINARES SPA', comuna: 'Antofagasta', region: 'Antofagasta', lat: -23.7858, lon: -70.3101, toneladasAnuales2024: 500.1 },
  { nombre: 'Rerchar Chile', razonSocial: 'RERCHAR CHILE SPA', comuna: 'Calama', region: 'Antofagasta', lat: -22.4389, lon: -68.9054, toneladasAnuales2024: 0.0 },
  // Coquimbo (2)
  { nombre: 'Eco 360 (Circular)', razonSocial: 'ECO CIRCULAR SPA', comuna: 'Coquimbo', region: 'Coquimbo', lat: -30.2065, lon: -71.2690, toneladasAnuales2024: 51.3 },
  { nombre: 'Eco 360 SPA', razonSocial: 'ECO 360 SPA', comuna: 'Coquimbo', region: 'Coquimbo', lat: -30.2172, lon: -71.2574, toneladasAnuales2024: 10.4 },
  // Biobío (1)
  { nombre: 'Recicladora Miramar', razonSocial: 'TRANSPORTES Y RECICLADORA MIRAMAR SPA', comuna: 'San Pedro de la Paz', region: 'Biobío', lat: -36.8348, lon: -73.1378, toneladasAnuales2024: 212.7 },
  // La Araucanía (1)
  { nombre: 'Eco-Lautaro', razonSocial: 'ECO LOGICA SA', comuna: 'Lautaro', region: 'La Araucanía', lat: -38.6038, lon: -72.4469, toneladasAnuales2024: 0.0 },
  // Los Lagos (2)
  { nombre: 'MITAM NFU', razonSocial: 'MITAM SPA', comuna: 'Puerto Varas', region: 'Los Lagos', lat: -41.3418, lon: -72.9973, toneladasAnuales2024: 255.9 },
  { nombre: 'Remap', razonSocial: 'REMAP SPA', comuna: 'Puerto Varas', region: 'Los Lagos', lat: -41.3761, lon: -72.9995, toneladasAnuales2024: 567.4 },
  // Tarapacá (1)
  { nombre: 'Recynor', razonSocial: 'RECYNOR SPA', comuna: 'Iquique', region: 'Tarapacá', lat: -20.2929, lon: -70.1234, toneladasAnuales2024: 31.1 },
  // Valparaíso (1)
  { nombre: 'Revaloriza', razonSocial: 'RST RESIDUOS SPA', comuna: 'Viña del Mar', region: 'Valparaíso', lat: -32.9850, lon: -71.4918, toneladasAnuales2024: 0.7 },
  // Metropolitana (19)
  { nombre: 'Ecológica Lampa', razonSocial: 'ECO LOGICA SA', comuna: 'Lampa', region: 'Metropolitana', lat: -33.3089, lon: -70.7351, toneladasAnuales2024: 2767.0 },
  { nombre: 'Enfaena La Pintana', razonSocial: 'ENFAENA SA', comuna: 'La Pintana', region: 'Metropolitana', lat: -33.6139, lon: -70.6434, toneladasAnuales2024: 1274.9 },
  { nombre: 'Michelin MSMR La Negra', razonSocial: 'MICHELIN SPECIALTY MATERIALS RECOVERY SPA', comuna: 'Antofagasta', region: 'Metropolitana', lat: -23.7579, lon: -70.3072, toneladasAnuales2024: 1142.3 },
  { nombre: 'Garibaldi', razonSocial: 'GARIBALDI SA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3800, lon: -70.7434, toneladasAnuales2024: 577.7 },
  { nombre: 'Bastías La Pintana', razonSocial: 'RECICLAJES BASTIAS SPA', comuna: 'La Pintana', region: 'Metropolitana', lat: -33.6189, lon: -70.6301, toneladasAnuales2024: 577.1 },
  { nombre: 'Pedro Aguirre Cerda 5037', razonSocial: 'TRANSFORMACIONES SUSTENTABLES SPA', comuna: 'Cerrillos', region: 'Metropolitana', lat: -33.4868, lon: -70.6995, toneladasAnuales2024: 104.6 },
  { nombre: 'Recipet', razonSocial: 'RECIPET SA', comuna: 'Santiago', region: 'Metropolitana', lat: -33.4672, lon: -70.6768, toneladasAnuales2024: 77.3 },
  { nombre: 'Ecobio Quilicura', razonSocial: 'ECOBIO SPA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3802, lon: -70.7545, toneladasAnuales2024: 38.1 },
  { nombre: 'ACCA Puerto Montt', razonSocial: 'ACCA SPA', comuna: 'Puerto Montt', region: 'Metropolitana', lat: -41.5118, lon: -73.0683, toneladasAnuales2024: 33.4 },
  { nombre: 'NNG Plásticos', razonSocial: 'NNG PLASTICOS SPA', comuna: 'La Granja', region: 'Metropolitana', lat: -33.5212, lon: -70.6281, toneladasAnuales2024: 25.0 },
  { nombre: 'Poliplas', razonSocial: 'POLIPLAS LIMITADA', comuna: 'Independencia', region: 'Metropolitana', lat: -33.4072, lon: -70.6762, toneladasAnuales2024: 20.8 },
  { nombre: 'Los Esteros', razonSocial: 'INDUSTRIAL Y MINERA LOS ESTEROS LTDA', comuna: 'San Bernardo', region: 'Metropolitana', lat: -33.6286, lon: -70.6636, toneladasAnuales2024: 20.3 },
  { nombre: 'Bailac Colina', razonSocial: 'RECAUCHAJES MINEROS BAILAC LTDA', comuna: 'Colina', region: 'Metropolitana', lat: -33.0710, lon: -70.7367, toneladasAnuales2024: 16.2 },
  { nombre: 'Rembre Quilicura', razonSocial: 'REMBRE SPA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3274, lon: -70.7243, toneladasAnuales2024: 10.4 },
  { nombre: 'Recicla Maipú', razonSocial: 'RECICLA SPA', comuna: 'Maipú', region: 'Metropolitana', lat: -33.5202, lon: -70.7238, toneladasAnuales2024: 6.5 },
  { nombre: 'ReciclaMás Maipú', razonSocial: 'RECICLA SPA', comuna: 'Maipú', region: 'Metropolitana', lat: -33.5202, lon: -70.7238, toneladasAnuales2024: 10.3 },
  { nombre: 'Rembre El Juncal', razonSocial: 'REMBRE SPA', comuna: 'Quilicura', region: 'Metropolitana', lat: -33.3324, lon: -70.7214, toneladasAnuales2024: 1.9 },
  { nombre: 'Kyklos Cerrillos', razonSocial: 'ASESORIAS Y SERVICIOS KYKLOS SPA', comuna: 'Cerrillos', region: 'Metropolitana', lat: -33.5221, lon: -70.7310, toneladasAnuales2024: 0.3 },
  { nombre: 'Recycla Pudahuel', razonSocial: 'RECYCLA CHILE SA', comuna: 'Pudahuel', region: 'Metropolitana', lat: -33.3815, lon: -70.7754, toneladasAnuales2024: 0.0 },
];

/**
 * RESUMEN:
 * - EyE: 102 instalaciones en 14 regiones (incluye Atacama, Araucanía, Los Lagos, Magallanes — donde ReSimple no opera)
 * - NFU: 28 instalaciones en 8 regiones
 * - Top EyE por tonelaje: SOREPA (4 plantas: Pudahuel 35k, Puente Alto 18k, San Joaquín 12k, Concepción 2.3k)
 * - Top NFU por tonelaje: Ecológica Lampa (2.8k), Enfaena La Pintana (1.3k), Michelin La Negra (1.1k)
 *
 * ADVERTENCIA sobre región en datos RETC:
 * 5 instalaciones tienen región "Metropolitana de Santiago" pero coordenadas fuera de RM:
 *   - Virutex Ilko: declarada RM, coordenadas en San Carlos (Ñuble)
 *   - Eco-PuertoMontt: declarada RM, coordenadas en Puerto Montt (Los Lagos)
 *   - Ambipar Los Ángeles: declarada RM, coordenadas en Los Ángeles (Biobío)
 *   - GAIA WM Talca: declarada RM, coordenadas en Talca (Maule)
 *   - Labdur Bodegas: declarada Pudahuel, mismas coordenadas que GAIA WM Talca (Maule)
 * Para el mapa, usar coordenadas lat/lon, NO el campo región.
 */
