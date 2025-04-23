// src/api/pexels.js
const BASE = 'https://api.pexels.com/v1'

function headers() {
  return {
    Authorization: import.meta.env.VITE_PEXELS_API_KEY
  }
}

/**
 * Trae las fotos “curadas” (página 1, 12 por defecto)
 * @param {number} page 
 * @param {number} perPage 
 */
export async function fetchCurated(page = 1, perPage = 12) {
  const res = await fetch(`${BASE}/curated?page=${page}&per_page=${perPage}`, {
    headers: headers()
  })
  if (!res.ok) throw new Error(`Error Pexels: ${res.status}`)
  const data = await res.json()
  return data.photos
}

/**
 * Busca fotos por palabra clave
 * @param {string} query 
 * @param {number} page 
 * @param {number} perPage 
 */
export async function searchPhotos(query, page = 1, perPage = 12) {
  const res = await fetch(
    `${BASE}/search?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`,
    { headers: headers() }
  )
  if (!res.ok) throw new Error(`Error Pexels: ${res.status}`)
  const data = await res.json()
  return data.photos
}
