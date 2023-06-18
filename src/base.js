import Rebase from "re-base";
import firebase from "firebase";

const firebaseApplication = firebase.initializeApp({
  apiKey: "AIzaSyDvlmCOzIoH9IL6Sj7AVmKWMd8etgH1XGw",
  authDomain: "fcbarcelona-96463.firebaseapp.com",
  databaseURL: "https://fcbarcelona-96463-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fcbarcelona-96463",
  storageBucket: "fcbarcelona-96463.appspot.com",
  messagingSenderId: "562417131772",
  appId: "1:562417131772:web:cff41de66538c9cf25f779",
  measurementId: "G-H8D45Q9Q0L"
}); 


const base = Rebase.createClass(firebaseApplication.database()); 

export {firebaseApplication}; 

export default base; 