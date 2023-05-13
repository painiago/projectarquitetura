require('dotenv').config();
const express = require('express');
const cors = require('cors');
const faunadb = require('faunadb');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_KEY,
  domain: 'db.fauna.com',
});



app.post('/enviarDados', (req, res) => {
  const { nome, email, data, horario } = req.body;
  client.query(
    q.Create(
      q.Collection('agendamento'),
      { data: { nome, email, data, horario } }
    )
  )
  .then((ret) => {
    console.log(ret);
    res.status(200).json({ message: 'Dados enviados com sucesso!' });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ error: 'Erro ao enviar os dados.' });
  });
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando corretamente.');
});
app.listen(port, () => {
  console.log(`Servidor ouvindo em http://localhost:${port}`);
});
