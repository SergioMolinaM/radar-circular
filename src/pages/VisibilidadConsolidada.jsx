import KPICard from '../components/KPICard'
import DataTypeBadge from '../components/DataTypeBadge'
import ComicCard from '../components/ComicCard'

function VisibilidadConsolidada() {
  return (
    <div className="space-y-10 max-w-5xl">
      {/* Bloque 1 — Encabezado */}
      <div>
        <p className="font-sans text-xs uppercase tracking-wider text-cafe/50">
          Panorama del sector
        </p>
        <h1 className="font-serif text-4xl text-cafe mt-2">
          Panorama del sector
        </h1>
        <p className="font-sans text-xl text-cafe/80 mt-2">
          Chile valoriza más de lo que cuenta
        </p>
        <p className="font-sans text-base text-cafe/70 max-w-3xl mt-4">
          El esfuerzo que el sector hace y el que el sistema todavía no ve.
          El sector de envases y embalajes en Chile valoriza más residuos de los
          que el sistema oficial alcanza a contabilizar. Comprender esa brecha es
          el primer paso para entender el cumplimiento de tu sistema colectivo
          (ProREP) y, a través de él, el tuyo como afiliado.
        </p>
      </div>

      {/* Bloque 2 — KPIs */}
      <div className="grid grid-cols-3 gap-4">
        <KPICard
          label="Toneladas puestas en mercado"
          value="1,96M"
          unit="ton"
          context="Fuente: Kyklos / estimación mercado EyE Chile 2023"
          dataType="sectorial"
        />
        <KPICard
          label="Tasa de valorización real"
          value="33"
          unit="%"
          context="Fuente: Kyklos 2023"
          dataType="sectorial"
        />
        <KPICard
          label="Sistemas colectivos autorizados"
          value="4"
          context="Sistemas colectivos autorizados MMA · Fuente: MMA 2024"
          dataType="sectorial"
        />
      </div>

      {/* Bloque 3 — Visualización de la brecha */}
      <div className="bg-white border border-cafe/10 rounded-xl p-8">
        <DataTypeBadge type="sectorial" />
        <h2 className="font-serif text-2xl text-cafe mt-3">
          La brecha entre lo valorizado y lo contabilizado
        </h2>
        <p className="font-sans text-sm text-cafe/60 mt-2 max-w-3xl">
          De los residuos de envases y embalajes valorizados en Chile durante
          2024, sólo una parte se contabiliza en las metas oficiales del sistema
          REP. Esta brecha afecta a todos los sistemas colectivos y, por
          extensión, a sus empresas afiliadas.
        </p>

        <div className="mt-8 space-y-6">
          {/* Barra 1 — Valorizado */}
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-sans text-xs uppercase tracking-wider text-cafe/60">
                Valorizado en 2024
              </span>
              <span className="font-serif text-2xl text-cafe">646.800 ton</span>
            </div>
            <div className="w-full h-12 bg-musgo rounded" />
            <p className="font-sans text-xs text-cafe/50 mt-1.5">
              33% del total puesto en mercado · Fuente: Kyklos 2023
            </p>
          </div>

          {/* Barra 2 — Contabilizado */}
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-sans text-xs uppercase tracking-wider text-cafe/60">
                Contabilizado en sistema oficial
              </span>
              <span className="font-serif text-2xl text-cafe">325.413 ton</span>
            </div>
            <div className="w-1/2 h-12 bg-musgo/40 rounded" />
            <p className="font-sans text-xs text-cafe/50 mt-1.5">
              16,5% del total puesto en mercado
            </p>
          </div>
        </div>

        {/* Diferencia destacada */}
        <div className="border-t border-cafe/10 mt-8 pt-6 flex items-center justify-between">
          <span className="font-sans text-sm text-cafe/60">
            Esfuerzo no contabilizado
          </span>
          <span className="font-serif text-3xl text-musgo">325.413 ton</span>
        </div>
      </div>

      {/* Bloque 4 — ComicCard explicativa */}
      <ComicCard
        type="sectorial"
        title="Por qué importa esta brecha"
        dismissible
      >
        <p>
          El sistema oficial de la Ley REP solo reconoce las toneladas reportadas
          a través de los canales formales de los sistemas de gestión. La
          valorización que ocurre por fuera de esos canales —aunque sea real,
          trazable y verificable— queda invisible para el cumplimiento de metas.
          Esto afecta tanto a tu sistema colectivo como a tu empresa: el esfuerzo
          existe, pero el sistema oficial todavía no lo ve completo.
        </p>
      </ComicCard>
    </div>
  )
}

export default VisibilidadConsolidada
