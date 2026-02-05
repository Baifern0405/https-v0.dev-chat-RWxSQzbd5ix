import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_Gs3E-kZKyJs-EKhIq1SY0QnXZ3DIH3g",
  authDomain: "area-baifern.firebaseapp.com",
  projectId: "area-baifern",
  storageBucket: "area-baifern.firebasestorage.app",
  messagingSenderId: "345523581820",
  appId: "1:345523581820:web:ec0565477a034a32ea6af9"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
