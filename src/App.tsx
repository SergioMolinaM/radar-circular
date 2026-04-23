function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Radar Circular
        </h1>
        <p className="text-lg text-stone-400 leading-relaxed">
          Plataforma pública de inteligencia sobre la Ley de Responsabilidad
          Extendida del Productor en Chile.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-stone-500">
          {[
            'Envases y Embalajes',
            'Neumáticos',
            'Aluminio',
            'Pilas y Baterías',
            'Aparatos Eléctricos',
            'Textiles',
          ].map((pp) => (
            <span
              key={pp}
              className="px-3 py-1 rounded-full border border-stone-800"
            >
              {pp}
            </span>
          ))}
        </div>
        <p className="text-xs text-stone-600 pt-4">
          En desarrollo · Tercera Letra · 2026
        </p>
      </div>
    </div>
  )
}

export default App
