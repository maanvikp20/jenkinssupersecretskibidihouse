const express = require('express')
const path = require('path')
const app = express()


// Middleware to serve static files ()
// Middleware is a function that sits between the request from the client and the response from the server.
// Think of it as a gatekeeper or pipeline every request passes through a chain of middleware functions before reaching the final route


app.use(express.static(path.join(__dirname, 'public')))

app.get('/puzzle1',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public', 'puzzle1.html'))
})

app.get('/3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'puzzle2.html'))
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000/puzzle1`);
});