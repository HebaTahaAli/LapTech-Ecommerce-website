import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import SlideProduct from "../../component/slideProducts/SlideProduct";
import Loading from "./Loading";
import SlideProductLoading from "../../component/slideProducts/SlideProductLoading";
import ProductDetailsImages from "./ProductDetailsImages";
import ProductDetailsInfo from "./ProductDetailsInfo";
import PageTransition from "../../component/PageTransition";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(true);

  const [relatedProduct, setRelatedProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!res.ok) {
          setProduct(null);
          return;
        }

        const data = await res.json();

        // لو المنتج غير موجود
        if (data.message) {
          setProduct(null);
          return;
        }

        setProduct(data);
      } catch (error) {
        console.log("fetch product error:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product?.category) return;

    setDetailsLoading(true);

    fetch(
      `https://dummyjson.com/products/category/${product.category}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch related products");
        }

        return res.json();
      })
      .then((data) => {
        setRelatedProduct(data.products || []);
      })
      .catch((error) => {
        console.log("fetch related products error:", error);
      })
      .finally(() => {
        setDetailsLoading(false);
      });
  }, [product?.category]);

  return (
    <PageTransition key={id}>
      <div>
        {loading ? (
          <Loading />
        ) : !product ? (
          <div className="container">
            <h2>Product Not Found</h2>
          </div>
        ) : (
          <>
            <div className="item-details">
              <div className="container">
                <ProductDetailsImages product={product} />
                <ProductDetailsInfo product={product} />
              </div>
            </div>

            {detailsLoading ? (
              <SlideProductLoading />
            ) : (
              <SlideProduct
                key={product.category}
                title={product.category}
                data={relatedProduct}
              />
            )}
          </>
        )}
      </div>
    </PageTransition>
  );
}