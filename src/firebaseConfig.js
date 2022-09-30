
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0ut9Ua03RMsqXAj8Y0K7ux9Y2I7h4gNk",
  authDomain: "fir-frontend-3a0d2.firebaseapp.com",
  projectId: "fir-frontend-3a0d2",
  storageBucket: "fir-frontend-3a0d2.appspot.com",
  messagingSenderId: "423329152375",
  appId: "1:423329152375:web:8ceae52c16ff6342dc7572"
};


export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app);
export const storage=getStorage(app);