const bcrypt = require('bcryptjs');

const axios = require('axios');

const db = require('../database/dbConfig')

const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  // implement user registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  try {
    const [id] = await db('users').insert(user)
    const addedUser = await db('users').where({ id })
    if (id) {
      res.status(200).json(addedUser)
    } else {
      res.status(500).json({ message: "Error in adding user to database" })
    }
  } catch(error) {
    res.status(400).json({ message: "user already registered, try logging in" })
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
