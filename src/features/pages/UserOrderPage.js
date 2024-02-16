import React from 'react'
import Navbar from '../Navbar/Navbar'
import UserOrders from '../user/components/userOrders'

const UserOrderPage = () => {
  return (
    <div>
      <Navbar>
        <h1 className='mx-auto text-2xl'>My Orders</h1>
        <UserOrders></UserOrders>
      </Navbar>
    </div>
  )
}

export default UserOrderPage;
