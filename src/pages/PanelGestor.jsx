import DataTypeBadge from '../components/DataTypeBadge'

/* ── Mock data ─────────────────────────────────────────── */

const KPIS = [
  { label: 'Afiliados activos', value: '142', color: 'text-cafe', bg: 'bg-white' },
  { label: 'Cumplen meta 2024', value: '118', sub: '83%', color: 'text-green-700', bg: 'bg-green-50' },
  { label: 'En riesgo de incumplir', value: '18', sub: '13%', color: 'text-yellow-700', bg: 'bg-yellow-50' },
  { label: 'Incumplimiento crítico', value: '6', sub: '4%', color: 'text-red-700', bg: 'bg-red-50' },
]

const HITOS = [
  { empresa: 'Empresa Alimentos #1', tipo: 'Reporte valorización Q1', icono: '📊', plazo: 'Vencido hace 2 días', urgencia: 'rojo' },
  { empresa: 'Empresa Bebidas #3', tipo: 'Renovación contrato anual', icono: '📝', plazo: 'Vence en 3 días', urgencia: 'naranja' },
  { empresa: 'Empresa Cosméticos #2', tipo: 'Pago cuota abril', icono: '💰', plazo: 'Vence en 5 días', urgencia: 'naranja' },
  { empresa: 'Empresa Farmacéutica #1', tipo: 'Reporte POM 2024', icono: '📊', plazo: 'Vence en 10 días', urgencia: 'amarillo' },
  { empresa: 'Empresa Retail #4', tipo: 'Reunión seguimiento cumplimiento', icono: '🤝', plazo: 'Vence en 12 días', urgencia: 'amarillo' },
]

const AFILIADOS = [
  { empresa: 'Empresa Alimentos #1', sector: 'Alimentos', pom: '3.420', meta: '1.847', cumpl: 92, color: 'green', hito: 'Reporte Q1 (vencido)', estado: 'En gestión' },
  { empresa: 'Empresa Bebidas #3', sector: 'Bebidas', pom: '5.680', meta: '3.067', cumpl: 78, color: 'yellow', hito: 'Renovación (3d)', estado: 'Al día' },
  { empresa: 'Empresa Cosméticos #2', sector: 'Cosméticos', pom: '890', meta: '481', cumpl: 105, color: 'green', hito: 'Pago (5d)', estado: 'Al día' },
  { empresa: 'Empresa Farmacéutica #1', sector: 'Farma', pom: '1.240', meta: '670', cumpl: 65, color: 'red', hito: 'Reporte POM (10d)', estado: 'Alerta' },
  { empresa: 'Empresa Retail #4', sector: 'Retail', pom: '8.920', meta: '4.817', cumpl: 88, color: 'green', hito: 'Reunión (12d)', estado: 'Al día' },
  { empresa: 'Empresa Alimentos #2', sector: 'Alimentos', pom: '2.100', meta: '1.134', cumpl: 71, color: 'yellow', hito: '—', estado: 'En gestión' },
  { empresa: 'Empresa Bebidas #1', sector: 'Bebidas', pom: '4.560', meta: '2.462', cumpl: 94, color: 'green', hito: '—', estado: 'Al día' },
  { empresa: 'Empresa Limpieza #1', sector: 'Limpieza', pom: '1.780', meta: '961', cumpl: 58, color: 'red', hito: '—', estado: 'Alerta' },
  { empresa: 'Empresa Textil #1', sector: 'Textil', pom: '3.100', meta: '1.674', cumpl: 81, color: 'yellow', hito: '—', estado: 'En gestión' },
  { empresa: 'Empresa Retail #2', sector: 'Retail', pom: '6.450', meta: '3.483', cumpl: 96, color: 'green', hito: '—', estado: 'Al día' },
]

const ALERTAS = [
  { icono: '🔴', texto: '3 afiliados no han reportado valorización Q1 2024 (empresas en gestión)', urgencia: 'red' },
  { icono: '🟠', texto: 'Brecha sectorial metal en 18% — riesgo de incumplir meta año 2 si no hay acciones', urgencia: 'orange' },
  { icono: '🟡', texto: 'Vence plazo de reporte MEP REP anual: 15 días', urgencia: 'yellow' },
  { icono: '🟢', texto: 'Cartera total cumpliendo 83% de meta agregada — por encima del promedio del sistema', urgencia: 'green' },
]

