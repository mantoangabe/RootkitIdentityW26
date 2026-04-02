import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LogoutPage from './pages/LogoutPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route
            path="/product/:rootbeerName/:rootbeerId/:currentRetailPrice"
            element={<ProductPage />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logout" element={<LogoutPage />} />

        </Routes>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
