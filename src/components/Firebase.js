import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCID05J_WLu2cEHVOnrYXUXH96ikEchj6Q", 
  authDomain: "proyectofinal-react-coderhouse.firebaseapp.com",
  projectId: "proyectofinal-react-coderhouse",
  storageBucket: "proyectofinal-react-coderhouse.appspot.com",
  messagingSenderId: "651224465090",
  appId: "1:651224465090:web:09b7977db250294be0055b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)