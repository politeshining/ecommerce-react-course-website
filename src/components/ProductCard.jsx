import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
    const imgSrc = new URL(`../images/${product.image}`, import.meta.url).href;

    return (
        <div className="card">
            <img className="img-fluid" src={imgSrc} alt={product.name} />
            <div className="product-content p-3">
                <h6 className="h6">{product.name}</h6>
                <p className="text-primary fw-bold">${product.price}</p>
                <div className="d-flex gap-2">
                    <Link className="btn btn-secondary">View Details</Link>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}