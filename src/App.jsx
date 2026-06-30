import { Route, Routes } from "react-router-dom"
import BtmHeader from "./component/header/BtmHeader"
import TopHeader from "./component/header/TopHeader"
import Home from "./pages/home/Home"
import ProductDetails from "./pages/productDetails/ProductDetails"
import Cart from "./pages/cart/Cart"
import { Toaster } from "react-hot-toast"
import ScrollTop from "./component/ScrollTop"
import { AnimatePresence } from "motion/react"
import CategoryPage from "./pages/category/CategoryPage"
import SearchResults from "./pages/SearchResaulves"
import Favorites from "./pages/favorites/Favorites"
import Footer from "./component/footer/Footer"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import AllProducts from "./pages/allProducts/AllProducts"
import NotFound from "./pages/notFound/NotFound"
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register"

function App() {

  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <ScrollTop />
      <AnimatePresence mode="wait">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </AnimatePresence>
      <Footer/>
    </>
  )
}

export default App
