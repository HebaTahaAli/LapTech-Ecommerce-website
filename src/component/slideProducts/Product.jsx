import { IoStarSharp, IoCartOutline } from "react-icons/io5";
import { FaHeart, FaShare } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Product({ item }) {
  const navigate = useNavigate()
  const { cartItems, addCart, addFav, favItems, removeFavItem } = useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === item.id);

  const handelToast = () => {
    addCart(item);
    toast.success(
      <div className="toast-wrapper">
        <div className="toast-img">
          <img src={item.images[0]} alt={item.title} />
        </div>
        <div className="toast-content">
          <strong>{item.title}</strong>
          <p>Add to cart</p>
          <div className="btn-toast">
            <button className="btn" onClick={() => navigate("/cart")}>view cart</button>
          </div>
        </div>
      </div>,
      { duration: 3000 },
    );
  };

  
  const isInFav = favItems.some((i) => i.id === item.id);

  const handelAddFav = () => {
    if (isInFav) {
      removeFavItem(item.id);
      toast.error(`${item.title}, REmoved From Favorites`)
    } else {
      addFav(item);
      toast.success(`${item.title} , Add to favorites`)
    }
  }

  return (
    <div className={`product ${isInCart ? "incart" : ""}`}>
      <Link to={`/products/${item.id}`}>
        <span className="state-cart">
          <FaCheck /> in cart
        </span>
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
      <p className="price">$ {item.price}</p>
      <div className="icons">
        <span className="btn-addcard" onClick={handelToast}>
          <IoCartOutline />
        </span>
        <span className={`${isInFav ? "in-fav" : "" }`} onClick={handelAddFav}  >
          <FaHeart />
        </span>
        <span>
          {" "}
          <FaShare />
        </span>
      </div>
    </div>
  );
}
