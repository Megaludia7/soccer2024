const express = require('express')
const bodyParser = require('body-parser')
// corsポリシーに抵触するため、その対策としてcorsを利用する
const cors = require('cors')
const mysql = require("mysql")

const app = express();
app.use(bodyParser.json());
app.use(cors())

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "worldeleven"
})

// con.connect((err) => {
//   if (err) throw err
//   console.log('connected')
// })
con.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL: ", error);
    return;
  }
  console.log("Success connecting to MySQL");
});


app.get('/gettest', function(req, res) {
  res.send({
    message: 'Hello wordewld!'
  })
  console.log("get method done")
})

app.post('/test', function(req, res) {
    res.send({
      message: req.body.text
    })
  })

app.listen(process.env.PORT || 3000) //これ何？
