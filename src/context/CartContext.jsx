import { createContext, useContext, useState } from "react";
import { getProductById } from "../data/products";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])
    const [notification, setNotification] = useState(null)
    const { user } = useContext(AuthContext)

    function addToCart(productId) {
        // Check if user is logged in
        if (!user) {
            showNotification('You need to log in to add items to your cart.', 'warning')
            return;
        }

        // Check if item exists BEFORE updating state
        const existing = cartItems.find(item => item.id === productId);
        const isNewItem = !existing;

        setCartItems(prev => {
            const existing = prev.find(item => item.id === productId);
            if (existing) {
                // Item already in cart - don't increment, just return previous state
                return prev;
            }
            return [...prev, { id: productId, quantity: 1 }];
        });

        // Show notification
        const product = getProductById(productId);
        const message = isNewItem
            ? `${product.name} has been added to your cart!`
            : `${product.name} is already in your cart!`;

        showNotification(message, isNewItem ? "success" : "warning");
    }

    function showNotification(message, type = "info") {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    }

    function getCartItemsWithProducts() {
        return cartItems.map(item => ({
            ...item,
            product: getProductById(item.id)
        })).filter(item => item.product);
    }

    function removeFromCart(productId) {
        setCartItems(cartItems.filter(item => item.id !== productId))
    }

    const decreaseQuantity = (id) => {
        setCartItems(cartItems => cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
    }

    function updateQuantity(productId, quantity) {
        setCartItems(
            cartItems.map(item => item.id === productId ? { ...item, quantity } : item)
        )
    }

    function getCartTotal() {
        const total = cartItems.reduce((total, item) => {
            const product = getProductById(item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0)

        return total;
    }

    function clearCart() {
        setCartItems([])
    }

    return <CartContext.Provider value={{ cartItems, addToCart, getCartItemsWithProducts, removeFromCart, decreaseQuantity, updateQuantity, getCartTotal, clearCart, notification, showNotification }}>
        {children}
    </CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext)

    return context;
}