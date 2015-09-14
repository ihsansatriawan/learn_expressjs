

var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/',function(req,res){
  //res.sendfile("index_2.html");
  res.send('hello world!');
});

app.post('/getData', function(req, res) {
	 res.setHeader('Content-Type', 'application/json');
	 console.log(req.body);
      JSON.stringify(req.params);
      
       var body;
       req.on('data', function(chunk) {
        console.log("Received body data:");       
         body += chunk;
      });

       // the end event tells you that you have entire body
      req.on('end', function () {
       try {
      var data = JSON.parse(body);
       console.log(data);
    } catch (er) {
      // uh oh!  bad json!
      res.statusCode = 400;
      return res.end('error: ' + er.message);
    }

  });
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  //JSON.stringify(request.body);
  res.end("yes");
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})