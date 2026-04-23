// src/components/TonelajeChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { tonelaje2024 } from '../data/metas-eye'

const data = tonelaje2024.map((r) => ({
  material: r.material.replace('Cartón para líquidos', 'Cart. líq.'),
  MDP: r.mdp,
  MGP: r.mgp,
}))

const formatTon = (v: number) => `${(v / 1000).toFixed(0)}k`

export function TonelajeChart() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
          <XAxis
            dataKey="material"
            tick={{ fill: '#78716c', fontSize: 12 }}
            axisLine={{ stroke: '#292524' }}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatTon}
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
            formatter={(value) => [`${Number(value).toLocaleString('es-CL')} ton`, undefined]}
          />
          <Legend
            wrapperStyle={{ fontSize: '12px', color: '#a8a29e' }}
          />
          <Bar dataKey="MDP" fill="#57534e" radius={[4, 4, 0, 0]} />
          <Bar dataKey="MGP" fill="#4A7C59" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
