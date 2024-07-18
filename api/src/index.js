const express = require('express')

const app = express()


app.post('/api/service/hello', (req, res) => {
  return res.sendStatus(200)
})

app.post('/api/service/authorized', (req, res) => {
  if (req.get('User-Id')) {
    return res.sendStatus(200)
  }
  return res.sendStatus(500)
})

app.listen(3000, () => {
  console.log('Auth ouvindo na porta 3000')
})
