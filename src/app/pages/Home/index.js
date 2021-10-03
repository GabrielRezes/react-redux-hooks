import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <nav className="flex flex-col justify-center items-center
                        h-full w-full gap-5 ">
            <div>
                <h1 className="font-medium text-2xl text-coolGray-600"> Teste React-Hooks</h1>
            </div>                
            
            <Link className="btn bg-rose-500 text-coolGray-50 h-12 w-40 text-center shadow-md transform transition-transform hover:-translate-y-1" to='/counter'> Contador </Link>
            <Link className="btn bg-rose-500 text-coolGray-50 h-12 w-40 text-center shadow-md transform transition-transform hover:-translate-y-1" to='/list'> Lista </Link>
            <Link className="btn bg-rose-500 text-coolGray-50 h-12 w-40 text-center shadow-md transform transition-transform hover:-translate-y-1" to='/shop'> Compras </Link>
        
        </nav>
    )
}

export default Home
