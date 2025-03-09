import questions from "../data/questions"
import { useState } from 'react'
import './questions.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom';

export default function Question({ setScore }) {

    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
    
    const navigate = useNavigate();

    function getanswer(questionIndex, optionIndex) {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = questions[questionIndex].options[optionIndex];
        setSelectedOptions(newSelectedOptions);
        // console.log(selectedOptions);
    }

    function calculateScore() {
        let newScore = 0;
        questions.forEach((question, index) => {
            if (selectedOptions[index] === question.answer) {
                newScore += 1;
            }
        });
        
        setScore(newScore);
        navigate('/results', { state: { score: newScore, selectedOptions } });
    }

    return (
        <div>
            <Header />
            {questions.map((item, index) => (
                <div key={index} className='m-4 p-4 border-2 border-gray-300 rounded-lg'>
                    <div>{index + 1}. {item.question}</div>
                    <div className="mt-2">
                        {item.options.map((option, optionIndex) => (
                            <div
                                key={optionIndex}
                                id="option"
                                onClick={() => getanswer(index, optionIndex)}
                                className={selectedOptions[index] === option ? 'select' : ''}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <button className="submit bg-blue-500" onClick={calculateScore}>Submit</button>
        </div>
    )
}