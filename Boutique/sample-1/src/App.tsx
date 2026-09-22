// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Layout/Navbar'
import { Footer } from './Layout/Footer'
import { CartProvider } from './context/CartContext'
import { Home } from './Pages/Home'
import { CollectionsLanding } from './Pages/CollectionsLanding'
import { CategoryPage } from './Pages/CategoryPage'
import { NewArrivalsLanding } from './Pages/NewArrivalsLanding'
import { NewArrivalsPage } from './Pages/NewArrivalsPage'
import { SalePage } from './Pages/SalePage'
import { ProductDetail } from './Pages/ProductDetail'
import { Cart } from './Pages/Cart'
import { Checkout } from './Pages/Checkout'
import { About } from './Pages/About'
import { Returns } from './Pages/Returns'
import { Contact } from './Pages/Contact'

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionsLanding />} />
          <Route path="/collections/:category" element={<CategoryPage />} />
          <Route path="/new-arrivals" element={<NewArrivalsLanding />} />
          <Route path="/new-arrivals/:audience" element={<NewArrivalsPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  )
}

export default App