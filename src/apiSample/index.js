import asian from '../assets/img/goods/asian_pizza.jpg'
import cheeseBurger from '../assets/img/goods/cheeseburger_pizza.jpg'
import fourCheese from '../assets/img/goods/four_cheese_pizza.jpg'
import hamMashroom from '../assets/img/goods/ham_mashroom_pizza.jpg'
import margarita from '../assets/img/goods/margarita_pizza.jpg'
import meet from '../assets/img/goods/meet_pizza.jpg'
import mexican from '../assets/img/goods/mexican_pizza.jpg'
import pepperoni from '../assets/img/goods/pepperoni_pizza.jpg'
import tomYam from '../assets/img/goods/tom_yam_pizza.jpg'

const goodsExample = [
  {
    id: 'a0000',
    name: "Asian Pizza",
    img: asian,
    price: 8.50,
    description: 'Shrimps with mishrooms topped by mozzarella cheese and chinese sweet and sour sauce'
  },
  {
    id: 'a0001',
    name: "CheeseBurger Pizza",
    img: cheeseBurger,
    price: 9,
    description: 'Burger sauce mixed with bolognese meet sauce topped by mozzarella, tomatoes and pickles'
  },
  {
    id: 'a0002',
    name: "Four Cheese Pizza",
    img: fourCheese,
    price: 9.5,
    description: 'A classic pizza with 4 types of cheese: 2 hard and 2 soft ones'
  },
  {
    id: 'a0003',
    name: "Ham & Mashroom Pizza",
    img: hamMashroom,
    price: 8.5,
    description: 'Ham, tomato sauce mixed with mushrooms and topped by mozzarella'
  },
  {
    id: 'a0004',
    name: "Margarita Pizza",
    img: margarita,
    price: 7,
    description: 'One of classic pizzas without meat, contains Italic herbs, tomatoes and mozzarella'
  },
  {
    id: 'a0005',
    name: "Meet Pizza",
    img: meet,
    price: 10,
    description: 'Ham, chicken, spicy pepperoni, chorizo, tomato sauce and mozzarella'
  },
  {
    id: 'a0006',
    name: "Mexican Pizza",
    img: mexican,
    price: 10,
    description: 'Chicken, tomatoes, salsa sauce',
    warning: 'Contains spicy jalapeno'
  },
  {
    id: 'a0007',
    name: "Pepperoni Pizza",
    img: pepperoni,
    price: 8.5,
    description: 'Spicy pepperoni, chicken, sweet and sour sauce topped by mozzarella'
  },
  {
    id: 'a0008',
    name: "Tom Yam Pizza",
    img: tomYam,
    price: 9.5,
    description: 'Tom Yam sauce with shrimps, chicken and mozzarella'
  },
]

export const getGoods = () => {
  return goodsExample
}

export const getGood = ({id}) => {
  return goodsExample.find(item => item.id === id)
}
