import React, { Suspense, useEffect } from 'react'
import Productcard from '../components/Productcard';
import InfiniteScroll from "react-infinite-scroll-component";
import Useinfiniteproducts from '../utils/Useinfiniteproducts';

const Products = () => {

  const {products,hasMore,fetchedproducts}=Useinfiniteproducts();

  const renderproduct = products.map((product, index) =>
    <Productcard key={index} index={index} {...product} />
  );

  return (
    <div className='bg-zinc-900 min-h-screen w-full my-10 p-4 py-10 border border-amber-300 rounded'>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchedproducts}
        hasMore={hasMore}
        loader={<h4 className='text-center text-2xl text-amber-300 mb-4'>Loading...</h4>}
        endMessage={
          <p className="text-center text-white text-lg mt-10">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Suspense fallback={<h1 className='text-center text-5xl mt-20 text-amber-300'>LOADING...</h1>}>
          <div className='flex flex-wrap justify-center gap-10'>
            {renderproduct}
          </div>
        </Suspense>
      </InfiniteScroll>
    </div>
  )
}

export default Products;
