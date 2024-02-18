import React from 'react'
import Navbar from '../Navbar/Navbar'
import AdminProductList from '../admin/components/AdminProductList'
import Footer from '../common/Footer'

const AdminHome = () => {
  return (
    <div>
        <Navbar>
            <AdminProductList/>
        </Navbar>
        <Footer/>
    </div>
  )
}

export default AdminHome
