import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // apiKey: "AIzaSyCzOQ-EOvlxClWPO8QS5P1-09pWFyMOm74",
  //   authDomain: "anosmiatest.firebaseapp.com",
  //   databaseURL: "https://anosmiatest-default-rtdb.firebaseio.com",
  //   projectId: "anosmiatest",
  //   storageBucket: "anosmiatest.appspot.com",
  //   messagingSenderId: "1053157909551",
  //   appId: "1:1053157909551:web:4c505e59a218e746aa92da",
  //   measurementId: "G-B8PRCCQQYD"

  apiKey: "AIzaSyA8s98XI7rZbAjuk66RYi4Hu11IBVVudas",
    authDomain: "testanosmia.firebaseapp.com",
    projectId: "testanosmia",
    storageBucket: "testanosmia.appspot.com",
    messagingSenderId: "852478321021",
    appId: "1:852478321021:web:ff966348a90679072dac14",
    measurementId: "G-VJ8R7ZV62W"

});

var db = firebaseApp.firestore();

export { db };
