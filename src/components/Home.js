import React, { useState } from 'react'

import Cart from './cart/Cart'
// import Products from './storeProduct/Products'

function Home({ dataProducts, dataCart }) {
  // const [products, setProducts] = useState(dataProducts)
  const [cart, setCart] = useState(dataCart)

  return (
    <div className="home">
      {/* <Products
        dataProducts={products}
        setProducts={setProducts}
        dataCart={cart}
        setCart={setCart}
      /> */}
      <Cart
        dataCart={cart}
        setCart={setCart}
        // dataProducts={products}
        // setProducts={setProducts}
      />
    </div>
  )
}

export default Home
