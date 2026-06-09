
import './bootstrap-5.1.3-dist/css/bootstrap.css'
import '../src/App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
