// import { firebase } from 'firebase/firestore/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDdygd1I07Kv4urX-eXGzs2qd_--ORmaWs",
	authDomain: "linkedin-clone-9894f.firebaseapp.com",
	projectId: "linkedin-clone-9894f",
	storageBucket: "linkedin-clone-9894f.appspot.com",
	messagingSenderId: "149126651973",
	appId: "1:149126651973:web:8f7743c6e1b81fe94bc32c",
	measurementId: "G-N2HCHM39VT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
