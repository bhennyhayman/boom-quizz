import React, { useEffect, useState } from 'react';
import Header from './Header';
import theQuestions from '../data/questions';
import { NavLink, useLocation } from 'react-router-dom';

export default function Results({score,setScore}) {
    const location = useLocation();

    return (
        <div>
            <Header />
            <h1 className='text-3xl px-3 py-2 text-blue-600 text-center italic '>Results</h1>
            
            <div className='bg-fuchsia-700 text-white justify-center p-10 mx-20 text-[18px] items-center rounded-2xl shadow-2xl shadow-cyan-800'>
              <div className='text-center text-2xl mb-5 font-bold italic'>You have completed the quiz</div>
              <div className='text-center'>You scored : <span>{score} / {theQuestions.length}</span></div>
            </div>

            <div className='flex flex-col justify-self-center m-5 p-5 align-middle items-center text-center'>
              <p className='bg-blue-400 p-2 m-2 text-white px-3 rounded hover:bg-blue-600' onClick={()=> {setScore(0)
                localStorage.setItem('score', JSON.stringify(score))
              }}><NavLink to={'/quiz'}>Restart Quiz</NavLink></p>
              <p className='bg-blue-400 p-2 m-2 text-white px-3 rounded hover:bg-blue-600'><NavLink to={'/'}>Home</NavLink></p>
            </div>
            
        </div>
    )
}
