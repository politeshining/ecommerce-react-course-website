import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout, setMode } = useContext(AuthContext);

    return (
        <>
            <nav className="border-bottom shadow-sm">
                <div className="container navbar">
                    <Link to="/" className="h1 text-primary">ShopHub</Link>

                    <div className="navbar-links d-flex gap-3">
                        <Link to="/" className="navbar-link">Home</Link>
                        <Link to="/checkout" className="navbar-link">Cart</Link>
                    </div>

                    <div className="navbar-auth">
                        {!user ? (<div className="auth-links d-flex gap-3">
                            <Link to="/auth" className="btn btn-secondary btn-sm" onClick={() => setMode("login")}>Login</Link>
                            <Link to="/auth" className="btn btn-primary btn-sm" onClick={() => setMode("signup")}>Signup</Link>
                        </div>) : (
                            <div className="navbar-user text-secondary">
                                <span>Hello, {user.email}</span>
                                <button className="btn btn-secondary btn-sm" onClick={logout}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}