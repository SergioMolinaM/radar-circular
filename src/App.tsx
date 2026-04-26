// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { Layout } from './components/Layout'
import { Landing } from './pages/Landing'
import { Home } from './pages/Home'
import { Panorama } from './pages/Panorama'
import { ProductoDetalle } from './pages/ProductoDetalle'
import { DetalleEyE } from './pages/DetalleEyE'
import { DetalleNFU } from './pages/DetalleNFU'
import { Acerca } from './pages/Acerca'
import { Fiscalizacion } from './pages/Fiscalizacion'
import { DetallePAEE } from './pages/DetallePAEE'
import { Analisis } from './pages/Analisis'
import { Glosario } from './pages/Glosario'
import { LeyRep } from './pages/LeyRep'
import { HojaDeRuta } from './pages/HojaDeRuta'
import { SistemasGestion } from './pages/SistemasGestion'
import { MapaTerritorial } from './pages/MapaTerritorial'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Landing pública (sin sidebar) */}
        <Route index element={<Landing />} />

        {/* App con sidebar */}
        <Route element={<Layout />}>
          <Route path="panel" element={<Home />} />
          <Route path="panorama" element={<Panorama />} />
          <Route path="mapa" element={<MapaTerritorial />} />
          <Route path="fiscalizacion" element={<Fiscalizacion />} />
          <Route path="sistemas-gestion" element={<SistemasGestion />} />
          <Route path="analisis" element={<Analisis />} />
          <Route path="glosario" element={<Glosario />} />
          <Route path="hoja-de-ruta" element={<HojaDeRuta />} />
          <Route path="ley-rep" element={<LeyRep />} />
          <Route path="producto/eye" element={<DetalleEyE />} />
          <Route path="producto/nfu" element={<DetalleNFU />} />
          <Route path="producto/paee" element={<DetallePAEE />} />
          <Route path="producto/:id" element={<ProductoDetalle />} />
          <Route path="acerca" element={<Acerca />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
