const jwt = require('jsonwebtoken')

const user = {
    name : "amith",
    email : "amith@gmail.com",
    account_no : 3874878347387
}

// generate token using jwt 

const token = jwt.sign(user , 'secret');

// console.log(token);

// const ver = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW1pdGgiLCJlbWFpbCI6ImFtaXRoQGdtYWlsLmNvbSIsImFjY291bnRfbm8iOjM4NzQ4NzgzNDczODcsImlhdCI6MTcyMjY2NDE3MH0.3ynYh5_qK6A15hneclq4i3mBfXKX-dW4qnREEw2E6go' , 'secret')

// console.log(ver);
