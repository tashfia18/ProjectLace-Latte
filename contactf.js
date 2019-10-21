// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCx1vXNXPgAsjg9N9ZpW7Mo37BhGtPz7ZY",
  authDomain: "ftll-943c8.firebaseapp.com",
  databaseURL: "https://ftll-943c8.firebaseio.com",
  projectId: "ftll-943c8",
  storageBucket: "",
  messagingSenderId: "950182353721",
  appId: "1:950182353721:web:99bd0ed63ce48bc87c66e8",
  measurementId: "G-FF5RTFPZ8B"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function showTable(){
    resetForm();
	document.getElementById("add-new-div").style.display = 'none';
	document.getElementById("tour-places-div").style.display = 'block';
}

function BackToaddPlace() {
    resetForm();
	document.getElementById("add-new-div").style.display = 'block';
    document.getElementById("tour-places-div").style.display = 'none';
}

  function resetForm() {
    document.getElementById('name').value = "";
	 document.getElementById('company').value = "";

    document.getElementById('email').value = "";
    document.getElementById('phone').value="";
	 document.getElementById('message').value="";


}



// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here

function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name'); //getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="./index.html";
  },3050);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
