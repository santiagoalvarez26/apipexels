import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import Listado from './pages/Listado'
import Filtros from './pages/Filtros'
import Favoritos from './pages/Favoritos'
import Perfil from './pages/Perfil'
import BottomNav from './components/BottomNav'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pb-16"> {/* padding para que no tape el BottomNav */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<SearchPage />} />
          <Route path="/listado" element={<Listado />} />
          <Route path="/filtros" element={<Filtros />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </main>
      <BottomNav />
    </BrowserRouter>
  )
}
