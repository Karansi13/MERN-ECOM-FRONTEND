import React from 'react'
import Navbar from"../Navbar/Navbar"
import ProductDetails from "../product/components/ProductDetails"
import Footer from '../common/Footer'

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetails />
      </Navbar>
      <Footer/>
    </div>
  )
}

export default ProductDetailPage
