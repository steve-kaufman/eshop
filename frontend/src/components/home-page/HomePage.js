import { Item } from '..'
import './HomePage.sass'

const items = [
  {
    title: "Pencils",
    description: "12 pk.",
    imgSRC: "https://artsy-media-uploads.s3.amazonaws.com/QLbuWKkapyx4UHkcjAIX7Q%2FPencils.jpg",
    price: "$3.49"
  },
  {
    title: "Erasers",
    description: "2 pk.",
    imgSRC: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Office-pink-erasers.jpg",
    price: "$1.99"
  },
  {
    title: "Notebooks",
    description: "Each",
    imgSRC: "https://images-na.ssl-images-amazon.com/images/I/71Yxz-zFzzL._AC_SY355_.jpg",
    price: "$0.89"
  },
  {
    title: "Backpacks",
    description: "Each",
    imgSRC: "https://images-na.ssl-images-amazon.com/images/I/81UbNUfvstL._AC_UY445_.jpg",
    price: "$23.49"
  },
  {
    title: "Calculators",
    description: "Each",
    imgSRC: "https://images.casiocdn.com/casio-v2/resource/images/sections/calculators/basic-HS-8VA.png",
    price: "12.99"
  },
  {
    title: "Rulers",
    description: "Each",
    imgSRC: "https://www.ginifab.com/feeds/cm_to_inch/img/ruler.png",
    price: "$0.99"
  }
]

export const HomePage = () => {
  return (
    <main className="home-page container">
      <ul className="items-list">
        {items.map(({title, description, imgSRC, price}, i) => (
          <li key={i}>
            <Item title={title} description={description} imgSRC={imgSRC} price={price} />
          </li>
        ))}
      </ul>
    </main>
  )
}