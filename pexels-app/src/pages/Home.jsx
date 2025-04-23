// src/pages/Home.jsx
import { useState, useEffect, useRef } from 'react'
import { fetchCurated }   from '../api/pexels'
import ImageGrid          from '../components/ImageGrid'
import ImageModal         from '../components/ImageModal'
import LoadMoreBtn        from '../components/LoadMoreBtn'

export default function Home() {
  const [images, setImages]           = useState([])
  const [page, setPage]               = useState(1)
  const [loading, setLoading]         = useState(false)
  const [selectedImage, setSelected]  = useState(null)
  const [showLoadBtn, setShowLoadBtn] = useState(false)
  const sentinelRef                   = useRef(null)

  // 1) Carga inicial y siguientes páginas
  useEffect(() => {
    loadPage(page)
  }, [page])

  async function loadPage(pg) {
    setLoading(true)
    try {
      const photos = await fetchCurated(pg, 12)
      setImages(prev => (pg === 1 ? photos : [...prev, ...photos]))
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // 2) Intersection Observer para mostrar el botón
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLoadBtn(entry.isIntersecting)
      },
      {
        rootMargin: '0px 0px 200px 0px', // dispara un poco antes de llegar al final
        threshold: 0.1
      }
    )
    if (sentinelRef.current) observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [sentinelRef])

  return (
    <>
      <div className="min-h-[calc(100vh-128px)]">
        <ImageGrid images={images} onCardClick={setSelected} />

        {/* Sentinel: invisible, colocado justo al final de la galería */}
        <div ref={sentinelRef} />

        {/* Spinner mientras carga */}
        {loading && <p className="text-center py-4">Cargando…</p>}

        {/* El botón sólo aparece cuando el sentinel entra en el viewport */}
        {showLoadBtn && !loading && (
          <LoadMoreBtn onClick={() => setPage(p => p + 1)} />
        )}
      </div>

      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
