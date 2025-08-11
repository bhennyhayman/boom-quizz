import Header from './Header'
import { useNavigate } from 'react-router-dom';
import "../App.css"
import theQuestions from '../data/questions.js'
import { useRef, useState } from 'react';

export default function Questions({ score, setScore }) {

    const [questIndex, setQuestIndex] = useState(JSON.parse(localStorage.getItem('questionIndex')) || 0);
    const [userChoice, setUserChoice] = useState(localStorage.getItem('userChoice') || null);
    const [nextBtn, setNextBtn] = useState(false)
    const [disable, setDisable] = useState(false);
    const [err, setErr] = useState("");
    const [ans,setAns] = useState("");
    const navigate = useNavigate();

    const submitAnswer = () => {
        localStorage.setItem('score',JSON.stringify(score));
        localStorage.setItem('questionIndex',JSON.stringify(questIndex));
        localStorage.setItem('userChoice',userChoice);
        if(!userChoice){
            setErr("Select an option");
            return
        }else{
            setNextBtn(true);
            setDisable(true);
            const answer = theQuestions[questIndex].answer;
            if(userChoice === answer) setScore(score+1);
            setAns(answer);
        }
    }

    function goToNext(){
        const length = theQuestions.length - 1;
        if(questIndex >= length){
            navigate('/results')
            return;
        }

        if(questIndex === (length-1)){
            setNextBtn(false)
        }
        setQuestIndex(questIndex + 1);
        setUserChoice("");
        setErr("");
        setAns("");
        setDisable(false);
        setNextBtn(false);
    }

    return (
        <>
            <Header />
            <div className="text-center text-2xl font-bold p-5 bg-green-500 text-white ">QUESTION {questIndex + 1}</div>

            <div className="bg-blue-400 flex flex-col max-sm:text-[18px] mx-10 mt-10 justify-center align-middle p-5 shadow-2xl shadow-violet-900 text-black text-2xl min-md:w-200 min-md:justify-self-center">
                <div className=" text-[22px] text-white">
                    {theQuestions[questIndex].question}
                </div>
                <div className="text-[16px] ">
                    <ol className="py-2">
                     {theQuestions[questIndex].options.map(o =>
                    <li onClick={()=> setUserChoice(o)} className={`${userChoice === o ? 'bg-amber-200':'bg-white'} ${disable ? 'pointer-events-none': 'pointer-events-auto'}` } key={o}>
                        {o}
                    </li>)}
                    </ol>
                </div>
                {ans && <div className='bg-green-700 text-white px-2 rounded p-2 text-center'>{ans}</div>}
                {err && <div className={`${userChoice ? 'hidden': ''} text-white bg-red-500 w-fit px-3 text-[16px] rounded py-3 mx-auto text-center`}>{err}</div>}
            </div>
            <div className='flex justify-center gap-2'>
                <button onClick={submitAnswer} className={`${ans ? 'hidden':'flex'} text-[16px] bg-blue-500 px-3 py-2 text-white rounded justify-self-center mt-3 cursor-pointer`}>Submit</button>

                {nextBtn && <div className='text-[16px] bg-green-900 px-3 py-2 text-white rounded flex hover:bg-green-400 justify-self-center mt-3 cursor-pointer' onClick={goToNext}>Next</div>}
            </div>
            
        </>
    )
}