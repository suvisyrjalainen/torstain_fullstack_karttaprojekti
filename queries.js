const Pool = require('pg').Pool
const pool = new Pool({
  user: 'suvi',
  host: 'localhost',
  database: 'torstain_karttaprojekti_api',
  password: 'password',
  port: 5432,
})

const haePaikat = (request, response) => {
  pool.query('SELECT * FROM torstain_paikat ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const lisaaPaikka = (request, response) => {
  const { paikka, arvostelu, longitude, latitude } = request.body
  console.log(request.body)
  pool.query('INSERT INTO torstain_paikat (paikka, arvostelu, longitude, latitude) VALUES ($1, $2, $3, $4)', [paikka, arvostelu, longitude, latitude], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Paikka lisatty`)
  })
}

module.exports = {
  haePaikat,
  lisaaPaikka,
}
