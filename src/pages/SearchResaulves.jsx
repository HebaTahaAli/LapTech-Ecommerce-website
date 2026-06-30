import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../component/PageTransition";
import Product from "../component/slideProducts/Product";
import SlideProductLoading from "../component/slideProducts/SlideProductLoading";

function SearchResults() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const query = new URLSearchParams(useLocation().search).get("query");
    
    useEffect(() => {
        const fetchResault = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${query}`,
                );
                const data = await res.json();
                setResults(data.products || []);
            } catch (error) {
                console.log("Search error", error);
            } finally {
                setLoading(false);
            }
        };
        if (query) fetchResault();
    }, [query]);



    return (
        <PageTransition key={query}>
            <div className="search-results-page">
                {loading ? (
                    <SlideProductLoading key={query} />
                ) : results.length > 0 ?
                    (
                        <div className="container">
                            <div className="top-slide">
                                <h2>
                                    Result for : {query}
                                </h2>
                            </div>
                            <div className="search-products">
                                {results.map((item, index) => (
                                    <Product item={item} key={index} />
                                )

                                )}
                            </div>
                        </div>
                    )
                    : (<div className="container"><p>Result Not found</p></div>)
                }
            </div>
        </PageTransition>
    );
}

export default SearchResults;
