// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzDMumyjnFGH_DfKkZpX7rDr79M-GbMjc",
  authDomain: "workout-planner-906bf.firebaseapp.com",
  projectId: "workout-planner-906bf",
  storageBucket: "workout-planner-906bf.appspot.com",
  messagingSenderId: "765784666816",
  appId: "1:765784666816:web:2bd72ab0c7218cd7f77325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
