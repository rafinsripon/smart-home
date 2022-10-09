import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';

export const ProductContex = createContext([]);
export const CartContext = createContext([]);

const Root = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    // console.log(products);
    return (
        <ProductContex.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <Header />
                <Outlet />
            </CartContext.Provider>
        </ProductContex.Provider>
    );
};

export default Root;