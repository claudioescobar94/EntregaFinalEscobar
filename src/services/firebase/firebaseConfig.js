import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDRBPwZI_Gr3ZcBl604XhwjRMNyMrHEfQw",
    authDomain: "tienda-peamoa.firebaseapp.com",
    projectId: "tienda-peamoa",
    storageBucket: "tienda-peamoa.appspot.com",
    messagingSenderId: "14947794638",
    appId: "1:14947794638:web:341ad683753cc538015a9f"
  };
  
  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)