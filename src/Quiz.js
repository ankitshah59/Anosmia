import React, { useState } from 'react';
import "./quiz.css";
import { db } from "./firebase";
import {ChangeQuestions} from "./ChangeableQuestions";
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function Quiz() {

	const questions = ChangeQuestions;
	
	let today = new Date().toISOString().slice(0, 10);    //Get Today's date
		//var todayy = new Date();
		//var questionID=todayy.getDate();
		//console.log(questionID);

		var cityRef = db.collection('Users').doc(today+'; '+firebase.auth().currentUser.uid);  //Initialize User Data from Firebase Authentication

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [questionID, setQuestionID] = useState(0);
	const [arrayR,setArrayR] =useState([]);
	const [todayQsn,setTodayQsn] = useState(0);

	const handleAnswerOptionClick = (isCorrect,selectedAnswer) => {
		//This section handles the question numbers and pushes the input into the firebase database
		if (currentQuestion ===0){
			var setWithMerge = cityRef.set({
				SmellLoss: selectedAnswer,
			}, { merge: true });
			
		};

		if (currentQuestion ===1){
			var setWithMerge = cityRef.set({
				AnsweredSmell1: selectedAnswer,
			}, { merge: true });
			
		};

		if (currentQuestion ===2){
			var setWithMerge = cityRef.set({
				AnsweredSmell2: selectedAnswer,
			}, { merge: true });
			
		};

		if (currentQuestion ===3){
			var setWithMerge = cityRef.set({
				AnsweredSmell3: selectedAnswer,
			}, { merge: true });
			
		};

		if (currentQuestion ===4){
			var setWithMerge = cityRef.set({
				AnsweredSmell4: selectedAnswer,
			}, { merge: true });
			
		};

		if (isCorrect) { //This section updates the score based on true or false responses
			setScore(score + 1);
			
		}
		
		console.log(score)
		const nextQuestion = currentQuestion + 1;
		const questionIDcheck = questionID +1;

		//console.log(questionID);
		if(questionID < 1){ // This section randomizes the questions so that new questions are generated each time
		
		var min = Math.ceil(0);
		var max = Math.floor(questions.length);

	    while(arrayR.length < 4){
		var r = Math.floor(Math.random() * (max - min + 1) + min);
		if(arrayR.indexOf(r) === -1) arrayR.push(r);
	}
	//console.log(arrayR);
  // arr1 = arr;
};

setTodayQsn(arrayR[questionID]);
setArrayR(arrayR)

//console.log(arrayR[questionID]);
console.log(arrayR);
//console.log(todayQsn);

		
		if (questionID < 4) {
			setCurrentQuestion(nextQuestion);
			setQuestionID(questionIDcheck);
		} else {
			setShowScore(true);
		}

		var setWithMerge = cityRef.set({
			score: score,
			questionNumbers: arrayR, 
			//questions:questions
		  }, { merge: true });
	};

		return (
			//This section contains the JSX code to make the user UI for displaying the user options
			<div className='app2'>
				{showScore ? (
					<div className='score-section' style={{ color: 'white' }}>
						 ✅ Thanks for your Response
					</div>
				) : (
					
					
					<div >

						<div className='question-section'>
							<div className='question-count'>
								<span style={{ color: 'white' }}>💠Question {currentQuestion + 1} </span> /5
							</div>
							<div className='question-text' style={{ color: 'white' }}>{questions[todayQsn].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[todayQsn].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect,answerOption.answerText)}>{answerOption.answerText}</button>
							))}
						</div>
						</div>
					
				)}
			</div>
			
		);
	}
	
/// Discard this code section below-------------------------------------------------------------------
	
		// let today = new Date().toISOString().slice(0, 10);
		// var todayy = new Date();
		// var questionID=todayy.getDate();
		// console.log(questionID);

		// var cityRef = db.collection('Users').doc(today+'; '+firebase.auth().currentUser.uid);

		// const [currentQuestion, setCurrentQuestion] = useState(0);
		// const [showScore, setShowScore] = useState(false);
		// const [score,setScore] = useState(0);
		// const [testPass1, setTestPass1] = useState(false);

		// const handleAnswerButtonClick = (isCorrect, selectedAnswer) =>{
		
		// 	if(isCorrect===true){
		// 		//alert("Thanks You are Cleared to Come Today");
		// 		setScore(score+1);
		// 		setShowScore(true);
		// 		setTestPass1(true);

		// 		var setWithMerge = cityRef.set({
			 
		// 			correctFirstAttempt: true,
		// 			AnsweredSmell1: selectedAnswer,

		// 			 correctSecondAttempt: null,
		// 			 AnsweredSmell2: null,
	  
		// 	  }, { merge: true });
			  

		// 	}else{
		// 		//alert("This Response is incorrect, Please try again!");
		// 		setShowScore(true);
		// 		setTestPass1(false);

		// 		var setWithMerge = cityRef.set({
			 
		// 			correctFirstAttempt: false,
		// 			AnsweredSmell1: selectedAnswer,

		// 			// correctSecondAttempt: true,
		// 			// AnsweredSmell2: "coffee"
	  
		// 	  }, { merge: true });
		// 	}
			
			

		// }

		// //------------------------------------------

		// const handleSecondAnswerButtonClick = (isCorrect2, selectedAnswer2) =>{
		// 	if(isCorrect2===true){
		// 		//alert("Thanks You are Cleared to Come Today");
		// 		//setScore(score+1);
		// 		setShowScore(true);
		// 		setTestPass1(true);

		// 		var setWithMerge = cityRef.set({
			 
		// 			correctSecondAttempt: true,
		// 			AnsweredSmell2: selectedAnswer2,
	  
		// 	  }, { merge: true });
			  

		// 	}else{
		// 		alert("This Response is incorrect, Thanks");
		// 		setShowScore(true);
		// 		setTestPass1(true);

		// 		var setWithMerge = cityRef.set({
			 
		// 			correctSecondAttempt: false,
		// 			AnsweredSmell2: selectedAnswer2,
	  
		// 	  }, { merge: true });
		// 	}
			

		// }


// return (
// 	<div className='app1'>
// 		{/* HINT: replace "false" with logic to display the 
//   score when the user has answered all the questions */}
// 		{showScore ? (
// 			<div>

// 		{testPass1 ? (<div className='score-section' style={{ color: 'white' }}>Thanks for your Response</div>)

// 			: (
// 				<div>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span style={{ color: 'white' }}>💠Question 2</span>
// 						</div>
						
// 						<div className='question-text' style={{ color: 'white' }}>{secondQuestions[30-questionID].questionText}</div>
// 					</div>
// 					<div className='answer-section'>
// 						{secondQuestions[30-questionID].answerOptions.map((answerOption)=> (
// 						<button onClick={()=>handleSecondAnswerButtonClick(answerOption.isCorrect,answerOption.answerText)}>{answerOption.answerText}</button>))}
// 					</div>
// 				</div>
// 			)}

// 			</div>
// 		) : (
// 			<div>
// 				<div className='question-section'>
// 					<div className='question-count'>
// 						<span style={{ color: 'white' }}>💠Question 1</span>
// 					</div>
					
// 					<div className='question-text' style={{ color: 'white' }}>{questions[questionID].questionText}</div>
// 				</div>
// 				<div className='answer-section'>
// 					{questions[questionID].answerOptions.map((answerOption)=> (
// 					<button onClick={()=>handleAnswerButtonClick(answerOption.isCorrect, answerOption.answerText)}>{answerOption.answerText}</button>))}
// 				</div>
// 			</div>
// 		)}
// 	</div>
// );