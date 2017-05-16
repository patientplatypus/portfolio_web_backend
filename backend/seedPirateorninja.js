require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.db_conn);

var Pirateorninja = require('./models/pirateorninja');

var fightData = [
  {
    pirate:1,
    ninja:0
  }
];

Pirateorninja.remove({}, function(err, removed) {
  if (err) {
    console.log('Database Error: ', err);
  }

  Pirateorninja.create(fightData, function(err, fights) {
    if (err) {
      console.log('Database Error: ', err);
    }

    console.log('Fights inserted: ', fights);
    process.exit();
  });
});
