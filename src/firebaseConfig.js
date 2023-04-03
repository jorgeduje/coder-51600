

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCjBJQrSwpZ3yc1e-6qxgwl9ioySAEJzfE",
  authDomain: "react-51600.firebaseapp.com",
  projectId: "react-51600",
  storageBucket: "react-51600.appspot.com",
  messagingSenderId: "959798232567",
  appId: "1:959798232567:web:117a7401740299273a5af2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
