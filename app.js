import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import { loadMovie, loadMovies } from "./importMovies.js";


function initApp(api) {
    const app = express();


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

app.get("/allMovies", async (req, res) => {
    const movies = await loadMovies();
    res.render("allMovies",{ movies });
  });
  
  app.get("/movies/:movieId", async (req, res) => {
    const movie = await loadMovie(req.params.movieId);
    res.render("movie", { movie });
  });
return app
}
  export default initApp