import DataTypeBadge from '../components/DataTypeBadge'

const TARIFAS = [
  { sub: 'EyE Reciclables — Papel y Cartón', t2025: '0,17', t2026: '0,20', var: '+18%' },
  { sub: 'EyE Reciclables — Metal', t2025: '0,21', t2026: '0,31', var: '+47%' },
  { sub: 'EyE Reciclables — Plástico', t2025: '0,27', t2026: '0,28', var: '+4%' },
  { sub: 'EyE No Reciclables', t2025: '0,64', t2026: '0,78', var: '+22%', highlight: true },
]

const ETAPAS = [
  { n: 1, titulo: 'Afiliado', desc: 'Declara su POM anual' },
  { n: 2, titulo: 'Consumidor industrial', desc: 'Genera y entrega residuos a un gestor' },
  { n: 3, titulo: 'Gestor', desc: 'Recolecta y traslada a valorizador' },
  { n: 4, titulo: 'Valorizador', desc: 'Recicla y certifica el proceso' },
  { n: 5, titulo: 'Reporte SMA', desc: 'Tu sistema reporta el cumplimiento' },
]

function Arrow() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" className="shrink-0 hidden md:block" aria-hidden="true">
      <line x1="0" y1="12" x2="24" y2="12" stroke="#5B7C5B" strokeOpacity="0.4" strokeWidth="2" />
      <polyline points="20,6 28,12 20,18" fill="none" stroke="#5B7C5B" strokeOpacity="0.4" strokeWidth="2" />
    </svg>
  )
}

