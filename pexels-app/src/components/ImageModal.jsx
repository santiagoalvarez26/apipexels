import { createPortal } from 'react-dom'
import { useFavorites } from '../context/FavoritesContext'
import { useEffect } from 'react'

export default function ImageModal({ image, onClose }) {

  useEffect(() => {
    console.log('💡 ImageModal montado con:', image)
    return () => console.log('💡 ImageModal desmontado')
  }, [image])

  if (!image) return null

  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const fav = isFavorite(image.id)
  const handleFav = () => fav ? removeFavorite(image) : addFavorite(image)

 
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  }
  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
  }
  const imgStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    maxHeight: '60vh',
    display: 'block',
    margin: '0 auto',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  }

  const modal = (
    <div onClick={onClose} style={overlayStyle}>
      <div onClick={e => e.stopPropagation()} style={containerStyle}>
        {/* Botón favorito */}
        <button
          onClick={handleFav}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            padding: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          }}
          aria-label={fav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
        >
          {fav ? '❤️' : '🤍'}
        </button>

        {/* Imagen */}
        <img src={image.src.large} alt={image.alt} style={imgStyle} />

        {/* Información y botón cerrar */}
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
              cursor: 'pointer',
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