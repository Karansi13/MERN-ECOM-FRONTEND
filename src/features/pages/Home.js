import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductList from '../product/components/ProductList'

const Home = () => {
  return (
    <div>
        <Navbar>
            <ProductList/>
        </Navbar>
    </div>
  )
}

export default Home
