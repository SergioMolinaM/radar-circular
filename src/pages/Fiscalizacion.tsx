// src/pages/Fiscalizacion.tsx
import { AlertTriangle, Shield, ExternalLink } from 'lucide-react'
import { Callout } from '../components/Callout'
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
        <p className="mb-1" style={{ color: 'var(--text-secondary)' }}>
          Estado de la fiscalización de la Ley REP por parte de la Superintendencia del Medio Ambiente (SMA).
        </p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Fuentes: SNIFA (snifa.sma.gob.cl) · Comunicados SMA · Estudio Kyklos 2024 · MEP NFU
        </p>
        <UltimaActualizacion fecha="25 de abril de 2026" />
      </div>

      <Callout variant="explainer" titulo="¿Qué se fiscaliza en la Ley REP?">
        La Superintendencia del Medio Ambiente (SMA) fiscaliza el cumplimiento de las obligaciones
        de la Ley 20.920: inscripción en el RETC, adhesión a un sistema de gestión, cumplimiento
        de metas de recolección y valorización, y entrega de información. Las infracciones pueden
        ser leves, graves o gravísimas, con multas de hasta 10.000 UTA (~$8.000 millones).
      </Callout>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>SIG registrados</p>
          <p className="text-xl font-bold">{sig.total}</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{sig.operativos} operativos · {sig.enFormacion} en formación</p>
        </div>
        <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Garantías devueltas</p>
          <p className="text-xl font-bold">{datos.garantiasDevueltas}</p>
        </div>
        <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Sancionatorios REP</p>
          <p className="text-xl font-bold text-red-400">{datos.totalProcedimientosSancionatorios}</p>
        </div>
        <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Free-riders EyE</p>
          <p className="text-xl font-bold text-amber-400">~{(datos.freeRidersEstimados.eye.total - datos.freeRidersEstimados.eye.enSig).toLocaleString('es-CL')}</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>empresas sin SIG</p>
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
        <div className="p-3 rounded-lg border border-amber-900/30 bg-amber-950/10 mb-4">
          <p className="text-xs text-amber-400">
            ⚠ Esta sección muestra los 2 primeros procedimientos sancionatorios REP iniciados en junio 2025.
            Pueden existir nuevos procedimientos posteriores no reflejados aquí.
            Verificar en <a href="https://snifa.sma.gob.cl/" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300">SNIFA</a>.
          </p>
        </div>
        <div className="space-y-4">
          {procesosSancionatorios.map((ps) => (
            <div key={ps.id} className="p-5 rounded-xl" style={{ border: '1px solid var(--border)' }}>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{ps.titular}</span>
                  <span className="text-xs px-2 py-0.5 rounded ml-2" style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}>
                    {ps.productoPrioritario}
                  </span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-900/50 text-red-300 shrink-0">
                  {ps.estado === 'en-curso' ? 'En curso' : ps.estado}
                </span>
              </div>
              <p className="text-sm text-amber-300 mb-2">{ps.tipoInfraccion}</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{ps.descripcion}</p>
              <div className="flex items-center gap-4 mt-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                <span>Inicio: {ps.fechaInicio}</span>
                <span>{ps.id}</span>
                {ps.snifaUrl && (
                  <a
                    href={ps.snifaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-opacity hover:opacity-80"
                    style={{ color: 'var(--text-secondary)' }}
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
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Se estima que existen más de {datos.freeRidersEstimados.eye.total.toLocaleString('es-CL')} grandes
              empresas en Chile (SII 2023), de las cuales solo ~{datos.freeRidersEstimados.eye.enSig.toLocaleString('es-CL')} están
              inscritas en algún sistema de gestión. El cartón es el material más expuesto por su presencia
              en cadenas de abastecimiento y comercio electrónico.
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>{datos.freeRidersEstimados.eye.fuente}</p>
          </div>
          <div className="p-5 rounded-xl border border-amber-900/50 bg-amber-950/20">
            <p className="text-sm font-medium text-amber-300 mb-2">Neumáticos</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              De {datos.freeRidersEstimados.nfu.total} importadores identificados,
              {' '}{datos.freeRidersEstimados.nfu.sinSig} ({datos.freeRidersEstimados.nfu.porcentaje}%) no tienen
              sistema de gestión. La Declaración Jurada de Aduana no se verifica contra el registro REP,
              facilitando la evasión.
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>{datos.freeRidersEstimados.nfu.fuente}</p>
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
                <div className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: 'var(--text-muted)' }} />
                {i < hitosFiscalizacion.length - 1 && (
                  <div className="w-px flex-1" style={{ backgroundColor: 'var(--border)' }} />
                )}
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{h.fecha}</p>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{h.evento}</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{h.detalle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infracciones de referencia */}
      <div className="p-5 rounded-xl" style={{ border: '1px solid var(--border)' }}>
        <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>Infracciones gravísimas Ley REP (art. 39)</p>
        <div className="space-y-2">
          {datos.infracciones.gravisimas.map((inf) => (
            <p key={inf} className="text-sm" style={{ color: 'var(--text-secondary)' }}>· {inf}</p>
          ))}
        </div>
      </div>

      {/* SISREP */}
      <div className="p-5 rounded-xl" style={{ border: '1px solid var(--border)' }}>
        <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>SISREP — Sistema de Reporte REP</p>
        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
          Operativo desde enero de 2025 (Resolución Exenta 2279/2024 de la SMA). Los Sistemas de Gestión
          deben reportar mensualmente las operaciones de manejo de residuos, segregadas por tipo de residuo,
          operación específica y gestor. Los informes de cumplimiento se generan a partir de estos reportes
          mensuales y deben ser validados por un auditor externo.
        </p>
        <div className="space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <p>· Registro público de SIG habilitados con productores que los componen</p>
          <p>· Trazabilidad desde generación hasta disposición final</p>
          <p>· Garantías de cumplimiento reguladas (R.E. 863/2021, 242/2022, 433/2024, 434/2024)</p>
          <p>· 8 garantías devueltas a SGC que cumplieron metas</p>
        </div>
        <a
          href="https://portal.sma.gob.cl/index.php/sma-pone-a-disposicion-plataforma-de-reporte-para-dar-cumplimiento-a-la-ley-rep/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs mt-3 transition-opacity hover:opacity-80"
          style={{ color: 'var(--text-secondary)' }}
        >
          Más información en Portal SMA <ExternalLink size={12} />
        </a>
      </div>
    </div>
  )
}
