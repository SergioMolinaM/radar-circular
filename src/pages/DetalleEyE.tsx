// src/pages/DetalleEyE.tsx
import { productosPrioritarios } from '../data/productos-prioritarios'
import { metasDomiciliarias, metasNoDomiciliarias, tonelaje2024 } from '../data/metas-eye'
import { MetasTable } from '../components/MetasTable'
import { CumplimientoTable } from '../components/CumplimientoTable'
import { TonelajeChart } from '../components/TonelajeChart'
import { MetasLineChart } from '../components/MetasLineChart'
import { operacionEyENoDom, operacionEyEDom, datosOperativosGRANSIC } from '../data/operacion-eye'
import { FuenteDatos } from '../components/FuenteDatos'

function formatTon(n: number) {
  return n.toLocaleString('es-CL')
}

export function DetalleEyE() {
  const pp = productosPrioritarios.find((p) => p.id === 'eye')!
  const totalMdp = tonelaje2024.reduce((s, r) => s + r.mdp, 0)
  const totalMgp = tonelaje2024.reduce((s, r) => s + r.mgp, 0)

  const colsDom = [
    { key: 'año', label: 'Año' },
    { key: 'papelCarton', label: 'P&C' },
    { key: 'cartonLiquidos', label: 'Cart. líq.' },
    { key: 'metal', label: 'Metal' },
    { key: 'plastico', label: 'Plástico' },
    { key: 'vidrio', label: 'Vidrio' },
  ]

  const colsNoDom = [
    { key: 'año', label: 'Año' },
    { key: 'papelCarton', label: 'P&C' },
    { key: 'plastico', label: 'Plástico' },
    { key: 'metal', label: 'Metal' },
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
      </div>

      {/* SIG */}
      <div className="p-5 rounded-xl border border-stone-800">
        <p className="text-xs text-stone-500 mb-3">Sistemas de Gestión (GRANSIC)</p>
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

      {/* Operación primer año */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Primer año de operación (2024)</h3>
        <p className="text-xs text-stone-500 mb-4">Fuente: País Circular, diciembre 2024</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-stone-800">
            <p className="text-sm font-medium text-stone-300 mb-3">No domiciliarios</p>
            <p className="text-xs text-stone-500 mb-2">{operacionEyENoDom.numSIG} SIG · ~{(operacionEyENoDom.totalToneladas / 1000).toFixed(0)}k ton declaradas</p>
            <div className="space-y-1.5">
              {operacionEyENoDom.distribucion.map((d) => (
                <div key={d.sig} className="flex items-center justify-between text-sm">
                  <span className="text-stone-400">{d.sig}</span>
                  <span className="text-stone-300 font-medium">{d.porcentaje}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 rounded-xl border border-stone-800">
            <p className="text-sm font-medium text-stone-300 mb-3">Domiciliarios</p>
            <p className="text-xs text-stone-500 mb-2">{operacionEyEDom.numGRANSIC} GRANSIC · ~{(operacionEyEDom.totalToneladas / 1000).toFixed(0)}k ton declaradas</p>
            <div className="space-y-1.5">
              {operacionEyEDom.distribucion.map((d) => (
                <div key={d.sig} className="flex items-center justify-between text-sm">
                  <span className="text-stone-400">{d.sig}</span>
                  <span className="text-stone-300 font-medium">{d.porcentaje}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FuenteDatos fuente="País Circular, diciembre 2024" tipo="sectorial" fecha="Diciembre 2024" />
      </div>

      {/* Datos operativos GRANSIC */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-sm font-medium text-stone-300 mb-2">ReSimple</p>
          <div className="space-y-1 text-sm text-stone-400">
            <p>{datosOperativosGRANSIC.resimple.conveniosMunicipales} convenios municipales</p>
            <p>{datosOperativosGRANSIC.resimple.campanasInstaladas.toLocaleString('es-CL')} campanas instaladas</p>
            <p>{datosOperativosGRANSIC.resimple.comunasRecoleccion} comunas con recolección</p>
            <p>{(datosOperativosGRANSIC.resimple.viviendasCobertura / 1000000).toFixed(1)}M viviendas cobertura</p>
          </div>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-sm font-medium text-stone-300 mb-2">ProREP</p>
          <div className="space-y-1 text-sm text-stone-400">
            <p>{datosOperativosGRANSIC.prorep.socios}+ socios</p>
            <p>Modelo: {datosOperativosGRANSIC.prorep.modelo}</p>
            <p>Exclusivo {datosOperativosGRANSIC.prorep.exclusivo}</p>
          </div>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-sm font-medium text-stone-300 mb-2">GIRO</p>
          <div className="space-y-1 text-sm text-stone-400">
            <p>{(datosOperativosGRANSIC.giro.beneficiarios / 1000).toFixed(0)}k beneficiarios</p>
            <p>{datosOperativosGRANSIC.giro.cobertura}</p>
            <p className="text-amber-400">{datosOperativosGRANSIC.giro.licitacionesDesiertas} licitaciones desiertas</p>
          </div>
        </div>
      </div>
      <FuenteDatos
        fuente="País Circular · ProREP · GIRO · ReSimple"
        tipo="sectorial"
        fecha="Julio-diciembre 2024"
        nota="Datos auto-reportados por cada SIG a medios de prensa"
      />

      {/* KPIs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Cifras 2024</h3>
        <p className="text-xs text-stone-500 mb-4">Fuente: Estudio Kyklos 2024 (ANIR-ReSimple)</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-stone-800">
            <p className="text-xs text-stone-500">MDP total</p>
            <p className="text-xl font-bold">{formatTon(totalMdp)} ton</p>
          </div>
          <div className="p-4 rounded-lg border border-stone-800">
            <p className="text-xs text-stone-500">MGP total</p>
            <p className="text-xl font-bold">{formatTon(totalMgp)} ton</p>
          </div>
          <div className="p-4 rounded-lg border border-stone-800">
            <p className="text-xs text-stone-500">Tasa valorización</p>
            <p className="text-xl font-bold">33,0%</p>
          </div>
          <div className="p-4 rounded-lg border border-stone-800">
            <p className="text-xs text-stone-500">MGP dom. en SIG</p>
            <p className="text-xl font-bold text-amber-400">16,6%</p>
          </div>
        </div>
        <TonelajeChart />
        <FuenteDatos fuente="Estudio Kyklos 2024 (encargado por ANIR-ReSimple)" tipo="estimacion" fecha="Abril 2025" />
      </div>

      {/* Metas progresivas */}
      <div>
        <h3 className="text-lg font-semibold mb-6">Metas de recolección y valorización (DS 12/2020)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MetasTable
            titulo="Domiciliarios (% del MDP)"
            columnas={colsDom}
            filas={metasDomiciliarias as unknown as Record<string, string | number>[]}
            nota="Año 12 en adelante (2035+): P&C 70%, Cart.líq. 60%, Metal 55%, Plástico 45%, Vidrio 65%"
          />
          <MetasTable
            titulo="No domiciliarios (% del MDP)"
            columnas={colsNoDom}
            filas={metasNoDomiciliarias as unknown as Record<string, string | number>[]}
            nota="Año 9 en adelante (2032+): P&C 85%, Plástico 55%, Metal 70%"
          />
        </div>
      </div>

      {/* Trayectoria visual */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Trayectoria de metas al 2035</h3>
        <p className="text-sm text-stone-400 mb-4">
          Las curvas muestran la pendiente de exigencia que enfrenta el sistema.
          Para domiciliarios, el cartón para líquidos parte con la misma meta que papel y cartón
          pero termina 10 puntos abajo — reflejo de la dificultad técnica del material multicapa.
        </p>
        <MetasLineChart />
        <FuenteDatos fuente="Decreto Supremo 12/2020, Tablas de metas" tipo="oficial" />
      </div>

      {/* Cumplimiento */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Cumplimiento de metas 2024</h3>
        <p className="text-sm text-stone-400 mb-6">
          Tres escenarios que evidencian la brecha entre lo que Chile recicla y lo que el sistema
          formal contabiliza.
        </p>
        <CumplimientoTable />
        <FuenteDatos
          fuente="Estudio Kyklos 2024, Cuadro 14"
          tipo="estimacion"
          fecha="Abril 2025"
          nota="Los escenarios son simulaciones basadas en datos estimados, no mediciones oficiales de la SMA"
        />
      </div>
    </div>
  )
}
