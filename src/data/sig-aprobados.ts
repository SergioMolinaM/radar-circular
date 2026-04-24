// src/data/sig-aprobados.ts
// Fuente: RETC Open Data — "Listado Sistemas de Gestión Aprobados" (actualización 06-11-2025)
// URL: https://datosretc.mma.gob.cl/dataset/sistemas-de-gestion-aprobados
// Nota: datos extraídos del XLSX publicado. Verificar actualizaciones en la fuente.

export interface SigAprobado {
  nombre: string
  tipo: 'colectivo' | 'individual' | 'GRANSIC'
  productoPrioritario: string
  ppId: string // match con productosPrioritarios.id
  estado: 'operativo' | 'en-formacion' | 'aprobado'
  fechaAprobacion: string | null
  observaciones: string | null
}

export const sigAprobados: SigAprobado[] = [
  // === ENVASES Y EMBALAJES ===
  // GRANSIC (colectivos con gestión domiciliaria)
  {
    nombre: 'ReSimple',
    tipo: 'GRANSIC',
    productoPrioritario: 'Envases y Embalajes',
    ppId: 'eye',
    estado: 'operativo',
    fechaAprobacion: '2023',
    observaciones: 'Creado por AB Chile. Principal GRANSIC por volumen.',
  },
  {
    nombre: 'ProREP',
    tipo: 'GRANSIC',
    productoPrioritario: 'Envases y Embalajes',
    ppId: 'eye',
    estado: 'operativo',
    fechaAprobacion: '2023',
    observaciones: '610 socios. Cumplió 159% metas 2024 según reportes propios.',
  },
  {
    nombre: 'GIRO',
    tipo: 'GRANSIC',
    productoPrioritario: 'Envases y Embalajes',
    ppId: 'eye',
    estado: 'operativo',
    fechaAprobacion: '2023',
    observaciones: 'Reportó 12 de 14 licitaciones desiertas en sesiones MEP.',
  },
  // Individuales EyE (según RETC, al 21 ene 2024 había 6 individuales + 4 colectivos)
  // Los individuales no son públicos nominalmente en todos los casos.
  // Se registran los colectivos confirmados.

  // === NEUMÁTICOS FUERA DE USO ===
  {
    nombre: 'Neuvol',
    tipo: 'colectivo',
    productoPrioritario: 'Neumáticos Fuera de Uso',
    ppId: 'nfu',
    estado: 'operativo',
    fechaAprobacion: '2023',
    observaciones: null,
  },
  {
    nombre: 'Valora Más',
    tipo: 'colectivo',
    productoPrioritario: 'Neumáticos Fuera de Uso',
    ppId: 'nfu',
    estado: 'operativo',
    fechaAprobacion: '2023',
    observaciones: 'Reporta 20.000 ton de stock acumulado de subproductos sin mercado.',
  },
  {
    nombre: 'SIGA',
    tipo: 'colectivo',
    productoPrioritario: 'Neumáticos Fuera de Uso',
    ppId: 'nfu',
    estado: 'operativo',
    fechaAprobacion: '2023',
    observaciones: 'Sistema Integrado de Gestión Automotriz.',
  },

  // === PILAS + AEE (decreto en pre-publicación) ===
  {
    nombre: 'Wee Chile',
    tipo: 'colectivo',
    productoPrioritario: 'Pilas y Aparatos Eléctricos y Electrónicos',
    ppId: 'paee',
    estado: 'en-formacion',
    fechaAprobacion: null,
    observaciones: 'SIG en formación. Decreto P+AEE pendiente de publicación en Diario Oficial.',
  },
  {
    nombre: 'TRAEE',
    tipo: 'colectivo',
    productoPrioritario: 'Pilas y Aparatos Eléctricos y Electrónicos',
    ppId: 'paee',
    estado: 'en-formacion',
    fechaAprobacion: null,
    observaciones: 'SIG en formación. Decreto P+AEE pendiente de publicación en Diario Oficial.',
  },
]

// Resumen por producto prioritario
export function getSigPorPP(ppId: string): SigAprobado[] {
  return sigAprobados.filter((sig) => sig.ppId === ppId)
}

export function contarSigPorEstado() {
  return {
    total: sigAprobados.length,
    operativos: sigAprobados.filter((s) => s.estado === 'operativo').length,
    enFormacion: sigAprobados.filter((s) => s.estado === 'en-formacion').length,
  }
}
