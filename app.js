
const express = require("express");
const bodyParser = require("body-parser");
let ejs = require("ejs")

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

var items = []

app.get("/", function(req, res){
  var today = new Date()

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  var day = today.toLocaleDateString("en-US", options)

//   if (currentDay == 0 || currentDay == 6) {
//     day = "Weekend"
//   } else {
//     day = "Weekday"
// }
    res.render('list', {kindOfDay: day, todoItems: items})
})

app.post("/", function(req, res){
    var item = req.body.todo
    items.push(item)
    res.redirect("/")
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
})