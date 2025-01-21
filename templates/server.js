import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';

const app = express();
const PORT = 5080;

// Ad Handlebars as templateengine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");



// Route for homepage
app.get('/', (req, res) => {
    res.render('index', { title: 'Kino Cinema', welcomeMessage: 'Välkommen till Kino!' });
});

// Route for about
app.get('/about', (req, res) => {
    res.render('about', { title: 'Om Oss', description: 'Vi är en fantastisk biograf!' });
});



app.get("/", async (req, res) => {
    const movies = await loadMovies();
    res.render("home", { movies });
  });
  
  app.get("/movies/:movieId", async (req, res) => {
    const movie = await loadMovie(req.params.movieId);
    res.render("movie", { movie });
  });

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