const ACCIONES = [
  { icono: '📋', titulo: 'Generar reporte consolidado', desc: 'Exporta estado de cumplimiento de toda la cartera' },
  { icono: '📨', titulo: 'Enviar recordatorio masivo', desc: 'Notifica a afiliados con hitos próximos' },
  { icono: '➕', titulo: 'Cargar nuevo afiliado', desc: 'Alta de empresa en el sistema' },
  { icono: '📤', titulo: 'Exportar para MEP REP', desc: 'Genera archivo para reporte anual al MMA' },
]

/* ── Urgency helpers ───────────────────────────────────── */

const URGENCIA_STYLES = {
  rojo: 'border-red-400 bg-red-50 text-red-800',
  naranja: 'border-orange-400 bg-orange-50 text-orange-800',
  amarillo: 'border-yellow-400 bg-yellow-50 text-yellow-800',
}

const CUMPL_DOT = {
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
}

const ESTADO_STYLE = {
  'Al día': 'bg-green-100 text-green-800',
  'En gestión': 'bg-yellow-100 text-yellow-800',
  'Alerta': 'bg-red-100 text-red-800',
}

const ALERTA_BORDER = {
  red: 'border-l-red-500',
  orange: 'border-l-orange-500',
  yellow: 'border-l-yellow-500',
  green: 'border-l-green-500',
}

/* ── Component ─────────────────────────────────────────── */

