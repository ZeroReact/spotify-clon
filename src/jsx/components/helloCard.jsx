export const HelloCard = ({ url = 'https://www.thewowstyle.com/wp-content/uploads/2015/01/Lionel-Messi-Photos.jpg', name = 'Messi', key = 'no hay key' }) => {
  return (
        <article id='miniCard' key={key}>
          <img
            src={url}
            alt={name}
            width='60px'
            height='100%'
          />
          <h4>{name}</h4>
        </article>
  )
}
