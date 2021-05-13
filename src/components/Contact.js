// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Quiz from "../Quiz";
import "../quiz.css";
//import "../app.css";
import HealthCheck from "./HealthCheck"
import { db } from "../firebase";
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Radio } from "react-radio-group";


const Contact = () => {

 
  const [temperature, setTemperature] = useState("");
  const [spiO, setSPIO] = useState("");
 // const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
 // const [tempIsChecked, setTempIsChecked] = useState("no");
 // const [contactIsChecked, setContactIsChecked] = useState("no");


  const handleSubmit = (e) => {

    if((temperature === "")||(spiO === "")){
      alert("Please Fill out the Form");
    } 
    else{
      
      if((temperature > 100)){
        alert("📣 High Temperature:\nConsider contacting your doctor about getting tested for COVID-19🌡️🦠");
      }

      if((spiO < 90)){
        alert("📣 Low Pulse Oxygen Level:\nConsider contacting your doctor about getting tested for COVID-19🌡️🦠");
      }

          
    e.preventDefault();
    setLoader(true);

    let today = new Date().toISOString().slice(0, 10);




    var cityRef = db.collection('Users').doc(today+'; '+firebase.auth().currentUser.uid);
    
    var setWithMerge = cityRef.set({
    
      temperature: temperature,
      spiO: spiO,
      //message: message,
      //tempIsChecked: tempIsChecked,
      //contactIsChecked:contactIsChecked,
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
    //setMessage("");
    }

  };

  

  return (
    <div>
      {loader ?  (<>
      <div >
        <HealthCheck/>
    
    </div>
      </>) : (
   
    <form className="form" onSubmit={handleSubmit}>
      <div>
      <h1 style={{ display: "flex", fontSize: '25px',justifyContent: 'center',textAlign: 'center' }}><b>📝 Daily Screening Questions </b></h1>
      <h1 style={{ display: "flex", fontSize: '20px',alignContent :'center',  justifyContent: 'center',color: 'red'}}><b>__________________</b></h1>
      </div>

      <label>💠Enter Temperature(°F): </label>
      <input
        type="number"
        step = "0.1"
        min = "97"
        max = "108"
        placeholder="98.5"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />

      <label>💠Enter Pulse Oximeter Reading(%02): </label>
      <input
        type="number"
        step = "0.1"
        min = "82"
        max = "100"
        alt="show this text"
        placeholder="99"
        value={spiO}
        onChange={(e) => setSPIO(e.target.value)}
      />
  
       
      <button
        type="submit"
        
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" ,display: "flex",
        justifyContent: "center", }}
      >
         Next  ➡️ 
      </button>
      </form>)
      
     }

     
  
      </div>
   
  );

};

export default Contact;
