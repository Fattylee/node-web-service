const express = require('express');
const hbs = require('hbs');
const app = express();

hbs.registerPartials(__dirname +'/views/partials');
app.set('view engine', 'hbs');
app.use('/', express.static(__dirname + '/public'));

app.get('/home', (req, res) => {
  res.render('home.hbs', {year: new Date().getFullYear()});
});

app.get('/news', (req, res) => {
  res.render('news.hbs', {
    pageTitle: 'News Page',
    year: new Date().getFullYear(),
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    message: 'This is about page',
    body: {
      name:  'Abu Adnaan',
      age: 31,
      gender: 'male'
    },
    pageTitle: 'About page',
    year: new Date().getFullYear(),
  });
});

app.get('*', (req, res) => {
  res.render('404.hbs', {
    address: req.url.slice(1),
    pageTitle: '404 page',
    year: new Date().getFullYear()
  })
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Server running on port', port));