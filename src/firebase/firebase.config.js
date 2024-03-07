// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7JaAOq2Y78vWsWTZGpbbm5biDcsP8NkQ",
  authDomain: "technoly-electronics-shop.firebaseapp.com",
  projectId: "technoly-electronics-shop",
  storageBucket: "technoly-electronics-shop.appspot.com",
  messagingSenderId: "556940501152",
  appId: "1:556940501152:web:de16e05d2131e5d56ba9c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;