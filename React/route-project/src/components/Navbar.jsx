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
            path:'/conatct'
        }
    ]
  return (
    <>
    <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center align-center'>
        <div className='w-[40%] flex justify-start items-center font-bold font-mono text-2xl text-purple-500'>
            Max Store
        </div>
        {/* <ul className='w-full flex flex-row justify-end items-center gap-8 font-semibold'>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
        </ul> */}
        <div className='w-full flex flex-row justify-end items-center gap-8 font-semibold'>
            {Linksdata.map((link,index)=>{
                <NavLink to={link.path}>

                </NavLink>
            })

            }

        </div>
    </div>
    </>
  )
}

export default Navbar