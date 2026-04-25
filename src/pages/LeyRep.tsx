// src/pages/LeyRep.tsx
import { ExternalLink } from 'lucide-react'

const actores = [
  { nombre: 'Productores', rol: 'Quienes introducen por primera vez un producto prioritario al mercado nacional. Son los principales obligados: deben organizar y financiar la gestión de residuos a través de un Sistema de Gestión.' },
  { nombre: 'Sistemas de Gestión (SIG)', rol: 'Entidades sin fines de lucro que ejecutan los planes de gestión. Pueden ser individuales o colectivos. Los colectivos con gestión domiciliaria se llaman GRANSIC.' },
  { nombre: 'Gestores de residuos', rol: 'Empresas, municipios o recicladores de base que realizan operaciones de manejo: recolección, transporte, pretratamiento y valorización.' },
  { nombre: 'Consumidores', rol: 'Toda persona que genera un residuo de producto prioritario. Los consumidores industriales (establecimientos según OGUC) tienen obligaciones adicionales de reporte.' },
  { nombre: 'Municipios', rol: 'Pueden celebrar convenios con SIG y recicladores de base. Promueven separación en origen y educación ambiental. Acceden al Fondo para el Reciclaje.' },
]

const cronologia = [
  { año: '2016', evento: 'Promulgación Ley 20.920', tipo: 'ley' },
  { año: '2019', evento: 'DS 8 — Decreto de metas para Neumáticos Fuera de Uso', tipo: 'decreto' },
  { año: '2020', evento: 'DS 12 — Decreto de metas para Envases y Embalajes', tipo: 'decreto' },
  { año: 'Ene 2023', evento: 'Inicio de metas NFU (primer PP con obligaciones activas)', tipo: 'hito' },
  { año: 'Sep 2023', evento: 'Inicio de metas EyE', tipo: 'hito' },
  { año: '2024', evento: 'SMA dicta instrucción general REP (R.E. 2279/2024)', tipo: 'regulacion' },
  { año: 'Nov 2024', evento: 'DS 47 — Decreto de metas para Aceites Lubricantes publicado en DO', tipo: 'decreto' },
  { año: 'Ene 2025', evento: 'SISREP operativo — plataforma de reporte SMA', tipo: 'hito' },
  { año: 'Jun 2025', evento: 'Primeros procedimientos sancionatorios REP (Huawei, Insacomex)', tipo: 'hito' },
  { año: 'Jul 2025', evento: 'Textiles incorporados como producto prioritario', tipo: 'decreto' },
  { año: 'Abr 2026', evento: 'Contraloría toma razón decreto P+AEE', tipo: 'decreto' },
  { año: 'Abr 2026', evento: 'Consulta pública BFU cerrada', tipo: 'regulacion' },
]

const tipoColor: Record<string, string> = {
  ley: 'bg-emerald-400',
  decreto: 'bg-blue-400',
  hito: 'bg-amber-400',
  regulacion: 'bg-stone-400',
}

const enlacesOficiales = [
  { label: 'Ley 20.920 en BCN', url: 'https://www.bcn.cl/leychile/navegar?idNorma=1090894' },
  { label: 'Economía Circular MMA', url: 'https://economiacircular.mma.gob.cl/ley-rep/' },
  { label: 'RETC Open Data', url: 'https://datosretc.mma.gob.cl/' },
  { label: 'SNIFA (SMA)', url: 'https://snifa.sma.gob.cl/' },
  { label: 'Portal SMA — Ley REP', url: 'https://portal.sma.gob.cl/index.php/category/ley-rep/' },
  { label: 'Fondo para el Reciclaje', url: 'https://fondoreciclaje.mma.gob.cl/' },
]

