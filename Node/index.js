const express = require('express')
const app = express()
const port = 3000



// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    "value 1":"1",
    "value 2":"Stoinost",
    "value 3": "GET",
  })
})

app.post('/',async (req, res)=>{
  console.log(req.body);
  res.json({
    "value 1":"1",
    "value 2":"Stoinost",
    "value 3": "Post",
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
