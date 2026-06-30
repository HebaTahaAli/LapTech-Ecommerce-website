import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import { useContext } from "react";
import { AuthProvider} from "../context/AuthContext";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";


const navLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Products", link: "/allProducts" },
  { title: "Contact", link: "/contact" },
];

function BtmHeader() {
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthProvider);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCategoryOpen(false);
  }, [location]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="btm-header">
      <div className="container">

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
        </button>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>

         
          <div className="category-nav">
            <div
              className="category-btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <TiThMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>

            <div
              className={`category-nav-list ${
                isCategoryOpen ? "active" : ""
              }`}
            >
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  onClick={() => {
                    setIsCategoryOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

         

          <ul className="nav-links">
            {navLinks.map((item) => (
              <li
                key={item.link}
                className={
                  location.pathname === item.link
                    ? "active"
                    : ""
                }
              >
                <Link
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>


        </nav>
         
          <div className="auth-icons">

  {user ? (
    <>
      <div className="user-info">
        <HiOutlineUserCircle />
        <span className="auth-title">{user.name}</span>
      </div>

      <button className="logout-btn" onClick={logout}>
        <FiLogOut />
        Logout
      </button>
    </>
  ) : (
    <>
      <Link className="auth-link" to="/login">
        <PiSignInBold />
        <span className="auth-title">Login</span>
      </Link>

      <Link className="auth-link register" to="/register">
        <FaUserPlus />
        <span className="auth-title">Register</span>
      </Link>
    </>
  )}

</div>

      </div>
    </div>
  );
}

export default BtmHeader;