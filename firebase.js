import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdC7awhQA-DMcoGnt_6XxoyWTftB0DN8o",
  authDomain: "insta-c1711.firebaseapp.com",
  projectId: "insta-c1711",
  storageBucket: "insta-c1711.appspot.com",
  messagingSenderId: "392910635344",
  appId: "1:392910635344:web:e332faf08bc5fdf4d02c55",
  measurementId: "G-X6FB6WPGSN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
