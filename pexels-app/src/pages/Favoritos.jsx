import { useState } from 'react'
import { useFavorites } from '../context/FavoritesContext'
import ImageGrid from '../components/ImageGrid'
import ImageModal from '../components/ImageModal'

export default function Favoritos() {
  const { favorites } = useFavorites()
  const [selectedImage, setSelected] = useState(null)

  return (
    <div className="min-h-[calc(100vh-128px)] p-4">
      <h1 className="text-2xl font-bold mb-4">Tus Favoritos</h1>
      {favorites.length > 0 ? (
        <>
          <ImageGrid images={favorites} onCardClick={setSelected} />
          {selectedImage && (
            <ImageModal
              image={selectedImage}
              onClose={() => setSelected(null)}
            />
          )}
        </>
      ) : (
        <p className="text-center text-gray-500">
          No tienes imágenes favoritas aún.
        </p>
      )}
    </div>
  )
}
