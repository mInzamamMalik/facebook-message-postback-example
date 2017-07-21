var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");


var app = express();
app.use(bodyParser.json({}));

app.use("/fbcallback", function (req, res, next) {


    console.log("request.body.entry: ", JSON.stringify(req.body.entry));

    var senderId = req.body.entry[0].messaging[0].sender.id;
    var pageId = req.body.entry[0].messaging[0].recipient.id;

    console.log("sender: ", senderId);
    console.log("pageId: ", pageId);

    var url = "https://graph.facebook.com/v2.6/me/messages?access_token=EAABhbDy7jmIBAHAn09ZA9wdJXsDquo0aZCTpXIYrbk5qkmgm1WfQ84OoZBcrwxMA1dXjsoGvFdzswX7JSZBCSyZAESR0f2eDqze5E7eoRbmfpJAUjMtqKJrNlVOvnbMbsJpUrkvylBFAwwAlxzV09lB27LlYAy1Yf0hDdIFhhSgZDZD"

    request.post({
        url: url,
        json: {
            "recipient": {
                "id": senderId
            },
            "message": {
                "text": "hello world response from inzi server!"
            }
        }
    }, function (error, response, body) {

        //checking if response was success
        if (!error && response.statusCode == 200) {
            console.log("response: ", response);
            console.log("response: ", response.body);
        } else {
            console.log("err: ", error);
        }
    });
    res.send('ok')
});



app.listen(3000, function () {
    console.log("listening on 3000");
});