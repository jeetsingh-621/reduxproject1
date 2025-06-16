import React from 'react'
import { useSelector } from 'react-redux'
import Productcard from '../components/Productcard';

const Products = () => {
  const products = useSelector((state=>state.productReducer.products));
  console.log(products);

  const renderproduct = products.map((product,index)=>Productcard(product,index))
  return ( products.length>0 ?<div className='bg-zinc-900 overflow-auto w-full my-10 p-4 py-10 flex gap-10 border border-amber-300 rounded h-full'>

    {renderproduct}

  </div>: <h1 className='text-6xl mt-20 text-center text-amber-300'>Loading....</h1>
  )
}

export default Products