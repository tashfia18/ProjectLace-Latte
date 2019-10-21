firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("logged in");
    document.getElementById('logout').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('userName').innerHTML = `<a class="nav-link" href="#">${user.displayName}</a>`;
    if (user.email == 'admin@gmail.com') {
      console.log(user.email);
      document.getElementById('Info').style.display = "block";

    } else {
      document.getElementById("Info").style.display = "none";
    }
  } else {
    console.log("logged out");
    document.getElementById('logout').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById("Info").style.display = "none";
  }
});

function logout_func() {
  firebase.auth().signOut();
  document.location.href = "./index.html?Logout=Successful";

}