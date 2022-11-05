import React, {useState} from 'react'
import Header from "./Header/Header";
import Gallery from "./Gallery/Gallery";
import Info from "./Main/Info";
import '../css/app.css'

export const IMGS = 
  [
    {
      main: "./images/image-product-1.jpg",
      thumbnail: "./images/image-product-1-thumbnail.jpg"
    },
    {
      main: "./images/image-product-2.jpg",
      thumbnail: "./images/image-product-2-thumbnail.jpg"
    },
    {
      main: "./images/image-product-3.jpg",
      thumbnail: "./images/image-product-3-thumbnail.jpg"
    },
    {
      main: "./images/image-product-4.jpg",
      thumbnail: "./images/image-product-4-thumbnail.jpg"
    },
  ]

export const HandlerContext = React.createContext()
export const CartContext = React.createContext()

function App() {
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useState([])
  const handlerContextValue = {
    handleModal,
    handleAdd,
    cartTotal: cart.reduce((a, b) => a + b.quantity, 0)
  }
  function handleModal(bool) {
    setModal(bool)
  }
  function handleAdd(product, quantity) {
    if (quantity === 0) return 
    const newCart = [...cart]
    const index = newCart.findIndex(i => i.product.title === product.title)
    if (index !== -1) {
      newCart[index].quantity += quantity
    }
    else {
      newCart.push({product, quantity})
    }
    setCart(newCart)
  }
  return (
    <CartContext.Provider value={cart}>
    <HandlerContext.Provider value={handlerContextValue}>
    <>
      <Header cart={null}/>
      <div className="main__container">
        <Gallery/>
        <Info/>
      </div>
      { modal && <div className="modal"/> }
    </>
    </HandlerContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
