import React, { useRef, useState } from 'react'
import { AddProduct } from '../../api/api'
import {  PackagePlusIcon, X } from 'lucide-react'

const AdminTopBar = () => {
  const [showProduct,setShowProduct]=useState(false)
    // const emailRef=useRef('')
    // const passwordRef=useRef('')
    const handleLogin=async(e)=>{
      e.preventDefault()
      const credentials={
          email:emailRef.current.value,
          password:passwordRef.current.value
      }
      try{
        const response=await AddProduct(credentials)
        const data=await JSON.stringify(response.data)
        if(response.status===200){
            console.log("Login Success"+response.data.token)
        }else{
            console.log("Login Error"+data)
        }
    }catch(error){
        console.log(error)
    }
    console.log(credentials)
}
  return (
    <>
    <div className='w-full h-full shadow-purple-400 shadow-sm flex justify-end items-center px-4'>
    <button className="h-8 w-8 flex justify-center items-center   border-black hover:border-purple-500 hover:text-purple-500 ml-4 shadow-md"
                    onClick={()=>{setShowProduct(!showProduct)}}>
                      <PackagePlusIcon className='h-6 w-6'/>
                    </button>
                    </div>
                    {showProduct && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-1/2 w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left my-6 font-bold text-purple-500'>Add Product</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowProduct(!showProduct) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-6' onSubmit={handleLogin}>
                                <input  type="" name="" id="product-name" placeholder='ProductName' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input  type="" name="" id="price" placeholder='Price' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <button type="submit" className="w-full h-[3rem] shadow-sm bg-purple-500 text-white rounded-sm outline-none">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            )
            }
                      </>
  )
}

export default AdminTopBar