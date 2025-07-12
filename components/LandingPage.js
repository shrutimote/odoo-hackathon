import React from "react";
import '../styles/LandingPage.css'; // import the CSS file

const LandingPage = () => {
  const categories = ["Men", "Women", "Kids", "Accessories", "Footwear", "Winter Wear"];

  return (
    <div className="landing-container">
      {/* Top Bar */}
      <div className="top-bar">
        <h1 className="logo">ReWear</h1>
        <button className="login-button">Login</button>
      </div>

      {/* Search */}
      <input className="search-bar" placeholder="Search for clothes..." />

      {/* Featured Section */}
      <div className="featured-section">
        <p>Images Carousel / Featured Items</p>
      </div>

      {/* Categories */}
      <h2 className="section-title">Categories</h2>
      <div className="categories-grid">
        {categories.map((cat, i) => (
          <div className="category-card" key={i}>{cat}</div>
        ))}
      </div>

      {/* Product Listings */}
      <h2 className="section-title">Product Listings</h2>
      <div className="products-grid">
        {[...Array(8)].map((_, i) => (
          <div className="product-card" key={i}>
            <p>Product {i + 1}</p>
            <p className="product-detail">[Image + Details]</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
