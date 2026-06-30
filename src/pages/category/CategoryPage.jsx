import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../component/slideProducts/Product";
import "./category.css";
import SlideProductLoading from "../../component/slideProducts/SlideProductLoading";
import PageTransition from "../../component/PageTransition";

function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  useEffect(() => {
    setCategoryLoading(true);

    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCategoryLoading(false);
      });
  }, [category]);

  return (
    <PageTransition key={category}>
      <div className="category-products">
        {categoryLoading ? (
          <SlideProductLoading key={category} />
        ) : (
          <div className="container">
            <div className="top-slide">
              <h2>
                {category} : {categoryProducts.limit}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, voluptates?
              </p>
            </div>
            <div className="products">
              {categoryProducts.products?.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default CategoryPage;
