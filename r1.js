$(document).ready(function(){

  var rootRef= firebase.database().ref().child("messages");

  rootRef.on("child_added.snap" => {
      alert(snap.val());

  });
});
