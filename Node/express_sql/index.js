const express = require('express')
const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'sql11.freemysqlhosting.net',
  user: 'sql11697600',
  password: 'NfXwhXyMs1',
  database: 'sql11697600'
})

const app = express()
const port = 3000

app.get('/', (req, res) => {
  
  connection.query('SELECT * FROM `test_table`',function (err, results, fields) {
    console.log(err);
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  })

  res.json({
    "value 1":"1",
    "value 2":"Stoinost"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
