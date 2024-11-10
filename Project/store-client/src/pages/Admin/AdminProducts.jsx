import React from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Pencil, Trash } from 'lucide-react'

const AdminProducts = () => {
  return (
    <>
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <AdminPageHeader title='Products'/>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-sm font-bold text-purple-500 text-left'>

        <tr >
          <th className='p-6 border-collapse border'>Title</th>
          <th className='p-6 border-collapse border'>Price</th>
          <th className='p-6 border-collapse border'>Actions</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-6 border-collapse border'>Product1</td>
            <td className='p-6 border-collapse border'>10000</td>
            <td className='p-4 border-collapse border flex h-full w-full flex-row justify-start items-center gap-4'>
              <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                <Pencil />
              </button>
              <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                <Trash />
              </button>
            </td>
          </tr>
          <tr>
            <td className='p-6 border-collapse border'>Product2</td>
            <td className='p-6 border-collapse border'>20000</td>
            <td className='p-4 border-collapse border flex h-full w-full flex-row justify-start items-center gap-4'>
              <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                <Pencil />
              </button>
              <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                <Trash />
              </button>
            </td>
          </tr>
          <tr>
            <td className='p-6 border-collapse border'>Product3</td>
            <td className='p-6 border-collapse border'>30000</td>
            <td className='p-4 border-collapse border flex h-full w-full flex-row justify-start items-center gap-4'>
              <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                <Pencil />
              </button>
              <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                <Trash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default AdminProducts