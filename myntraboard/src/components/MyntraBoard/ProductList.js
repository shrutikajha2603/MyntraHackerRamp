import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          {product}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
