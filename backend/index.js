const express = require('express')
const app = express()
const port = 3000  
const cats = require ('./routes/cat.routes');

//this is the root route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// this is the route for the cats 
app.use('/', cats);
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// colon marks the parameter
