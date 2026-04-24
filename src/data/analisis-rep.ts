// src/data/analisis-rep.ts
// Fuentes: Matriz Consolidada MEP EyE (26-09-25), Informe Figueroa PUC,
// Aportes ProREP/GIRO/MMA/ReSimple/ANIR/SOFOFA, Informe MEP NFU V1

export interface Traba {
  id: string
  pp: 'eye' | 'nfu'
  nombre: string
  nombreGIRO?: string // renombramiento propuesto por GIRO
  descripcion: string
  datosClave: string[]
  propuestas: string[]
}

export const trabasEyE: Traba[] = [
  {
    id: 'eye-t1',
    pp: 'eye',
    nombre: 'Material valorizado fuera de los Sistemas de Gestión',
    nombreGIRO: 'Existencia de material que opera por fuera de la REP',
    descripcion:
      'El 56,6% del material gestionado en el país opera fuera de los sistemas formales de la Ley REP. El sistema de contabilización actual solo reconoce tonelaje procesado dentro de SIG, ignorando el ecosistema de reciclaje preexistente que mueve más material que el sistema formal.',
    datosClave: [
      '56,6% del MGP opera fuera de SIG',
      '83,4% del MGP domiciliario fuera de SIG',
      'Aluminio: 98,5% del reciclaje fuera de SIG',
      'Solo ~2.000 de ~17.000 empresas adheridas a SIG',
    ],
    propuestas: [
      'Artículo 22 bis del DS12: reconocer tonelaje valorizado fuera de SIG (ProREP + ReSimple tienen propuesta redactada)',
      'Certificado de valorización en punto de procesamiento (propuesta Figueroa PUC)',
      'Repartición proporcional al POM de material sin SIG asignado',
      'Artículo 49 bis DS12: "sistemas complementarios" certificados por MMA (propuesta SOFOFA)',
    ],
  },
  {
    id: 'eye-t2',
    pp: 'eye',
    nombre: 'Brechas administrativas en la implementación',
    nombreGIRO: 'Brechas administrativas que impiden la correcta implementación',
    descripcion:
      'Las licitaciones de los SIG presentan tasas altas de deserción, planes de gestión rígidos, y plazos lentos de evaluación regulatoria. GIRO reportó 12 de 14 licitaciones desiertas.',
    datosClave: [
      'GIRO: 12 de 14 licitaciones desiertas',
      'Fecha de elección de SIG (30 junio) sin información de tarifas disponible',
      'Restricción de comunicación directa SG-gestores',
      'Garantías hasta UF 20.000 como barrera de entrada',
    ],
    propuestas: [
      'Portal tipo Mercado Público para licitaciones REP',
      'Plazos fijos estandarizados para evaluación de planes e informes',
      'Flexibilizar art. 35 DS12 (operación de IRAs)',
      'Consolidar sistema de garantías anuales',
    ],
  },
  {
    id: 'eye-t3',
    pp: 'eye',
    nombre: 'Bajo conocimiento y participación',
    nombreGIRO: 'Bajo conocimiento y participación de consumidores, empresas y municipios',
    descripcion:
      'Solo el 14% de las empresas obligadas están adheridas a un SIG. Los convenios municipales para recolección son voluntarios. La segregación en origen es deficiente.',
    datosClave: [
      'Solo 14% de empresas adheridas a SIG',
      'Convenios municipales voluntarios',
      'Sin programa nacional de educación ambiental en colegios',
    ],
    propuestas: [
      'Exigencia en Mercado Público de adhesión a SIG para proveedores del Estado',
      'Programa Nacional de educación ambiental en colegios (desde marzo 2026)',
      'Registro público web de productores cumpliendo',
      'Campañas de comunicación MMA con metas y fiscalización',
    ],
  },
]

export const trabasNFU: Traba[] = [
  {
    id: 'nfu-t1',
    pp: 'nfu',
    nombre: 'Baja demanda de subproductos',
    descripcion:
      'No hay mercado consolidado para gránulo de caucho, aceite pirolítico ni negro de humo. Con metas que saltan de 50% a 80% en 2026, el riesgo de saturación de plantas y acopios es inminente.',
    datosClave: [
      '20.000 ton de stock acumulado (Valora Más)',
      'Salto de metas 50%→80% en 2026',
      '4-5 regiones sin plantas valorizadoras',
    ],
    propuestas: [
      'Convenios MOP/SERVIU/Codelco para asfalto con caucho reciclado',
      'Ley de Compras Públicas: cláusulas de contenido reciclado NFU',
      'Norma Técnica INN para uso de material reciclado NFU',
      'Reconocer recauchaje (~6.333 ton/año) como cumplimiento de meta',
    ],
  },
  {
    id: 'nfu-t2',
    pp: 'nfu',
    nombre: 'Rigidez en fijación de metas',
    descripcion:
      'Metas calculadas sobre parque automotriz (no desecho real). Permisología de 10-12 meses. El DS8 es "demasiado rígido" según los actores del sector.',
    datosClave: [
      'Permisología: 10-12 meses',
      'Metas calculadas sobre parque automotriz, no desecho real',
      'Revisión DS8 obligatoria antes de enero 2028',
    ],
    propuestas: [
      'Promedios móviles de 3 años (en vez de año anterior)',
      'Traspaso de superávit de recolección/valorización al año siguiente',
      'Permisología acelerada coordinada entre MMA y otros servicios',
    ],
  },
  {
    id: 'nfu-t3',
    pp: 'nfu',
    nombre: 'Falta de trazabilidad',
    descripcion:
      'El 86% de los importadores de neumáticos no tienen sistema de gestión. La Declaración Jurada de Aduana no se verifica contra el registro REP.',
    datosClave: [
      '475 importadores, 86% sin SG',
      'Declaración Jurada de Aduana sin verificación contra ID REP',
    ],
    propuestas: [
      'Mínimo de importación no afecto a Ley REP para PYMES/personas naturales',
      'Fiscalización Aduanera: verificar DJ contra ID REP',
      'Habilitación en SINADER de tecnologías de valorización NFU',
    ],
  },
]

export const marcaAnalitica = {
  titulo: 'El problema central',
  tesis:
    'La Ley REP creó un sistema cerrado de gestión de residuos que convive con un ecosistema de reciclaje preexistente más grande que el sistema formal. La regulación no permite contabilizar el material valorizado fuera de los Sistemas de Gestión, lo que genera incentivos perversos: los SIG compiten con gestores eficientes existentes en vez de complementarlos.',
  autoridad:
    'Nicolás Figueroa (Ph.D. Economía U. Minnesota, Profesor Titular PUC) propone el principio "todo residuo valorizado cuenta" como solución: fijar metas, asignar responsabilidad, pero dejar al mercado la reasignación de tareas mediante certificados de valorización.',
  fuente: 'Informe "Ley 20.920: Objetivos, Incentivos, Brechas y Propuestas" — Nicolás Figueroa, Instituto de Economía PUC',
  criticaMMA:
    'El MMA (regulador) criticó formalmente la calidad de la Matriz MEP EyE: "descripción extremadamente breve", sin línea causal, citas "sesgadas y no representativas", y beneficios esperados sin priorizar. Radar Circular busca aportar exactamente esa capa analítica que falta.',
}
