import React from 'react'
import AdminDashboardHomeCards from '../../components/Admin/AdminDashboardHomeCards'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'

const AdminDashboard = () => {
  return (
    <div>
      <AdminPageHeader title='Dashboard'/>
      <div className='h-full w-full flex justify-center items-center'>
      <AdminDashboardHomeCards />
      </div>
      </div>
  )
}

export default AdminDashboard