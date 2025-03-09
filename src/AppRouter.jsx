import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import Question from './components/Question';
import Home from './components/Home'; 
import Results from './components/Results'; 


function AppRouter() {
    const [score, setScore] = useState(null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Question setScore={setScore}/>} />
                <Route path="/results" element={<Results score={score}/>} />
            </Routes>
        </Router>
    );
}

export default AppRouter;