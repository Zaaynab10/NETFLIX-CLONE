import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD8t7kHeMa_WeN3I1tyUqznZmT0ykhUIo4",
  authDomain: "react-netflix-clone-9ec2c.firebaseapp.com",
  projectId: "react-netflix-clone-9ec2c",
  storageBucket: "react-netflix-clone-9ec2c.appspot.com",
  messagingSenderId: "534737576848",
  appId: "1:534737576848:web:d17eb8607a69834b1b4915",
  measurementId: "G-06QLJBV0Z9"
};

const app = initializeApp(firebaseConfig);
 export const firebaseAuth= getAuth(app)
