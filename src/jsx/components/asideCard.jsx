export const AsideCard = ({ avatar, artist, type, songs }) => {
  return (
        <article id='asideCard'>
            <section className='avatar'>
                <img className='avatarImage' src={avatar} alt={artist} style={type === 'Artista' ? { borderRadius: 10 + 'px' } : { borderRadius: 90 + 'px' }} />
            </section>
            <section className='artista'>
                <h4>{artist}</h4>
            </section>
            <section className='tipo'>
                <p>{type}{songs ? `* ${songs}` : ''}</p>
            </section>
        </article>
  )
}
