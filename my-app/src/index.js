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
  apiKey: "AIzaSyAwoiSXxv-P5D9yHwRvcPg4KquYCag-0b4",
  authDomain: "workoutplanner-887e9.firebaseapp.com",
  projectId: "workoutplanner-887e9",
  storageBucket: "workoutplanner-887e9.appspot.com",
  messagingSenderId: "195824445846",
  appId: "1:195824445846:web:fc1430441515f4fa2dd5b7"
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
