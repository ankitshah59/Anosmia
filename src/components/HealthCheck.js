// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Quiz from "../Quiz";
import Sick from './Sick';
import "../quiz.css";
//import "../app.css";
import { db } from "../firebase";
import firebase from "firebase";
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//import { Radio } from "react-radio-group";


const HealthCheck = () => {

 
  //const [temperature, setTemperature] = useState("");
  //const [spiO, setSPIO] = useState("");
 // const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [symptomIsChecked, setSymptomIsChecked] = useState("no");
 // const [contactIsChecked, setContactIsChecked] = useState("no");


  const handleSubmit = (e) => {


      
      if((symptomIsChecked === "yes" )){
        alert("📣Consider contacting your doctor about getting tested for COVID-19🌡️🦠");
      }
          
    e.preventDefault();
    setLoader(true);

    let today = new Date().toISOString().slice(0, 10);




    var cityRef = db.collection('Users').doc(today+'; '+firebase.auth().currentUser.uid);
    
    var setWithMerge = cityRef.set({
    
     // temperature: temperature,
     // spiO: spiO,
     // message: message,
      symptomIsChecked: symptomIsChecked,
    //  contactIsChecked:contactIsChecked,
}, { merge: true });


    // db.collection("contacts")
    //   .add({ 
    //     temperature: temperature,
    //     spiO: spiO,
    //     message: message,
    //   })
    //   .then(() => {
    //     //setLoader(false);
    //    // alert("Your message has been submitted👍");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //     setLoader(false);
    //   });

    //setTemperature("");
    //setSPIO("");
    //setMessage("");
    

  };

  

  return (
    <div>
      {loader ?  (<>
      <div>
        <Sick/>
    
    </div>
      </>) : (
   
    <form className="form" onSubmit={handleSubmit}>
      <div>
      <h1 style={{ display: "flex", fontSize: '25px',justifyContent: 'center',textAlign: 'center' }}><b>📝 Daily Screening Questions </b></h1>
      <h1 style={{ display: "flex", fontSize: '20px',alignContent :'center',  justifyContent: 'center',color: 'red'}}><b>__________________</b></h1>
      </div>
  
        <label>💠Do you have any of these symptoms? </label>
        <p>
          <li>New onset cough </li>
          <li>Sore throat</li>
          <li>Diarrhea</li>
          <li>Nausea or vomiting</li>
          <li>New difficulty breathing </li>
          <li>Chills (repeated shaking)</li>
          <li>New onset or unusual headache</li>
          <li>Unexplained muscle or body aches</li>
          <li>More physical exhaustion (fatigue)</li>
          <li>New onset nasal congestion or runny nose</li>
          
          
        </p>
         <div className= 'timer3-text' style ={{fontSize: '25px', alignItems:'center'}} >
        <label style ={{marginLeft: '25%',}}> Yes </label>
        <input 
        style ={{marginRight: '10%', width: '25px', height: '25px',}}
        type = "radio"
        checked = {symptomIsChecked === "yes"}
        value = "yes"
        onChange={(e) => setSymptomIsChecked(e.target.value)}
        /> 
        {" "} 
        <label> No </label>
        <input
         style ={{width: '25px', height: '25px', backgroundColor: '#689f38',
         borderColor: '#689f38'}}
        type = "radio"
        checked = {symptomIsChecked === "no"}
        value = "no"
        onChange={(e) => setSymptomIsChecked(e.target.value)}
        /> 
        </div>

        
      <button
        type="submit"
        
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" ,display: "flex",
        justifyContent: "center", }}
      >
       Next ➡️
      </button>
      </form>)
      
     }

     
  
      </div>
   
  );

};

export default HealthCheck;
