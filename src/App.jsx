import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import TopProducts from './components/TopProducts'
import Advantages from './components/Advantages'
import Footer from './components/Footer'
import CartPage from './components/CartPage'
import './App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FeaturedProducts />
                <TopProducts />
                <Advantages />
              </>
            }
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App
