import KPICard from '../components/KPICard'
import DataTypeBadge from '../components/DataTypeBadge'
import ComicCard from '../components/ComicCard'
import ProyeccionChart from '../components/ProyeccionChart'

const PROYECCION_ROWS = [
  { concepto: 'POM proyectado 2027', valor: '621.242 ton' },
  { concepto: 'Meta proyectada 2027', valor: '396.533 ton' },
  {
    concepto: 'Valorización SINADER proyectada',
    valor: '249.238 ton',
    detalle: 'déficit 147.295',
    detalleColor: 'text-red-700/70',
  },
  {
    concepto: 'Valorización ANIR proyectada',
    valor: '551.526 ton',
    detalle: 'excedente 154.993',
    detalleColor: 'text-musgo',
  },
]

function InteligenciaComparativa() {
  return (
    <div className="space-y-6 max-w-5xl">
      {/* Bloque 1 — Encabezado */}
      <div>
        <p className="font-sans text-xs uppercase tracking-wider text-cafe/50">
          Cumplimiento del sistema colectivo
        </p>
        <h1 className="font-serif text-4xl text-cafe mt-2">
          Cómo está cumpliendo tu sistema colectivo
        </h1>
        <p className="font-sans text-lg text-cafe/70 max-w-3xl mt-3">
          El sistema colectivo al que pertenece tu empresa (ProREP) opera en el segmento
          no domiciliario y superó sus metas 2024 en todas las subcategorías.
          Estos son los resultados que respaldan tu cumplimiento como afiliado.
        </p>
      </div>

      {/* Bloque 2 — KPIs cumplimiento por material */}
      <div className="bg-white border border-cafe/10 rounded-xl p-8">
        <p className="font-sans text-xs uppercase tracking-wider text-cafe/50 mb-4">
          Cumplimiento de metas 2024
        </p>
        <div className="grid grid-cols-3 gap-4">
          <KPICard
            label="Metal no domiciliario"
            value="115"
            unit="%"
            context="Meta 32% · Real 37%"
            dataType="interno"
          />
          <KPICard
            label="Papel y cartón no domiciliario"
            value="109"
            unit="%"
            context="Meta 54% · Real 59%"
            dataType="interno"
          />
          <KPICard
            label="Plástico no domiciliario"
            value="134"
            unit="%"
            context="Meta 19% · Real 25%"
            dataType="interno"
          />
        </div>
      </div>

      {/* Bloque 3 — Brecha ANIR vs SINADER */}
      <div className="bg-white border border-cafe/10 rounded-xl p-8">
        <DataTypeBadge type="interno" />
        <h2 className="font-serif text-2xl text-cafe mt-3">
          El esfuerzo que el sistema oficial todavía no contabiliza
        </h2>
        <p className="font-sans text-sm text-cafe/60 mt-2 max-w-3xl">
          Tu sistema colectivo y sus afiliados valorizaron 495.646 toneladas de
          envases industriales en 2023. El sistema oficial registró menos de la
          mitad de ese esfuerzo.
        </p>

        <div className="grid grid-cols-2 gap-8 mt-6">
          <div>
            <p className="font-sans text-xs uppercase tracking-wider text-cafe/60">
              Valorización registrada (ANIR)
            </p>
            <p className="font-serif text-5xl text-musgo mt-2">495.646</p>
            <p className="font-sans text-sm text-cafe/60 mt-1">toneladas</p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-wider text-cafe/60">
              Contabilizado oficialmente (SINADER)
            </p>
            <p className="font-serif text-5xl text-cafe mt-2">170.233</p>
            <p className="font-sans text-sm text-cafe/60 mt-1">toneladas</p>
          </div>
        </div>

        <div className="border-t border-cafe/10 mt-6 pt-6 flex items-center justify-between">
          <span className="font-sans text-sm text-cafe/60">
            Esfuerzo no contabilizado
          </span>
          <span className="font-serif text-3xl text-musgo">325.413 ton</span>
        </div>
      </div>

      {/* Bloque 4 — Gráfico metas del decreto */}
      <div className="bg-white border border-cafe/10 rounded-xl p-8">
        <DataTypeBadge type="publico" />
        <h2 className="font-serif text-2xl text-cafe mt-3">
          Las metas del decreto y dónde está hoy tu sistema colectivo
        </h2>
        <p className="font-sans text-sm text-cafe/60 mt-2 max-w-3xl">
          El DS 12/2020 establece metas progresivas hasta el año 9 para los tres
          materiales no domiciliarios. Los puntos destacados muestran el
          cumplimiento real reportado por tu sistema colectivo en 2024, año en el
          que superó las tres metas exigidas.
        </p>
        <div className="mt-6">
          <ProyeccionChart />
        </div>
        <p className="font-sans text-xs text-cafe/50 mt-4">
          Metas según artículo 23 del DS 12/2020. Los años corresponden al
          calendario: 2024 es el segundo año de vigencia del decreto. La zona
          sombreada indica el período de compensación 100% entre subcategorías,
          que termina al cierre de 2026.
        </p>
      </div>

      {/* Bloque 5 — Proyección 2027 */}
      <div className="bg-white border border-cafe/10 rounded-xl p-8">
        <DataTypeBadge type="interno" />
        <h2 className="font-serif text-2xl text-cafe mt-3">
          El horizonte 2027
        </h2>
        <p className="font-sans text-sm text-cafe/60 mt-2 max-w-3xl">
          Si el sistema oficial mantiene su forma actual de contabilizar, tu
          sistema colectivo enfrentará un déficit estructural en metal y plástico
          no domiciliarios
          hacia 2027. La valorización real seguirá superando la meta, pero el
          reporte oficial no la verá.
        </p>

        <div className="mt-6">
          {PROYECCION_ROWS.map((row, i) => (
            <div
              key={i}
              className="flex items-baseline justify-between py-3 border-b border-cafe/10 last:border-b-0"
            >
              <span className="font-sans text-sm text-cafe/70">
                {row.concepto}
              </span>
              <span className="font-sans text-sm text-cafe text-right">
                {row.valor}
                {row.detalle && (
                  <span className={`ml-2 text-xs ${row.detalleColor}`}>
                    ({row.detalle})
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        <p className="font-sans text-xs text-cafe/50 mt-6">
          Proyección Radar Circular basada en DS12/2020 y tendencia ANIR/SINADER
          2023–2024. No corresponde a datos oficiales publicados.
        </p>
      </div>

      {/* Bloque 5 — ComicCard hito 2027 */}
      <ComicCard type="interno" title="Por qué importa el 2027" dismissible>
        <p>
          Hasta el cierre de 2026, el artículo 23 del DS 12/2020 permite a los
          sistemas de gestión de envases no domiciliarios compensar hasta el 100%
          de la meta de una subcategoría con toneladas valorizadas de otra. Desde
          2027, esa flexibilidad transitoria desaparece y cada material debe
          cumplir su meta individual. Para tu sistema colectivo eso significa que
          el cumplimiento agregado deja de ser suficiente: metal, papel y cartón,
          y plástico tendrán que rendir cada uno por separado, justo cuando las
          metas escalan al ritmo más exigido del decreto.
        </p>
      </ComicCard>
    </div>
  )
}

export default InteligenciaComparativa
