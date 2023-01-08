const express = require('express')
//const router = express.Router()
const port = 3000
const app= express()
const MongoClient= require('mongodb').MongoClient;
const bodyParser= require('body-parser');
const db = require('./db.js');


app.listen(port, () => {
  console.log(`ok!`)
})

app.get("/", (req, res) => {
    res.send('Hello');
   });
//step12

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database) => 
{  if (err) return console.log(err) 
     require(app, database);})

module.exports = function(app, db) { 
     const collection =   app.post('/movies', (req, res) => { 
            db.collection('movies').insert(movies, (err, result) => 
             {      if (err) {        
                 res.send({ 'error': 'An error has occurred' });       } 
                 else {    
        res.send(result.ops[0]);      }    });  });};



app.post("/", (req, res) => {
  res.send('okii');
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
            message: `The movie ${req.params.id} does not exist`
        }
    }
    res.send(result);
})

app.post("/movies/add", (req,res) => {
    const movie = {
      title : req.query.title,
      year : req.query.year,
      rating : req.query.rating
    };
    
    if ((movie.title) == undefined || (movie.year == undefined) || 
    (movie.year.toString().length !== 4) || (isNaN(movie.year))){
        res.send({status:403,
                  error:true, 
                  message:'you cannot create a movie without providing a title and a year'});
        console.log(res.send)
      }
      if(movie.rating == undefined) {
        movie.rating = 4;
      }
      else{
        movies.push(movie);
        res.send(movie);
        res.send({status: 200,
                  message: 'ok', 
                  data: movies})
      }
});

app.delete("/movies/delete/:id", (req,res) => {
    const id = parseInt(req.params.id);
    if (id<0 || id>movies.length){
       res.send({status:404, 
                 error:true, 
                 message:`the movie ${id} does not exist`})}
    
    else{
        movies.splice(id,1);
        res.send(movies);
    }
})

app.put("/movies/update/:id(\\d+)", (req,res) => {
    var id = parseInt(req.params.id);
    var title = req.query.title;
    var year = req.query.year;
    var rating = req.query.rating;
    if(id <movies.length){
        if(title===undefined || title===""){
          title=movies[id].title;
        }
        if(year === undefined || year === "" || !(/^\d{4}$/).test(year)){
        year=movies[id].year;
        }
        if (rating === undefined || rating === "") {
          rating = movies[id].rating;  }
        movies[id] = {title, year,rating};
      
        res.status(200).send(msg={
                                  data:movies
        });
      }
      else{
        res.status(404).send(msg={
                                   error: true,
                                   message: `the movie ${id} does not exist`,
          });
      }
    })

