firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("logged in");
    document.getElementById("logout").style.display = "block";
    document.getElementById("login").style.display = "none";
    if (user.email == "admin@gmail.com") {
      console.log(user.email);
      document.getElementById("Info").style.display = "block";
    } else {
      document.getElementById("Info").style.display = "none";
    }
  } else {
    console.log("logged out");
    document.getElementById("logout").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("Info").style.display = "none";
  }
});

const login = document.getElementById('login_button');
const mail = document.getElementById('inputUsername');
const pw = document.getElementById('inputPassword');


login.addEventListener('click', e => {
  e.preventDefault();
  const email = mail.value;
  const password = pw.value;
  const aut = firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
    console.log("Logged In");
    // localStorage.setItem("email", email);
    document.location.href = "./index.html?Login=Successful";
  }).catch(e => {
    window.alert("Error :" + e.message);
    console.log("Error!  id: " + e.message);
  });

});