function NarrativaImpacto() {
  return (
    <div className="max-w-5xl space-y-8 pb-16">
      {/* Encabezado */}
      <div>
        <p className="font-sans text-xs uppercase tracking-wider text-cafe/60">
          El modelo en acción
        </p>
        <h1 className="font-serif text-5xl text-cafe leading-tight mt-2">
          Por qué tu sistema colectivo opera distinto
        </h1>
        <p className="font-sans text-base text-cafe/70 mt-4 max-w-3xl leading-relaxed">
          Tu sistema colectivo (ProREP) no es un sistema masivo de recolección.
          Es un modelo técnico y consultivo diseñado para empresas industriales
          que necesitan certeza, trazabilidad y asesoría especializada. Estas son
          las cinco diferencias clave.
        </p>
      </div>

      {/* Bloque 1 — Modelo monitoring */}
      <div className="bg-white border border-cafe/10 rounded-2xl p-8 mt-12">
        <DataTypeBadge type="publico" />
        <h2 className="font-serif text-3xl text-cafe mt-4">
          El modelo monitoring
        </h2>
        <p className="font-sans text-sm text-cafe/60 mt-2 max-w-3xl">
          Tu sistema colectivo no construye infraestructura paralela. Conecta y
          certifica la valorización que ya ocurre en tu cadena, con el modelo
          Valipac aplicado a Chile por RIGK.
        </p>

        {/* Diagrama del flujo */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {ETAPAS.map((etapa, i) => (
            <div key={etapa.n} className="contents">
              <div className="flex flex-col items-center text-center w-full md:w-36">
                <span className="font-serif text-2xl text-musgo">{etapa.n}</span>
                <span className="font-sans text-sm font-medium text-cafe mt-2">
                  {etapa.titulo}
                </span>
                <span className="font-sans text-xs text-cafe/60 mt-1">
                  {etapa.desc}
                </span>
              </div>
              {i < ETAPAS.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

        <p className="font-sans text-xs text-cafe/50 mt-6">
          Modelo basado en el sistema Valipac (Bélgica), adaptado a Chile por
          RIGK Alemania.
        </p>
      </div>

      {/* Bloque 2 — Casos en acción */}
      <div className="bg-white border border-cafe/10 rounded-2xl p-8">
        <DataTypeBadge type="publico" />
        <h2 className="font-serif text-3xl text-cafe mt-4">Casos en acción</h2>
        <p className="font-sans text-sm text-cafe/60 mt-2 max-w-3xl">
          Resultados específicos del segmento industrial. Tu sistema colectivo
          trabaja con realidades sectoriales que un sistema masivo no puede
          atender.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder 1 */}
          <div className="bg-crema/30 border border-dashed border-cafe/20 rounded-xl p-6">
            <p className="font-sans text-xs uppercase tracking-wider text-cafe/40">
              CASO OPERATIVO POR DOCUMENTAR
            </p>
            <p className="font-serif text-4xl text-cafe/30 mt-3">&mdash;</p>
            <p className="font-sans text-sm text-cafe/40 mt-2">
              Espacio para que tu sistema colectivo cuente una campaña sectorial
              verificable
            </p>
            <p className="font-sans text-xs text-cafe/30 mt-4">Por documentar</p>
          </div>

          {/* Placeholder 2 */}
          <div className="bg-crema/30 border border-dashed border-cafe/20 rounded-xl p-6">
            <p className="font-sans text-xs uppercase tracking-wider text-cafe/40">
              ESPACIO DISPONIBLE
            </p>
            <p className="font-serif text-4xl text-cafe/30 mt-3">&mdash;</p>
            <p className="font-sans text-sm text-cafe/40 mt-2">
              Espacio para que tu sistema colectivo cuente otra campaña sectorial
            </p>
            <p className="font-sans text-xs text-cafe/30 mt-4">Por documentar</p>
          </div>

          {/* Placeholder 3 */}
          <div className="bg-crema/30 border border-dashed border-cafe/20 rounded-xl p-6">
            <p className="font-sans text-xs uppercase tracking-wider text-cafe/40">
              ESPACIO DISPONIBLE
            </p>
            <p className="font-serif text-4xl text-cafe/30 mt-3">&mdash;</p>
            <p className="font-sans text-sm text-cafe/40 mt-2">
              Espacio para un tercer caso operativo verificable
            </p>
            <p className="font-sans text-xs text-cafe/30 mt-4">Por documentar</p>
          </div>
        </div>

        <p className="font-sans text-xs text-cafe/50 mt-6">
          Las tarjetas marcadas como &lsquo;espacio disponible&rsquo; son
          ejemplos del tipo de casos que tu sistema colectivo puede destacar a
          sus afiliados con datos verificables.
        </p>
      </div>

      {/* Bloque 3 — Red de gestores aliados */}
      <div className="bg-white border border-cafe/10 rounded-2xl p-8">
        <DataTypeBadge type="publico" />
        <h2 className="font-serif text-3xl text-cafe mt-4">
          La red de gestores aliados
        </h2>
        <p className="font-sans text-sm text-cafe/60 mt-2 max-w-3xl">
          Tu sistema colectivo no busca cantidad. Busca especialización por
          materialidad, por sector y por territorio. Los gestores aliados son
          seleccionados, no acumulados.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-crema/50 border border-cafe/10 rounded-xl p-8 text-center">
            <p className="font-sans text-xs uppercase tracking-wider text-musgo">
              GESTORES CONECTADOS
            </p>
            <p className="font-serif text-6xl text-cafe mt-4">~60</p>
            <p className="font-sans text-sm text-cafe/70 mt-3 max-w-xs mx-auto">
              gestores especializados en flujos industriales, integrados a la
              plataforma de monitoring
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-sans text-base text-cafe/80 leading-relaxed">
              Cada gestor pasa por un proceso de validación técnica. Verificamos
              sus autorizaciones sanitarias, su capacidad operativa y su
              cumplimiento normativo antes de incorporarlo a la red.
            </p>
            <p className="font-sans text-sm text-cafe/60 mt-4">
              Tu sistema colectivo mantiene un formulario público de
              incorporación de gestores. La red crece de manera selectiva,
              alineada con la demanda real de los afiliados.
            </p>
          </div>
        </div>

        <p className="font-sans text-xs text-cafe/50 mt-6">
          El número de gestores conectados es una referencia pública declarada
          por tu sistema colectivo en 2024. La red está en crecimiento continuo.
        </p>
      </div>

      {/* Bloque 4 — Tu inversión, tu retorno */}
      <div className="bg-white border border-cafe/10 rounded-2xl p-8">
        <DataTypeBadge type="publico" />
        <h2 className="font-serif text-3xl text-cafe mt-4">
          Tu inversión, tu retorno
        </h2>
        <p className="font-sans text-sm text-cafe/60 mt-2 max-w-3xl">
          Tu sistema colectivo es uno de los pocos que publica sus tarifas con
          anticipación plurianual. Esto te permite planificar tu inversión REP y
          entender cada peso que pagas.
        </p>

        {/* Tabla de tarifas */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-cafe/5">
                <th className="font-sans text-xs uppercase tracking-wider text-cafe/70 p-3 font-medium">
                  Subcategoría
                </th>
                <th className="font-sans text-xs uppercase tracking-wider text-cafe/70 p-3 font-medium text-right">
                  2025
                </th>
                <th className="font-sans text-xs uppercase tracking-wider text-cafe/70 p-3 font-medium text-right">
                  2026
                </th>
                <th className="font-sans text-xs uppercase tracking-wider text-cafe/70 p-3 font-medium text-right">
                  Variación
                </th>
              </tr>
            </thead>
            <tbody>
              {TARIFAS.map((row) => (
                <tr
                  key={row.sub}
                  className={`border-b border-cafe/10 ${row.highlight ? 'bg-cafe/5' : ''}`}
                >
                  <td className="font-sans text-sm text-cafe/80 p-3">
                    {row.sub}
                  </td>
                  <td className="font-serif text-base text-cafe p-3 text-right">
                    {row.t2025} UF/ton
                  </td>
                  <td className="font-serif text-base text-cafe p-3 text-right">
                    {row.t2026} UF/ton
                  </td>
                  <td className="font-sans text-sm text-musgo font-medium p-3 text-right">
                    {row.var}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tres lecturas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-crema/30 border border-cafe/10 rounded-xl p-5">
            <h3 className="font-serif text-lg text-cafe">
              Las tarifas suben porque las metas suben
            </h3>
            <p className="font-sans text-sm text-cafe/70 mt-2">
              El endurecimiento de las metas del DS 12/2020 se traduce
              directamente en la tarifa. Tu sistema colectivo publica esta
              trayectoria con anticipación plurianual para que puedas planificar
              tu inversión REP sin sorpresas.
            </p>
          </div>
          <div className="bg-crema/30 border border-cafe/10 rounded-xl p-5">
            <h3 className="font-serif text-lg text-cafe">
              Tu diseño define tu costo
            </h3>
            <p className="font-sans text-sm text-cafe/70 mt-2">
              Una tonelada de envase no reciclable cuesta hoy 2,5 veces más que
              una reciclable. Tu decisión de ecodiseño se traduce directamente en
              tu tarifa anual. El equipo técnico de tu sistema colectivo te
              asesora para optimizarla.
            </p>
          </div>
          <div className="bg-crema/30 border border-cafe/10 rounded-xl p-5">
            <h3 className="font-serif text-lg text-cafe">
              Cada peso financia valor real
            </h3>
            <p className="font-sans text-sm text-cafe/70 mt-2">
              Tu tarifa financia trazabilidad, monitoring del flujo, reporte
              automatizado a la SMA, asesoría técnica y respaldo institucional de
              RIGK + Valipac. No financia infraestructura logística paralela que
              no usas.
            </p>
          </div>
        </div>

        <p className="font-sans text-xs text-cafe/50 mt-6">
          Tarifas oficiales publicadas en prorep.cl. Variación calculada respecto
          a tarifa 2023. Valores por tonelada anual según subcategoría.
        </p>
      </div>

      {/* Bloque 5 — Respaldo institucional */}
      <div className="bg-cafe/95 border border-cafe rounded-2xl p-10">
        <h2 className="font-serif text-3xl text-crema mt-4">
          Respaldo institucional
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <p className="font-sans text-base text-crema/90 leading-relaxed">
            El modelo monitoring no es un experimento local. Es un sistema
            probado en mercados maduros, traído a Chile por los mismos que lo
            desarrollaron. Tu sistema colectivo opera bajo el respaldo técnico y
            operativo de dos referentes europeos con más de 50 años de
            experiencia combinada en gestión de envases industriales.
          </p>

          <div className="space-y-4">
            <div className="bg-crema/10 border border-crema/20 rounded-xl p-5">
              <h3 className="font-serif text-xl text-crema">RIGK</h3>
              <p className="font-sans text-xs uppercase tracking-wider text-crema/60 mt-1">
                ALEMANIA
              </p>
              <p className="font-sans text-sm text-crema/80 mt-3">
                Sistema de gestión de envases industriales con presencia en Chile
                a través de RIGK Chile, asesor técnico de tu sistema colectivo.
              </p>
            </div>
            <div className="bg-crema/10 border border-crema/20 rounded-xl p-5">
              <h3 className="font-serif text-xl text-crema">VALIPAC</h3>
              <p className="font-sans text-xs uppercase tracking-wider text-crema/60 mt-1">
                BÉLGICA
              </p>
              <p className="font-sans text-sm text-crema/80 mt-3">
                Modelo de referencia europeo para gestión de envases no
                domiciliarios. Su sistema monitoring fue adaptado a Chile como
                base operativa de tu sistema colectivo.
              </p>
            </div>
          </div>
        </div>

        <p className="font-sans text-xs text-crema/50 mt-8">
          Información pública declarada por tu sistema colectivo en su sitio
          institucional.
        </p>
      </div>
    </div>
  )
}

export default NarrativaImpacto
