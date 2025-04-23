import { createPortal } from 'react-dom'

export default function LoadMoreBtn({ onClick }) {
  const button = (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '5rem',              
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 11000,               
        padding: '0.75rem 1.5rem',
        backgroundColor: '#2563EB',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '9999px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        fontSize: '1rem',
      }}
    >
      Cargar más…
    </button>
  )

  return createPortal(button, document.body)
}
