const express = require('express')
const app = express()

app.get('/profile-details' , function(req , res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if(username != 'amithbhise' || password != '1840'){
        res.send('your username and password is incorrect!')
    }
    
    if(kidneyID != 1 && kidneyID != 2){
        res.send('you given invalid kidney ids')
    }

    res.send('you are logged in ')

})

app.listen(3000)