import React, { useState } from 'react';
import ProductList from './ProductList';
import Modal from './Modal';
import dataJson from './data.json'; 

export default function ShoesStore() {
  // Tương đương với: this.state.productDetail
  const [productDetail, setProductDetail] = useState(dataJson[0]);

  // Tương đương với: this.setStateModal
  const setStateModal = (product) => {
    setProductDetail(product);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Thanh menu bên trái */}
        <div className="col-3">
          <ul className="list-group list-group-flush border">
            <li className="list-group-item fw-light">Home</li>
            <li className="list-group-item fw-bold">Shop</li>
          </ul>
        </div>
        
        {/* Khu vực danh sách sản phẩm bên phải */}
        <div className="col-9">
          <h2 className="text-center mb-4 fw-light">Shoes shop</h2>
          
          {/* Tương đương với đoạn <ProductList ... /> trong hình yêu cầu */}
          <ProductList productsData={dataJson} setStateModal={setStateModal} />
        </div>
      </div>

      {/* Tương đương với đoạn <Modal ... /> trong hình yêu cầu */}
      <Modal content={productDetail} />
    </div>
  );
}