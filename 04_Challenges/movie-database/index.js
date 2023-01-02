const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`ok!`)
})

app.get('/', (request, response) => {
    response.send('Hello');
  });

app.get('/test', (request, response) => {
    response.send({
        status:200, 
        message:"ok"
    });
})
app.get('/time', (request, response) => {
    const time = new Date();
    const specifictime = `${time.getHours()}:${time.getSeconds()}`;
    const time1 = {
        status : 200,
        message : specifictime
    }
    response.send(time1);
})
app.get('/hello/<ID>', (request, response) => {
    const message = `Hello, ${request.params.id}`
    const final = {
        status: 200,
        message: message
    }
    response.send(final)
})

app.get('/search', (request, response) => {
    if(request.query.s){
        data = request.query.s;
        final = {
            status: 200,
            message: "ok",
            data: data
        }
    } else {
        final = {
            status: 500,
            message: "you have to provide a search",
            error: true
        }
    }
    response.send(final);
})