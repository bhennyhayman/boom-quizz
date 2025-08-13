import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Questions from './components/Questions';
import Home from './components/Home'; 
import Results from './components/Results'; 


function AppRouter() {

    const [score, setScore] = useState(JSON.parse(localStorage.getItem('score')) || 0);
    const [questIndex, setQuestIndex] = useState(JSON.parse(localStorage.getItem('qIndex')) || 0);
    const [disable, setDisable] = useState(localStorage.getItem('disable') || false);

   
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home score={score} setScore={setScore} questIndex={questIndex} setQuestIndex={setQuestIndex} disable={disable} setDisable={setDisable}/>} />

                <Route path="/quiz" element={<Questions score={score} setScore={setScore} questIndex={questIndex} setQuestIndex={setQuestIndex} disable={disable} setDisable={setDisable}/>} />
                <Route path="/results" element={<Results score={score} setScore={setScore} setQuestIndex={setQuestIndex} disable={disable} setDisable={setDisable}/>} />
            </Routes>
        </Router>
    );
}



export default AppRouter;