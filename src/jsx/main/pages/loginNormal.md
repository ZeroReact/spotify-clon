import axios from 'axios'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Global from '../../logic/Global.mjs'
import Spotify from '../../../public/spotify-logo.png'

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${Global.client_id}&response_type=code&redirect_uri=${Global.redirect_uri}`

const funcion = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const spotiCode = urlParams.get('code')
    if (spotiCode) {
      authenticateUsers(spotiCode)
    }
  })

  const authenticateUsers = (spotiCode) => {
    try {
      const searchParams = new URLSearchParams({
        code: spotiCode,
        grant_type: 'authorization_code',
        redirect_uri: Global.redirect_uri,
        client_id: Global.client_id,
        client_secret: Global.client_secret
      })
      axios.post('https://accounts.spotify.com/api/token', searchParams)
        .then(res => {
          localStorage.setItems('access_token', res.data_access_token)
          localStorage.setItem('refresh_token', res.data.refresh_token)
          navigate('/')
        })
    } catch (err) {
      console.error('ha ocurrido un error:', err)
    }
  }

  const handleClick = () => {
    window.location.replace(spotifyUrl)
  }
}
