const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const db = require('./queries')

//app.listen(3000, () => console.log("kuuntelen"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("kuuntelen porttia " + port));

app.use(express.static("public"));
//app.use(express.json({limit: '1mb'}));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


const paikat = [
    {
        "paikka": "Helsinki",
        "arvostelu": "Kivaa oli",
        "longitude": "24.9384",
        "latitude": "60.1699"

    },
    {
      "paikka": "Levi",
      "arvostelu": "Hyvat laskusaat",
      "longitude": "24.8082",
      "latitude": "67.8040"
    }
]

//app.get('/api/paikat/vanha', function (request, response) {
//  response.send(paikat);
//})


//app.post('/api/arvostelu/vanha', function (request, response) {
//  console.log("Kayttajan arvostelu");
//  console.log(request.body);
//  paikat.push(request.body);
//  console.log(paikat);
//  response.send(200);
//})

app.get('/api/paikat', db.haePaikat)
app.post('/api/arvostelu', db.lisaaPaikka)
