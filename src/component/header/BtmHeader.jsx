import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";


const navLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
]

function BtmHeader() {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }, [])


  return (
    <>
      <div className="btm-header">
        <div className="container">
          <nav className="nav">

            <div className="category-nav" >

              <div className="category-btn" onClick={() =>
                setIsCategoryOpen(!isCategoryOpen)}>
                <TiThMenu />
                <p>Browse Category</p>
                <IoMdArrowDropdown />
              </div>

              <div className={`category-nav-list ${isCategoryOpen ? "active" : ""}`} >
                {categories.map((category) => (<Link key={category.slug} to={category.slug}>{category.name}</Link>))}
              </div>
            </div>

            <div className="nav-links">
              {navLinks.map((item) => (
                <li key={item.link} className={location.pathname === item.link ? "active" : ""} ><Link to={item.link}>{item.title}</Link></li>

              ))}
            </div>


          </nav>

          <div className="sign-regs-icons">
            <Link to="/"><PiSignInBold /></Link>
            <Link to="/"><FaUserPlus /></Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default BtmHeader