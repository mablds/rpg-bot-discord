const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Players = new Schema({
  players: []
})

module.exports = mongoose.model('Player', Players);