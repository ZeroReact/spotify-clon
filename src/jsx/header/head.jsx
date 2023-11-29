import { Link, Routes, Route, Outlet } from 'react-router-dom'
import ArrLeft from '../../assets/left-arrow.svg'
import ArrRight from '../../assets/right-arrow.svg'
import bell from '../../assets/bell.svg'
import user from '../../assets/user.svg'
import install from '../../assets/inst.svg'

export const Header = () => {
  return (
    <Routes>
      <Route path='/' element={
        <header>
          <div className='head'>
            <section id='arrows'>
              <a>
                <img src={ArrLeft} alt='Flecha izquierda' />
              </a>
              <a>
                <img src={ArrRight} alt='Flecha derecha' />
              </a>
            </section>
            <Outlet />
            <section id='but'>
              <Link to='/login' className='login'>Registrarse</Link>
              <a href='https://www.spotify.com/co-es/download/other/' className='install' target='_blank' rel='noreferrer'>
              <img src={install} />
              Instalar App
            </a>
            <Link to='/novedades' className='img'><img src={bell} /></Link>
            <Link to='/user' className='img'><img src={user} /></Link>
          </section>
        </div>
      </header>
      } >
      </Route>
    </Routes>
  )
}
