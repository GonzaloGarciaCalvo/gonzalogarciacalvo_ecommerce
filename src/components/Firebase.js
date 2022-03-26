// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCID05J_WLu2cEHVOnrYXUXH96ikEchj6Q",
  authDomain: "proyectofinal-react-coderhouse.firebaseapp.com",
  projectId: "proyectofinal-react-coderhouse",
  storageBucket: "proyectofinal-react-coderhouse.appspot.com",
  messagingSenderId: "651224465090",
  appId: "1:651224465090:web:09b7977db250294be0055b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)