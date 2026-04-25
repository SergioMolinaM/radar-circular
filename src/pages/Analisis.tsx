// src/pages/Analisis.tsx — F15: datos oficiales SNIFA 2024
import { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RTooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts'
import { datosREP2024 } from '../data/datos-cumplimiento-rep-snifa-2024'
import type { DeclaracionSIG } from '../data/datos-cumplimiento-rep-snifa-2024'
import { trabasEyE, trabasNFU, marcaAnalitica } from '../data/analisis-rep'
import { Callout } from '../components/Callout'
import { UltimaActualizacion } from '../components/UltimaActualizacion'
import { FuenteDatos } from '../components/FuenteDatos'

/* ── Helpers ── */

function computeTasa(d: DeclaracionSIG): number | null {
  if (d.lineaBaseTon == null || d.tratamientoTon == null) return null
  if (d.lineaBaseTon === 0) return d.tratamientoTon > 0 ? 999 : 0
  return (d.tratamientoTon / d.lineaBaseTon) * 100
}

function fmtPct(n: number | null): string {
  if (n === null) return '—'
  if (n >= 999) return '>100%'
  return `${n.toFixed(1)}%`
}

function fmtTon(n: number | null): string {
  if (n === null) return '—'
  return Math.round(n).toLocaleString('es-CL')
}

function CumpleBadge({ tasa, meta }: { tasa: number | null; meta: number }) {
  if (tasa === null) {
    return (
      <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(150,150,150,0.15)', color: 'var(--text-muted)' }}>
        Pendiente
      </span>
    )
  }
  const cumple = tasa >= meta
  return (
    <span
      className="text-xs px-2 py-0.5 rounded-full font-medium"
      style={{
        backgroundColor: cumple ? 'rgba(45, 155, 110, 0.15)' : 'rgba(224, 82, 82, 0.15)',
        color: cumple ? 'var(--accent)' : 'var(--red)',
      }}
    >
      {cumple ? '✓ Cumple' : '✗ No cumple'}
    </span>
  )
}

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

/* ── Tabla genérica de cumplimiento ── */

interface FilaCumplimiento {
  sig: string
  subcategoria: string
  lineaBase: number | null
  tratamiento: number | null
  tasa: number | null
  meta: number
  anomalia?: string
}

function TablaCumplimiento({ filas, titulo, meta, fuente }: {
  filas: FilaCumplimiento[]
  titulo: string
  meta: number
  fuente: string
}) {
  const cumplen = filas.filter(f => f.tasa !== null && f.tasa >= meta).length
  const evaluables = filas.filter(f => f.tasa !== null).length

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{titulo}</h4>
        <span className="text-xs px-3 py-1 rounded-full" style={{
          backgroundColor: cumplen === evaluables && evaluables > 0 ? 'rgba(45,155,110,0.15)' : 'rgba(224,82,82,0.15)',
          color: cumplen === evaluables && evaluables > 0 ? 'var(--accent)' : 'var(--red)',
        }}>
          {cumplen} de {evaluables} cumplen meta ({meta}%)
        </span>
      </div>

      <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border)' }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-elevated)' }}>
              <th className="text-left px-4 py-2.5 font-medium" style={{ color: 'var(--text-muted)' }}>SIG</th>
              <th className="text-left px-4 py-2.5 font-medium" style={{ color: 'var(--text-muted)' }}>Subcategoría</th>
              <th className="text-right px-4 py-2.5 font-medium" style={{ color: 'var(--text-muted)' }}>Línea base</th>
              <th className="text-right px-4 py-2.5 font-medium" style={{ color: 'var(--text-muted)' }}>Tratamiento</th>
              <th className="text-right px-4 py-2.5 font-medium" style={{ color: 'var(--text-muted)' }}>Tasa</th>
              <th className="text-center px-4 py-2.5 font-medium" style={{ color: 'var(--text-muted)' }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {filas.map((f, i) => (
              <tr
                key={`${f.sig}-${f.subcategoria}-${i}`}
                style={{
                  backgroundColor: i % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-deep)',
                  borderTop: '1px solid var(--border)',
                }}
              >
                <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>{f.sig}</td>
                <td className="px-4 py-2.5" style={{ color: 'var(--text-secondary)' }}>{f.subcategoria}</td>
                <td className="px-4 py-2.5 text-right font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {fmtTon(f.lineaBase)}
                </td>
                <td className="px-4 py-2.5 text-right font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {fmtTon(f.tratamiento)}
                  {f.tasa !== null && f.tasa > 100 && (
                    <span className="ml-1 text-amber-500" title="Tratamiento supera línea base">⚠</span>
                  )}
                </td>
                <td className="px-4 py-2.5 text-right font-mono font-bold text-xs" style={{
                  color: f.tasa === null ? 'var(--text-muted)' : f.tasa >= meta ? 'var(--accent)' : 'var(--red)',
                }}>
                  {fmtPct(f.tasa)}
                </td>
                <td className="px-4 py-2.5 text-center">
                  <CumpleBadge tasa={f.tasa} meta={meta} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notas de anomalía */}
      {filas.some(f => f.anomalia) && (
        <div className="space-y-1">
          {filas.filter(f => f.anomalia).map((f, i) => (
            <p key={i} className="text-xs" style={{ color: 'var(--text-muted)' }}>
              ⚠ {f.sig} — {f.anomalia}
            </p>
          ))}
        </div>
      )}

      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Fuente: {fuente}</p>
    </div>
  )
}

