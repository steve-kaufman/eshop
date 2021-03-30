import './Item.sass'

export const Item = ({ title, description, imgSRC, price }) => {
  return (
    <article className="item">
      <div className="img-container">
        <img src={imgSRC} alt={title} />
      </div>
      <hr />
      <main className="item-info">
        <header>
          <h4 className="item-title">{title}</h4>
          <p className="item-description">{description}</p>
        </header>
        <aside className="price">{price}</aside>
      </main>
    </article>
  )
}