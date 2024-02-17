import React from 'react'
import Navbar from '../Navbar/Navbar'
import AdminOrders from '../admin/components/AdminOrder'

const AdminOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <AdminOrders/>
      </Navbar>
    </div>
  )
}

export default AdminOrdersPage
