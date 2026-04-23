import { useState, useEffect, useRef, useCallback } from 'react'
import { AFILIADOS_DEMO } from '../../data/afiliadosDemo'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

/* ── Material config ──────────────────────────────────── */

const MATERIALES = [
  { key: 'papel', label: 'Papel y cartón', icon: '\uD83D\uDCC4' },
  { key: 'plastico', label: 'Plástico', icon: '\uD83E\uDDF4' },
  { key: 'vidrio', label: 'Vidrio', icon: '\uD83C\uDF7E' },
  { key: 'metal', label: 'Metal', icon: '\uD83D\uDD27' },
  { key: 'cartonLiquidos', label: 'Cartón para líquidos', icon: '\uD83E\uDD64' },
]

function getEstado(real, meta2024) {
  if (meta2024 === 0) return { label: 'No aplica', color: 'gray' }
  if (real >= meta2024) return { label: 'Cumple \u2713', color: 'green' }
  if (real >= meta2024 * 0.8) return { label: 'En riesgo \u26A0', color: 'yellow' }
  return { label: 'Crítico \u2717', color: 'red' }
}

const ESTADO_STYLES = {
  green: 'bg-green-100 text-green-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  red: 'bg-red-100 text-red-800',
  gray: 'bg-gray-100 text-gray-500',
}

const BAR_COLORS = {
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  gray: 'bg-gray-300',
}

/* ── Modal component ──────────────────────────────────── */

function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-xl max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-cafe/10">
          <h3 className="font-serif text-lg text-cafe">{title}</h3>
          <button onClick={onClose} className="text-cafe/40 hover:text-cafe text-xl leading-none">&times;</button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  )
}

/* ── Helpers ───────────────────────────────────────────── */

function formatDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('es-CL', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

function getSectorComparison(afiliado) {
  const others = AFILIADOS_DEMO.filter(
    (a) => a.sector === afiliado.sector && a.id !== afiliado.id
  )
  if (others.length === 0) return null

  const result = {}
  for (const mat of MATERIALES) {
    const meta = afiliado.cumplimiento[mat.key].meta2024
    if (meta === 0) continue
    const myVal = afiliado.cumplimiento[mat.key].real
    const othersWithMat = others.filter((o) => o.cumplimiento[mat.key].meta2024 > 0)
    if (othersWithMat.length === 0) continue
    const avg = Math.round(
      othersWithMat.reduce((sum, o) => sum + o.cumplimiento[mat.key].real, 0) / othersWithMat.length
    )
    result[mat.key] = { my: myVal, avg, diff: myVal - avg }
  }
  return Object.keys(result).length > 0 ? result : null
}

function getRecomendaciones(afiliado) {
  const recs = []
  for (const mat of MATERIALES) {
    const { real, meta2024 } = afiliado.cumplimiento[mat.key]
    if (meta2024 === 0) continue
    const estado = getEstado(real, meta2024)
    if (estado.color === 'red') {
      recs.push({
        tipo: 'critico',
        texto: `Tu valorización de ${mat.label} está por debajo de la meta legal 2024. Prioriza contactar a tu gestor para revisar opciones de valorización.`,
      })
    } else if (estado.color === 'yellow') {
      recs.push({
        tipo: 'riesgo',
        texto: `Estás cerca de cumplir la meta en ${mat.label}. Un esfuerzo adicional este trimestre puede cerrar la brecha.`,
      })
    }
  }
  if (recs.length === 0) {
    recs.push({
      tipo: 'ok',
      texto: 'Excelente desempeño. Estás cumpliendo todas tus metas REP 2024. Considera preparar tu narrativa de impacto para comunicar este logro.',
    })
  }
  return recs
}

const REC_STYLES = {
  critico: 'border-l-red-500 bg-red-50',
  riesgo: 'border-l-yellow-500 bg-yellow-50',
  ok: 'border-l-green-500 bg-green-50',
}

/* ── Main component ───────────────────────────────────── */

function DashboardAfiliado() {
  const [afiliado, setAfiliado] = useState(null)
  const [modalContacto, setModalContacto] = useState(false)
  const [modalComparativa, setModalComparativa] = useState(false)
  const [generatingPdf, setGeneratingPdf] = useState(false)
  const pdfRef = useRef(null)

  useEffect(() => {
    try {
      const session = JSON.parse(localStorage.getItem('radar_afiliado_session'))
      if (!session?.afiliadoId) throw new Error()
      const found = AFILIADOS_DEMO.find((a) => a.id === session.afiliadoId)
      if (!found) throw new Error()
      setAfiliado(found)
    } catch {
      window.history.pushState({}, '', '/afiliado/login')
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('radar_afiliado_session')
    window.history.pushState({}, '', '/afiliado/login')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  const handleBack = () => {
    window.history.pushState({}, '', '/')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  const handlePdf = useCallback(async () => {
    if (!pdfRef.current) return
    setGeneratingPdf(true)
    try {
      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#FAF7F0',
      })
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfW = pdf.internal.pageSize.getWidth()
      const pdfH = (canvas.height * pdfW) / canvas.width
      let position = 0
      const pageH = pdf.internal.pageSize.getHeight()

      pdf.addImage(imgData, 'PNG', 0, position, pdfW, pdfH)
      let remaining = pdfH - pageH
      while (remaining > 0) {
        position -= pageH
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, pdfW, pdfH)
        remaining -= pageH
      }

      const safeName = afiliado.empresa.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
      pdf.save(`reporte-rep-${safeName}-2024.pdf`)
    } catch (err) {
      alert('Error al generar el PDF. Intenta nuevamente.')
      console.error(err)
    } finally {
      setGeneratingPdf(false)
    }
  }, [afiliado])

  if (!afiliado) {
    return (
      <div className="min-h-screen bg-crema flex items-center justify-center">
        <p className="font-sans text-sm text-cafe/50">Cargando...</p>
      </div>
    )
  }

  const comparison = getSectorComparison(afiliado)
  const recomendaciones = getRecomendaciones(afiliado)

  return (
    <div className="min-h-screen bg-crema/50">
      {/* Header */}
      <header className="bg-white border-b border-cafe/10 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-serif text-xl text-musgo font-semibold">ProREP</span>
          <div className="h-5 w-px bg-cafe/15" />
          <div>
            <p className="font-sans text-sm font-medium text-cafe">{afiliado.empresa}</p>
            <p className="font-sans text-[11px] text-cafe/50">{afiliado.sector}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="font-sans text-xs text-cafe/50 hover:text-red-600 transition-colors"
        >
          Cerrar sesión
        </button>
      </header>

      {/* Content for PDF capture */}
      <div ref={pdfRef}>
        {/* SECCION 1 — Banner disclaimer */}
        <div className="w-full bg-musgo/90 px-4 py-2 text-center">
          <p className="font-sans text-xs text-white/90">
            Vista demo · Datos ficticios con fines ilustrativos · Plataforma Radar Circular
          </p>
        </div>

        <main className="max-w-5xl mx-auto px-8 py-8 space-y-10">
          {/* SECCION 2 — Mi Cumplimiento REP 2024 */}
          <section>
            <h2 className="font-serif text-2xl text-cafe mb-1">Mi Cumplimiento REP</h2>
            <p className="font-sans text-sm text-cafe/50 mb-6">Año 2024</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MATERIALES.map((mat) => {
                const data = afiliado.cumplimiento[mat.key]
                const estado = getEstado(data.real, data.meta2024)

                if (data.meta2024 === 0) {
                  return (
                    <div key={mat.key} className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <p className="font-sans text-sm text-gray-400">
                        {mat.icon} {mat.label}
                      </p>
                      <p className="mt-2 font-sans text-xs text-gray-400 italic">
                        Material no aplicable a tu actividad
                      </p>
                    </div>
                  )
                }

                const pct = Math.min(100, Math.round((data.real / data.meta2024) * 100))

                return (
                  <div key={mat.key} className="p-5 bg-white rounded-xl border border-cafe/10">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-sans text-sm font-medium text-cafe">
                        {mat.icon} {mat.label}
                      </p>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${ESTADO_STYLES[estado.color]}`}>
                        {estado.label}
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="relative h-3 bg-cafe/5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all ${BAR_COLORS[estado.color]}`}
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                      {/* Meta marker */}
                      <div
                        className="absolute top-0 h-full w-0.5 bg-cafe/30"
                        style={{ left: '100%', transform: 'translateX(-1px)' }}
                        title={`Meta 2024: ${data.meta2024}%`}
                      />
                    </div>
                    <p className="font-sans text-xs text-cafe/50">
                      Meta 2024: {data.meta2024}% · Tu valorización: {data.real}%
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* SECCION 3 — Mi relacion con ProREP */}
          <section>
            <h2 className="font-serif text-2xl text-cafe mb-4">Mi relación con ProREP</h2>
            <div className="bg-musgo/10 rounded-xl border border-musgo/20 p-6 space-y-3">
              <p className="font-sans text-sm text-cafe">
                <span className="font-medium">Afiliado desde:</span>{' '}
                {formatDate(afiliado.afiliacion)}
              </p>
              <p className="font-sans text-sm text-cafe">
                <span className="font-medium">Contribución al sistema colectivo:</span>{' '}
                {afiliado.relacionProREP.contribucionColectiva}
              </p>
              <p className="font-sans text-sm text-cafe font-medium text-musgo">
                {afiliado.relacionProREP.beneficioVsIndividual}
              </p>
              <p className="font-sans text-sm text-cafe">
                <span className="font-medium">Gestor asignado:</span>{' '}
                {afiliado.relacionProREP.gestorAsignado}
              </p>
              <p className="font-sans text-sm text-cafe">
                <span className="font-medium">Próximo reporte:</span>{' '}
                {formatDate(afiliado.relacionProREP.proximoReporte)}
              </p>
            </div>
          </section>

          {/* SECCION 4 — Comparativa sectorial */}
          <section>
            <h2 className="font-serif text-2xl text-cafe mb-4">Comparativa sectorial</h2>
            {!comparison ? (
              <div className="p-5 bg-white rounded-xl border border-cafe/10">
                <p className="font-sans text-sm text-cafe/50 italic">
                  Sin empresas comparables en tu sector para esta demo.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {MATERIALES.map((mat) => {
                  const c = comparison[mat.key]
                  if (!c) return null
                  const above = c.diff >= 0
                  return (
                    <div key={mat.key} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-cafe/10">
                      <span className="text-lg">{mat.icon}</span>
                      <p className="font-sans text-sm text-cafe flex-1">
                        <span className="font-medium">{mat.label}:</span>{' '}
                        tu {c.my}% · sector {c.avg}%
                      </p>
                      <span className={`font-sans text-xs font-medium ${above ? 'text-green-700' : 'text-red-600'}`}>
                        {above ? `Estás por encima \u2191` : `Estás por debajo \u2193`}
                      </span>
                    </div>
                  )
                })}
                <p className="font-sans text-[11px] text-cafe/40 mt-2">
                  Comparativa basada en promedio anónimo de empresas del mismo sector. No se revelan datos individuales.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>

      {/* SECCION 5 — Inteligencia sugerida (outside PDF ref) */}
      <div className="max-w-5xl mx-auto px-8 space-y-10">
        <section>
          <h2 className="font-serif text-2xl text-cafe mb-4">Inteligencia sugerida</h2>
          <div className="space-y-2">
            {recomendaciones.map((rec, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg border-l-4 ${REC_STYLES[rec.tipo]}`}
              >
                <p className="font-sans text-sm text-cafe/80">{rec.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECCION 6 — Acciones disponibles */}
        <section className="pb-12">
          <h2 className="font-serif text-2xl text-cafe mb-4">Acciones disponibles</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={handlePdf}
              disabled={generatingPdf}
              className="p-4 bg-white rounded-xl border border-cafe/10 hover:border-musgo/40 hover:shadow-sm transition-all text-left"
            >
              <span className="text-xl">{generatingPdf ? '\u23F3' : '\uD83D\uDCC4'}</span>
              <p className="mt-2 font-sans text-sm font-medium text-cafe">
                {generatingPdf ? 'Generando...' : 'Descargar reporte PDF'}
              </p>
            </button>
            <button
              onClick={() => setModalContacto(true)}
              className="p-4 bg-white rounded-xl border border-cafe/10 hover:border-musgo/40 hover:shadow-sm transition-all text-left"
            >
              <span className="text-xl">{'\uD83D\uDCE7'}</span>
              <p className="mt-2 font-sans text-sm font-medium text-cafe">Contactar a ProREP</p>
            </button>
            <button
              onClick={() => setModalComparativa(true)}
              className="p-4 bg-white rounded-xl border border-cafe/10 hover:border-musgo/40 hover:shadow-sm transition-all text-left"
            >
              <span className="text-xl">{'\uD83D\uDCCA'}</span>
              <p className="mt-2 font-sans text-sm font-medium text-cafe">Ver comparativa completa</p>
            </button>
            <button
              onClick={handleBack}
              className="p-4 bg-white rounded-xl border border-cafe/10 hover:border-musgo/40 hover:shadow-sm transition-all text-left"
            >
              <span className="text-xl">{'\u2190'}</span>
              <p className="mt-2 font-sans text-sm font-medium text-cafe">Volver al inicio</p>
            </button>
          </div>
        </section>
      </div>

      {/* Modal — Contactar ProREP */}
      <Modal open={modalContacto} onClose={() => setModalContacto(false)} title="Contactar a ProREP">
        <p className="font-sans text-sm text-cafe/80 leading-relaxed">
          Para comunicarte con tu gestor{' '}
          <span className="font-medium">{afiliado.relacionProREP.gestorAsignado}</span>, escribe a{' '}
          <span className="font-medium text-musgo">gestores@prorep.cl</span>{' '}
          indicando tu empresa y RUT.
        </p>
        <p className="mt-3 font-sans text-xs text-cafe/50">
          Tiempo de respuesta: 48 horas hábiles.
        </p>
      </Modal>

      {/* Modal — Comparativa completa */}
      <Modal open={modalComparativa} onClose={() => setModalComparativa(false)} title="Comparativa sectorial completa">
        {!comparison ? (
          <p className="font-sans text-sm text-cafe/50 italic">
            Sin empresas comparables en tu sector para esta demo.
          </p>
        ) : (
          <table className="w-full text-left font-sans text-sm">
            <thead>
              <tr className="border-b border-cafe/10">
                <th className="py-2 font-medium text-xs uppercase tracking-wider text-cafe/50">Material</th>
                <th className="py-2 font-medium text-xs uppercase tracking-wider text-cafe/50 text-right">Tu %</th>
                <th className="py-2 font-medium text-xs uppercase tracking-wider text-cafe/50 text-right">Sector %</th>
                <th className="py-2 font-medium text-xs uppercase tracking-wider text-cafe/50 text-right">Diferencia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cafe/5">
              {MATERIALES.map((mat) => {
                const c = comparison[mat.key]
                if (!c) return null
                const above = c.diff >= 0
                return (
                  <tr key={mat.key}>
                    <td className="py-2 text-cafe">{mat.icon} {mat.label}</td>
                    <td className="py-2 text-right tabular-nums font-medium text-cafe">{c.my}%</td>
                    <td className="py-2 text-right tabular-nums text-cafe/60">{c.avg}%</td>
                    <td className={`py-2 text-right tabular-nums font-medium ${above ? 'text-green-700' : 'text-red-600'}`}>
                      {above ? '+' : ''}{c.diff}%
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
        <p className="mt-4 font-sans text-[11px] text-cafe/40">
          Comparativa basada en promedio anónimo de empresas del mismo sector.
        </p>
      </Modal>
    </div>
  )
}

export default DashboardAfiliado
