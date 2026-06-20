import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";
import Modal from "../components/Modal";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()
    const { addToCart, notification } = useCart();

    useEffect(() => {
        const foundProduct = getProductById(id)

        if (!foundProduct) {
            navigate('/');
            return;
        }

        setProduct(foundProduct)
    }, [id, navigate])

    return (
        <div className="page container">
            <Modal
                isOpen={!!notification}
                message={notification?.message}
                type={notification?.type}
                autoClose={true}
            />
            {!product ? (
                <p>{id ? 'Loading product...' : 'No product id in URL'}</p>
            ) : (
                <div className="pro-card card p-2">
                    <div className="product-img">
                        {product.image && (
                            <img src={new URL(`../images/${product.image}`, import.meta.url).href} alt={product.name} className="img-fluid" />
                        )}
                    </div>
                    <div className="pro-content">
                        <h2>{product.name}</h2>
                        <p className="text-primary fw-bold">${product.price}</p>
                        <p className="text-secondary">{product.description}</p>
                        <button className="btn btn-primary btn-sm" onClick={() => addToCart(product.id)}>Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    )
}