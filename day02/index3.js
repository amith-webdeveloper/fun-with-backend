const express = require('express')
const app = express()
app.use(express.json())

app.get('/' ,  function(req , res){
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send(`you have ${kidneysLength} ${kidneys}`)

})



app.listen(3000)
