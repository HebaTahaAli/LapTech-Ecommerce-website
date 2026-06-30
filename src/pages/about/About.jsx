import "./about.css";
import { MdSecurity, MdDeliveryDining } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsPatchCheckFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { AiFillGift } from "react-icons/ai";
import { Link } from "react-router-dom";

const features = [
    {
        icon: <MdDeliveryDining />,
        title: "Fast Delivery",
        desc: "Quick and reliable shipping to get your favorite products delivered on time.",
    },
    {
        icon: <MdSecurity />,
        title: "ecure Shopping",
        desc: "Safe payments and protected transactions for a worry-free experience.",
    },
    {
        icon: <RiCustomerService2Fill />,
        title: "24/7 Support",
        desc: "Our support team is always available to help with your questions and orders.",
    },
    {
        icon: <BsPatchCheckFill />,
        title: "Quality Products",
        desc: "Carefully selected products from trusted brands to ensure the best quality.",
    },
    {
        icon: <HiSparkles />,
        title: "Latest Trends",
        desc: "Discover the newest technology, beauty, and lifestyle products in one place.",
    },
    {
        icon: <AiFillGift />,
        title: "Special Offers",
        desc: "Enjoy exclusive deals, discounts, and seasonal promotions throughout the year.",
    },
]
function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="about-hero">
                    <img src="/img/about-cover.jpg" alt="our-store" />
                    <div className="description">
                        <h2>About Our Store</h2>
                        <p>We bring together technology, <br/>beauty, and everyday essentials in one trusted shopping destination.</p>
                       <Link to="/allProducts">
                       <button className="btn">Shop Now</button>
                       </Link> 
                    </div>
                </div>
                <div className="about-story">
                    <img src="/img/about-store.jpg" alt="our-store" />
                    <div className="description">
                        <h2>Our Story</h2>
                        <p>Our journey started with a simple goal:
                            to make online shopping easier, faster, and more reliable.
                            Today we offer a wide range of products including technology, skincare, fashion, and daily essentials while maintaining quality and customer satisfaction.</p>
                    </div>
                </div>
                <div className="about-info">
                    <h2>Why Choose Us</h2>
                    <p className="cta-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi distinctio a eius, libero magnam alias beatae ad laborum fugiat placeat.</p>
                    <div className="about-card">
                        {features.map((feature, index) => (
                            <div className="cart" key={index}>
                                <span>{feature.icon}</span>
                                <h4>{feature.title}</h4>
                                <p>{feature.desc}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="about-action">
                    <h2>Ready To Explore Our Products?</h2>
                    <p>Discover the latest technology, skincare, and lifestyle products all in one place.</p>
                    <Link to="/allProducts">
                    <button className="btn">Start Shopping</button>
                    
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default About