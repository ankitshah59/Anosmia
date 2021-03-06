//Discard this code, this is just a test code before I built the website.

import React, { useState } from 'react';
import "./quiz.css";
import { db } from "./firebase";
export default function Quiz() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
    ];
  

		const [currentQuestion, setCurrentQuestion] = useState(0);
		const [showScore, setShowScore] = useState(false);
		const [score,setScore] = useState(0);

		const handleAnswerButtonClick = (isCorrect) =>{
			if(isCorrect===true){
				//alert("this answer is correct");
				setScore(score+1);
			}else{
				//alert("this answer is incorrect");
			}
			const nextQuestion = currentQuestion + 1;
			if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion)
			}else{
				//alert("You have reached the end of quiz")
				setShowScore(true);
            }
            
            db.collection("contacts")
      .add({ 
        ans1: "1",
        ans2: "2",
        ans3: "3",
 
      })
      .then(() => {
        //setLoader(false);
        //alert("Your message has been submitted????");
      })
      .catch((error) => {
        alert(error.message);
       // setLoader(false);
      });

		}
	return (
		<div className='app1'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption)=> (
						<button onClick={()=>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
					</div>
				</>
			)}
		</div>
	);
}
