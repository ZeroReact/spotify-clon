import { Route, Routes } from 'react-router-dom'
import { Header } from '../header/head'
import { Section } from './pages/section'
import { Login } from './pages/login'
import { Search } from './pages/search'

export const Main = () => {
  return (
    <Routes>
      <Route path='/' element={
        <main>
          <Header />
          <Section />
        </main>
      } />
      <Route path='/more' element={
        <main>
          <Header />
        </main>
      } />
      <Route path='/search' element={
        <main>
          <Header />
          <Search />
        </main>
      } />
      <Route path='/login' element={
        <main>
          <Header />
          <Login />
        </main>
      } />
    </Routes>
  )
}
