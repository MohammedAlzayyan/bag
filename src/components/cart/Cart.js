import React from 'react'
import CartList from './CartList'

import './Cart.css'

function Cart({ dataCart, setCart, dataProducts, setProducts }) {
  //   useEffect(() => {
  //     setCart(dataCart)
  //   }, [cart])

  const totalPrice = () => {
    let total = 0
    for (const item of dataCart) {
      total += item.price * item.quantity
    }
    return total.toFixed(2)
  }

  // const handleProduct = (id) => {
  //   let product = dataProducts.find((e) => e.id === id)
  //   let quantity = product.quantity - 1
  //   const newProducts = dataProducts.map((p) =>
  //     p.id === id ? { ...p, quantity } : p,
  //   )
  //   setProducts(newProducts)
  // }

  const totalCart = () => {
    let total = 0
    for (const item of dataCart) {
      total += item.quantity
    }
    return total
  }

  return (
    <div className="cart">
      <h4>Total cart: {totalCart()}</h4>
      <h1 className="title">My BAG</h1>
      {dataCart.length === 0 ? (
        <p className="emptyCart">is currently empty</p>
      ) : (
        <div>
          <CartList
            products={dataCart}
            onRemoveProduct={(id) => {
              const newCarts = dataCart.filter((product) => product.id !== id)
              setCart(newCarts)
            }}
            onIncreaseQuantity={(id, quantity) => {
              const newCarts = dataCart.map((product) =>
                product.id === id ? { ...product, quantity } : product,
              )
              setCart(newCarts)
              // handleProduct(id)
            }}
            onDecreaseQuantity={(id, quantity) => {
              const newCarts = dataCart.map((product) =>
                product.id === id ? { ...product, quantity } : product,
              )
              setCart(newCarts)
            }}
          />

          <hr className="line" />
          <div className="total">
            <p>Total</p>
            <p>{totalPrice()}</p>
          </div>
          <div className="clear-product">
            <button className="btn" onClick={() => setCart([])}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
