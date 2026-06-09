import { getProducts } from "../data/products"
import ProductCard from "../components/ProductCard";

export default function Home() {
    const products = getProducts();
    return (
        <div className="container">
            <div className="home-hero text-center">
                <h1 className="h1">Welcome to ShopHub</h1>
                <p className="text-secondary">Discover amazing products at great prices</p>
            </div>

            <div className="container">
                <h3 className="h3">Our Products</h3>
                <div className="box">
                    {products.map((product) => {
                        return (
                            <ProductCard product={product} key={product.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}