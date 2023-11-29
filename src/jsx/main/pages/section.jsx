import { CardPlay } from '../../components/cardPlay'
import { Recomended } from '../../components/recomendados'
import { Show } from '../../components/show'

export const Section = () => {
  return (
      <>
        <div className='recommended'>
            <div>
              <h1>¡Recomendados!</h1>
            </div>
            <Recomended />
        </div>
        <div className='forYou'>
            <Show title='Hecho para tí' url='/more' />
            <section className='playlists'>
                <article id='cardSong'>
                  <CardPlay img='https://www.thewowstyle.com/wp-content/uploads/2015/01/Lionel-Messi-Photos.jpg' title='MessiGOD' authors='Messi y Maradona' link='https://www.youtube.com' />
                </article>
                <article id='cardSong'>
                  <CardPlay img='https://www.thewowstyle.com/wp-content/uploads/2015/01/Lionel-Messi-Photos.jpg' title='MessiGOD' authors='Messi y Maradona' link='https://www.youtube.com' />
                </article>
                <article id='cardSong'>
                  <CardPlay img='https://www.thewowstyle.com/wp-content/uploads/2015/01/Lionel-Messi-Photos.jpg' title='MessiGOD' authors='Messi y Maradona' link='https://www.youtube.com' />
                </article>
                <article id='cardSong'>
                  <CardPlay img='https://www.thewowstyle.com/wp-content/uploads/2015/01/Lionel-Messi-Photos.jpg' title='MessiGOD' authors='Messi y Maradona' link='https://www.youtube.com' />
                </article>
                <article id='cardSong'>
                  <CardPlay img='https://www.thewowstyle.com/wp-content/uploads/2015/01/Lionel-Messi-Photos.jpg' title='MessiGOD' authors='Messi y Maradona' link='https://www.youtube.com' />
                </article>
            </section>
          </div>
        </>
  )
}
