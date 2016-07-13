var express = require("express");
var app = express();

app.use(express.static("public");

app.get("/",function(req,res){
  res.send("home");
});

app.get('/webhook', function (req, res){
  if (req.query['hub.verify_token'] === "aerhweiru*(y89iua89w74qolkeq89uq3248689eq&^*T*^(*#her98wyerqy") {
    res.send(req.query['hub.challenge']);
  }
  else {
    res.send('Error, wrong validation token');
  }
});

/**
 * Start the server
 */
 var ip_addr = process.env.OPENSHIFT_NODEJS_IP   || process.env.IP || '127.0.0.1';
 var port    = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || '8080';

app.listen(port,ip_addr,function(){
  console.log("Application started successfully on "+ip_addr+":"+port);
});
