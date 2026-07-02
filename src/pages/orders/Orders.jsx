import "./orders.css";
import { useContext } from "react";
import { AuthProvider } from "../../component/context/AuthContext";
export default function Orders() {

    const { user } = useContext(AuthProvider);

    const orders =
        (JSON.parse(localStorage.getItem("orders")) || []).filter(
            order => order.userEmail === user.email
        );

    return (
        <section className="orders-page">

            <div className="container">

                <h1>My Orders</h1>

                {orders.length === 0 ? (

                    <div className="empty-orders">

                        <h2>No Orders Yet</h2>

                        <p>Place your first order.</p>

                    </div>

                ) : (

                    orders
                        .slice()
                        .reverse()
                        .map((order, index) => (

                            <div
                                className="order-card"
                                key={order.id}
                            >

                                <div className="order-header">

                                    <div>
                                        <h3>Order #{orders.length - index}</h3>
                                        <span>{order.date}</span>
                                    </div>

                                    <div className="status pending">
                                        {order.status}
                                    </div>

                                </div>

                                <div className="order-products">

                                    {order.items.map((item) => (

                                        <div
                                            className="order-item"
                                            key={item.id}
                                        >

                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                            />

                                            <div>

                                                <h4>{item.title}</h4>

                                                <p>

                                                    ${item.price} ×{" "}
                                                    {item.quantity || 1}

                                                </p>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                                <div className="order-footer">

                                    <h3>
                                        Total :
                                        <span>
                                            ${order.total.toFixed(2)}
                                        </span>
                                    </h3>

                                </div>

                            </div>

                        ))

                )}

            </div>

        </section>
    );
}