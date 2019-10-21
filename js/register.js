var inputUserame = document.getElementById('inputUserame');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');
var inputConfirmPassword = document.getElementById('inputConfirmPassword');
var register = document.getElementById('register');
var warning = document.getElementById('warning');
var info = document.getElementById('info');


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("logged in");
    // document.getElementById('logout').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    info.style.display = "none"

    if (user.email == 'admin@gmail.com') {
      console.log(user.email);
      info.style.display = "block";

    } else {
      info.style.display = "none";
    }
  } else {
    console.log("logged out");
    // document.getElementById('logout').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    info.style.display = "none";

  }
});


register.addEventListener('click', ref => {
  ref.preventDefault();
  var username = inputUserame.value;
  var email = inputEmail.value;
  var password = inputPassword.value;
  var confirmPassword = inputConfirmPassword.value;

  if (password.length < 6) warning.style.display = "block";
  else {
    warning.style.display = "none";
    if (username.length && email.length && password.length && confirmPassword.length) {
      if (password == confirmPassword) {
        const aut = firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {

          var ref = "users";
          var userRef = firebase.database().ref(ref);
          var newMessageRef = userRef.push();
          newMessageRef.set({
            'username': username,
            'email': email,
            'password': password
          }).then(x => {
            // document.location.href = "./index.html";
          });
        }).catch(e => {
          console.log("Connection Error!  id:" + e.message);
          document.getElementById('alreadyExistAlert').style.display = "block";
        });
      } else {
        console.log("Password Didn't march");
        document.getElementById('wrong').style.display = "block";
      }
    } else {
      console.log("Field can't be empty!");
    }
  }

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            if(user) {
              user.updateProfile({ // <-- Update Method here

                    displayName: username,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"

                }).then(function () {
                    var displayName = user.displayName;
                    // "https://example.com/jane-q-user/profile.jpg"
                    var photoURL = user.photoURL;
                    console.log(displayName);

                    // *
                    window.alert('Resistration Successful!');
                    document.location.href = "./index.html";
                    console.log(user);
                }, function (error) {
                    // An error happened.
                });
            }
        });
  
});