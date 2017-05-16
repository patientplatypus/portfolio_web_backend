var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  pirate: {type: Number, required: true },
  ninja: {type: Number, required: true }
});

var Pirateorninja = mongoose.model('Pirateorninja', schema);

module.exports = Pirateorninja;
