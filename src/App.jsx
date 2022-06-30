import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

// Pages
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Register from "./pages/Register/Register";

// Components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/services"b
            element={<Services />}
          />
          <Route 
            path="/products"
            element={<Products />}
          />
          <Route 
            path="/login"
            element={<Login />}
          />
          <Route 
            path="/register"
            element={<Register />}
          />
          <Route 
            path="/about"
            element={<About />}
          />
          <Route 
            path="/products/:id"
            element={<ProductDetail />}
          />
          <Route 
            path="/products/cart/ "
            element={<Cart />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;