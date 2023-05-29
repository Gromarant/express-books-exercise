const express = require('express');
const app = express();
const port = 3000;
const books = require('./data/books.json');

app.get('/all', (req, res) => {
  res.status(200).send(books);
})

app.get('/first', (req, res) => {
  res.status(200).send(books[0]);
})

app.get('/last', (req, res) => {
  res.status(200).send(books[books.length -1]);
})

app.get('/middle', (req, res) => {
  res.status(200).send(books[Math.floor(books.length/2)]);
})

app.get('/author/dante-alighieri', (req, res) => {
  const bookDante = books.find(book => book.author === "Dante Alighieri").title;
  res.status(200).send(res.json(bookDante));
})

app.get('/country/charles-dickens', (req, res) => {
  const Charles = books.find(book => book.author === "Charles Dickens").country;
  res.status(200).send(res.json(Charles));
})

app.get('/year&pages/cervantes', (req, res) => {
  const cervantes = books.find(book => book.author === "Miguel de Cervantes");
  res.status(200).json({
    pages: cervantes.pages,
    year: cervantes.year,
  });
})

app.get('/country/count/spain', (req, res) => {
  const spain = books.reduce((total, curr) => curr.country === 'Spain' ? total + 1 : total, 0);
  res.status(200).send(res.json(spain));
})

app.get('/country/at-least/germany', (req, res) => {
  const atLeastGermany = books.some(book => book.country === 'Germany');
  res.status(200).send(res.json(atLeastGermany));
})

app.get('/pages/all-greater/200', (req, res) => {
  const morethan200 = books.every(book => book.pages > 200);
  res.status(200).send(res.json(morethan200));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})