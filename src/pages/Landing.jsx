function Landing({ onEnter, onPortal }) {
  return (
    <div className="min-h-screen bg-crema flex flex-col">
      {/* Header */}
      <header className="px-8 py-6">
        <span className="font-serif text-base text-cafe">Radar Circular</span>
      </header>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-serif text-7xl md:text-8xl text-cafe font-medium tracking-tight">
            Radar Circular
          </h1>
          <div className="mt-3 flex justify-center">
            <span className="block w-2.5 h-2.5 rounded-full bg-musgo" />
          </div>

          <p className="mt-8 font-sans text-xl md:text-2xl text-cafe/80 font-normal">
            Un radar inteligente para el cumplimiento REP en Chile.
          </p>

          <div className="mt-12 space-y-5 max-w-2xl mx-auto">
            <p className="text-base text-cafe/70 font-sans">
              Hace visible el cumplimiento del sector y traduce los datos en información accionable.
            </p>
            <p className="text-base text-cafe/70 font-sans">
              Convierte el esfuerzo de los sistemas de gestión en narrativa que el sistema puede escuchar.
            </p>
            <p className="text-base text-cafe/70 font-sans">
              Acompaña a operadores y afiliados con una capa de inteligencia diseñada para sus decisiones.
            </p>
          </div>

          <div className="mt-12">
            <button
              onClick={onEnter}
              className="bg-musgo text-white font-sans font-medium text-base px-8 py-4 rounded-lg hover:bg-musgo/90 transition-colors duration-200"
            >
              Entrar al dashboard demo
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto pb-6 flex items-center justify-center gap-6">
        <span className="font-sans text-xs text-cafe/50">
          Una iniciativa de Tercera Letra
        </span>
        <button
          onClick={onPortal}
          className="font-sans text-xs text-musgo/70 hover:text-musgo transition-colors"
        >
          Portal Afiliados &rarr;
        </button>
      </footer>
    </div>
  )
}

export default Landing
