import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";

import toast from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/allProducts",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export default function BtmHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthProvider);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // ===============================
  // Close Menu After Navigation
  // ===============================

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCategoryOpen(false);
  }, [location]);

  // ===============================
  // Fetch Categories
  // ===============================

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await fetch(
          "https://dummyjson.com/products/categories"
        );

        const data = await res.json();

        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getCategories();
  }, []);

  // ===============================
  // Functions
  // ===============================

  function closeMenus() {
    setIsMenuOpen(false);
    setIsCategoryOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function toggleCategories() {
    setIsCategoryOpen((prev) => !prev);
  }

  function handleLogout() {
    logout();

    toast.success("Logged out Successfully");

    closeMenus();

    navigate("/");
  }

  // ===============================
  // JSX
  // ===============================

  return (
    <div className="btm-header">
      <div className="container">

        {/* Mobile Menu */}

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IoClose />
          ) : (
            <HiOutlineMenuAlt3 />
          )}
        </button>

        {/* Navigation */}

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>

          {/* Categories */}

          <div className="category-nav">

            <button
              type="button"
              className="category-btn"
              onClick={toggleCategories}
            >
              <TiThMenu />

              <p>Browse Category</p>

              <IoMdArrowDropdown />
            </button>

            <div
              className={`category-nav-list ${
                isCategoryOpen ? "active" : ""
              }`}
            >
              {loading ? (
                <div className="loading-category">
                  Loading...
                </div>
              ) : (
                categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/category/${category.slug}`}
                    onClick={closeMenus}
                  >
                    {category.name}
                  </Link>
                ))
              )}
            </div>

          </div>

          {/* Nav Links */}

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
                  onClick={closeMenus}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Authentication */}

          <div className="auth-icons">

            {user ? (
              <>
                <Link
                  to="/profile"
                  className="user-info"
                  onClick={closeMenus}
                >
                  <HiOutlineUserCircle />

                  <span className="auth-title">
                    Hi, {user?.name?.split(" ")[0]}
                  </span>
                </Link>

                <button
                  type="button"
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  <FiLogOut />

                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  className="auth-link"
                  to="/login"
                  onClick={closeMenus}
                >
                  <PiSignInBold />

                  <span className="auth-title">
                    Login
                  </span>
                </Link>

                <Link
                  className="auth-link register"
                  to="/register"
                  onClick={closeMenus}
                >
                  <FaUserPlus />

                  <span className="auth-title">
                    Register
                  </span>
                </Link>
              </>
            )}

          </div>

        </nav>

      </div>
    </div>
  );
}