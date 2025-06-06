import { Routes, Route } from 'react-router';
import Navbar from "./components/Navbar";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Products from './routes/Products';


function App() {


  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />

        </Routes>


      </div>

    </>
  )
}

export default App
