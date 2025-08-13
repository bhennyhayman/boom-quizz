import React, { useEffect, useState } from 'react';
import Header from './Header';
import theQuestions from '../data/questions';
import { NavLink, useLocation, useNavigate, Link } from 'react-router-dom';

export default function Results({score}) {
   

    return (
        <div>
            <Header />
            <h1 className='text-3xl px-3 py-2 text-blue-600 text-center italic '>Results</h1>
            
            <div className='bg-fuchsia-700 text-white justify-center p-10 mx-20 text-[18px] items-center rounded-2xl shadow-2xl shadow-cyan-800 md:w-100 md:mx-auto'>
              <div className='text-center text-2xl mb-5 font-bold italic'>You have completed the quiz</div>
              <div className='text-2xl text-yellow-200 flex flex-col justify-self-center'> 🎈✨ You scored  🎈✨<span className='text-3xl text-center m-5'>{score} / {theQuestions.length} </span></div>
            </div>

            <div className='flex flex-col justify-self-center m-5 p-5 align-middle items-center text-center'>
              <p className='bg-blue-400 p-2 m-2 text-white px-3 rounded hover:bg-blue-600'><Link to={'/'}>Go Home</Link></p>
            </div>
            
        </div>
    )
}
