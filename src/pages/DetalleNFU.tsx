// src/pages/DetalleNFU.tsx
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'
import { productosPrioritarios } from '../data/productos-prioritarios'
import { metasNFU, gestoresNFU, datosClaveNFU } from '../data/datos-nfu'
import { MetasTable } from '../components/MetasTable'
import { FuenteDatos } from '../components/FuenteDatos'
import { UltimaActualizacion } from '../components/UltimaActualizacion'

function formatTon(n: number) {
  return n.toLocaleString('es-CL')
}

const gestoresChartData = gestoresNFU.filter((g) => g.region !== 'Otras regiones').map((g) => ({
  region: g.region,
  Recolección: g.recoleccion,
  Almacenamiento: g.almacenamiento,
  Valorización: g.valorizacion,
}))

export function DetalleNFU() {
  const pp = productosPrioritarios.find((p) => p.id === 'nfu')!
  const d = datosClaveNFU

  const colsMetas = [
    { key: 'año', label: 'Año' },
    { key: 'metaCatA', label: 'Cat. A' },
    { key: 'metaCatB', label: 'Cat. B' },
  ]

  return (
    <div className="p-8 max-w-5xl space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: pp.color }} />
          <h2 className="text-2xl font-bold">{pp.nombre}</h2>
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-900/50 text-emerald-300">
            Vigente
          </span>
        </div>
        <p className="text-stone-400 mb-2">{pp.descripcion}</p>
        <p className="text-sm text-stone-500">{pp.decreto} · Vigencia: {pp.fechaVigencia}</p>
        <UltimaActualizacion fecha="24 de abril de 2026" />
      </div>

      {/* SIG */}
      <div className="p-5 rounded-xl border border-stone-800">
        <p className="text-xs text-stone-500 mb-3">Sistemas de Gestión Colectivos</p>
        <div className="flex flex-wrap gap-3">
          {pp.sistemasGestion.map((sg) => (
            <div key={sg.nombre} className="flex items-center gap-2">
              <span className="font-medium">{sg.nombre}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400">
                {sg.tipo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Cifras clave</h3>
        <p className="text-xs text-stone-500 mb-4">
          Fuentes: Presentación CORFO MEP NFU, SIGA, Valora Más, Chile Neumáticos AG, Informe MEP NFU V1
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border border-stone-800">
            <p className="text-xs text-stone-500">Gestores RETC</p>
            <p className="text-xl font-bold">{d.gestoresTotalRETC}</p>
          </div>
          <div className="p-4 rounded-lg border border-stone-800">
            <p className="text-xs text-stone-500">CTIP 2025</p>
            <p className="text-xl font-bold">{formatTon(d.ctipInput2025)} ton</p>
          </div>
          <div className="p-4 rounded-lg border border-stone-800">
            <p className="text-xs text-stone-500">Stock acumulado</p>
            <p className="text-xl font-bold text-amber-400">{formatTon(d.stockAcumuladoTon)} ton</p>
          </div>
          <div className="p-4 rounded-lg border border-stone-800">
            <p className="text-xs text-stone-500">Free-riders</p>
            <p className="text-xl font-bold text-red-400">{d.porcentajeFreeRiders}%</p>
            <p className="text-xs text-stone-500">{d.importadoresSinSig} de {d.importadoresTotal} importadores</p>
          </div>
        </div>
      </div>

      <FuenteDatos
        fuente="Presentación CORFO MEP NFU · Chile Neumáticos AG · Valora Más"
        tipo="declaracion-actor"
        fecha="Noviembre 2025"
        nota="Datos presentados en sesiones MEP CORFO. Stock de 20k ton reportado por Valora Más (no verificado por SMA)"
      />

      {/* Alertas */}
      <div className="space-y-3">
        <div className="p-4 rounded-lg border border-amber-900/50 bg-amber-950/20">
          <p className="text-sm text-amber-300 font-medium mb-1">Recauchaje no contabilizado</p>
          <p className="text-sm text-stone-400">
            ~{formatTon(d.recauchajeTonAnual)} ton/año de neumáticos Cat. A son recauchados (reutilización), pero
            no se reconocen como cumplimiento de metas de valorización.
          </p>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-sm text-stone-300 font-medium mb-1">Revisión DS 8 obligatoria</p>
          <p className="text-sm text-stone-400">
            El decreto debe revisarse antes de {d.revisionDS8Antes} (art. 35 del Reglamento).
            El salto de metas de 50% a 80% en 2026, sin mercado consolidado para subproductos,
            es el principal riesgo operativo del sector.
          </p>
        </div>
      </div>

      {/* Chart gestores por región */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Gestores por región (principales)</h3>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <BarChart data={gestoresChartData} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
              <XAxis
                dataKey="region"
                tick={{ fill: '#78716c', fontSize: 12 }}
                axisLine={{ stroke: '#292524' }}
                tickLine={false}
              />
              <YAxis
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
              />
              <Legend wrapperStyle={{ fontSize: '12px', color: '#a8a29e' }} />
              <Bar dataKey="Recolección" fill="#57534e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Almacenamiento" fill="#78716c" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Valorización" fill="#4A7C59" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-stone-600 mt-2">
          Total: {d.gestoresTotalRETC} gestores registrados en RETC 2025. "Otras regiones" agrupa 33 gestores en regiones con menor concentración.
        </p>
      </div>

      {/* Metas */}
      <div>
        <h3 className="text-lg font-semibold mb-6">Metas de valorización (DS 8/2019)</h3>
        <div className="max-w-sm">
          <MetasTable
            titulo="% del POM año anterior"
            columnas={colsMetas}
            filas={metasNFU as unknown as Record<string, string | number>[]}
            nota="Cat. A: vehículos livianos · Cat. B: mineros/industriales. Metas saltan de 50% a 80% en 2026."
          />
        </div>
        <FuenteDatos fuente="Decreto Supremo 8/2019" tipo="oficial" />
      </div>
    </div>
  )
}
