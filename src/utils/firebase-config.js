
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAovQSWxbNPIWrSjIZLKtIEKLccPOUEbE4",
  authDomain: "netflixclonenew-895d4.firebaseapp.com",
  projectId: "netflixclonenew-895d4",
  storageBucket: "netflixclonenew-895d4.appspot.com",
  messagingSenderId: "693845734427",
  appId: "1:693845734427:web:da22c5275b61696466f4be",
  measurementId: "G-JTH7BJRX15"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);