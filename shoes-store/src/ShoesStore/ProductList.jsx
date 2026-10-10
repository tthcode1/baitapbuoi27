import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ productsData, setStateModal }) {
  return (
    <div className="row">
      {productsData.map((product) => {
        return (
          <div className="col-4 mb-4" key={product.id}>
             {/* Gọi Component ProductItem và truyền props xuống như yêu cầu của hình */}
            <ProductItem item={product} setStateModal={setStateModal} />
          </div>
        );
      })}
    </div>
  );
}