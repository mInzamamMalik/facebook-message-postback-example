var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json({}));

app.use("/fbcallback", function (req, res, next) {


    console.log("request.body.entry: ", JSON.stringify(req.body.entry));


    var senderId = req.body.entry[0].messaging[0].sender.id;
    var pageId = req.body.entry[0].messaging[0].recipient.id;

    console.log("sender: ", senderId);
    console.log("pageId: ", pageId);

    res.status(200).send('ok')
});



app.listen(3000, function () {
    console.log("listening on 3000");
});