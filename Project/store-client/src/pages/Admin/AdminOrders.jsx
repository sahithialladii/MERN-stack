
import React, { useEffect, useRef, useState } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader2, Pencil, Plus, Trash, TriangleAlert, X } from 'lucide-react'
import { getOrders, addOrder } from '../../api/api'

const AdminOrders = () => {
  const [orders, setOrders] = useState(null)
  const [loading, setLoading] = useState(true)


  const [showAddOrder,setShowAddOrder]=useState(false)
  const uidRef=useRef('')
  const pidRef=useRef('')
  const totalRef=useRef('')
  const phoneRef=useRef('')
  const addressRef=useRef('')
  const orderedAtRef=useRef('')

  async function fetchData() {
    try {
      const res = await getOrders()
      if (res.status === 200) {
        setOrders(res.data)
      }

    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }


  const handleAddOrder=async(e)=>{
    e.preventDefault()
    const order={
      uid:uidRef.current.value,
      pid:pidRef.current.value,
      total:totalRef.current.value,
      phone:phoneRef.current.value,
      address:addressRef.current.value,
      orderedAt:orderedAtRef.current.value
    }
    try {
      const response=await addOrder(order)
      if(response.status===200){
        console.log("order added")
        setShowAddOrder(false)
        fetchData()
      }
    } catch (error) {
      console.error(error)
    }


  }


  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
          {/* animate-spin is used to spi the loader icon from lucide react */}
        </div>
      </>
    )
  }
  if (!orders || orders.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No Orders Available !
          </p>
        </div>
      </>
    )
  }
  return (
    <div className='w-full flex flex-col justify-start items-start'>
    <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
        <AdminPageHeader title='Orders' />
        <button className='w-10 h-10 font-bold flex justify-center items-center border-2 border-green-500 rounded-md
        text-green-500 shadow-md hover:text-white hover:bg-green-500 hover:shadow-md
        hover:shadow-green-400'
        onClick={()=>setShowAddOrder(!showAddOrder)}>
          <Plus className='w-8 h-8' />
        </button>
    </div>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-md font-bold text-purple-500 text-left rounded-md'>
          <tr>
            <th className='p-6 border-collapse border'>Userid</th>
            <th className='p-6 border-collapse border'>Productid</th>
            <th className='p-6 border-collapse border'>Total</th>
            <th className='p-6 border-collapse border'>Phone</th>
            <th className='p-6 border-collapse border'>Adress</th>
            <th className='p-6 border-collapse border'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order, index) => (
              <tr key={index}>
                <td className='p-4 border-collapse border'>{order.uid} </td>
                <td className='p-4 border-collapse border'>{order.pid}</td>
                <td className='p-4 border-collapse border'>{order.total}</td>
                <td className='p-4 border-collapse border'>{order.phone}</td>
                <td className='p-4 border-collapse border'>{order.address}</td>
                <td className='p-4 border-collapse border flex h-full w-full flex-row justify-start items-center gap-4'>
                  <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                    <Pencil />
                  </button>
                  <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                    <Trash />
                  </button>
                </td>

              </tr>
            ))
          }
        </tbody>
      </table>

      {showAddOrder && (
        <>
          <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
            <div className='h-[80%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
              <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                  <h1 className='w-1/2 text-left text-xl my-6 font-bold text-green-500'>Add Order</h1>
                  <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowAddOrder(!showAddOrder) }}>
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-4' onSubmit={handleAddOrder}>
                  <input ref={uidRef} type="text" name="" id="uid" placeholder='uid' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                  <input ref={pidRef} type="text" name="" id="pid" placeholder='pid' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                  <input ref={totalRef} type="text" name="" id="total" placeholder='total' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                  <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                  <input ref={addressRef} type="text" name="" id="address" placeholder='Address' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                  <input ref={orderedAtRef} type="" name="" id="orderedAt" placeholder='OrderedAt' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                  <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-green-400 bg-green-500 text-white rounded-sm outline-none">Add</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )

      }

    </div>
  )
}

export default AdminOrders