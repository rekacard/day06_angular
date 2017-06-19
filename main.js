const express = require("express");

const app = express();

// function randomWholeNum(range) {
//   // generate a random number from 0 to (range - 1)
//   // Only change code below this line.
//   return (Math.floor(Math.random() * range));
// }

// function generateImg(resp){
//     var randomNumber = 0;
//     do {
//         randomNumber = randomWholeNum(10) + 1;
//     }while (randomNumber == 10);
    
//     resp.status(200);
//     resp.type("image/jpeg");
//     resp.sendFile(__dirname + "/pics/" +randomNumber + ".jpg");
// }
// // app.get('/', 
// //     // res.send("GET request to homepage");
// //     express.static(__dirname)
// // )

// app.get("/randomimg", function(req, resp){
//     generateImg(resp);
// }

// );
app.use(express.static(__dirname + "/bower_components"));
// app.use("/images", express.static(__dirname + "/pics"));
app.use(express.static(__dirname));

var port = (process.argv[2])? parseInt(process.argv[2]) : 3000;
if ((port <= 0) || (port == NaN))
    port = 3000;

app.listen(port, function(){
    console.log("Port %d", port)}
);