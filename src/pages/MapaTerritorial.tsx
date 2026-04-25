// src/pages/MapaTerritorial.tsx
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import type { Layer, LeafletMouseEvent } from 'leaflet'
import { datosRegionales, colorGestoresNFU, totalGestoresNFU, totalConveniosReSimple, totalComunasGRANSIC } from '../data/datos-territoriales'
import { Callout } from '../components/Callout'
import { FuenteDatos } from '../components/FuenteDatos'
import { UltimaActualizacion } from '../components/UltimaActualizacion'

type CapaActiva = 'gestoresNFU' | 'comunasGRANSIC' | 'conveniosReSimple'

const capasConfig: Record<CapaActiva, { label: string; descripcion: string }> = {
  gestoresNFU: {
    label: 'Gestores NFU',
    descripcion: `${totalGestoresNFU} gestores RETC autorizados para neumáticos fuera de uso, distribuidos en 16 regiones.`,
  },
  comunasGRANSIC: {
    label: 'Cobertura GRANSIC',
    descripcion: `${totalComunasGRANSIC} comunas con obligación de instalaciones de recepción (DS12 art. 35, población corregida >15.000).`,
  },
  conveniosReSimple: {
    label: 'Convenios ReSimple',
    descripcion: `${totalConveniosReSimple} convenios municipales de recolección domiciliaria (primer año, dic 2024).`,
  },
}

function getValorCapa(region: typeof datosRegionales[0], capa: CapaActiva): number {
  switch (capa) {
    case 'gestoresNFU': return region.gestoresNFU
    case 'comunasGRANSIC': return region.comunasGRANSIC.length
    case 'conveniosReSimple': return region.conveniosReSimple
  }
}

function getColorCapa(valor: number, capa: CapaActiva): string {
  if (capa === 'gestoresNFU') return colorGestoresNFU(valor)
  if (valor >= 10) return '#1a7a4c'
  if (valor >= 5) return '#2d9b6e'
  if (valor >= 2) return '#4fb889'
  if (valor >= 1) return '#8fd4b4'
  return '#2a3a4a'
}

// El GeoJSON de caracena/chile-geojson usa: codregion (number) y Region ("Región de ...")
function findRegion(feature: any): typeof datosRegionales[0] | undefined {
  const props = feature.properties || {}
  const codregion = String(props.codregion || '').padStart(2, '0')
  return datosRegionales.find(r => r.codigo === codregion)
}

