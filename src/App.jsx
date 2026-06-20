
import './bootstrap-5.1.3-dist/css/bootstrap.css'
import '../src/App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import CartProvider from './context/CartContext'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/products/:id' element={<ProductDetails />} />
            </Routes>
          </div>
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
