
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB3NPkVLwNS33iyVc6il7AZJGTlocqUzP4",
  authDomain: "asign-busines.firebaseapp.com",
  projectId: "asign-busines",
  storageBucket: "asign-busines.appspot.com",
  messagingSenderId: "208164853427",
  appId: "1:208164853427:web:e43b3bbbd5665343c302c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth