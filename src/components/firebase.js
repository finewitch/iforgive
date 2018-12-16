import app from 'firebase';
// import firestore from 'firebase/firestore';


// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: "iforgive-b3fef",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};
console.log(config);

class Firebase {
  constructor() {
    app.initializeApp(config);
    var db = app.firestore();
    console.log(db)
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("users").get().then((querySnapshot) => {
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc);
          console.log(`${doc.id} => ${doc.data().email}`);
          console.log(`${doc.id}`);
      });
  });
  
  }
}

export default Firebase;