import React from 'react'

function Product({ product, onSelectProduct = (f) => f }) {
  return (
    <div className="product" onClick={() => onSelectProduct(product.id)}>
      <div className="content-product">
        <div className="product-img">
          <img src={product.image} alt="Avatar" className="avatar-product" />
        </div>
        <div className="product-details">
          <h3>{product.name}</h3>
          <p>{product.price}$</p>
          <p>{product.description}</p>
        </div>
        <div className="product-quantity">
          <p>{product.quantity}</p>
          <p>{product.avaliable}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
