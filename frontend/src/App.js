import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">amazona</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <Link to='/signin'>Sign In</Link>
          </div>
        </header>
        <aside className="sidebar">
          <h5 className="sidebar-heading">Shopping Categories</h5>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li className="sidebar-item">
              <a href="index.html">Pants</a>
            </li>

            <li className="sidebar-item">
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Routes>
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/products/:id" element={<ProductScreen />} />
              <Route path="/" exact={true} element={<HomeScreen />} />
              <Route path="/cart/:id?" exact={true} element={<CartScreen />} />
            </Routes>
          </div>
        </main>
        <footer className="footer">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
