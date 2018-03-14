let express = require('express');
let bodyParser = require('body-parser');

let app = express();


app.use(bodyParser());
app.post("/", (req, res) => {
    res.json(req.body)
});

app.listen(8080, console.log("express server running on port 8080"));
