const express = require("express");
const app = express(); 
const PORT = process.env.PORT || 4001;
const router = express.Router();

app.use(express.urlencoded({ extended: false})); 
app.use(express.static('views')); 
app.use(express.static(__dirname + '/public'));

var path = require('path');
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/form.html'));
});

// router.get('/invitation', (req, res) => {
//     res.render('invitation');
//   });

// app.get('/invitation', (req, res) => {

// });




// let form = document.getElementById("form");
// let cardSection = document.querySelector(".card-section");
// let submitButton = document.querySelector("#submitForm");
// let greetingMessage = document.querySelector(".greeting-h1");
// let eventName = document.querySelector(".message-paragraph");
// let messageParagraph = document.querySelector(".message-paragraph");


// let image1 = document.querySelector(".first-image");
// let image2 = document.querySelector(".second-image");

document.addEventListener("DOMContentLoaded", submit);
// let form = document.getElementById("form");

// async function getInvitation() {
//     let invitationForm = await 


function submit() {
    submitButton.addEventListener("click", event => {
        app.get('/', function(req, res) {
            res.sendFile(path.join(__dirname + '/invitation.html'));
        });
    });
}


// function showCard() {
//     greetingMessage.innerHTML = form.greeting.value;
//     eventName.innerHTML = "You have been invited";
//     messageParagraph.innerHTML = form.message.value;
// }

// app.post("/invitation", (req, res, next) => {
//     console.log(req.body);
//     let 
// });


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})