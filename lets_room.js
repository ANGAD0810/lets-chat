const firebaseConfig = {
  apiKey: "AIzaSyBeluSp1t0KF_yWh7Q-pNTxcl-xnuAFv_c",
  authDomain: "lets-chat-f628c.firebaseapp.com",
  projectId: "lets-chat-f628c",
  storageBucket: "lets-chat-f628c.appspot.com",
  messagingSenderId: "38248790121",
  appId: "1:38248790121:web:7c9e9f514bc1e6976bcaf8"
};


const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
