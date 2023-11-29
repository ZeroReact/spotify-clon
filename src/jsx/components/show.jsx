import { Link } from 'react-router-dom'

export const Show = ({ title, url }) => {
  return (
          <section className='presentPlaylist'>
              <div>
                  <h1>{title}</h1>
              </div>
              <div>
                  <Link to={url}>Mostrar todos</Link>
              </div>
          </section>
  )
}
