import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD6odtvcQC2oYnpDslIbP8c8CmUqyIOhmA",
  authDomain: "netflix-clone-e535b.firebaseapp.com",
  projectId: "netflix-clone-e535b",
  storageBucket: "netflix-clone-e535b.appspot.com",
  messagingSenderId: "764197790035",
  appId: "1:764197790035:web:dcd3f3081d24e9d6e041a6"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export {auth}
  export default db;