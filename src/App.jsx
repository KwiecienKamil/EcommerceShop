import { useState } from "react";
import CartModal from "./components/CartModal";
import Products from "./components/Products";
import Header from "./components/Header";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const openCartHandler = () => {
    setOpenCart(true)
  }
  const closeCartHandler = () => {
    setOpenCart(false)
  }
  return (
  <ShopContextProvider>
    <Header onOpenCart={openCartHandler} onCloseCart={closeCartHandler}/>
    <Products />
    {openCart && <CartModal onCloseCart={closeCartHandler}/>}
  </ShopContextProvider>
  )}

export default App;
