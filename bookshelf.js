import bookshelf from 'bookshelf';
let knex = require('./knex.js');

export default bookshelf(knex);
