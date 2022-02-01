// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBqhnaxnp3CfHejEBZVJVdZ4D4aWRh_ymo',
	authDomain: 'viagens-814e9.firebaseapp.com',
	projectId: 'viagens-814e9',
	storageBucket: 'viagens-814e9.appspot.com',
	messagingSenderId: '200921129098',
	appId: '1:200921129098:web:b17c7deccca915906fcd73'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