export function MapaTerritorial() {
  const [geoData, setGeoData] = useState<any>(null)
  const [capa, setCapa] = useState<CapaActiva>('gestoresNFU')
  const [regionHover, setRegionHover] = useState<typeof datosRegionales[0] | null>(null)

  useEffect(() => {
    fetch('/chile-regiones.geojson')
      .then(r => r.json())
      .then(data => setGeoData(data))
      .catch(err => console.error('Error cargando GeoJSON:', err))
  }, [])

  function onEachFeature(feature: any, layer: Layer) {
    const region = findRegion(feature)
    if (!region) return

    layer.on({
      mouseover: (e: LeafletMouseEvent) => {
        setRegionHover(region)
        const target = e.target
        target.setStyle({ weight: 2, fillOpacity: 0.85 })
        target.bringToFront()
      },
      mouseout: (e: LeafletMouseEvent) => {
        setRegionHover(null)
        const target = e.target
        target.setStyle({ weight: 1, fillOpacity: 0.65 })
      },
    })
  }

  function styleFeature(feature: any) {
    const region = findRegion(feature)
    if (!region) return { fillColor: '#1c2630', weight: 1, color: '#3a4f63', fillOpacity: 0.5 }

    const valor = getValorCapa(region, capa)
    return {
      fillColor: getColorCapa(valor, capa),
      weight: 1,
      color: '#3a4f63',
      fillOpacity: 0.65,
    }
  }

  return (
    <div className="p-8 max-w-6xl space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Mapa territorial
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Distribución geográfica de la infraestructura REP: gestores, cobertura GRANSIC y convenios municipales.
        </p>
        <UltimaActualizacion fecha="25 de abril de 2026" />
      </div>

      <Callout variant="explainer" titulo="¿Qué muestra este mapa?">
        Tres capas de información territorial sobre la implementación de la Ley REP:
        los gestores autorizados para neumáticos, las comunas donde los GRANSIC deben operar
        instalaciones de recepción según el DS12, y los convenios municipales de recolección domiciliaria
        que ReSimple reportó en su primer año de operación.
      </Callout>

      {/* Selector de capas */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(capasConfig) as CapaActiva[]).map(c => (
          <button
            key={c}
            onClick={() => setCapa(c)}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              backgroundColor: capa === c ? 'var(--accent)' : 'var(--bg-surface)',
              color: capa === c ? '#fff' : 'var(--text-secondary)',
              border: `1px solid ${capa === c ? 'var(--accent)' : 'var(--border)'}`,
            }}
          >
            {capasConfig[c].label}
          </button>
        ))}
      </div>

      {/* Descripción capa activa */}
      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
        {capasConfig[capa].descripcion}
      </p>

      {/* Mapa + Panel info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mapa */}
        <div className="lg:col-span-2 rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border)', height: '520px' }}>
          {geoData ? (
            <MapContainer
              center={[-33.45, -70.65]}
              zoom={4}
              style={{ height: '100%', width: '100%', background: 'var(--bg-deep)' }}
              scrollWheelZoom={true}
              attributionControl={false}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
              />
              <GeoJSON
                key={capa}
                data={geoData}
                style={styleFeature}
                onEachFeature={onEachFeature}
              />
            </MapContainer>
          ) : (
            <div className="h-full flex items-center justify-center" style={{ color: 'var(--text-muted)' }}>
              Cargando mapa...
            </div>
          )}
        </div>

        {/* Panel lateral */}
        <div className="space-y-4">
          {/* Región hover */}
          {regionHover ? (
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--accent-border)' }}>
              <p className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {regionHover.nombre}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Gestores NFU</span>
                  <span style={{ color: 'var(--text-primary)' }}>{regionHover.gestoresNFU}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Comunas GRANSIC</span>
                  <span style={{ color: 'var(--text-primary)' }}>{regionHover.comunasGRANSIC.length}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Convenios ReSimple</span>
                  <span style={{ color: 'var(--text-primary)' }}>{regionHover.conveniosReSimple}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Población</span>
                  <span style={{ color: 'var(--text-primary)' }}>{regionHover.poblacion}k</span>
                </div>
                {regionHover.comunasGRANSIC.length > 0 && (
                  <div className="pt-2 mt-2" style={{ borderTop: '1px solid var(--border)' }}>
                    <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Comunas con obligación GRANSIC:</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {regionHover.comunasGRANSIC.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Pasa el cursor sobre una región para ver su detalle.
              </p>
            </div>
          )}

          {/* KPIs */}
          <div className="grid grid-cols-1 gap-3">
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Gestores NFU total</p>
              <p className="text-xl font-bold" style={{ color: 'var(--accent)' }}>{totalGestoresNFU}</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Comunas GRANSIC</p>
              <p className="text-xl font-bold" style={{ color: 'var(--accent)' }}>{totalComunasGRANSIC}</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Convenios ReSimple</p>
              <p className="text-xl font-bold" style={{ color: 'var(--accent)' }}>{totalConveniosReSimple}</p>
            </div>
          </div>

          {/* Leyenda */}
          <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Leyenda</p>
            <div className="space-y-1">
              {[
                { color: '#1a7a4c', label: '20+' },
                { color: '#2d9b6e', label: '10–19' },
                { color: '#4fb889', label: '5–9' },
                { color: '#8fd4b4', label: '2–4' },
                { color: '#c8eadb', label: '1' },
                { color: '#2a3a4a', label: '0 / sin datos' },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-3 rounded" style={{ backgroundColor: l.color }} />
                  <span style={{ color: 'var(--text-muted)' }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <Callout variant="warning" titulo="Sobre la precisión de estos datos">
        Las comunas GRANSIC son una estimación basada en población INE Censo 2024 ({'>'} 15.000 habitantes).
        La lista oficial usa "población corregida" que incluye población flotante turística (SERNATUR)
        y es publicada por el MMA. Los convenios ReSimple corresponden al primer año de operación (dic 2024)
        y pueden haber aumentado. Los gestores NFU son los inscritos en RETC a noviembre 2025.
      </Callout>

      <FuenteDatos
        fuente="MEP NFU CORFO (nov 2025), DS12/2020 art. 35, INE Censo 2024, País Circular (dic 2024)"
        tipo="oficial"
        fecha="Noviembre 2025"
        nota="Datos combinados de múltiples fuentes. Ver disclaimer sobre estimaciones."
      />
    </div>
  )
}
