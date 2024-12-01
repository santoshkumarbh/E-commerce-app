import React from "react";
import "../styles/ProductList.css";

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p>{product.description.slice(0, 100)}...</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
