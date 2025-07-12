import React from 'react';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <h1 className="page-title">Product Detail Page</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>

      {/* Main Section: Image Upload + Description */}
      <div className="main-section">
        {/* Image Upload Placeholder */}
        <div className="image-upload">
          <div className="upload-box">Add Images</div>
        </div>

        {/* Description Box */}
        <div className="description-box">
          <h3>Add Product Description</h3>
          <textarea placeholder="Enter product details here..." />
        </div>
      </div>

      {/* Status Button */}
      <div className="status-button">
        <button>Available / Swap</button>
      </div>

      {/* Previous Listings */}
      <h2 className="section-heading">Previous Listings:</h2>
      <div className="previous-listings">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="listing-card">
            Listing {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
