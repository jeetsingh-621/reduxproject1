import React from 'react'
import { Link } from 'react-router-dom'

const Productcard = (product,index) => {
  return (
    <div key={index} className='w-[300px] border p-4'>

        <img className='w-full h-1/2 object-cover' src={product.image} alt="" />
        <div className='mt-3'>
        <h1 className='text-lg font-bold text-amber-300'>{product.title}</h1>
        <p>{product.description.slice(0,100)}...</p>
        <div className='flex items-center justify-between'>
            <p className='mt-2'>Rs. {product.price}</p>
            {/* <Link to=''>more info</Link> */}
            <button className='bg-blue-700 px-6 py-1 mt-3 items-center'>Add to Cart</button>
        </div>
            <Link className='mt-4 text-right block text-blue-300' to={`/product/${product.id}`}>More info</Link>

        </div>
    </div>
  )
}

export default Productcard