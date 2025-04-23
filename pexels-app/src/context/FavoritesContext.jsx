import { createContext, useState, useContext, useEffect } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = img => {
    if (!favorites.find(f => f.id === img.id)) {
      setFavorites([...favorites, img])
    }
  }
  const removeFavorite = img => {
    setFavorites(favorites.filter(f => f.id !== img.id))
  }
  const isFavorite = id => favorites.some(f => f.id === id)

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
