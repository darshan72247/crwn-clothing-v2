import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYOyT_hcu6OuPppZmFHb_-gKQHZp79JKs",
    authDomain: "crwn-clothing-db-481a4.firebaseapp.com",
    projectId: "crwn-clothing-db-481a4",
    storageBucket: "crwn-clothing-db-481a4.appspot.com",
    messagingSenderId: "381474737202",
    appId: "1:381474737202:web:34e2c6b93d5c2e338cc02b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
   googleProvider.setCustomParameters({
    prompt: "select_account"
  });



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider); 
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
  ) => {

  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);    
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInformation,
        });
    } catch(error){
      if(error.code === 'auth/email-already-in-user'){
        alert('Cannot creat user, email alreay in use.')
      } else {
        console.log('error creating the user', error.message);
      }
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) => {
 if(!email || !password) return;
 
 return await createUserWithEmailAndPassword(auth,email,password);

};

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password);
};