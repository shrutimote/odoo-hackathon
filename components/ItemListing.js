import React from 'react';
import '../styles/ItemListing.css'; // make sure path matches your folder structure

const ItemListing = () => {
  return (
    <div className="item-page">
      {/* Header */}
      <div className="item-header">
        <h1 className="item-title">Item Listing</h1>
      </div>

      {/* Search bar */}
      <div className="item-search-bar">
        <input type="text" placeholder="Search..." className="item-search-input" />
        <button className="item-search-button">🔍</button>
      </div>

      {/* Product Content */}
      <div className="item-content">
        {/* Main Product Image */}
        <div className="main-product-image">
          <div className="image-placeholder">Product Image</div>
        </div>

        {/* Product Description */}
        <div className="product-description-box">
          <h2>Product Name</h2>
          <p>Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula, nulla at convallis...</p>
        </div>
      </div>

      {/* Product Images Thumbnails */}
      <div className="product-thumbnails">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="thumbnail-box">Image</div>
        ))}
      </div>
    </div>
  );
};

export default ItemListing;
