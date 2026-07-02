import { useContext } from "react";
import { CartContext } from "../../component/context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import "./cart.css";
import PageTransition from "../../component/PageTransition";
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, increaseFunc, decreaseFunc, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <PageTransition>
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
                        <button onClick={() => decreaseFunc(item.id)}>-</button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => increaseFunc(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                  <button className="delete-item" onClick={() => removeFromCart(item.id)}>
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
              <Link to="/checkout" className="btn">
    Checkout
</Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
