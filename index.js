const express = require('express')
const app = express()
const port = 3500

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(port, () => {
  console.log(`Acesse oendereço http://lolcalhost:${port}' para ver o site.`)
}) 