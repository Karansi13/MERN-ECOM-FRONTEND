import React from 'react'
import Navbar from '../Navbar/Navbar'
import AdminProductList from '../admin/components/AdminProductList'

const AdminHome = () => {
  return (
    <div>
        <Navbar>
            <AdminProductList/>
        </Navbar>
    </div>
  )
}

export default AdminHome
