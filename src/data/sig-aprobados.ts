// src/data/sig-aprobados.ts
// Fuente: RETC Open Data — "Listado Sistemas de Gestión Aprobados"
// URL: https://datosretc.mma.gob.cl/dataset/sistemas-de-gestion-aprobados
// Archivo: listado-sistemas-de-gestion-aprobados-21-10-2025.xlsx
// Actualización del archivo: 06-11-2025
// Total: 35 SIG aprobados al 21-10-2025

export interface SigAprobado {
  n: number
  nombre: string
  productoPrioritario: 'Envases y embalajes' | 'Neumáticos'
  categoria: string
  tipo: 'Individual' | 'Colectivo' | 'GRANSIC'
  fechaAprobacion: string
  ppId: 'eye' | 'nfu'
}

export const sigAprobados: SigAprobado[] = [
  { n: 1, nombre: 'Goodyear de Chile S.A.I.C', productoPrioritario: 'Neumáticos', categoria: 'Categoría B', tipo: 'Individual', fechaAprobacion: '20 de septiembre 2022', ppId: 'nfu' },
  { n: 2, nombre: 'Michelin Chile Ltda.', productoPrioritario: 'Neumáticos', categoria: 'Categoría B', tipo: 'Individual', fechaAprobacion: '05 de enero 2023', ppId: 'nfu' },
  { n: 3, nombre: 'Bridgestone off the road tire Latin America S A', productoPrioritario: 'Neumáticos', categoria: 'Categoría B', tipo: 'Individual', fechaAprobacion: '13 de enero 2023', ppId: 'nfu' },
  { n: 4, nombre: 'Epiroc Chile S.A.C', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Individual', fechaAprobacion: '13 de enero 2023', ppId: 'nfu' },
  { n: 5, nombre: 'Sierra Gorda S.C.M', productoPrioritario: 'Envases y embalajes', categoria: 'No domiciliario', tipo: 'Individual', fechaAprobacion: '17 de marzo 2023', ppId: 'eye' },
  { n: 6, nombre: 'Complejo Industrial Molynor S.A', productoPrioritario: 'Envases y embalajes', categoria: 'No domiciliario', tipo: 'Individual', fechaAprobacion: '21 de marzo 2023', ppId: 'eye' },
  { n: 7, nombre: 'ReSimple', productoPrioritario: 'Envases y embalajes', categoria: 'Domiciliario', tipo: 'GRANSIC', fechaAprobacion: '29 de marzo 2023', ppId: 'eye' },
  { n: 8, nombre: 'AA Comercial Limitada', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Individual', fechaAprobacion: '13 de abril 2023', ppId: 'nfu' },
  { n: 9, nombre: 'ProREP', productoPrioritario: 'Envases y embalajes', categoria: 'No domiciliario', tipo: 'Colectivo', fechaAprobacion: '21 de abril 2023', ppId: 'eye' },
  { n: 10, nombre: 'Anglo American Sur S.A', productoPrioritario: 'Neumáticos', categoria: 'Categoría B', tipo: 'Individual', fechaAprobacion: '8 de mayo 2023', ppId: 'nfu' },
  { n: 11, nombre: 'Autorrentas del Pacífico SPA', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Individual', fechaAprobacion: '8 de mayo 2023', ppId: 'nfu' },
  { n: 12, nombre: 'ReSimple', productoPrioritario: 'Envases y embalajes', categoria: 'No domiciliario', tipo: 'Colectivo', fechaAprobacion: '20 de junio 2023', ppId: 'eye' },
  { n: 13, nombre: 'Sugal Chile Limitada', productoPrioritario: 'Envases y embalajes', categoria: 'No domiciliario', tipo: 'Individual', fechaAprobacion: '4 de julio 2023', ppId: 'eye' },
  { n: 14, nombre: 'Molymet S.A', productoPrioritario: 'Envases y embalajes', categoria: 'No domiciliario', tipo: 'Individual', fechaAprobacion: '20 de julio 2023', ppId: 'eye' },
  { n: 15, nombre: 'Finning Chile S.A', productoPrioritario: 'Neumáticos', categoria: 'Categoría B', tipo: 'Individual', fechaAprobacion: '8 de agosto 2023', ppId: 'nfu' },
  { n: 16, nombre: 'Coca Cola de Chile S.A', productoPrioritario: 'Envases y embalajes', categoria: 'No domiciliario', tipo: 'Individual', fechaAprobacion: '17 de agosto 2023', ppId: 'eye' },
  { n: 17, nombre: 'Sandvik Chile S.A', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Individual', fechaAprobacion: '12 de septiembre 2023', ppId: 'nfu' },
  { n: 18, nombre: 'Doosan Bobcat Chile S.A', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Individual', fechaAprobacion: '22 de septiembre 2023', ppId: 'nfu' },
  { n: 19, nombre: 'Neuvol', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Colectivo', fechaAprobacion: '28 de septiembre 2023', ppId: 'nfu' },
  { n: 20, nombre: 'GIRO Todos Reciclamos', productoPrioritario: 'Envases y embalajes', categoria: 'Domiciliario', tipo: 'GRANSIC', fechaAprobacion: '5 de octubre 2023', ppId: 'eye' },
  { n: 21, nombre: 'Starco S.A.', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Individual', fechaAprobacion: '11 de octubre 2023', ppId: 'nfu' },
  { n: 22, nombre: 'Comercial Agroimec SPA', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Individual', fechaAprobacion: '24 de octubre 2023', ppId: 'nfu' },
  { n: 23, nombre: 'Insacomex SPA', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Individual', fechaAprobacion: '24 de octubre 2023', ppId: 'nfu' },
  { n: 24, nombre: 'Valora Más', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Colectivo', fechaAprobacion: '31 de octubre 2023', ppId: 'nfu' },
  { n: 25, nombre: 'Campo Limpio', productoPrioritario: 'Envases y embalajes', categoria: 'No domiciliario', tipo: 'Colectivo', fechaAprobacion: '21 de noviembre 2023', ppId: 'eye' },
  { n: 26, nombre: 'GIRO Todos Reciclamos', productoPrioritario: 'Envases y embalajes', categoria: 'No domiciliario', tipo: 'Colectivo', fechaAprobacion: '28 de diciembre 2023', ppId: 'eye' },
  { n: 27, nombre: 'Verallia S.A.', productoPrioritario: 'Envases y embalajes', categoria: 'No domiciliario', tipo: 'Individual', fechaAprobacion: '27 de febrero 2024', ppId: 'eye' },
  { n: 28, nombre: 'Kal Tire Sociedad Anónima', productoPrioritario: 'Neumáticos', categoria: 'Categoría B', tipo: 'Individual', fechaAprobacion: '30 de septiembre 2024', ppId: 'nfu' },
  { n: 29, nombre: 'Distribuidora Divalco S.A.', productoPrioritario: 'Neumáticos', categoria: 'Categoría B', tipo: 'Individual', fechaAprobacion: '30 de octubre 2024', ppId: 'nfu' },
  { n: 30, nombre: 'SIGA', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Colectivo', fechaAprobacion: '17 de enero 2025', ppId: 'nfu' },
  { n: 31, nombre: 'Importadora Eladio Tazbaz Azar Limitada', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Individual', fechaAprobacion: '12 de junio 2025', ppId: 'nfu' },
  { n: 32, nombre: 'Soluciones OTR SPA', productoPrioritario: 'Neumáticos', categoria: 'Categoría B', tipo: 'Individual', fechaAprobacion: '08 de agosto 2025', ppId: 'nfu' },
  { n: 33, nombre: 'Santos Chomba Becerra', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Individual', fechaAprobacion: '09 de octubre 2025', ppId: 'nfu' },
  { n: 34, nombre: 'Salinas y Fabres Sociedad Anónima', productoPrioritario: 'Neumáticos', categoria: 'Categoría B', tipo: 'Individual', fechaAprobacion: '16 de octubre 2025', ppId: 'nfu' },
  { n: 35, nombre: 'Neumáticos Los Ríos Limitada', productoPrioritario: 'Neumáticos', categoria: 'Categoría A', tipo: 'Individual', fechaAprobacion: '16 de octubre 2025', ppId: 'nfu' },
]

// Funciones de consulta
export function getSigPorPP(ppId: string): SigAprobado[] {
  return sigAprobados.filter((sig) => sig.ppId === ppId)
}

// Compatibilidad con Fiscalizacion.tsx (usa sig.total, sig.operativos, sig.enFormacion)
// Los 35 SIG del RETC son todos aprobados/operativos.
// Los 2 SIG en formación (Wee Chile, TRAEE) no están en el dataset RETC porque aún no tienen decreto.
export function contarSigPorEstado() {
  return {
    total: sigAprobados.length + 2, // +2 por Wee Chile y TRAEE (en formación, no en RETC)
    operativos: sigAprobados.length,
    enFormacion: 2, // Wee Chile + TRAEE (P+AEE)
  }
}

export function getResumenSIG() {
  const eye = sigAprobados.filter((s) => s.ppId === 'eye')
  const nfu = sigAprobados.filter((s) => s.ppId === 'nfu')
  return {
    totalAprobados: sigAprobados.length,
    porPP: [
      {
        pp: 'Envases y Embalajes',
        total: eye.length,
        detalle: `${eye.filter((s) => s.tipo === 'GRANSIC').length} GRANSIC · ${eye.filter((s) => s.tipo === 'Colectivo').length} colectivos · ${eye.filter((s) => s.tipo === 'Individual').length} individuales`,
      },
      {
        pp: 'Neumáticos',
        total: nfu.length,
        detalle: `${nfu.filter((s) => s.tipo === 'Colectivo').length} colectivos · ${nfu.filter((s) => s.tipo === 'Individual').length} individuales`,
      },
    ],
    fuenteRetc: 'RETC Open Data — Listado Sistemas de Gestión Aprobados (21-10-2025)',
  }
}
