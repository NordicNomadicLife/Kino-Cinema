import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import initApp from './app.js';
import { loadMovie, loadMovies } from './importMovies.js';

const api={
  loadMovie,
  loadMovies,
};

const app = initApp(api);
// Start server
app.listen(5080);