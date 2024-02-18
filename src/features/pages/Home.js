import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductList from '../product/components/ProductList'
import { Link } from 'react-router-dom'
import Footer from '../common/Footer'

const Home = () => {
  return (
    <div>
        <Navbar>
            <ProductList/>
        </Navbar>
        <Footer/>
    </div>
  )
}

export default Home
