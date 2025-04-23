import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { searchPhotos } from '../api/pexels'
import ImageGrid from '../components/ImageGrid'
import ImageModal from '../components/ImageModal'
import LoadMoreBtn from '../components/LoadMoreBtn'

export default function SearchPage() {
  const { search } = useLocation()
  const q = new URLSearchParams(search).get('query') || ''
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (!q) return
    setPage(1)
    loadSearch(1)
  }, [q])

  useEffect(() => {
    if (page > 1) loadSearch(page)
  }, [page])

  const loadSearch = async pg => {
    setLoading(true)
    try {
      const photos = await searchPhotos(q, pg, 12)
      setImages(prev => (pg === 1 ? photos : [...prev, ...photos]))
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleLoadMore = () => setPage(prev => prev + 1)
  const handleCardClick = img => setSelectedImage(img)
  const closeModal = () => setSelectedImage(null)

  return (
    <div className="min-h-[calc(100vh-128px)]">
      <h1 className="p-4 text-2xl font-bold">
        {q ? `Resultados para “${q}”` : 'Busca algo…'}
      </h1>
      <ImageGrid images={images} onCardClick={handleCardClick} />
      {loading && <p className="text-center py-4">Cargando...</p>}
      {!loading && images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  )
}
