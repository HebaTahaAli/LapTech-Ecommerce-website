import { useEffect, useState } from "react";
import HeroSection from "../../component/HeroSection";
import SlideProduct from "../../component/slideProducts/SlideProduct";
import "./home.css"
import SlideProductLoading from "../../component/slideProducts/SlideProductLoading";



const categories = [
  "smartphones",
  "laptops",
  "mens-watches",
  "mobile-accessories",
  "sunglasses",
  "laptops",
  "tablets",
  "smartphones",
  "womens-watches"
]
console.log(categories);


export default function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchingProducts = async () => {
      try {

        const results = await Promise.all(
          categories.map(async (category) => {

            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );

            const data = await res.json();
            return { [category]: data.products }

          })
        );

        const productsObj = Object.assign({}, ...results)
        setProducts(productsObj)

        console.log(results);

      } catch (error) {
        console.log("fetching error", error);

      } finally {
        setLoading(false)
      }
    };

    fetchingProducts();

  }, []);


  return (
    <div>
      <HeroSection />
      {loading ? (
           categories.map((category) => (
        <SlideProductLoading key={category} />
         ))
      ) : (
        categories.map((category) => (
          <SlideProduct key={category} title={category} data={products[category]} />
        ))


      )}



    </div>
  )
}
