import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Link, useLocation } from "react-router-dom";

function SearchBox() {
  const [search, setSearch] = useState("");
  const [suggetions, setSuggetions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  function handelSearchBoxSubmit(e) {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
      setSuggetions([]);
    }
  }

  useEffect(() => {
    const fetchSuggetion = async () => {
      if (!search.trim()) {
        setSuggetions([]);
        return;
      }

      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${search}`
        );

        const data = await res.json();

        setSuggetions(data.products.slice(0, 5) || []);
      } catch (error) {
        console.log("fetch sugetion error", error);
        setSuggetions([]);
      }
    };

    const debounc = setTimeout(() => {
      fetchSuggetion();
    }, 300);

    return () => clearTimeout(debounc);
  }, [search]);

  useEffect(() => {
    setSuggetions([]);
  }, [location]);

  return (
    <div className="search-box-container">
      <form
        onSubmit={handelSearchBoxSubmit}
        className="search-box"
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for products"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">
          <FaSearch />
        </button>
      </form>

      {suggetions.length > 0 && (
        <ul className="suggetions">
          {suggetions.map((item) => (
            <li key={item.id}>
              <Link
                to={`/products/${item.id}`}
                onClick={() => setSuggetions([])}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                />

                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;