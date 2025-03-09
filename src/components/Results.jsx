import React from 'react';
import Header from './Header';
import questions from '../data/questions.js';
import { Link, useLocation } from 'react-router-dom';

export default function Results() {
    const location = useLocation();
    const state = location.state || {};
    const { score, selectedOptions } = state;

    return (
        <div>
            <Header />
            <h1 className='underline m-2'>Results</h1>
            
            {score !== null && <>
              <div className="score">Your score: {score || 0}/{questions.length}</div>
            </>}

            {questions.map((item, index) => 
            <div key={index} className={`m-4 p-4 border-2 border-gray-300 rounded-lg ${selectedOptions && selectedOptions[index] !== item.answer ? 'bg-red-200' : 'bg-green-200'}`}>
              <div>{index+1}. {item.question}</div>
              <div className='p-2'>Answer: {item.answer}</div>
              <div className='p-2'>Your answer: {selectedOptions ? selectedOptions[index] : 'N/A'}</div>
            </div>
          )}
          
          <Link to='/'>
            <button id='home' className='bg-blue-500 p-2 px-4 text-1xl text-amber-50 border-r rounded-lg justify-center flex justify-items-center justify-self-center'>
              Home
            </button>
          </Link>
          
        </div>
    )
}