import React from 'react';

//react-redux-hooks
import { useSelector, useDispatch } from 'react-redux';


const ShoppingCart = () => {

    const listProducts = useSelector( state => state.selectedProducts.selectedProducts);
    const dispatch = useDispatch();


    function handleRemoveItemCart (item) {
        console.log('aqui',item)
        dispatch( { type: 'REMOVE_PRODUCT', payload: item.id  })
    }

    return(

        <div className="absolute right-40 p-5 h-1/2 w-72 rounded-2xl overflow-auto bg-coolGray-100">
            <ul>
                <h1 className="w-5/6 text-center mx-auto text-coolGray-800 bg-lime-500 rounded-md text-xl">Itens Selecionados</h1>
                { listProducts && listProducts.map( item => {
                    return(
                        <li className="flex justify-between p-1"
                            id={item.id}
                            key={item.id}>
                            <p className="text-coolGray-600 font-medium">{item.name}</p>

                            <button onClick={() => handleRemoveItemCart(item)} className="h-6 w-6 rounded text-coolGray-50 bg-gray-800 hover:bg-rose-600"> X </button>
                        </li>
                    )
                })}
            </ul>
        </div>

    );
};

export default ShoppingCart;