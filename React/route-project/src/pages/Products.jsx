import React from 'react'

const Products = () => {
  return (
    

<>



<div className='m-5 p-5 w-full h-[50%] flex flex-row justify-center items-end gap-10 '>


<div>  
<a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>
</a>
</div>




<div>

<a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900">
      <p className="tracking-wide">$189.99</p>

      <p className="text-xs uppercase tracking-wide">6 Colors</p>
    </div>
  </div>
</a>

</div>





<div>
<a href="#" className="group block">
  <img
    src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    alt=""
    className="h-[350px] w-full object-cover sm:h-[450px]"
  />

  <div className="mt-3 flex justify-between text-sm">
    <div>
      <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
        Small Headphones
      </h3>

      <p className="mt-1.5 text-pretty text-xs text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta quisquam
        voluptatem nemo.
      </p>
    </div>

    <p className="text-gray-900">$299</p>
  </div>
</a>
</div>

</div>


<div className=' flex justify-end '>

<a
  className="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
  href="#"
>
  <span
    className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
  >
    Find out more
  </span>

  <span
    className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
  >
    <svg
      className="size-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</a>

{/* Border */}

<a
  className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
  href="#"
>
  <span className="font-medium transition-colors group-hover:text-white"> Find out more </span>

  <span
    className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
  >
    <svg
      className="size-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</a>

</div>




</>
  )
}

export default Products