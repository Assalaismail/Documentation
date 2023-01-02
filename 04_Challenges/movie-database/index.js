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