import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [q, setQ] = useState('')
  const nav = useNavigate()
  const submit = e => {
    e.preventDefault()
    const term = q.trim()
    if (term) nav(`/buscar?query=${encodeURIComponent(term)}`)
  }

  return (
    <form onSubmit={submit} className="w-[5cm] mx-auto">
      <input
        type="text"
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Buscar..."
        className="
          w-full
          px-4 py-2
          bg-gray-100
          rounded-full
          border border-gray-200
          text-gray-800
          focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-400
          transition
          placeholder-gray-500
        "
      />
    </form>
  )
}
