import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar border-bottom shadow-sm p-3">
                <Link to="/" className="h1 text-primary">ShopHub</Link>

                <div className="navbar-links d-flex gap-3">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/checkout" className="navbar-link">Checkout</Link>
                </div>

                <div className="navbar-auth">
                    <div className="auth-links d-flex gap-3">
                        <Link to="/auth" className="btn btn-secondary">Login</Link>
                        <Link to="/auth" className="btn btn-primary">Signup</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}