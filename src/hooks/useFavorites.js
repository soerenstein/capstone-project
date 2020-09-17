import { useEffect, useState } from 'react'

export default function useFavorites() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  )

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  function toggleFavorite(favorite) {
    const index = favorites.findIndex(
      (favoriteItem) => favoriteItem.id === favorite.id
    )
    index > -1
      ? setFavorites([
          ...favorites.slice(0, index),
          ...favorites.slice(index + 1),
        ])
      : setFavorites([...favorites, { ...favorite }])
  }
  return [favorites, toggleFavorite]
}
