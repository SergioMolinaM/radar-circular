// src/data/operacion-eye.ts
// Fuentes:
// - País Circular dic 2024: "Radiografía al primer año de total vigencia de la Ley REP"
// - ProREP: sitio web, informes País Circular jul 2024
// - ReSimple: estudio Kyklos publicado en resimple.cl
// - GIRO: declaraciones País Circular dic 2024

// Datos del primer año completo de operación (2024)

export const operacionEyENoDom = {
  totalToneladas: 512000, // ~512 mil ton declaradas
  numSIG: 8, // 4 colectivos + 4 individuales
  distribucion: [
    { sig: 'ReSimple', porcentaje: 81, tipo: 'GRANSIC' },
    { sig: 'ProREP', porcentaje: 15, tipo: 'GRANSIC' },
    { sig: 'GIRO', porcentaje: 3, tipo: 'GRANSIC' },
    { sig: 'Individuales (4)', porcentaje: 1, tipo: 'individual' },
  ],
  fuente: 'País Circular, dic 2024',
}

export const operacionEyEDom = {
  totalToneladas: 857000, // ~857 mil ton declaradas
  numGRANSIC: 2,
  distribucion: [
    { sig: 'ReSimple', porcentaje: 96, tipo: 'GRANSIC' },
    { sig: 'GIRO', porcentaje: 4, tipo: 'GRANSIC' },
  ],
  fuente: 'País Circular, dic 2024',
}

export const datosOperativosGRANSIC = {
  resimple: {
    conveniosMunicipales: 117,
    campanasInstaladas: 1240,
    comunasRecoleccion: 39,
    viviendasCobertura: 1200000,
    fuente: 'País Circular, dic 2024',
  },
  prorep: {
    socios: 610,
    modelo: 'monitoring',
    exclusivo: 'no domiciliario',
    proyectosCirculares: [
      'Caracterización y clasificación de EyE no domiciliarios',
      'Pilotos para mejoramiento de segregación en origen',
      'Mejoras en logística inversa de residuos EyE no dom',
      'Certificación de incorporación de material reciclado',
    ],
    fuente: 'ProREP / País Circular, jul-dic 2024',
  },
  giro: {
    beneficiarios: 140000,
    cobertura: 'Región Metropolitana',
    licitacionesDesiertas: '12 de 14',
    fuente: 'GIRO / País Circular, dic 2024 / MEP EyE',
  },
}
