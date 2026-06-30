
export default function ProductDetailsImages({ product }) {
    return (
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
    )
}
