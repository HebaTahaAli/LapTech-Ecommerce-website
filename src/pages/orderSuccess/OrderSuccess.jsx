import { Link } from "react-router-dom";
import "./orderSuccess.css";
import { FaCheckCircle } from "react-icons/fa";

export default function OrderSuccess() {
  return (
    <section className="success-page">
      <div className="container">

        <FaCheckCircle className="success-icon" />

        <h1>Order Placed Successfully</h1>

        <p>
          Thank you for your purchase.
          Your order has been received successfully.
        </p>

        <div className="success-btns">

          <Link to="/orders" className="btn">
            View Orders
          </Link>

          <Link to="/" className="btn home-btn">
            Continue Shopping
          </Link>

        </div>

      </div>
    </section>
  );
}