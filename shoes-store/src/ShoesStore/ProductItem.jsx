import React from 'react';

export default function ProductItem({ item, setStateModal }) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{ fontSize: '1rem' }}>{item.name}</h5>
        <p className="card-text text-secondary">{item.price} $</p>
        
        {/* Nút add to carts gọi Modal và chạy hàm setStateModal */}
        <button 
          className="btn btn-dark" 
          data-bs-toggle="modal" 
          data-bs-target="#productModal"
          onClick={() => {
            setStateModal(item);
          }}
        >
          add to carts <i className="bi bi-cart"></i>
        </button>
      </div>
    </div>
  );
}