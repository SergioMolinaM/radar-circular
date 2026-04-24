// src/data/fiscalizacion-rep.ts
// Fuente: SNIFA (snifa.sma.gob.cl) + Comunicado SMA 3 junio 2025
// "Fiscalización Ley REP: SMA inicia los primeros procedimientos sancionatorios"

export interface ProcesoSancionatorio {
  id: string
  titular: string
  productoPrioritario: string
  ppId: string
  tipoInfraccion: string
  descripcion: string
  fechaInicio: string
  estado: 'en-curso' | 'resuelto' | 'firme'
  snifaUrl: string | null
}

export const procesosSancionatorios: ProcesoSancionatorio[] = [
  {
    id: 'SNIFA-4136',
    titular: 'Huawei',
    productoPrioritario: 'Envases y Embalajes',
    ppId: 'eye',
    tipoInfraccion: 'No contar con Sistema de Gestión autorizado',
    descripcion:
      'La SMA constató que Huawei introdujo al mercado nacional envases y embalajes (metales, papeles, cartón y plástico) los años 2022, 2023 y 2024, sin contar con un SIG autorizado desde septiembre de 2023. Infracción gravísima según art. 39 letra b) de la Ley 20.920.',
    fechaInicio: 'Junio 2025',
    estado: 'en-curso',
    snifaUrl: null,
  },
  {
    id: 'SNIFA-4137',
    titular: 'Insacomex',
    productoPrioritario: 'Neumáticos Fuera de Uso',
    ppId: 'nfu',
    tipoInfraccion: 'No informar toneladas ni operaciones de manejo',
    descripcion:
      'Insacomex, SGI de NFU en la Región de Valparaíso, no informó las toneladas de neumáticos ingresadas al mercado durante 2022 ni las operaciones de valorización del periodo 2023. Infracción gravísima según art. 39 letra d) de la Ley 20.920.',
    fechaInicio: 'Junio 2025',
    estado: 'en-curso',
    snifaUrl: 'https://snifa.sma.gob.cl/Sancionatorio/Ficha/4137',
  },
]

export interface HitoFiscalizacion {
  fecha: string
  evento: string
  detalle: string
}

export const hitosFiscalizacion: HitoFiscalizacion[] = [
  {
    fecha: 'Septiembre 2023',
    evento: 'Inicio obligaciones EyE',
    detalle: 'Entran en vigor las metas de recolección y valorización del DS 12/2020 para envases y embalajes.',
  },
  {
    fecha: 'Enero 2023',
    evento: 'Inicio obligaciones NFU',
    detalle: 'Entran en vigor las metas del DS 8/2019 para neumáticos fuera de uso.',
  },
  {
    fecha: 'Junio 2025',
    evento: 'Primeros sancionatorios REP',
    detalle: 'La SMA inicia los dos primeros procedimientos sancionatorios por incumplimiento de la Ley REP: Huawei (EyE) e Insacomex (NFU).',
  },
  {
    fecha: 'Noviembre 2025',
    evento: 'Devolución de garantías',
    detalle: 'La SMA devuelve 8 garantías a Sistemas de Gestión colectivos que cumplieron sus obligaciones.',
  },
]

export const datosGeneralesFiscalizacion = {
  garantiasDevueltas: 8,
  totalProcedimientosSancionatorios: 2,
  infracciones: {
    gravisimas: ['No contar con SIG autorizado (art. 39 b)', 'Entregar información falsa (art. 39 d)'],
  },
  freeRidersEstimados: {
    eye: { total: 17000, enSig: 2000, fuente: 'Estudio Kyklos 2024 / SII' },
    nfu: { total: 475, sinSig: 409, porcentaje: 86, fuente: 'Chile Neumáticos AG / MEP NFU' },
  },
}
