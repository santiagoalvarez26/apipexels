// src/components/ImageModal.jsx
import { createPortal } from 'react-dom'
import { useEffect } from 'react'

export default function ImageModal({ image, onClose }) {
  // 1) Debug: confirmamos montaje
  useEffect(() => {
    console.log('💡 ImageModal montado con:', image)
    return () => console.log('💡 ImageModal desmontado')
  }, [image])

  if (!image) return null

  // 2) HTML con flex centrar y border de depuración
  const overlayStyle = {
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const containerStyle = {
    backgroundColor: 'white',
    border: '4px solid lime',       // 🌟 borde visible para ver dónde está
    borderRadius: '8px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '90vh',
    overflow: 'auto',
  }

  const imgStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    maxHeight: '60vh',
    display: 'block',
  }

  const modal = (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999,
        ...overlayStyle
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={containerStyle}
      >
        <img src={image.src} alt={image.alt} style={imgStyle} />
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <h2 style={{ margin: 0 }}>{image.photographer}</h2>
            {image.url && (
              <a href={image.url} target="_blank" rel="noreferrer">
                Ver en Pexels
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              width: '100%',
              padding: '8px',
              backgroundColor: '#e53e3e',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
