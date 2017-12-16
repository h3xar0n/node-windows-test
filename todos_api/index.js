var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.json({ message: "HI THERE FROM EXPRESS!!!" });
})

app.get('/happy', function(req, res) {
    res.send(":)");
})
  
app.listen(process.env.PORT, function() {
    console.log("APP IS RUNNING ON PORT " + process.env.PORT);
})