var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');



//Binding Port server for test & Production 
const port = process.env.PORT || 3000;




var app = express();
app.use(bodyParser.json());

//http route handler
app.get('/',(req,res)=>{
    //res.send('<h>Hello Express</h1>');
    res.send({
        name:'Andrew',
        like:[
            'Biking',
            'Cities'
        ]
    });
});

app.get('/authenticate',(req,res)=>{
   
  
    fs.readFile('JWT2.html', function (err, html) {
        if (err) {
           throw err; 
        }
   
       res.writeHeader(200, {"Content-Type": "text/html"});  
       res.write(html);  
       res.end();  

    })



});

//Bind the application to Machine
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});
