import React, { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <h1>E-commerce Product Page</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    
    </div>
  );
}

export default App;
