import React from 'react';

import { Link } from 'react-router-dom';

const BackButton = () => {
    return (

        <Link to='/' className="absolute flex gap-3 bottom-1 left-1 cursor-pointer ">
                
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose- text-rose- text-coolGray-400 transform hover:text-coolGray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>

            <p className="font-medium text-coolGray-400">voltar</p>

        </Link>       
    )       
};

export default BackButton;