import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log('inside', import.meta.env.VITE_PASS);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MASSEGINFSENDERID,
  appId: import.meta.env.VITE_APPID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);