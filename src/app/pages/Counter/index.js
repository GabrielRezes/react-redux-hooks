import React from 'react';

//react-redux-hooks
import { useSelector, useDispatch } from 'react-redux';

//components
import BackButton from '../../components/BackButton';

const Counter = () => {

    const counter  = useSelector( state => state.counter.counter);
    const dispatch = useDispatch();

    function handleClick ({ target }) {
    
        target.innerText === 'Incrementar' ?
        dispatch( { type: 'INCREMENTAR'} )
        :
        dispatch( { type: 'DECREMENTAR'} )
    }; 

    return(

        <div className=" relative flex flex-col
                        h-full w-full  gap-20
                        items-center justify-center">

            <h1 className="text-2xl font-medium">Contador: {counter}</h1>

            <div className="flex gap-3">
                <button onClick={handleClick} className="btn bg-rose-500 text-coolGray-50 h-12 w-40 text-center shadow-md transform transition-transform hover:-translate-y-1">Incrementar</button>
                <button onClick={handleClick} className="btn bg-rose-500 text-coolGray-50 h-12 w-40 text-center shadow-md transform transition-transform hover:-translate-y-1">Decrementar</button>
            </div>

            <BackButton/>
        </div>

    )
};

export default Counter;