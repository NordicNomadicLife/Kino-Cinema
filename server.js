import express from 'express';

const app = express();
const PORT = 5080;

// Middleware för att serva statiska filer
app.use(express.static('public'));

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.render('index', { title: 'Kino', welcomeMessage: 'Välkommen till Kino!' });
  });
  