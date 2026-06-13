import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";
import Logo from "../../img/logo.png"
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import "./header.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function TopHeader() {
  const { cartItems } = useContext(CartContext)
  return (
    <>
      <div className="top-header">
        <div className="container">
          <Link to="/" className="logo"><img src={Logo} alt="logo" /></Link>

          <form action="" className="search-box">
            <input type="text" name="search" id="search" placeholder="Search for products" />
            <button type="submit"> <FaSearch /></button>
          </form>

          <div className="header-icons">
           <Link to="/cart">
                <div className="icon">
              <MdOutlineShoppingCart />
              <span className="count">{cartItems.length}</span>
            </div>
           </Link>

            <div className="icon">
              <MdFavoriteBorder />
              <span className="count">0</span>
            </div>
          </div>




        </div>
      </div>
    </>
  )
}

export default TopHeader