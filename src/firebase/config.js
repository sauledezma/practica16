import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCHk7ow2SkPhJcrYceGXLG7p1G9RrkrG8Y",
  authDomain: "practica16-5991e.firebaseapp.com",
  databaseURL: "https://practica16-5991e-default-rtdb.firebaseio.com",
  projectId: "practica16-5991e",
  storageBucket: "practica16-5991e.appspot.com",
  messagingSenderId: "574686064470",
  appId: "1:574686064470:web:5fb2b12ee7c9a6a68f30f7",
  measurementId: "G-1G3BK99KKE"
};
const db = initializeApp(firebaseConfig);

export default getDatabase(db);