import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyADvBae0ExySjb5_TD7h61a5IN5rTDM2qs',
	authDomain: 'daniyaldev1546.firebaseapp.com',
	projectId: 'daniyaldev1546',
	storageBucket: 'daniyaldev1546.appspot.com',
	messagingSenderId: '744831935332',
	appId: '1:744831935332:web:02cd7b0c03ef18f45f1071',
	measurementId: 'G-DEQD5RYRBK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
