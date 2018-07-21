const electron = require("electron");
const BrowserWindow = electron.remote.BrowserWindow;
const remote = electron.remote;
const app = remote.app;
const $ = require("jquery");
const mongoose = require("mongoose");

//Mongoose Db Connection
const db = require("../config/keys.js").mongoURI;

mongoose.connect(db).then(function(res) {
  app.console.log("Moogoose Db Connected");
  $("#result").text("MongoDb Connected ");
});


//Pouch Db Connection

const convertBtn = document.getElementById("submit");
//const currency1 = document.getElementById("currency1");

//
// $("#submit").click(function() {
//   var currency2 = $("#currency1").val();
//   let notification = new Notification(currency2);
//   app.console.log(currency2);
// });

convertBtn.addEventListener("click", function(event) {
  var currency1 = $("#currency1").val();
  var currency2 = $("#currency2").val();
  // let notification = new Notification(currency2);

  $.ajax({
    url:
      "http://testing12.gear.host/api/converter?from=" +
      currency1 +
      "&to=" +
      currency2 +
      "&amount=1",
    method: "GET"
  }).then(function(res) {
    app.console.log(res);
    $("#result").html("1 " + currency1 + " = " + res + " " + currency2);
  });
});

// var currency1 = document.getElementById("currency1").value;

// console.log(currency1);
