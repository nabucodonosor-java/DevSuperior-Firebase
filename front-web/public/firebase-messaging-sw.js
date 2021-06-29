/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');

// https://github.com/react-boilerplate/react-boilerplate/issues/2952
const firebaseConfig = {
    apiKey: "AIzaSyCM_goyS7eEArvHpZfHsFjKY62yhP9yK3s",
    authDomain: "aula-push-franco.firebaseapp.com",
    projectId: "aula-push-franco",
    storageBucket: "aula-push-franco.appspot.com",
    messagingSenderId: "183772946407",
    appId: "1:183772946407:web:ea57476ac3d43c1fefe742"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
     console.log('sw bg message event: ', payload);
});

// O evento onMessage pertence ao contexto de Windows e não do service worker
//https://stackoverflow.com/questions/42964547/uncaught-firebaseerror-messaging-this-method-is-available-in-a-window-context
