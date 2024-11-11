import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Cart icon
import { Link } from 'react-router-dom'; // For navigation


function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <h1>Shop</h1>
      </div>
      <nav className="navigation">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <div className="cart">
        <FaShoppingCart className="cart-icon" />
        <p>Cart</p>
      </div>
    </header>
  );
}

export default Header;
