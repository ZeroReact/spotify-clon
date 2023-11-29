import { useState } from 'react'

export const Search = () => {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(e.target.search.value)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
        <>
          <section>
            <form onSubmit={handleSubmit}>
              <input placeholder='¿Qué te apetece escuchar?' name='search' maxLength={800} autoCorrect='off' onChange={handleChange} />
              <p>Resultados de: {search}</p>
            </form>
          </section>
        </>
  )
}
