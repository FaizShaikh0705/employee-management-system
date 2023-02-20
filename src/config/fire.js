import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");

const config = {
    apiKey: "AIzaSyBARs1tYteasvlCBfRrhVmPkBWlPQ05W30",
    authDomain: "employee-management-system-121.firebaseapp.com",
    projectId: "employee-management-system-121",
    storageBucket: "employee-management-system-121.appspot.com",
    messagingSenderId: "510911840652",
    appId: "1:510911840652:web:b626a5aeb7e8d638ddd6a9",
    measurementId: "G-F44ZDWMCP0"
  };

const firebaseConfig = firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();

export default firebaseConfig;