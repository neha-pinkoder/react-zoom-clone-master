import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZgIOHqRu5A6up-0V0fYsggcQftMx6nsc",
  authDomain: "zoom-clone-943a5.firebaseapp.com",
  projectId: "zoom-clone-943a5",
  storageBucket: "zoom-clone-943a5.appspot.com",
  messagingSenderId: "23716054682",
  appId: "1:23716054682:web:f5a583a00d884d74634123",
  measurementId: "G-X8ZE7V7FQ4"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
