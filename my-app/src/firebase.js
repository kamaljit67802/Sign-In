
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCBkQLywSetKvoUnH24XL5wilysY9xiJMs",
  authDomain: "form-351d7.firebaseapp.com",
  projectId: "form-351d7",
  storageBucket: "form-351d7.appspot.com",
  messagingSenderId: "1064188110868",
  appId: "1:1064188110868:web:c79b48a5ffcb043bafdf01",
  measurementId: "G-FSLE8CBX36"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

