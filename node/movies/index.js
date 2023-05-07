const express = require('express');
const mongoose = require('mongoose');
const movieSeed = require('./seed/movies.seed');

const app = express();

require('./utils/db.js');

const PORT = 3000;
const server = express();

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/moviesdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a la base de datos establecida');
    movieSeed();
  })
  .catch(err => console.log('Error al conectarse a la base de datos: ', err));

app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: 'Película no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/movies/title/:title', async (req, res) => {
  try {
    const movie = await Movie.findOne({ title: req.params.title });
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: 'Película no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/movies/genre/:genre', async (req, res) => {
  try {
    const movies = await Movie.find({ genre: req.params.genre });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/movies/released-after-2010', async (req, res) => {
  try {
    const movies = await Movie.find({ year: { $gte: 2010 } });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

// const movieSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   director: { type: String, required: true },
//   year: { type: Number, required: true },
//   genre: { type: String, required: true },
// });

// const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

