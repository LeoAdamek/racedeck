import { initializeApp, type FirebaseApp } from "@firebase/app"

export const config = {
    apiKey: 'AIzaSyBI6Iu8-mudQWSon7WC2VHswzLjv4bJWhI',
    authDomain: 'racedeck-3e133.firebaseapp.com',
    projectId: 'racedeck',
    storageBucket: 'racedeck.appspot.com',
    messagingSenderId: '919826297281',
    appId: '1:919826297281:web:dcb84ffb471d83eb893f40',
    measurementId: "G-KWV4T4RYTT",
}

let firebase: FirebaseApp;

export function initializeFirebase(): FirebaseApp {
    firebase = initializeApp(config)

    return firebase
}


export function useFirebase(): FirebaseApp {
    if (!firebase) return initializeFirebase()
    return firebase
}