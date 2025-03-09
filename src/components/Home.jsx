import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the my Quiz App</h1>
            <Link to="/quiz">
                <button className="start-quiz bg-blue-500 p-4 text-2xl text-amber-50 border-r">Start Quiz</button>
            </Link>
        </div>
    );
}
