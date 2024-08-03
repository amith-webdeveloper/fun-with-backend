const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod')

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6)

function signJwt(username, password) {
  // Your code here
  const usernameResponse = emailSchema.safeParse(username)
  const passwordResponse = passwordSchema.safeParse(password)
  if(!usernameResponse.success || !passwordResponse.success){
      console.log(null);
      
  }
  else{
  const signature = jwt.sign({username} , jwtPassword)
  console.log(signature);
  }
  
}

signJwt('wwee@gmail.com' , '2323kjjfjf')
  