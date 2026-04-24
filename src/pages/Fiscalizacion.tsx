// src/pages/Fiscalizacion.tsx
import { AlertTriangle, Shield, ExternalLink } from 'lucide-react'
import {
  procesosSancionatorios,
  hitosFiscalizacion,
  datosGeneralesFiscalizacion as datos,
} from '../data/fiscalizacion-rep'
import { contarSigPorEstado } from '../data/sig-aprobados'
import { FuenteDatos } from '../components/FuenteDatos'
import { UltimaActualizacion } from '../components/UltimaActualizacion'

export function Fiscalizacion() {
  const sig = contarSigPorEstado()

  return (
    <div className="p-8 max-w-5xl space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Fiscalización y cumplimiento</h2>
        <p className="text-stone-400 mb-1">
          Estado de la fiscalización de la Ley REP por parte de la Superintendencia del Medio Ambiente (SMA).
        </p>
        <p className="text-xs text-stone-500">
          Fuentes: SNIFA (snifa.sma.gob.cl) · Comunicados SMA · Estudio Kyklos 2024 · MEP NFU
        </p>
        <UltimaActualizacion fecha="24 de abril de 2026" />
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">SIG registrados</p>
          <p className="text-xl font-bold">{sig.total}</p>
          <p className="text-xs text-stone-500">{sig.operativos} operativos · {sig.enFormacion} en formación</p>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Garantías devueltas</p>
          <p className="text-xl font-bold">{datos.garantiasDevueltas}</p>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Sancionatorios REP</p>
          <p className="text-xl font-bold text-red-400">{datos.totalProcedimientosSancionatorios}</p>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Free-riders EyE</p>
          <p className="text-xl font-bold text-amber-400">~{(datos.freeRidersEstimados.eye.total - datos.freeRidersEstimados.eye.enSig).toLocaleString('es-CL')}</p>
          <p className="text-xs text-stone-500">empresas sin SIG</p>
        </div>
      </div>

      <FuenteDatos
        fuente="SMA comunicado junio 2025 · Estudio Kyklos 2024 · Chile Neumáticos AG"
        tipo="oficial"
        fecha="Junio 2025"
        nota="Sancionatorios: dato oficial SMA. Free-riders EyE: estimación Kyklos/SII. Free-riders NFU: dato Chile Neumáticos AG"
      />

      {/* Procedimientos sancionatorios */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={20} className="text-red-400" />
          <h3 className="text-lg font-semibold">Procedimientos sancionatorios</h3>
        </div>
        <div className="space-y-4">
          {procesosSancionatorios.map((ps) => (
            <div key={ps.id} className="p-5 rounded-xl border border-stone-800">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <span className="font-semibold text-stone-100">{ps.titular}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400 ml-2">
                    {ps.productoPrioritario}
                  </span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-900/50 text-red-300 shrink-0">
                  {ps.estado === 'en-curso' ? 'En curso' : ps.estado}
                </span>
              </div>
              <p className="text-sm text-amber-300 mb-2">{ps.tipoInfraccion}</p>
              <p className="text-sm text-stone-400">{ps.descripcion}</p>
              <div className="flex items-center gap-4 mt-3 text-xs text-stone-500">
                <span>Inicio: {ps.fechaInicio}</span>
                <span>{ps.id}</span>
                {ps.snifaUrl && (
                  <a
                    href={ps.snifaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-stone-400 hover:text-stone-200 transition-colors"
                  >
                    Ver en SNIFA <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free-riders */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Shield size={20} className="text-amber-400" />
          <h3 className="text-lg font-semibold">Evasión y free-riders</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-amber-900/50 bg-amber-950/20">
            <p className="text-sm font-medium text-amber-300 mb-2">Envases y Embalajes</p>
            <p className="text-sm text-stone-400">
              Se estima que existen más de {datos.freeRidersEstimados.eye.total.toLocaleString('es-CL')} grandes
              empresas en Chile (SII 2023), de las cuales solo ~{datos.freeRidersEstimados.eye.enSig.toLocaleString('es-CL')} están
              inscritas en algún sistema de gestión. El cartón es el material más expuesto por su presencia
              en cadenas de abastecimiento y comercio electrónico.
            </p>
            <p className="text-xs text-stone-600 mt-2">{datos.freeRidersEstimados.eye.fuente}</p>
          </div>
          <div className="p-5 rounded-xl border border-amber-900/50 bg-amber-950/20">
            <p className="text-sm font-medium text-amber-300 mb-2">Neumáticos</p>
            <p className="text-sm text-stone-400">
              De {datos.freeRidersEstimados.nfu.total} importadores identificados,
              {' '}{datos.freeRidersEstimados.nfu.sinSig} ({datos.freeRidersEstimados.nfu.porcentaje}%) no tienen
              sistema de gestión. La Declaración Jurada de Aduana no se verifica contra el registro REP,
              facilitando la evasión.
            </p>
            <p className="text-xs text-stone-600 mt-2">{datos.freeRidersEstimados.nfu.fuente}</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Hitos de fiscalización REP</h3>
        <div className="space-y-0">
          {hitosFiscalizacion.map((h, i) => (
            <div key={i} className="flex gap-4 pb-6">
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-stone-600 shrink-0 mt-1.5" />
                {i < hitosFiscalizacion.length - 1 && (
                  <div className="w-px flex-1 bg-stone-800" />
                )}
              </div>
              <div>
                <p className="text-xs text-stone-500 mb-0.5">{h.fecha}</p>
                <p className="text-sm font-medium text-stone-200 mb-1">{h.evento}</p>
                <p className="text-sm text-stone-400">{h.detalle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infracciones de referencia */}
      <div className="p-5 rounded-xl border border-stone-800">
        <p className="text-xs text-stone-500 mb-3">Infracciones gravísimas Ley REP (art. 39)</p>
        <div className="space-y-2">
          {datos.infracciones.gravisimas.map((inf) => (
            <p key={inf} className="text-sm text-stone-400">· {inf}</p>
          ))}
        </div>
      </div>

      {/* SISREP */}
      <div className="p-5 rounded-xl border border-stone-800">
        <p className="text-sm font-medium text-stone-300 mb-2">SISREP — Sistema de Reporte REP</p>
        <p className="text-sm text-stone-400 mb-3">
          Operativo desde enero de 2025 (Resolución Exenta 2279/2024 de la SMA). Los Sistemas de Gestión
          deben reportar mensualmente las operaciones de manejo de residuos, segregadas por tipo de residuo,
          operación específica y gestor. Los informes de cumplimiento se generan a partir de estos reportes
          mensuales y deben ser validados por un auditor externo.
        </p>
        <div className="space-y-1 text-sm text-stone-400">
          <p>· Registro público de SIG habilitados con productores que los componen</p>
          <p>· Trazabilidad desde generación hasta disposición final</p>
          <p>· Garantías de cumplimiento reguladas (R.E. 863/2021, 242/2022, 433/2024, 434/2024)</p>
          <p>· 8 garantías devueltas a SGC que cumplieron metas</p>
        </div>
        <a
          href="https://portal.sma.gob.cl/index.php/sma-pone-a-disposicion-plataforma-de-reporte-para-dar-cumplimiento-a-la-ley-rep/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-200 mt-3 transition-colors"
        >
          Más información en Portal SMA <ExternalLink size={12} />
        </a>
      </div>
    </div>
  )
}
