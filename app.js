const express = require('express')
const app = express()
const port = 8002

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to Team 3.')
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})