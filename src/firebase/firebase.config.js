// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(import.meta.env. VITE_apiKey)
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env. VITE_apiKey,
//   authDomain:import.meta.env. VITE_authDomain,
//   projectId:import.meta.env. VITE_projectId,
//   storageBucket:import.meta.env. VITE_storageBucket,
//   messagingSenderId:import.meta.env. VITE_messagingSenderId,
//   appId:import.meta.env. VITE_appId
// }

const firebaseConfig = {
  apiKey: "AIzaSyBCCkPQnWGBtiBr6qdmOGfWSTP8ZABZMwo",
  authDomain: "online-study-f7923.firebaseapp.com",
  projectId: "online-study-f7923",
  storageBucket: "online-study-f7923.appspot.com",
  messagingSenderId: "589279643176",
  appId: "1:589279643176:web:cf78302422245e367b571d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
