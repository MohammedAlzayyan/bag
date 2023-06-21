import React, { useRef, useState } from 'react'

import Product from './Product'
import './Product.css'

function Products({ dataProducts, setProducts, dataCart, setCart }) {
  const [search, setSearch] = useState('')
  //   const [price, setPrice] = useState('')

  const price = useRef('')

  const requstProduct = (id) => {
    let product = dataProducts.find((e) => e.id === id)
    if (product.quantity > 0) {
      let quantity = product.quantity - 1
      if (quantity > 0) {
        const newProducts = dataProducts.map((p) =>
          p.id === id ? { ...p, quantity } : p,
        )
        setProducts(newProducts)

        let itemInCart = dataCart.find((e) => e.id === id)
        if (itemInCart) {
          quantity = itemInCart.quantity + 1
          console.log(quantity)
          const newCart = dataCart.map((c) =>
            c.id === id ? { ...c, quantity } : c,
          )
          setCart(newCart)
        } else {
          quantity = 1
          setCart([...dataCart, { ...product, quantity }])
        }
        alert('Product added successfully')
      } else {
        const avaliable = 'Not Avaliable'
        const newProducts = dataProducts.map((p) =>
          p.id === id ? { ...p, quantity, avaliable } : p,
        )
        setProducts(newProducts)
        alert('This product is not avaliable')
      }
    } else {
      const avaliable = 'Not Avaliable'
      const newProducts = dataProducts.map((p) =>
        p.id === id ? { ...p, avaliable } : p,
      )
      setProducts(newProducts)
      alert('This product is not avaliable')
    }
  }

  const filterProduct = () => {
    const filterData = dataProducts.filter((item) => {
      if (search === '') {
        return item
      } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return item
      } else if (!item.name.toLowerCase().includes(search.toLowerCase())) {
        return null
      }
      return null
    })
    // setProducts(filterData)
    // console.log(filterData.length)
    return filterData.length > 0 ? (
      filterData.map((p) => (
        <Product
          key={p.id}
          product={p}
          onSelectProduct={() => requstProduct(p.id)}
        />
      ))
    ) : (
      <p>Not Found Product</p>
    )
  }

  const filterFromPrice = () => {
    // console.log(parseInt(price.current.value))
    const filterData = dataProducts.filter((item) => {
      if (!price.current.value) {
        return item
      } else if (item.price === parseFloat(price.current.value)) {
        return item
      } else if (item.price !== parseFloat(price.current.value)) {
        console.log('price')
        return null
      }
    })
    // setProducts(filterData)
    console.log(filterData.length)
    return filterData.length > 0 ? (
      filterData.map((p) => (
        <Product
          key={p.id}
          product={p}
          onSelectProduct={() => requstProduct(p.id)}
        />
      ))
    ) : (
      <p>Not Found Product</p>
    )
  }

  return (
    <div className="products">
      <h1 className="title">Products</h1>
      <div class="wrapper">
        <div class="searchBar">
          <input
            id="searchQueryInput"
            type="text"
            name="searchQueryInput"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
            <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
              <path
                fill="#666666"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <div className="">
        <input
          ref={price}
          id="price"
          type="text"
          name="price"
          placeholder="0"
          //   onChange={(e) => setPrice(e.target.value)}
        />
        <button className="btn" onClick={() => filterFromPrice()}>
          Submit
        </button>
      </div> */}
      {filterProduct()}
    </div>
  )
}

export default Products
