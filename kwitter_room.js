var firebaseConfig = {
      apiKey: "AIzaSyD7yPAgyAfObf6teZM0TqKyyxuJSrnWW0g",
      authDomain: "class-95-8e2d9.firebaseapp.com",
      databaseURL: "https://class-95-8e2d9-default-rtdb.firebaseio.com",
      projectId: "class-95-8e2d9",
      storageBucket: "class-95-8e2d9.appspot.com",
      messagingSenderId: "978936081904",
      appId: "1:978936081904:web:938ef14f4e7d23dc90c135",
      measurementId: "G-T9D04F1DDG"
    };
     // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addroom(){
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", Room_name);

      window.location ="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
     
      //End code
      });});}
getData();
function redirectToRoomName(name) {
       console.log(name); 
       localStorage.setItem("room_name", name); 
       window.location = "kwitter_page.html";
       }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}