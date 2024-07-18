const express = require('express')

const app = express()


app.post('/auth', (req, res) => {
  return res.status(200).json({
    jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
})

app.post('/validate', (req, res) => {
  if (req.get('Authorization')) {
    res.set('User-Id', '1231231231231')
    return res.sendStatus(200)
  }
  return res.sendStatus(500)
})

app.listen(3000, () => {
  console.log('API ouvindo na porta 3000')
})
