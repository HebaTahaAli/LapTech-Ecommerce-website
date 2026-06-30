import { useContext } from "react"
import { CartContext } from "../../component/context/CartContext"
import PageTransition from "../../component/PageTransition"
import Product from "../../component/slideProducts/Product"

function Favorites() {

  const {favItems} = useContext(CartContext)


  return (
    <PageTransition>
          <div className="container">
                   <div className="top-slide">
                     <h2>
                       Your Favorites :
                     </h2>
                   </div>
                 {favItems.length === 0 ? (<p>Favorite still empty !</p>):( 
                   <div className="products">
                   {favItems.map((item)=>(
                    <Product item={item} key={item.id}/>  
                   ))}
                   </div>
                 )
                 }
                 </div>
    </PageTransition>
  )
}

export default Favorites