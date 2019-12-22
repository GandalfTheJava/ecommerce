import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmWQdsVAjS4EekShVZd6U_G0h0VRjEnls",
    authDomain: "ecommerce-db-a90e0.firebaseapp.com",
    databaseURL: "https://ecommerce-db-a90e0.firebaseio.com",
    projectId: "ecommerce-db-a90e0",
    storageBucket: "ecommerce-db-a90e0.appspot.com",
    messagingSenderId: "806507563618",
    appId: "1:806507563618:web:428bf081309718767e9f3b",
    measurementId: "G-KZLNLMF9CE"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: `select_account` });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;