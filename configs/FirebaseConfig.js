// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth,  initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";



// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXN7sVLgKGqnNn2svBapt9lsqFqw6nZ_E",
  authDomain: "startup-737e6.firebaseapp.com",
  projectId: "startup-737e6",
  storageBucket: "startup-737e6.firebasestorage.app",
  messagingSenderId: "212133076628",
  appId: "1:212133076628:web:c492d5b4625655622c5e81",
  measurementId: "G-4YNW18ZSKV"
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });

// export { auth };

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// Get Firebase Auth instance

export const auth = getAuth(app);