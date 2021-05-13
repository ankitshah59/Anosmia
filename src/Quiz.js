import React, { useState } from 'react';
import "./quiz.css";
import { db } from "./firebase";
import {ChangeQuestions} from "./ChangeableQuestions";
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function Quiz() {

	const questions = ChangeQuestions;

	// const questions = [
	// 	{
	// 		questionText: 'Do you have new loss of taste or smell?',
	// 		answerOptions: [
	// 			{ answerText: 'Yes', isCorrect: true },
	// 			{ answerText: 'No', isCorrect: false },
	// 			// { answerText: 'Cinnamom', isCorrect: true },
	// 			// { answerText: 'Coffee', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please Smell Sample 1:',
	// 		answerOptions: [
	// 			{ answerText: 'Coffee', isCorrect: false },
	// 			{ answerText: 'PepperMint', isCorrect: false },
	// 			{ answerText: 'Rosemary', isCorrect: false },
	// 			{ answerText: 'Caramel', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please smell Sample 2:',
	// 		answerOptions: [
	// 			{ answerText: 'Orange', isCorrect: false },
	// 			{ answerText: 'Coffee', isCorrect: true },
	// 			{ answerText: 'Lemon Grass', isCorrect: false },
	// 			{ answerText: 'Caramel', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please smell Sample 3:',
	// 		answerOptions: [
	// 			{ answerText: 'PepperMint', isCorrect: false },
	// 			{ answerText: 'Ecualyptus', isCorrect: true },
	// 			{ answerText: 'Lemon Grass', isCorrect: false },
	// 			{ answerText: 'Cinnamom', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please smell Sample 4:',
	// 		answerOptions: [
	// 			{ answerText: 'Caffiene', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: false },
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please smell Sample 5:',
	// 		answerOptions: [
	// 			{ answerText: 'PepperMint', isCorrect: false },
	// 			{ answerText: 'Caffeine', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: true },
	// 			{ answerText: 'Sweet', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please smell Sample 6:',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please smell Sample 7:',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please smell Sample 8:',
	// 		answerOptions: [
	// 			{ answerText: 'Orange', isCorrect: false },
	// 			{ answerText: 'Coffee', isCorrect: true },
	// 			{ answerText: 'Lemon Grass', isCorrect: false },
	// 			{ answerText: 'Caramel', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please smell Sample 9:',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please smell Sample 10:',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'What does Sample 1 smell like?',
	// 		answerOptions: [
	// 			{ answerText: '🧊🌿🧊🌿', isCorrect: false },
	// 			{ answerText: '☕☕☕☕', isCorrect: false },
	// 			{ answerText: '🍬🍬🍬🍬', isCorrect: false },
	// 			{ answerText: '🪵🪵🪵🪵', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'What does Sample 2 smell like?',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'What does Sample 3 smell like?',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'What does Sample 4 smell like?',
	// 		answerOptions: [
	// 			{ answerText: '🍋🍋🍋🍋', isCorrect: false },
	// 			{ answerText: '🍬🍬🍬🍬', isCorrect: false },
	// 			{ answerText: '🪵🪵🪵🪵', isCorrect: false },
	// 			{ answerText: '🧊🌿🧊🌿', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'What does Sample 5 smell like?',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'What does Sample 6 smell like?',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'What does Sample 7 smell like?',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'What does Sample 8 smell like?',
	// 		answerOptions: [
	// 			{ answerText: 'Orange', isCorrect: false },
	// 			{ answerText: 'Coffee', isCorrect: true },
	// 			{ answerText: 'Lemon Grass', isCorrect: false },
	// 			{ answerText: 'Caramel', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'What does Sample 9 smell like?',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'What does Sample 10 smell like?',
	// 		answerOptions: [
	// 			{ answerText: '🍋🍋🍋🍋', isCorrect: false },
	// 			{ answerText: '🌸🌸🌸🌸', isCorrect: false },
	// 			{ answerText: '🍎🍎🍎🍎', isCorrect: false },
	// 			{ answerText: '🧊🌿🧊🌿', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please select the scent that smells like cinnamon: ',
	// 		answerOptions: [
	// 			{ answerText: 'Scent #1', isCorrect: false },
	// 			{ answerText: 'Scent #5', isCorrect: false },
	// 			{ answerText: 'Scent #7', isCorrect: false },
	// 			{ answerText: 'Scent #3', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please select the scent that smells like citrus:',
	// 		answerOptions: [
	// 			{ answerText: 'Scent #2', isCorrect: false },
	// 			{ answerText: 'Scent #4', isCorrect: false },
	// 			{ answerText: 'Scent #6', isCorrect: false },
	// 			{ answerText: 'Scent #8', isCorrect: true},
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please select the scent that smells like floral:',
	// 		answerOptions: [
	// 			{ answerText: 'Scent #9', isCorrect: false },
	// 			{ answerText: 'Scent #10', isCorrect: true },
	// 			{ answerText: 'Scent #7', isCorrect: false },
	// 			{ answerText: 'Scent #8', isCorrect: false},
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please select the scent that smells like coffee:',
	// 		answerOptions: [
	// 			{ answerText: 'Scent #1', isCorrect: false },
	// 			{ answerText: 'Scent #3', isCorrect: true },
	// 			{ answerText: 'Scent #2', isCorrect: false },
	// 			{ answerText: 'Scent #4', isCorrect: false},
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please select the scent that smells like mint:',
	// 		answerOptions: [
	// 			{ answerText: 'Scent #5', isCorrect: false },
	// 			{ answerText: 'Scent #7', isCorrect: true },
	// 			{ answerText: 'Scent #6', isCorrect: false },
	// 			{ answerText: 'Scent #8', isCorrect: false},
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Please select the scent that smells like caramel:',
	// 		answerOptions: [
	// 			{ answerText: 'Scent #9', isCorrect: false },
	// 			{ answerText: 'Scent #3', isCorrect: true },
	// 			{ answerText: 'Scent #6', isCorrect: false },
	// 			{ answerText: 'Scent #4', isCorrect: false},
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Smell Scent #1 and please choose which single category it belongs to',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Floral', isCorrect: false },
	// 			{ answerText: 'Woodsy', isCorrect: false },
	// 			{ answerText: 'Caffiene', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Smell Scent #2 and please choose which single category it belongs to',
	// 		answerOptions: [
	// 			{ answerText: 'Coffee', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Lemon grass', isCorrect: true },
	// 			{ answerText: 'Sweet', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Smell Scent #3 and please choose which single category it belongs to',
	// 		answerOptions: [
	// 			{ answerText: 'Woodsy', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Floral', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},

	// 	{
	// 		questionText: 'Smell Scent #4 and please choose which single category it belongs to',
	// 		answerOptions: [
	// 			{ answerText: '🍋🍋🍋🍋', isCorrect: false },
	// 			{ answerText: '🧊🌿🧊🌿', isCorrect: false },
	// 			{ answerText: '🌸🌸🌸🌸', isCorrect: false },
	// 			{ answerText: '🍬🍬🍬🍬', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Smell Scent #5 and please choose which single category it belongs to',
	// 		answerOptions: [
	// 			{ answerText: '🪵🪵🪵🪵', isCorrect: false },
	// 			{ answerText: '☕☕☕☕', isCorrect: false },
	// 			{ answerText: '🍎🍎🍎🍎', isCorrect: false },
	// 			{ answerText: '🧊🌿🧊🌿', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Smell Scent #6 and please choose which single category it belongs to',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Smell Scent #7 and please choose which single category it belongs to',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Smell Scent #8 and please choose which single category it belongs to',
	// 		answerOptions: [
	// 			{ answerText: 'Orange', isCorrect: false },
	// 			{ answerText: 'Coffee', isCorrect: true },
	// 			{ answerText: 'Lemon Grass', isCorrect: false },
	// 			{ answerText: 'Caramel', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Smell Scent #9 and please choose which single category it belongs to',
	// 		answerOptions: [
	// 			{ answerText: '🪵🪵🪵🪵', isCorrect: false },
	// 			{ answerText: '🍎🍎🍎🍎', isCorrect: false },
	// 			{ answerText: '🍋🍋🍋🍋', isCorrect: false },
	// 			{ answerText: '🌸🌸🌸🌸', isCorrect: true },
	// 		],
	// 	},

	// 	{
	// 		questionText: 'Smell Scent #10- and please choose which single category it belongs to',
	// 		answerOptions: [
	// 			{ answerText: 'Citrus', isCorrect: false },
	// 			{ answerText: 'Mint', isCorrect: false },
	// 			{ answerText: 'Fresh', isCorrect: false },
	// 			{ answerText: 'Sweet', isCorrect: true },
	// 		],
	// 	},


	// ];
	
	let today = new Date().toISOString().slice(0, 10);
		//var todayy = new Date();
		//var questionID=todayy.getDate();
		//console.log(questionID);

		var cityRef = db.collection('Users').doc(today+'; '+firebase.auth().currentUser.uid);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [questionID, setQuestionID] = useState(0);
	const [arrayR,setArrayR] =useState([]);
	const [todayQsn,setTodayQsn] = useState(0);

	const handleAnswerOptionClick = (isCorrect,selectedAnswer) => {
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

		if (isCorrect) {
			setScore(score + 1);
			
		}
		
		console.log(score)
		const nextQuestion = currentQuestion + 1;
		const questionIDcheck = questionID +1;

		//console.log(questionID);
		if(questionID < 1){
		
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
		return (
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