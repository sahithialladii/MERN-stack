import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const Linksdata=[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'Products',
            path:'/products'
        },
        {
            title:'Contact',
            path:'/contact'
        }
    ]
  return (
    <>
    <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center align-center'>
        <div className='w-[40%] flex justify-start items-center font-bold  text-2xl text-black-500'>
            Max Store
        </div>
        {/* <ul className='w-full flex flex-row justify-end items-center gap-8 font-semibold'>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
        </ul> */}
        <div className='w-[40%] h-full flex justify-end  items-center'>
            <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
            {Linksdata.map((link,index)=>(
                <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-purple-500 hover:text-white flex justify-center items-center rounded-sm'>
                    {link.title}
                </NavLink>
            ))

            }
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar