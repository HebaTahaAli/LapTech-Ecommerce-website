import { Link } from "react-router-dom";
import "./notFound.css";

function NotFound() {
    return (
        <section className="not-found">
            <div className="container">
                <h1>404</h1>
                <h2>Oops! Page Not Found</h2>
                <p>
                    The page you are looking for doesn't exist or has been moved.
                </p>
               <Link to="/" className="back-home">Back To Home</Link>
            </div>
        </section>
    )
}

export default NotFound