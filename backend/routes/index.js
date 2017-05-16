var express = require('express');
var router = express.Router();

var Pirateorninja = require('../models/pirateorninja');

router.post('/', function(req,res,next){

  Pirateorninja.findOne({}, function(err,pon){
    console.log('inside findOne');
    if (err) {
      console.log('Database Error:', err);
    }

    console.log("findOne", pon);
    console.log(pon.pirate);
    console.log(pon.ninja);

  })


  console.log('inside / in backend');
  console.log(req.body);
  console.log("pirates ", req.body.pirate, " ninjas ", req.body.ninja);
  //var returnres = "you sent " + req.body.test;
  res.send("from backend: pirates ", req.body.pirate, " ninjas ", req.body.ninja);
})


router.patch('/pirate', function(req,res,next){

  // report.date = req.body.date || report.date;
  //      report.vitals = req.body.vitals || report.vitals;


  Pirateorninja.findOne({}, function(err,pon){
    console.log('inside findOne');
    if (err) {
      console.log('Database Error:', err);
    }

    pon.pirate = pon.pirate + 1;
    console.log(pon);

      pon.save(function(err, pon) {
       if (err) console.log(err);
       res.json({
         status: 'update',
         updated_fight: pon
       });
     });

  });

});


router.patch('/ninja', function(req,res,next){

  // report.date = req.body.date || report.date;
  //      report.vitals = req.body.vitals || report.vitals;


  Pirateorninja.findOne({}, function(err,pon){
    console.log('inside findOne');
    if (err) {
      console.log('Database Error:', err);
    }

    pon.ninja = pon.ninja + 1;
    console.log(pon);
    console.log(pon.ninja);

      pon.save(function(err, pon) {
       if (err) console.log(err);
       res.json({
         status: 'update',
         updated_fight: pon
       });
     });

  });

});











module.exports = router;



// Race.find({}, function(err, races) {
//     if (err) {
//       console.log('Database Error:', err);
//     }
//
//     console.log('Races: ', races);
//
//     res.render('races/index', {
//       races: races
//     });
//   });
