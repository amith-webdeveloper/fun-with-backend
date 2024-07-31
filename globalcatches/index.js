const express = require('express')
const app = express()
app.use(express.json())

app.post('/' ,  function(req , res){
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send(`you have ${kidneysLength} ${kidneys}`)

})

// global catches

// this send err msg if there is any exception in above code

app.use(function(err , req , res , next){
    res.json({
        msg:"Something is happened in server we soon fix that!"
    })
})



app.listen(3000)
