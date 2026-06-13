import { useEffect, useState } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoStarSharp, IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import { FaHeart, FaShare } from "react-icons/fa";
import SlideProduct from "../../component/slideProducts/SlideProduct";
import Loading from "./Loading";
import SlideProductLoading from "../../component/slideProducts/SlideProductLoading";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log("fetch product ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const [detailsLoading, setDetailsLoading] = useState(true);
  const [relatedProduct, setRelatedProduct] = useState([]);
  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProduct(data.products);
      })
      .catch((error) => {
        console.log("fetch error", error);
      })
      .finally(() => {
        setDetailsLoading(false);
      });
  }, [product?.category]);

  console.log(relatedProduct);

  console.log(product);

  if (loading) return <Loading/>;
  if (!product) return <p>Not Found...</p>;
  return (
  
    <div>
      <div className="item-details">
        <div className="container">
          <div className="images-item">
            <div className="big-img">
              <img id="big-img" src={product.images[0]} alt={product.title} />
            </div>
             <div className="sm-imgs">
              {product.images.map((img, index) => (
           <div className="sm-img-content" key={index}>
                <img
                  
                  src={img}
                  alt={product.title}
                  onClick={() => (document.getElementById("big-img").src = img)}
                />
              </div>
              ))}
            </div>
          </div>
          <div className="details-items">
            <h1>{product.title}</h1>
            <div className="stars">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <FaRegStarHalfStroke />
            </div>
            <p className="desc">{product.description}</p>
            <span>{product.availabilityStatus}</span>
            <h5 className="stock">
              Hurry Up! Only <span>{product.stock}</span> products left in
              stock.
            </h5>
            <button className="btn">
              Add to card
              <IoCartOutline />
            </button>
            <div className="icons">
              <span>
                <FaHeart />
              </span>
              <span>
                {" "}
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      </div>

      {detailsLoading ? (
       <SlideProductLoading/>
      ) : (
        <SlideProduct
          key={product.category}
          title={product.category}
          data={relatedProduct}
        />
      )}
    </div>
  );
}
