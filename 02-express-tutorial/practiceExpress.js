const express = require('express')
const app = express()
const middleware = require('./practice-middleware.js')
const extraMiddleware = require('./extraChallengeMiddleware.js')

app.use(express.static('./new-public'))
app.use(middleware,extraMiddleware)

app.get('/sample', (req, res) => {
  res.send('<h2>This is Working</h2>')
})



app.listen(3000, ()=> {
  console.log('server is listening on port 3000...');
})