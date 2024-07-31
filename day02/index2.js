const express = require('express')
const app = express()
app.use(express.json())

let numberOfRequest = 0; 

app.use((req, res, next) => {
    req.startTime = Date.now();
    res.on('finish', () => {
      const endTime = Date.now();
      const handlingTime = endTime - req.startTime;
      console.log(`Request to ${req.path} took ${handlingTime}ms`);
    });
    next();
  });

function calculateRequest(req , res , next){
    numberOfRequest++
    console.log(numberOfRequest);
    next()
    
}
app.use(calculateRequest)


app.get('/profile' , function(req , res , next){
    res.send('hello 1')
    next()
} )



app.listen(3000)