require('./config/database').connect()
require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const morgan = require('morgan')
const blogRoutes = require('./routes/blogRoutes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use((req, res, next) => {
  res.locals.path = req.path
  next()
})

app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.use(blogRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})
app.listen(8080, () => {
  console.log(`listehing at ${port}`)
})
