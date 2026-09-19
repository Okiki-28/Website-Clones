import { Navbar } from "./Layout/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from "./Pages/Home";
import {Menu} from "./Pages/Menu";
import {Contact} from "./Pages/Contact";
import { About } from "./Pages/About";
import { Footer } from "./Layout/Footer";


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
