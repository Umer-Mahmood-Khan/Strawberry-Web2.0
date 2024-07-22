// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // Add this line
 
const firebaseConfig = {
    apiKey: "AIzaSyBX5fmw91abLEpSPoyFFxmEBkuG5kxPXso",
    authDomain: "berryscan-c511a.firebaseapp.com",
    databaseURL: "https://berryscan-c511a-default-rtdb.firebaseio.com",
    projectId: "berryscan-c511a",
    storageBucket: "berryscan-c511a.appspot.com",
    messagingSenderId: "531425893147",
    appId: "1:531425893147:web:4b53cbab16fac3d7b751be"
};
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app); // Add this line 