import React from 'react';

import { useSelector } from 'react-redux';

const Cart = () => {

    const selectedProducts = useSelector( state => state.selectedProducts.selectedProducts );

    return(
        <div className="absolute right-1 bottom-1 flex items-end h-9 w-9">
            
                <svg xmlns="http://www.w3.org/2000/svg" className="relative h-6 w-6 text-coolGray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>

               <div className="absolute top-1 right-0 flex justify-center items-center h-5 w-5 rounded-full text-coolGray-50 font-medium bg-rose-500">
                   <span>{selectedProducts.length}</span>
               </div>
        </div>
    )
};

export default Cart;