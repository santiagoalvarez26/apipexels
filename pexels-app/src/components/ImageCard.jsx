// **Asegúrate** de que el archivo se llame exactamente ImageCard.jsx
export default function ImageCard({ image, onClick }) {
    return (
      <div
        onClick={() => onClick(image)}
        className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
      >
        <img
        src={image.src.medium}       
        alt={image.alt}
        className="w-full h-48 object-cover transition-transform duration-200 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-200" />
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-200">
          <p className="text-sm truncate">{image.photographer}</p>
          <p className="text-xs mt-1">❤ {image.likes}</p>
        </div>
      </div>
    )
  }
  