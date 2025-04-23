// src/components/ImageGrid.jsx
import ImageCard from './ImageCard'

export default function ImageGrid({ images, onCardClick }) {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {images.map(img => (
        <ImageCard key={img.id} image={img} onClick={onCardClick} />
      ))}
    </div>
  )
}
