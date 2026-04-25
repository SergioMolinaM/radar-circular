// src/data/datos-territoriales.ts
// Fuentes:
// - Gestores NFU por región: Presentación CORFO MEP NFU, nov 2025 (105 total, coincide con datos-nfu.ts)
// - Cobertura GRANSIC: DS12/2020 art. 35 + INE Censo 2024 (estimación por población >15k)
// - Convenios ReSimple: País Circular, dic 2024

export interface DatoRegion {
  codigo: string        // Código INE región (01-16)
  nombre: string
  gestoresNFU: number   // Gestores RETC inscritos para NFU
  comunasGRANSIC: string[] // Comunas con obligación art.35 (>15k hab corregida)
  conveniosReSimple: number // Convenios municipales activos
  poblacion: number     // INE Censo 2024 (miles)
}

// Gestores NFU por región — Fuente: Presentación CORFO MEP NFU, nov 2025
// Total: 105 gestores RETC autorizados (verificado contra datosClaveNFU.gestoresTotalRETC)
export const datosRegionales: DatoRegion[] = [
  { codigo: '15', nombre: 'Arica y Parinacota', gestoresNFU: 2, comunasGRANSIC: ['Arica'], conveniosReSimple: 0, poblacion: 252 },
  { codigo: '01', nombre: 'Tarapacá', gestoresNFU: 2, comunasGRANSIC: ['Iquique', 'Alto Hospicio'], conveniosReSimple: 0, poblacion: 382 },
  { codigo: '02', nombre: 'Antofagasta', gestoresNFU: 5, comunasGRANSIC: ['Antofagasta', 'Calama'], conveniosReSimple: 1, poblacion: 691 },
  { codigo: '03', nombre: 'Atacama', gestoresNFU: 2, comunasGRANSIC: ['Copiapó'], conveniosReSimple: 0, poblacion: 314 },
  { codigo: '04', nombre: 'Coquimbo', gestoresNFU: 3, comunasGRANSIC: ['La Serena', 'Coquimbo'], conveniosReSimple: 1, poblacion: 836 },
  { codigo: '05', nombre: 'Valparaíso', gestoresNFU: 8, comunasGRANSIC: ['Valparaíso', 'Viña del Mar', 'Quilpué', 'Villa Alemana', 'San Antonio'], conveniosReSimple: 5, poblacion: 1960 },
  { codigo: '13', nombre: 'Metropolitana', gestoresNFU: 40, comunasGRANSIC: ['Santiago', 'Puente Alto', 'Maipú', 'La Florida', 'Las Condes', 'San Bernardo', 'Peñalolén', 'Ñuñoa', 'Providencia', 'Quilicura', 'Pudahuel', 'La Pintana', 'El Bosque', 'Recoleta', 'Cerro Navia', 'Renca', 'Lo Prado', 'Independencia', 'Estación Central', 'Pedro Aguirre Cerda', 'Lo Espejo', 'La Granja', 'Macul', 'San Joaquín', 'La Cisterna', 'San Miguel', 'Huechuraba', 'Conchalí', 'Vitacura', 'Lo Barnechea', 'La Reina', 'Colina'], conveniosReSimple: 20, poblacion: 7620 },
  { codigo: '06', nombre: "O'Higgins", gestoresNFU: 5, comunasGRANSIC: ['Rancagua'], conveniosReSimple: 2, poblacion: 991 },
  { codigo: '07', nombre: 'Maule', gestoresNFU: 5, comunasGRANSIC: ['Talca', 'Curicó', 'Linares'], conveniosReSimple: 2, poblacion: 1131 },
  { codigo: '16', nombre: 'Ñuble', gestoresNFU: 2, comunasGRANSIC: ['Chillán'], conveniosReSimple: 0, poblacion: 511 },
  { codigo: '08', nombre: 'Biobío', gestoresNFU: 12, comunasGRANSIC: ['Concepción', 'Talcahuano', 'Los Ángeles', 'Coronel', 'Chiguayante', 'San Pedro de la Paz', 'Hualpén'], conveniosReSimple: 4, poblacion: 1663 },
  { codigo: '09', nombre: 'Araucanía', gestoresNFU: 5, comunasGRANSIC: ['Temuco', 'Padre Las Casas'], conveniosReSimple: 1, poblacion: 1013 },
  { codigo: '14', nombre: 'Los Ríos', gestoresNFU: 3, comunasGRANSIC: ['Valdivia'], conveniosReSimple: 1, poblacion: 404 },
  { codigo: '10', nombre: 'Los Lagos', gestoresNFU: 6, comunasGRANSIC: ['Puerto Montt', 'Osorno'], conveniosReSimple: 2, poblacion: 891 },
  { codigo: '11', nombre: 'Aysén', gestoresNFU: 2, comunasGRANSIC: [], conveniosReSimple: 0, poblacion: 107 },
  { codigo: '12', nombre: 'Magallanes', gestoresNFU: 3, comunasGRANSIC: ['Punta Arenas'], conveniosReSimple: 0, poblacion: 178 },
]

export const totalGestoresNFU = datosRegionales.reduce((s, r) => s + r.gestoresNFU, 0) // 105
export const totalConveniosReSimple = datosRegionales.reduce((s, r) => s + r.conveniosReSimple, 0) // 39
export const totalComunasGRANSIC = datosRegionales.reduce((s, r) => s + r.comunasGRANSIC.length, 0)

// Colores por densidad de gestores NFU
export function colorGestoresNFU(n: number): string {
  if (n >= 20) return '#1a7a4c'  // verde oscuro
  if (n >= 10) return '#2d9b6e'  // verde medio
  if (n >= 5) return '#4fb889'   // verde claro
  if (n >= 2) return '#8fd4b4'   // verde pálido
  return '#c8eadb'               // verde muy pálido
}

// Notas de fuente
export const fuentesTerritorial = {
  gestoresNFU: 'Presentación CORFO MEP NFU, nov 2025 — 105 gestores RETC autorizados',
  comunasGRANSIC: 'DS12/2020 art. 35 — Comunas con población corregida >15.000 hab (año 4+). Estimación con datos INE Censo 2024.',
  conveniosReSimple: 'País Circular, dic 2024 — 39 convenios municipales reportados por ReSimple (primer año operación).',
  nota: 'Las comunas GRANSIC son estimaciones basadas en población INE. La lista oficial con población corregida (incluyendo flotante turística) la publica el MMA antes del 1 de enero del año anterior a la obligación. Los convenios ReSimple pueden haber aumentado desde dic 2024.',
}
