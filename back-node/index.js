
const express = require('express')
const app = express()
const port = 3000;
let cors = require('cors')
let product = require('./product.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/product', function(req, res) {
      res.json(product);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
