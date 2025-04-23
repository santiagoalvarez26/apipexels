import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header     from './components/Header'
import BottomNav  from './components/BottomNav'
import Home       from './pages/Home'
import SearchPage from './pages/SearchPage'
import Listado    from './pages/Listado'
import Filtros    from './pages/Filtros'
import Favoritos  from './pages/Favoritos'
import Perfil     from './pages/Perfil'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pb-20"> {/* espacio para menú inferior */}
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/buscar"    element={<SearchPage />} />
          <Route path="/listado"   element={<Listado />} />
          <Route path="/filtros"   element={<Filtros />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/perfil"    element={<Perfil />} />
        </Routes>
      </main>
      <BottomNav />
    </BrowserRouter>
  )
}
