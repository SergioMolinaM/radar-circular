// src/components/MetasLineChart.tsx
import { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, ReferenceLine,
} from 'recharts'
import { metasDomiciliarias, metasNoDomiciliarias } from '../data/metas-eye'

type Vista = 'domiciliario' | 'no-domiciliario'

const coloresDom: Record<string, string> = {
  papelCarton: '#4A7C59',
  cartonLiquidos: '#E17055',
  metal: '#636e72',
  plastico: '#0984E3',
  vidrio: '#a29bfe',
}

const coloresNoDom: Record<string, string> = {
  papelCarton: '#4A7C59',
  plastico: '#0984E3',
  metal: '#636e72',
}

const labelsDom: Record<string, string> = {
  papelCarton: 'Papel y cartón',
  cartonLiquidos: 'Cartón líquidos',
  metal: 'Metal',
  plastico: 'Plástico',
  vidrio: 'Vidrio',
}

const labelsNoDom: Record<string, string> = {
  papelCarton: 'Papel y cartón',
  plastico: 'Plástico',
  metal: 'Metal',
}

export function MetasLineChart() {
  const [vista, setVista] = useState<Vista>('domiciliario')

  const isDom = vista === 'domiciliario'
  const data = isDom ? metasDomiciliarias : metasNoDomiciliarias
  const colores = isDom ? coloresDom : coloresNoDom
  const labels = isDom ? labelsDom : labelsNoDom
  const keys = Object.keys(labels)

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setVista('domiciliario')}
          className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
            isDom ? 'bg-stone-800 text-stone-100' : 'text-stone-500 hover:text-stone-300 hover:bg-stone-900'
          }`}
        >
          Domiciliarios
        </button>
        <button
          onClick={() => setVista('no-domiciliario')}
          className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
            !isDom ? 'bg-stone-800 text-stone-100' : 'text-stone-500 hover:text-stone-300 hover:bg-stone-900'
          }`}
        >
          No domiciliarios
        </button>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
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
              domain={[0, isDom ? 75 : 90]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1c1917',
                border: '1px solid #292524',
                borderRadius: '8px',
                fontSize: '13px',
              }}
              labelStyle={{ color: '#d6d3d1' }}
              formatter={(value) => [`${value}%`, undefined]}
            />
            <Legend wrapperStyle={{ fontSize: '12px', color: '#a8a29e' }} />
            <ReferenceLine x={2026} stroke="#78716c" strokeDasharray="3 3" label={{ value: '2026', fill: '#78716c', fontSize: 11 }} />
            {keys.map((key) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                name={labels[key]}
                stroke={colores[key]}
                strokeWidth={2}
                dot={{ r: 2 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-stone-600 mt-2">
        Línea punteada: año actual (2026). Fuente: DS 12/2020, Tablas metas de recolección y valorización.
      </p>
    </div>
  )
}
