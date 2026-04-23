import { useState } from 'react'
import { AFILIADOS_DEMO } from '../../data/afiliadosDemo'

function LoginAfiliado() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const afiliado = AFILIADOS_DEMO.find(
      (a) => a.email === email.trim().toLowerCase() && a.password === password
    )

    if (!afiliado) {
      setError('Credenciales incorrectas. Verifica tus datos.')
      return
    }

    localStorage.setItem(
      'radar_afiliado_session',
      JSON.stringify({ afiliadoId: afiliado.id, empresa: afiliado.empresa })
    )
    window.history.pushState({}, '', '/afiliado/dashboard')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <div className="min-h-screen bg-crema flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="font-serif text-3xl text-musgo font-semibold">
              ProREP
            </span>
            <h1 className="mt-3 font-serif text-xl text-cafe">
              Portal de Afiliados
            </h1>
            <p className="mt-1 font-sans text-sm text-cafe/60">
              Accede a tu panel de cumplimiento REP
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-cafe/50 mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="tu@empresa.cl"
                className="w-full px-4 py-2.5 bg-white border border-cafe/15 rounded-lg font-sans text-sm text-cafe placeholder:text-cafe/30 focus:outline-none focus:border-musgo focus:ring-1 focus:ring-musgo/30"
              />
            </div>
            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-cafe/50 mb-1.5">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-white border border-cafe/15 rounded-lg font-sans text-sm text-cafe placeholder:text-cafe/30 focus:outline-none focus:border-musgo focus:ring-1 focus:ring-musgo/30"
              />
            </div>

            {error && (
              <p className="font-sans text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-2.5 bg-musgo text-white font-sans text-sm font-medium rounded-lg hover:bg-musgo/90 transition-colors"
            >
              Ingresar
            </button>
          </form>

          {/* Demo hint */}
          <div className="mt-6 p-3 bg-cafe/5 rounded-lg">
            <p className="font-sans text-[11px] text-cafe/50 text-center">
              Demo: empresa1@demo.cl / admin
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="font-sans text-[11px] text-cafe/40">
          Sistema de gestión ProREP · Datos ficticios con fines ilustrativos
        </p>
      </footer>
    </div>
  )
}

export default LoginAfiliado
