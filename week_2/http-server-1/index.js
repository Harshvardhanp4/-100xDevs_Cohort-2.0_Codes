const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => {
    
    res.send('<b>Yo buddy!</b>')
})

app.post('/conversations', (req, res) => {

     console.log(req.headers["authorization"])   

    res.send({
        msg: "2 + 2 = 4"
    }
    )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})