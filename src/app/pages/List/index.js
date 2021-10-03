import React, { useState, useRef } from 'react';

//react-redux-hooks
import { useSelector, useDispatch } from 'react-redux';

//components
import BackButton from '../../components/BackButton';

const List = () => {

    const [ currText, setCurrText ] = useState('');

    const list = useSelector( state => state.list.list);
    const dispatch = useDispatch(); 

    const inputRef = useRef();

    function handleChangeText ( {target} ) {
        let text = target.value;

        if(text){
            text = text[0].toUpperCase() + text.substring(1);
        };

        setCurrText(text);
    };

    function handleAddItem () {
        if(currText){
            let id = Math.random().toString(36).substring(2);

            dispatch( { type: 'ADD_ITEM', payload: { item: currText, id: id} });

            setCurrText('');
            inputRef.current.focus();

            return ;
        };

        alert('Digite Algo!');
    };
    
    function handleRemoveItem ( {target}) {
        dispatch( { type: 'REMOVE_ITEM', payload:target.parentNode.id  })
    };
    
    return(

        <div className="relative flex flex-col
                        h-full w-full gap-5
                        items-center">

            <h1 className="text-2xl font-medium"> Lista </h1>
            <ul className=" h-2/3 w-2/3 p-4 rounded-md shadow overflow-auto bg-rose-50">

                { list.map( ( item ) => {
                    return(
                            <li className="flex h-7 justify-between"
                                key={item.id}
                                id={item.id}> 
                                
                                    {item.item}
                            
                                <button onClick={handleRemoveItem} className="h-6 w-6 rounded text-coolGray-50 bg-gray-800 hover:bg-rose-600"> X </button>
                            </li>
                    )
                })}

            </ul>                

            <div className="flex gap-5">
                <input className="p-2 rounded-md border-2 border-gray-300"
                       value={currText}
                       ref={inputRef}
                       onChange={handleChangeText}
                       placeholder="Digite Aqui!"
                       maxLength={40}/>
                
                <button onClick={handleAddItem} className="btn bg-rose-500 text-coolGray-50 h-12 w-40 text-center shadow-md transform transition-transform hover:-translate-y-1"> Adicionar </button>
            </div>

            <BackButton/>

        </div>
    )
};

export default List;