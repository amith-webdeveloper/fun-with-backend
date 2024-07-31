console.log("exploring backend stuff");

const express = require('express')
const app = express()
app.use(express.json())

const patients = [{
    name: "john",
    kidneys:[{
        healthy:false
    }]
}]

app.get('/' , function(req , res){
    const johnKidneys = patients[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0 ; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})


app.post('/' , function(req , res){
    let isHealthy = req.body.ishealthy;
    patients[0].kidneys.push({
        healthy : isHealthy,
    }),
    res.json({
        msg:"done"
    })
})


app.put('/' , function(req , res){
    for(let i = 0; i<patients[0].kidneys.length; i++){
        patients[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete('/' , function(req , res){
  const newKidneys = []
  for(let i = 0; i<patients[0].kidneys.length; i++){
    if(patients[0].kidneys[i].healthy){
        newKidneys.push({
            healthy:true
        })
    }
  }
  patients[0].kidneys = newKidneys;
  res.json({msg : "done"})
})

app.listen(3000)