function PanelGestor() {
  return (
    <div className="min-h-screen bg-crema/50">
      {/* ── Sticky DEMO banner ──────────────────────── */}
      <div className="sticky top-0 z-50 w-full bg-[#FEF3C7] border-b border-yellow-300 px-4 py-2 text-center">
        <p className="font-sans text-xs sm:text-sm text-yellow-900 font-medium">
          DEMO — Todos los datos, empresas y cifras mostrados en esta pantalla son ficticios y tienen fines exclusivamente ilustrativos. No corresponden a afiliados reales de ProREP.
        </p>
      </div>

      {/* ── Header con logo ProREP ──────────────────── */}
      <header className="border-b border-cafe/10 bg-white px-8 py-5 flex items-center gap-4">
        <img
          src="/logo-prorep.png"
          alt="ProREP"
          className="h-9 w-auto object-contain"
        />
        <div className="h-6 w-px bg-cafe/15" />
        <h1 className="font-serif text-lg text-cafe">
          Panel de gestión{' '}
          <span className="text-cafe/50 font-sans text-sm font-normal">— Servicio a afiliados</span>
        </h1>
      </header>

      {/* ── Content ─────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-8 py-8 space-y-8">

        {/* Bloque 1 — KPIs de cartera */}
        <section>
          <h2 className="font-sans text-xs uppercase tracking-wider text-cafe/50 mb-4">Resumen de cartera</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {KPIS.map((k) => (
              <div key={k.label} className={`${k.bg} rounded-lg border border-cafe/10 p-5`}>
                <DataTypeBadge type="interno" />
                <p className="mt-2 font-sans text-xs uppercase tracking-wider text-cafe/60">{k.label}</p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className={`font-serif text-3xl ${k.color}`}>{k.value}</span>
                  {k.sub && <span className={`font-sans text-sm font-medium ${k.color}`}>{k.sub}</span>}
                </p>
                <p className="mt-1 font-sans text-[10px] text-cafe/40">(demo)</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bloque 2 — Agenda del gestor */}
        <section>
          <h2 className="font-sans text-xs uppercase tracking-wider text-cafe/50 mb-4">Agenda del gestor — hitos próximos</h2>
          <div className="bg-white rounded-xl border border-cafe/10 divide-y divide-cafe/5">
            {HITOS.map((h, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 px-5 py-4 border-l-4 ${URGENCIA_STYLES[h.urgencia]}`}
              >
                <span className="text-xl shrink-0">{h.icono}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm font-medium text-cafe truncate">{h.empresa}</p>
                  <p className="font-sans text-xs text-cafe/60">{h.tipo}</p>
                </div>
                <span className="font-sans text-xs font-medium whitespace-nowrap">{h.plazo}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bloque 3 — Listado de afiliados */}
        <section>
          <h2 className="font-sans text-xs uppercase tracking-wider text-cafe/50 mb-4">Listado de afiliados</h2>
          <div className="bg-white rounded-xl border border-cafe/10 overflow-x-auto">
            <table className="w-full text-left font-sans text-sm">
              <thead>
                <tr className="border-b border-cafe/10 bg-cafe/[0.03]">
                  <th className="px-4 py-3 font-medium text-xs uppercase tracking-wider text-cafe/50">Empresa</th>
                  <th className="px-4 py-3 font-medium text-xs uppercase tracking-wider text-cafe/50">Sector</th>
                  <th className="px-4 py-3 font-medium text-xs uppercase tracking-wider text-cafe/50 text-right">POM 2023 (ton)</th>
                  <th className="px-4 py-3 font-medium text-xs uppercase tracking-wider text-cafe/50 text-right">Meta 2024 (ton)</th>
                  <th className="px-4 py-3 font-medium text-xs uppercase tracking-wider text-cafe/50 text-center">Cumplimiento</th>
                  <th className="px-4 py-3 font-medium text-xs uppercase tracking-wider text-cafe/50">Próximo hito</th>
                  <th className="px-4 py-3 font-medium text-xs uppercase tracking-wider text-cafe/50 text-center">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cafe/5">
                {AFILIADOS.map((a, i) => (
                  <tr key={i} className="hover:bg-cafe/[0.02] transition-colors">
                    <td className="px-4 py-3 font-medium text-cafe">{a.empresa}</td>
                    <td className="px-4 py-3 text-cafe/70">{a.sector}</td>
                    <td className="px-4 py-3 text-right text-cafe/70 tabular-nums">{a.pom}</td>
                    <td className="px-4 py-3 text-right text-cafe/70 tabular-nums">{a.meta}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${CUMPL_DOT[a.color]}`} />
                        <span className="tabular-nums font-medium text-cafe">{a.cumpl}%</span>
                      </span>
                    </td>
                    <td className="px-4 py-3 text-cafe/60 text-xs">{a.hito}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${ESTADO_STYLE[a.estado]}`}>
                        {a.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 font-sans text-[11px] text-cafe/40">
            Empresas y cifras ficticias con fines ilustrativos.
          </p>
        </section>

        {/* Bloque 4 — Alertas sistémicas */}
        <section>
          <h2 className="font-sans text-xs uppercase tracking-wider text-cafe/50 mb-4">Alertas sistémicas</h2>
          <div className="space-y-2">
            {ALERTAS.map((a, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 px-5 py-3 bg-white rounded-lg border border-cafe/10 border-l-4 ${ALERTA_BORDER[a.urgencia]}`}
              >
                <span className="text-base mt-0.5">{a.icono}</span>
                <p className="font-sans text-sm text-cafe/80">{a.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bloque 5 — Acciones frecuentes */}
        <section>
          <h2 className="font-sans text-xs uppercase tracking-wider text-cafe/50 mb-4">Acciones frecuentes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACCIONES.map((a) => (
              <button
                key={a.titulo}
                title="Funcionalidad en desarrollo"
                className="group text-left bg-white rounded-xl border border-cafe/10 p-5 hover:border-prorep/40 hover:shadow-sm transition-all cursor-default"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{a.icono}</span>
                  <div>
                    <p className="font-sans text-sm font-medium text-cafe group-hover:text-prorep transition-colors">
                      {a.titulo}
                    </p>
                    <p className="font-sans text-xs text-cafe/50 mt-0.5">{a.desc}</p>
                    <p className="font-sans text-[10px] text-prorep/60 mt-2 italic">Funcionalidad en desarrollo</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

      </main>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="border-t border-cafe/10 bg-white px-8 py-4 text-center">
        <p className="font-sans text-[11px] text-cafe/40">
          Panel interno ProREP — Datos de demostración
        </p>
      </footer>
    </div>
  )
}

export default PanelGestor
