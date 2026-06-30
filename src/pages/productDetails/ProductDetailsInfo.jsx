import { FaHeart, FaShare } from "react-icons/fa";
import { IoStarSharp, IoCartOutline } from "react-icons/io5";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../component/context/CartContext";
import { useContext } from "react";
import toast from "react-hot-toast";

export default function ProductDetailsInfo({ product }) {

    const { cartItems, addCart, addFav, favItems, removeFavItem } = useContext(CartContext);
     const isInCart = cartItems.some((i) => i.id === product.id);
    const navigate = useNavigate()

  const handelToast = () => {
    addCart(product);
    toast.success(
      <div className="toast-wrapper">
        <div className="toast-img">
          <img src={product.images[0]} alt={product.title} />
        </div>
        <div className="toast-content">
          <strong>{product.title}</strong>
          <p>Add to cart</p>
          <div className="btn-toast">
            <button className="btn" onClick={() => navigate("/cart")}>view cart</button>
          </div>
        </div>
      </div>,
      { duration: 3000 },
    );
  };

      const isInFav = favItems.some((i) => i.id === product.id);

  const handelAddFav = () => {
    if (isInFav) {
      removeFavItem(product.id);
      toast.error(`${product.title}, REmoved From Favorites`)
    } else {
      addFav(product);
      toast.success(`${product.title} , Add to favorites`)
    }
  }




    return (
        <div className="details-items">
            <h1>{product.title}</h1>
            <div className="stars">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <FaRegStarHalfStroke />
            </div>
            <p className="desc">{product.description}</p>
            <span>{product.availabilityStatus}</span>
            <h5 className="stock">
                Hurry Up! Only <span>{product.stock}</span> products left in
                stock.
            </h5>
            <button className={`btn ${isInCart ? "incart" : ""}`} onClick={handelToast}>
               {isInCart? "Item in cart" : "Add to card"}
                <IoCartOutline />
            </button>
            <div className="icons">
                <span className={`${isInFav ? "in-fav" : "" }`} onClick={handelAddFav}>
                    <FaHeart />
                </span>
                <span>
                    {" "}
                    <FaShare />
                </span>
            </div>
        </div>
    )
}
