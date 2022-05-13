import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBnuQv4PsUT5UGJZlfJ9O7PoSB9ECm4aJs",
    authDomain: "projesite-579cf.firebaseapp.com",
    projectId: "projesite-579cf",
    storageBucket: "projesite-579cf.appspot.com",
    messagingSenderId: "184626361629",
    appId: "1:184626361629:web:14776d33fb8764b99a5df4"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp 
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, timestamp, projectStorage }