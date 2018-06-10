const express = require('express');

var app = express();

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
    res.send('Authenticate');
});

//Bind the application to Machine
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});
