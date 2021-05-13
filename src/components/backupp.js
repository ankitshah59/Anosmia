// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Quiz from "../Quiz";
import "../quiz.css";
import "../app.css";
import { db } from "../firebase";
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Radio } from "react-radio-group";


const Contact = () => {

 
  const [temperature, setTemperature] = useState("");
  const [spiO, setSPIO] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [tempIsChecked, setTempIsChecked] = useState("no");
  const [contactIsChecked, setContactIsChecked] = useState("no");


  const handleSubmit = (e) => {

    if((temperature === "")||(spiO === "")){
      alert("Please Fill out the Form");
    } 
    else{
      
      if((temperature > 100) ||(spiO < 90) || (tempIsChecked === "yes" ) || (contactIsChecked === "yes" )){
        alert("📣You might have some symptoms of Covid-19!🌡️🦠");
      }
      else{
        alert("⏳Thanks, Lets do some Smell Detection👃");}
      

          
    e.preventDefault();
    setLoader(true);

    let today = new Date().toISOString().slice(0, 10);




    var cityRef = db.collection('Users').doc(today+'; '+firebase.auth().currentUser.uid);
    
    var setWithMerge = cityRef.set({
    
      temperature: temperature,
      spiO: spiO,
      message: message,
      tempIsChecked: tempIsChecked,
      contactIsChecked:contactIsChecked,
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

    setTemperature("");
    setSPIO("");
    setMessage("");
    }

  };

  

  return (
    <div>
      {loader ?  (<>
      <div className="app1">
        <Quiz/>
    
    </div>
      </>) : (
   
    <form className="form" onSubmit={handleSubmit}>
      <h1 style={{ display: "flex" , paddingTop: '10px', }}>📋 Daily Screening Questions 📝</h1>

      <label>💠Enter Temperature(°F): </label>
      <input
        type="number"
        placeholder="Temperature"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />

      <label>💠Enter Pulse Oximeter Reading(%02): </label>
      <input
      type="number"
        placeholder="spiO2 Level"
        value={spiO}
        onChange={(e) => setSPIO(e.target.value)}
      />
  
        <label>💠Do you have any of these symptoms? </label>
        <p>
          <li>New loss of taste or smell</li>
          <li> New onset cough </li>
          <li>New onset ofdifficulty breathing</li>
          <li>Sore throat</li>
          <li>More physical exhaustion than normal (fatigue)</li>
          <li>Unexplained muscle or body aches</li>
          <li>Chills (repeated shaking)</li>
          <li>New onset or unusual headache</li>
          <li>New onset nasal congestion or runny nose</li>
          <li>Nausea or vomiting</li>
          <li>Diarrhea</li>
        </p>
         <div className= 'timer3-text' style ={{fontSize: '25px', alignItems:'center'}} >
        <label style ={{marginLeft: '25%',}}> Yes </label>
        <input 
        style ={{marginRight: '10%', width: '25px', height: '25px',}}
        type = "radio"
        checked = {tempIsChecked === "yes"}
        value = "yes"
        onChange={(e) => setTempIsChecked(e.target.value)}
        /> 
        {" "} 
        <label> No </label>
        <input
         style ={{width: '25px', height: '25px', backgroundColor: '#689f38',
         borderColor: '#689f38'}}
        type = "radio"
        checked = {tempIsChecked === "no"}
        value = "no"
        onChange={(e) => setTempIsChecked(e.target.value)}
        /> 
        </div>

        <label style={{paddingTop:'3%'}}>💠Have you been in contact with someone who is sick in the last 14 days?</label>
        <div className= 'timer3-text' style ={{fontSize: '25px', alignItems:'center'}} >
        <label style ={{marginLeft: '25%',}}> Yes </label>
        <input 
        style ={{marginRight: '10%', width: '25px', height: '25px',}}
        type = "radio"
        checked = {contactIsChecked === "yes"}
        value = "yes"
        onChange={(e) => setContactIsChecked(e.target.value)}
        /> 
        {" "} 
        <label> No </label>
        <input
         style ={{width: '25px', height: '25px', backgroundColor: '#689f38',
         borderColor: '#689f38'}}
        type = "radio"
        checked = {contactIsChecked === "no"}
        value = "no"
        onChange={(e) => setContactIsChecked(e.target.value)}
        /> 
        </div>

      <label>💠Any Notes Today: </label>
      <textarea
        placeholder="Notes"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>


      <button
        type="submit"
        
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" ,display: "flex",
        justifyContent: "center", }}
      >
        ✅ Submit
      </button>
      </form>)
      
     }

     
  
      </div>
   
  );

};

export default Contact;
