import React, { useEffect, useState } from 'react';
import Header from './Header';
import questions from '../data/questions.js';
import { Link, useLocation } from 'react-router-dom';

export default function Results() {
    const location = useLocation();
    const [score, setScore] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        const state = location.state || {};
        const storedScore = localStorage.getItem('score');
        const storedSelectedOptions = localStorage.getItem('selectedOptions');

        if (state.score !== undefined && state.selectedOptions !== undefined) {
            setScore(state.score);
            setSelectedOptions(state.selectedOptions);
        } else if (storedScore !== null && storedSelectedOptions !== null) {
            setScore(parseInt(storedScore, 10));
            setSelectedOptions(JSON.parse(storedSelectedOptions));
        }
    }, [location.state]);

    return (
        <div>
            <Header />
            <h1 className='underline m-2'>Results</h1>
            
            {score !== null && <>
              <div className="score">Your score: {score}/{questions.length}</div>
            </>}

            {questions.map((item, index) => 
            <div key={index} className={`m-4 p-4 border-2 border-gray-300 rounded-lg ${selectedOptions[index] !== item.answer ? 'bg-red-200' : 'bg-green-200'}`}>
              <div>{index+1}. {item.question}</div>
              <div className='p-2'>Answer: {item.answer}</div>
              <div className='p-2'>Your answer: {selectedOptions[index] !== null && selectedOptions[index] !== undefined ? selectedOptions[index] : 'N/A'}</div>
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
