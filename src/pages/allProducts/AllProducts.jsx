import { useEffect, useState } from "react";
import Product from "../../component/slideProducts/Product";
import PageTransition from "../../component/PageTransition";
import "./allProducts.css";
import SlideProductLoading from "../../component/slideProducts/SlideProductLoading";

function AllProducts() {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(()=>{
      const fetchAllProducts = async ()=>{
        try{
          const res = await fetch(`https://dummyjson.com/products?limit=0`);
          if(!res.ok){
            throw new Error("Failed to fetch products")
          }
          const data = await res.json()
          setProducts(data.products)
        }catch(error){
          console.log("fetch error", error)
        }finally{
          setLoading(false)
        }
      }
      fetchAllProducts()
    },[])
    console.log(products);
    
  return (
    <PageTransition>
      <section className="all-products">
        <div className="container">
              <div className="page-header">
            <h1>All Products</h1>
            <p>
              Discover our collection of technology, accessories,
              skincare and lifestyle products.
            </p>
          </div>

         {loading?(
          <SlideProductLoading/>
         ):(
         
          <div className="show-products">
         { products.map((product)=>(
           <Product key={product.id}
           item={product}
           />
            ))}

          </div>
         )}
        </div>
      </section>
    </PageTransition>
  );
}


export default AllProducts