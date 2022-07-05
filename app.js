const express = require('express');
const mongoose = require('mongoose')

const morgan= require('morgan');
const { result } = require('lodash');
const blogRoutes=require('./routes/blogRoutes')
// express app
const app = express();
//connection to db

const dbURI = 'mongodb+srv://BloggIT:vyqnif-dyndoX-9gewzy@cluster0.limkl.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to the db')
        app.listen(3000)
    })
    .catch((err) => {
        console.log('not connected')
    })

// listen for requests
//app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'viewsForApp')

// middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
   res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});
app.use(blogRoutes)
 
// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});