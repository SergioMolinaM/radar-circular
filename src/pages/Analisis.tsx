// src/pages/Analisis.tsx
import { trabasEyE, trabasNFU, marcaAnalitica } from '../data/analisis-rep'
import { UltimaActualizacion } from '../components/UltimaActualizacion'
import { FuenteDatos } from '../components/FuenteDatos'

function TrabaCard({ traba }: { traba: (typeof trabasEyE)[0] }) {
  return (
    <div className="p-5 rounded-xl border border-stone-800 space-y-4">
      <div>
        <p className="font-semibold text-stone-100 mb-1">{traba.nombre}</p>
        {traba.nombreGIRO && (
          <p className="text-xs text-stone-500 italic">GIRO: "{traba.nombreGIRO}"</p>
        )}
      </div>
      <p className="text-sm text-stone-400">{traba.descripcion}</p>
      <div>
        <p className="text-xs text-stone-500 mb-2">Datos clave</p>
        <div className="space-y-1">
          {traba.datosClave.map((d, i) => (
            <p key={i} className="text-sm text-stone-300">· {d}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs text-stone-500 mb-2">Propuestas en discusión</p>
        <div className="space-y-1">
          {traba.propuestas.map((p, i) => (
            <p key={i} className="text-sm text-stone-400">· {p}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Analisis() {
  return (
    <div className="p-8 max-w-5xl space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Análisis: trabas y propuestas</h2>
        <p className="text-stone-400 mb-1">
          Diagnóstico de las Mesas Ejecutivas para la Productividad (MEP) convocadas por CORFO (2025),
          con aportes de 12 organizaciones del ecosistema REP.
        </p>
        <p className="text-xs text-stone-500">
          Fuentes: Matriz Consolidada MEP EyE · Informe MEP NFU V1 · Aportes ProREP, GIRO,
          ReSimple, ANIR, SOFOFA, MMA · Informe Figueroa PUC
        </p>
        <UltimaActualizacion fecha="24 de abril de 2026" />
      </div>

      {/* Tesis central */}
      <div className="p-6 rounded-xl border border-stone-700 bg-stone-900/50 space-y-4">
        <h3 className="text-lg font-semibold">{marcaAnalitica.titulo}</h3>
        <p className="text-stone-300 leading-relaxed">{marcaAnalitica.tesis}</p>
        <p className="text-stone-400 leading-relaxed">{marcaAnalitica.autoridad}</p>
        <p className="text-xs text-stone-500">{marcaAnalitica.fuente}</p>
      </div>

      {/* Nota MMA */}
      <div className="p-4 rounded-lg border border-stone-800">
        <p className="text-xs text-stone-500 mb-2">Nota sobre calidad del diagnóstico</p>
        <p className="text-sm text-stone-400">{marcaAnalitica.criticaMMA}</p>
      </div>

      {/* Trabas EyE */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Envases y Embalajes — 3 trabas formales</h3>
        <div className="space-y-4">
          {trabasEyE.map((t) => <TrabaCard key={t.id} traba={t} />)}
        </div>
      </div>

      {/* Trabas NFU */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Neumáticos — 3 trabas formales</h3>
        <div className="space-y-4">
          {trabasNFU.map((t) => <TrabaCard key={t.id} traba={t} />)}
        </div>
      </div>

      <FuenteDatos
        fuente="Matriz Consolidada MEP EyE (26-09-25) · Informe MEP NFU V1 · Informe Figueroa PUC"
        tipo="declaracion-actor"
        fecha="Septiembre-noviembre 2025"
        nota="Datos y propuestas presentados en sesiones MEP CORFO por 12 organizaciones del ecosistema REP"
      />
    </div>
  )
}
