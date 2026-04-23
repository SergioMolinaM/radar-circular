// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Panorama } from './pages/Panorama'
import { ProductoDetalle } from './pages/ProductoDetalle'
import { DetalleEyE } from './pages/DetalleEyE'
import { DetalleNFU } from './pages/DetalleNFU'
import { Acerca } from './pages/Acerca'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="panorama" element={<Panorama />} />
          <Route path="producto/eye" element={<DetalleEyE />} />
          <Route path="producto/nfu" element={<DetalleNFU />} />
          <Route path="producto/:id" element={<ProductoDetalle />} />
          <Route path="acerca" element={<Acerca />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
