import React from 'react'
import Navbar from"../Navbar/Navbar"
import ProductDetails from "../product/components/ProductDetails"

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetails />
      </Navbar>
    </div>
  )
}

export default ProductDetailPage
