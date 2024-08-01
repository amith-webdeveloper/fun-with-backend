const express = require('express')
const app = express()
app.use(express.json())
const z = require('zod')

// const schema = z.array(z.number()) 

const schema = z.object({
    email: z.string(),
    password: z.string().min(8),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})

app.post('/health-checkup' ,  function(req , res){
    const validate = req.body;
    const response = schema.safeParse(validate)

    if(!response.success){
       res.status(411).json({
        msg:'invalid input'
       })
    }
    else{
        res.send(`successfully logged! `)

    }

})

app.listen(3000)