const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    "value 1":"1",
    "value 2":"Stoinost"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
