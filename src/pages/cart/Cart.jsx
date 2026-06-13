import { useContext } from "react";
import { CartContext } from "../../component/context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import "./cart.css";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="checkout">
      <div className="order-summary">
        <h1>Order Summary</h1>
        <div className="items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="item-cart" key={index}>
                <div className="img-name">
                  <div className="img-item">
                    <img src={item.images[0]} alt={item.title} />
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p className="pric-item"> $ {item.price}</p>
                    <div className="quantity-control">
                      <button>-</button>
                      <span className="quantity">1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
                <button className="delete-item">
                  <FaRegTrashAlt />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="btn-summary">
          <div className="shop-table">
            <p>Total</p>
            <span className="total-checkout">$ {total.toFixed(2)}</span>
          </div>
          <div className="btn-div">
            <button type="submit"> Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
