import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYOyT_hcu6OuPppZmFHb_-gKQHZp79JKs",
  authDomain: "crwn-clothing-db-481a4.firebaseapp.com",
  projectId: "crwn-clothing-db-481a4",
  storageBucket: "crwn-clothing-db-481a4.firebasestorage.app",
  messagingSenderId: "381474737202",
  appId: "1:381474737202:web:34e2c6b93d5c2e338cc02b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserDocumentFromAuth = async (userAuth) => {
  const userDocref = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocref);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("ERROR creating a user", error.message);
    }
  }
  return userDocref;
};
