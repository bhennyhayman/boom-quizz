import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Home({score, questIndex, setScore, setQuestIndex, setDisable, disable}) {

  
    function startQuiz(){
        setScore(0);
        setQuestIndex(0);
        setDisable(false);
        localStorage.setItem('score', JSON.stringify(score));
        localStorage.setItem('qIndex', JSON.stringify(questIndex));
        localStorage.setItem('disable', disable);
    }
    return (
        <div className="flex flex-col h-lvh bg-black">
            <div className='my-auto mx-auto'>
                <h1 className='italic text-2xl text-white'>Welcome to the my Quiz App</h1>
                <button className='text-[20px] bg-blue-500 px-3 py-2 text-white rounded flex justify-self-center mt-3' onClick={startQuiz}><NavLink to={'/quiz'}>Start Quiz</NavLink></button>
            </div>
        </div>
    );
}
