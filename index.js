require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./config.js');
const app = express();