/* ── Componente principal ── */

export function Analisis() {
  /* ── Filtrar y deduplicar datos ── */
  const datos = useMemo(() => {
    // Deduplicar (hay un SIGA duplicado en los datos)
    const seen = new Set<string>()
    const unique = datosREP2024.filter(d => {
      const key = `${d.sistemaGestion}|${d.productoPrioritario}|${d.tipo}|${d.categoria}|${d.subcategoria}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })

    const eyeDom = unique.filter(d => d.productoPrioritario === 'Envases' && d.categoria === 'Domiciliario')
    const eyeNoDomCol = unique.filter(d => d.productoPrioritario === 'Envases' && d.categoria === 'No domiciliario' && d.tipo === 'Colectivo')
    const eyeNoDomInd = unique.filter(d => d.productoPrioritario === 'Envases' && d.categoria === 'No domiciliario' && d.tipo === 'Individual')
    const nfuCol = unique.filter(d => d.productoPrioritario === 'NFU' && d.tipo === 'Colectivo')
    const nfuInd = unique.filter(d => d.productoPrioritario === 'NFU' && d.tipo === 'Individual')

    return { eyeDom, eyeNoDomCol, eyeNoDomInd, nfuCol, nfuInd }
  }, [])

  /* ── Filas para tablas ── */
  const toFila = (d: DeclaracionSIG, meta: number, anomalia?: string): FilaCumplimiento => ({
    sig: d.sistemaGestion,
    subcategoria: d.subcategoria === '-' ? d.categoria : d.subcategoria,
    lineaBase: d.lineaBaseTon,
    tratamiento: d.tratamientoTon,
    tasa: computeTasa(d),
    meta,
    anomalia,
  })

  const filasEyeDom: FilaCumplimiento[] = datos.eyeDom.map(d => toFila(d, 3))

  const filasEyeNoDomCol: FilaCumplimiento[] = datos.eyeNoDomCol.map(d => {
    const t = computeTasa(d)
    const anomalia = t !== null && t > 100
      ? 'Tratamiento supera línea base. Puede incluir valorización de stock previo.'
      : undefined
    return toFila(d, 5, anomalia)
  })

  const filasNfuCol: FilaCumplimiento[] = datos.nfuCol.map(d => {
    if (d.sistemaGestion === 'Valora Más') {
      return { sig: 'Valora Más', subcategoria: 'Cat A', lineaBase: null, tratamiento: null, tasa: null, meta: 30, anomalia: 'Dato pendiente — no reportado en SNIFA.' }
    }
    return toFila(d, 30)
  })

  const filasNfuInd: FilaCumplimiento[] = datos.nfuInd.map(d => {
    if (d.sistemaGestion === 'Autorentas del Pacífico') {
      return toFila(d, 30, 'Línea base anómala (880.974 ton). Posible error de unidades o registro.')
    }
    return toFila(d, 30)
  })

  /* ── Chart data: ReSimple vs GIRO domiciliario ── */
  const subcategorias = ['Cartón para líquidos', 'Metal', 'Papel y cartón', 'Plástico', 'Vidrio']
  const chartData = subcategorias.map(sub => {
    const rs = datos.eyeDom.find(d => d.sistemaGestion === 'ReSimple' && d.subcategoria === sub)
    const giro = datos.eyeDom.find(d => d.sistemaGestion === 'GIRO' && d.subcategoria === sub)
    return {
      material: sub.replace('Cartón para líquidos', 'Cartón líq.').replace('Papel y cartón', 'Papel/cartón'),
      ReSimple: rs ? +(computeTasa(rs)?.toFixed(1) ?? 0) : 0,
      GIRO: giro ? +(computeTasa(giro)?.toFixed(1) ?? 0) : 0,
    }
  })

  return (
    <div className="p-8 max-w-5xl space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Análisis
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Cumplimiento declarado por los Sistemas de Gestión al año 2 de vigencia (2024),
          según datos abiertos SNIFA (SMA). Diagnóstico estructural y trabas identificadas por las MEP-CORFO.
        </p>
        <UltimaActualizacion fecha="25 de abril de 2026" />
      </div>

      {/* Advertencia SMA */}
      <Callout variant="warning" titulo="Datos declarados, no verificados">
        Estos datos fueron declarados por los propios SIG a la SMA a través del SNIFA.
        La SMA advierte explícitamente que no han sido procesados ni verificados.
        Son la mejor fuente pública disponible, pero deben interpretarse con esa limitación.
      </Callout>

      <Callout variant="explainer" titulo="¿Cómo se mide el cumplimiento?">
        El DS12 (art. 22) mide el cumplimiento como el porcentaje de toneladas valorizadas
        a través de un Sistema de Gestión (SIG) respecto de lo puesto en el mercado el año anterior (línea base).
        Las metas de año 2 (2024) son 3% por subcategoría para domiciliario y 5% para no domiciliario.
        Para NFU Cat A (DS8), la meta de valorización año 2 es 30%.
      </Callout>

      {/* ════════════════════════════════════════════ */}
      {/* SECCIÓN 1: EyE DOMICILIARIO                */}
      {/* ════════════════════════════════════════════ */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold" style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}>
          1. Envases domiciliarios — ReSimple vs GIRO (2024)
        </h3>

        <TablaCumplimiento
          filas={filasEyeDom}
          titulo="EyE Domiciliario — Año 2 DS12"
          meta={3}
          fuente="SNIFA Datos Abiertos (SMA), DatosAbiertos2024.xlsx"
        />

        {/* Gráfico comparativo */}
        <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
          <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-primary)' }}>
            Tasa de cumplimiento por material — ReSimple vs GIRO (meta 3%)
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="material" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-muted)' }} unit="%" />
              <RTooltip
                contentStyle={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(value) => [`${value}%`]}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <ReferenceLine y={3} stroke="var(--red)" strokeDasharray="6 3" label={{ value: 'Meta 3%', position: 'right', fontSize: 11, fill: 'var(--red)' }} />
              <Bar dataKey="ReSimple" fill="#6366f1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="GIRO" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ════════════════════════════════════════════ */}
      {/* SECCIÓN 2: EyE NO DOMICILIARIO              */}
      {/* ════════════════════════════════════════════ */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold" style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}>
          2. Envases no domiciliarios — GRANSIC colectivos (2024)
        </h3>

        <TablaCumplimiento
          filas={filasEyeNoDomCol}
          titulo="EyE No Domiciliario — Año 2 DS12 (meta 5%)"
          meta={5}
          fuente="SNIFA Datos Abiertos (SMA), DatosAbiertos2024.xlsx"
        />

        {datos.eyeNoDomInd.length > 0 && (
          <details className="rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <summary className="px-4 py-3 cursor-pointer text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
              SIG individuales no domiciliarios ({datos.eyeNoDomInd.length} declaraciones)
            </summary>
            <div className="px-4 pb-4">
              <TablaCumplimiento
                filas={datos.eyeNoDomInd.map(d => toFila(d, 5))}
                titulo=""
                meta={5}
                fuente="SNIFA Datos Abiertos (SMA)"
              />
            </div>
          </details>
        )}
      </div>

      {/* ════════════════════════════════════════════ */}
      {/* SECCIÓN 3: NFU                              */}
      {/* ════════════════════════════════════════════ */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold" style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}>
          3. Neumáticos fuera de uso — NFU (2024)
        </h3>

        <TablaCumplimiento
          filas={filasNfuCol}
          titulo="NFU Colectivos Cat A — Año 2 DS8 (meta valorización 30%)"
          meta={30}
          fuente="SNIFA Datos Abiertos (SMA), DatosAbiertos2024.xlsx"
        />

        <TablaCumplimiento
          filas={filasNfuInd}
          titulo="NFU Individuales"
          meta={30}
          fuente="SNIFA Datos Abiertos (SMA), DatosAbiertos2024.xlsx"
        />
      </div>

      {/* ════════════════════════════════════════════ */}
      {/* CALLOUT EDITORIAL                           */}
      {/* ════════════════════════════════════════════ */}
      <Callout variant="info" titulo="Lectura editorial de los datos">
        Tres materiales en categoría domiciliaria no alcanzaron la meta de 3% en ReSimple durante 2024:
        metal (0,2%), cartón para líquidos (1,1%) y plástico (1,6%).
        GIRO, con una línea base 19 veces menor, cumplió en todas las subcategorías.
        En no domiciliario, todos los GRANSIC superaron ampliamente la meta de 5%,
        con tasas entre 33% y 60%.
      </Callout>

      {/* ════════════════════════════════════════════ */}
      {/* DATOS CONTEXTUALES                          */}
      {/* ════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
          <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>2.757</p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Productores adheridos</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Fuente: SMA, 2025</p>
        </div>
        <div className="p-4 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
          <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>410</p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>CI catastrados en SISREP</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Fuente: SISREP, abr 2026</p>
        </div>
        <div className="p-4 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
          <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>35</p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>SIG aprobados (vigente)</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Fuente: RETC, nov 2025</p>
        </div>
      </div>

      {/* ════════════════════════════════════════════ */}
      {/* DIAGNÓSTICO ESTRUCTURAL                     */}
      {/* ════════════════════════════════════════════ */}
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

      {/* ════════════════════════════════════════════ */}
      {/* TRABAS                                       */}
      {/* ════════════════════════════════════════════ */}
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
        fuente="SNIFA Datos Abiertos (SMA) — DatosAbiertos2024.xlsx · MEP EyE/NFU CORFO (2025) · Informe Figueroa PUC"
        tipo="oficial"
        fecha="Abril 2026"
        nota="Datos de cumplimiento declarados por los SIG. No verificados por la SMA."
      />
    </div>
  )
}
