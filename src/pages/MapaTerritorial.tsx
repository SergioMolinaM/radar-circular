// src/pages/MapaTerritorial.tsx — F14B: datos reales ReSimple + IRAR RETC
import { useState, useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, GeoJSON, CircleMarker, Popup, Tooltip, LayersControl, LayerGroup } from 'react-leaflet'
import type { Layer, LeafletMouseEvent } from 'leaflet'
import { datosRegionales } from '../data/datos-territoriales'
import { datosReSimple2025 } from '../data/datos-resimple-2025'
import { instalacionesEyE, instalacionesNFU } from '../data/datos-irar-retc-2024'
import { Callout } from '../components/Callout'
import { FuenteDatos } from '../components/FuenteDatos'
import { UltimaActualizacion } from '../components/UltimaActualizacion'

/* ── Mapeo región nombre → código INE ── */
const REGION_TO_CODE: Record<string, string> = {
  'Arica y Parinacota': '15',
  'Tarapacá': '01',
  'Antofagasta': '02',
  'Atacama': '03',
  'Coquimbo': '04',
  'Valparaíso': '05',
  'Metropolitana': '13',
  "O'Higgins": '06',
  'Maule': '07',
  'Ñuble': '16',
  'Biobío': '08',
  'La Araucanía': '09',
  'Araucanía': '09',
  'Los Ríos': '14',
  'Los Lagos': '10',
  'Aysén': '11',
  'Magallanes': '12',
}

/* ── Colores cobertura ReSimple ── */
function colorCobertura(avgPct: number): string {
  if (avgPct >= 90) return '#15803d' // verde oscuro
  if (avgPct >= 50) return '#22c55e' // verde medio
  if (avgPct >= 25) return '#86efac' // verde claro
  return '#eab308'                   // amarillo
}

/* ── Radio de marcador proporcional al log(tonelaje) ── */
function markerRadius(ton: number): number {
  if (ton <= 0) return 5
  return Math.max(5, Math.min(20, Math.log(ton + 1) * 2))
}

/* ── Busca la región del GeoJSON ── */
function findRegionCode(feature: any): string | undefined {
  const codregion = String(feature.properties?.codregion || '').padStart(2, '0')
  const match = datosRegionales.find(r => r.codigo === codregion)
  return match ? match.codigo : undefined
}

