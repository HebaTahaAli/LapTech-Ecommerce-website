import { IoStarSharp, IoCartOutline } from "react-icons/io5";
import { FaHeart, FaShare } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";

export default function Product({ item }) {

  const {cartItems, addCart} = useContext(CartContext)
console.log(cartItems)

 const isInCart = cartItems.some(i=>i.id === item.id)
  return (
    <div className={`product ${isInCart? "incart": "" }`}>
      <Link to={`/products/${item.id}`}>
      <span className="state-cart"><FaCheck/>  in cart</span>
        <div className="img-product">
          <img src={item.images[0]} alt="image item" />
        </div>
      </Link>
        <p className="name-product">{item.title}</p>
        <div className="stars">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <FaRegStarHalfStroke />
        </div>
        <p className="price">
          $ {item.price}
        </p>
        <div className="icons">
          <span  className="btn-addcard" onClick={()=>{addCart(item)}}><IoCartOutline /></span>
          <span><FaHeart /></span>
          <span> <FaShare /></span>
        </div>
    </div>
  )
}

