import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  addDoc, collection, getFirestore, serverTimestamp
} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.GATSBY_APP_API_KEY,
  authDomain: process.env.GATSBY_APP_AUTH_DOMAIN,
  projectId: process.env.GATSBY_APP_PROJECT_ID,
  storageBucket: process.env.GATSBY_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_APP_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_APP_APP_ID,
  measurementId: process.env.GATSBY_APP_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();

export const db = getFirestore();


// ログイン
/**
 * ログイン
 * @returns null 
 */
export const loginHandleClick = () => {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        return resolve(user);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        return reject(errorMessage)
      });
  })
}

// メッセージ

export const contactForm = async (userName, email, title, context) => {
  let returnObj = ""
  console.log('firebase start')

  try {
    const docRef = await addDoc(collection(db, "contactform"), {
      userName,
      email,
      timestamp: serverTimestamp(),
      title,
      context,
    });
    returnObj = "test1"
    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    returnObj = "error"
    console.error("Error adding document:", e)
  }
  return returnObj
}



export const createPersonal = async () => {
  const info = {}
}