// src/components/Header.jsx
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className="
      relative
      bg-white
      border-b border-gray-200
      shadow-sm
      h-20
      z-50
    ">
      <div className="
        max-w-screen-xl
        mx-auto
        h-full
        px-6
        flex items-center justify-between
        space-x-6
      ">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40x40?text=Logo"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-bold text-gray-800">PexelsApp</span>
        </Link>

        {/* SearchBar */}
        <div className="flex-1">
          <SearchBar />
        </div>

        {/* Íconos */}
        <nav className="flex items-center space-x-4">
          <button
            aria-label="Notificaciones"
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            🔔
          </button>
          <button
            aria-label="Perfil"
            className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-600 font-semibold rounded-full hover:bg-gray-200 transition"
          >
            t
          </button>
        </nav>
      </div>
    </header>
  )
}
