var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res) {

    var ip=req.headers["x-forwarded-for"]
    var lang=req.headers["accept-language"]
    lang.split(',', 1)[0]
    var soft=req.headers["user-agent"]
    soft = soft.split(')',1).pop().trim();
    soft = soft.split('(').pop().trim();
    res.json({ipaddress:ip, language:lang, software:soft})
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});