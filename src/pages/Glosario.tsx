// src/pages/Glosario.tsx

const terminos = [
  { sigla: 'PUSU', nombre: 'Plásticos de Un Solo Uso', definicion: 'Ley 21.368 (2021) que regula plásticos de un solo uso y botellas plásticas. Complementa la Ley REP en la reducción de residuos plásticos.' },
  { sigla: 'REP', nombre: 'Responsabilidad Extendida del Productor', definicion: 'Principio según el cual el productor de un producto prioritario es responsable de la organización y financiamiento de la gestión de los residuos que dicho producto genera.' },
  { sigla: 'OEC', nombre: 'Oficina de Economía Circular', definicion: 'Unidad del MMA responsable de la implementación de la Ley REP, coordinación de decretos y relación con SIG. Jefatura sujeta a verificación tras cambio de gobierno (marzo 2026).' },
  { sigla: 'PP', nombre: 'Producto Prioritario', definicion: 'Sustancia u objeto que, una vez transformado en residuo, queda sujeto a las obligaciones de la REP. La Ley 20.920 define 6 productos prioritarios.' },
  { sigla: 'SIG', nombre: 'Sistema de Gestión', definicion: 'Mecanismo mediante el cual los productores, individual o colectivamente, cumplen las obligaciones de la REP a través de un plan de gestión autorizado.' },
  { sigla: 'SGC', nombre: 'Sistema de Gestión Colectivo', definicion: 'SIG conformado por múltiples productores asociados. Debe ser una corporación sin fines de lucro con informe favorable del TDLC.' },
  { sigla: 'FNE', nombre: 'Fiscalía Nacional Económica', definicion: 'Organismo que investiga y persigue atentados a la libre competencia. Puede actuar en el mercado de gestión de residuos REP.' },
  { sigla: 'GRANSIC', nombre: 'Gran Sistema Colectivo', definicion: 'Sistema colectivo de gestión integrado por 20 o más productores no relacionados, constituido para dar cumplimiento a las obligaciones de envases domiciliarios (DS12 art. 2 n°17). Debe celebrar convenios con municipios y cumplir obligaciones de cobertura y recolección selectiva.' },
  { sigla: 'MDP', nombre: 'Material Disponible País', definicion: 'Cantidad total de un material que ingresa al mercado nacional en un año, estimada a partir de producción nacional + importaciones − exportaciones.' },
  { sigla: 'MGP', nombre: 'Material Gestionado País', definicion: 'Cantidad de material efectivamente recolectado y valorizado en un año, dentro o fuera de los SIG.' },
  { sigla: 'CTIP', nombre: 'Capacidad Técnica Instalada País', definicion: 'Capacidad total de las plantas de valorización/reciclaje operativas en el país para procesar un material determinado.' },
  { sigla: 'POM', nombre: 'Productos en el Mercado', definicion: 'Cantidad de producto prioritario puesto en el mercado nacional por los productores adheridos a un SIG en un año dado. Base para el cálculo de metas.' },
  { sigla: 'IRA', nombre: 'Instalación de Recepción y Almacenamiento', definicion: 'Sitio autorizado para recibir y acopiar temporalmente residuos de productos prioritarios antes de su valorización.' },
  { sigla: 'RETC', nombre: 'Registro de Emisiones y Transferencias de Contaminantes', definicion: 'Base de datos del MMA que captura información sobre emisiones y transferencia de contaminantes, incluyendo datos REP.' },
  { sigla: 'SNIFA', nombre: 'Sistema Nacional de Información de Fiscalización Ambiental', definicion: 'Plataforma pública de la SMA con información de fiscalizaciones, procedimientos sancionatorios y sanciones firmes.' },
  { sigla: 'SISREP', nombre: 'Sistema de Reporte REP', definicion: 'Plataforma de la SMA (operativa desde enero 2025) para que los SIG reporten mensualmente cumplimiento de metas y operaciones de manejo.' },
  { sigla: 'SINADER', nombre: 'Sistema Nacional de Declaración de Residuos', definicion: 'Plataforma del MMA para que generadores, destinatarios y gestores declaren residuos no peligrosos.' },
  { sigla: 'SMA', nombre: 'Superintendencia del Medio Ambiente', definicion: 'Organismo fiscalizador y sancionador de la Ley REP. Opera SISREP y SNIFA.' },
  { sigla: 'MEP', nombre: 'Mesas Ejecutivas para la Productividad', definicion: 'Instrumento de CORFO que reúne a actores públicos y privados para identificar y resolver trabas que afectan a un sector. En 2025 se convocaron MEP para EyE y NFU.' },
  { sigla: 'MMA', nombre: 'Ministerio del Medio Ambiente', definicion: 'Autoridad reguladora. Dicta decretos de metas, autoriza planes de gestión, administra RETC y SINADER.' },
  { sigla: 'TDLC', nombre: 'Tribunal de Defensa de la Libre Competencia', definicion: 'Emite informe favorable obligatorio para la conformación de SGC. Revisa bases de licitación de GRANSIC.' },
  { sigla: 'EyE', nombre: 'Envases y Embalajes', definicion: 'Producto prioritario que incluye papel/cartón, cartón para líquidos, vidrio, plástico y metal, en categorías domiciliaria y no domiciliaria.' },
  { sigla: 'NFU', nombre: 'Neumáticos Fuera de Uso', definicion: 'Producto prioritario. Categoría A (vehículos livianos) y B (mineros/industriales).' },
  { sigla: 'APL', nombre: 'Acuerdo de Producción Limpia', definicion: 'Convenio voluntario entre empresas, gremios y la autoridad pública para mejorar condiciones productivas y ambientales. En textiles existe un APL para economía circular en prendas de vestir.' },
  { sigla: 'ALU', nombre: 'Aceites Lubricantes Usados', definicion: 'Producto prioritario. Residuo peligroso con alto potencial de valorización por re-refinación.' },
  { sigla: 'P+AEE', nombre: 'Pilas y Aparatos Eléctricos y Electrónicos', definicion: 'Producto prioritario. Incluye pilas (<5kg), electrodomésticos, computadores, celulares, y paneles fotovoltaicos.' },
  { sigla: 'BFU', nombre: 'Baterías Fuera de Uso', definicion: 'Producto prioritario. Baterías de más de 5 kg (las menores están en P+AEE).' },
  { sigla: 'AIT', nombre: 'Aparatos de Intercambio de Temperatura', definicion: 'Subcategoría de AEE: refrigeradores, aires acondicionados, bombas de calor.' },
  { sigla: 'DO', nombre: 'Diario Oficial', definicion: 'Publicación oficial del Estado de Chile. La publicación de un decreto en el DO marca su entrada en vigor.' },
]

export function Glosario() {
  return (
    <div className="p-8 max-w-3xl">
      <h2 className="text-2xl font-bold mb-2">Glosario REP</h2>
      <p className="text-stone-400 mb-8">
        Términos, siglas y definiciones del ecosistema de la Ley de Responsabilidad
        Extendida del Productor en Chile.
      </p>
      <div className="space-y-0">
        {terminos.map((t) => (
          <div key={t.sigla} className="py-4 border-b border-stone-800/50">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-sm font-mono font-bold text-stone-200 shrink-0 w-16">
                {t.sigla}
              </span>
              <span className="text-sm font-medium text-stone-300">{t.nombre}</span>
            </div>
            <p className="text-sm text-stone-400 pl-[76px]">{t.definicion}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-stone-600 mt-6">
        Definiciones basadas en la Ley 20.920 y sus decretos reglamentarios.
      </p>
    </div>
  )
}
