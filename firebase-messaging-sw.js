importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");


const firebaseConfig = {
    apiKey: 'AIzaSyBNUixIjjvXnA8zz5zwX9-P3IL8IcRXev4',
    authDomain: 'neartik-91bdf.firebaseapp.com',
    projectId: 'neartik-91bdf',
    storageBucket: 'neartik-91bdf.appspot.com',
    messagingSenderId: '991773782293',
    appId: '1:991773782293:web:f1d72d865dfd078d33791c',
    measurementId: 'G-XXQVTZV9SZ',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    let options = {
        body: payload.body,
        // icon: payload.icon,
    };
    return self.registration.showNotification(payload.title, options);
});

// messaging.onBackgroundMessage(function(payload) {
//   // console.log('Received background message ', payload);
//  // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     // icon: '',
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
