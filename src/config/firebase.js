
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth"; // 👈 add this

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAR6C6J0LdlI1g1ZhnijpJCrp0GcDrSZGk",
//   authDomain: "warehouse-431bb.firebaseapp.com",
//   projectId: "warehouse-431bb",
//   storageBucket: "warehouse-431bb.appspot.com",
//   messagingSenderId: "970777095943",
//   appId: "1:970777095943:web:d9500a590404a82ad41fa2",
//   measurementId: "G-F6V4KPCSY6",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export both Firestore and Auth
// export const db = getFirestore(app);
// export const auth = getAuth(app);









// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAR6C6J0LdlI1g1ZhnijpJCrp0GcDrSZGk",
//   authDomain: "warehouse-431bb.firebaseapp.com",
//   projectId: "warehouse-431bb",
//   storageBucket: "warehouse-431bb.firebasestorage.app",
//   messagingSenderId: "970777095943",
//   appId: "1:970777095943:web:7825e0fbb10496d8d41fa2",
//   measurementId: "G-39QZNXG1EE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);






// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR6C6J0LdlI1g1ZhnijpJCrp0GcDrSZGk",
  authDomain: "warehouse-431bb.firebaseapp.com",
  projectId: "warehouse-431bb",
  storageBucket: "warehouse-431bb.appspot.com", // 👈 fixed here
  messagingSenderId: "970777095943",
  appId: "1:970777095943:web:7825e0fbb10496d8d41fa2",
  measurementId: "G-39QZNXG1EE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export services
export const auth = getAuth(app);
export const db = getFirestore(app);
