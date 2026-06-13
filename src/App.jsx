import { Route, Routes } from "react-router-dom"
import BtmHeader from "./component/header/BtmHeader"
import TopHeader from "./component/header/TopHeader"
import Home from "./pages/home/Home"
import ProductDetails from "./pages/productDetails/ProductDetails"
import Cart from "./pages/cart/Cart"

function App() {

  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>

    </>
  )
}

export default App
