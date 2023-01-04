const express = require('express')
//const router = express.Router()
const port = 3000
const app= express()

app.listen(port, () => {
  console.log(`ok!`)
})

app.get("/", (req, res) => {
    res.send('Hello');
  });

app.get("/test", (req, res) => {
    res.send({
        status:200, 
        message:"ok"
    });
})
app.get("/time", (req, res) => {
    const time = new Date();
    const specifictime = `${time.getHours()}:${time.getSeconds()}`;
    const time1 = {
        status : 200,
        message : specifictime
    }
    res.send(time1);
})
app.get("/hello/:id", (req, res) => {
    const message = `Hello, ${req.params.id}`
    const final = {
        status: 200,
        message: message
    }
    res.send(final)
})

app.get("/search", (req, res) => {
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

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]


app.get("/movies/create", (req, res) => {
    
})

app.get("/movies/read", (req, res) => {
    res.send({
        status: 200, 
        movie: movies
    })
})

app.get("/movies/update", (req, res) => {

})

app.get("/movies/delete", (req, res) => {

})

app.get("/movies/read/by-date", (req, res) => {
    const arr = [...movies];
    const sorted = arr.sort((a, b) => {  
        if (a.year < b.year){
            return -1;}
        else if (a.year > b.year){ 
            return 1;}
            else{
        return 0;}
    });
      const result = {
        status: 200,
        data: arr
    }
    res.send(result);
})

app.get("/movies/read/by-rating", (req, res) => {
    const arr = [...movies];
    arr.sort(function(a, b) {
        if(a.rating < b.rating){
           return 1;}
        else if (a.rating > b.rating){
             return -1;}
             else{
        return 0;}
    });
    const result = {
        status: 200, 
        data: arr
    }
    res.send(result);
})
app.get("/movies/read/by-title", (req, res) => {
    const arr = [...movies];
    arr.sort(function(a, b) {
        if(a.title < b.title){
           return 1;}
        else if (a.title > b.title){
             return -1;}
             else{
        return 0;}
    });
    const result = {
        status: 200, 
        data: arr
    }
    res.send(result);
})

app.get("/movies/read/id/:id", (req, res) => {
    if(req.params.id >= 0 && req.params.id<movies.length) {
        result = {
            status: 200,
            data: movies[req.params.id]
        }
    } 
    else {
        result = {
            status: 404,
            error: true,
            message: `The movie${req.params.id} does not exist`
        }
    }
    res.send(result);
})
    
