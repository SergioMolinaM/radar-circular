// src/pages/Acerca.tsx
import { ExternalLink } from 'lucide-react'

const fuentes = [
  {
    nombre: 'RETC Open Data',
    org: 'Ministerio del Medio Ambiente',
    url: 'https://datosretc.mma.gob.cl/',
    descripcion: '17 datasets abiertos: sistemas de gestión aprobados, productores de productos prioritarios, residuos no peligrosos por generador y destinatario.',
  },
  {
    nombre: 'SNIFA',
    org: 'Superintendencia del Medio Ambiente',
    url: 'https://snifa.sma.gob.cl/',
    descripcion: 'Fiscalizaciones, procedimientos sancionatorios, registro de sanciones firmes, catastro de unidades fiscalizables, estadísticas.',
  },
  {
    nombre: 'Economía Circular MMA',
    org: 'Ministerio del Medio Ambiente',
    url: 'https://economiacircular.mma.gob.cl/',
    descripcion: 'Expedientes de cada producto prioritario, manuales REP, consultas públicas, resoluciones exentas.',
  },
  {
    nombre: 'BCN Ley Chile',
    org: 'Biblioteca del Congreso Nacional',
    url: 'https://www.bcn.cl/leychile/',
    descripcion: 'Textos completos de la Ley 20.920, DS 12/2020 (EyE), DS 8/2019 (NFU), DS 47/2023 (ALU) y toda la normativa vigente.',
  },
  {
    nombre: 'Portal SMA',
    org: 'Superintendencia del Medio Ambiente',
    url: 'https://portal.sma.gob.cl/',
    descripcion: 'Comunicados oficiales, programa de fiscalización, devolución de garantías, resoluciones.',
  },
  {
    nombre: 'Fondo para el Reciclaje',
    org: 'Ministerio del Medio Ambiente',
    url: 'https://fondoreciclaje.mma.gob.cl/',
    descripcion: 'Proyectos municipales financiados, convocatorias, rendiciones. 12 llamados desde 2018, $2.700 millones transferidos, 140 proyectos.',
  },
  {
    nombre: 'Ventanilla Única RETC',
    org: 'Ministerio del Medio Ambiente',
    url: 'https://vu.mma.gob.cl/',
    descripcion: 'Portal de declaración de productos prioritarios puestos en mercado. Resolución Exenta N°4771 (julio 2025) requiere declaración obligatoria.',
  },
  {
    nombre: 'SISREP',
    org: 'Superintendencia del Medio Ambiente',
    url: 'https://portal.sma.gob.cl/index.php/sma-pone-a-disposicion-plataforma-de-reporte-para-dar-cumplimiento-a-la-ley-rep/',
    descripcion: 'Sistema de Reporte REP. Operativo desde enero 2025. Registro público de SIG habilitados con productores que los componen. Reportes mensuales, informes de cumplimiento, auditor externo.',
  },
  {
    nombre: 'IEMA 2024',
    org: 'Ministerio del Medio Ambiente (SINIA)',
    url: 'https://sinia.mma.gob.cl/',
    descripcion: 'Informe del Estado del Medio Ambiente 2024. Plataforma interactiva con más de 250 indicadores en 9 capítulos, incluyendo economía circular y gestión de residuos.',
  },
  {
    nombre: 'ANIR / Kyklos',
    org: 'Asociación Nacional de la Industria del Reciclaje',
    url: 'https://anir.cl/',
    descripcion: 'Estudio Comparativo de Materiales (anual desde 2018). Datos de MDP, MGP, CTIP y tasas de valorización por material. Incluye Clúster Automotriz (ALU, BFU, NFU) y Envases y Embalajes.',
  },
]

const estudios = [
  {
    nombre: 'Estudio Kyklos 2024',
    autor: 'Kyklos (encargado por ANIR-ReSimple)',
    descripcion: 'Estadísticas del Reciclaje 2024: Preliminar Envases y Embalajes. Tonelaje MDP/MGP por material, CTIP, escenarios de cumplimiento. Fuente primaria de datos de tonelaje.',
  },
  {
    nombre: 'Informe Figueroa',
    autor: 'Nicolás Figueroa, Ph.D., Instituto de Economía PUC',
    descripcion: 'Ley 20.920: Objetivos, Incentivos, Brechas y Propuestas. Marco teórico-económico sobre la contabilización de residuos y principio "todo residuo valorizado cuenta".',
  },
  {
    nombre: 'Propuesta MEP REP EyE',
    autor: 'Mesa de Economía Popular CORFO (2025)',
    descripcion: '12 organizaciones, 16 sesiones, 27 participantes. Diagnóstico de trabas y propuestas para la implementación de la Ley REP en envases y embalajes.',
  },
  {
    nombre: 'Informe MEP NFU',
    autor: 'Mesa de Economía Popular CORFO (2025)',
    descripcion: '7 sesiones, 32 participantes. Diagnóstico de trabas y propuestas para neumáticos fuera de uso.',
  },
]

export function Acerca() {
  return (
    <div className="p-8 max-w-3xl space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">Acerca de Radar Circular</h2>
        <div className="space-y-4 text-stone-400 leading-relaxed">
          <p>
            Radar Circular es una plataforma pública de inteligencia sobre la implementación
            de la Ley 20.920 de Responsabilidad Extendida del Productor en Chile.
          </p>
          <p>
            El objetivo es hacer visible, con datos reales y trazables a fuente oficial,
            el estado de avance del sistema REP: productos prioritarios, sistemas de gestión,
            metas de recolección y valorización, fiscalización, cumplimiento y las trabas
            identificadas por los propios actores del ecosistema.
          </p>
          <p>
            La información estatal sobre la Ley REP está dispersa en múltiples plataformas
            (RETC, SNIFA, MMA, SMA, BCN, Fondo para el Reciclaje). Radar Circular las
            reúne en un solo lugar, con contexto analítico.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Fuentes oficiales</h3>
        <div className="space-y-3">
          {fuentes.map((f) => (
            <div key={f.nombre} className="p-4 rounded-lg border border-stone-800">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <p className="font-medium text-stone-200">{f.nombre}</p>
                  <p className="text-xs text-stone-500">{f.org}</p>
                </div>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-200 shrink-0"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
              <p className="text-sm text-stone-400">{f.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Estudios y documentos de referencia</h3>
        <div className="space-y-3">
          {estudios.map((e) => (
            <div key={e.nombre} className="p-4 rounded-lg border border-stone-800">
              <p className="font-medium text-stone-200">{e.nombre}</p>
              <p className="text-xs text-stone-500 mb-1">{e.autor}</p>
              <p className="text-sm text-stone-400">{e.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-stone-500 pt-4">
        Desarrollado por Tercera Letra — Narrativa · Evidencia · Tecnología.
      </p>
    </div>
  )
}
