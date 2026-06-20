import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";


export default function Checkout() {
    const { getCartItemsWithProducts, decreaseQuantity, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart()
    const cartItems = getCartItemsWithProducts()
    const total = getCartTotal();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    function placeOrder() {
        setShowSuccessModal(true);
        clearCart();
    }

    const handleCloseModal = () => {
        setShowSuccessModal(false);
    }

    // Show modal first before checking if cart is empty
    if (showSuccessModal) {
        return (
            <div className="container">
                <Modal
                    isOpen={showSuccessModal}
                    onClose={handleCloseModal}
                    title="Order Placed Successfully!"
                    message="Your order has been placed successfully. Thank you for shopping with us!"
                    type="success"
                />
            </div>
        )
    }

    if (cartItems.length === 0) {
        return (
            <div className="container">
                <h1>Checkout</h1>
                <div className="card p-5 text-center shadow-sm">
                    <h4 className="mb-3">Your Cart is Empty</h4>
                    <p className="text-secondary mb-4">Looks like you haven't added any items to your cart yet. Start shopping to add items!</p>
                    <Link to="/" className="btn btn-primary">Continue Shopping</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <Modal
                isOpen={showSuccessModal}
                onClose={handleCloseModal}
                title="Order Placed Successfully!"
                message="Your order has been placed successfully. Thank you for shopping with us!"
                type="success"
            />
            <h1>Checkout</h1>

            <div className="checkout-container">
                <div className="card p-2 shadow-sm">
                    <h4 className="h5">Order Summary</h4>
                    {cartItems.map(item => (
                        <div key={item.id} className="checkout-item">
                            <img src={new URL(`../images/${item.product.image}`, import.meta.url).href} alt={item.product.name} />
                            <div className="item-details">
                                <h5 className="h6">{item.product.name}</h5>
                                <p className="item-price text-secondary">${item.product.price} each</p>
                            </div>

                            <div className="item-control">
                                <div className="quantity-control">
                                    <button className="btn" onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>-</button>
                                    <span className="bg-primary">{item.quantity}</span>
                                    <button className="btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <p className="text fw-bold">
                                    ${(item.product.price * item.quantity).toFixed(2)}
                                </p>
                                <button className="btn btn-outline-secondary btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="checkout-summary card p-2 shadow-sm">
                    <h5 className="h5">Total</h5>
                    <div className="checkout-total">
                        <p className="text-secondary">Subtotal</p>
                        <p className="text-secondary">${total.toFixed(2)}</p>
                    </div>
                    <div className="checkout-total">
                        <p className="text-secondary">Total</p>
                        <p className="text-primary fw-bold">${total.toFixed(2)}</p>
                    </div>
                    <hr />
                    <button className="btn btn-primary w-100" onClick={placeOrder}>Place Order</button>
                </div>
            </div>
        </div>
    )
}