export function MapaTerritorial() {
  const [geoData, setGeoData] = useState<any>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  useEffect(() => {
    fetch('/chile-regiones.geojson')
      .then(r => r.json())
      .then(data => setGeoData(data))
      .catch(err => console.error('Error cargando GeoJSON:', err))
  }, [])

  /* ── ReSimple agrupado por código de región ── */
  const resimpleByRegion = useMemo(() => {
    const map = new Map<string, typeof datosReSimple2025>()
    for (const c of datosReSimple2025) {
      const code = REGION_TO_CODE[c.region]
      if (!code) continue
      const arr = map.get(code) || []
      arr.push(c)
      map.set(code, arr)
    }
    return map
  }, [])

  /* ── Estadísticas globales ── */
  const stats = useMemo(() => {
    const regionesEyE = new Set(instalacionesEyE.map(i => REGION_TO_CODE[i.region]).filter(Boolean))
    const regionesNFU = new Set(instalacionesNFU.map(i => REGION_TO_CODE[i.region]).filter(Boolean))
    const sinEyE = 16 - regionesEyE.size
    const sinNFU = 16 - regionesNFU.size
    return {
      comunasReSimple: datosReSimple2025.length,
      totalEyE: instalacionesEyE.length,
      regionesEyE: regionesEyE.size,
      totalNFU: instalacionesNFU.length,
      regionesNFU: regionesNFU.size,
      sinEyE,
      sinNFU,
    }
  }, [])

  /* ── Promedio cobertura ReSimple para una región ── */
  function avgCobertura(code: string): number | null {
    const comunas = resimpleByRegion.get(code)
    if (!comunas || comunas.length === 0) return null
    return comunas.reduce((s, c) => s + c.coberturaPct, 0) / comunas.length
  }

  /* ── Estilo GeoJSON por cobertura ReSimple ── */
  function styleReSimple(feature: any) {
    const code = findRegionCode(feature)
    if (!code) return { fillColor: '#1c2630', weight: 1, color: '#3a4f63', fillOpacity: 0.5 }

    const avg = avgCobertura(code)
    return {
      fillColor: avg !== null ? colorCobertura(avg) : '#2a3a4a',
      weight: 1,
      color: '#3a4f63',
      fillOpacity: 0.65,
    }
  }

  /* ── Interacción GeoJSON: hover + click ── */
  function onEachReSimple(feature: any, layer: Layer) {
    const code = findRegionCode(feature)
    if (!code) return

    const region = datosRegionales.find(r => r.codigo === code)
    const comunas = resimpleByRegion.get(code)
    const avg = avgCobertura(code)

    // Tooltip al hover
    const tooltipText = comunas && comunas.length > 0
      ? `${region?.nombre} — ${comunas.length} comuna${comunas.length > 1 ? 's' : ''} ReSimple, promedio ${Math.round(avg!)}%`
      : `${region?.nombre} — Sin cobertura ReSimple`

    layer.bindTooltip(tooltipText, { sticky: true, className: 'leaflet-tooltip-dark' })

    layer.on({
      mouseover: (e: LeafletMouseEvent) => {
        e.target.setStyle({ weight: 2, fillOpacity: 0.85 })
        e.target.bringToFront()
      },
      mouseout: (e: LeafletMouseEvent) => {
        e.target.setStyle({ weight: 1, fillOpacity: 0.65 })
      },
      click: () => {
        setSelectedRegion(code)
      },
    })
  }

  /* ── Comunas de la región seleccionada ── */
  const selectedComunas = selectedRegion ? (resimpleByRegion.get(selectedRegion) || []) : []
  const selectedRegionName = selectedRegion
    ? datosRegionales.find(r => r.codigo === selectedRegion)?.nombre
    : null

  return (
    <div className="p-8 max-w-6xl space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Mapa territorial
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Cobertura domiciliaria ReSimple e infraestructura de valorización declarada al RETC (EyE y NFU).
        </p>
        <UltimaActualizacion fecha="25 de abril de 2026" />
      </div>

      <Callout variant="explainer" titulo="¿Qué muestra este mapa?">
        Tres capas de datos reales: la cobertura comunal de recolección domiciliaria de ReSimple (único SIG con datos abiertos),
        las instalaciones de valorización de envases y embalajes (EyE) registradas en el RETC,
        y las instalaciones de valorización de neumáticos fuera de uso (NFU) registradas en el RETC.
        Usa el control de capas (esquina superior derecha) para activar o desactivar cada una.
      </Callout>

      {/* Mapa + Panel info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mapa */}
        <div className="lg:col-span-2 rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border)', height: '560px' }}>
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
              <LayersControl position="topright">
                {/* Capa 1: Cobertura ReSimple */}
                <LayersControl.Overlay checked name="Cobertura domiciliaria ReSimple">
                  <GeoJSON
                    data={geoData}
                    style={styleReSimple}
                    onEachFeature={onEachReSimple}
                  />
                </LayersControl.Overlay>

                {/* Capa 2: Instalaciones EyE */}
                <LayersControl.Overlay name="Instalaciones EyE (RETC)">
                  <LayerGroup>
                    {instalacionesEyE.map((inst, i) => (
                      <CircleMarker
                        key={`eye-${i}`}
                        center={[inst.lat, inst.lon]}
                        radius={markerRadius(inst.toneladasAnuales2024)}
                        pathOptions={{
                          color: '#1d4ed8',
                          fillColor: '#3b82f6',
                          fillOpacity: 0.75,
                          weight: 1,
                        }}
                      >
                        <Tooltip sticky>
                          {inst.nombre} — {inst.toneladasAnuales2024.toLocaleString('es-CL')} ton/año
                        </Tooltip>
                        <Popup>
                          <div style={{ minWidth: 200, fontFamily: 'system-ui' }}>
                            <p style={{ fontWeight: 700, marginBottom: 4 }}>{inst.nombre}</p>
                            <p style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>{inst.razonSocial}</p>
                            <p style={{ fontSize: 13 }}><strong>Comuna:</strong> {inst.comuna}</p>
                            <p style={{ fontSize: 13 }}><strong>Toneladas 2024:</strong> {inst.toneladasAnuales2024.toLocaleString('es-CL')} ton/año</p>
                            <p style={{ fontSize: 11, color: '#888', marginTop: 6 }}>Fuente: RETC Open Data (IRAR-SINADER 2024)</p>
                          </div>
                        </Popup>
                      </CircleMarker>
                    ))}
                  </LayerGroup>
                </LayersControl.Overlay>

                {/* Capa 3: Instalaciones NFU */}
                <LayersControl.Overlay name="Instalaciones NFU (RETC)">
                  <LayerGroup>
                    {instalacionesNFU.map((inst, i) => (
                      <CircleMarker
                        key={`nfu-${i}`}
                        center={[inst.lat, inst.lon]}
                        radius={markerRadius(inst.toneladasAnuales2024)}
                        pathOptions={{
                          color: '#c2410c',
                          fillColor: '#f97316',
                          fillOpacity: 0.75,
                          weight: 1,
                        }}
                      >
                        <Tooltip sticky>
                          {inst.nombre} — {inst.toneladasAnuales2024.toLocaleString('es-CL')} ton/año
                        </Tooltip>
                        <Popup>
                          <div style={{ minWidth: 200, fontFamily: 'system-ui' }}>
                            <p style={{ fontWeight: 700, marginBottom: 4 }}>{inst.nombre}</p>
                            <p style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>{inst.razonSocial}</p>
                            <p style={{ fontSize: 13 }}><strong>Comuna:</strong> {inst.comuna}</p>
                            <p style={{ fontSize: 13 }}><strong>Toneladas 2024:</strong> {inst.toneladasAnuales2024.toLocaleString('es-CL')} ton/año</p>
                            <p style={{ fontSize: 11, color: '#888', marginTop: 6 }}>Fuente: RETC Open Data (IRAR-SINADER 2024)</p>
                          </div>
                        </Popup>
                      </CircleMarker>
                    ))}
                  </LayerGroup>
                </LayersControl.Overlay>
              </LayersControl>
            </MapContainer>
          ) : (
            <div className="h-full flex items-center justify-center" style={{ color: 'var(--text-muted)' }}>
              Cargando mapa...
            </div>
          )}
        </div>

        {/* Panel lateral */}
        <div className="space-y-4">
          {/* Detalle de región seleccionada */}
          {selectedRegion ? (
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--accent-border)' }}>
              <div className="flex justify-between items-start mb-3">
                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {selectedRegionName}
                </p>
                <button
                  onClick={() => setSelectedRegion(null)}
                  className="text-xs px-2 py-0.5 rounded"
                  style={{ color: 'var(--text-muted)', backgroundColor: 'var(--bg-deep)' }}
                >
                  Cerrar
                </button>
              </div>
              {selectedComunas.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {selectedComunas.length} comuna{selectedComunas.length > 1 ? 's' : ''} con recolección ReSimple:
                  </p>
                  <div className="space-y-1 max-h-48 overflow-y-auto">
                    {[...selectedComunas]
                      .sort((a, b) => b.coberturaPct - a.coberturaPct)
                      .map(c => (
                        <div key={c.comuna} className="flex justify-between items-center text-sm py-1 px-2 rounded" style={{ backgroundColor: 'var(--bg-deep)' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>{c.comuna}</span>
                          <span
                            className="font-mono font-medium text-xs px-1.5 py-0.5 rounded"
                            style={{
                              color: '#fff',
                              backgroundColor: colorCobertura(c.coberturaPct),
                            }}
                          >
                            {c.coberturaPct}%
                          </span>
                        </div>
                      ))}
                  </div>
                  <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                    Fuente: resimple.cl, 2025
                  </p>
                </div>
              ) : (
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Sin cobertura domiciliaria ReSimple en esta región.
                </p>
              )}
            </div>
          ) : (
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Haz click en una región para ver las comunas con recolección ReSimple.
              </p>
            </div>
          )}

          {/* Panel de resumen */}
          <div className="p-4 rounded-xl space-y-3" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <p className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>Resumen nacional</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-muted)' }}>Comunas ReSimple</span>
                <span className="font-bold" style={{ color: '#22c55e' }}>{stats.comunasReSimple}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-muted)' }}>Instalaciones EyE</span>
                <span className="font-bold" style={{ color: '#3b82f6' }}>{stats.totalEyE} en {stats.regionesEyE} regiones</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-muted)' }}>Instalaciones NFU</span>
                <span className="font-bold" style={{ color: '#f97316' }}>{stats.totalNFU} en {stats.regionesNFU} regiones</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-muted)' }}>Sin EyE (RETC)</span>
                <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{stats.sinEyE} regiones</span>
              </div>
            </div>
          </div>

          {/* Leyenda cobertura ReSimple */}
          <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Cobertura ReSimple (promedio regional)</p>
            <div className="space-y-1">
              {[
                { color: '#15803d', label: '90%+' },
                { color: '#22c55e', label: '50–89%' },
                { color: '#86efac', label: '25–49%' },
                { color: '#eab308', label: '< 25%' },
                { color: '#2a3a4a', label: 'Sin cobertura' },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-3 rounded" style={{ backgroundColor: l.color }} />
                  <span style={{ color: 'var(--text-muted)' }}>{l.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-2 space-y-1" style={{ borderTop: '1px solid var(--border)' }}>
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Marcadores</p>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3b82f6' }} />
                <span style={{ color: 'var(--text-muted)' }}>Instalación EyE (tamaño = log tonelaje)</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f97316' }} />
                <span style={{ color: 'var(--text-muted)' }}>Instalación NFU (tamaño = log tonelaje)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nota editorial obligatoria */}
      <Callout variant="info" titulo="Nota sobre los datos territoriales">
        ReSimple es el único sistema de gestión que publica cobertura comunal abierta.
        GIRO y otros SIG no publican datos territoriales equivalentes.
        Las instalaciones IRAR muestran infraestructura de valorización declarada al RETC en 2024,
        no cobertura de recolección. Algunas instalaciones tienen la región declarada incorrectamente
        en el RETC (ej: ACCA como Metropolitana pero ubicada en Puerto Montt); los marcadores usan
        las coordenadas reales, no el campo región.
      </Callout>

      <FuenteDatos
        fuente="resimple.cl (2025), RETC Open Data — IRAR-SINADER 2024 (datosretc.mma.gob.cl)"
        tipo="oficial"
        fecha="Abril 2026"
        nota="Cobertura ReSimple: 52 comunas (abr 2026). Instalaciones IRAR: extracción dic 2025 sobre datos 2024."
      />
    </div>
  )
}
