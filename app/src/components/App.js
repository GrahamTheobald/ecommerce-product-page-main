import React, {useState} from 'react'
import Header from "./Header/Header";
import Gallery from "./Gallery/Gallery";
import Info from "./Main/Info";
import Cart from "./Cart/Cart";
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

export const ProductContext = React.createContext()
const productContextValue = 
{
  company: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  currentPrice: "$125.00",
  discount: "50%",
  previousPrice: "$250.00"
}

function App() {
  const [modal, setModal] = useState(false)
  return (
  <ProductContext.Provider value={productContextValue}>
    <>
      <Header/>
      <div className="main__container">
        <Gallery/>
        <Info/>
      </div>
      { modal && <div className="modal"/> }
    </>
  </ProductContext.Provider>
  );
}

export default App;
