import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./footer.css";

function Footer() {
  return (
  


    <footer>
      <div className="container">

        <div className="footer-logo">
          <img src="/img/logo-white.png" alt="LabTech Logo" />
          <p>
            Providing high-quality laboratory equipment and medical supplies
            with reliability, innovation, and excellent customer service.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/allProducts">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Categories</h3>
          <ul>
            <li>Laboratory Equipment</li>
            <li>Medical Devices</li>
            <li>Safety Products</li>
            <li>Testing Kits</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <MdEmail />
            <span>labtech@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+20 1152503447</span>
          </div>

          <div className="contact-item">
            <IoLocationSharp />
            <span>Cairo, Egypt</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 LabTech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
