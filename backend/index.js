const express = require('express');
const cors = require('cors');
const { Users } = require('./users');

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

console.log(Users);

app.get('/', (req, res) => {
  const { query } = req.query;

  const keys = ['first_name', 'last_name', 'email'];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  query ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});

app.listen(3030, () => {
  console.log('API is working');
});
