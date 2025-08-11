import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Questions from './components/Questions';
import Home from './components/Home'; 
import Results from './components/Results'; 


function AppRouter() {
    const [score, setScore] = useState(localStorage.getItem("score") || 0);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home score={score} setScore={setScore} />} />
                <Route path="/quiz" element={<Questions score={score} setScore={setScore}/>} />
                <Route path="/results" element={<Results score={score}/>} />
            </Routes>
        </Router>
    );
}

export default AppRouter;