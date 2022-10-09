import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartContext } from '../layouts/Root';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakeDB';
import { toast } from 'react-toastify';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    // console.log(cart)
    const handleRemoveItem = id => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id);
        toast.warning('Product Removed!', {autoClose: 500, position: "top-center"});
    }
    //calculate total
    let total =0;
    for(const product of cart){
        total = total + product.price * product.quantity;
    }
    //remove all item all
    const handleRemoveALl = () => {
        if(cart.length){
            setCart([]);
            deleteShoppingCart();
            toast('🦄 wow! Order Placed', 
            {   autoClose: 500, 
                position: "top-center"
            });
        }else{
            toast.warning('🦄! Cart Already Empty', 
            {   autoClose: 500, 
                position: "top-center"
            });
        }
    }

    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
      <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
        <h2 className='text-xl font-semibold'>
          {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
        </h2>
        <ul className='flex flex-col divide-y divide-gray-700'>
         {
            cart.map(product => <CartItem 
                key={product.id} 
                product={product}
                handleRemoveItem={handleRemoveItem}/>)
         }
        </ul>
        <div className='space-y-1 text-right'>
          <p>
            Total amount: <span className='font-semibold'>{total}$</span>
          </p>
          <p className='text-sm text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className='flex justify-end space-x-4'>
          <Link to='/shop'>
            <button
              type='button'
              className='px-6 py-2 border rounded-full border-cyan-400'
            >
              Back <span className='sr-only sm:not-sr-only'>to shop</span>
            </button>
          </Link>
          <button
            onClick={handleRemoveALl}
            type='button'
            className='px-6 py-2 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800'
          >
            Place Order
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
    );
};

export default Cart;