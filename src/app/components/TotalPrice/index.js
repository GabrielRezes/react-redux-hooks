import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

const TotalPrice = () => {

    const sumPrices = useSelector( state => state.selectedProducts.selectedProducts
                                                            .map( item => item.price)
                                                            .reduce((acc, cur) => acc + cur, 0))
    

    function formatPrice (price) {
        console.log(price)
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
    }    

    return(
        <div className="absolute bottom-64 ">
            <h1 className="font-medium text-2xl text-coolGray-50 bg-lime-500 p-2 rounded-md">Total: {formatPrice(sumPrices)} </h1>
        </div>
    );
};

export default TotalPrice