import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwp8yHYGUCOa7ciOU5C5xrWHt5lFEQYLo",
    authDomain: "entel9-a5043.firebaseapp.com",
    projectId: "entel9-a5043",
    storageBucket: "entel9-a5043.appspot.com",
    messagingSenderId: "755410623132",
    appId: "1:755410623132:web:65401d9ac823fbebd1ab59",
    measurementId: "G-71PBY3PBYH"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize FCM
// const messaging = getMessaging(app);



function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        const app = initializeApp(firebaseConfig);
        const messaging = getMessaging(app);
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            // ...
          });
        // Add the public key generated from the console here.
        getToken(messaging, { vapidKey: "BEzi5EPJto7ZIQHVyMWUsUsLgeGgZKWwzlI5KxJKEkeorBSBQkru0NmaqAMXXaQWifIMxp_pM-9ALtTI8VBA8qY" })
          .then((currentToken) => {
            if (currentToken) {
              console.log('currentToken: ', currentToken)
            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
              // ...
            }
          });
  
      } else {
        console.log('Permission denied.')
      }
    })
  }
  
  requestPermission()