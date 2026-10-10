import React from 'react';

export default function Modal({ content }) {
  if (!content) return null;

  return (
    <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Thông tin chi tiết sản phẩm</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-4">
                <img src={content.image} alt={content.name} className="img-fluid" />
              </div>
              <div className="col-8">
                <h4>{content.name}</h4>
                <p className="fs-5 text-danger fw-bold">{content.price} $</p>
                <p><strong>Mô tả:</strong> {content.description}</p>
                <p><strong>Kho:</strong> {content.quantity} sản phẩm</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          </div>
        </div>
      </div>
    </div>
  );
}