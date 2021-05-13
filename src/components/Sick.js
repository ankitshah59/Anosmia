// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Quiz from "../Quiz";
import "../quiz.css";
//import "../app.css";
import { db } from "../firebase";
import firebase from "firebase";
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//import { Radio } from "react-radio-group";


const Sick = () => {

 
  //const [temperature, setTemperature] = useState("");
  //const [spiO, setSPIO] = useState("");
  //const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
 // const [tempIsChecked, setTempIsChecked] = useState("no");
  const [contactIsChecked, setContactIsChecked] = useState("no");


  const handleSubmit = (e) => {


      
      if((contactIsChecked === "yes" )){
        alert("📣Consider contacting your doctor about getting tested for COVID-19🌡️🦠");
      }
    //   else{
    //     alert("⏳Let’s proceed with scent detection!👃");}
      

          
    e.preventDefault();
    setLoader(true);

    let today = new Date().toISOString().slice(0, 10);




    var cityRef = db.collection('Users').doc(today+'; '+firebase.auth().currentUser.uid);
    
    var setWithMerge = cityRef.set({
    
     // temperature: temperature,
     // spiO: spiO,
      //message: message,
     // tempIsChecked: tempIsChecked,
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

    //setTemperature("");
    //setSPIO("");
    //setMessage("");
    

  };

  

  return (
    <div>
      {loader ?  (<div style={{ display: "flex", justifyContent: 'center'}}>
      <div className="app1" >
        <Quiz/>
    
    </div>
      </div>) : (
   
    <form className="form" onSubmit={handleSubmit}>
      <div>
      <h1 style={{ display: "flex", fontSize: '25px',justifyContent: 'center',textAlign: 'center' }}><b>📝 Daily Screening Questions </b></h1>
      <h1 style={{ display: "flex", fontSize: '20px',alignContent :'center',  justifyContent: 'center',color: 'red'}}><b>__________________</b></h1>
      </div>
  
        

        <label style={{paddingTop:'3%', textAlign: 'center'}}>💠Have you been in contact with someone who is sick in the last 14 days?</label>
        <div className= 'timer3-text' style ={{fontSize: '25px', alignItems:'center',}} >
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

export default Sick;
