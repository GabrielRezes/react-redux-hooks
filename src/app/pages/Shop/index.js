import React, { useState, useEffect } from 'react';

//react-redux-hooks
import { useSelector, useDispatch } from 'react-redux';

//imgs
import products from '../../products';

//compoenents
import Cart from '../../components/Cart';
import BackButton from '../../components/BackButton';
import TotalPrice from '../../components/TotalPrice';

//pages
import ShoppingCart from '../ShoppingCart';

const Shop = () => {
    const [ list, setList ] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        setList(products)
    }, [])

    function convertPrice (price) {
       return  price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
    };
    
    function handleAddItemCart ( item ) {
        let itemId = {
            ...item,
            id: Math.random().toString(36).substring(2),
        };
        dispatch( { type: 'ADD_PRODUCT', payload: itemId } ); 
    };


    return(
        <>
            <div className="relative flex flex-col
                            h-full w-full gap-3
                            items-center">

                <h1 className="text-2xl font-medium">Adicione os Itens no Carrinho</h1>                

                <ul className='grid grid-cols-3 grid-rows-2 gap-8 justify-center h-3/4 w-full'>
                    { list && list.items.map( (item, index ) => {
                    return (
                        <li className="flex relative gap-2 " key={index}>
                            <img className="h-5/6 w-24 shadow rounded-xl " src={item.url} alt=''/>
                            
                            <div className="flex flex-col ">
                                <h1 className="text-sm font-light">{item.name}</h1>
                                <h3 className="mt-8 w-20 text-center font-medium text-coolGray-50 rounded bg-rose-400"> 
                                    {convertPrice(item.price)}
                                </h3>
                            </div>

                            <span onClick={() => handleAddItemCart(item)} className="absolute right-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-coolGray-500 tranform hover:text-lime-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </li>     
                    ) 
                    })}
                </ul>

                <Cart/>

            <BackButton/>             

            </div>
            <TotalPrice/>

            <ShoppingCart/>        
        </>
    )
};

export default Shop;