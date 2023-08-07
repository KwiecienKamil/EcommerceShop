import React, { useContext } from 'react'
import {CiCircleRemove} from 'react-icons/ci'
import { ShopContext } from '../context/shop-context'

const CartModal = (props) => {
    const {cartItems, removeFromCart} = useContext(ShopContext)

    const totalPrice = cartItems
    .map((product) => product.price * product.quantity)
    .reduce((total, value) => total + value, 0);
    
  return (
    <div className='absolute top-[90px] right-0 h-4/5 w-[500px] pt-16 px-4 bg-slate-700 text-black overflow-auto'>
      <div className="max-h-[548px] overflow-auto flex flex-col gap-[5px] items-center">
      {cartItems.map(item => (
        <div className='py-4 px-2 flex items-center justify-between gap-[5px] w-full bg-white rounded-lg'>
          <p>x{item.quantity}</p>
          <img src={item.image} alt="product-image" className='max-h-[100px]' />
          <p className='text-sm'>{item.title}</p>
          <p>{`${(item.price * item.quantity).toFixed(2)}$`}</p>
          <button onClick={() =>removeFromCart(item)}><CiCircleRemove size='2em' className='hover:text-red-500 duration-300'/></button>
        </div>
      ))}
      </div>
      <div className="absolute bottom-0 w-full flex items-center justify-between px-8 py-4">
        <div>
        <button onClick={props.onCloseCart} className='px-2 py-2 bg-red-700 text-white font-bold rounded-full  hover:opacity-75 duration-300 ease-out'>Close</button>
        </div>
        <div className="flex items-center gap-8 text-white font-bold">
          <p className='text-lg'>{`${totalPrice.toFixed(2)}$`}</p>
        <button className='px-2 py-2 bg-logoBlue text-white font-bold rounded-full  hover:opacity-75 duration-300 ease-out'>Order</button>
        </div>
      </div>
    </div>
  )
}

export default CartModal
