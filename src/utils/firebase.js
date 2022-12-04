// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCahb3vc1c2YE6Sm41p7afwhhHhedw99AY",
  authDomain: "roadsters-20c9e.firebaseapp.com",
  projectId: "roadsters-20c9e",
  storageBucket: "roadsters-20c9e.appspot.com",
  messagingSenderId: "1041434794086",
  appId: "1:1041434794086:web:4b58cbebb8e6ed5cefb5a7",
  measurementId: "G-CKCTXZE10B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export {db};
export default app;
export {auth}