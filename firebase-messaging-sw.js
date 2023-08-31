importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize FCM
const messaging = firebase.messaging()

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//       '[firebase-messaging-sw.js] Received background message ', 
//       payload
//       )
//       console.log(date)
//   const notificationTitle = payload.notification.title
//   const notificationOptions = {
//     body: payload.notification.body
//   }

//   self.registration.showNotification(notificationTitle, notificationOptions);
// })
