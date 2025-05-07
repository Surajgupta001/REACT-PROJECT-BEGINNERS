import React from 'react'
import QuestionList from './QuestionList'
import { useState } from 'react'
import './QuizCSS.css'


function Quiz() {

    const questions = [
        {
            question: "What is React?",
            options: ['A library for building user interfaces', 'A programming language', 'A database', 'A framework'],
            answer: 'A library for building user interfaces'
        },
        {
            question: "What is the capital of France?",
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            answer: 'Paris'
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
            answer: 'Jupiter'
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
            answer: 'Harper Lee'
        }
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    const [currentAnswer, setCurrentAnswer] = useState(null);

    const [score, setScore] = useState(0);
    
    const handleClick = (option) => {
        setCurrentAnswer(option);
        if(option === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
    }

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null);
    }

  return (
    <div>
        {currentQuestionIndex < questions.length ? <div>
        <QuestionList question={questions[currentQuestionIndex].question} options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer}/>
        <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
      </div> : <div className='result'>Your Score is {score}</div>}
      
    </div>
  )
}

export default Quiz
