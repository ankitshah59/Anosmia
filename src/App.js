import React,{Component} from "react";
import Contact from "./components/Contact";
import Quiz from "./Quiz";
//import "./app.css";
import "./quiz.css";
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import ReactRoundedImage from "react-rounded-image";
import logo from './covid-19.png';
import Moment from 'react-moment';



{/* <div>
<div className="app1">
     <Quiz/>
 
 </div>
 <div className ="app">
       <Contact />
 </div>
</div> */}

class App extends Component {
  
  state = {    curTime : new Date().toLocaleString(),
    isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,

    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })

  }

  render() {
    return (
      <div className ="timer-text">
        {this.state.isSignedIn ? (
       
          <span >
               <div >
            
            <button style={{
                display: "flex",
                justifyContent: "center", marginTop:"2%"}}onClick={() => firebase.auth().signOut()}>🔑 Sign out!</button>

            
            <div className='timer4-text' style={{ display: "flex" , paddingTop: '10px', boxSizing: 'content-box', }}>
          
          <ReactRoundedImage
          image={firebase.auth().currentUser.photoURL}
          roundedColor="#321124"
          imageWidth="100"
          imageHeight="100"
          roundedSize="10"
          
        />
         <div >
         <h2 style={{
                display: "flex",
         justifyContent: "center", paddingTop:'4px', marginLeft: '20px' }}>{" "}  {firebase.auth().currentUser.displayName}  </h2>
          <b >⏳{this.state.curTime} </b> 
          </div>
            </div>
          
          <div style={{
                display: "flex",
                justifyContent: "center"}} > <Contact/> </div>
         </div>
          </span>
        ) : (
          <div className='app1'>
            <div>
           <div className= 'timer2-text'>
           <img src= {logo} style={{height: '80px', width: '80px'}}/> 
              <b style={{ alignItems: 'center', paddingLeft : '5%', paddingTop: '4%', textAlign: 'center',justifyContent: "center"}}>Anosmia Scent Detection Test</b>
              
              </div>
          
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
          </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
