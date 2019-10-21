firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("logged in");
    document.getElementById("logout").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById('userName').innerHTML = `<a class="nav-link" href="#">${user.displayName}</a>`;
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

function logout_func() {
  firebase.auth().signOut();
  document.location.href = "./index.html?Logout=Successful";
}

/*
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid);
    if (user.uid == "Ez6M1ScTDyfrP1fb2r4263RqoIw2") {
      createTable();
    } else {
      document.location.href = "../homepage.html?invalid_action_from_inbox";
    }
  } else {
    document.location.href = "../homepage.html?invalid_action_from_inbox";
  }
});

var refUser = "admin";
var userRef = firebase.database().ref(refUser);

*/

function createTable() {
  var table = document.getElementById("table_body");

  var refEmail = "messages";
  var emailsRef = firebase.database().ref(refEmail);
  emailsRef.on(
    "value",
    data => {
      var alldata = data.val();
      var keys = Object.keys(alldata);

      for (var i = 0; i < keys.length; i++) {
        var index = keys[i];

        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = alldata[index].name;
        cell2.innerHTML = alldata[index].company;
        cell3.innerHTML = alldata[index].email;
        cell4.innerHTML = alldata[index].message;
      }
    },
    errEmailsData
  );
}

function errEmailsData(err) {
  console.log("Error!! id: ");
  console.log(err);
}

createTable();