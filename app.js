require('dotenv').config();
const express = require('express')
const hbs = require ('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


//Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Villa Pamela'
  })
})

app.get('/facilidades', (req, res) => {
  res.render('facilidades', {
    nombre: 'Villa Pamela'
  })
})

app.get('/reserve', (req, res) => {
  res.render('reserve', {
    nombre: 'Villa Pamela'
  })
})


app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
  })

app.listen( port, () => {
    console.log(`Ejemplo escucha el puerto desde http://localhost:${port}`)
})