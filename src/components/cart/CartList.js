import React from 'react'
import CartCard from './CartCard'

function CartList({
  products,
  onRemoveProduct = (f) => f,
  onIncreaseQuantity = (f) => f,
  onDecreaseQuantity = (f) => f,
}) {
  return (
    <div className="cartList">
      {products.map((item) => (
        <CartCard
          key={item.id}
          product={item}
          onRemove={onRemoveProduct}
          onIncrease={onIncreaseQuantity}
          onDecrease={onDecreaseQuantity}
        />
      ))}
    </div>
  )
}

export default CartList
