import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Loading from "./assets/loading.svg";

// Pages
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import MyProducts from "./pages/myProducts/myProducts";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Register from "./pages/Register/Register";

// Components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Search } from "./pages/Search/Search";

const App = () => {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser) {
    return <img src={Loading} alt="Estado de carregamento." />
  }

  return (
    <div>
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route 
              path="/products"
              element={!user ? <Navigate to="/register" /> : <Products /> }
            />
            <Route 
              path="/search/:q"
              element={!user ? <Navigate to="/register" /> : <Search /> }
            />
            <Route 
              path="/services"
              element={!user ? <Navigate to="/register" /> : <Products /> }
            />
            <Route 
              path="/myproducts"
              element={user ? <MyProducts /> : <Navigate to="/login" />}
            />
            <Route 
              path="/login"
              element={user ? <Navigate to="/products" /> : <Login />}
            />
            <Route 
              path="/register"
              element={user ? <Navigate to="/products" /> : <Register />}
            />
            <Route 
              path="/about"
              element={<About />}
            />
            <Route 
              path="/myproducts/:id"
              element={user ? <ProductDetail/> : <Register />}
            />
            <Route 
              path="/myproducts/cart/ "
              element={user ? <Cart /> : <Navigate to="/login" />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App;