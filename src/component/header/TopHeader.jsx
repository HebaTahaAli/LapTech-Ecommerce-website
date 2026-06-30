import { Link } from "react-router";
import Logo from "../../img/logo.png"
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import "./header.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import SearchBox from "./SearchBox";

function TopHeader() {
  const { cartItems, favItems } = useContext(CartContext)
  return (
    <>
      <div className="top-header">
        <div className="container">
          <Link to="/" className="logo"><img src={Logo} alt="logo" /></Link>
            <SearchBox/>   

          <div className="header-icons">
           <Link to="/cart">
                <div className="icon">
              <MdOutlineShoppingCart />
              <span className="count">{cartItems.length}</span>
            </div>
           </Link>

           <Link to="/favorites">
            <div className="icon">
              <MdFavoriteBorder />
              <span className="count">{favItems.length}</span>
            </div>
           </Link>
          </div>




        </div>
      </div>
    </>
  )
}

export default TopHeader