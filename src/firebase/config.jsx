import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp0I106egSEGEZhm7J3DIXtZlhbmoKCCo",
  authDomain: "ecommerce-de-frutas.firebaseapp.com",
  projectId: "ecommerce-de-frutas",
  storageBucket: "ecommerce-de-frutas.appspot.com",
  messagingSenderId: "880673585994",
  appId: "1:880673585994:web:9dd5abe272de61a7099fb3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

