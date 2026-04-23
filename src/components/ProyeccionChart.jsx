import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceArea,
  ReferenceDot,
  ResponsiveContainer,
} from 'recharts'
import { metasNoDomDS12, cumplimientoRealOperador } from '../data/prorep-interno'

function ProyeccionChart() {
  return (
    <ResponsiveContainer width="100%" height={420}>
      <LineChart
        data={metasNoDomDS12}
        margin={{ top: 30, right: 40, left: 60, bottom: 20 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#2C241615"
          vertical={false}
        />
        <XAxis
          dataKey="año"
          stroke="#2C2416A0"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          dy={10}
        />
        <YAxis
          stroke="#2C2416A0"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
          dx={-10}
          domain={[0, 100]}
        />
        <ReferenceArea
          x1={2024}
          x2={2026}
          y1={0}
          y2={100}
          fill="#5B7C5B"
          fillOpacity={0.06}
          label={{
            value: 'Compensación 100% activa entre subcategorías',
            position: 'insideTop',
            fill: '#5B7C5B',
            fontSize: 10,
            fontFamily: 'Inter',
            offset: 10,
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #2C241620',
            borderRadius: 8,
            fontSize: 12,
            fontFamily: 'Inter',
            padding: '8px 12px',
          }}
          itemStyle={{ padding: '2px 0' }}
          labelStyle={{ fontSize: 12, fontWeight: 500, marginBottom: 4, color: '#2C2416' }}
          formatter={(value, name) => [`${value}%`, name]}
          labelFormatter={(label) => `Año ${label}`}
          cursor={{ stroke: '#5B7C5B', strokeWidth: 1, strokeDasharray: '3 3' }}
        />
        <Line
          type="monotone"
          dataKey="metal"
          stroke="#8B5A3C"
          strokeWidth={2.5}
          dot={{ r: 3, fill: '#8B5A3C', strokeWidth: 0 }}
          activeDot={{ r: 5, fill: '#8B5A3C', strokeWidth: 0 }}
          name="Meta Metal"
        />
        <Line
          type="monotone"
          dataKey="papelCarton"
          stroke="#5B7C5B"
          strokeWidth={2.5}
          dot={{ r: 3, fill: '#5B7C5B', strokeWidth: 0 }}
          activeDot={{ r: 5, fill: '#5B7C5B', strokeWidth: 0 }}
          name="Meta Papel y Cartón"
        />
        <Line
          type="monotone"
          dataKey="plastico"
          stroke="#3B5F8A"
          strokeWidth={2.5}
          dot={{ r: 3, fill: '#3B5F8A', strokeWidth: 0 }}
          activeDot={{ r: 5, fill: '#3B5F8A', strokeWidth: 0 }}
          name="Meta Plástico"
        />
        <ReferenceDot
          x={2024}
          y={cumplimientoRealOperador.metal}
          r={7}
          fill="#8B5A3C"
          stroke="#FAF7F0"
          strokeWidth={2}
          label={{
            value: '37%',
            position: 'top',
            fill: '#8B5A3C',
            fontSize: 11,
            fontWeight: 600,
            fontFamily: 'Inter',
            offset: 8,
          }}
        />
        <ReferenceDot
          x={2024}
          y={cumplimientoRealOperador.papelCarton}
          r={7}
          fill="#5B7C5B"
          stroke="#FAF7F0"
          strokeWidth={2}
          label={{
            value: '59%',
            position: 'top',
            fill: '#5B7C5B',
            fontSize: 11,
            fontWeight: 600,
            fontFamily: 'Inter',
            offset: 8,
          }}
        />
        <ReferenceDot
          x={2024}
          y={cumplimientoRealOperador.plastico}
          r={7}
          fill="#3B5F8A"
          stroke="#FAF7F0"
          strokeWidth={2}
          label={{
            value: '25%',
            position: 'top',
            fill: '#3B5F8A',
            fontSize: 11,
            fontWeight: 600,
            fontFamily: 'Inter',
            offset: 8,
          }}
        />
        <Legend
          iconType="line"
          wrapperStyle={{ fontSize: 12, fontFamily: 'Inter', paddingTop: 16 }}
          align="center"
          verticalAlign="bottom"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ProyeccionChart
