import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Here you have to add your firebase details

const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: '',
	measurementId: '',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
