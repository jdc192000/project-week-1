// Initialize Firebase
var config = {
  apiKey: "AIzaSyAjkKxHwrGCjbC7co4BBzmMiNNfVhvjY-M",
  authDomain: "project-one-d470f.firebaseapp.com",
  databaseURL: "https://project-one-d470f.firebaseio.com",
  projectId: "project-one-d470f",
  storageBucket: "project-one-d470f.appspot.com",
  messagingSenderId: "498815701290"
};

firebase.initializeApp(config);

var wishList = [];

function retrieveWishlist() {

  database.ref(userKey).once('value').then(function (snapshot) {
    console.log(snapshot.val());

    if (snapshot.hasChild("list")) {

      userKey = snapshot.val().list;
      console.log("retrieve list:  " + userKey);
      wishList = snapshot.val().list;

    } else {
      userKey = userID

      console.log(userKey);

    };

  });
};

function writeWishlist() {

  var dataFormat = {
    parent: parentKey,
    list: wishList
  };

  database.ref().child(userKey).set(dataFormat);

};

// function readParent() {

//   database.ref(parentKey).once('value').then(function (snapshot) {
//     console.log(snapshot.val());

//     userKey = snapshot.val().child;

//   });
// };

function createNewChild() {

  var dataFormat = {
    parent: parentKey
  }

  database.ref().child(userKey).set(dataFormat);

};

function parentOrchild() {
  database.ref(userID).once('value').then(function (snapshot) {
    console.log(snapshot.val());

    if (snapshot.hasChild("child")) {
      userKey = snapshot.val().child;
    } else {
      userKey = userID
    };

    retrieveData()
  });

};
