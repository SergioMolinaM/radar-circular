// src/pages/Analisis.tsx
import { trabasEyE, trabasNFU, marcaAnalitica } from '../data/analisis-rep'
import { cumplimiento2024, resumenCumplimiento } from '../data/cumplimiento-eye'
import { CumplimientoPanel } from '../components/CumplimientoPanel'
import { Callout } from '../components/Callout'
import { UltimaActualizacion } from '../components/UltimaActualizacion'
import { FuenteDatos } from '../components/FuenteDatos'

function TrabaCard({ traba }: { traba: (typeof trabasEyE)[0] }) {
  return (
    <div className="p-5 rounded-xl space-y-4" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
      <div>
        <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{traba.nombre}</p>
        {traba.nombreGIRO && (
          <p className="text-xs italic mt-1" style={{ color: 'var(--text-muted)' }}>GIRO: "{traba.nombreGIRO}"</p>
        )}
      </div>
      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{traba.descripcion}</p>
      <div>
        <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Datos clave</p>
        <div className="space-y-1">
          {traba.datosClave.map((d, i) => (
            <p key={i} className="text-sm" style={{ color: 'var(--text-primary)' }}>{'\u00b7'} {d}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Propuestas en discusión</p>
        <div className="space-y-1">
          {traba.propuestas.map((p, i) => (
            <p key={i} className="text-sm" style={{ color: 'var(--text-secondary)' }}>{'\u00b7'} {p}</p>
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
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Análisis
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Diagnóstico del primer año de operación de la Ley REP y trabas identificadas
          por las Mesas Ejecutivas para la Productividad (MEP-CORFO, 2025).
        </p>
        <UltimaActualizacion fecha="25 de abril de 2026" />
      </div>

      {/* === SECCIÓN 1: CUMPLIMIENTO === */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold" style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}>
          Cumplimiento primer año (2024)
        </h3>

        <Callout variant="explainer" titulo="¿Cómo se mide el cumplimiento?">
          El DS12 (art. 22) mide el cumplimiento como el porcentaje de toneladas valorizadas
          a través de un Sistema de Gestión (SIG) respecto de lo puesto en el mercado el año anterior.
          Solo cuenta el material gestionado dentro de un SIG aprobado por el MMA.
          El reciclaje que ocurre fuera del sistema formal — por gestores independientes, recicladores
          de base o la industria preexistente — es actividad real pero no se contabiliza como cumplimiento.
        </Callout>

        <Callout variant="warning" titulo="Estos son datos estimados">
          {resumenCumplimiento.disclaimer}
        </Callout>

        {/* Hallazgo principal */}
        <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--accent-subtle)', border: '1px solid var(--accent-border)' }}>
          <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>Hallazgo principal</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            {resumenCumplimiento.hallazgoPrincipal}
          </p>
        </div>

        {/* La paradoja */}
        <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--bg-callout)', border: '1px solid #dde3ea' }}>
          <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-callout)' }}>La paradoja del reciclaje chileno</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-callout-muted)' }}>
            {resumenCumplimiento.paradoja}
          </p>
        </div>

        {/* Paneles de cumplimiento */}
        <CumplimientoPanel datos={cumplimiento2024} categoria="domiciliario" />
        <CumplimientoPanel datos={cumplimiento2024} categoria="no-domiciliario" />

        <FuenteDatos
          fuente={resumenCumplimiento.fuente}
          tipo="sectorial"
          fecha="2024"
          nota="Estimaciones Kyklos, no mediciones oficiales SMA"
        />
      </div>

      {/* === SECCIÓN 2: TESIS CENTRAL === */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold" style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}>
          Diagnóstico estructural
        </h3>

        <div className="p-6 rounded-xl space-y-4" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)' }}>
          <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{marcaAnalitica.titulo}</h4>
          <p className="leading-relaxed" style={{ color: 'var(--text-primary)' }}>{marcaAnalitica.tesis}</p>
          <p style={{ color: 'var(--text-secondary)' }}>{marcaAnalitica.autoridad}</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{marcaAnalitica.fuente}</p>
        </div>

        <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
          <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Nota sobre calidad del diagnóstico</p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{marcaAnalitica.criticaMMA}</p>
        </div>
      </div>

      {/* === SECCIÓN 3: TRABAS === */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold" style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}>
          Envases y Embalajes — 3 trabas formales
        </h3>
        <div className="space-y-4">
          {trabasEyE.map((t) => <TrabaCard key={t.id} traba={t} />)}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold" style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}>
          Neumáticos — 3 trabas formales
        </h3>
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
