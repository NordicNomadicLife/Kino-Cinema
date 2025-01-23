import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import { loadMovie, loadMovies } from "./importMovies.js";

const app = express();
const PORT = 5080;

// Ad Handlebars as templateengine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.use("/static", express.static("./static"));

// Route for homepage
app.get('/', (req, res) => {
    res.render('index', 
      { title: 'Kino Cinema', 
        welcomeMessage: 'Välkommen till Kino!' });
});

// Route for moviespage
app.get('/moviesPage', (req, res) => {
    res.render('moviesPage', 
      { title: 'Film sida', });
});

/* // Route for Allmovies
app.get('/allMovies', (req, res) => {
  res.render('allMovies', 
    { title: 'Film sida', });
}); */



app.get("/allMovies", async (req, res) => {
    const movies = await loadMovies();
    res.render("allMovies",{ title: "Alla filmer", movies });
  });
  
  app.get("/movies/:movieId", async (req, res) => {
    const movie = await loadMovie(req.params.movieId);
    res.render("movie", { movie });
  });

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});