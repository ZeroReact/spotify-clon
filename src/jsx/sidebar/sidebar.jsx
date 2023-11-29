import Home from '../../assets/house.svg'
import Lupa from '../../assets/magnifying-glass.svg'
import ArrowWith from '../../assets/right-arrow-with.svg'
import Plus from '../../assets/plus.svg'
import List from '../../assets/list.svg'
import { Link } from 'react-router-dom'
import { AsideCard } from '../components/asideCard'

export const Sidebar = () => {
  return (
        <aside>
          <nav className='navbar'>
            <li>
              <Link to='/'>
                <img src={Home} />
                Inicio
              </Link>
            </li>
            <li>
              <Link to='/search'>
                <img src={Lupa} />
                Buscar
              </Link>
            </li>
          </nav>
          <section>
            <section className='catalog'>
              <div>
                <div>
                  <Link className='biblioteca' to='/biblioteca'>
                    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-ytk21e-0 iYxpxA">
                      <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                    </svg>
                    Tu biblioteca
                  </Link>
                </div>
                <div>
                  <Link className='direct' to='/'>
                    <img src={Plus} />
                  </Link>
                </div>
                <div>
                  <Link className='direct' to='/'>
                    <img src={ArrowWith} />
                  </Link>
                </div>
              </div>
              <div className='categories'>
                <Link to='/playlist'>Playlists</Link>
                <Link to='/artistas'>Artistas</Link>
              </div>
            </section>
            <section className='artist'>
              <div className='searchSongAfterLister'>
                <Link>
                  Recientes
                  <img src={List} />
                </Link>
              </div>
              <div>
                <Link to='Artistas'>
                  <AsideCard avatar='https://facts.net/wp-content/uploads/2023/10/15-captivating-facts-about-ryan-lewis-1698463916.jpg' artist='Ryan Lewis' type='Artista'/>
                </Link>
                <Link to='Artistas'>
                  <AsideCard avatar='https://facts.net/wp-content/uploads/2023/10/15-captivating-facts-about-ryan-lewis-1698463916.jpg' artist='Ryan Lewis' type='Artista'/>
                </Link>
                <Link to='/Artistas'>
                  <AsideCard avatar='https://facts.net/wp-content/uploads/2023/10/15-captivating-facts-about-ryan-lewis-1698463916.jpg' artist='Ryan Lewis' type='Artista'/>
                </Link>
                <Link to='Artistas'>
                  <AsideCard avatar='https://facts.net/wp-content/uploads/2023/10/15-captivating-facts-about-ryan-lewis-1698463916.jpg' artist='Ryan Lewis' type='Artista'/>
                </Link>
                <Link to='Artistas'>
                  <AsideCard avatar='https://facts.net/wp-content/uploads/2023/10/15-captivating-facts-about-ryan-lewis-1698463916.jpg' artist='Ryan Lewis' type='Artista'/>
                </Link>
              </div>
            </section>
          </section>
        </aside>
  )
}
