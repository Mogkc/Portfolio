// Initialize Firebase
var config = {
    apiKey: "AIzaSyDnHCEsehXkQzFQ6lJTpqG0v8iGDYYQPlQ",
    authDomain: "message-storage.firebaseapp.com",
    databaseURL: "https://message-storage.firebaseio.com",
    projectId: "message-storage",
    storageBucket: "message-storage.appspot.com",
    messagingSenderId: "538957656840"
};
firebase.initializeApp(config);

var msgStorage = firebase.database();

$(".submit-btn").on("click", function(event) {
    event.preventDefault();

    msgStorage.ref().push({
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
        message: $("#msg").val().trim()
    });

    //Redirect to another page
})