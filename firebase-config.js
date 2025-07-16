
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBMENAMJxo6njZuXtwOGLW1OcnKw1Mm-9U",
    authDomain: "my-projects-54ba6.firebaseapp.com",
    projectId: "my-projects-54ba6",
    storageBucket: "my-projects-54ba6.appspot.com",
    messagingSenderId: "526413125585",
    appId: "1:526413125585:web:f0c8d249a6aeef440d72f0",
    measurementId: "G-R2PZ9TKRKZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  
  export { db, analytics, app };
