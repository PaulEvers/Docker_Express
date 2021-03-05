const app = require('express')();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Docker is easy!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})