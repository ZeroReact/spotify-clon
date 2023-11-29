export const CardPlay = ({ img, title, authors, link }) => {
  return (
        <>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{authors}</p>
            <a href={link}>Abrir playlist</a>
        </>
  )
}
