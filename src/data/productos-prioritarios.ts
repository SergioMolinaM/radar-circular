// src/data/productos-prioritarios.ts

export type EstadoDecreto =
  | 'vigente'
  | 'pre-publicacion'
  | 'consulta-publica'
  | 'en-tramitacion'

export interface SistemaGestion {
  nombre: string
  tipo: 'colectivo' | 'individual' | 'GRANSIC'
  estado: 'operativo' | 'en-formacion'
}

export interface ProductoPrioritario {
  id: string
  nombre: string
  nombreCorto: string
  decreto: string | null
  estadoDecreto: EstadoDecreto
  fechaVigencia: string | null
  descripcion: string
  sistemasGestion: SistemaGestion[]
  color: string
}

export const productosPrioritarios: ProductoPrioritario[] = [
  {
    id: 'eye',
    nombre: 'Envases y Embalajes',
    nombreCorto: 'EyE',
    decreto: 'DS 12/2020',
    estadoDecreto: 'vigente',
    fechaVigencia: 'Septiembre 2023',
    descripcion:
      'Papel y cartón, cartón para líquidos, vidrio, plástico y metal. Residuos domiciliarios y no domiciliarios con metas diferenciadas.',
    sistemasGestion: [
      { nombre: 'ReSimple', tipo: 'GRANSIC', estado: 'operativo' },
      { nombre: 'ProREP', tipo: 'GRANSIC', estado: 'operativo' },
      { nombre: 'GIRO', tipo: 'GRANSIC', estado: 'operativo' },
    ],
    color: '#4A7C59',
  },
  {
    id: 'nfu',
    nombre: 'Neumáticos Fuera de Uso',
    nombreCorto: 'NFU',
    decreto: 'DS 8/2019',
    estadoDecreto: 'vigente',
    fechaVigencia: 'Enero 2023',
    descripcion:
      'Neumáticos categoría A (vehículos livianos) y B (mineros/industriales). Primer producto prioritario con metas activas.',
    sistemasGestion: [
      { nombre: 'Neuvol', tipo: 'colectivo', estado: 'operativo' },
      { nombre: 'Valora Más', tipo: 'colectivo', estado: 'operativo' },
      { nombre: 'SIGA', tipo: 'colectivo', estado: 'operativo' },
    ],
    color: '#2D3436',
  },
  {
    id: 'alu',
    nombre: 'Aceites Lubricantes Usados',
    nombreCorto: 'ALU',
    decreto: 'DS 47/2023',
    estadoDecreto: 'vigente',
    fechaVigencia: 'Enero 2027',
    descripcion:
      'Aceites lubricantes y grasas. Decreto vigente con obligaciones que entran en vigor en 2027.',
    sistemasGestion: [],
    color: '#6C5B3E',
  },
  {
    id: 'paee',
    nombre: 'Pilas y Aparatos Eléctricos y Electrónicos',
    nombreCorto: 'P+AEE',
    decreto: 'DS P+AEE',
    estadoDecreto: 'pre-publicacion',
    fechaVigencia: null,
    descripcion:
      'Contraloría tomó razón el 20 de abril de 2026. Pendiente publicación en Diario Oficial. Incluye pilas (<5kg), aparatos eléctricos y electrónicos, y paneles fotovoltaicos. ~20.500 empresas reguladas. Tasa actual de reciclaje: 4,1%.',
    sistemasGestion: [
      { nombre: 'Wee Chile', tipo: 'colectivo', estado: 'en-formacion' },
      { nombre: 'TRAEE', tipo: 'colectivo', estado: 'en-formacion' },
    ],
    color: '#0984E3',
  },
  {
    id: 'bfu',
    nombre: 'Baterías Fuera de Uso',
    nombreCorto: 'BFU',
    decreto: null,
    estadoDecreto: 'consulta-publica',
    fechaVigencia: null,
    descripcion:
      'Consulta pública cerrada en abril de 2026. Decreto en elaboración.',
    sistemasGestion: [],
    color: '#E17055',
  },
  {
    id: 'textiles',
    nombre: 'Textiles',
    nombreCorto: 'TEX',
    decreto: null,
    estadoDecreto: 'en-tramitacion',
    fechaVigencia: null,
    descripcion:
      'Expediente iniciado en julio de 2025. Producto prioritario más reciente incorporado por el MMA.',
    sistemasGestion: [],
    color: '#A29BFE',
  },
]
