import { configureStore } from '@reduxjs/toolkit'
import  userslice  from './reducers/Userslice'
import  cartslice  from './reducers/Cartslice'
import  productslice  from './reducers/Productslice'

export const store = configureStore({
  reducer: {
    userReducer: userslice,
    cartReducer: cartslice,
    productReducer:productslice,
  },
})