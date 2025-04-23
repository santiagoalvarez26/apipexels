
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'

const tabs = [
  { name: 'Inicio',    to: '/',         icon: '🏠' },
  { name: 'Buscar',    to: '/buscar',   icon: '🔍' },
  { name: 'Listado',   to: '/listado',  icon: '📋' },
  { name: 'Filtros',   to: '/filtros',  icon: '⚙️' },
  { name: 'Favoritos', to: '/favoritos',icon: '❤️' },
  { name: 'Perfil',    to: '/perfil',   icon: '👤' },
]

export default function BottomNav() {
  const nav = (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 0',
        backgroundColor: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        zIndex: 999999,
        pointerEvents: 'auto',
      }}
    >
      {tabs.map(tab => (
        <NavLink
          key={tab.name}
          to={tab.to}
          style={({ isActive }) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px',
            color: isActive ? '#2563EB' : '#4B5563',
            textDecoration: 'none',
            pointerEvents: 'auto',
          })}
        >
          <span style={{ fontSize: '20px' }}>{tab.icon}</span>
          <span>{tab.name}</span>
        </NavLink>
      ))}
    </div>
  )

  return createPortal(nav, document.body)
}
