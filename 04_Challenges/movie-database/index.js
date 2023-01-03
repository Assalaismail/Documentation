const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`ok!`)
})

app.get('/', (req, res) => {
    res.send('Hello');
  });

app.get('/test', (req, res) => {
    res.send({
        status:200, 
        message:"ok"
    });
})
app.get('/time', (req, res) => {
    const time = new Date();
    const specifictime = `${time.getHours()}:${time.getSeconds()}`;
    const time1 = {
        status : 200,
        message : specifictime
    }
    res.send(time1);
})
app.get('/hello/<ID>', (req, res) => {
    const message = `Hello, ${req.params.id}`
    const final = {
        status: 200,
        message: message
    }
    res.send(final)
})

app.get('/search', (req, res) => {
    if(req.query.s){
        data = req.query.s;
        final = {
            status: 200,
            message: "ok",
            data: data
        }
    } else {
        final = {
            status: 500,
            error: true,
            message: "you have to provide a search"
        }
    }
    res.send(final);
})
