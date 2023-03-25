

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCVMQFrCkNwYXUIRTrY3lXoGtTHe9Nft2M",
  authDomain: "react-45090.firebaseapp.com",
  projectId: "react-45090",
  storageBucket: "react-45090.appspot.com",
  messagingSenderId: "990392665216",
  appId: "1:990392665216:web:0dbc170537be3fc8e79265"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
