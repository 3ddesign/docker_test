const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const {Pool} = require('pg');
const pgClient = newPool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDataBase,
    password: keys.pgPassword,
    port: keys.pgPort
});

pgClient.on('error', () => console.log('lost connection'));

pgClient.query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(err => console.log(err));