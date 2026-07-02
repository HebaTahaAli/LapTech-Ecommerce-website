import { useContext, useMemo, useState } from "react";
import { CartContext } from "../../component/context/CartContext";
import { AuthProvider } from "../../component/context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./checkout.css";

export default function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthProvider);

  const navigate = useNavigate();

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
  }, [cartItems]);

  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    country: "",
    city: "",
    address: "",
    payment: "Cash On Delivery",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.city ||
      !formData.address
    ) {
      toast.error("Please fill all fields");
      return;
    }

    const order = {
      id: Date.now(),
      customer: formData,
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
      status: "Pending",
    };

    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    clearCart();

    toast.success("Order Placed Successfully");

    navigate("/orders");
  }

  return (
    <section className="checkout-page">

      <div className="container">

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          <div className="billing-info">

            <h2>Billing Details</h2>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            <textarea
              rows="4"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option>Cash On Delivery</option>
              <option>Visa</option>
            </select>

          </div>

          <div className="order-summary">

            <h2>Order Summary</h2>

            {cartItems.map((item) => (

              <div
                className="checkout-item"
                key={item.id}
              >

                <span>{item.title}</span>

                <span>
                  ${item.price} × {item.quantity || 1}
                </span>

              </div>

            ))}

            <div className="checkout-total">

              <h3>Total</h3>

              <h3>${totalPrice.toFixed(2)}</h3>

            </div>

            <button className="btn">
              Place Order
            </button>

          </div>

        </form>

      </div>

    </section>
  );
}