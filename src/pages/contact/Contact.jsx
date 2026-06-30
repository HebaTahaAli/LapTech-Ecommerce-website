import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you,
             Send us a message anytime.</p>
        </div>

        <div className="contact-info">
          <div className="contact-info-item">
            <IoLocationSharp />
            <div>
              <h4>Location</h4>
              <p>Cairo, Egypt</p>
            </div>
          </div>

          <div className="contact-info-item">
            <MdEmail />
            <div>
              <h4>Email</h4>
              <p>support@labtech.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+20 1152503447</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"> </textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
