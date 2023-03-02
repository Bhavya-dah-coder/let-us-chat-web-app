
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUm8GeucK-bYx_Wj9W-UI5xWWwtRj-17A",
    authDomain: "let-us-chat-web-app.firebaseapp.com",
    projectId: "let-us-chat-web-app",
    storageBucket: "let-us-chat-web-app.appspot.com",
    messagingSenderId: "591956095248",
    appId: "1:591956095248:web:b7a01519b03c1ad860f595"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code}
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
   
   function redirectToRoomName(name) { console.log(name); 
   localStorage.setItem("room_name", name); 
   window.location = "kwitter_page.html"; }
   //End code

   });});}
getData();

function logout() {

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";

}