import React from 'react'

function CartCard({ product, onRemove = (f) => f, onIncrease = (f) => f }) {
  return (
    <div className="cartCard">
      <div className="content">
        <div className="column content-img">
          <img src={product.image} alt={product.name} className="avatar" />
        </div>

        <div className="column content-details">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p className="remove-product" onClick={() => onRemove(product.id)}>
            remove
          </p>
        </div>

        <div className="column content-counter">
          <p
            className="increasing"
            onClick={() => onIncrease(product.id, product.quantity + 1)}
          >
            +
          </p>

          <p>{product.quantity}</p>

          <p
            className="decreasing"
            onClick={() =>
              product.quantity - 1 === 0
                ? onRemove(product.id)
                : onIncrease(product.id, product.quantity - 1)
            }
          >
            -
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartCard
