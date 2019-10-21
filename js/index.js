firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("logged in");
    document.getElementById("logout").style.display = "block";
    document.getElementById("login").style.display = "none";
    //??
    document.getElementById('userName').innerHTML = `<a class="nav-link" href="#">${user.displayName}</a>`;
  } else {
    console.log("logged out");
    document.getElementById("logout").style.display = "none";
    document.getElementById("login").style.display = "block";
  }
});

function logout_func() {
  firebase.auth().signOut();
  document.location.href = "index.html?Logout=Successful";
}

/*
var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
  const username = localStorage.getItem("email");
  document.getElementById("user").innerHTML = username;
} else {
  // No user is signed in.
}*/