export function LeyRep() {
  return (
    <div className="p-8 max-w-4xl space-y-12">
      {/* Qué es */}
      <div>
        <h2 className="text-2xl font-bold mb-4">La Ley REP en Chile</h2>
        <div className="space-y-4 text-stone-400 leading-relaxed">
          <p>
            La Ley 20.920 (2016) establece la Responsabilidad Extendida del Productor como
            instrumento central de la gestión de residuos en Chile. Quien introduce un producto
            prioritario al mercado es responsable de organizar y financiar la recolección y
            valorización de los residuos que ese producto genera al final de su vida útil.
          </p>
          <p>
            Chile fue pionero en Latinoamérica en implementar este sistema. A abril de 2026,
            tres productos tienen metas de valorización activas (neumáticos, envases y embalajes,
            y aceites lubricantes), un cuarto acaba de completar su tramitación ante Contraloría
            (pilas y aparatos eléctricos), y dos más están en proceso (baterías y textiles).
          </p>
        </div>
      </div>

      {/* Cómo funciona */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Cómo funciona el sistema</h3>
        <div className="p-5 rounded-xl border border-stone-800 text-sm text-stone-400 leading-relaxed space-y-3">
          <p>
            <span className="text-stone-200 font-medium">1. Declaración:</span> Los productores
            declaran los productos prioritarios puestos en el mercado a través de Ventanilla Única
            del RETC (MMA).
          </p>
          <p>
            <span className="text-stone-200 font-medium">2. Adhesión:</span> Los productores
            se adhieren a un Sistema de Gestión (individual o colectivo). Los SGC requieren
            informe favorable del TDLC.
          </p>
          <p>
            <span className="text-stone-200 font-medium">3. Plan de gestión:</span> El SIG
            presenta un plan al MMA con estrategia de recolección, valorización y convenios
            municipales. El MMA lo aprueba.
          </p>
          <p>
            <span className="text-stone-200 font-medium">4. Operación:</span> El SIG licita
            la gestión a gestores autorizados. Los GRANSIC celebran convenios con municipios
            para residuos domiciliarios.
          </p>
          <p>
            <span className="text-stone-200 font-medium">5. Reporte:</span> Los SIG reportan
            mensualmente a través del SISREP (SMA): toneladas recolectadas y valorizadas,
            por material, gestor y operación.
          </p>
          <p>
            <span className="text-stone-200 font-medium">6. Fiscalización:</span> La SMA
            verifica el cumplimiento de metas. Puede iniciar procedimientos sancionatorios
            por infracciones gravísimas (art. 39 Ley 20.920).
          </p>
        </div>
      </div>

      {/* Actores */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Actores del ecosistema</h3>
        <div className="space-y-3">
          {actores.map((a) => (
            <div key={a.nombre} className="p-4 rounded-lg border border-stone-800">
              <p className="text-sm font-medium text-stone-200 mb-1">{a.nombre}</p>
              <p className="text-sm text-stone-400">{a.rol}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cronología */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Cronología institucional</h3>
        <p className="text-xs text-stone-500 mb-4">
          Hitos principales de la implementación de la Ley REP.
        </p>
        <div className="space-y-0">
          {cronologia.map((h, i) => (
            <div key={i} className="flex gap-4 pb-5">
              <div className="flex flex-col items-center">
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 ${tipoColor[h.tipo]}`} />
                {i < cronologia.length - 1 && <div className="w-px flex-1 bg-stone-800" />}
              </div>
              <div>
                <p className="text-xs text-stone-500">{h.año}</p>
                <p className="text-sm text-stone-300">{h.evento}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-stone-500 mt-2">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Ley</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400" /> Decreto</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> Hito operativo</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-stone-400" /> Regulación</span>
        </div>
      </div>

      {/* Enlaces */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Fuentes oficiales</h3>
        <p className="text-sm text-stone-400 mb-4">
          Radar Circular no reemplaza estas fuentes. Las consolida y contextualiza.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {enlacesOficiales.map((e) => (
            <a
              key={e.url}
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 rounded-lg border border-stone-800 text-sm text-stone-400 hover:text-stone-200 hover:border-stone-700 transition-colors"
            >
              <ExternalLink size={14} className="shrink-0" />
              {e.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
