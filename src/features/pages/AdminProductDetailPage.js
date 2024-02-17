import React from 'react'
import Navbar from"../Navbar/Navbar"
import AdminProductDetails from '../admin/components/AdminProductDetails'

const AdminProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <AdminProductDetails />
      </Navbar>
    </div>
  )
}

export default AdminProductDetailPage
