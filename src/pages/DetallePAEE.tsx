// src/pages/DetallePAEE.tsx
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'
import { productosPrioritarios } from '../data/productos-prioritarios'
import { metasPAEE, datosClavesPAEE as d } from '../data/datos-paee'
import { FuenteDatos } from '../components/FuenteDatos'

const chartData = metasPAEE.map((m) => ({
  año: `Año ${m.año}`,
  'Otros AEE': m.otrosAEE,
  'AIT': m.ait,
  'Paneles FV': m.panelesFV,
}))

export function DetallePAEE() {
  const pp = productosPrioritarios.find((p) => p.id === 'paee')!

  return (
    <div className="p-8 max-w-5xl space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: pp.color }} />
          <h2 className="text-2xl font-bold">{pp.nombre}</h2>
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-900/50 text-amber-300">
            Contraloría tomó razón · Pendiente DO
          </span>
        </div>
        <p className="text-stone-400 mb-2">{pp.descripcion}</p>
      </div>

      {/* Alerta principal */}
      <div className="p-5 rounded-xl border border-amber-900/50 bg-amber-950/20">
        <p className="text-sm font-medium text-amber-300 mb-2">Contraloría tomó razón el {d.contraloriaTomaRazon}</p>
        <p className="text-sm text-stone-400">
          Solo falta la publicación en el Diario Oficial, tras lo cual comienzan a correr 24 meses
          para el inicio del cumplimiento de metas. Los productores deberán constituir Sistemas de
          Gestión, obtener autorización del TDLC (~6 meses mínimo), y presentar planes de gestión
          al MMA para aprobación.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Empresas reguladas</p>
          <p className="text-xl font-bold">~{d.productoresTotal.toLocaleString('es-CL')}</p>
          <p className="text-xs text-stone-500">{d.productoresAEE.toLocaleString('es-CL')} AEE + {d.productoresPilas.toLocaleString('es-CL')} pilas</p>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Tasa reciclaje actual</p>
          <p className="text-xl font-bold text-red-400">{d.tasaReciclajeActual}%</p>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Categorías</p>
          <p className="text-xl font-bold">3</p>
          <p className="text-xs text-stone-500">Otros AEE · AIT · Paneles FV</p>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Plazo para metas</p>
          <p className="text-xl font-bold">24 meses</p>
          <p className="text-xs text-stone-500">desde publicación DO</p>
        </div>
      </div>

      <FuenteDatos
        fuente="MMA (Paz Maluenda) · País Circular"
        tipo="oficial"
        fecha="Junio 2025"
      />

      {/* Categorías */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Categorías del decreto</h3>
        <div className="space-y-3">
          {d.categorias.map((cat) => (
            <div key={cat.nombre} className="p-4 rounded-lg border border-stone-800">
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <p className="font-medium text-stone-200">{cat.nombre}</p>
                <p className="text-xs text-stone-500 shrink-0">{cat.metaInicio} → {cat.metaFinal}</p>
              </div>
              <p className="text-sm text-stone-400">{cat.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chart de metas */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Trayectoria de metas de recolección</h3>
        <div className="w-full h-72">
          <ResponsiveContainer>
            <LineChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
              <XAxis
                dataKey="año"
                tick={{ fill: '#78716c', fontSize: 12 }}
                axisLine={{ stroke: '#292524' }}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(v: number) => `${v}%`}
                tick={{ fill: '#78716c', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1c1917',
                  border: '1px solid #292524',
                  borderRadius: '8px',
                  fontSize: '13px',
                }}
                labelStyle={{ color: '#d6d3d1' }}
                formatter={(value) => value != null ? [`${value}%`, undefined] : ['—', undefined]}
              />
              <Legend wrapperStyle={{ fontSize: '12px', color: '#a8a29e' }} />
              <Line type="monotone" dataKey="Otros AEE" stroke="#0984E3" strokeWidth={2} dot={{ r: 3 }} connectNulls={false} />
              <Line type="monotone" dataKey="AIT" stroke="#00b894" strokeWidth={2} dot={{ r: 3 }} connectNulls={false} />
              <Line type="monotone" dataKey="Paneles FV" stroke="#fdcb6e" strokeWidth={2} dot={{ r: 3 }} connectNulls={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <FuenteDatos
          fuente="Decreto P+AEE aprobado por Consejo de Ministros"
          tipo="oficial"
          fecha="Junio 2025"
          nota="Metas confirmadas. Valores intermedios pendientes de verificación tras publicación en Diario Oficial"
        />
      </div>

      {/* SIG en formación */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Sistemas de Gestión en formación</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {d.sigEnFormacion.map((sig) => (
            <div key={sig.nombre} className="p-4 rounded-lg border border-stone-800">
              <p className="font-medium text-stone-200 mb-1">{sig.nombre}</p>
              <p className="text-sm text-stone-400">{sig.responsable}</p>
              <p className="text-xs text-stone-500">{sig.organizacion}</p>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-lg border border-stone-800 mt-4">
          <p className="font-medium text-stone-200 mb-1">{d.principalValorizador.nombre}</p>
          <p className="text-sm text-stone-400">{d.principalValorizador.responsable}</p>
          <p className="text-xs text-stone-500 mt-1">{d.principalValorizador.nota}</p>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Cronología del decreto</h3>
        <div className="space-y-0">
          {d.timeline.map((h, i) => (
            <div key={i} className="flex gap-4 pb-6">
              <div className="flex flex-col items-center">
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 ${
                  h.fecha === '20 abril 2026' ? 'bg-amber-400' : 'bg-stone-600'
                }`} />
                {i < d.timeline.length - 1 && (
                  <div className="w-px flex-1 bg-stone-800" />
                )}
              </div>
              <div>
                <p className="text-xs text-stone-500 mb-0.5">{h.fecha}</p>
                <p className="text-sm text-stone-300">{h.evento}</p>
              </div>
            </div>
          ))}
        </div>
        <FuenteDatos
          fuente="País Circular · MMA · Contraloría General"
          tipo="oficial"
          fecha="20 abril 2026"
        />
      </div>
    </div>
  )
}
