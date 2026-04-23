import { useState, useEffect } from 'react'
import Landing from './pages/Landing'
import DashboardLayout from './components/DashboardLayout'
import VisibilidadConsolidada from './pages/VisibilidadConsolidada'
import InteligenciaComparativa from './pages/InteligenciaComparativa'
import NarrativaImpacto from './pages/NarrativaImpacto'
import PanelGestor from './pages/PanelGestor'
import LoginAfiliado from './pages/afiliado/LoginAfiliado'
import DashboardAfiliado from './pages/afiliado/DashboardAfiliado'

function navigateTo(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)
  const [currentPage, setCurrentPage] = useState('landing')

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Rutas independientes (sin sidebar del dashboard)
  if (pathname === '/panel-gestor') return <PanelGestor />
  if (pathname === '/afiliado/login') return <LoginAfiliado />
  if (pathname === '/afiliado/dashboard') return <DashboardAfiliado />

  if (currentPage === 'landing') {
    return (
      <Landing
        onEnter={() => setCurrentPage('visibilidad')}
        onPortal={() => navigateTo('/afiliado/login')}
      />
    )
  }

  return (
    <DashboardLayout
      activePage={currentPage}
      onNavigate={setCurrentPage}
      onBack={() => setCurrentPage('landing')}
    >
      {currentPage === 'visibilidad' && <VisibilidadConsolidada />}
      {currentPage === 'inteligencia' && <InteligenciaComparativa />}
      {currentPage === 'narrativa' && <NarrativaImpacto />}
    </DashboardLayout>
  )
}

export default App
